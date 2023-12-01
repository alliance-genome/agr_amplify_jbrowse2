"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[9065],{74918:(e,t,o)=>{o.d(t,{Z:()=>i,s:()=>n});var r=o(66204);const a=r.createContext({});function n(){return r.useContext(a)}const i=a},69065:(e,t,o)=>{o.r(t),o.d(t,{default:()=>g,getStepButtonUtilityClass:()=>x,stepButtonClasses:()=>h});var r=o(55559),a=o(30984),n=o(66204),i=o(56317),l=o(58029),s=o(61125),c=o(57369),p=o(42870),d=o(65404),u=o(6842),m=o(74837),v=o(74918),Z=o(58109),b=o(95201);function x(e){return(0,b.Z)("MuiStepButton",e)}const h=(0,Z.Z)("MuiStepButton",["root","horizontal","vertical","touchRipple"]);var S=o(43188);const f=["children","className","icon","optional"],C=(0,s.ZP)(p.Z,{name:"MuiStepButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${h.touchRipple}`]:t.touchRipple},t.root,t[o.orientation]]}})((({ownerState:e})=>(0,a.Z)({width:"100%",padding:"24px 16px",margin:"-24px -16px",boxSizing:"content-box"},"vertical"===e.orientation&&{justifyContent:"flex-start",padding:"8px",margin:"-8px"},{[`& .${h.touchRipple}`]:{color:"rgba(0, 0, 0, 0.3)"}}))),g=n.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiStepButton"}),{children:s,className:p,icon:Z,optional:b}=o,h=(0,r.Z)(o,f),{disabled:g,active:y}=n.useContext(v.Z),{orientation:L}=n.useContext(m.Z),w=(0,a.Z)({},o,{orientation:L}),R=(e=>{const{classes:t,orientation:o}=e,r={root:["root",o],touchRipple:["touchRipple"]};return(0,l.Z)(r,x,t)})(w),M={icon:Z,optional:b},N=(0,u.Z)(s,["StepLabel"])?n.cloneElement(s,M):(0,S.jsx)(d.Z,(0,a.Z)({},M,{children:s}));return(0,S.jsx)(C,(0,a.Z)({focusRipple:!0,disabled:g,TouchRippleProps:{className:R.touchRipple},className:(0,i.Z)(R.root,p),ref:t,ownerState:w,"aria-current":y?"step":void 0},h,{children:N}))}))},82902:(e,t,o)=>{o.d(t,{Z:()=>f});var r=o(30984),a=o(55559),n=o(66204),i=o(56317),l=o(58029),s=o(61125),c=o(57369),p=o(50968),d=o(43188);const u=(0,p.Z)((0,d.jsx)("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),m=(0,p.Z)((0,d.jsx)("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");var v,Z=o(81650),b=o(12362);const x=["active","className","completed","error","icon"],h=(0,s.ZP)(Z.Z,{name:"MuiStepIcon",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({display:"block",transition:e.transitions.create("color",{duration:e.transitions.duration.shortest}),color:(e.vars||e).palette.text.disabled,[`&.${b.Z.completed}`]:{color:(e.vars||e).palette.primary.main},[`&.${b.Z.active}`]:{color:(e.vars||e).palette.primary.main},[`&.${b.Z.error}`]:{color:(e.vars||e).palette.error.main}}))),S=(0,s.ZP)("text",{name:"MuiStepIcon",slot:"Text",overridesResolver:(e,t)=>t.text})((({theme:e})=>({fill:(e.vars||e).palette.primary.contrastText,fontSize:e.typography.caption.fontSize,fontFamily:e.typography.fontFamily}))),f=n.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiStepIcon"}),{active:n=!1,className:s,completed:p=!1,error:Z=!1,icon:f}=o,C=(0,a.Z)(o,x),g=(0,r.Z)({},o,{active:n,completed:p,error:Z}),y=(e=>{const{classes:t,active:o,completed:r,error:a}=e,n={root:["root",o&&"active",r&&"completed",a&&"error"],text:["text"]};return(0,l.Z)(n,b.M,t)})(g);if("number"==typeof f||"string"==typeof f){const e=(0,i.Z)(s,y.root);return Z?(0,d.jsx)(h,(0,r.Z)({as:m,className:e,ref:t,ownerState:g},C)):p?(0,d.jsx)(h,(0,r.Z)({as:u,className:e,ref:t,ownerState:g},C)):(0,d.jsxs)(h,(0,r.Z)({className:e,ref:t,ownerState:g},C,{children:[v||(v=(0,d.jsx)("circle",{cx:"12",cy:"12",r:"12"})),(0,d.jsx)(S,{className:y.text,x:"12",y:"12",textAnchor:"middle",dominantBaseline:"central",ownerState:g,children:f})]}))}return f}))},12362:(e,t,o)=>{o.d(t,{M:()=>n,Z:()=>i});var r=o(58109),a=o(95201);function n(e){return(0,a.Z)("MuiStepIcon",e)}const i=(0,r.Z)("MuiStepIcon",["root","active","completed","error","text"])},65404:(e,t,o)=>{o.d(t,{Z:()=>C});var r=o(55559),a=o(30984),n=o(66204),i=o(56317),l=o(58029),s=o(61125),c=o(57369),p=o(82902),d=o(74837),u=o(74918),m=o(85339),v=o(43188);const Z=["children","className","componentsProps","error","icon","optional","slotProps","StepIconComponent","StepIconProps"],b=(0,s.ZP)("span",{name:"MuiStepLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.orientation]]}})((({ownerState:e})=>(0,a.Z)({display:"flex",alignItems:"center",[`&.${m.Z.alternativeLabel}`]:{flexDirection:"column"},[`&.${m.Z.disabled}`]:{cursor:"default"}},"vertical"===e.orientation&&{textAlign:"left",padding:"8px 0"}))),x=(0,s.ZP)("span",{name:"MuiStepLabel",slot:"Label",overridesResolver:(e,t)=>t.label})((({theme:e})=>(0,a.Z)({},e.typography.body2,{display:"block",transition:e.transitions.create("color",{duration:e.transitions.duration.shortest}),[`&.${m.Z.active}`]:{color:(e.vars||e).palette.text.primary,fontWeight:500},[`&.${m.Z.completed}`]:{color:(e.vars||e).palette.text.primary,fontWeight:500},[`&.${m.Z.alternativeLabel}`]:{marginTop:16},[`&.${m.Z.error}`]:{color:(e.vars||e).palette.error.main}}))),h=(0,s.ZP)("span",{name:"MuiStepLabel",slot:"IconContainer",overridesResolver:(e,t)=>t.iconContainer})((()=>({flexShrink:0,display:"flex",paddingRight:8,[`&.${m.Z.alternativeLabel}`]:{paddingRight:0}}))),S=(0,s.ZP)("span",{name:"MuiStepLabel",slot:"LabelContainer",overridesResolver:(e,t)=>t.labelContainer})((({theme:e})=>({width:"100%",color:(e.vars||e).palette.text.secondary,[`&.${m.Z.alternativeLabel}`]:{textAlign:"center"}}))),f=n.forwardRef((function(e,t){var o;const s=(0,c.Z)({props:e,name:"MuiStepLabel"}),{children:f,className:C,componentsProps:g={},error:y=!1,icon:L,optional:w,slotProps:R={},StepIconComponent:M,StepIconProps:N}=s,j=(0,r.Z)(s,Z),{alternativeLabel:P,orientation:$}=n.useContext(d.Z),{active:I,disabled:z,completed:k,icon:B}=n.useContext(u.Z),T=L||B;let _=M;T&&!_&&(_=p.Z);const A=(0,a.Z)({},s,{active:I,alternativeLabel:P,completed:k,disabled:z,error:y,orientation:$}),W=(e=>{const{classes:t,orientation:o,active:r,completed:a,error:n,disabled:i,alternativeLabel:s}=e,c={root:["root",o,n&&"error",i&&"disabled",s&&"alternativeLabel"],label:["label",r&&"active",a&&"completed",n&&"error",i&&"disabled",s&&"alternativeLabel"],iconContainer:["iconContainer",r&&"active",a&&"completed",n&&"error",i&&"disabled",s&&"alternativeLabel"],labelContainer:["labelContainer",s&&"alternativeLabel"]};return(0,l.Z)(c,m.H,t)})(A),F=null!=(o=R.label)?o:g.label;return(0,v.jsxs)(b,(0,a.Z)({className:(0,i.Z)(W.root,C),ref:t,ownerState:A},j,{children:[T||_?(0,v.jsx)(h,{className:W.iconContainer,ownerState:A,children:(0,v.jsx)(_,(0,a.Z)({completed:k,active:I,error:y,icon:T},N))}):null,(0,v.jsxs)(S,{className:W.labelContainer,ownerState:A,children:[f?(0,v.jsx)(x,(0,a.Z)({ownerState:A},F,{className:(0,i.Z)(W.label,null==F?void 0:F.className),children:f})):null,w]})]}))}));f.muiName="StepLabel";const C=f},85339:(e,t,o)=>{o.d(t,{H:()=>n,Z:()=>i});var r=o(58109),a=o(95201);function n(e){return(0,a.Z)("MuiStepLabel",e)}const i=(0,r.Z)("MuiStepLabel",["root","horizontal","vertical","label","active","completed","error","disabled","iconContainer","alternativeLabel","labelContainer"])},74837:(e,t,o)=>{o.d(t,{Z:()=>i,s:()=>n});var r=o(66204);const a=r.createContext({});function n(){return r.useContext(a)}const i=a}}]);
//# sourceMappingURL=9065.5dde3c26.chunk.js.map