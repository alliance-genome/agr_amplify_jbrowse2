"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[366],{40366:(e,o,r)=>{r.r(o),r.d(o,{breadcrumbsClasses:()=>v,default:()=>M,getBreadcrumbsUtilityClass:()=>S});var t=r(6614),l=r(83673),s=r(7552),a=(r(19487),r(93878)),n=r(60827),c=r(3183),i=r(51148),p=r(31049),d=r(36715),m=r(18283),u=r(74893),h=r(69500);const g=(0,u.A)((0,h.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");var b=r(83159);const f=["slots","slotProps"],x=(0,i.Ay)(b.A)((({theme:e})=>(0,t.A)({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},"light"===e.palette.mode?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,t.A)({},"light"===e.palette.mode?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":(0,t.A)({boxShadow:e.shadows[0]},"light"===e.palette.mode?{backgroundColor:(0,m.tL)(e.palette.grey[200],.12)}:{backgroundColor:(0,m.tL)(e.palette.grey[600],.12)})}))),A=(0,i.Ay)(g)({width:24,height:16}),y=function(e){const{slots:o={},slotProps:r={}}=e,s=(0,l.A)(e,f),a=e;return(0,h.jsx)("li",{children:(0,h.jsx)(x,(0,t.A)({focusRipple:!0},s,{ownerState:a,children:(0,h.jsx)(A,(0,t.A)({as:o.CollapsedIcon,ownerState:a},r.collapsedIcon))}))})};var C=r(55549),w=r(9577);function S(e){return(0,w.Ay)("MuiBreadcrumbs",e)}const v=(0,C.A)("MuiBreadcrumbs",["root","ol","li","separator"]),j=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],k=(0,i.Ay)(d.A,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,o)=>[{[`& .${v.li}`]:o.li},o.root]})({}),I=(0,i.Ay)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,o)=>o.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),B=(0,i.Ay)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,o)=>o.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function R(e,o,r,t){return e.reduce(((l,s,a)=>(a<e.length-1?l=l.concat(s,(0,h.jsx)(B,{"aria-hidden":!0,className:o,ownerState:t,children:r},`separator-${a}`)):l.push(s),l)),[])}const M=s.forwardRef((function(e,o){const r=(0,p.A)({props:e,name:"MuiBreadcrumbs"}),{children:i,className:d,component:m="nav",slots:u={},slotProps:g={},expandText:b="Show path",itemsAfterCollapse:f=1,itemsBeforeCollapse:x=1,maxItems:A=8,separator:C="/"}=r,w=(0,l.A)(r,j),[v,B]=s.useState(!1),M=(0,t.A)({},r,{component:m,expanded:v,expandText:b,itemsAfterCollapse:f,itemsBeforeCollapse:x,maxItems:A,separator:C}),N=(e=>{const{classes:o}=e;return(0,n.A)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},S,o)})(M),P=(0,c.Q)({elementType:u.CollapsedIcon,externalSlotProps:g.collapsedIcon,ownerState:M}),T=s.useRef(null),$=s.Children.toArray(i).filter((e=>s.isValidElement(e))).map(((e,o)=>(0,h.jsx)("li",{className:N.li,children:e},`child-${o}`)));return(0,h.jsx)(k,(0,t.A)({ref:o,component:m,color:"text.secondary",className:(0,a.A)(N.root,d),ownerState:M},w,{children:(0,h.jsx)(I,{className:N.ol,ref:T,ownerState:M,children:R(v||A&&$.length<=A?$:(e=>x+f>=e.length?e:[...e.slice(0,x),(0,h.jsx)(y,{"aria-label":b,slots:{CollapsedIcon:u.CollapsedIcon},slotProps:{collapsedIcon:P},onClick:()=>{B(!0);const e=T.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis"),...e.slice(e.length-f,e.length)])($),N.separator,C,M)})}))}))}}]);
//# sourceMappingURL=366.7167c09e.chunk.js.map