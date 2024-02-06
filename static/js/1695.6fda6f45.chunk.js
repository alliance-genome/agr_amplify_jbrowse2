"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[1695],{71695:(e,r,t)=>{t.r(r),t.d(r,{default:()=>k});var a=t(66204),n=t(10126),l=t(80013),s=t(29520),i=t(46338),o=t(78781),c=t(39780),m=t(70539),u=t(62301),d=t(7146),v=t(43902),h=t(31211);function f(){return a.createElement("div",null,a.createElement(n.Z,{size:20,style:{marginRight:20}}),a.createElement(l.Z,{display:"inline"},"Creating SVG"))}function g(e,r){return(0,h.useLocalStorage)("svg-"+e,r)}function k({model:e,handleClose:r}){const t=(0,h.getSession)(e),n="undefined"!=typeof OffscreenCanvas,[k,Z]=(0,a.useState)(n),[b,p]=(0,a.useState)(!1),[y,S]=(0,a.useState)(),[E,w]=g("file","jbrowse.svg"),[C,x]=g("tracklabels","offset"),[P,D]=g("theme",t.themeName||"default");return a.createElement(v.Dialog,{open:!0,onClose:r,title:"Export SVG"},a.createElement(s.Z,null,y?a.createElement(v.ErrorMessage,{error:y}):b?a.createElement(f,null):null,a.createElement(i.Z,{helperText:"filename",value:E,onChange:e=>w(e.target.value)}),a.createElement("br",null),a.createElement(i.Z,{select:!0,label:"Track label positioning",variant:"outlined",style:{width:150},value:C,onChange:e=>x(e.target.value)},a.createElement(o.Z,{value:"offset"},"Offset"),a.createElement(o.Z,{value:"overlay"},"Overlay"),a.createElement(o.Z,{value:"left"},"Left"),a.createElement(o.Z,{value:"none"},"None")),a.createElement("br",null),t.allThemes?a.createElement(i.Z,{select:!0,label:"Theme",variant:"outlined",value:P,onChange:e=>D(e.target.value)},Object.entries(t.allThemes()).map((([e,r])=>a.createElement(o.Z,{key:e,value:e},r.name||"(Unknown name)")))):null,n?a.createElement(c.Z,{control:a.createElement(m.Z,{checked:k,onChange:()=>Z((e=>!e))}),label:"Rasterize canvas based tracks? File may be much larger if this is turned off"}):a.createElement(l.Z,null,"Note: rasterizing layers not yet supported in this browser, so SVG size may be large")),a.createElement(u.Z,null,a.createElement(d.Z,{variant:"contained",color:"secondary",onClick:()=>r()},"Cancel"),a.createElement(d.Z,{variant:"contained",color:"primary",type:"submit",onClick:async()=>{p(!0),S(void 0);try{await e.exportSvg({rasterizeLayers:k,filename:E,trackLabels:C,themeName:P}),r()}catch(e){console.error(e),S(e),p(!1)}}},"Submit")))}},10126:(e,r,t)=>{t.d(r,{Z:()=>C});var a=t(55559),n=t(30984),l=t(66204),s=t(56317),i=t(58029),o=t(71580),c=t(40118),m=t(57369),u=t(61125),d=t(22489),v=t(43188);const h=["className","color","disableShrink","size","style","thickness","value","variant"];let f,g,k,Z,b=e=>e;const p=(0,o.F4)(f||(f=b`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),y=(0,o.F4)(g||(g=b`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),S=(0,u.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],r[`color${(0,c.Z)(t.color)}`]]}})((({ownerState:e,theme:r})=>(0,n.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:r.transitions.create("transform")},"inherit"!==e.color&&{color:(r.vars||r).palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,o.iv)(k||(k=b`
      animation: ${0} 1.4s linear infinite;
    `),p))),E=(0,u.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),w=(0,u.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.circle,r[`circle${(0,c.Z)(t.variant)}`],t.disableShrink&&r.circleDisableShrink]}})((({ownerState:e,theme:r})=>(0,n.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:r.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,o.iv)(Z||(Z=b`
      animation: ${0} 1.4s ease-in-out infinite;
    `),y))),C=l.forwardRef((function(e,r){const t=(0,m.Z)({props:e,name:"MuiCircularProgress"}),{className:l,color:o="primary",disableShrink:u=!1,size:f=40,style:g,thickness:k=3.6,value:Z=0,variant:b="indeterminate"}=t,p=(0,a.Z)(t,h),y=(0,n.Z)({},t,{color:o,disableShrink:u,size:f,thickness:k,value:Z,variant:b}),C=(e=>{const{classes:r,variant:t,color:a,disableShrink:n}=e,l={root:["root",t,`color${(0,c.Z)(a)}`],svg:["svg"],circle:["circle",`circle${(0,c.Z)(t)}`,n&&"circleDisableShrink"]};return(0,i.Z)(l,d.C,r)})(y),x={},P={},D={};if("determinate"===b){const e=2*Math.PI*((44-k)/2);x.strokeDasharray=e.toFixed(3),D["aria-valuenow"]=Math.round(Z),x.strokeDashoffset=`${((100-Z)/100*e).toFixed(3)}px`,P.transform="rotate(-90deg)"}return(0,v.jsx)(S,(0,n.Z)({className:(0,s.Z)(C.root,l),style:(0,n.Z)({width:f,height:f},P,g),ownerState:y,ref:r,role:"progressbar"},D,p,{children:(0,v.jsx)(E,{className:C.svg,ownerState:y,viewBox:"22 22 44 44",children:(0,v.jsx)(w,{className:C.circle,style:x,ownerState:y,cx:44,cy:44,r:(44-k)/2,fill:"none",strokeWidth:k})})}))}))},22489:(e,r,t)=>{t.d(r,{C:()=>l,Z:()=>s});var a=t(58109),n=t(95201);function l(e){return(0,n.Z)("MuiCircularProgress",e)}const s=(0,a.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"])}}]);
//# sourceMappingURL=1695.6fda6f45.chunk.js.map