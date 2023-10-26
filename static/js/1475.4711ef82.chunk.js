"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[1475],{81475:function(e,n,r){r.r(n);var t=r(96234),a=r(41867),o=r(3762),i=r(49133),l=r(47409),s=r(51590),c=r(93989),u=r(7229),d=r(27768),p=r(23801),h=r(35421),f=r(47192),m=r(80838),v=(0,f.ZL)()((function(e){return{paper:{padding:e.spacing(2),margin:e.spacing(2)},field:{margin:e.spacing(2)}}})),g=["read paired","read mapped in proper pair","read unmapped","mate unmapped","read reverse strand","mate reverse strand","first in pair","second in pair","not primary alignment","read fails platform/vendor quality checks","read is PCR or optical duplicate","supplementary alignment"];function x(e){var n=e.flag,r=void 0===n?0:n,t=e.setFlag;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i.Z,{type:"number",value:r,onChange:function(e){return t(+e.target.value)}}),g.map((function(e,n){var a=r&1<<n,o="".concat(e,"_").concat(a);return(0,m.jsxs)("div",{children:[(0,m.jsx)("input",{type:"checkbox",checked:Boolean(a),onChange:function(e){e.target.checked?t(r|1<<n):t(r&~(1<<n))}}),(0,m.jsx)("label",{htmlFor:o,children:e})]},o)}))]})}var Z=(0,o.observer)((function(e){var n,r,o=e.model,f=e.handleClose,g=v().classes,Z=o.filterBy,b=(0,a.useState)(Z.flagInclude),y=(0,t.Z)(b,2),j=y[0],C=y[1],k=(0,a.useState)(Z.flagExclude),F=(0,t.Z)(k,2),w=F[0],S=F[1],N=(0,a.useState)((null===(n=Z.tagFilter)||void 0===n?void 0:n.tag)||""),A=(0,t.Z)(N,2),R=A[0],D=A[1],L=(0,a.useState)((null===(r=Z.tagFilter)||void 0===r?void 0:r.value)||""),B=(0,t.Z)(L,2),E=B[0],V=B[1],M=(0,a.useState)(Z.readName||""),P=(0,t.Z)(M,2),_=P[0],z=P[1],T=R.match(/^[A-Za-z][A-Za-z0-9]$/),W="https://broadinstitute.github.io/picard/explain-flags.html";return(0,m.jsx)(h.Dialog,{open:!0,onClose:f,title:"Filter options",children:(0,m.jsxs)(l.Z,{children:[(0,m.jsxs)(s.Z,{children:["Set filter bitmask options. Refer to ",(0,m.jsx)(c.Z,{href:W,children:W})," ","for details"]}),(0,m.jsx)(u.Z,{className:g.paper,variant:"outlined",children:(0,m.jsxs)("div",{style:{display:"flex"},children:[(0,m.jsxs)("div",{children:[(0,m.jsx)(s.Z,{children:"Read must have ALL these flags"}),(0,m.jsx)(x,{flag:j,setFlag:C})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)(s.Z,{children:"Read must have NONE of these flags"}),(0,m.jsx)(x,{flag:w,setFlag:S})]})]})}),(0,m.jsxs)(u.Z,{className:g.paper,variant:"outlined",children:[(0,m.jsx)(s.Z,{children:"Filter by tag name and value. Use * in the value field to get all reads containing any value for that tag. Example: filter tag name SA with value * to get all split/supplementary reads. Other examples include HP for haplotype, or RG for read group"}),(0,m.jsx)(i.Z,{className:g.field,value:R,onChange:function(e){return D(e.target.value)},placeholder:"Enter tag name",inputProps:{maxLength:2},error:2===R.length&&!T,helperText:2!==R.length||T?"":"Not a valid tag"}),(0,m.jsx)(i.Z,{className:g.field,value:E,onChange:function(e){return V(e.target.value)},placeholder:"Enter tag value"})]}),(0,m.jsxs)(u.Z,{className:g.paper,variant:"outlined",children:[(0,m.jsx)(s.Z,{children:"Filter by read name"}),(0,m.jsx)(i.Z,{className:g.field,value:_,onChange:function(e){return z(e.target.value)},placeholder:"Enter read name"})]}),(0,m.jsxs)(d.Z,{children:[(0,m.jsx)(p.Z,{variant:"contained",color:"primary",autoFocus:!0,type:"submit",onClick:function(){o.setFilterBy({flagInclude:j,flagExclude:w,readName:_,tagFilter:""!==R?{tag:R,value:E}:void 0}),f()},children:"Submit"}),(0,m.jsx)(p.Z,{variant:"contained",color:"secondary",onClick:function(){return f()},children:"Cancel"})]})]})})}));n.default=Z},93989:function(e,n,r){r.d(n,{Z:function(){return F}});var t=r(68079),a=r(96234),o=r(56666),i=r(31461),l=r(7896),s=r(41867),c=r(66184),u=r(92705),d=r(9931),p=r(75693),h=r(90293),f=r(62643),m=r(40234),v=r(51590),g=r(31633),x=r(60183),Z=r(71939),b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},y=function(e){var n=e.theme,r=e.ownerState,t=function(e){return b[e]||e}(r.color),a=(0,x.DW)(n,"palette.".concat(t),!1)||r.color,o=(0,x.DW)(n,"palette.".concat(t,"Channel"));return"vars"in n&&o?"rgba(".concat(o," / 0.4)"):(0,Z.Fq)(a,.4)},j=r(80838),C=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],k=(0,p.ZP)(v.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[n.root,n["underline".concat((0,d.Z)(r.underline))],"button"===r.component&&n.button]}})((function(e){var n=e.theme,r=e.ownerState;return(0,l.Z)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&(0,l.Z)({textDecoration:"underline"},"inherit"!==r.color&&{textDecorationColor:y({theme:n,ownerState:r})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===r.component&&(0,o.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(g.Z.focusVisible),{outline:"auto"}))})),F=s.forwardRef((function(e,n){var r=(0,h.Z)({props:e,name:"MuiLink"}),o=r.className,p=r.color,v=void 0===p?"primary":p,x=r.component,Z=void 0===x?"a":x,y=r.onBlur,F=r.onFocus,w=r.TypographyClasses,S=r.underline,N=void 0===S?"always":S,A=r.variant,R=void 0===A?"inherit":A,D=r.sx,L=(0,i.Z)(r,C),B=(0,f.Z)(),E=B.isFocusVisibleRef,V=B.onBlur,M=B.onFocus,P=B.ref,_=s.useState(!1),z=(0,a.Z)(_,2),T=z[0],W=z[1],H=(0,m.Z)(n,P),O=(0,l.Z)({},r,{color:v,component:Z,focusVisible:T,underline:N,variant:R}),q=function(e){var n=e.classes,r=e.component,t=e.focusVisible,a=e.underline,o={root:["root","underline".concat((0,d.Z)(a)),"button"===r&&"button",t&&"focusVisible"]};return(0,u.Z)(o,g.w,n)}(O);return(0,j.jsx)(k,(0,l.Z)({color:v,className:(0,c.Z)(q.root,o),classes:w,component:Z,onBlur:function(e){V(e),!1===E.current&&W(!1),y&&y(e)},onFocus:function(e){M(e),!0===E.current&&W(!0),F&&F(e)},ref:H,ownerState:O,variant:R,sx:[].concat((0,t.Z)(Object.keys(b).includes(v)?[]:[{color:v}]),(0,t.Z)(Array.isArray(D)?D:[D]))},L))}))},31633:function(e,n,r){r.d(n,{w:function(){return o}});var t=r(70101),a=r(88498);function o(e){return(0,a.Z)("MuiLink",e)}var i=(0,t.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);n.Z=i}}]);
//# sourceMappingURL=1475.4711ef82.chunk.js.map