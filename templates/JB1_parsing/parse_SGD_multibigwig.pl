#!/usr/bin/perl
use strict;
use warnings;

use Text::CSV qw( csv );
use Config::Simple;
use JSON;
use Data::Dumper;

my $JB1_GIT = "/Users/cain/git/agr_jbrowse_sgd/jbrowse/data/";

my $aoh = csv (in => $JB1_GIT."yeastMetaData.csv",
               headers => "auto");   # as array of hash

       #warn Dumper($aoh);
       #for my $hash (@$aoh) {
       #  print "$$hash{category}\n";
       #}
       #die;

my %tracks;
my $trackID;

#load trackList.json and pull out track config data
my $blob;
{
        local $/ = undef;
        open TL, "<".$JB1_GIT."trackList.json" or die "couldn't open combined.json: $!";
        $blob = <TL>;
        close TL;
}
my $json = JSON->new->decode($blob);

for my $track (@{$$json{'tracks'}}) {
	#$trackID                         = $$track{'key'};
    next unless $$track{'storeClass'} eq 'MultiBigWig/Store/SeqFeature/MultiBigWig';
    my $label                        = $$track{'label'};
    $tracks{$label}{'urlTemplates'} = $$track{'urlTemplates'};
}

for my $hash (@$aoh) {
    if (exists $tracks{$$hash{label}}) {
        for my $label (keys %{$hash}) {
            $tracks{$$hash{label}}{$label} = $$hash{$label};
        }
    }
}

for my $id (keys %tracks) {
	#in this context the id is the track label
    my $config; 

    if ($tracks{$id}{'urlTemplate'} =~ /\.\./) {
         $tracks{$id}{'urlTemplate'} =~ s/\.\./\/SGDData/;
    } else {
         $tracks{$id}{'urlTemplate'} = '/SGDJBrowse/'.$tracks{$id}{'urlTemplate'};
    }

    my @individ;
    #build individual tracks
    my $n = 0;
    for my $bigwig (@{ $tracks{$id}{'urlTemplates'} } ) {
        $n++;
        my $color = $$bigwig{'color'};
	my $name  = $$bigwig{'name'};
	my $url   = $$bigwig{'url'};
        $url =~ s/\.\./\/SGDData/;

	my $tmpstr = qq| 
	  {
            "type": "BigWigAdapter",
            "group": "group$n",
            "name": "$name",
            "color": "$color",
            "bigWigLocation": {
              "uri": "$url"
            }
          }|;

	push @individ, $tmpstr;
    }

    my $individ_str = join(',',@individ);

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

       my $key = "SGD_$tracks{$id}{key}";
       $config = qq|    
   {
      "type": "MultiQuantitativeTrack",
      "trackId": "SGD_MBW_$key",
      "name": "$id",
      "assemblyNames": [
        "Saccharomyces_cerevisiae"
      ],
      $cat_string
      $meta_string
      "adapter": {
        "type": "MultiWiggleAdapter",
	"subadapters": [
           $individ_str
	]
      },
      "displays": [
        {
          "type": "MultiLinearWiggleDisplay",
          "displayId": "SGD_MBW_$key-MultiLinearWiggleDisplay"
        }
      ]
   }, |;
    print $config;
}
