"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[4388],{94388:function(e,r,t){t.r(r),t.d(r,{breadcrumbsClasses:function(){return S},default:function(){return N},getBreadcrumbsUtilityClass:function(){return y}});var o=t(68079),a=t(96234),n=t(56666),l=t(7896),s=t(31461),i=t(30969),c=(t(9479),t(81856)),u=t(26540),d=t(62221),p=t(2441),m=t(70054),f=t(74262),h=t(12104),g=t(37574),b=(0,h.Z)((0,g.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),x=t(15556),v=(0,d.ZP)(x.Z)((function(e){var r=e.theme;return(0,l.Z)({display:"flex",marginLeft:"calc(".concat(r.spacing(1)," * 0.5)"),marginRight:"calc(".concat(r.spacing(1)," * 0.5)")},"light"===r.palette.mode?{backgroundColor:r.palette.grey[100],color:r.palette.grey[700]}:{backgroundColor:r.palette.grey[700],color:r.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,l.Z)({},"light"===r.palette.mode?{backgroundColor:r.palette.grey[200]}:{backgroundColor:r.palette.grey[600]}),"&:active":(0,l.Z)({boxShadow:r.shadows[0]},"light"===r.palette.mode?{backgroundColor:(0,f._4)(r.palette.grey[200],.12)}:{backgroundColor:(0,f._4)(r.palette.grey[600],.12)})})})),Z=(0,d.ZP)(b)({width:24,height:16});var C=function(e){var r=e;return(0,g.jsx)("li",{children:(0,g.jsx)(v,(0,l.Z)({focusRipple:!0},e,{ownerState:r,children:(0,g.jsx)(Z,{ownerState:r})}))})},w=t(2975);function y(e){return(0,w.Z)("MuiBreadcrumbs",e)}var S=(0,t(62746).Z)("MuiBreadcrumbs",["root","ol","li","separator"]),j=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],k=(0,d.ZP)(m.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,r){return[(0,n.Z)({},"& .".concat(S.li),r.li),r.root]}})({}),B=(0,d.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,r){return r.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),R=(0,d.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,r){return r.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function M(e,r,t,o){return e.reduce((function(a,n,l){return l<e.length-1?a=a.concat(n,(0,g.jsx)(R,{"aria-hidden":!0,className:r,ownerState:o,children:t},"separator-".concat(l))):a.push(n),a}),[])}var N=i.forwardRef((function(e,r){var t=(0,p.Z)({props:e,name:"MuiBreadcrumbs"}),n=t.children,d=t.className,m=t.component,f=void 0===m?"nav":m,h=t.expandText,b=void 0===h?"Show path":h,x=t.itemsAfterCollapse,v=void 0===x?1:x,Z=t.itemsBeforeCollapse,w=void 0===Z?1:Z,S=t.maxItems,R=void 0===S?8:S,N=t.separator,_=void 0===N?"/":N,P=(0,s.Z)(t,j),z=i.useState(!1),A=(0,a.Z)(z,2),I=A[0],T=A[1],L=(0,l.Z)({},t,{component:f,expanded:I,expandText:b,itemsAfterCollapse:v,itemsBeforeCollapse:w,maxItems:R,separator:_}),q=function(e){var r=e.classes;return(0,u.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},y,r)}(L),E=i.useRef(null),H=i.Children.toArray(n).filter((function(e){return i.isValidElement(e)})).map((function(e,r){return(0,g.jsx)("li",{className:q.li,children:e},"child-".concat(r))}));return(0,g.jsx)(k,(0,l.Z)({ref:r,component:f,color:"text.secondary",className:(0,c.default)(q.root,d),ownerState:L},P,{children:(0,g.jsx)(B,{className:q.ol,ref:E,ownerState:L,children:M(I||R&&H.length<=R?H:function(e){return w+v>=e.length?e:[].concat((0,o.Z)(e.slice(0,w)),[(0,g.jsx)(C,{"aria-label":b,onClick:function(){T(!0);var e=E.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,o.Z)(e.slice(e.length-v,e.length)))}(H),q.separator,_,L)})}))}))}}]);
//# sourceMappingURL=4388.9eea4547.chunk.js.map