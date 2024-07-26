# agr_amplify_jbrowse2

An AWS Amplify oriented repo for building AGR's JBrowse 2

# Building for a new release

## tldr;

The stage instance of the Alliance JBrowse instance is built at AWS Amplify
from the stage branch of this repo and
and the production instance of JBrowse is built from the main branch.
Typically, the only thing that needs to happen to prep for a new release is 
to update the Alliance release version and the WormBase release version
in the various URLs that refer their data sets (outlined below).

## Most MODs' data

Building a new JBrowse instance for a release is a little chaotic. The GFF and
VCF processing are described in the agr_jbrowse_gff and agr_jbrowse_vcf repos,
and the basics of preparing the config.json are covered there as well, but
there isn't a fixed method of keeping the MOD-specific tracks up to date.
The `templates` directory in this repo holds the ad-hoc scripts and results
that I used to convert JBrowse configurations at the various MODs to JBrowse
2 configuration segments.

## WormBase

All of the MODs but WormBase update their data in place, so barring the
addition or deletion of tracks to the MOD JBrowse instance, these tracks
should stay up to date "on their own."

WormBase, on the other hand, has the WormBase release version in the url
of the track data. The easiest way to create an update of the Alliance
JBrowse instance WormBase tracks is to run a global search and replace, 
like with this Perl one-liner:

```
perl -pi -e 's/WS289/WS292/' config.json
```

Of course, the only things you need to know what the old and new WormBase
releases are. 

## Alliance-specific data

The other thing that needs to be updated in the JBrowse configuration is the
Alliance release number. A similar one-liner can take care of this:

```
perl -pi -e 's/\/7\.2\/0\//7.3.0/' config.json
```

After making these changes, a commit to the stage branch will
trigger a rebuild of the stage JBrowse instance.
