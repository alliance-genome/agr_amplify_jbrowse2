#!/usr/bin/perl
use strict;
use warnings;

use Text::CSV qw( csv );
use Config::Simple;
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
    next unless $$track{'storeClass'} eq 'MultiBigWig/Store/SeqFeature/MultiBigWig';
    $trackID                         = $$track{'label'};
    $tracks{$trackID}{'urlTemplates'} = $$track{'urlTemplates'};
    $tracks{$trackID}{'label'}       = $$track{'key'};
    $tracks{$trackID}{'category'}    = $$track{'category'};
    $tracks{$trackID}{'metadata'}    = $$track{'metadata'} if exists $$track{'metadata'};
}


for my $id (keys %tracks) {
    my $config; 

    my @individ;
    #build individual tracks
    my $n = 0;
    for my $bigwig (@{ $tracks{$id}{'urlTemplates'} } ) {
        $n++;
        my $color = $$bigwig{'color'} || 'blue';
	my $name  = $$bigwig{'name'};
        $name =~ s/<.*?>//g;
	my $url   = $$bigwig{'url'};
        if ($url !~ /^https/) {
            $url = '/XenBaseXLJBrowse/'.$url;
        }

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
                $tracks{$id}{'metadata'}{description} = $tracks{$id}{'metadata'}{$key};
                undef $tracks{$id}{'metadata'}{$key};
            }
            my $item_str = qq("$key" : "$tracks{$id}{metadata}{$key}");
            push(@metadata, $item_str);
        }
        my $meta_list = join(',',@metadata);
        $metadata_str = qq("metadata" : { $meta_list },);
    }

    $tracks{$id}{'label'} =~ s/<.*?>//g;

    my $key = $id;
   $config = qq|    
   {
      "type": "MultiQuantitativeTrack",
      "trackId": "XLA_MBW_$key",
      "name": "$tracks{$id}{'label'}",
      "assemblyNames": [
        "Xenopus_laevis"
      ],
      $cat_string $metadata_str
      "adapter": {
        "type": "MultiWiggleAdapter",
	"subadapters": [
           $individ_str
	]
      },
      "displays": [
        {
          "type": "MultiLinearWiggleDisplay",
          "displayId": "XLA_MBW_$key-MultiLinearWiggleDisplay"
        }
      ]
   }, |;
    print $config;
}
