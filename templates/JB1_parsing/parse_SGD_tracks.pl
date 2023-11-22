#!/usr/bin/perl
use strict;
use warnings;

use Text::CSV qw( csv );
use Config::Simple;
use JSON;
use Data::Dumper;

my $aoh = csv (in => "yeastMetaData.csv",
               headers => "auto");   # as array of hash

       #warn Dumper($aoh);
       #for my $hash (@$aoh) {
       #  print "$$hash{category}\n";
       #}
       #die;

my %tracks;
my $trackID;

my %Config = ();
Config::Simple->import_from($ARGV[0], \%Config) or die $Config::Simple->error();

warn Dumper(%Config);

my %unflat;
for my $key (keys %Config) {
	warn $key;
	warn $Config{$key};
    if ($key =~ /(.+)\.([^.]+)/) {
        $unflat{$1}{$2} = $Config{$key};
	warn $1;
	warn $2;
    }
}

warn Dumper(%unflat);
for my $key (keys %unflat) {
	$trackID = $unflat{$key}{key};
	$tracks{$trackID}{'urlTemplate'} = $unflat{$key}{'urlTemplate'};
	$tracks{$trackID}{'storeClass'} = $unflat{$key}{'storeClass'};
}

warn Dumper($tracks{'BC187_indel_V64'});

#load trackList.json and pull out track config data
my $blob;
{
        local $/ = undef;
        open TL, "<SGD_trackList.json" or die "couldn't open combined.json: $!";
        $blob = <TL>;
        close TL;
}
my $json = JSON->new->decode($blob);

for my $track (@{$$json{'tracks'}}) {
    $trackID                         = $$track{'key'};
    $tracks{$trackID}{'urlTemplate'} = $$track{'urlTemplate'};
    $tracks{$trackID}{'storeClass'}  = $$track{'storeClass'};
    $tracks{$trackID}{'label'}       = $$track{'label'};
}

for my $hash (@$aoh) {
    if (exists $tracks{$$hash{key}}) {
        for my $key (keys %{$hash}) {
		#warn "$key, $$ " and die;
		#		warn $key;
		#warn $$hash{'key'}{$key};
            $tracks{$$hash{key}}{$key} = $$hash{$key};
        }
    }
}

for my $id (keys %tracks) {
    my $config; 

    if ($tracks{$id}{'urlTemplate'} =~ /\.\./) {
         $tracks{$id}{'urlTemplate'} =~ s/\.\./\/SGDData/;
    } else {
         $tracks{$id}{'urlTemplate'} = '/SGDJBrowse/'.$tracks{$id}{'urlTemplate'};
    }

    my $label = exists $tracks{$id}{'label'} ? $tracks{$id}{'label'} : $id;

    my $cat_string = exists $tracks{$id}{category} ? "\"category\" : [ \"$tracks{$id}{category}\" ]," : '"category" : [ "Other SGD tracks" ],';


    my $meta_string = exists $tracks{$id}{first_author} 
    ? qq|"metadata" : {
        "pmid" : "$tracks{$id}{pmid}",
        "first_author" : "$tracks{$id}{first_author}",
        "lab_pi" : "$tracks{$id}{lab_pi}",
        "lab" : "$tracks{$id}{lab}",
        "year" : "$tracks{$id}{year}",
        "dataset_description" : "$tracks{$id}{dataset_description}",
        "experiment_description" : "$tracks{$id}{experiment_description}",
        "assay_term_id" : "$tracks{$id}{assay_term_id}",
	"assay_term_name" : "$tracks{$id}{assay_term_name}",
        "biosample_id" : "$tracks{$id}{biosample_id}",
        "biosample_term_name" : "$tracks{$id}{biosample_term_name}",
        "strain_background" : "$tracks{$id}{strain_background}",
        "experiment_dbxref" : "$tracks{$id}{experiment_dbxref}",
        "datafile_name" : "$tracks{$id}{datafile_name}",
        "gbrowse_category" : "$tracks{$id}{gbrowse_category}",
        "old_category" : "$tracks{$id}{old_category}"
      },
|
    : '';

    if ( $tracks{$id}{'storeClass'} =~ /VCFTabix/ ) {
$config=qq|   {
      "type": "VariantTrack",
      "trackId": "SGD_$id",
      "name": "$label",
      "assemblyNames": [
        "Saccharomyces_cerevisiae"
      ],
      $cat_string
      "adapter": {
        "type": "VcfTabixAdapter",
        "vcfGzLocation": {
          "locationType": "UriLocation",
          "uri": "$tracks{$id}{'urlTemplate'}"
        },
        "index": {
          "location": {
            "locationType": "UriLocation",
            "uri": "$tracks{$id}{'urlTemplate'}.tbi"
          }
        }
      },
      $meta_string
      "displays": [
        {
          "type": "LinearVariantDisplay",
          "displayId": "SGD_$id-LinearVariantDisplay"
        },
        {
          "type": "ChordVariantDisplay",
          "displayId": "SGD_$id-ChordVariantDisplay"
        }
      ]
    },
|;
    } elsif ($tracks{$id}{'storeClass'} =~ /MultiBigWig/) {
       warn "MultiBigWig not supported yet";
       next;
    } elsif ( $tracks{$id}{'storeClass'} =~ /BigWig/ ) {
       $config = qq|    {
      "name": "$label",
      "type" : "QuantitativeTrack",
      "adapter" : {
         "bigWigLocation" : {
            "uri" : "$tracks{$id}{'urlTemplate'}",
            "locationType" : "UriLocation"
         },
         "type" : "BigWigAdapter"
      },
      "assemblyNames" : [
         "Saccharomyces_cerevisiae"
      ],
      $cat_string
      $meta_string
      "trackId" : "SGD_$id"
   },
|;

    } elsif ($tracks{$id}{'storeClass'} =~ /NCList/ ) {
       $config = qq|    {
      "type": "FeatureTrack",
      "trackId": "SGD_$id",
      "name": "$label",
      "assemblyNames": [
        "Saccharomyces_cerevisiae"
      ],
      $cat_string
      "adapter": {
        "type": "NCListAdapter",
        "rootUrlTemplate": {
          "locationType": "UriLocation",
          "uri": "$tracks{$id}{'urlTemplate'}"
        }
      },
      $meta_string
      "displays": [
        {
          "type": "LinearBasicDisplay",
          "displayId": "SGD_$id-LinearBasicDisplay"
        },
        {
          "type": "LinearArcDisplay",
          "displayId": "SGD_$id-LinearArcDisplay"
        }
      ]
    },
|;
    }
    print $config;
}
