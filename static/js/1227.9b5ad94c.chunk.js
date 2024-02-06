"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[1227],{1227:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var a=r(66204),n=r(31617),o=r(90228),i=r(80013),s=r(2331),l=r(75174),c=r(38684),d=r(80846),u=r(2266);const m=(0,d.observer)((function({job:e}){return a.createElement(s.Z,{variant:"outlined"},a.createElement(l.Z,null,a.createElement(i.Z,{variant:"body1"},a.createElement("strong",null,"Name: "),e.name),e.statusMessage?a.createElement(i.Z,{variant:"body1"},a.createElement("strong",null,"Message: "),e.statusMessage):null))}));var b=r(26481),p=r(30734),f=r(90617),Z=r(7146);const v=(0,d.observer)((function({job:e}){const[t,r]=(0,a.useState)(!1);return a.createElement(s.Z,{variant:"outlined"},a.createElement(l.Z,null,a.createElement(i.Z,{variant:"body1"},a.createElement("strong",null,"Name: "),e.name),a.createElement(i.Z,{variant:"body1"},a.createElement("strong",null,"Message: "),e.statusMessage||"No message provided"),a.createElement(b.Z,{sx:{display:"flex",alignItems:"center",marginTop:10,marginBottom:10,marginLeft:10}},0===e.progressPct||100===e.progressPct?a.createElement(b.Z,{sx:{width:"100%"}},a.createElement(p.Z,{variant:"indeterminate"})):a.createElement(a.Fragment,null,a.createElement(b.Z,{sx:{width:"100%"}},a.createElement(p.Z,{variant:"determinate",value:e.progressPct})),a.createElement(b.Z,{sx:{m:1}},a.createElement(i.Z,null,`${Math.round(e.progressPct||0)}%`))))),e.cancelCallback?a.createElement(f.Z,null,a.createElement(Z.Z,{variant:"contained",color:"inherit",disabled:t||0===e.progressPct,onClick:()=>{e.setStatusMessage("Aborted via cancel button"),e.cancelCallback&&e.cancelCallback(),r(!0)}},"Cancel")):null)})),g=(0,c.ZL)()((e=>({root:{margin:e.spacing(1)},expandIcon:{color:e.palette.tertiary.contrastText}}))),h=(0,d.observer)((function({model:e}){const{classes:t}=g(),{jobs:r,finished:c,queued:d,aborted:b}=e;return a.createElement("div",{className:t.root},a.createElement(n.Z,{defaultExpanded:!0},a.createElement(o.Z,{expandIcon:a.createElement(u.Z,{className:t.expandIcon})},a.createElement(i.Z,{variant:"h5"},"Running jobs")),r.length?r.map(((e,t)=>a.createElement(v,{job:e,key:`${JSON.stringify(e)}-${t}`}))):a.createElement(s.Z,{variant:"outlined"},a.createElement(l.Z,null,a.createElement(i.Z,{variant:"body1"},"No running jobs")))),a.createElement(n.Z,{defaultExpanded:!0},a.createElement(o.Z,{expandIcon:a.createElement(u.Z,{className:t.expandIcon})},a.createElement(i.Z,{variant:"h5"},"Queued jobs")),d.length?d.map(((e,t)=>a.createElement(m,{job:e,key:`${JSON.stringify(e)}-${t}`}))):a.createElement(s.Z,{variant:"outlined"},a.createElement(l.Z,null,a.createElement(i.Z,{variant:"body1"},"No queued jobs")))),a.createElement(n.Z,{defaultExpanded:!0},a.createElement(o.Z,{expandIcon:a.createElement(u.Z,{className:t.expandIcon})},a.createElement(i.Z,{variant:"h5"},"Completed jobs")),c.length?c.map(((e,t)=>a.createElement(m,{key:`${JSON.stringify(e)}-${t}`,job:e}))):a.createElement(s.Z,{variant:"outlined"},a.createElement(l.Z,null,a.createElement(i.Z,{variant:"body1"},"No completed jobs")))),a.createElement(n.Z,{defaultExpanded:!0},a.createElement(o.Z,{expandIcon:a.createElement(u.Z,{className:t.expandIcon})},a.createElement(i.Z,{variant:"h5"},"Aborted jobs")),b.length?b.map(((e,t)=>a.createElement(m,{key:`${JSON.stringify(e)}-${t}`,job:e}))):a.createElement(s.Z,{variant:"outlined"},a.createElement(l.Z,null,a.createElement(i.Z,{variant:"body1"},"No aborted jobs")))))}))},2266:(e,t,r)=>{var a=r(57739);t.Z=void 0;var n=a(r(53948)),o=r(43188),i=(0,n.default)((0,o.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.Z=i},90228:(e,t,r)=>{r.d(t,{Z:()=>E});var a=r(55559),n=r(30984),o=r(66204),i=r(56317),s=r(58029),l=r(61125),c=r(57369),d=r(42870),u=r(86032),m=r(58109),b=r(95201);function p(e){return(0,b.Z)("MuiAccordionSummary",e)}const f=(0,m.Z)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]);var Z=r(43188);const v=["children","className","expandIcon","focusVisibleClassName","onClick"],g=(0,l.ZP)(d.Z,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e,ownerState:t})=>{const r={duration:e.transitions.duration.shortest};return(0,n.Z)({display:"flex",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],r),[`&.${f.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${f.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`&:hover:not(.${f.disabled})`]:{cursor:"pointer"}},!t.disableGutters&&{[`&.${f.expanded}`]:{minHeight:64}})})),h=(0,l.ZP)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,t)=>t.content})((({theme:e,ownerState:t})=>(0,n.Z)({display:"flex",flexGrow:1,margin:"12px 0"},!t.disableGutters&&{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),[`&.${f.expanded}`]:{margin:"20px 0"}}))),x=(0,l.ZP)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,t)=>t.expandIconWrapper})((({theme:e})=>({display:"flex",color:(e.vars||e).palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),[`&.${f.expanded}`]:{transform:"rotate(180deg)"}}))),E=o.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiAccordionSummary"}),{children:l,className:d,expandIcon:m,focusVisibleClassName:b,onClick:f}=r,E=(0,a.Z)(r,v),{disabled:y=!1,disableGutters:C,expanded:w,toggle:S}=o.useContext(u.Z),N=(0,n.Z)({},r,{expanded:w,disabled:y,disableGutters:C}),M=(e=>{const{classes:t,expanded:r,disabled:a,disableGutters:n}=e,o={root:["root",r&&"expanded",a&&"disabled",!n&&"gutters"],focusVisible:["focusVisible"],content:["content",r&&"expanded",!n&&"contentGutters"],expandIconWrapper:["expandIconWrapper",r&&"expanded"]};return(0,s.Z)(o,p,t)})(N);return(0,Z.jsxs)(g,(0,n.Z)({focusRipple:!1,disableRipple:!0,disabled:y,component:"div","aria-expanded":w,className:(0,i.Z)(M.root,d),focusVisibleClassName:(0,i.Z)(M.focusVisible,b),onClick:e=>{S&&S(e),f&&f(e)},ref:t,ownerState:N},E,{children:[(0,Z.jsx)(h,{className:M.content,ownerState:N,children:l}),m&&(0,Z.jsx)(x,{className:M.expandIconWrapper,ownerState:N,children:m})]}))}))},2331:(e,t,r)=>{r.d(t,{Z:()=>f});var a=r(30984),n=r(55559),o=r(66204),i=r(56317),s=r(58029),l=r(61125),c=r(57369),d=r(86636),u=r(17352),m=r(43188);const b=["className","raised"],p=(0,l.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),f=o.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiCard"}),{className:o,raised:l=!1}=r,d=(0,n.Z)(r,b),f=(0,a.Z)({},r,{raised:l}),Z=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},u.y,t)})(f);return(0,m.jsx)(p,(0,a.Z)({className:(0,i.Z)(Z.root,o),elevation:l?8:void 0,ref:t,ownerState:f},d))}))},17352:(e,t,r)=>{r.d(t,{Z:()=>i,y:()=>o});var a=r(58109),n=r(95201);function o(e){return(0,n.Z)("MuiCard",e)}const i=(0,a.Z)("MuiCard",["root"])},90617:(e,t,r)=>{r.d(t,{Z:()=>p});var a=r(55559),n=r(30984),o=r(66204),i=r(56317),s=r(58029),l=r(61125),c=r(57369),d=r(53200),u=r(43188);const m=["disableSpacing","className"],b=(0,l.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,!r.disableSpacing&&t.spacing]}})((({ownerState:e})=>(0,n.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}}))),p=o.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiCardActions"}),{disableSpacing:o=!1,className:l}=r,p=(0,a.Z)(r,m),f=(0,n.Z)({},r,{disableSpacing:o}),Z=(e=>{const{classes:t,disableSpacing:r}=e,a={root:["root",!r&&"spacing"]};return(0,s.Z)(a,d.s,t)})(f);return(0,u.jsx)(b,(0,n.Z)({className:(0,i.Z)(Z.root,l),ownerState:f,ref:t},p))}))},53200:(e,t,r)=>{r.d(t,{Z:()=>i,s:()=>o});var a=r(58109),n=r(95201);function o(e){return(0,n.Z)("MuiCardActions",e)}const i=(0,a.Z)("MuiCardActions",["root","spacing"])},75174:(e,t,r)=>{r.d(t,{Z:()=>p});var a=r(30984),n=r(55559),o=r(66204),i=r(56317),s=r(58029),l=r(61125),c=r(57369),d=r(65160),u=r(43188);const m=["className","component"],b=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),p=o.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiCardContent"}),{className:o,component:l="div"}=r,p=(0,n.Z)(r,m),f=(0,a.Z)({},r,{component:l}),Z=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},d.N,t)})(f);return(0,u.jsx)(b,(0,a.Z)({as:l,className:(0,i.Z)(Z.root,o),ownerState:f,ref:t},p))}))},65160:(e,t,r)=>{r.d(t,{N:()=>o,Z:()=>i});var a=r(58109),n=r(95201);function o(e){return(0,n.Z)("MuiCardContent",e)}const i=(0,a.Z)("MuiCardContent",["root"])},30734:(e,t,r)=>{r.d(t,{Z:()=>P});var a=r(55559),n=r(30984),o=r(66204),i=r(56317),s=r(58029),l=r(71580),c=r(73330),d=r(40118),u=r(92368),m=r(61125),b=r(57369),p=r(70146),f=r(43188);const Z=["className","color","value","valueBuffer","variant"];let v,g,h,x,E,y,C=e=>e;const w=(0,l.F4)(v||(v=C`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),S=(0,l.F4)(g||(g=C`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),N=(0,l.F4)(h||(h=C`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),M=(e,t)=>"inherit"===t?"currentColor":e.vars?e.vars.palette.LinearProgress[`${t}Bg`]:"light"===e.palette.mode?(0,c.$n)(e.palette[t].main,.62):(0,c._j)(e.palette[t].main,.5),$=(0,m.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`color${(0,d.Z)(r.color)}`],t[r.variant]]}})((({ownerState:e,theme:t})=>(0,n.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:M(t,e.color)},"inherit"===e.color&&"buffer"!==e.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===e.variant&&{backgroundColor:"transparent"},"query"===e.variant&&{transform:"rotate(180deg)"}))),k=(0,m.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.dashed,t[`dashedColor${(0,d.Z)(r.color)}`]]}})((({ownerState:e,theme:t})=>{const r=M(t,e.color);return(0,n.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===e.color&&{opacity:.3},{backgroundImage:`radial-gradient(${r} 0%, ${r} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),(0,l.iv)(x||(x=C`
    animation: ${0} 3s infinite linear;
  `),N)),j=(0,m.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.bar,t[`barColor${(0,d.Z)(r.color)}`],("indeterminate"===r.variant||"query"===r.variant)&&t.bar1Indeterminate,"determinate"===r.variant&&t.bar1Determinate,"buffer"===r.variant&&t.bar1Buffer]}})((({ownerState:e,theme:t})=>(0,n.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===e.color?"currentColor":(t.vars||t).palette[e.color].main},"determinate"===e.variant&&{transition:"transform .4s linear"},"buffer"===e.variant&&{zIndex:1,transition:"transform .4s linear"})),(({ownerState:e})=>("indeterminate"===e.variant||"query"===e.variant)&&(0,l.iv)(E||(E=C`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),w))),I=(0,m.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.bar,t[`barColor${(0,d.Z)(r.color)}`],("indeterminate"===r.variant||"query"===r.variant)&&t.bar2Indeterminate,"buffer"===r.variant&&t.bar2Buffer]}})((({ownerState:e,theme:t})=>(0,n.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==e.variant&&{backgroundColor:"inherit"===e.color?"currentColor":(t.vars||t).palette[e.color].main},"inherit"===e.color&&{opacity:.3},"buffer"===e.variant&&{backgroundColor:M(t,e.color),transition:"transform .4s linear"})),(({ownerState:e})=>("indeterminate"===e.variant||"query"===e.variant)&&(0,l.iv)(y||(y=C`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),S))),P=o.forwardRef((function(e,t){const r=(0,b.Z)({props:e,name:"MuiLinearProgress"}),{className:o,color:l="primary",value:c,valueBuffer:m,variant:v="indeterminate"}=r,g=(0,a.Z)(r,Z),h=(0,n.Z)({},r,{color:l,variant:v}),x=(e=>{const{classes:t,variant:r,color:a}=e,n={root:["root",`color${(0,d.Z)(a)}`,r],dashed:["dashed",`dashedColor${(0,d.Z)(a)}`],bar1:["bar",`barColor${(0,d.Z)(a)}`,("indeterminate"===r||"query"===r)&&"bar1Indeterminate","determinate"===r&&"bar1Determinate","buffer"===r&&"bar1Buffer"],bar2:["bar","buffer"!==r&&`barColor${(0,d.Z)(a)}`,"buffer"===r&&`color${(0,d.Z)(a)}`,("indeterminate"===r||"query"===r)&&"bar2Indeterminate","buffer"===r&&"bar2Buffer"]};return(0,s.Z)(n,p.E,t)})(h),E=(0,u.Z)(),y={},C={bar1:{},bar2:{}};if(("determinate"===v||"buffer"===v)&&void 0!==c){y["aria-valuenow"]=Math.round(c),y["aria-valuemin"]=0,y["aria-valuemax"]=100;let e=c-100;"rtl"===E.direction&&(e=-e),C.bar1.transform=`translateX(${e}%)`}if("buffer"===v&&void 0!==m){let e=(m||0)-100;"rtl"===E.direction&&(e=-e),C.bar2.transform=`translateX(${e}%)`}return(0,f.jsxs)($,(0,n.Z)({className:(0,i.Z)(x.root,o),ownerState:h,role:"progressbar"},y,{ref:t},g,{children:["buffer"===v?(0,f.jsx)(k,{className:x.dashed,ownerState:h}):null,(0,f.jsx)(j,{className:x.bar1,ownerState:h,style:C.bar1}),"determinate"===v?null:(0,f.jsx)(I,{className:x.bar2,ownerState:h,style:C.bar2})]}))}))},70146:(e,t,r)=>{r.d(t,{E:()=>o,Z:()=>i});var a=r(58109),n=r(95201);function o(e){return(0,n.Z)("MuiLinearProgress",e)}const i=(0,a.Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"])}}]);
//# sourceMappingURL=1227.9b5ad94c.chunk.js.map