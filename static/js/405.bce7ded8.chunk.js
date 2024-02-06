"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[405],{38465:(r,a,t)=>{t.d(a,{Z:()=>f});var o=t(30984),n=t(55559),e=t(66204),i=t(56317),l=t(56325),s=t(58029),c=t(42142),g=t(61125),p=t(57369),h=t(40118),d=t(81469),v=t(43188);const m=["anchorOrigin","className","classes","component","components","componentsProps","children","overlap","color","invisible","max","badgeContent","slots","slotProps","showZero","variant"],u=(0,g.ZP)("span",{name:"MuiBadge",slot:"Root",overridesResolver:(r,a)=>a.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),b=(0,g.ZP)("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(r,a)=>{const{ownerState:t}=r;return[a.badge,a[t.variant],a[`anchorOrigin${(0,h.Z)(t.anchorOrigin.vertical)}${(0,h.Z)(t.anchorOrigin.horizontal)}${(0,h.Z)(t.overlap)}`],"default"!==t.color&&a[`color${(0,h.Z)(t.color)}`],t.invisible&&a.invisible]}})((({theme:r})=>{var a;return{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:r.typography.fontFamily,fontWeight:r.typography.fontWeightMedium,fontSize:r.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:r.transitions.create("transform",{easing:r.transitions.easing.easeInOut,duration:r.transitions.duration.enteringScreen}),variants:[...Object.keys((null!=(a=r.vars)?a:r).palette).filter((a=>{var t,o;return(null!=(t=r.vars)?t:r).palette[a].main&&(null!=(o=r.vars)?o:r).palette[a].contrastText})).map((a=>({props:{color:a},style:{backgroundColor:(r.vars||r).palette[a].main,color:(r.vars||r).palette[a].contrastText}}))),{props:{variant:"dot"},style:{borderRadius:4,height:8,minWidth:8,padding:0}},{props:({ownerState:r})=>"top"===r.anchorOrigin.vertical&&"right"===r.anchorOrigin.horizontal&&"rectangular"===r.overlap,style:{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${d.Z.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:r})=>"bottom"===r.anchorOrigin.vertical&&"right"===r.anchorOrigin.horizontal&&"rectangular"===r.overlap,style:{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${d.Z.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:r})=>"top"===r.anchorOrigin.vertical&&"left"===r.anchorOrigin.horizontal&&"rectangular"===r.overlap,style:{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${d.Z.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:r})=>"bottom"===r.anchorOrigin.vertical&&"left"===r.anchorOrigin.horizontal&&"rectangular"===r.overlap,style:{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${d.Z.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:({ownerState:r})=>"top"===r.anchorOrigin.vertical&&"right"===r.anchorOrigin.horizontal&&"circular"===r.overlap,style:{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${d.Z.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}}},{props:({ownerState:r})=>"bottom"===r.anchorOrigin.vertical&&"right"===r.anchorOrigin.horizontal&&"circular"===r.overlap,style:{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${d.Z.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}}},{props:({ownerState:r})=>"top"===r.anchorOrigin.vertical&&"left"===r.anchorOrigin.horizontal&&"circular"===r.overlap,style:{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${d.Z.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:({ownerState:r})=>"bottom"===r.anchorOrigin.vertical&&"left"===r.anchorOrigin.horizontal&&"circular"===r.overlap,style:{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${d.Z.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:{invisible:!0},style:{transition:r.transitions.create("transform",{easing:r.transitions.easing.easeInOut,duration:r.transitions.duration.leavingScreen})}}]}})),f=e.forwardRef((function(r,a){var t,e,g,f,O,Z;const y=(0,p.Z)({props:r,name:"MuiBadge"}),{anchorOrigin:w={vertical:"top",horizontal:"right"},className:x,component:C,components:S={},componentsProps:$={},children:R,overlap:z="rectangular",color:B="default",invisible:T=!1,max:P=99,badgeContent:I,slots:k,slotProps:N,showZero:j=!1,variant:L="standard"}=y,M=(0,n.Z)(y,m),{badgeContent:W,invisible:_,max:F,displayValue:V}=function(r){const{badgeContent:a,invisible:t=!1,max:o=99,showZero:n=!1}=r,e=(0,l.Z)({badgeContent:a,max:o});let i=t;!1!==t||0!==a||n||(i=!0);const{badgeContent:s,max:c=o}=i?e:r;return{badgeContent:s,invisible:i,max:c,displayValue:s&&Number(s)>c?`${c}+`:s}}({max:P,invisible:T,badgeContent:I,showZero:j}),A=(0,l.Z)({anchorOrigin:w,color:B,overlap:z,variant:L,badgeContent:I}),D=_||null==W&&"dot"!==L,{color:E=B,overlap:H=z,anchorOrigin:U=w,variant:q=L}=D?A:y,G="dot"!==q?V:void 0,J=(0,o.Z)({},y,{badgeContent:W,invisible:D,max:F,displayValue:G,showZero:j,anchorOrigin:U,color:E,overlap:H,variant:q}),K=(r=>{const{color:a,anchorOrigin:t,invisible:o,overlap:n,variant:e,classes:i={}}=r,l={root:["root"],badge:["badge",e,o&&"invisible",`anchorOrigin${(0,h.Z)(t.vertical)}${(0,h.Z)(t.horizontal)}`,`anchorOrigin${(0,h.Z)(t.vertical)}${(0,h.Z)(t.horizontal)}${(0,h.Z)(n)}`,`overlap${(0,h.Z)(n)}`,"default"!==a&&`color${(0,h.Z)(a)}`]};return(0,s.Z)(l,d.I,i)})(J),Q=null!=(t=null!=(e=null==k?void 0:k.root)?e:S.Root)?t:u,X=null!=(g=null!=(f=null==k?void 0:k.badge)?f:S.Badge)?g:b,Y=null!=(O=null==N?void 0:N.root)?O:$.root,rr=null!=(Z=null==N?void 0:N.badge)?Z:$.badge,ar=(0,c.y)({elementType:Q,externalSlotProps:Y,externalForwardedProps:M,additionalProps:{ref:a,as:C},ownerState:J,className:(0,i.Z)(null==Y?void 0:Y.className,K.root,x)}),tr=(0,c.y)({elementType:X,externalSlotProps:rr,ownerState:J,className:(0,i.Z)(K.badge,null==rr?void 0:rr.className)});return(0,v.jsxs)(Q,(0,o.Z)({},ar,{children:[R,(0,v.jsx)(X,(0,o.Z)({},tr,{children:G}))]}))}))},81469:(r,a,t)=>{t.d(a,{I:()=>e,Z:()=>i});var o=t(58109),n=t(95201);function e(r){return(0,n.Z)("MuiBadge",r)}const i=(0,o.Z)("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"])},80405:(r,a,t)=>{t.r(a),t.d(a,{badgeClasses:()=>n.Z,default:()=>o.Z,getBadgeUtilityClass:()=>n.I});var o=t(38465),n=t(81469)}}]);
//# sourceMappingURL=405.bce7ded8.chunk.js.map