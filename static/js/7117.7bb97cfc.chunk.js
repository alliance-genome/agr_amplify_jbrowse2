"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[7117],{17177:(e,t,a)=>{a.d(t,{A:()=>k});var o=a(83673),r=a(6614),i=a(7552),s=a(93878),c=a(60827),l=a(18283),n=a(15622),d=a(15110),h=a(31049),p=a(51148),m=a(66889),u=a(69500);const g=["className","color","edge","size","sx"],w=(0,p.Ay)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.edge&&t[`edge${(0,n.A)(a.edge)}`],t[`size${(0,n.A)(a.size)}`]]}})((({ownerState:e})=>(0,r.A)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===e.edge&&{marginLeft:-8},"end"===e.edge&&{marginRight:-8},"small"===e.size&&{width:40,height:24,padding:7,[`& .${m.A.thumb}`]:{width:16,height:16},[`& .${m.A.switchBase}`]:{padding:4,[`&.${m.A.checked}`]:{transform:"translateX(16px)"}}}))),v=(0,p.Ay)(d.A,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.switchBase,{[`& .${m.A.input}`]:t.input},"default"!==a.color&&t[`color${(0,n.A)(a.color)}`]]}})((({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.vars?e.vars.palette.Switch.defaultColor:`${"light"===e.palette.mode?e.palette.common.white:e.palette.grey[300]}`,transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${m.A.checked}`]:{transform:"translateX(20px)"},[`&.${m.A.disabled}`]:{color:e.vars?e.vars.palette.Switch.defaultDisabledColor:`${"light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[600]}`},[`&.${m.A.checked} + .${m.A.track}`]:{opacity:.5},[`&.${m.A.disabled} + .${m.A.track}`]:{opacity:e.vars?e.vars.opacity.switchTrackDisabled:""+("light"===e.palette.mode?.12:.2)},[`& .${m.A.input}`]:{left:"-100%",width:"300%"}})),(({theme:e,ownerState:t})=>(0,r.A)({"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.X4)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${m.A.checked}`]:{color:(e.vars||e).palette[t.color].main,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.X4)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${m.A.disabled}`]:{color:e.vars?e.vars.palette.Switch[`${t.color}DisabledColor`]:`${"light"===e.palette.mode?(0,l.a)(e.palette[t.color].main,.62):(0,l.e$)(e.palette[t.color].main,.55)}`}},[`&.${m.A.checked} + .${m.A.track}`]:{backgroundColor:(e.vars||e).palette[t.color].main}}))),A=(0,p.Ay)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,t)=>t.track})((({theme:e})=>({height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.vars?e.vars.palette.common.onBackground:`${"light"===e.palette.mode?e.palette.common.black:e.palette.common.white}`,opacity:e.vars?e.vars.opacity.switchTrack:""+("light"===e.palette.mode?.38:.3)}))),b=(0,p.Ay)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,t)=>t.thumb})((({theme:e})=>({boxShadow:(e.vars||e).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}))),k=i.forwardRef((function(e,t){const a=(0,h.A)({props:e,name:"MuiSwitch"}),{className:i,color:l="primary",edge:d=!1,size:p="medium",sx:k}=a,$=(0,o.A)(a,g),S=(0,r.A)({},a,{color:l,edge:d,size:p}),y=(e=>{const{classes:t,edge:a,size:o,color:i,checked:s,disabled:l}=e,d={root:["root",a&&`edge${(0,n.A)(a)}`,`size${(0,n.A)(o)}`],switchBase:["switchBase",`color${(0,n.A)(i)}`,s&&"checked",l&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},h=(0,c.A)(d,m.n,t);return(0,r.A)({},t,h)})(S),f=(0,u.jsx)(b,{className:y.thumb,ownerState:S});return(0,u.jsxs)(w,{className:(0,s.A)(y.root,i),sx:k,ownerState:S,children:[(0,u.jsx)(v,(0,r.A)({type:"checkbox",icon:f,checkedIcon:f,ref:t,ownerState:S},$,{classes:(0,r.A)({},y,{root:y.switchBase})})),(0,u.jsx)(A,{className:y.track,ownerState:S})]})}))},67117:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o.A,getSwitchUtilityClass:()=>r.n,switchClasses:()=>r.A});var o=a(17177),r=a(66889)},66889:(e,t,a)=>{a.d(t,{A:()=>s,n:()=>i});var o=a(55549),r=a(9577);function i(e){return(0,r.Ay)("MuiSwitch",e)}const s=(0,o.A)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"])}}]);
//# sourceMappingURL=7117.7bb97cfc.chunk.js.map