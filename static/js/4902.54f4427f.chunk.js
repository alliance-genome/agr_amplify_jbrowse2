"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[4902],{83162:(r,e,a)=>{a.d(e,{A:()=>w});var t=a(83673),o=a(6614),s=a(7552),n=a(93878),l=a(60827),i=a(51148),c=a(31049),p=a(74893),d=a(69500);const u=(0,p.A)((0,d.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var v=a(28375),m=a(43045);const A=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],f=(0,i.Ay)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.root,e[a.variant],a.colorDefault&&e.colorDefault]}})((({theme:r})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:r.typography.fontFamily,fontSize:r.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(r.vars||r).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:(0,o.A)({color:(r.vars||r).palette.background.default},r.vars?{backgroundColor:r.vars.palette.Avatar.defaultBg}:(0,o.A)({backgroundColor:r.palette.grey[400]},r.applyStyles("dark",{backgroundColor:r.palette.grey[600]})))}]}))),g=(0,i.Ay)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(r,e)=>e.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),h=(0,i.Ay)(u,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(r,e)=>e.fallback})({width:"75%",height:"75%"}),w=s.forwardRef((function(r,e){const a=(0,c.A)({props:r,name:"MuiAvatar"}),{alt:i,children:p,className:u,component:w="div",slots:y={},slotProps:b={},imgProps:S,sizes:x,src:P,srcSet:k,variant:N="circular"}=a,M=(0,t.A)(a,A);let R=null;const j=function({crossOrigin:r,referrerPolicy:e,src:a,srcSet:t}){const[o,n]=s.useState(!1);return s.useEffect((()=>{if(!a&&!t)return;n(!1);let o=!0;const s=new Image;return s.onload=()=>{o&&n("loaded")},s.onerror=()=>{o&&n("error")},s.crossOrigin=r,s.referrerPolicy=e,s.src=a,t&&(s.srcset=t),()=>{o=!1}}),[r,e,a,t]),o}((0,o.A)({},S,{src:P,srcSet:k})),F=P||k,C=F&&"error"!==j,D=(0,o.A)({},a,{colorDefault:!C,component:w,variant:N}),z=(r=>{const{classes:e,variant:a,colorDefault:t}=r,o={root:["root",a,t&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,l.A)(o,v.k,e)})(D),[G,T]=(0,m.A)("img",{className:z.img,elementType:g,externalForwardedProps:{slots:y,slotProps:{img:(0,o.A)({},S,b.img)}},additionalProps:{alt:i,src:P,srcSet:k,sizes:x},ownerState:D});return R=C?(0,d.jsx)(G,(0,o.A)({},T)):p||0===p?p:F&&i?i[0]:(0,d.jsx)(h,{ownerState:D,className:z.fallback}),(0,d.jsx)(f,(0,o.A)({as:w,ownerState:D,className:(0,n.A)(z.root,u),ref:e},M,{children:R}))}))},28375:(r,e,a)=>{a.d(e,{A:()=>n,k:()=>s});var t=a(55549),o=a(9577);function s(r){return(0,o.Ay)("MuiAvatar",r)}const n=(0,t.A)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"])},34902:(r,e,a)=>{a.r(e),a.d(e,{avatarGroupClasses:()=>A,default:()=>y,getAvatarGroupUtilityClass:()=>m});var t=a(83673),o=a(6614),s=a(7552),n=(a(19487),a(93878)),l=a(60827),i=a(51148),c=a(31049),p=a(28375),d=a(83162),u=a(55549),v=a(9577);function m(r){return(0,v.Ay)("MuiAvatarGroup",r)}const A=(0,u.A)("MuiAvatarGroup",["root","avatar"]);var f=a(69500);const g=["children","className","component","componentsProps","max","renderSurplus","slotProps","spacing","total","variant"],h={small:-16,medium:null},w=(0,i.Ay)("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:(r,e)=>(0,o.A)({[`& .${A.avatar}`]:e.avatar},e.root)})((({theme:r,ownerState:e})=>{const a=e.spacing&&void 0!==h[e.spacing]?h[e.spacing]:-e.spacing;return{[`& .${p.A.root}`]:{border:`2px solid ${(r.vars||r).palette.background.default}`,boxSizing:"content-box",marginLeft:null!=a?a:-8,"&:last-child":{marginLeft:0}},display:"flex",flexDirection:"row-reverse"}})),y=s.forwardRef((function(r,e){var a;const i=(0,c.A)({props:r,name:"MuiAvatarGroup"}),{children:p,className:u,component:v="div",componentsProps:A={},max:h=5,renderSurplus:y,slotProps:b={},spacing:S="medium",total:x,variant:P="circular"}=i,k=(0,t.A)(i,g);let N=h<2?2:h;const M=(0,o.A)({},i,{max:h,spacing:S,component:v,variant:P}),R=(r=>{const{classes:e}=r;return(0,l.A)({root:["root"],avatar:["avatar"]},m,e)})(M),j=s.Children.toArray(p).filter((r=>s.isValidElement(r))),F=x||j.length;F===N&&(N+=1),N=Math.min(F+1,N);const C=Math.min(j.length,N-1),D=Math.max(F-N,F-C,0),z=y?y(D):`+${D}`,G=null!=(a=b.additionalAvatar)?a:A.additionalAvatar;return(0,f.jsxs)(w,(0,o.A)({as:v,ownerState:M,className:(0,n.A)(R.root,u),ref:e},k,{children:[D?(0,f.jsx)(d.A,(0,o.A)({variant:P},G,{className:(0,n.A)(R.avatar,null==G?void 0:G.className),children:z})):null,j.slice(0,C).reverse().map((r=>s.cloneElement(r,{className:(0,n.A)(r.props.className,R.avatar),variant:r.props.variant||P})))]}))}))},43045:(r,e,a)=>{a.d(e,{A:()=>u});var t=a(6614),o=a(83673),s=a(24979),n=a(33445),l=a(34452),i=a(85196);const c=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],p=["component","slots","slotProps"],d=["component"];function u(r,e){const{className:a,elementType:u,ownerState:v,externalForwardedProps:m,getSlotOwnerState:A,internalForwardedProps:f}=e,g=(0,o.A)(e,c),{component:h,slots:w={[r]:void 0},slotProps:y={[r]:void 0}}=m,b=(0,o.A)(m,p),S=w[r]||u,x=(0,n.Y)(y[r],v),P=(0,l.p)((0,t.A)({className:a},g,{externalForwardedProps:"root"===r?b:void 0,externalSlotProps:x})),{props:{component:k},internalRef:N}=P,M=(0,o.A)(P.props,d),R=(0,s.A)(N,null==x?void 0:x.ref,e.ref),j=A?A(M):{},F=(0,t.A)({},v,j),C="root"===r?k||h:k,D=(0,i.X)(S,(0,t.A)({},"root"===r&&!h&&!w[r]&&f,"root"!==r&&!w[r]&&f,M,C&&{as:C},{ref:R}),F);return Object.keys(j).forEach((r=>{delete D[r]})),[S,D]}}}]);
//# sourceMappingURL=4902.54f4427f.chunk.js.map