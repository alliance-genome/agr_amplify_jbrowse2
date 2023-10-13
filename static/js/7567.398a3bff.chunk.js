"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[7567,8422],{93734:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var r=n(33028),a=n(96234),i=n(30969),o=n(622),s=n(46672),c=n(90550),u=n(34760),l=n.n(u),d=n(39554),f=n.n(d),m=n(52942),p=n(32723),h=n(34795),g=n(81073);function v(e,t){return b.apply(this,arguments)}function b(){return(b=(0,h.Z)((0,p.Z)().mark((function e(t,n){var r,a;return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=(0,g.getSession)(n),a=n.view,e.prev=2,!a){e.next=8;break}return e.next=6,a.navToLocString(t);case 6:e.next=9;break;case 8:throw new Error("No view associated with this view anymore");case 9:e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),console.error(e.t0),r.notify("".concat(e.t0));case 15:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}var Z=n(33359),x=n(46079),y=n(37574);function w(e){var t=e.tag,n=e.model;return(0,y.jsxs)(m.BaseCard,(0,r.Z)((0,r.Z)({},e),{},{title:"Supplementary alignments",children:[(0,y.jsx)(Z.Z,{children:"List of supplementary alignment locations"}),(0,y.jsx)("ul",{children:t.split(";").filter((function(e){return!!e})).map((function(e,t){var r=e.split(","),i=(0,a.Z)(r,4),s=i[0],c=i[1],u=i[2],l=i[3],d=(0,x.getLengthOnRef)(l),f=Math.floor(d/5),m=+c,g=+c+d,b="".concat(s,":").concat(Math.max(1,m-f),"-").concat(g+f),Z=m.toLocaleString("en-US"),w=g.toLocaleString("en-US"),C="".concat(s,":").concat(Z,"-").concat(w," (").concat(u,") [").concat(d,"bp]");return(0,y.jsx)("li",{children:(0,y.jsx)(o.Z,{onClick:function(){var e=(0,h.Z)((0,p.Z)().mark((function e(t){return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),v(b,n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),href:"#",children:C})},"".concat(b,"-").concat(t))}))})]}))}var C=n(21098),R=n(49884),S=n(88876),k=n(53276),q=n(89891),j=(0,k.ZL)()({compact:{paddingRight:0,paddingTop:0,paddingBottom:0}}),M=["read paired","read mapped in proper pair","read unmapped","mate unmapped","read reverse strand","mate reverse strand","first in pair","second in pair","not primary alignment","read fails platform/vendor quality checks","read is PCR or optical duplicate","supplementary alignment"];function T(e){var t=j().classes,n=e.feature.flags;return(0,y.jsxs)(m.BaseCard,(0,r.Z)((0,r.Z)({},e),{},{title:"Flags",children:[(0,y.jsx)(q.Z,{name:"Flag",value:n}),(0,y.jsx)(C.Z,{children:M.map((function(e,r){var a=n&1<<r,i="".concat(e,"_").concat(a);return(0,y.jsx)(R.Z,{control:(0,y.jsx)(S.Z,{className:t.compact,checked:Boolean(a),name:e,readOnly:!0}),label:e},i)}))})]}))}var E=["clipPos","flags"],P={AM:"The smallest template-independent mapping quality in the template",AS:"Alignment score generated by aligner",BC:"Barcode sequence identifying the sample",BQ:"Offset to base alignment quality (BAQ)",BZ:"Phred quality of the unique molecular barcode bases in the {OX} tag",CB:"Cell identifier",CC:"Reference name of the next hit",CM:"Edit distance between the color sequence and the color reference (see also {NM})",CO:"Free-text comments",CP:"Leftmost coordinate of the next hit",CQ:"Color read base qualities",CR:"Cellular barcode sequence bases (uncorrected)",CS:"Color read sequence",CT:"Complete read annotation tag, used for consensus annotation dummy features",CY:"Phred quality of the cellular barcode sequence in the {CR} tag",E2:"The 2nd most likely base calls",FI:"The index of segment in the template",FS:"Segment suffix",FZ:"Flow signal intensities",GC:"Reserved for backwards compatibility reasons",GQ:"Reserved for backwards compatibility reasons",GS:"Reserved for backwards compatibility reasons",H0:"Number of perfect hits",H1:"Number of 1-difference hits (see also {NM})",H2:"Number of 2-difference hits",HI:"Query hit index",IH:"Query hit total count",LB:"Library",MC:"CIGAR string for mate/next segment",MD:"String encoding mismatched and deleted reference bases",MF:"Reserved for backwards compatibility reasons",MI:"Molecular identifier; a string that uniquely identifies the molecule from which the record was derived",ML:"Base modification probabilities",MM:"Base modifications / methylation ",MQ:"Mapping quality of the mate/next segment",NH:"Number of reported alignments that contain the query in the current record",NM:"Edit distance to the reference",OA:"Original alignment",OC:"Original CIGAR (deprecated; use {OA} instead)",OP:"Original mapping position (deprecated; use {OA} instead)",OQ:"Original base quality",OX:"Original unique molecular barcode bases",PG:"Program",PQ:"Phred likelihood of the template",PT:"Read annotations for parts of the padded read sequence",PU:"Platform unit",Q2:"Phred quality of the mate/next segment sequence in the {R2} tag",QT:"Phred quality of the sample barcode sequence in the {BC} tag",QX:"Quality score of the unique molecular identifier in the {RX} tag",R2:"Sequence of the mate/next segment in the template",RG:"Read group",RT:"Reserved for backwards compatibility reasons",RX:"Sequence bases of the (possibly corrected) unique molecular identifier",S2:"Reserved for backwards compatibility reasons",SA:"Other canonical alignments in a chimeric alignment",SM:"Template-independent mapping quality",SQ:"Reserved for backwards compatibility reasons",TC:"The number of segments in the template",TS:"Transcript strand",U2:"Phred probability of the 2nd call being wrong conditional on the best being wrong",UQ:"Phred likelihood of the segment, conditional on the mapping being correct"};function L(e){var t=e.value,n=(0,i.useState)(!1),r=(0,a.Z)(n,2),o=r[0],s=r[1],c=(0,i.useState)(!1),u=(0,a.Z)(c,2),d=u[0],f=u[1],m=String(t);return m.length>100?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("button",{type:"button",onClick:function(){l()(m),f(!0),setTimeout((function(){return f(!1)}),700)},children:d?"Copied to clipboard":"Copy"}),(0,y.jsx)("button",{type:"button",onClick:function(){return s((function(e){return!e}))},children:o?"Show less":"Show more"}),(0,y.jsx)("div",{children:o?m:"".concat(m.slice(0,100),"...")})]}):(0,y.jsx)("div",{children:m})}function O(e){var t=e.locString,n=e.model;return(0,y.jsx)(o.Z,{onClick:function(e){e.preventDefault(),v(t,n)},href:"#",children:t})}var N=(0,c.observer)((function(e){var t=e.model,n=f()(t.featureData),a=function(e,t){var n;return(null===(n=t.tags)||void 0===n?void 0:n[e])||t[e]}("SA",n);return(0,y.jsxs)(s.Z,{"data-testid":"alignment-side-drawer",children:[(0,y.jsx)(m.FeatureDetails,(0,r.Z)((0,r.Z)({},e),{},{omit:E,descriptions:(0,r.Z)((0,r.Z)({},P),{},{tags:P}),feature:n,formatter:function(e,n){return"next_segment_position"===n?(0,y.jsx)(O,{model:t,locString:e}):(0,y.jsx)(L,{value:e})}})),a?(0,y.jsx)(w,{model:t,tag:a}):null,void 0!==n.flags?(0,y.jsx)(T,(0,r.Z)({feature:n},e)):null]})}))},71127:function(e,t,n){n.d(t,{d:function(){return u}});var r=n(30969),a=n(14006),i=n(34604),o=n(4422),s=n(37574);function c(e){return e.substring(2).toLowerCase()}function u(e){var t=e.children,n=e.disableReactTree,u=void 0!==n&&n,l=e.mouseEvent,d=void 0===l?"onClick":l,f=e.onClickAway,m=e.touchEvent,p=void 0===m?"onTouchEnd":m,h=r.useRef(!1),g=r.useRef(null),v=r.useRef(!1),b=r.useRef(!1);r.useEffect((function(){return setTimeout((function(){v.current=!0}),0),function(){v.current=!1}}),[]);var Z=(0,a.Z)(t.ref,g),x=(0,i.Z)((function(e){var t=b.current;b.current=!1;var n=(0,o.Z)(g.current);!v.current||!g.current||"clientX"in e&&function(e,t){return t.documentElement.clientWidth<e.clientX||t.documentElement.clientHeight<e.clientY}(e,n)||(h.current?h.current=!1:(e.composedPath?e.composedPath().indexOf(g.current)>-1:!n.documentElement.contains(e.target)||g.current.contains(e.target))||!u&&t||f(e))})),y=function(e){return function(n){b.current=!0;var r=t.props[e];r&&r(n)}},w={ref:Z};return!1!==p&&(w[p]=y(p)),r.useEffect((function(){if(!1!==p){var e=c(p),t=(0,o.Z)(g.current),n=function(){h.current=!0};return t.addEventListener(e,x),t.addEventListener("touchmove",n),function(){t.removeEventListener(e,x),t.removeEventListener("touchmove",n)}}}),[x,p]),!1!==d&&(w[d]=y(d)),r.useEffect((function(){if(!1!==d){var e=c(d),t=(0,o.Z)(g.current);return t.addEventListener(e,x),function(){t.removeEventListener(e,x)}}}),[x,d]),(0,s.jsx)(r.Fragment,{children:r.cloneElement(t,w)})}},56277:function(e,t,n){var r=n(56666),a=n(31461),i=n(7896),o=n(30969),s=n(87023),c=n(26540),u=n(17363),l=n(45971),d=n(6856),f=n(37574),m=["className","component","disableGutters","variant"],p=(0,l.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,!n.disableGutters&&t.gutters,t[n.variant]]}})((function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({position:"relative",display:"flex",alignItems:"center"},!n.disableGutters&&(0,r.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),"dense"===n.variant&&{minHeight:48})}),(function(e){var t=e.theme;return"regular"===e.ownerState.variant&&t.mixins.toolbar})),h=o.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiToolbar"}),r=n.className,o=n.component,l=void 0===o?"div":o,h=n.disableGutters,g=void 0!==h&&h,v=n.variant,b=void 0===v?"regular":v,Z=(0,a.Z)(n,m),x=(0,i.Z)({},n,{component:l,disableGutters:g,variant:b}),y=function(e){var t=e.classes,n={root:["root",!e.disableGutters&&"gutters",e.variant]};return(0,c.Z)(n,d.N,t)}(x);return(0,f.jsx)(p,(0,i.Z)({as:l,className:(0,s.Z)(y.root,r),ref:t,ownerState:x},Z))}));t.Z=h},6856:function(e,t,n){n.d(t,{N:function(){return i}});var r=n(62746),a=n(2975);function i(e){return(0,a.Z)("MuiToolbar",e)}var o=(0,r.Z)("MuiToolbar",["root","gutters","regular","dense"]);t.Z=o}}]);
//# sourceMappingURL=7567.398a3bff.chunk.js.map