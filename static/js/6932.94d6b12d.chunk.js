"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[6932],{36932:(e,t,l)=>{l.r(t),l.d(t,{default:()=>_});var n=l(7552),o=l(29499),a=l(5401),r=l(58507),c=l(75785),i=l(99546),s=l(33039),u=l.n(s),d=l(943),m=l(40985),h=l(2187),g=l(43163),p=l(61723),b=l(24387),E=l(68446),f=l(21254),C=l.n(f),w=l(84313);function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},v.apply(this,arguments)}const k=(0,c.n9)()((e=>({closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}})));function A(e){return n.createElement(C(),{handle:"#draggable-dialog-title",cancel:'[class*="MuiDialogContent-root"]'},n.createElement(d.A,e))}const S=(0,E.observer)((function(e){const{classes:t}=k(),{title:l,children:o,onClose:a}=e;return n.createElement(m.A,v({},e,{PaperComponent:A,"aria-labelledby":"draggable-dialog-title"}),n.createElement(h.A,null,n.createElement(g.A,{style:{cursor:"move"},id:"draggable-dialog-title"},l,a?n.createElement(p.A,{className:t.closeButton,onClick:()=>{a()}},n.createElement(w.A,null)):null),n.createElement(b.A,null),o))}));var y=l(23654),M=l(66395),x=l(58474),O=l(3109),T=l(3488),j=l(5247),H=l(43450),N=l(48735);const B=(0,c.n9)()({cell:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}),L=function({rows:e,onChange:t,showTips:l}){const{classes:o}=B(),[r,c]=(0,n.useState)(null),[s,u]=(0,n.useState)([]),{name:d,color:m,baseUri:h,...g}=e[0],[p,b]=(0,n.useState)("blue"),[E,f]=(0,n.useState)({idx:0,field:null});return n.createElement("div",null,n.createElement(a.A,{disabled:!s.length,onClick:e=>c(e.currentTarget)},"Change color of selected items"),n.createElement(a.A,{onClick:()=>t((0,x.BO)([...e],s)),disabled:!s.length},n.createElement(H.A,null),l?"Move selected items up":null),n.createElement(a.A,{onClick:()=>t((0,x.oJ)([...e],s)),disabled:!s.length},n.createElement(j.A,null),l?"Move selected items down":null),n.createElement(a.A,{onClick:()=>t((0,x.BO)([...e],s,e.length)),disabled:!s.length},n.createElement(O.A,null),l?"Move selected items to top":null),n.createElement(a.A,{onClick:()=>t((0,x.oJ)([...e],s,e.length)),disabled:!s.length},n.createElement(T.A,null),l?"Move selected items to bottom":null),n.createElement(M.ColorPopover,{anchorEl:r,color:p,onChange:l=>{b(l),s.forEach((t=>{const n=e.find((e=>e.name===t));n&&(n.color=l)})),t([...e])},onClose:()=>c(null)}),n.createElement("div",{style:{height:400,width:"100%"}},n.createElement(y.zh,{getRowId:e=>e.name,checkboxSelection:!0,disableRowSelectionOnClick:!0,onRowSelectionModelChange:e=>u(e),rows:e,rowHeight:25,columnHeaderHeight:33,columns:[{field:"color",headerName:"Color",renderCell:l=>{const{value:o,id:a}=l;return n.createElement(M.default,{color:o||"blue",onChange:l=>{const n=e.find((e=>e.name===a));n&&(n.color=l),t([...e])}})}},{field:"name",sortingOrder:[null],headerName:"Name",width:(0,i.measureGridWidth)(e.map((e=>e.name)))},...Object.keys(g).map((t=>({field:t,sortingOrder:[null],renderCell:e=>{const{value:t}=e;return n.createElement("div",{className:o.cell},n.createElement(N.SanitizedHTML,{html:(0,i.getStr)(t)}))},width:(0,i.measureGridWidth)(e.map((e=>e[t])))})))],sortModel:[],onSortModelChange:l=>{const n=l[0],o=(E.idx+1)%2,a=n?.field||E.field;f({idx:o,field:a}),t(a?[...e].sort(((e,t)=>{const l=(0,i.getStr)(e[a]),n=(0,i.getStr)(t[a]);return 1===o?l.localeCompare(n):n.localeCompare(l)})):e)}})))},W=(0,c.n9)()({content:{minWidth:800}});function _({model:e,handleClose:t}){const{classes:l}=W(),{sources:c}=e,[s,d]=(0,n.useState)(u()(c||[])),[m,h]=(0,i.useLocalStorage)("multiwiggle-showTips",!0);return n.createElement(S,{open:!0,onClose:t,maxWidth:"xl",title:"Multi-wiggle color/arrangement editor"},n.createElement(o.A,{className:l.content},n.createElement(a.A,{variant:"contained",style:{float:"right"},onClick:()=>h(!m)},m?"Hide tips":"Show tips"),n.createElement("br",null),m?n.createElement(n.Fragment,null,"Helpful tips",n.createElement("ul",null,n.createElement("li",null,"You can select rows in the table with the checkboxes"),n.createElement("li",null,"Multi-select is enabled with shift-click and control-click"),n.createElement("li",null,'The "Move selected items up/down" can re-arrange subtracks'),n.createElement("li",null,"Sorting the data grid itself can also re-arrange subtracks"),n.createElement("li",null,"Changes are applied when you hit Submit"),n.createElement("li",null,"You can click and drag the dialog box to move it on the screen"),n.createElement("li",null,"Columns in the table can be hidden using a vertical '...' menu on the right side of each column"))):null,n.createElement(L,{rows:s,onChange:d,showTips:m})),n.createElement(r.A,null,n.createElement(a.A,{variant:"contained",type:"submit",color:"inherit",onClick:()=>{e.clearLayout(),d(e.sources||[])}},"Clear custom settings"),n.createElement(a.A,{variant:"contained",color:"secondary",onClick:()=>{t(),d([...e.sources||[]])}},"Cancel"),n.createElement(a.A,{variant:"contained",color:"primary",type:"submit",onClick:()=>{e.setLayout(s),t()}},"Submit")))}},58474:(e,t,l)=>{l.d(t,{A3:()=>i,BO:()=>a,oJ:()=>r});var n=l(99546),o=l(68584);function a(e,t,l=1){const n=t.map((t=>e.findIndex((e=>e.name===t)))).sort(((e,t)=>e-t));let o=0;for(const t of n){const n=Math.max(o,t-l);n>=o&&e.splice(n,0,e.splice(t,1)[0]),o+=1}return e}function r(e,t,l=1){const n=t.map((t=>e.findIndex((e=>e.name===t)))).sort(((e,t)=>t-e));let o=e.length-1;for(const t of n){const n=Math.min(o,t+l);n<=o&&e.splice(n,0,e.splice(t,1)[0]),o-=1}return e}const c=12.8;function i(e){const{prefersOffset:t}=e,{trackLabels:l}=(0,n.getContainingView)(e),a=(0,n.getContainingTrack)(e),r=(0,o.getConf)(a,"name");return"overlapping"!==l||t?10:(0,n.measureText)(r,c)+100}}}]);
//# sourceMappingURL=6932.94d6b12d.chunk.js.map