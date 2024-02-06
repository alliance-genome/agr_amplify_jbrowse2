"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[7776],{97776:(e,r,t)=>{t.r(r),t.d(r,{default:()=>k});var a=t(66204),n=t(10126),s=t(80013),i=t(29520),o=t(46338),l=t(78781),c=t(39780),m=t(70539),u=t(62301),d=t(7146),h=t(43902),v=t(31211);function f(){return a.createElement("div",null,a.createElement(n.Z,{size:20,style:{marginRight:20}}),a.createElement(s.Z,{display:"inline"},"Creating SVG"))}function g(e,r){return(0,v.useLocalStorage)("svg-"+e,r)}function k({model:e,handleClose:r}){const t=(0,v.getSession)(e),n="undefined"!=typeof OffscreenCanvas,[k,p]=(0,a.useState)(n),[Z,b]=(0,a.useState)(!1),[S,y]=(0,a.useState)(),[w,C]=g("file","jbrowse.svg"),[x,E]=g("theme",t.themeName||"default");return a.createElement(h.Dialog,{open:!0,onClose:r,title:"Export SVG"},a.createElement(i.Z,null,S?a.createElement(h.ErrorMessage,{error:S}):Z?a.createElement(f,null):null,a.createElement(o.Z,{helperText:"filename",value:w,onChange:e=>C(e.target.value)}),a.createElement("br",null),t.allThemes?a.createElement(o.Z,{select:!0,label:"Theme",value:x,onChange:e=>E(e.target.value)},Object.entries(t.allThemes()).map((([e,r])=>a.createElement(l.Z,{key:e,value:e},r.name||"(Unknown name)")))):null,n?a.createElement(c.Z,{control:a.createElement(m.Z,{checked:k,onChange:()=>p((e=>!e))}),label:"Rasterize canvas based tracks? File may be much larger if this is turned off"}):a.createElement(s.Z,null,"Note: rasterizing layers not yet supported in this browser, so SVG size may be large")),a.createElement(u.Z,null,a.createElement(d.Z,{variant:"contained",color:"secondary",onClick:()=>r()},"Cancel"),a.createElement(d.Z,{variant:"contained",color:"primary",type:"submit",onClick:async()=>{b(!0),y(void 0);try{await e.exportSvg({rasterizeLayers:k,filename:w,themeName:x}),r()}catch(e){console.error(e),y(e),b(!1)}}},"Submit")))}},10126:(e,r,t)=>{t.d(r,{Z:()=>x});var a=t(55559),n=t(30984),s=t(66204),i=t(56317),o=t(58029),l=t(71580),c=t(40118),m=t(57369),u=t(61125),d=t(22489),h=t(43188);const v=["className","color","disableShrink","size","style","thickness","value","variant"];let f,g,k,p,Z=e=>e;const b=(0,l.F4)(f||(f=Z`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),S=(0,l.F4)(g||(g=Z`
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
`)),y=(0,u.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],r[`color${(0,c.Z)(t.color)}`]]}})((({ownerState:e,theme:r})=>(0,n.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:r.transitions.create("transform")},"inherit"!==e.color&&{color:(r.vars||r).palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,l.iv)(k||(k=Z`
      animation: ${0} 1.4s linear infinite;
    `),b))),w=(0,u.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),C=(0,u.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.circle,r[`circle${(0,c.Z)(t.variant)}`],t.disableShrink&&r.circleDisableShrink]}})((({ownerState:e,theme:r})=>(0,n.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:r.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,l.iv)(p||(p=Z`
      animation: ${0} 1.4s ease-in-out infinite;
    `),S))),x=s.forwardRef((function(e,r){const t=(0,m.Z)({props:e,name:"MuiCircularProgress"}),{className:s,color:l="primary",disableShrink:u=!1,size:f=40,style:g,thickness:k=3.6,value:p=0,variant:Z="indeterminate"}=t,b=(0,a.Z)(t,v),S=(0,n.Z)({},t,{color:l,disableShrink:u,size:f,thickness:k,value:p,variant:Z}),x=(e=>{const{classes:r,variant:t,color:a,disableShrink:n}=e,s={root:["root",t,`color${(0,c.Z)(a)}`],svg:["svg"],circle:["circle",`circle${(0,c.Z)(t)}`,n&&"circleDisableShrink"]};return(0,o.Z)(s,d.C,r)})(S),E={},P={},D={};if("determinate"===Z){const e=2*Math.PI*((44-k)/2);E.strokeDasharray=e.toFixed(3),D["aria-valuenow"]=Math.round(p),E.strokeDashoffset=`${((100-p)/100*e).toFixed(3)}px`,P.transform="rotate(-90deg)"}return(0,h.jsx)(y,(0,n.Z)({className:(0,i.Z)(x.root,s),style:(0,n.Z)({width:f,height:f},P,g),ownerState:S,ref:r,role:"progressbar"},D,b,{children:(0,h.jsx)(w,{className:x.svg,ownerState:S,viewBox:"22 22 44 44",children:(0,h.jsx)(C,{className:x.circle,style:E,ownerState:S,cx:44,cy:44,r:(44-k)/2,fill:"none",strokeWidth:k})})}))}))},22489:(e,r,t)=>{t.d(r,{C:()=>s,Z:()=>i});var a=t(58109),n=t(95201);function s(e){return(0,n.Z)("MuiCircularProgress",e)}const i=(0,a.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"])}}]);
//# sourceMappingURL=7776.0916a378.chunk.js.map