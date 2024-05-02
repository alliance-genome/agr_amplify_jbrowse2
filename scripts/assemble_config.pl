#!/usr/bin/perl
use strict;
use warnings;

use JSON;

my $RELEASE = '6.0.1';

my $TEMPLATEDIR = "./templates";

my @template_files = <$TEMPLATEDIR/*.json>;

my $config_template_file = "$TEMPLATEDIR/config.template";

my $blob;
{
    warn "opening $config_template_file";
    local $/ = undef;
    open TEMP, "<$config_template_file" or die "couldn't open $config_template_file: $!";

    $blob = <TEMP>;
    close TEMP;
}

my $config = JSON->new->decode($blob);;

my @tracks;
for my $file (@template_files) {
    {
        warn "opening $file";
        local $/ = undef;
	open TEMP, "<$file" or die "couldn't open $file: $!";

	$blob = <TEMP>;
	close TEMP;
    }

    my $track_json = JSON->new->decode($blob);

    for my $track (@{$track_json}) {
        if (exists $$track{'adapter'}{'rootUrlTemplate'} ) {
            $$track{'adapter'}{'rootUrlTemplate'}{'uri'} =~ s/\$RELEASE/$RELEASE/;
	}
	if (exists $$track{'adapter'}{'bed1Location'}) {
            $$track{'adapter'}{'bed1Location'}{'uri'}  =~ s/\$RELEASE/$RELEASE/;
	}
	if (exists $$track{'adapter'}{'bed2Location'}) {
            $$track{'adapter'}{'bed2Location'}{'uri'}  =~ s/\$RELEASE/$RELEASE/;
        }
	if (exists $$track{'adapter'}{'mcscanAnchorsLocation'}) {
            $$track{'adapter'}{'mcscanAnchorsLocation'}{'uri'}  =~ s/\$RELEASE/$RELEASE/;
        }
    }

    push @tracks, @{$track_json};
}

$$config{'tracks'} = \@tracks;

print JSON->new->pretty->encode($config);
