"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[1220],{51220:(e,t,n)=>{n.r(t),n.d(t,{default:()=>O});var a=n(66204),o=n(80013),r=n(7146),s=n(46338),i=n(81799),l=n(49140),c=n(31617),d=n(90228),u=n(38684),m=n(80846),p=n(88196),g=n(43902),Z=n(31211),v=n(2266),b=n(92292),f=n(75242),h=n(86600),y=n(23540),x=n(74780),C=n(3206),S=n(3418),E=n(18569);const w=(0,a.lazy)((()=>n.e(5396).then(n.bind(n,15396)))),M=(0,u.ZL)()((()=>({lockedPluginTooltip:{marginRight:"0.5rem"}})));function I(){const{classes:e}=M();return a.createElement(y.Z,{className:e.lockedPluginTooltip,title:"This plugin was installed by an administrator, you cannot remove it."},a.createElement(S.Z,null))}const N=(0,m.observer)((function({plugin:e,model:t}){const[n,r]=(0,a.useState)(),{pluginManager:s}=(0,Z.getEnv)(t),i=(0,Z.getSession)(t),{jbrowse:c,adminMode:d}=i,u=!!(0,E.uF)(i)&&i.sessionPlugins?.some((t=>s.pluginMetadata[e.name].url===t.url));return a.createElement(a.Fragment,null,n?a.createElement(a.Suspense,{fallback:a.createElement(a.Fragment,null)},a.createElement(w,{plugin:n,onClose:t=>{if(t){const t=s.pluginMetadata[e.name];d?c.removePlugin(t):(0,E.uF)(i)&&i.removeSessionPlugin(t)}r(void 0)}})):null,a.createElement(x.ZP,{key:e.name},d||u?a.createElement(l.Z,{"data-testid":`removePlugin-${e.name}`,onClick:()=>r(e.name)},a.createElement(C.Z,null)):a.createElement(I,null),a.createElement(o.Z,null,e.name)))})),k=(0,m.observer)((function({pluginManager:e,model:t}){const{plugins:n}=e,{filterText:r}=t,s=n.filter((t=>!e.pluginMetadata[t.name]?.isCore));return a.createElement(h.Z,null,s.length>0?s.filter((e=>e.name.toLowerCase().includes(r.toLowerCase()))).map((e=>a.createElement(N,{key:e.name,plugin:e,model:t}))):a.createElement(o.Z,null,"No plugins currently installed"))}));var P=n(2331),A=n(75174),R=n(66159),$=n(90617),j=n(57361),L=n(97916),F=n(93061);const V=(0,u.ZL)()({card:{margin:"0.5em"},icon:{marginLeft:"0.5em",marginRight:"0.5em"},bold:{fontWeight:600},dataField:{display:"flex",alignItems:"center"}}),G=(0,m.observer)((function({plugin:e,model:t,adminMode:n}){const{classes:s}=V(),i=(0,Z.getSession)(t),{pluginManager:l}=(0,Z.getEnv)(t),{runtimePluginDefinitions:c}=l,d=c.some((t=>t.url===e.url)),[u,m]=(0,a.useState)(!1),g=d||u,v=(0,p.getParent)(t,3),{jbrowse:b}=v;return a.createElement(P.Z,{variant:"outlined",key:e.name,className:s.card},a.createElement(A.Z,null,a.createElement(o.Z,{variant:"h5"},a.createElement(R.Z,{href:`${e.location}#readme`,target:"_blank",rel:"noopener"},e.name)),a.createElement("div",{className:s.dataField},a.createElement(j.Z,{style:{marginRight:"0.5em"}}),a.createElement(o.Z,null,e.authors.join(", "))),a.createElement(o.Z,{className:s.bold},"Description:"),a.createElement(o.Z,null,e.description)),a.createElement($.Z,null,a.createElement(r.Z,{variant:"contained",disabled:g,startIcon:d?a.createElement(F.Z,null):a.createElement(L.Z,null),onClick:()=>{n?b.addPlugin({name:e.name,url:e.url}):(0,E.uF)(i)&&i.addSessionPlugin(e),m(!0)}},d?"Installed":"Install")))})),T=(0,a.lazy)((()=>n.e(7839).then(n.bind(n,97839)))),z=(0,u.ZL)()((e=>({expandIcon:{color:e.palette.tertiary.contrastText},adminBadge:{borderRadius:3,backgroundColor:e.palette.quaternary.main,padding:"1em",display:"flex",alignContent:"center"},customPluginButton:{margin:"1em auto",display:"flex"}}))),O=(0,m.observer)((function({model:e}){const{classes:t}=z(),{plugins:n,error:u}=function(){const[e,t]=(0,a.useState)(),[n,o]=(0,a.useState)();return(0,a.useEffect)((()=>{(async()=>{try{const e=await fetch("https://jbrowse.org/plugin-store/plugins.json");if(!e.ok){const t=await e.text();throw new Error(`HTTP ${e.status} fetching plugins: ${t}`)}const n=await e.json();t(n.plugins)}catch(e){console.error(e),o(e)}})()}),[]),{plugins:e,error:n}}(),[m,h]=(0,a.useState)(!1),{adminMode:y}=(0,Z.getSession)(e),{pluginManager:x}=(0,p.getEnv)(e);return a.createElement("div",null,y&&a.createElement(a.Fragment,null,!Z.isElectron&&a.createElement("div",{className:t.adminBadge},a.createElement(f.Z,{style:{marginRight:"0.3em"}}),a.createElement(o.Z,null,"You are using the ",a.createElement("code",null,"admin-server"),". Any changes you make will be saved to your configuration file. You also have the ability to add custom plugins that are not in the store.")),a.createElement(r.Z,{className:t.customPluginButton,variant:"contained",onClick:()=>h(!0)},"Add custom plugin"),m?a.createElement(a.Suspense,{fallback:a.createElement(a.Fragment,null)},a.createElement(T,{onClose:()=>h(!1),model:e})):null),a.createElement(s.Z,{label:"Filter plugins",value:e.filterText,onChange:t=>e.setFilterText(t.target.value),fullWidth:!0,InputProps:{endAdornment:a.createElement(i.Z,{position:"end"},a.createElement(l.Z,{onClick:()=>e.clearFilterText()},a.createElement(b.Z,null)))}}),a.createElement(c.Z,{defaultExpanded:!0},a.createElement(d.Z,{expandIcon:a.createElement(v.Z,{className:t.expandIcon})},a.createElement(o.Z,{variant:"h5"},"Installed plugins")),a.createElement("div",{style:{margin:"1em"}},a.createElement(k,{pluginManager:x,model:e}))),a.createElement(c.Z,{defaultExpanded:!0},a.createElement(d.Z,{expandIcon:a.createElement(v.Z,{className:t.expandIcon})},a.createElement(o.Z,{variant:"h5"},"Available plugins")),u?a.createElement(o.Z,{color:"error"},`${u}`):n?n.filter((t=>!(Z.isElectron&&t.cjsUrl)&&t.name.toLowerCase().includes(e.filterText.toLowerCase()))).map((t=>a.createElement(G,{key:t.name,plugin:t,model:e,adminMode:!!y}))):a.createElement(g.LoadingEllipses,null)))}))},93061:(e,t,n)=>{var a=n(57739);t.Z=void 0;var o=a(n(53948)),r=n(43188),s=(0,o.default)((0,r.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");t.Z=s},2266:(e,t,n)=>{var a=n(57739);t.Z=void 0;var o=a(n(53948)),r=n(43188),s=(0,o.default)((0,r.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.Z=s},75242:(e,t,n)=>{var a=n(57739);t.Z=void 0;var o=a(n(53948)),r=n(43188),s=(0,o.default)((0,r.jsx)("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"InfoOutlined");t.Z=s},3418:(e,t,n)=>{var a=n(57739);t.Z=void 0;var o=a(n(53948)),r=n(43188),s=(0,o.default)((0,r.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}),"Lock");t.Z=s},57361:(e,t,n)=>{var a=n(57739);t.Z=void 0;var o=a(n(53948)),r=n(43188),s=(0,o.default)((0,r.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");t.Z=s},90228:(e,t,n)=>{n.d(t,{Z:()=>x});var a=n(55559),o=n(30984),r=n(66204),s=n(56317),i=n(58029),l=n(61125),c=n(57369),d=n(42870),u=n(86032),m=n(58109),p=n(95201);function g(e){return(0,p.Z)("MuiAccordionSummary",e)}const Z=(0,m.Z)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]);var v=n(43188);const b=["children","className","expandIcon","focusVisibleClassName","onClick"],f=(0,l.ZP)(d.Z,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e,ownerState:t})=>{const n={duration:e.transitions.duration.shortest};return(0,o.Z)({display:"flex",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],n),[`&.${Z.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${Z.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`&:hover:not(.${Z.disabled})`]:{cursor:"pointer"}},!t.disableGutters&&{[`&.${Z.expanded}`]:{minHeight:64}})})),h=(0,l.ZP)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,t)=>t.content})((({theme:e,ownerState:t})=>(0,o.Z)({display:"flex",flexGrow:1,margin:"12px 0"},!t.disableGutters&&{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),[`&.${Z.expanded}`]:{margin:"20px 0"}}))),y=(0,l.ZP)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,t)=>t.expandIconWrapper})((({theme:e})=>({display:"flex",color:(e.vars||e).palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),[`&.${Z.expanded}`]:{transform:"rotate(180deg)"}}))),x=r.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiAccordionSummary"}),{children:l,className:d,expandIcon:m,focusVisibleClassName:p,onClick:Z}=n,x=(0,a.Z)(n,b),{disabled:C=!1,disableGutters:S,expanded:E,toggle:w}=r.useContext(u.Z),M=(0,o.Z)({},n,{expanded:E,disabled:C,disableGutters:S}),I=(e=>{const{classes:t,expanded:n,disabled:a,disableGutters:o}=e,r={root:["root",n&&"expanded",a&&"disabled",!o&&"gutters"],focusVisible:["focusVisible"],content:["content",n&&"expanded",!o&&"contentGutters"],expandIconWrapper:["expandIconWrapper",n&&"expanded"]};return(0,i.Z)(r,g,t)})(M);return(0,v.jsxs)(f,(0,o.Z)({focusRipple:!1,disableRipple:!0,disabled:C,component:"div","aria-expanded":E,className:(0,s.Z)(I.root,d),focusVisibleClassName:(0,s.Z)(I.focusVisible,p),onClick:e=>{w&&w(e),Z&&Z(e)},ref:t,ownerState:M},x,{children:[(0,v.jsx)(h,{className:I.content,ownerState:M,children:l}),m&&(0,v.jsx)(y,{className:I.expandIconWrapper,ownerState:M,children:m})]}))}))},2331:(e,t,n)=>{n.d(t,{Z:()=>Z});var a=n(30984),o=n(55559),r=n(66204),s=n(56317),i=n(58029),l=n(61125),c=n(57369),d=n(86636),u=n(17352),m=n(43188);const p=["className","raised"],g=(0,l.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),Z=r.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiCard"}),{className:r,raised:l=!1}=n,d=(0,o.Z)(n,p),Z=(0,a.Z)({},n,{raised:l}),v=(e=>{const{classes:t}=e;return(0,i.Z)({root:["root"]},u.y,t)})(Z);return(0,m.jsx)(g,(0,a.Z)({className:(0,s.Z)(v.root,r),elevation:l?8:void 0,ref:t,ownerState:Z},d))}))},17352:(e,t,n)=>{n.d(t,{Z:()=>s,y:()=>r});var a=n(58109),o=n(95201);function r(e){return(0,o.Z)("MuiCard",e)}const s=(0,a.Z)("MuiCard",["root"])},90617:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(55559),o=n(30984),r=n(66204),s=n(56317),i=n(58029),l=n(61125),c=n(57369),d=n(53200),u=n(43188);const m=["disableSpacing","className"],p=(0,l.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disableSpacing&&t.spacing]}})((({ownerState:e})=>(0,o.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}}))),g=r.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiCardActions"}),{disableSpacing:r=!1,className:l}=n,g=(0,a.Z)(n,m),Z=(0,o.Z)({},n,{disableSpacing:r}),v=(e=>{const{classes:t,disableSpacing:n}=e,a={root:["root",!n&&"spacing"]};return(0,i.Z)(a,d.s,t)})(Z);return(0,u.jsx)(p,(0,o.Z)({className:(0,s.Z)(v.root,l),ownerState:Z,ref:t},g))}))},53200:(e,t,n)=>{n.d(t,{Z:()=>s,s:()=>r});var a=n(58109),o=n(95201);function r(e){return(0,o.Z)("MuiCardActions",e)}const s=(0,a.Z)("MuiCardActions",["root","spacing"])},75174:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(30984),o=n(55559),r=n(66204),s=n(56317),i=n(58029),l=n(61125),c=n(57369),d=n(65160),u=n(43188);const m=["className","component"],p=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),g=r.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiCardContent"}),{className:r,component:l="div"}=n,g=(0,o.Z)(n,m),Z=(0,a.Z)({},n,{component:l}),v=(e=>{const{classes:t}=e;return(0,i.Z)({root:["root"]},d.N,t)})(Z);return(0,u.jsx)(p,(0,a.Z)({as:l,className:(0,s.Z)(v.root,r),ownerState:Z,ref:t},g))}))},65160:(e,t,n)=>{n.d(t,{N:()=>r,Z:()=>s});var a=n(58109),o=n(95201);function r(e){return(0,o.Z)("MuiCardContent",e)}const s=(0,a.Z)("MuiCardContent",["root"])},66159:(e,t,n)=>{n.d(t,{Z:()=>C});var a=n(55559),o=n(30984),r=n(66204),s=n(56317),i=n(58029),l=n(40118),c=n(61125),d=n(57369),u=n(71948),m=n(81597),p=n(80013),g=n(29110),Z=n(4860),v=n(73330);const b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},f=({theme:e,ownerState:t})=>{const n=(e=>b[e]||e)(t.color),a=(0,Z.DW)(e,`palette.${n}`,!1)||t.color,o=(0,Z.DW)(e,`palette.${n}Channel`);return"vars"in e&&o?`rgba(${o} / 0.4)`:(0,v.Fq)(a,.4)};var h=n(43188);const y=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],x=(0,c.ZP)(p.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`underline${(0,l.Z)(n.underline)}`],"button"===n.component&&t.button]}})((({theme:e,ownerState:t})=>(0,o.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&(0,o.Z)({textDecoration:"underline"},"inherit"!==t.color&&{textDecorationColor:f({theme:e,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===t.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${g.Z.focusVisible}`]:{outline:"auto"}}))),C=r.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiLink"}),{className:c,color:p="primary",component:Z="a",onBlur:v,onFocus:f,TypographyClasses:C,underline:S="always",variant:E="inherit",sx:w}=n,M=(0,a.Z)(n,y),{isFocusVisibleRef:I,onBlur:N,onFocus:k,ref:P}=(0,u.Z)(),[A,R]=r.useState(!1),$=(0,m.Z)(t,P),j=(0,o.Z)({},n,{color:p,component:Z,focusVisible:A,underline:S,variant:E}),L=(e=>{const{classes:t,component:n,focusVisible:a,underline:o}=e,r={root:["root",`underline${(0,l.Z)(o)}`,"button"===n&&"button",a&&"focusVisible"]};return(0,i.Z)(r,g.w,t)})(j);return(0,h.jsx)(x,(0,o.Z)({color:p,className:(0,s.Z)(L.root,c),classes:C,component:Z,onBlur:e=>{N(e),!1===I.current&&R(!1),v&&v(e)},onFocus:e=>{k(e),!0===I.current&&R(!0),f&&f(e)},ref:$,ownerState:j,variant:E,sx:[...Object.keys(b).includes(p)?[]:[{color:p}],...Array.isArray(w)?w:[w]]},M))}))},29110:(e,t,n)=>{n.d(t,{Z:()=>s,w:()=>r});var a=n(58109),o=n(95201);function r(e){return(0,o.Z)("MuiLink",e)}const s=(0,a.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"])},74780:(e,t,n)=>{n.d(t,{ZP:()=>w});var a=n(55559),o=n(30984),r=n(66204),s=n(56317),i=n(58029),l=n(54411),c=n(73330),d=n(61125),u=n(57369),m=n(42870),p=n(6842),g=n(5429),Z=n(81597),v=n(5524),b=n(30243),f=n(481),h=n(53292),y=n(43188);const x=["className"],C=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],S=(0,d.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.dense&&t.dense,"flex-start"===n.alignItems&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters,!n.disablePadding&&t.padding,n.button&&t.button,n.hasSecondaryAction&&t.secondaryAction]}})((({theme:e,ownerState:t})=>(0,o.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!t.disablePadding&&(0,o.Z)({paddingTop:8,paddingBottom:8},t.dense&&{paddingTop:4,paddingBottom:4},!t.disableGutters&&{paddingLeft:16,paddingRight:16},!!t.secondaryAction&&{paddingRight:48}),!!t.secondaryAction&&{[`& > .${f.Z.root}`]:{paddingRight:48}},{[`&.${b.Z.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${b.Z.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${b.Z.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${b.Z.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},"flex-start"===t.alignItems&&{alignItems:"flex-start"},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},t.button&&{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${b.Z.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,c.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}}},t.hasSecondaryAction&&{paddingRight:48}))),E=(0,d.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),w=r.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiListItem"}),{alignItems:c="center",autoFocus:d=!1,button:f=!1,children:w,className:M,component:I,components:N={},componentsProps:k={},ContainerComponent:P="li",ContainerProps:{className:A}={},dense:R=!1,disabled:$=!1,disableGutters:j=!1,disablePadding:L=!1,divider:F=!1,focusVisibleClassName:V,secondaryAction:G,selected:T=!1,slotProps:z={},slots:O={}}=n,B=(0,a.Z)(n.ContainerProps,x),D=(0,a.Z)(n,C),W=r.useContext(v.Z),H=r.useMemo((()=>({dense:R||W.dense||!1,alignItems:c,disableGutters:j})),[c,W.dense,R,j]),q=r.useRef(null);(0,g.Z)((()=>{d&&q.current&&q.current.focus()}),[d]);const _=r.Children.toArray(w),Y=_.length&&(0,p.Z)(_[_.length-1],["ListItemSecondaryAction"]),X=(0,o.Z)({},n,{alignItems:c,autoFocus:d,button:f,dense:H.dense,disabled:$,disableGutters:j,disablePadding:L,divider:F,hasSecondaryAction:Y,selected:T}),U=(e=>{const{alignItems:t,button:n,classes:a,dense:o,disabled:r,disableGutters:s,disablePadding:l,divider:c,hasSecondaryAction:d,selected:u}=e,m={root:["root",o&&"dense",!s&&"gutters",!l&&"padding",c&&"divider",r&&"disabled",n&&"button","flex-start"===t&&"alignItemsFlexStart",d&&"secondaryAction",u&&"selected"],container:["container"]};return(0,i.Z)(m,b.o,a)})(X),J=(0,Z.Z)(q,t),K=O.root||N.Root||S,Q=z.root||k.root||{},ee=(0,o.Z)({className:(0,s.Z)(U.root,Q.className,M),disabled:$},D);let te=I||"li";return f&&(ee.component=I||"div",ee.focusVisibleClassName=(0,s.Z)(b.Z.focusVisible,V),te=m.Z),Y?(te=ee.component||I?te:"div","li"===P&&("li"===te?te="div":"li"===ee.component&&(ee.component="div")),(0,y.jsx)(v.Z.Provider,{value:H,children:(0,y.jsxs)(E,(0,o.Z)({as:P,className:(0,s.Z)(U.container,A),ref:J,ownerState:X},B,{children:[(0,y.jsx)(K,(0,o.Z)({},Q,!(0,l.X)(K)&&{as:te,ownerState:(0,o.Z)({},X,Q.ownerState)},ee,{children:_})),_.pop()]}))})):(0,y.jsx)(v.Z.Provider,{value:H,children:(0,y.jsxs)(K,(0,o.Z)({},Q,{as:te,ref:J},!(0,l.X)(K)&&{ownerState:(0,o.Z)({},X,Q.ownerState)},ee,{children:[_,G&&(0,y.jsx)(h.Z,{children:G})]}))})}))},30243:(e,t,n)=>{n.d(t,{Z:()=>s,o:()=>r});var a=n(58109),o=n(95201);function r(e){return(0,o.Z)("MuiListItem",e)}const s=(0,a.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"])},481:(e,t,n)=>{n.d(t,{Z:()=>s,t:()=>r});var a=n(58109),o=n(95201);function r(e){return(0,o.Z)("MuiListItemButton",e)}const s=(0,a.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"])},53292:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(55559),o=n(30984),r=n(66204),s=n(56317),i=n(58029),l=n(61125),c=n(57369),d=n(5524),u=n(719),m=n(43188);const p=["className"],g=(0,l.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.disableGutters&&t.disableGutters]}})((({ownerState:e})=>(0,o.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},e.disableGutters&&{right:0}))),Z=r.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiListItemSecondaryAction"}),{className:l}=n,Z=(0,a.Z)(n,p),v=r.useContext(d.Z),b=(0,o.Z)({},n,{disableGutters:v.disableGutters}),f=(e=>{const{disableGutters:t,classes:n}=e,a={root:["root",t&&"disableGutters"]};return(0,i.Z)(a,u.A,n)})(b);return(0,m.jsx)(g,(0,o.Z)({className:(0,s.Z)(f.root,l),ownerState:b,ref:t},Z))}));Z.muiName="ListItemSecondaryAction";const v=Z},719:(e,t,n)=>{n.d(t,{A:()=>r,Z:()=>s});var a=n(58109),o=n(95201);function r(e){return(0,o.Z)("MuiListItemSecondaryAction",e)}const s=(0,a.Z)("MuiListItemSecondaryAction",["root","disableGutters"])}}]);
//# sourceMappingURL=1220.46aa577d.chunk.js.map