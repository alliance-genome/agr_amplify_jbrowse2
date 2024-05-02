#!/usr/bin/perl 
use strict;
use warnings;

while (<>) {
  my $line = $_;
  if ($line =~ /rgd.mcw.edu\/jbrowse2\/rn7.2\/(.*).gff3/) {
    my $file = my $orig = $1; 
    $file =~ s/ /_/g; 
    $line =~ s/$orig/$file/; 
    $line =~ s/rgd.mcw.edu/s3.amazonaws.com/;
    $line =~ s/jbrowse2/agrjbrowse\/MOD-jbrowses\/RGD/;
    }
  print $line;
}
