"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[3821],{13821:function(n,e,r){r.r(e);r(96902);var o=r(4782),t=r(63680),i=r(42054),a=r(63348),l=r(35388),c=r(91188),s=r(29938),u=(0,c.ZL)()((function(n){return{root:{margin:n.spacing(2),paddingTop:n.spacing(2)},subtitle:{margin:n.spacing(1)},pluginList:{margin:n.spacing(1),marginTop:n.spacing(5)}}}));e.default=(0,o.observer)((function(n){var e=n.model,r=u().classes,o=(0,i.getSession)(e).version,c=(0,t.getEnv)(e).pluginManager,d=c.plugins,p=d.filter((function(n){var e;return null===(e=c.pluginMetadata[n.name])||void 0===e?void 0:e.isCore})).map((function(n){return n.name})),m=d.filter((function(n){return p.includes(n.name)})).map((function(n){return(0,s.jsxs)("li",{children:[n.name," ",n.version||""]},n.name)})),f=d.filter((function(n){return!p.includes(n.name)})).map((function(n){var e="".concat(n.name," ").concat(n.version||"");return(0,s.jsx)("li",{children:n.url?(0,s.jsx)(a.Z,{target:"_blank",rel:"noopener noreferrer",href:n.url,children:e}):e},n.name)}));return(0,s.jsxs)("div",{className:r.root,children:[(0,s.jsx)(l.Z,{variant:"h4",align:"center",color:"primary",children:"JBrowse 2"}),(0,s.jsx)(l.Z,{variant:"h6",align:"center",className:r.subtitle,children:o}),(0,s.jsxs)(l.Z,{align:"center",variant:"body2",children:["JBrowse is a"," ",(0,s.jsx)(a.Z,{href:"http://gmod.org/",target:"_blank",rel:"noopener noreferrer",children:"GMOD"})," ","project"]}),(0,s.jsx)("br",{}),(0,s.jsx)(l.Z,{align:"center",children:"\xa9 2019-2022 The Evolutionary Software Foundation"}),(0,s.jsxs)("div",{className:r.pluginList,children:[f.length?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.Z,{variant:"h6",children:"External plugins loaded"}),(0,s.jsx)("ul",{children:f})]}):null,m.length?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.Z,{variant:"h6",children:"Core plugins loaded"}),(0,s.jsx)("ul",{children:m})]}):null]})]})}))},63348:function(n,e,r){r.d(e,{Z:function(){return C}});var o=r(68079),t=r(96234),i=r(56666),a=r(31461),l=r(7896),c=r(96902),s=r(24463),u=r(73674),d=r(70378),p=r(2252),m=r(53068),f=r(89779),v=r(22756),h=r(35388),g=r(974),b=r(72762),x=r(16644),Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},y=function(n){var e=n.theme,r=n.ownerState,o=function(n){return Z[n]||n}(r.color),t=(0,b.DW)(e,"palette.".concat(o),!1)||r.color,i=(0,b.DW)(e,"palette.".concat(o,"Channel"));return"vars"in e&&i?"rgba(".concat(i," / 0.4)"):(0,x.Fq)(t,.4)},j=r(29938),w=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],k=(0,p.ZP)(h.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(n,e){var r=n.ownerState;return[e.root,e["underline".concat((0,d.Z)(r.underline))],"button"===r.component&&e.button]}})((function(n){var e=n.theme,r=n.ownerState;return(0,l.Z)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&(0,l.Z)({textDecoration:"underline"},"inherit"!==r.color&&{textDecorationColor:y({theme:e,ownerState:r})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===r.component&&(0,i.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(g.Z.focusVisible),{outline:"auto"}))})),C=c.forwardRef((function(n,e){var r=(0,m.Z)({props:n,name:"MuiLink"}),i=r.className,p=r.color,h=void 0===p?"primary":p,b=r.component,x=void 0===b?"a":b,y=r.onBlur,C=r.onFocus,S=r.TypographyClasses,D=r.underline,F=void 0===D?"always":D,M=r.variant,L=void 0===M?"inherit":M,N=r.sx,A=(0,a.Z)(r,w),B=(0,f.Z)(),T=B.isFocusVisibleRef,V=B.onBlur,_=B.onFocus,R=B.ref,W=c.useState(!1),E=(0,t.Z)(W,2),z=E[0],H=E[1],J=(0,v.Z)(e,R),O=(0,l.Z)({},r,{color:h,component:x,focusVisible:z,underline:F,variant:L}),P=function(n){var e=n.classes,r=n.component,o=n.focusVisible,t=n.underline,i={root:["root","underline".concat((0,d.Z)(t)),"button"===r&&"button",o&&"focusVisible"]};return(0,u.Z)(i,g.w,e)}(O);return(0,j.jsx)(k,(0,l.Z)({color:h,className:(0,s.default)(P.root,i),classes:S,component:x,onBlur:function(n){V(n),!1===T.current&&H(!1),y&&y(n)},onFocus:function(n){_(n),!0===T.current&&H(!0),C&&C(n)},ref:J,ownerState:O,variant:L,sx:[].concat((0,o.Z)(Object.keys(Z).includes(h)?[]:[{color:h}]),(0,o.Z)(Array.isArray(N)?N:[N]))},A))}))},974:function(n,e,r){r.d(e,{w:function(){return i}});var o=r(74732),t=r(61235);function i(n){return(0,t.Z)("MuiLink",n)}var a=(0,o.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);e.Z=a}}]);
//# sourceMappingURL=3821.b5735a04.chunk.js.map