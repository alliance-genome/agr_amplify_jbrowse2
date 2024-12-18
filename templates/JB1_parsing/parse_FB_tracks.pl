#!/usr/bin/perl
use strict;
use warnings;
use local::lib;

=pod

Tricky usage issue: the SGD track IDs have a '.' in their names but
Config::Simple doesn't like that. The easist fix is to

  % s/\[tracks\./[tracks_/

Additionally, Config::Simple doesn't like the embedded javascript
function calls that JBrowse supports, so those have to be deleted too.

encoded commas (using in track labels) as %2C and removed <a target= 
from categories and chanced / to , in categories

=cut

use Config::Simple;
use JSON;
use Data::Dumper;

my %tracks;
my $trackID;

my %Config = ();
Config::Simple->import_from('FB_tracks.conf.txt', \%Config) or die $Config::Simple->error();


#for my $key (keys %Config) {
#    next unless $key;
    # warn $key;
    #warn $Config{$key};
    #}

#die;
#warn Dumper(%Config);
#die;


my %unflat;
for my $key (keys %Config) {
	#	warn $key;
	#warn $Config{$key};
    next if ($key =~ /\{/);
    next if ($Config{$key} =~ /\{/);
    next if ($key =~ /onClick/);
    if ($key =~ /(.+)\.([^.]+)/) {
	my $one = $1;
	my $two = $2;
	die unless ($one =~ s/tracks_//) ;
	#	warn $one;
	#warn $two;
	if ($one =~ /(.+)\.([^.]+)/) {
            $unflat{$1}{$2}{$two} = $Config{$key};
	    #	    if ($1 eq 'insulator_1' and $2 eq 'style' and $two eq 'label') {
	    #    warn exists $unflat{$1}{$2}{$two};
	    #	die;
	    #}
	}
	else {
	    $unflat{$one}{$two} = $Config{$key};
        }
	#warn $1;
	#warn $2;
    }
    #warn Dumper (%unflat);
    #die;
}

#warn Dumper(%unflat);
#die;

for my $key (keys %unflat) {
	$trackID = $key ; #$unflat{$key}{label};
	#	$tracks{$trackID}{'urlTemplate'} = $unflat{$key}{'urlTemplate'};
	#$tracks{$trackID}{'storeClass'} = $unflat{$key}{'storeClass'};
	$tracks{$trackID}{'color'}      = $unflat{$key}{'style'}{'color'};
	$tracks{$trackID}{'color2'}     = $unflat{$key}{'style'}{'borderColor'};
	$tracks{$trackID}{'height'}     = $unflat{$key}{'style'}{'height'};
	$tracks{$trackID}{'key'}        = $unflat{$key}{'key'};
	if (ref $unflat{$key}{'category'} eq 'ARRAY') {
            $tracks{$trackID}{'category'}   = $unflat{$key}{'category'};
        } else {
	    my @temp;
	    $temp[0] = $unflat{$key}{'category'};
            $tracks{$trackID}{'category'}   = \@temp;
	}
	if (exists $unflat{$key}{'style'}{'label'} and !$unflat{$key}{'style'}{'label'}) {
            $tracks{$trackID}{'featurelabel'} = 'false';
	}
}


#load trackList.json and pull out track config data
my $blob;
{
        local $/ = undef;
        my $file = "FB_trackList.json"; 
        open TL, "<$file" or die "couldn't open $file: $!";
        $blob = <TL>;
        close TL;
}
my $json = JSON->new->decode($blob);

for my $track (@{$$json{'tracks'}}) {
    $trackID                         = $$track{'label'};
    $tracks{$trackID}{'urlTemplate'} = $$track{'urlTemplate'};
    $tracks{$trackID}{'storeClass'}  = $$track{'storeClass'};
    $tracks{$trackID}{'shortInfo'}   = $$track{'metadata'}{'shortInfo'};
    $tracks{$trackID}{'trackLegend'} = $$track{'metadata'}{'trackLegend'};
    #warn $$track{'key'};
    #warn $tracks{$trackID}{'key'};
    $tracks{$trackID}{'key'}         ||= exists $$track{'key'} ? $$track{'key'} : $$track{'label'};
    #arn $tracks{$trackID}{'key'};
    #arn $trackID;
    #die;
}

for my $id (keys %tracks) {
    next unless exists $tracks{$id}{'urlTemplate'};

    my $urlTemplate;
    $tracks{$id}{'urlTemplate'} =~ s/tracks/https:\/\/flybase-jbrowse.s3.amazonaws.com\/tracks/;

    my $config; 

    my $label = exists $tracks{$id}{'key'} ? $tracks{$id}{'key'} : $id;

    my $metadata = '';
    if (defined $tracks{$id}{'shortInfo'} or defined $tracks{$id}{'trackLegend'} ) {
        my @meta;
	if (defined $tracks{$id}{'shortInfo'} ) {
            push @meta, '"shortInfo" : "' . $tracks{$id}{'shortInfo'} .'"';
	}
	if (defined $tracks{$id}{'trackLegend'} ) {
            push @meta, '"trackLegend" : "' . $tracks{$id}{'trackLegend'} . "'";
	}
	my $values = join(',', @meta);
	$metadata=qq|"metadata" : {
            $values
       },|;
    }

    my $renderer = '';
    if (defined $tracks{$id}{'color'} 
	            or defined $tracks{$id}{'color2'}
		    or defined $tracks{$id}{'height'}
                    or defined $tracks{$id}{'featurelabel'}) {

	my @styles;
	if (defined $tracks{$id}{'color'}) {
            push @styles, '"color1" : "' . $tracks{$id}{'color'} .'"';
	}
	if (defined $tracks{$id}{'height'}) {
            push @styles, '"height" : '. $tracks{$id}{'height'};
	}
	if (defined $tracks{$id}{'color2'}) {
            push @styles, '"color2" : "' . $tracks{$id}{'color2'} .'"';
	}
	if (defined $tracks{$id}{'featurelabel'}) {
            push @styles, '"showLabels" : false';
	}
	my $styles = join(",", @styles);
        $renderer=qq|"renderer" : {
	     $styles
         },|;
    }

    my $cat_list = join('","', @{$tracks{$id}{category}}) if exists $tracks{$id}{category};
    my $cat_string = exists $tracks{$id}{category} ? "\"category\" : [ \"$cat_list\" ]," : '"category" : [ "Other FlyBase tracks" ],';
    $cat_string =~ s/%2C/,/g;
    $label      =~ s/%2C/,/g;

    if ( $tracks{$id}{'storeClass'} =~ /VCFTabix/ ) {
$config=qq|   {
      "type": "VariantTrack",
      "trackId": "FB_$id",
      "name": "$label",
      "assemblyNames": [
        "Drosophila_melanogaster"
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
      "displays": [
        {
          "type": "LinearVariantDisplay",
	  $renderer
          "displayId": "FB_$id-LinearVariantDisplay"
        },
        {
          "type": "ChordVariantDisplay",
          "displayId": "FB_$id-ChordVariantDisplay"
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
         "Drosophila_melanogaster"
      ],
      $cat_string
      "trackId" : "FB_$id"
   },
|;

    } elsif ($tracks{$id}{'storeClass'} =~ /NCList/ ) {
       $config = qq|    {
      "type": "FeatureTrack",
      "trackId": "FB_$id",
      "name": "$label",
      "assemblyNames": [
        "Drosophila_melanogaster"
      ],
      $cat_string
      $metadata
      "adapter": {
        "type": "NCListAdapter",
        "rootUrlTemplate": {
          "locationType": "UriLocation",
          "uri": "$tracks{$id}{'urlTemplate'}"
        }
      },
      "displays": [
        {
          "type": "LinearBasicDisplay",
	  $renderer
          "displayId": "FB_$id-LinearBasicDisplay"
        },
        {
          "type": "LinearArcDisplay",
          "displayId": "FB_$id-LinearArcDisplay"
        }
      ]
    },
|;
    }
    next unless $config;
    print $config;
}
