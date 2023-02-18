"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[730],{43704:function(e){function t(e,n,r,o){this.message=e,this.expected=n,this.found=r,this.location=o,this.name="SyntaxError","function"===typeof Error.captureStackTrace&&Error.captureStackTrace(this,t)}!function(e,t){function n(){this.constructor=e}n.prototype=t.prototype,e.prototype=new n}(t,Error),t.buildMessage=function(e,t){var n={literal:function(e){return'"'+o(e.text)+'"'},class:function(e){var t,n="";for(t=0;t<e.parts.length;t++)n+=e.parts[t]instanceof Array?i(e.parts[t][0])+"-"+i(e.parts[t][1]):i(e.parts[t]);return"["+(e.inverted?"^":"")+n+"]"},any:function(e){return"any character"},end:function(e){return"end of input"},other:function(e){return e.description}};function r(e){return e.charCodeAt(0).toString(16).toUpperCase()}function o(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+r(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+r(e)}))}function i(e){return e.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+r(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+r(e)}))}return"Expected "+function(e){var t,r,o,i=new Array(e.length);for(t=0;t<e.length;t++)i[t]=(o=e[t],n[o.type](o));if(i.sort(),i.length>0){for(t=1,r=1;t<i.length;t++)i[t-1]!==i[t]&&(i[r]=i[t],r++);i.length=r}switch(i.length){case 1:return i[0];case 2:return i[0]+" or "+i[1];default:return i.slice(0,-1).join(", ")+", or "+i[i.length-1]}}(e)+" but "+function(e){return e?'"'+o(e)+'"':"end of input"}(t)+" found."},e.exports={SyntaxError:t,parse:function(e,n){n=void 0!==n?n:{};var r,o={},i={declaration:Ne},a=Ne,s=ve("(",!1),c=ve(")",!1),u="simple",h=ve("simple",!1),m="object",l=ve("object",!1),f="table",d=ve("table",!1),p="auto",g=ve("auto",!1),b="primary",S=ve("primary",!1),y="index",k=ve("index",!1),v="unique",E=ve("unique",!1),C=function(e,t){return t},A=ve("#",!1),w=ve(";",!1),q=ve("[",!1),x=ve("]",!1),N=",",F=ve(",",!1),z=ve("int",!1),R="uint",B=ve("uint",!1),D="short",I=ve("short",!1),T="ushort",G=ve("ushort",!1),P="byte",Z=ve("byte",!1),M="ubyte",_=ve("ubyte",!1),j="float",U=ve("float",!1),O="char",L=ve("char",!1),V="string",W=ve("string",!1),Y="lstring",$=ve("lstring",!1),H="enum",J=ve("enum",!1),K="double",Q=ve("double",!1),X="bigint",ee=ve("bigint",!1),te=ve("set",!1),ne=/^[a-zA-Z_]/,re=Ee([["a","z"],["A","Z"],"_"],!1,!1),oe=/^[a-zA-Z0-9_]/,ie=Ee([["a","z"],["A","Z"],["0","9"],"_"],!1,!1),ae=(ve('"',!1),Ee(['"'],!0,!1),/^[^\n\r]/),se=Ee(["\n","\r"],!0,!1),ce=Ce("integer"),ue=/^[0-9]/,he=Ee([["0","9"]],!1,!1),me=Ce("whitespace"),le=/^[ \t\n\r]/,fe=Ee([" ","\t","\n","\r"],!1,!1),de=0,pe=0,ge=[{line:1,column:1}],be=0,Se=[],ye=0;if("startRule"in n){if(!(n.startRule in i))throw new Error("Can't start parsing from rule \""+n.startRule+'".');a=i[n.startRule]}function ke(){return e.substring(pe,de)}function ve(e,t){return{type:"literal",text:e,ignoreCase:t}}function Ee(e,t,n){return{type:"class",parts:e,inverted:t,ignoreCase:n}}function Ce(e){return{type:"other",description:e}}function Ae(t){var n,r=ge[t];if(r)return r;for(n=t-1;!ge[n];)n--;for(r={line:(r=ge[n]).line,column:r.column};n<t;)10===e.charCodeAt(n)?(r.line++,r.column=1):r.column++,n++;return ge[t]=r,r}function we(e,t){var n=Ae(e),r=Ae(t);return{start:{offset:e,line:n.line,column:n.column},end:{offset:t,line:r.line,column:r.column}}}function qe(e){de<be||(de>be&&(be=de,Se=[]),Se.push(e))}function xe(e,n,r){return new t(t.buildMessage(e,n),e,n,r)}function Ne(){var t,n,r,i,a,u,h;return t=de,Ze()!==o&&(n=Fe())!==o&&Ze()!==o&&(r=ze())!==o&&Ze()!==o&&(i=Be())!==o&&Ze()!==o?(40===e.charCodeAt(de)?(a="(",de++):(a=o,0===ye&&qe(s)),a!==o&&Ze()!==o?(u=function(){var e,t,n,r,i;if(e=de,t=Ie(),t!==o)if(Ze()!==o){for(n=[],r=de,Ze()!==o&&(i=Ie())!==o?(pe=r,r=C(0,i)):(de=r,r=o);r!==o;)n.push(r),r=de,Ze()!==o&&(i=Ie())!==o?(pe=r,r=C(0,i)):(de=r,r=o);n!==o&&(r=Ze())!==o?(pe=e,s=n,(a=t).name&&s.unshift(a),e=t=s):(de=e,e=o)}else de=e,e=o;else de=e,e=o;var a,s;return e}(),u!==o&&Ze()!==o?(41===e.charCodeAt(de)?(h=")",de++):(h=o,0===ye&&qe(c)),h!==o&&Ze()!==o?(pe=t,t={type:n,name:r,comment:i,fields:u}):(de=t,t=o)):(de=t,t=o)):(de=t,t=o)):(de=t,t=o),t}function Fe(){var t;return e.substr(de,6)===u?(t=u,de+=6):(t=o,0===ye&&qe(h)),t===o&&(e.substr(de,6)===m?(t=m,de+=6):(t=o,0===ye&&qe(l)),t===o&&(e.substr(de,5)===f?(t=f,de+=5):(t=o,0===ye&&qe(d)))),t}function ze(){var t,n,r,i;return(t=Ge())===o&&(t=de,(n=Ge())!==o&&(r=Re())!==o?t=n=[n,r]:(de=t,t=o),t===o&&(t=de,(n=Ge())!==o?(e.substr(de,4)===p?(r=p,de+=4):(r=o,0===ye&&qe(g)),r!==o?t=n=[n,r]:(de=t,t=o)):(de=t,t=o),t===o&&(t=de,(n=Ge())!==o&&(r=Re())!==o?(e.substr(de,4)===p?(i=p,de+=4):(i=o,0===ye&&qe(g)),i!==o?t=n=[n,r,i]:(de=t,t=o)):(de=t,t=o)))),t}function Re(){var t;return e.substr(de,7)===b?(t=b,de+=7):(t=o,0===ye&&qe(S)),t===o&&(e.substr(de,5)===y?(t=y,de+=5):(t=o,0===ye&&qe(k)),t===o&&(e.substr(de,6)===v?(t=v,de+=6):(t=o,0===ye&&qe(E)))),t}function Be(){var e;return(e=Pe())===o&&(e=Ze()),e}function De(){var t,n,r,i,a;return t=de,(n=Ze())!==o?(r=function(){var t;return 35===e.charCodeAt(de)?(t="#",de++):(t=o,0===ye&&qe(A)),t}(),r!==o&&(i=Pe())!==o&&(a=Ze())!==o?t=n=[n,r,i,a]:(de=t,t=o)):(de=t,t=o),t}function Ie(){var t,n,r,i,a,u,h,m;return t=de,(n=Te())!==o&&Ze()!==o&&(r=Ge())!==o&&Ze()!==o?(59===e.charCodeAt(de)?(i=";",de++):(i=o,0===ye&&qe(w)),i!==o&&Ze()!==o&&(a=Be())!==o?(pe=t,t=n={type:n,name:r,comment:a}):(de=t,t=o)):(de=t,t=o),t===o&&(t=de,(n=Te())!==o&&Ze()!==o?(91===e.charCodeAt(de)?(r="[",de++):(r=o,0===ye&&qe(q)),r!==o&&Ze()!==o?(i=function(){var t;t=function(){var t,n,r,i;if(ye++,t=de,n=Ze(),n!==o){if(r=[],ue.test(e.charAt(de))?(i=e.charAt(de),de++):(i=o,0===ye&&qe(he)),i!==o)for(;i!==o;)r.push(i),ue.test(e.charAt(de))?(i=e.charAt(de),de++):(i=o,0===ye&&qe(he));else r=o;r!==o?(pe=t,t=n=parseInt(ke(),10)):(de=t,t=o)}else de=t,t=o;ye--,t===o&&(n=o,0===ye&&qe(ce));return t}(),t===o&&(t=Ge());return t}(),i!==o&&Ze()!==o?(93===e.charCodeAt(de)?(a="]",de++):(a=o,0===ye&&qe(x)),a!==o&&Ze()!==o&&(u=Ge())!==o&&Ze()!==o?(59===e.charCodeAt(de)?(h=";",de++):(h=o,0===ye&&qe(w)),h!==o&&Ze()!==o&&(m=Be())!==o?(pe=t,n=function(e,t,n,r){return{type:e,size:t,name:n,comment:r}}(n,i,u,m),t=n):(de=t,t=o)):(de=t,t=o)):(de=t,t=o)):(de=t,t=o)):(de=t,t=o),t===o&&(t=de,(n=Te())!==o&&Ze()!==o?(40===e.charCodeAt(de)?(r="(",de++):(r=o,0===ye&&qe(s)),r!==o&&Ze()!==o?(i=function(){var t,n,r,i,a,s;if(t=de,n=Ge(),n!==o){for(r=[],i=de,44===e.charCodeAt(de)?(a=N,de++):(a=o,0===ye&&qe(F)),a!==o&&Ze()!==o&&(s=Ge())!==o?(pe=i,i=a=C(0,s)):(de=i,i=o);i!==o;)r.push(i),i=de,44===e.charCodeAt(de)?(a=N,de++):(a=o,0===ye&&qe(F)),a!==o&&Ze()!==o&&(s=Ge())!==o?(pe=i,i=a=C(0,s)):(de=i,i=o);r!==o?(pe=t,c=n,(u=r).unshift(c),t=n=u):(de=t,t=o)}else de=t,t=o;var c,u;return t}(),i!==o&&Ze()!==o?(41===e.charCodeAt(de)?(a=")",de++):(a=o,0===ye&&qe(c)),a!==o&&Ze()!==o&&(u=Ge())!==o&&Ze()!==o?(59===e.charCodeAt(de)?(h=";",de++):(h=o,0===ye&&qe(w)),h!==o&&Ze()!==o&&(m=Be())!==o?(pe=t,n=function(e,t,n,r){return{type:e,vals:t,name:n,comment:r}}(n,i,u,m),t=n):(de=t,t=o)):(de=t,t=o)):(de=t,t=o)):(de=t,t=o)):(de=t,t=o),t===o&&(t=De()))),t}function Te(){var t,n,r;return"int"===e.substr(de,3)?(t="int",de+=3):(t=o,0===ye&&qe(z)),t===o&&(e.substr(de,4)===R?(t=R,de+=4):(t=o,0===ye&&qe(B)),t===o&&(e.substr(de,5)===D?(t=D,de+=5):(t=o,0===ye&&qe(I)),t===o&&(e.substr(de,6)===T?(t=T,de+=6):(t=o,0===ye&&qe(G)),t===o&&(e.substr(de,4)===P?(t=P,de+=4):(t=o,0===ye&&qe(Z)),t===o&&(e.substr(de,5)===M?(t=M,de+=5):(t=o,0===ye&&qe(_)),t===o&&(e.substr(de,5)===j?(t=j,de+=5):(t=o,0===ye&&qe(U)),t===o&&(e.substr(de,4)===O?(t=O,de+=4):(t=o,0===ye&&qe(L)),t===o&&(e.substr(de,6)===V?(t=V,de+=6):(t=o,0===ye&&qe(W)),t===o&&(e.substr(de,7)===Y?(t=Y,de+=7):(t=o,0===ye&&qe($)),t===o&&(e.substr(de,4)===H?(t=H,de+=4):(t=o,0===ye&&qe(J)),t===o&&(e.substr(de,6)===K?(t=K,de+=6):(t=o,0===ye&&qe(Q)),t===o&&(e.substr(de,6)===X?(t=X,de+=6):(t=o,0===ye&&qe(ee)),t===o&&("set"===e.substr(de,3)?(t="set",de+=3):(t=o,0===ye&&qe(te)),t===o&&(t=de,(n=Fe())!==o&&Ze()!==o&&(r=ze())!==o?(pe=t,t=n=n+" "+r):(de=t,t=o))))))))))))))),t}function Ge(){var t,n,r,i,a;if(t=de,n=de,ne.test(e.charAt(de))?(r=e.charAt(de),de++):(r=o,0===ye&&qe(re)),r!==o){for(i=[],oe.test(e.charAt(de))?(a=e.charAt(de),de++):(a=o,0===ye&&qe(ie));a!==o;)i.push(a),oe.test(e.charAt(de))?(a=e.charAt(de),de++):(a=o,0===ye&&qe(ie));i!==o?n=r=[r,i]:(de=n,n=o)}else de=n,n=o;return n!==o&&(pe=t,n=ke()),t=n}function Pe(){var t,n,r;for(t=de,n=[],ae.test(e.charAt(de))?(r=e.charAt(de),de++):(r=o,0===ye&&qe(se));r!==o;)n.push(r),ae.test(e.charAt(de))?(r=e.charAt(de),de++):(r=o,0===ye&&qe(se));return n!==o&&(pe=t,n=n.join("").replace(/^"/,"").replace(/"$/,"")),t=n}function Ze(){var t,n;for(ye++,t=[],le.test(e.charAt(de))?(n=e.charAt(de),de++):(n=o,0===ye&&qe(fe));n!==o;)t.push(n),le.test(e.charAt(de))?(n=e.charAt(de),de++):(n=o,0===ye&&qe(fe));return ye--,t===o&&(n=o,0===ye&&qe(me)),t}if((r=a())!==o&&de===e.length)return r;throw r!==o&&de<e.length&&qe({type:"end"}),xe(Se,be<e.length?e.charAt(be):null,be<e.length?we(be,be+1):we(be,be))}}},40730:function(e,t,n){n.d(t,{Z:function(){return w}});var r={};n.r(r),n.d(r,{bigChain:function(){return u},bigGenePred:function(){return h},bigInteract:function(){return m},bigLink:function(){return l},bigMaf:function(){return f},bigNarrowPeak:function(){return d},bigPsl:function(){return p},defaultBedSchema:function(){return g},mafFrames:function(){return b},mafSummary:function(){return S}});var o=n(9249),i=n(87371),a=n(43704),s=n.n(a),c=n(96234),u='table bigChain\n"bigChain pairwise alignment"\n    (\n    string chrom;       "Reference sequence chromosome or scaffold"\n    uint   chromStart;  "Start position in chromosome"\n    uint   chromEnd;    "End position in chromosome"\n    string name;        "Name or ID of item, ideally both human readable and unique"\n    uint score;         "Score (0-1000)"\n    char[1] strand;     "+ or - for strand"\n    uint tSize;         "size of target sequence"\n    string qName;       "name of query sequence"\n    uint qSize;         "size of query sequence"\n    uint qStart;        "start of alignment on query sequence"\n    uint qEnd;          "end of alignment on query sequence"\n    uint chainScore;    "score from chain"\n    )',h='table bigGenePred\n"bigGenePred gene models"\n   (\n   string chrom;       "Reference sequence chromosome or scaffold"\n   uint   chromStart;  "Start position in chromosome"\n   uint   chromEnd;    "End position in chromosome"\n   string name;        "Name or ID of item, ideally both human readable and unique"\n   uint score;         "Score (0-1000)"\n   char[1] strand;     "+ or - for strand"\n   uint thickStart;    "Start of where display should be thick (start codon)"\n   uint thickEnd;      "End of where display should be thick (stop codon)"\n   uint reserved;       "RGB value (use R,G,B string in input file)"\n   int blockCount;     "Number of blocks"\n   int[blockCount] blockSizes; "Comma separated list of block sizes"\n   int[blockCount] chromStarts; "Start positions relative to chromStart"\n   string name2;       "Alternative/human readable name"\n   string cdsStartStat; "Status of CDS start annotation (none, unknown, incomplete, or complete)"\n   string cdsEndStat;   "Status of CDS end annotation (none, unknown, incomplete, or complete)"\n   int[blockCount] exonFrames; "Exon frame {0,1,2}, or -1 if no frame for exon"\n   string type;        "Transcript type"\n   string geneName;    "Primary identifier for gene"\n   string geneName2;   "Alternative/human readable gene name"\n   string geneType;    "Gene type"\n   )',m='table interact\n"interaction between two regions"\n    (\n    string chrom;        "Chromosome (or contig, scaffold, etc.). For interchromosomal, use 2 records"\n    uint chromStart;     "Start position of lower region. For interchromosomal, set to chromStart of this region"\n    uint chromEnd;       "End position of upper region. For interchromosomal, set to chromEnd of this region"\n    string name;         "Name of item, for display.  Usually \'sourceName/targetName/exp\' or empty"\n    uint score;          "Score (0-1000)"\n    double value;        "Strength of interaction or other data value. Typically basis for score"\n    string exp;          "Experiment name (metadata for filtering). Use . if not applicable"\n    string color;        "Item color.  Specified as r,g,b or hexadecimal #RRGGBB or html color name, as in //www.w3.org/TR/css3-color/#html4. Use 0 and spectrum setting to shade by score"\n    string sourceChrom;  "Chromosome of source region (directional) or lower region. For non-directional interchromosomal, chrom of this region."\n    uint sourceStart;    "Start position in chromosome of source/lower/this region"\n    uint sourceEnd;      "End position in chromosome of source/lower/this region"\n    string sourceName;   "Identifier of source/lower/this region"\n    string sourceStrand; "Orientation of source/lower/this region: + or -.  Use . if not applicable"\n    string targetChrom;  "Chromosome of target region (directional) or upper region. For non-directional interchromosomal, chrom of other region"\n    uint targetStart;    "Start position in chromosome of target/upper/this region"\n    uint targetEnd;      "End position in chromosome of target/upper/this region"\n    string targetName;   "Identifier of target/upper/this region"\n    string targetStrand; "Orientation of target/upper/this region: + or -.  Use . if not applicable"\n\n    )',l='table bigLink\n"bigLink pairwise alignment"\n    (\n    string chrom;       "Reference sequence chromosome or scaffold"\n    uint   chromStart;  "Start position in chromosome"\n    uint   chromEnd;    "End position in chromosome"\n    string name;        "Name or ID of item, ideally both human readable and unique"\n    uint qStart;        "start of alignment on query sequence"\n    )',f='table bedMaf\n"Bed3 with MAF block"\n    (\n    string chrom;      "Reference sequence chromosome or scaffold"\n    uint   chromStart; "Start position in chromosome"\n    uint   chromEnd;   "End position in chromosome"\n    lstring mafBlock;   "MAF block"\n    )',d='table bigNarrowPeak\n"BED6+4 Peaks of signal enrichment based on pooled, normalized (interpreted) data."\n(\n    string chrom;        "Reference sequence chromosome or scaffold"\n    uint   chromStart;   "Start position in chromosome"\n    uint   chromEnd;     "End position in chromosome"\n    string name;\t "Name given to a region (preferably unique). Use . if no name is assigned"\n    uint   score;        "Indicates how dark the peak will be displayed in the browser (0-1000) "\n    char[1]  strand;     "+ or - or . for unknown"\n    float  signalValue;  "Measurement of average enrichment for the region"\n    float  pValue;       "Statistical significance of signal value (-log10). Set to -1 if not used."\n    float  qValue;       "Statistical significance with multiple-test correction applied (FDR -log10). Set to -1 if not used."\n    int   peak;         "Point-source called for this peak; 0-based offset from chromStart. Set to -1 if no point-source called."\n)',p='table bigPsl\n"bigPsl pairwise alignment"\n    (\n    string chrom;       "Reference sequence chromosome or scaffold"\n    uint   chromStart;  "Start position in chromosome"\n    uint   chromEnd;    "End position in chromosome"\n    string name;        "Name or ID of item, ideally both human readable and unique"\n    uint score;         "Score (0-1000)"\n    char[1] strand;     "+ or - indicates whether the query aligns to the + or - strand on the reference"\n    uint thickStart;    "Start of where display should be thick (start codon)"\n    uint thickEnd;      "End of where display should be thick (stop codon)"\n    uint reserved;       "RGB value (use R,G,B string in input file)"\n    int blockCount;     "Number of blocks"\n    int[blockCount] blockSizes; "Comma separated list of block sizes"\n    int[blockCount] chromStarts; "Start positions relative to chromStart"\n\n    uint    oChromStart;"Start position in other chromosome"\n    uint    oChromEnd;  "End position in other chromosome"\n    char[1] oStrand;    "+ or -, - means that psl was reversed into BED-compatible coordinates"\n    uint    oChromSize; "Size of other chromosome."\n    int[blockCount] oChromStarts; "Start positions relative to oChromStart or from oChromStart+oChromSize depending on strand"\n\n    lstring  oSequence;  "Sequence on other chrom (or empty)"\n    string   oCDS;       "CDS in NCBI format"\n\n    uint    chromSize;"Size of target chromosome"\n\n    uint match;        "Number of bases matched."\n    uint misMatch; " Number of bases that don\'t match "\n    uint repMatch; " Number of bases that match but are part of repeats "\n    uint nCount;   " Number of \'N\' bases "\n    uint seqType;    "0=empty, 1=nucleotide, 2=amino_acid"\n    )',g='table defaultBedSchema\n"BED12"\n    (\n    string chrom;      "The name of the chromosome (e.g. chr3, chrY, chr2_random) or scaffold (e.g. scaffold10671)."\n    uint   chromStart; "The starting position of the feature in the chromosome or scaffold. The first base in a chromosome is numbered 0."\n    uint   chromEnd;   "The ending position of the feature in the chromosome or scaffold. The chromEnd base is not included in the display of the feature. For example, the first 100 bases of a chromosome are defined as chromStart=0, chromEnd=100, and span the bases numbered 0-99."\n    string   name;   "Defines the name of the BED line."\n    float   score;   "Feature score, doesn\'t care about the 0-1000 limit as in bed"\n    char   strand;   "Defines the strand. Either \'.\' (=no strand) or \'+\' or \'-\'"\n    uint thickStart; "The starting position at which the feature is drawn thickly (for example, the start codon in gene displays). When there is no thick part, thickStart and thickEnd are usually set to the chromStart position."\n    uint thickEnd; "The ending position at which the feature is drawn thickly (for example the stop codon in gene displays)."\n    string itemRgb; "An RGB value of the form R,G,B (e.g. 255,0,0). "\n    uint blockCount; " The number of blocks (exons) in the BED line."\n    uint[blockCount] blockSizes; " A comma-separated list of the block sizes. The number of items in this list should correspond to blockCount."\n    uint[blockCount] blockStarts; "A comma-separated list of block starts. All of the blockStart positions should be calculated relative to chromStart. The number of items in this list should correspond to blockCount."\n    )',b='table mafFrames\n"codon frame assignment for MAF components"\n    (\n    string chrom;      "Reference sequence chromosome or scaffold"\n    uint   chromStart; "Start range in chromosome"\n    uint   chromEnd;   "End range in chromosome"\n    string src;        "Name of sequence source in MAF"\n    ubyte frame;       "frame (0,1,2) for first base(+) or last bast(-)"\n    char[1] strand;    "+ or -"\n    string name;       "Name of gene used to define frame"\n    int    prevFramePos;  "target position of the previous base (in transcription direction) that continues this frame, or -1 if none, or frame not contiguous"\n    int    nextFramePos;  "target position of the next base (in transcription direction) that continues this frame, or -1 if none, or frame not contiguous"\n    ubyte  isExonStart;  "does this start the CDS portion of an exon?"\n    ubyte  isExonEnd;    "does this end the CDS portion of an exon?"\n    )',S='table mafSummary\n"Positions and scores for alignment blocks"\n    (\n    string chrom;      "Reference sequence chromosome or scaffold"\n    uint   chromStart; "Start position in chromosome"\n    uint   chromEnd;   "End position in chromosome"\n    string src;        "Sequence name or database of alignment"\n    float  score;      "Floating point score."\n    char[1] leftStatus;  "Gap/break annotation for preceding block"\n    char[1] rightStatus; "Gap/break annotation for following block"\n    )',y=Object.fromEntries(Object.entries(r).map((function(e){var t=(0,c.Z)(e,2),n=t[0],r=t[1];return[n,(0,a.parse)(r.trim())]}))),k=n(33028);function v(e){var t=["uint","int","float","long"];return(0,k.Z)((0,k.Z)({},e),{},{fields:e.fields.map((function(e){return(0,k.Z)((0,k.Z)({},e),{},{isArray:e.size&&"char"!==e.type,arrayIsNumeric:e.size&&t.includes(e.type),isNumeric:!e.size&&t.includes(e.type)})}))})}var E={".":0,"-":-1,"+":1};function C(e){var t;return e.length>=12&&!Number.isNaN(parseInt(e[9],10))&&(null===(t=e[10])||void 0===t?void 0:t.split(",").filter((function(e){return!!e})).length)===parseInt(e[9],10)}var A=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if((0,o.Z)(this,e),t.autoSql)this.autoSql=v(s().parse(t.autoSql));else if(t.type){if(!y[t.type])throw new Error("Type not found");this.autoSql=v(y[t.type])}else this.autoSql=v(y.defaultBedSchema),this.attemptDefaultBed=!0}return(0,i.Z)(e,[{key:"parseLine",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.autoSql,r=t.uniqueId,o=Array.isArray(e)?e:e.split("\t"),i={};if(!this.attemptDefaultBed||this.attemptDefaultBed&&C(o))for(var a=0;a<n.fields.length;a++){var s=n.fields[a],c=o[a],u=s.isNumeric,h=s.isArray,m=s.arrayIsNumeric,l=s.name;if(null===c||void 0===c)break;if("."!==c){if(u){var f=Number(c);c=Number.isNaN(f)?c:f}else h&&(""===(c=c.split(","))[c.length-1]&&c.pop(),m&&(c=c.map((function(e){return Number(e)}))));i[l]=c}}else{var d=["chrom","chromStart","chromEnd","name"];i=Object.fromEntries(o.map((function(e,t){return[d[t]||"field"+t,e]}))),i.chromStart=+i.chromStart,i.chromEnd=+i.chromEnd,Number.isNaN(Number.parseFloat(i.field4))||(i.score=+i.field4,delete i.field4),"+"!==i.field5&&"-"!==i.field5||(i.strand=i.field5,delete i.field5)}return r&&(i.uniqueId=r),i.strand=E[i.strand]||0,i.chrom=decodeURIComponent(i.chrom),i}}]),e}(),w=A}}]);
//# sourceMappingURL=730.e378dfe5.chunk.js.map