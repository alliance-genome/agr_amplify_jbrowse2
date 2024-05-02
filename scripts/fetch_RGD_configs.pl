#!/usr/bin/perl
use strict;
use warnings;
use JSON;

my $RGD_config = "https://rgd.mcw.edu/jbrowse2/config.json";

#system('curl','-O',$RGD_config) ==0 or die "failed to fectch config: $!";

my $blob;
{
        local $/ = undef;
        open TL, "<config.json" or die "couldn't open config.json: $!";
        $blob = <TL>;
        close TL;
}
my $json = JSON->new->decode($blob);

my @human_tracks;
my @rat_tracks;
for my $track (@{ $$json{'tracks'} }) {
    next if $$track{'type'} eq 'SyntenyTrack';

    next unless ($$track{'assemblyNames'}[0] eq 'mRatBN7.2'
    	      or $$track{'assemblyNames'}[0] eq 'GRCh38.p14' );

    if (exists $$track{'adapter'}{'uri'}) {
        $$track{'adapter'}{'uri'} = '/jbrowsedata/RGDJBrowse/'.$$track{'adapter'}{'uri'};
    }
    elsif (exists $$track{'adapter'}{'gffGzLocation'}{'uri'}) {
        $$track{'adapter'}{'gffGzLocation'}{'uri'}     = '/jbrowsedata/RGDJBrowse/'.$$track{'adapter'}{'gffGzLocation'}{'uri'};
        $$track{'adapter'}{'index'}{'location'}{'uri'} = '/jbrowsedata/RGDJBrowse/'.$$track{'adapter'}{'index'}{'location'}{'uri'};
    }
    elsif (exists $$track{'adapter'}{'bedGzLocation'}{'uri'}) {
        $$track{'adapter'}{'bedGzLocation'}{'uri'}     = '/jbrowsedata/RGDJBrowse/'.$$track{'adapter'}{'bedGzLocation'}{'uri'};
        $$track{'adapter'}{'index'}{'location'}{'uri'} = '/jbrowsedata/RGDJBrowse/'.$$track{'adapter'}{'index'}{'location'}{'uri'};
    }

    if ($$track{'assemblyNames'}[0] eq 'mRatBN7.2') {
        $$track{'assemblyNames'}[0] = 'Rattus_norvegicus';
    }
    elsif ($$track{'assemblyNames'}[0] eq 'GRCh38.p14') {
        $$track{'assemblyNames'}[0] = 'Homo_sapiens';
    }

    #since the alliance JB2 has a "Variants" track, having a category
    #named "Variants" causes weird UI stuff, so renamin the category
    if (exists $$track{'category'}) {
        if ($$track{'category'}[0] eq 'Variants') {
            $$track{'category'}[0] = 'Variant tracks';
	}
    }

    push @rat_tracks,   $track if $$track{'assemblyNames'}[0] eq 'Rattus_norvegicus';
    push @human_tracks, $track if $$track{'assemblyNames'}[0] eq 'Homo_sapiens';
}

open RAT, ">rat_config.json" or die "couldn't open rat_config.json for writing: $!";
open HUMAN, ">human_config.json" or die "couldn't open human_condig.json for writing: $!";

print RAT   JSON->new->pretty->encode(\@rat_tracks);
print HUMAN JSON->new->pretty->encode(\@human_tracks);

close RAT;
close HUMAN;

