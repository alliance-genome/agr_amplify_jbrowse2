"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[4822],{54822:function(e,r,t){t.r(r),t.d(r,{breadcrumbsClasses:function(){return j},default:function(){return _},getBreadcrumbsUtilityClass:function(){return S}});var o=t(68079),a=t(96234),n=t(56666),l=t(7896),s=t(31461),i=t(96902),c=(t(93196),t(24463)),u=t(73674),d=t(2252),p=t(53068),m=t(35388),f=t(16644),h=t(30992),g=t(29938),b=(0,h.Z)((0,g.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),x=t(83413),v=(0,d.ZP)(x.Z)((function(e){var r=e.theme;return(0,l.Z)({display:"flex",marginLeft:"calc(".concat(r.spacing(1)," * 0.5)"),marginRight:"calc(".concat(r.spacing(1)," * 0.5)")},"light"===r.palette.mode?{backgroundColor:r.palette.grey[100],color:r.palette.grey[700]}:{backgroundColor:r.palette.grey[700],color:r.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,l.Z)({},"light"===r.palette.mode?{backgroundColor:r.palette.grey[200]}:{backgroundColor:r.palette.grey[600]}),"&:active":(0,l.Z)({boxShadow:r.shadows[0]},"light"===r.palette.mode?{backgroundColor:(0,f._4)(r.palette.grey[200],.12)}:{backgroundColor:(0,f._4)(r.palette.grey[600],.12)})})})),Z=(0,d.ZP)(b)({width:24,height:16});var C=function(e){var r=e;return(0,g.jsx)("li",{children:(0,g.jsx)(v,(0,l.Z)({focusRipple:!0},e,{ownerState:r,children:(0,g.jsx)(Z,{ownerState:r})}))})},w=t(74732),y=t(61235);function S(e){return(0,y.Z)("MuiBreadcrumbs",e)}var j=(0,w.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),k=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],B=(0,d.ZP)(m.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,r){return[(0,n.Z)({},"& .".concat(j.li),r.li),r.root]}})({}),R=(0,d.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,r){return r.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),M=(0,d.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,r){return r.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function N(e,r,t,o){return e.reduce((function(a,n,l){return l<e.length-1?a=a.concat(n,(0,g.jsx)(M,{"aria-hidden":!0,className:r,ownerState:o,children:t},"separator-".concat(l))):a.push(n),a}),[])}var _=i.forwardRef((function(e,r){var t=(0,p.Z)({props:e,name:"MuiBreadcrumbs"}),n=t.children,d=t.className,m=t.component,f=void 0===m?"nav":m,h=t.expandText,b=void 0===h?"Show path":h,x=t.itemsAfterCollapse,v=void 0===x?1:x,Z=t.itemsBeforeCollapse,w=void 0===Z?1:Z,y=t.maxItems,j=void 0===y?8:y,M=t.separator,_=void 0===M?"/":M,P=(0,s.Z)(t,k),z=i.useState(!1),A=(0,a.Z)(z,2),I=A[0],T=A[1],L=(0,l.Z)({},t,{component:f,expanded:I,expandText:b,itemsAfterCollapse:v,itemsBeforeCollapse:w,maxItems:j,separator:_}),q=function(e){var r=e.classes;return(0,u.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},S,r)}(L),E=i.useRef(null),H=i.Children.toArray(n).filter((function(e){return i.isValidElement(e)})).map((function(e,r){return(0,g.jsx)("li",{className:q.li,children:e},"child-".concat(r))}));return(0,g.jsx)(B,(0,l.Z)({ref:r,component:f,color:"text.secondary",className:(0,c.default)(q.root,d),ownerState:L},P,{children:(0,g.jsx)(R,{className:q.ol,ref:E,ownerState:L,children:N(I||j&&H.length<=j?H:function(e){return w+v>=e.length?e:[].concat((0,o.Z)(e.slice(0,w)),[(0,g.jsx)(C,{"aria-label":b,onClick:function(){T(!0);var e=E.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,o.Z)(e.slice(e.length-v,e.length)))}(H),q.separator,_,L)})}))}))}}]);
//# sourceMappingURL=4822.a23d08e9.chunk.js.map