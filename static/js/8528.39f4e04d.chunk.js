"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[8528],{98528:(e,r,t)=>{t.r(r),t.d(r,{default:()=>k});var a=t(7552),n=t(59705),l=t(36715),s=t(29499),i=t(1343),o=t(29629),c=t(33371),m=t(32808),u=t(58507),d=t(5401),h=t(48735),v=t(99546);function f(){return a.createElement("div",null,a.createElement(n.A,{size:20,style:{marginRight:20}}),a.createElement(l.A,{display:"inline"},"Creating SVG"))}function g(e,r){return(0,v.useLocalStorage)("svg-"+e,r)}function k({model:e,handleClose:r}){const t=(0,v.getSession)(e),n="undefined"!=typeof OffscreenCanvas,[k,A]=(0,a.useState)(n),[b,y]=(0,a.useState)(!1),[p,S]=(0,a.useState)(),[E,w]=g("file","jbrowse.svg"),[x,C]=g("tracklabels","offset"),[D,M]=g("theme",t.themeName||"default");return a.createElement(h.Dialog,{open:!0,onClose:r,title:"Export SVG"},a.createElement(s.A,null,p?a.createElement(h.ErrorMessage,{error:p}):b?a.createElement(f,null):null,a.createElement(i.A,{helperText:"filename",value:E,onChange:e=>w(e.target.value)}),a.createElement("br",null),a.createElement(i.A,{select:!0,label:"Track label positioning",variant:"outlined",style:{width:150},value:x,onChange:e=>C(e.target.value)},a.createElement(o.A,{value:"offset"},"Offset"),a.createElement(o.A,{value:"overlay"},"Overlay"),a.createElement(o.A,{value:"left"},"Left"),a.createElement(o.A,{value:"none"},"None")),a.createElement("br",null),t.allThemes?a.createElement(i.A,{select:!0,label:"Theme",variant:"outlined",value:D,onChange:e=>M(e.target.value)},Object.entries(t.allThemes()).map((([e,r])=>a.createElement(o.A,{key:e,value:e},r.name||"(Unknown name)")))):null,n?a.createElement(c.A,{control:a.createElement(m.A,{checked:k,onChange:()=>A((e=>!e))}),label:"Rasterize canvas based tracks? File may be much larger if this is turned off"}):a.createElement(l.A,null,"Note: rasterizing layers not yet supported in this browser, so SVG size may be large")),a.createElement(u.A,null,a.createElement(d.A,{variant:"contained",color:"secondary",onClick:()=>r()},"Cancel"),a.createElement(d.A,{variant:"contained",color:"primary",type:"submit",onClick:async()=>{y(!0),S(void 0);try{await e.exportSvg({rasterizeLayers:k,filename:E,trackLabels:x,themeName:D}),r()}catch(e){console.error(e),S(e),y(!1)}}},"Submit")))}},59705:(e,r,t)=>{t.d(r,{A:()=>x});var a=t(83673),n=t(6614),l=t(7552),s=t(93878),i=t(60827),o=t(64761),c=t(15622),m=t(31049),u=t(51148),d=t(72489),h=t(69500);const v=["className","color","disableShrink","size","style","thickness","value","variant"];let f,g,k,A,b=e=>e;const y=(0,o.i7)(f||(f=b`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),p=(0,o.i7)(g||(g=b`
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
`)),S=(0,u.Ay)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],r[`color${(0,c.A)(t.color)}`]]}})((({ownerState:e,theme:r})=>(0,n.A)({display:"inline-block"},"determinate"===e.variant&&{transition:r.transitions.create("transform")},"inherit"!==e.color&&{color:(r.vars||r).palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,o.AH)(k||(k=b`
      animation: ${0} 1.4s linear infinite;
    `),y))),E=(0,u.Ay)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),w=(0,u.Ay)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.circle,r[`circle${(0,c.A)(t.variant)}`],t.disableShrink&&r.circleDisableShrink]}})((({ownerState:e,theme:r})=>(0,n.A)({stroke:"currentColor"},"determinate"===e.variant&&{transition:r.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,o.AH)(A||(A=b`
      animation: ${0} 1.4s ease-in-out infinite;
    `),p))),x=l.forwardRef((function(e,r){const t=(0,m.A)({props:e,name:"MuiCircularProgress"}),{className:l,color:o="primary",disableShrink:u=!1,size:f=40,style:g,thickness:k=3.6,value:A=0,variant:b="indeterminate"}=t,y=(0,a.A)(t,v),p=(0,n.A)({},t,{color:o,disableShrink:u,size:f,thickness:k,value:A,variant:b}),x=(e=>{const{classes:r,variant:t,color:a,disableShrink:n}=e,l={root:["root",t,`color${(0,c.A)(a)}`],svg:["svg"],circle:["circle",`circle${(0,c.A)(t)}`,n&&"circleDisableShrink"]};return(0,i.A)(l,d.b,r)})(p),C={},D={},M={};if("determinate"===b){const e=2*Math.PI*((44-k)/2);C.strokeDasharray=e.toFixed(3),M["aria-valuenow"]=Math.round(A),C.strokeDashoffset=`${((100-A)/100*e).toFixed(3)}px`,D.transform="rotate(-90deg)"}return(0,h.jsx)(S,(0,n.A)({className:(0,s.A)(x.root,l),style:(0,n.A)({width:f,height:f},D,g),ownerState:p,ref:r,role:"progressbar"},M,y,{children:(0,h.jsx)(E,{className:x.svg,ownerState:p,viewBox:"22 22 44 44",children:(0,h.jsx)(w,{className:x.circle,style:C,ownerState:p,cx:44,cy:44,r:(44-k)/2,fill:"none",strokeWidth:k})})}))}))},72489:(e,r,t)=>{t.d(r,{A:()=>s,b:()=>l});var a=t(55549),n=t(9577);function l(e){return(0,n.Ay)("MuiCircularProgress",e)}const s=(0,a.A)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"])}}]);
//# sourceMappingURL=8528.39f4e04d.chunk.js.map