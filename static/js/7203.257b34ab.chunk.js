"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[7203],{59705:(r,e,t)=>{t.d(e,{A:()=>C});var a=t(83673),s=t(6614),i=t(7552),o=t(93878),n=t(70799),l=t(64761),c=t(15622),d=t(4785),h=t(51148),u=t(72489),v=t(69500);const k=["className","color","disableShrink","size","style","thickness","value","variant"];let m,f,b,g,A=r=>r;const p=(0,l.i7)(m||(m=A`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),y=(0,l.i7)(f||(f=A`
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
`)),S=(0,h.Ay)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.root,e[t.variant],e[`color${(0,c.A)(t.color)}`]]}})((({ownerState:r,theme:e})=>(0,s.A)({display:"inline-block"},"determinate"===r.variant&&{transition:e.transitions.create("transform")},"inherit"!==r.color&&{color:(e.vars||e).palette[r.color].main})),(({ownerState:r})=>"indeterminate"===r.variant&&(0,l.AH)(b||(b=A`
      animation: ${0} 1.4s linear infinite;
    `),p))),w=(0,h.Ay)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),x=(0,h.Ay)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.circle,e[`circle${(0,c.A)(t.variant)}`],t.disableShrink&&e.circleDisableShrink]}})((({ownerState:r,theme:e})=>(0,s.A)({stroke:"currentColor"},"determinate"===r.variant&&{transition:e.transitions.create("stroke-dashoffset")},"indeterminate"===r.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:r})=>"indeterminate"===r.variant&&!r.disableShrink&&(0,l.AH)(g||(g=A`
      animation: ${0} 1.4s ease-in-out infinite;
    `),y))),C=i.forwardRef((function(r,e){const t=(0,d.b)({props:r,name:"MuiCircularProgress"}),{className:i,color:l="primary",disableShrink:h=!1,size:m=40,style:f,thickness:b=3.6,value:g=0,variant:A="indeterminate"}=t,p=(0,a.A)(t,k),y=(0,s.A)({},t,{color:l,disableShrink:h,size:m,thickness:b,value:g,variant:A}),C=(r=>{const{classes:e,variant:t,color:a,disableShrink:s}=r,i={root:["root",t,`color${(0,c.A)(a)}`],svg:["svg"],circle:["circle",`circle${(0,c.A)(t)}`,s&&"circleDisableShrink"]};return(0,n.A)(i,u.b,e)})(y),P={},D={},M={};if("determinate"===A){const r=2*Math.PI*((44-b)/2);P.strokeDasharray=r.toFixed(3),M["aria-valuenow"]=Math.round(g),P.strokeDashoffset=`${((100-g)/100*r).toFixed(3)}px`,D.transform="rotate(-90deg)"}return(0,v.jsx)(S,(0,s.A)({className:(0,o.A)(C.root,i),style:(0,s.A)({width:m,height:m},D,f),ownerState:y,ref:e,role:"progressbar"},M,p,{children:(0,v.jsx)(w,{className:C.svg,ownerState:y,viewBox:"22 22 44 44",children:(0,v.jsx)(x,{className:C.circle,style:P,ownerState:y,cx:44,cy:44,r:(44-b)/2,fill:"none",strokeWidth:b})})}))}))},72489:(r,e,t)=>{t.d(e,{A:()=>o,b:()=>i});var a=t(33761),s=t(85693);function i(r){return(0,s.Ay)("MuiCircularProgress",r)}const o=(0,a.A)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"])},97203:(r,e,t)=>{t.r(e),t.d(e,{circularProgressClasses:()=>s.A,default:()=>a.A,getCircularProgressUtilityClass:()=>s.b});var a=t(59705),s=t(72489)}}]);
//# sourceMappingURL=7203.257b34ab.chunk.js.map