"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[7860],{47860:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var o=r(66204),a=r(80846),i=r(29520),n=r(80013),s=r(10126),l=r(62301),c=r(7146),d=r(43902);const m=(0,r(38684).ZL)()((e=>({table:{border:"1px solid #888",margin:e.spacing(4),"& td":{padding:e.spacing(1)}}})));function h({modifications:e}){const{classes:t}=m();return o.createElement("table",{className:t.table},o.createElement("tbody",null,e.map((([e,t])=>o.createElement("tr",{key:e},o.createElement("td",null,e),o.createElement("td",null,t),o.createElement("td",{style:{width:"1em",background:t}}))))))}const u=(0,a.observer)((function({model:e,handleClose:t}){const{colorBy:r,modificationTagMap:a}=e,m=[...a.entries()];return o.createElement(d.Dialog,{open:!0,onClose:t,title:"Color by modifications"},o.createElement(i.Z,null,o.createElement(n.Z,null,"You can choose to color the modifications in the BAM/CRAM MM/ML specification using this dialog. Choosing modifications colors the modified positions and can color multiple modification types. Choosing the methylation setting colors methylated and unmethylated CpG."),o.createElement(n.Z,null,"Note: you can revisit this dialog to see the current mapping of colors to modification type for the modification coloring mode"),o.createElement("div",{style:{margin:20}},"modifications"===r?.type?o.createElement("div",null,m.length?o.createElement(o.Fragment,null,"Current modification-type-to-color mapping",o.createElement(h,{modifications:[...a.entries()]})):o.createElement(o.Fragment,null,o.createElement(n.Z,null,"Note: color by modifications is already enabled. Loading current modifications..."),o.createElement(s.Z,{size:15}))):null,"methylation"===r?.type?o.createElement(h,{modifications:[["methylated","red"],["unmethylated","blue"]]}):null),o.createElement(l.Z,null,o.createElement(c.Z,{variant:"contained",onClick:()=>{e.setColorScheme({type:"modifications"}),t()}},"Modifications"),o.createElement(c.Z,{variant:"contained",onClick:()=>{e.setColorScheme({type:"methylation"}),t()}},"Methylation"),o.createElement(c.Z,{variant:"contained",color:"secondary",onClick:()=>t()},"Cancel"))))}))},10126:(e,t,r)=>{r.d(t,{Z:()=>w});var o=r(55559),a=r(30984),i=r(66204),n=r(56317),s=r(58029),l=r(71580),c=r(40118),d=r(57369),m=r(61125),h=r(22489),u=r(43188);const f=["className","color","disableShrink","size","style","thickness","value","variant"];let p,v,g,y,k=e=>e;const b=(0,l.F4)(p||(p=k`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),Z=(0,l.F4)(v||(v=k`
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
`)),C=(0,m.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`color${(0,c.Z)(r.color)}`]]}})((({ownerState:e,theme:t})=>(0,a.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:t.transitions.create("transform")},"inherit"!==e.color&&{color:(t.vars||t).palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,l.iv)(g||(g=k`
      animation: ${0} 1.4s linear infinite;
    `),b))),E=(0,m.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),S=(0,m.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.circle,t[`circle${(0,c.Z)(r.variant)}`],r.disableShrink&&t.circleDisableShrink]}})((({ownerState:e,theme:t})=>(0,a.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,l.iv)(y||(y=k`
      animation: ${0} 1.4s ease-in-out infinite;
    `),Z))),w=i.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiCircularProgress"}),{className:i,color:l="primary",disableShrink:m=!1,size:p=40,style:v,thickness:g=3.6,value:y=0,variant:k="indeterminate"}=r,b=(0,o.Z)(r,f),Z=(0,a.Z)({},r,{color:l,disableShrink:m,size:p,thickness:g,value:y,variant:k}),w=(e=>{const{classes:t,variant:r,color:o,disableShrink:a}=e,i={root:["root",r,`color${(0,c.Z)(o)}`],svg:["svg"],circle:["circle",`circle${(0,c.Z)(r)}`,a&&"circleDisableShrink"]};return(0,s.Z)(i,h.C,t)})(Z),x={},M={},P={};if("determinate"===k){const e=2*Math.PI*((44-g)/2);x.strokeDasharray=e.toFixed(3),P["aria-valuenow"]=Math.round(y),x.strokeDashoffset=`${((100-y)/100*e).toFixed(3)}px`,M.transform="rotate(-90deg)"}return(0,u.jsx)(C,(0,a.Z)({className:(0,n.Z)(w.root,i),style:(0,a.Z)({width:p,height:p},M,v),ownerState:Z,ref:t,role:"progressbar"},P,b,{children:(0,u.jsx)(E,{className:w.svg,ownerState:Z,viewBox:"22 22 44 44",children:(0,u.jsx)(S,{className:w.circle,style:x,ownerState:Z,cx:44,cy:44,r:(44-g)/2,fill:"none",strokeWidth:g})})}))}))},22489:(e,t,r)=>{r.d(t,{C:()=>i,Z:()=>n});var o=r(58109),a=r(95201);function i(e){return(0,a.Z)("MuiCircularProgress",e)}const n=(0,o.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"])}}]);
//# sourceMappingURL=7860.29691f77.chunk.js.map