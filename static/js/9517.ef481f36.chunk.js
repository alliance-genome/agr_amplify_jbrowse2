"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[9517],{10126:(r,e,t)=>{t.d(e,{Z:()=>C});var a=t(55559),s=t(30984),i=t(66204),o=t(56317),n=t(58029),l=t(71580),c=t(40118),d=t(57369),h=t(61125),v=t(22489),u=t(43188);const k=["className","color","disableShrink","size","style","thickness","value","variant"];let m,f,g,p,Z=r=>r;const b=(0,l.F4)(m||(m=Z`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),S=(0,l.F4)(f||(f=Z`
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
`)),w=(0,h.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.root,e[t.variant],e[`color${(0,c.Z)(t.color)}`]]}})((({ownerState:r,theme:e})=>(0,s.Z)({display:"inline-block"},"determinate"===r.variant&&{transition:e.transitions.create("transform")},"inherit"!==r.color&&{color:(e.vars||e).palette[r.color].main})),(({ownerState:r})=>"indeterminate"===r.variant&&(0,l.iv)(g||(g=Z`
      animation: ${0} 1.4s linear infinite;
    `),b))),x=(0,h.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),y=(0,h.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.circle,e[`circle${(0,c.Z)(t.variant)}`],t.disableShrink&&e.circleDisableShrink]}})((({ownerState:r,theme:e})=>(0,s.Z)({stroke:"currentColor"},"determinate"===r.variant&&{transition:e.transitions.create("stroke-dashoffset")},"indeterminate"===r.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:r})=>"indeterminate"===r.variant&&!r.disableShrink&&(0,l.iv)(p||(p=Z`
      animation: ${0} 1.4s ease-in-out infinite;
    `),S))),C=i.forwardRef((function(r,e){const t=(0,d.Z)({props:r,name:"MuiCircularProgress"}),{className:i,color:l="primary",disableShrink:h=!1,size:m=40,style:f,thickness:g=3.6,value:p=0,variant:Z="indeterminate"}=t,b=(0,a.Z)(t,k),S=(0,s.Z)({},t,{color:l,disableShrink:h,size:m,thickness:g,value:p,variant:Z}),C=(r=>{const{classes:e,variant:t,color:a,disableShrink:s}=r,i={root:["root",t,`color${(0,c.Z)(a)}`],svg:["svg"],circle:["circle",`circle${(0,c.Z)(t)}`,s&&"circleDisableShrink"]};return(0,n.Z)(i,v.C,e)})(S),P={},D={},M={};if("determinate"===Z){const r=2*Math.PI*((44-g)/2);P.strokeDasharray=r.toFixed(3),M["aria-valuenow"]=Math.round(p),P.strokeDashoffset=`${((100-p)/100*r).toFixed(3)}px`,D.transform="rotate(-90deg)"}return(0,u.jsx)(w,(0,s.Z)({className:(0,o.Z)(C.root,i),style:(0,s.Z)({width:m,height:m},D,f),ownerState:S,ref:e,role:"progressbar"},M,b,{children:(0,u.jsx)(x,{className:C.svg,ownerState:S,viewBox:"22 22 44 44",children:(0,u.jsx)(y,{className:C.circle,style:P,ownerState:S,cx:44,cy:44,r:(44-g)/2,fill:"none",strokeWidth:g})})}))}))},22489:(r,e,t)=>{t.d(e,{C:()=>i,Z:()=>o});var a=t(58109),s=t(95201);function i(r){return(0,s.Z)("MuiCircularProgress",r)}const o=(0,a.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"])},89517:(r,e,t)=>{t.r(e),t.d(e,{circularProgressClasses:()=>s.Z,default:()=>a.Z,getCircularProgressUtilityClass:()=>s.C});var a=t(10126),s=t(22489)}}]);
//# sourceMappingURL=9517.ef481f36.chunk.js.map