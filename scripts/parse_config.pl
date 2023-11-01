#!/usr/bin/perl
use strict;
use warnings;

# USAGE:
#   parse_config.pl config.json
#
# OUTPUT:
#   A set of track json files, one each per assembly plus one for synteny

# This script shouldn't be used often--only in the event that manual editing
# of the config.json file makes it drift far from the templates

use JSON;
use Data::Dumper;

my $configfile = $ARGV[0];

my $blob;
{
	local $/ = undef;
	open CONFIG, "<$configfile" or die "couldn't open $configfile: $!";
	$blob = <CONFIG>;
	close CONFIG;
}

my $config = JSON->new->decode($blob);

my @synteny_tracks;
my %perspecies;
for my $track (@{$$config{'tracks'}}) {
    if ($$track{'type'} eq 'SyntenyTrack') {
        push @synteny_tracks, $track;
	next;
    }
    next unless $$track{'type'} eq 'FeatureTrack';
    push @{$perspecies{$$track{'assemblyNames'}[0]}}, $track;
    #    print $$track{'assemblyNames'}[0],' ', $$track{'trackId'}, "\n";
    #print scalar @{$perspecies{$$track{'assemblyNames'}[0]}}, "\t", $$track{'assemblyNames'}[0],"\n";
}

open SYN, ">synteny.json" or die "couldn't open synteny: $!";
print SYN JSON->new->pretty->encode(\@synteny_tracks);
close SYN;

for my $key (%perspecies) {
	#	print "$key\n";
    print $key, "\n";
    next if (ref $key); 
    print $key,"\t",scalar @{$perspecies{$key}}, "\n";

    open FILE, ">$key.json" or die "couldn't open $key: $!";
    print FILE JSON->new->pretty->encode($perspecies{$key});
    close FILE;
}


