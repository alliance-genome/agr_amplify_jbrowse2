#!/usr/bin/perl
use strict;
use warnings;

use JSON;
use Data::Dumper;

my %tracks;
my $trackID;

#load trackList.json and pull out track config data
my $blob;
{
        local $/ = undef;
        open TL, "<Xla_trackList.json" or die "couldn't open combined.json: $!";
        $blob = <TL>;
        close TL;
}
my $json = JSON->new->decode($blob);

for my $track (@{$$json{'tracks'}}) {
    $trackID                         = $$track{'label'};
    $tracks{$trackID}{'urlTemplate'} = $$track{'urlTemplate'};
    $tracks{$trackID}{'storeClass'}  = $$track{'storeClass'};
    $tracks{$trackID}{'label'}       = $$track{'key'};
    $tracks{$trackID}{'category'}    = $$track{'category'};
    $tracks{$trackID}{'metadata'}    = $$track{'metadata'} if exists $$track{'metadata'};
}

for my $id (keys %tracks) {
    my $config; 

    if ($tracks{$id}{'urlTemplate'} !~ /^https/) {
         $tracks{$id}{'urlTemplate'} = '/XenBaseXLJBrowse/'.$tracks{$id}{'urlTemplate'};
    }

    my $label = '';
    if (exists $tracks{$id}{'label'}) {
        $label = $tracks{$id}{'label'};
	$label =~ s/<.*?>//g;
    } else {
        $label = $id;
    }

    my $cat_string = '';
    if (exists $tracks{$id}{category}) {
        $tracks{$id}{category} =~ s/<.*?>//g;
        my @cat_array = split('/', $tracks{$id}{category});
        my $cat_list  = join('","',@cat_array);
        $cat_string = qq("category" : [ "$cat_list" ],);
    }

    my $metadata_str = '';
    if (exists $tracks{$id}{metadata}) {
	my @metadata;
        for my $key (keys %{ $tracks{$id}{metadata} }) {
 	    if ($key =~ /span name/) {
		$tracks{$id}{'metadata'}{'description'} = "$tracks{$id}{'metadata'}{$key}";
		delete $tracks{$id}{'metadata'}{$key};
		my $item_str = qq("description" : "$tracks{$id}{metadata}{'description'}");
		push(@metadata, $item_str);
	    } else {
  	        my $item_str = qq("$key" : "$tracks{$id}{metadata}{$key}");
                push(@metadata, $item_str);
            }
	}
	my $meta_list = join(',',@metadata);
	$metadata_str = qq("metadata" : { $meta_list },);
    }

    if ( $tracks{$id}{'storeClass'} =~ /VCFTabix/ ) {
$config=qq|   {
      "type": "VariantTrack",
      "trackId": "XLT_$id",
      "name": "$label",
      "assemblyNames": [
        "Xenopus_laevis"
      ],
      $cat_string $metadata_str
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
          "displayId": "XLA_$id-LinearVariantDisplay"
        },
        {
          "type": "ChordVariantDisplay",
          "displayId": "XLA_$id-ChordVariantDisplay"
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
         "Xenopus_laevis"
      ],
      $cat_string $metadata_str
      "trackId" : "XLA_$id"
   },
|;

    } elsif ($tracks{$id}{'storeClass'} =~ /NCList/ ) {
       $config = qq|    {
      "type": "FeatureTrack",
      "trackId": "XLA_$id",
      "name": "$label",
      "assemblyNames": [
        "Xenopus_laevis"
      ],
      $cat_string $metadata_str
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
          "displayId": "XLA_$id-LinearBasicDisplay"
        },
        {
          "type": "LinearArcDisplay",
          "displayId": "XLA_$id-LinearArcDisplay"
        }
      ]
    },
|;
    } elsif ($tracks{$id}{'storeClass'} =~ /BigBed/) {
	    $config = qq|    {
      "type": "FeatureTrack",
      "trackId": "XLA_$id",
      "name": "$label",
      "assemblyNames": [
        "Xenopus_laevis"
      ],
      $cat_string $metadata_str
      "adapter": {
        "type": "BigBedAdapter",
        "bigBedLocation": {
          "locationType": "UriLocation",
          "uri": "$tracks{$id}{'urlTemplate'}"
        }
      },
      "displays": [
        {
          "type": "LinearBasicDisplay",
          "displayId": "XLA_$id-LinearBasicDisplay"
        },
        {
          "type": "LinearArcDisplay",
          "displayId": "XLA_$id-LinearArcDisplay"
        }
      ]
    },
|;
    }
    print $config;
}
