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

=cut

use Config::Simple;
use JSON;
use Data::Dumper;

my %tracks;
my $trackID;

my %Config = ();
Config::Simple->import_from('FB_tracks.conf.txt', \%Config) or die $Config::Simple->error();


for my $key (keys %Config) {
    next unless $key;
    warn $key;
    warn $Config{$key};
}

#die;
warn Dumper(%Config);
die;


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
    $trackID                         = $$track{'key'};
    $tracks{$trackID}{'urlTemplate'} = $$track{'urlTemplate'};
    $tracks{$trackID}{'storeClass'}  = $$track{'storeClass'};
    $tracks{$trackID}{'label'}       = $$track{'label'};
}


for my $id (keys %tracks) {
    my $config; 

    my $label = exists $tracks{$id}{'label'} ? $tracks{$id}{'label'} : $id;

    my $cat_string = exists $tracks{$id}{category} ? "\"category\" : [ \"$tracks{$id}{category}\" ]," : '"category" : [ "Other FlyBase tracks" ],';

    if ( $tracks{$id}{'storeClass'} =~ /VCFTabix/ ) {
$config=qq|   {
      "type": "VariantTrack",
      "trackId": "FB_$id",
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
      "displays": [
        {
          "type": "LinearVariantDisplay",
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
         "Saccharomyces_cerevisiae"
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
      "displays": [
        {
          "type": "LinearBasicDisplay",
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
    print $config;
}
