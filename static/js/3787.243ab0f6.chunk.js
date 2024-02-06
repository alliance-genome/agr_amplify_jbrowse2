"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[3787],{30734:(r,e,a)=>{a.d(e,{Z:()=>q});var t=a(55559),o=a(30984),n=a(66204),i=a(56317),s=a(58029),l=a(71580),u=a(73330),b=a(40118),d=a(92368),c=a(61125),f=a(57369),m=a(70146),v=a(43188);const p=["className","color","value","valueBuffer","variant"];let h,g,Z,w,y,C,k=r=>r;const P=(0,l.F4)(h||(h=k`
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
`)),S=(0,l.F4)(g||(g=k`
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
`)),$=(0,l.F4)(Z||(Z=k`
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
`)),x=(r,e)=>"inherit"===e?"currentColor":r.vars?r.vars.palette.LinearProgress[`${e}Bg`]:"light"===r.palette.mode?(0,u.$n)(r.palette[e].main,.62):(0,u._j)(r.palette[e].main,.5),B=(0,c.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.root,e[`color${(0,b.Z)(a.color)}`],e[a.variant]]}})((({ownerState:r,theme:e})=>(0,o.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:x(e,r.color)},"inherit"===r.color&&"buffer"!==r.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===r.variant&&{backgroundColor:"transparent"},"query"===r.variant&&{transform:"rotate(180deg)"}))),I=(0,c.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.dashed,e[`dashedColor${(0,b.Z)(a.color)}`]]}})((({ownerState:r,theme:e})=>{const a=x(e,r.color);return(0,o.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===r.color&&{opacity:.3},{backgroundImage:`radial-gradient(${a} 0%, ${a} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),(0,l.iv)(w||(w=k`
    animation: ${0} 3s infinite linear;
  `),$)),L=(0,c.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.bar,e[`barColor${(0,b.Z)(a.color)}`],("indeterminate"===a.variant||"query"===a.variant)&&e.bar1Indeterminate,"determinate"===a.variant&&e.bar1Determinate,"buffer"===a.variant&&e.bar1Buffer]}})((({ownerState:r,theme:e})=>(0,o.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===r.color?"currentColor":(e.vars||e).palette[r.color].main},"determinate"===r.variant&&{transition:"transform .4s linear"},"buffer"===r.variant&&{zIndex:1,transition:"transform .4s linear"})),(({ownerState:r})=>("indeterminate"===r.variant||"query"===r.variant)&&(0,l.iv)(y||(y=k`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),P))),j=(0,c.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.bar,e[`barColor${(0,b.Z)(a.color)}`],("indeterminate"===a.variant||"query"===a.variant)&&e.bar2Indeterminate,"buffer"===a.variant&&e.bar2Buffer]}})((({ownerState:r,theme:e})=>(0,o.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==r.variant&&{backgroundColor:"inherit"===r.color?"currentColor":(e.vars||e).palette[r.color].main},"inherit"===r.color&&{opacity:.3},"buffer"===r.variant&&{backgroundColor:x(e,r.color),transition:"transform .4s linear"})),(({ownerState:r})=>("indeterminate"===r.variant||"query"===r.variant)&&(0,l.iv)(C||(C=k`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),S))),q=n.forwardRef((function(r,e){const a=(0,f.Z)({props:r,name:"MuiLinearProgress"}),{className:n,color:l="primary",value:u,valueBuffer:c,variant:h="indeterminate"}=a,g=(0,t.Z)(a,p),Z=(0,o.Z)({},a,{color:l,variant:h}),w=(r=>{const{classes:e,variant:a,color:t}=r,o={root:["root",`color${(0,b.Z)(t)}`,a],dashed:["dashed",`dashedColor${(0,b.Z)(t)}`],bar1:["bar",`barColor${(0,b.Z)(t)}`,("indeterminate"===a||"query"===a)&&"bar1Indeterminate","determinate"===a&&"bar1Determinate","buffer"===a&&"bar1Buffer"],bar2:["bar","buffer"!==a&&`barColor${(0,b.Z)(t)}`,"buffer"===a&&`color${(0,b.Z)(t)}`,("indeterminate"===a||"query"===a)&&"bar2Indeterminate","buffer"===a&&"bar2Buffer"]};return(0,s.Z)(o,m.E,e)})(Z),y=(0,d.Z)(),C={},k={bar1:{},bar2:{}};if(("determinate"===h||"buffer"===h)&&void 0!==u){C["aria-valuenow"]=Math.round(u),C["aria-valuemin"]=0,C["aria-valuemax"]=100;let r=u-100;"rtl"===y.direction&&(r=-r),k.bar1.transform=`translateX(${r}%)`}if("buffer"===h&&void 0!==c){let r=(c||0)-100;"rtl"===y.direction&&(r=-r),k.bar2.transform=`translateX(${r}%)`}return(0,v.jsxs)(B,(0,o.Z)({className:(0,i.Z)(w.root,n),ownerState:Z,role:"progressbar"},C,{ref:e},g,{children:["buffer"===h?(0,v.jsx)(I,{className:w.dashed,ownerState:Z}):null,(0,v.jsx)(L,{className:w.bar1,ownerState:Z,style:k.bar1}),"determinate"===h?null:(0,v.jsx)(j,{className:w.bar2,ownerState:Z,style:k.bar2})]}))}))},63787:(r,e,a)=>{a.r(e),a.d(e,{default:()=>t.Z,getLinearProgressUtilityClass:()=>o.E,linearProgressClasses:()=>o.Z});var t=a(30734),o=a(70146)},70146:(r,e,a)=>{a.d(e,{E:()=>n,Z:()=>i});var t=a(58109),o=a(95201);function n(r){return(0,o.Z)("MuiLinearProgress",r)}const i=(0,t.Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"])}}]);
//# sourceMappingURL=3787.243ab0f6.chunk.js.map