"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[8130],{28130:(e,t,n)=>{n.r(t),n.d(t,{default:()=>O});var a=n(66204),o=n(80013),r=n(7146),i=n(46338),l=n(81799),s=n(49140),c=n(31617),d=n(90228),u=n(38684),m=n(80846),p=n(88196),g=n(35421),v=n(90872),Z=n(2266),b=n(92292),h=n(75242),f=n(86600),y=n(23540),E=n(74780),x=n(3206),C=n(3418),S=n(55022);const w=(0,a.lazy)((()=>n.e(4711).then(n.bind(n,14711)))),k=(0,u.ZL)()((()=>({lockedPluginTooltip:{marginRight:"0.5rem"}})));function I(){const{classes:e}=k();return a.createElement(y.Z,{className:e.lockedPluginTooltip,title:"This plugin was installed by an administrator, you cannot remove it."},a.createElement(C.Z,null))}const P=(0,m.observer)((function({plugin:e,model:t}){const[n,r]=(0,a.useState)(),{pluginManager:i}=(0,v.getEnv)(t),l=(0,v.getSession)(t),{jbrowse:c,adminMode:d}=l,u=!!(0,S.uF)(l)&&l.sessionPlugins?.some((t=>i.pluginMetadata[e.name].url===t.url));return a.createElement(a.Fragment,null,n?a.createElement(a.Suspense,{fallback:a.createElement(a.Fragment,null)},a.createElement(w,{plugin:n,onClose:t=>{if(t){const t=i.pluginMetadata[e.name];d?c.removePlugin(t):(0,S.uF)(l)&&l.removeSessionPlugin(t)}r(void 0)}})):null,a.createElement(E.ZP,{key:e.name},d||u?a.createElement(s.Z,{"data-testid":`removePlugin-${e.name}`,onClick:()=>r(e.name)},a.createElement(x.Z,null)):a.createElement(I,null),a.createElement(o.Z,null,e.name)))})),M=(0,m.observer)((function({pluginManager:e,model:t}){const{plugins:n}=e,{filterText:r}=t,i=n.filter((t=>!e.pluginMetadata[t.name]?.isCore));return a.createElement(f.Z,null,i.length>0?i.filter((e=>e.name.toLowerCase().includes(r.toLowerCase()))).map((e=>a.createElement(P,{key:e.name,plugin:e,model:t}))):a.createElement(o.Z,null,"No plugins currently installed"))}));var A=n(2331),F=n(75174),L=n(66159),$=n(90617),N=n(57361),j=n(97916),R=n(93061);const T=(0,u.ZL)()({card:{margin:"0.5em"},icon:{marginLeft:"0.5em",marginRight:"0.5em"},bold:{fontWeight:600},dataField:{display:"flex",alignItems:"center"}}),V=(0,m.observer)((function({plugin:e,model:t,adminMode:n}){const{classes:i}=T(),l=(0,v.getSession)(t),{pluginManager:s}=(0,v.getEnv)(t),{runtimePluginDefinitions:c}=s,d=c.some((t=>t.url===e.url)),[u,m]=(0,a.useState)(!1),g=d||u,Z=(0,p.getParent)(t,3),{jbrowse:b}=Z;return a.createElement(A.Z,{variant:"outlined",key:e.name,className:i.card},a.createElement(F.Z,null,a.createElement(o.Z,{variant:"h5"},a.createElement(L.Z,{href:`${e.location}#readme`,target:"_blank",rel:"noopener"},e.name)),a.createElement("div",{className:i.dataField},a.createElement(N.Z,{style:{marginRight:"0.5em"}}),a.createElement(o.Z,null,e.authors.join(", "))),a.createElement(o.Z,{className:i.bold},"Description:"),a.createElement(o.Z,null,e.description)),a.createElement($.Z,null,a.createElement(r.Z,{variant:"contained",disabled:g,startIcon:d?a.createElement(R.Z,null):a.createElement(j.Z,null),onClick:()=>{n?b.addPlugin({name:e.name,url:e.url}):(0,S.uF)(l)&&l.addSessionPlugin(e),m(!0)}},d?"Installed":"Install")))})),z=(0,a.lazy)((()=>n.e(9322).then(n.bind(n,89322)))),G=(0,u.ZL)()((e=>({expandIcon:{color:e.palette.tertiary.contrastText},adminBadge:{borderRadius:3,backgroundColor:e.palette.quaternary.main,padding:"1em",display:"flex",alignContent:"center"},customPluginButton:{margin:"1em auto",display:"flex"}}))),O=(0,m.observer)((function({model:e}){const{classes:t}=G(),{plugins:n,error:u}=function(){const[e,t]=(0,a.useState)(),[n,o]=(0,a.useState)();return(0,a.useEffect)((()=>{(async()=>{try{const e=await fetch("https://jbrowse.org/plugin-store/plugins.json");if(!e.ok){const t=await e.text();throw new Error(`HTTP ${e.status} fetching plugins: ${t}`)}const n=await e.json();t(n.plugins)}catch(e){console.error(e),o(e)}})()}),[]),{plugins:e,error:n}}(),[m,f]=(0,a.useState)(!1),{adminMode:y}=(0,v.getSession)(e),{pluginManager:E}=(0,p.getEnv)(e);return a.createElement("div",null,y&&a.createElement(a.Fragment,null,!v.isElectron&&a.createElement("div",{className:t.adminBadge},a.createElement(h.Z,{style:{marginRight:"0.3em"}}),a.createElement(o.Z,null,"You are using the ",a.createElement("code",null,"admin-server"),". Any changes you make will be saved to your configuration file. You also have the ability to add custom plugins that are not in the store.")),a.createElement(r.Z,{className:t.customPluginButton,variant:"contained",onClick:()=>f(!0)},"Add custom plugin"),m?a.createElement(a.Suspense,{fallback:a.createElement(a.Fragment,null)},a.createElement(z,{onClose:()=>f(!1),model:e})):null),a.createElement(i.Z,{label:"Filter plugins",value:e.filterText,onChange:t=>e.setFilterText(t.target.value),fullWidth:!0,InputProps:{endAdornment:a.createElement(l.Z,{position:"end"},a.createElement(s.Z,{onClick:()=>e.clearFilterText()},a.createElement(b.Z,null)))}}),a.createElement(c.Z,{defaultExpanded:!0},a.createElement(d.Z,{expandIcon:a.createElement(Z.Z,{className:t.expandIcon})},a.createElement(o.Z,{variant:"h5"},"Installed plugins")),a.createElement("div",{style:{margin:"1em"}},a.createElement(M,{pluginManager:E,model:e}))),a.createElement(c.Z,{defaultExpanded:!0},a.createElement(d.Z,{expandIcon:a.createElement(Z.Z,{className:t.expandIcon})},a.createElement(o.Z,{variant:"h5"},"Available plugins")),u?a.createElement(o.Z,{color:"error"},`${u}`):n?n.filter((t=>!(v.isElectron&&t.cjsUrl)&&t.name.toLowerCase().includes(e.filterText.toLowerCase()))).map((t=>a.createElement(V,{key:t.name,plugin:t,model:e,adminMode:!!y}))):a.createElement(g.LoadingEllipses,null)))}))},93061:(e,t,n)=>{var a=n(57739);t.Z=void 0;var o=a(n(53948)),r=n(43188),i=(0,o.default)((0,r.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");t.Z=i},75242:(e,t,n)=>{var a=n(57739);t.Z=void 0;var o=a(n(53948)),r=n(43188),i=(0,o.default)((0,r.jsx)("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"InfoOutlined");t.Z=i},3418:(e,t,n)=>{var a=n(57739);t.Z=void 0;var o=a(n(53948)),r=n(43188),i=(0,o.default)((0,r.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}),"Lock");t.Z=i},57361:(e,t,n)=>{var a=n(57739);t.Z=void 0;var o=a(n(53948)),r=n(43188),i=(0,o.default)((0,r.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");t.Z=i},66159:(e,t,n)=>{n.d(t,{Z:()=>x});var a=n(55559),o=n(30984),r=n(66204),i=n(56317),l=n(58029),s=n(40118),c=n(61125),d=n(57369),u=n(71948),m=n(81597),p=n(80013),g=n(29110),v=n(4860),Z=n(73330);const b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},h=({theme:e,ownerState:t})=>{const n=(e=>b[e]||e)(t.color),a=(0,v.DW)(e,`palette.${n}`,!1)||t.color,o=(0,v.DW)(e,`palette.${n}Channel`);return"vars"in e&&o?`rgba(${o} / 0.4)`:(0,Z.Fq)(a,.4)};var f=n(43188);const y=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],E=(0,c.ZP)(p.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`underline${(0,s.Z)(n.underline)}`],"button"===n.component&&t.button]}})((({theme:e,ownerState:t})=>(0,o.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&(0,o.Z)({textDecoration:"underline"},"inherit"!==t.color&&{textDecorationColor:h({theme:e,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===t.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${g.Z.focusVisible}`]:{outline:"auto"}}))),x=r.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiLink"}),{className:c,color:p="primary",component:v="a",onBlur:Z,onFocus:h,TypographyClasses:x,underline:C="always",variant:S="inherit",sx:w}=n,k=(0,a.Z)(n,y),{isFocusVisibleRef:I,onBlur:P,onFocus:M,ref:A}=(0,u.Z)(),[F,L]=r.useState(!1),$=(0,m.Z)(t,A),N=(0,o.Z)({},n,{color:p,component:v,focusVisible:F,underline:C,variant:S}),j=(e=>{const{classes:t,component:n,focusVisible:a,underline:o}=e,r={root:["root",`underline${(0,s.Z)(o)}`,"button"===n&&"button",a&&"focusVisible"]};return(0,l.Z)(r,g.w,t)})(N);return(0,f.jsx)(E,(0,o.Z)({color:p,className:(0,i.Z)(j.root,c),classes:x,component:v,onBlur:e=>{P(e),!1===I.current&&L(!1),Z&&Z(e)},onFocus:e=>{M(e),!0===I.current&&L(!0),h&&h(e)},ref:$,ownerState:N,variant:S,sx:[...Object.keys(b).includes(p)?[]:[{color:p}],...Array.isArray(w)?w:[w]]},k))}))},29110:(e,t,n)=>{n.d(t,{Z:()=>i,w:()=>r});var a=n(58109),o=n(95201);function r(e){return(0,o.Z)("MuiLink",e)}const i=(0,a.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"])},74780:(e,t,n)=>{n.d(t,{ZP:()=>w});var a=n(55559),o=n(30984),r=n(66204),i=n(56317),l=n(58029),s=n(54411),c=n(73330),d=n(61125),u=n(57369),m=n(42870),p=n(6842),g=n(5429),v=n(81597),Z=n(5524),b=n(30243),h=n(481),f=n(53292),y=n(43188);const E=["className"],x=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],C=(0,d.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.dense&&t.dense,"flex-start"===n.alignItems&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters,!n.disablePadding&&t.padding,n.button&&t.button,n.hasSecondaryAction&&t.secondaryAction]}})((({theme:e,ownerState:t})=>(0,o.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!t.disablePadding&&(0,o.Z)({paddingTop:8,paddingBottom:8},t.dense&&{paddingTop:4,paddingBottom:4},!t.disableGutters&&{paddingLeft:16,paddingRight:16},!!t.secondaryAction&&{paddingRight:48}),!!t.secondaryAction&&{[`& > .${h.Z.root}`]:{paddingRight:48}},{[`&.${b.Z.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${b.Z.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${b.Z.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${b.Z.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},"flex-start"===t.alignItems&&{alignItems:"flex-start"},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},t.button&&{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${b.Z.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}}},t.hasSecondaryAction&&{paddingRight:48}))),S=(0,d.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),w=r.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiListItem"}),{alignItems:c="center",autoFocus:d=!1,button:h=!1,children:w,className:k,component:I,components:P={},componentsProps:M={},ContainerComponent:A="li",ContainerProps:{className:F}={},dense:L=!1,disabled:$=!1,disableGutters:N=!1,disablePadding:j=!1,divider:R=!1,focusVisibleClassName:T,secondaryAction:V,selected:z=!1,slotProps:G={},slots:O={}}=n,B=(0,a.Z)(n.ContainerProps,E),D=(0,a.Z)(n,x),q=r.useContext(Z.Z),W=r.useMemo((()=>({dense:L||q.dense||!1,alignItems:c,disableGutters:N})),[c,q.dense,L,N]),H=r.useRef(null);(0,g.Z)((()=>{d&&H.current&&H.current.focus()}),[d]);const _=r.Children.toArray(w),Y=_.length&&(0,p.Z)(_[_.length-1],["ListItemSecondaryAction"]),X=(0,o.Z)({},n,{alignItems:c,autoFocus:d,button:h,dense:W.dense,disabled:$,disableGutters:N,disablePadding:j,divider:R,hasSecondaryAction:Y,selected:z}),U=(e=>{const{alignItems:t,button:n,classes:a,dense:o,disabled:r,disableGutters:i,disablePadding:s,divider:c,hasSecondaryAction:d,selected:u}=e,m={root:["root",o&&"dense",!i&&"gutters",!s&&"padding",c&&"divider",r&&"disabled",n&&"button","flex-start"===t&&"alignItemsFlexStart",d&&"secondaryAction",u&&"selected"],container:["container"]};return(0,l.Z)(m,b.o,a)})(X),J=(0,v.Z)(H,t),K=O.root||P.Root||C,Q=G.root||M.root||{},ee=(0,o.Z)({className:(0,i.Z)(U.root,Q.className,k),disabled:$},D);let te=I||"li";return h&&(ee.component=I||"div",ee.focusVisibleClassName=(0,i.Z)(b.Z.focusVisible,T),te=m.Z),Y?(te=ee.component||I?te:"div","li"===A&&("li"===te?te="div":"li"===ee.component&&(ee.component="div")),(0,y.jsx)(Z.Z.Provider,{value:W,children:(0,y.jsxs)(S,(0,o.Z)({as:A,className:(0,i.Z)(U.container,F),ref:J,ownerState:X},B,{children:[(0,y.jsx)(K,(0,o.Z)({},Q,!(0,s.X)(K)&&{as:te,ownerState:(0,o.Z)({},X,Q.ownerState)},ee,{children:_})),_.pop()]}))})):(0,y.jsx)(Z.Z.Provider,{value:W,children:(0,y.jsxs)(K,(0,o.Z)({},Q,{as:te,ref:J},!(0,s.X)(K)&&{ownerState:(0,o.Z)({},X,Q.ownerState)},ee,{children:[_,V&&(0,y.jsx)(f.Z,{children:V})]}))})}))},30243:(e,t,n)=>{n.d(t,{Z:()=>i,o:()=>r});var a=n(58109),o=n(95201);function r(e){return(0,o.Z)("MuiListItem",e)}const i=(0,a.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"])},481:(e,t,n)=>{n.d(t,{Z:()=>i,t:()=>r});var a=n(58109),o=n(95201);function r(e){return(0,o.Z)("MuiListItemButton",e)}const i=(0,a.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"])},53292:(e,t,n)=>{n.d(t,{Z:()=>Z});var a=n(55559),o=n(30984),r=n(66204),i=n(56317),l=n(58029),s=n(61125),c=n(57369),d=n(5524),u=n(719),m=n(43188);const p=["className"],g=(0,s.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.disableGutters&&t.disableGutters]}})((({ownerState:e})=>(0,o.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},e.disableGutters&&{right:0}))),v=r.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiListItemSecondaryAction"}),{className:s}=n,v=(0,a.Z)(n,p),Z=r.useContext(d.Z),b=(0,o.Z)({},n,{disableGutters:Z.disableGutters}),h=(e=>{const{disableGutters:t,classes:n}=e,a={root:["root",t&&"disableGutters"]};return(0,l.Z)(a,u.A,n)})(b);return(0,m.jsx)(g,(0,o.Z)({className:(0,i.Z)(h.root,s),ownerState:b,ref:t},v))}));v.muiName="ListItemSecondaryAction";const Z=v},719:(e,t,n)=>{n.d(t,{A:()=>r,Z:()=>i});var a=n(58109),o=n(95201);function r(e){return(0,o.Z)("MuiListItemSecondaryAction",e)}const i=(0,a.Z)("MuiListItemSecondaryAction",["root","disableGutters"])}}]);
//# sourceMappingURL=8130.b7ced62a.chunk.js.map