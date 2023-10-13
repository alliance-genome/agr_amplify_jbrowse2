"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[6118],{46118:function(n,e,t){t.r(e),t.d(e,{default:function(){return f}});var r=t(33028),s=t(30969),c=t(81073),o=t(33853),a=t(68079),u="rgb(220,220,180)",d="rgba(250,200,200)",l=t(37574);function i(n){var e=n.utr,t=n.cds,r=n.exons,c=n.sequence,o=n.upstream,i=n.downstream,p=n.includeIntrons,g=n.collapseIntron,x=n.intronBp,f=(t.length?[].concat((0,a.Z)(t),(0,a.Z)(e)).sort((function(n,e){return n.start-e.start})):r).filter((function(n){return n.start!==n.end}));return(0,l.jsxs)(l.Fragment,{children:[o?(0,l.jsx)("span",{style:{background:d},children:o}):null,f.map((function(n,e){var t,r=c.slice(n.end,null===(t=f[e+1])||void 0===t?void 0:t.start);return(0,l.jsxs)(s.Fragment,{children:[(0,l.jsx)("span",{style:{background:"CDS"===n.type?u:"rgb(200,240,240)"},children:c.slice(n.start,n.end)}),p&&e<f.length-1?(0,l.jsx)("span",{style:{background:undefined},children:g&&r.length>2*x?"".concat(r.slice(0,x),"...").concat(r.slice(-x)):r}):null]},JSON.stringify(n))})),i?(0,l.jsx)("span",{style:{background:d},children:i}):null]})}function p(n){for(var e=n.cds,t=n.sequence,r=n.codonTable,s=(0,o.zo)(e,t),c="",a=0;a<s.length;a+=3)c+=r[s.slice(a,a+3)]||"&";return(0,l.jsx)("span",{style:{background:"rgb(220,160,220)"},children:c})}function g(n){var e=n.sequence,t=n.upstream,r=n.downstream;return(0,l.jsxs)(l.Fragment,{children:[t?(0,l.jsx)("span",{style:{background:d},children:t}):null,(0,l.jsx)("span",{style:{background:"rgb(200,280,200)"},children:e}),r?(0,l.jsx)("span",{style:{background:d},children:r}):null]})}function x(n){var e=n.cds,t=n.sequence;return(0,l.jsx)("span",{style:{background:u},children:(0,o.zo)(e,t)})}var f=s.forwardRef((function(n,e){var t=n.feature,s=n.mode,a=n.intronBp,u=void 0===a?10:a,d=n.sequence,f=d.seq,h=d.upstream,m=void 0===h?"":h,b=d.downstream,j=void 0===b?"":b,v=t.subfeatures,w=(void 0===v?[]:v).sort((function(n,e){return n.start-e.start})).map((function(n){return(0,r.Z)((0,r.Z)({},n),{},{start:n.start-t.start,end:n.end-t.start})})),y=(0,o.D8)(w.filter((function(n){return"CDS"===n.type}))),k=(0,o.D8)(w.filter((function(n){return n.type.match(/utr/i)}))),q=(0,o.D8)(w.filter((function(n){return"exon"===n.type})));if(!k.length&&y.length&&q.length&&(k=(0,o.ZK)(y,q)),k.length||!y.length||q.length||(k=(0,o.mw)(y,{start:0,end:t.end-t.start,type:"gene"})),-1===t.strand){var _=[(0,c.revcom)(f),(0,c.revcom)(j),(0,c.revcom)(m)];f=_[0],m=_[1],j=_[2],y=(0,o.Wx)(y,f.length),q=(0,o.Wx)(q,f.length),k=(0,o.Wx)(k,f.length)}var I=(0,c.generateCodonTable)(c.defaultCodonTable);return(0,l.jsx)("div",{ref:e,"data-testid":"sequence_panel",children:(0,l.jsxs)("div",{style:{fontFamily:"monospace",wordWrap:"break-word",overflow:"auto",color:"black",fontSize:12,maxWidth:600,maxHeight:300},children:[(0,l.jsx)("span",{style:{background:"white"},children:">".concat(t.name||t.id||"".concat(t.refName,":").concat(t.start+1,"-").concat(t.end),"-").concat(s,"\n")}),(0,l.jsx)("br",{}),"genomic"===s?(0,l.jsx)(g,{sequence:f}):"genomic_sequence_updownstream"===s?(0,l.jsx)(g,{sequence:f,upstream:m,downstream:j}):"cds"===s?(0,l.jsx)(x,{cds:y,sequence:f}):"cdna"===s?(0,l.jsx)(i,{exons:q,cds:y,utr:k,sequence:f,intronBp:u}):"protein"===s?(0,l.jsx)(p,{cds:y,codonTable:I,sequence:f}):"gene"===s?(0,l.jsx)(i,{exons:q,cds:y,utr:k,sequence:f,includeIntrons:!0,intronBp:u}):"gene_collapsed_intron"===s?(0,l.jsx)(i,{exons:q,cds:y,sequence:f,utr:k,includeIntrons:!0,collapseIntron:!0,intronBp:u}):"gene_updownstream"===s?(0,l.jsx)(i,{exons:q,cds:y,sequence:f,utr:k,upstream:m,downstream:j,includeIntrons:!0,intronBp:u}):"gene_updownstream_collapsed_intron"===s?(0,l.jsx)(i,{exons:q,cds:y,sequence:f,utr:k,upstream:m,downstream:j,includeIntrons:!0,collapseIntron:!0,intronBp:u}):(0,l.jsx)("div",{children:"Unknown type"})]})})}))}}]);
//# sourceMappingURL=6118.3b8e0869.chunk.js.map