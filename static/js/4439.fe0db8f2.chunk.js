heck both boxes for the "reverse complement"'})]}),(0,W.jsxs)(x.Z,{children:[(0,W.jsx)(b.Z,{onClick:function(){k()(U),H(!0),setTimeout((function(){return H(!1)}),500)},disabled:Q||!!G||X,color:"primary",startIcon:(0,W.jsx)(j.pt,{}),children:I?"Copied":"Copy to clipboard"}),(0,W.jsx)(b.Z,{onClick:function(){(0,g.saveAs)(new Blob([U||""],{type:"text/x-fasta;charset=utf-8"}),"jbrowse_ref_seq.fa")},disabled:Q||!!G,color:"primary",startIcon:(0,W.jsx)(y.Z,{}),children:"Download FASTA"}),(0,W.jsx)(b.Z,{onClick:n,variant:"contained",children:"Close"})]})]})}))},14393:function(e,t,n){var r=n(71600);t.Z=void 0;var a=r(n(7152)),o=n(29938),s=(0,a.default)((0,o.jsx)("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"}),"GetApp");t.Z=s},80691:function(e,t,n){n.d(t,{Z:function(){return C}});var r=n(56666),a=n(31461),o=n(7896),s=n(96902),i=n(24463),c=n(57277),u=n(61235),l=n(73674),d=n(86655),f=n(8044),m=n(91221),h=n(29938),p=["className","component","disableGutters","fixed","maxWidth","classes"],x=(0,m.Z)(),b=(0,f.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,c.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),v=function(e){return(0,d.Z)({props:e,name:"MuiContainer",defaultTheme:x})};var g=n(70378),Z=n(2252),w=n(53068),k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,n=void 0===t?b:t,d=e.useThemeProps,f=void 0===d?v:d,m=e.componentName,x=void 0===m?"MuiContainer":m,g=n((function(e){var t=e.theme,n=e.ownerState;return(0,o.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!n.disableGutters&&(0,r.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,n){var r=n,a=t.breakpoints.values[r];return 0!==a&&(e[t.breakpoints.up(r)]={maxWidth:"".concat(a).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,n=e.ownerState;return(0,o.Z)({},"xs"===n.maxWidth&&(0,r.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),n.maxWidth&&"xs"!==n.maxWidth&&(0,r.Z)({},t.breakpoints.up(n.maxWidth),{maxWidth:"".concat(t.breakpoints.values[n.maxWidth]).concat(t.breakpoints.unit)}))})),Z=s.forwardRef((function(e,t){var n=f(e),r=n.className,s=n.component,d=void 0===s?"div":s,m=n.disableGutters,b=void 0!==m&&m,v=n.fixed,Z=void 0!==v&&v,w=n.maxWidth,k=void 0===w?"lg":w,C=(0,a.Z)(n,p),S=(0,o.Z)({},n,{component:d,disableGutters:b,fixed:Z,maxWidth:k}),j=function(e,t){var n=e.classes,r=e.fixed,a=e.disableGutters,o=e.maxWidth,s={root:["root",o&&"maxWidth".concat((0,c.Z)(String(o))),r&&"fixed",a&&"disableGutters"]};return(0,l.Z)(s,(function(e){return(0,u.Z)(t,e)}),n)}(S,x);return(0,h.jsx)(g,(0,o.Z)({as:d,ownerState:S,className:(0,i.default)(j.root,r),ref:t},C))}));return Z}({createStyledComponent:(0,Z.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,g.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:function(e){return(0,w.Z)({props:e,name:"MuiContainer"})}}),C=k},8044:function(e,t,n){var r=(0,n(64630).ZP)();t.Z=r}}]);
//# sourceMappingURL=4439.fe0db8f2.chunk.js.map"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[4439],{24439:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var r=n(32723),a=n(96234),o=n(34795),s=n(96902),i=n(91188),c=n(52809),u=n(35388),l=n(80691),d=n(78888),f=n(66519),m=n(52),h=n(80367),p=n(32114),x=n(99688),b=n(44536),v=n(4782),g=n(64837),Z=n(99836),w=n(21051),k=n.n(w),C=n(17867),S=n(27664);var j=n(23642),y=n(14393),W=n(29938),R=(0,i.ZL)()({dialogContent:{width:"80em"},textAreaFont:{fontFamily:"Courier New"}});function q(e,t,n){return G.apply(this,arguments)}function G(){return(G=(0,o.Z)((0,r.Z)().mark((function e(t,n,a){var o,s,i,c,u,l,d,f,m;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=(0,S.getSession)(t),s=t.leftOffset,i=t.rightOffset,s&&i){e.next=4;break}throw new Error("no offsets on model to use for range");case 4:if(s.assemblyName===i.assemblyName){e.next=6;break}throw new Error("not able to fetch sequences from multiple assemblies");case 6:if(c=o.rpcManager,u=o.assemblyManager,l=s.assemblyName||i.assemblyName||"",d=u.get(l)){e.next=11;break}throw new Error("assembly ".concat(l," not found"));case 11:return f=(0,Z.getConf)(d,["sequence","adapter"]),m="getSequence",e.abrupt("return",c.call(m,"CoreGetFeatures",{adapterConfig:f,regions:n,sessionId:m,signal:a}));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N=(0,v.observer)((function(e){var t=e.model,n=e.handleClose,i=R().classes,v=(0,S.getSession)(t),Z=(0,s.useState)(),w=(0,a.Z)(Z,2),G=w[0],N=w[1],A=(0,s.useState)(),M=(0,a.Z)(A,2),E=M[0],L=M[1],O=(0,s.useState)(!1),F=(0,a.Z)(O,2),T=F[0],_=F[1],P=(0,s.useState)(!1),z=(0,a.Z)(P,2),I=z[0],H=z[1],B=(0,s.useState)(!1),D=(0,a.Z)(B,2),V=D[0],$=D[1],J=t.leftOffset,K=t.rightOffset,Q=Boolean(void 0===E);(0,s.useEffect)((function(){var e=!0,n=new AbortController;return(0,o.Z)((0,r.Z)().mark((function a(){var o,s;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,0!==(o=t.getSelectedRegions(J,K)).length){r.next=4;break}throw new Error("Selected region is out of bounds");case 4:return r.next=6,q(t,o,n.signal);case 6:s=r.sent,e&&L(s),r.next=14;break;case 10:r.prev=10,r.t0=r.catch(0),console.error(r.t0),e&&N(r.t0);case 14:case"end":return r.stop()}}),a,null,[[0,10]])})))(),function(){n.abort(),e=!1}}),[t,v,J,K]);var U=E?E.filter((function(e){return!!e})).map((function(e){var t,n=e.get("seq"),r=e.get("refName"),a=e.get("start")+1,o=e.get("end"),s="".concat(r,":").concat(a,"-").concat(o);if((null===(t=n)||void 0===t?void 0:t.length)!==o-a+1)throw new Error("".concat(s," returned ").concat(n.length.toLocaleString()," bases, but should have returned ").concat((o-a).toLocaleString()));return T&&(n=(0,S.reverse)(n)),V&&(n=(0,S.complement)(n)),{header:s+(T?"-rev":"")+(V?"-comp":""),seq:n}})).map((function(e){return">".concat(e.header,"\n").concat(e.seq.replaceAll(/(.{1,80})/g,"$1\n").trimEnd())})).join("\n"):"",X=!!U&&U.length>1e6;return(0,W.jsxs)(C.Dialog,{maxWidth:"xl",open:!0,onClose:function(){n(),t.setOffsets()},title:"Reference sequence",children:[(0,W.jsxs)(c.Z,{children:[G?(0,W.jsx)(u.Z,{color:"error",children:"".concat(G)}):Q?(0,W.jsxs)(l.Z,{children:["Retrieving reference sequence...",(0,W.jsx)(d.Z,{style:{marginLeft:10},size:20,disableShrink:!0})]}):null,(0,W.jsx)(f.Z,{"data-testid":"rubberband-sequence",variant:"outlined",multiline:!0,minRows:5,maxRows:10,disabled:X,className:i.dialogContent,fullWidth:!0,value:X?"Reference sequence too large to display, use the download FASTA button":U,InputProps:{readOnly:!0,classes:{input:i.textAreaFont}}}),(0,W.jsxs)(m.Z,{children:[(0,W.jsx)(h.Z,{control:(0,W.jsx)(p.Z,{value:T,onChange:function(e){return _(e.target.checked)}}),label:"Reverse sequence"}),(0,W.jsx)(h.Z,{control:(0,W.jsx)(p.Z,{value:V,onChange:function(e){return $(e.target.checked)}}),label:"Complement sequence"})]}),(0,W.jsx)(u.Z,{style:{margin:10},children:'Note: C