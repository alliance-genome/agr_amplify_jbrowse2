"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[7412],{47412:(e,n,t)=>{t.r(n),t.d(n,{default:()=>D});var a=t(7552),r=t(36715),o=t(5401),l=t(1343),s=t(93117),i=t(61723),c=t(63011),d=t(41578),u=t(75785),m=t(68446),p=t(36422),A=t(48735),g=t(99546),v=t(6212),f=t(61848),b=t(47151),h=t(58181),x=t(89003),y=t(45331),E=t(84313),C=t(45374),w=t(92516);const S=(0,a.lazy)((()=>t.e(8556).then(t.bind(t,78556)))),M=(0,u.n9)()((()=>({lockedPluginTooltip:{marginRight:"0.5rem"}})));function k(){const{classes:e}=M();return a.createElement(x.A,{className:e.lockedPluginTooltip,title:"This plugin was installed by an administrator, you cannot remove it."},a.createElement(C.A,null))}const N=(0,m.observer)((function({plugin:e,model:n}){const[t,o]=(0,a.useState)(),{pluginManager:l}=(0,g.getEnv)(n),s=(0,g.getSession)(n),{jbrowse:c,adminMode:d}=s,u=!!(0,w.zA)(s)&&s.sessionPlugins?.some((n=>l.pluginMetadata[e.name].url===n.url));return a.createElement(a.Fragment,null,t?a.createElement(a.Suspense,{fallback:null},a.createElement(S,{plugin:t,onClose:n=>{if(n){const n=l.pluginMetadata[e.name];d?c.removePlugin(n):(0,w.zA)(s)&&s.removeSessionPlugin(n)}o(void 0)}})):null,a.createElement(y.Ay,{key:e.name},d||u?a.createElement(i.A,{"data-testid":`removePlugin-${e.name}`,onClick:()=>o(e.name)},a.createElement(E.A,null)):a.createElement(k,null),a.createElement(r.A,null,e.name)))})),R=(0,m.observer)((function({pluginManager:e,model:n}){const{plugins:t}=e,{filterText:o}=n,l=t.filter((n=>!e.pluginMetadata[n.name]?.isCore));return a.createElement(h.A,null,l.length>0?l.filter((e=>e.name.toLowerCase().includes(o.toLowerCase()))).map((e=>a.createElement(N,{key:e.name,plugin:e,model:n}))):a.createElement(r.A,null,"No plugins currently installed"))}));var j=t(1773),I=t(25355),T=t(87731),V=t(71379),$=t(72900),P=t(57610),L=t(11493);const z=(0,u.n9)()({card:{margin:"0.5em"},icon:{marginLeft:"0.5em",marginRight:"0.5em"},bold:{fontWeight:600},dataField:{display:"flex",alignItems:"center"}}),F=(0,m.observer)((function({plugin:e,model:n,adminMode:t}){const{classes:l}=z(),s=(0,g.getSession)(n),{pluginManager:i}=(0,g.getEnv)(n),{runtimePluginDefinitions:c}=i,d=c.some((n=>n.url===e.url)),[u,m]=(0,a.useState)(!1),A=d||u,v=(0,p.getParent)(n,3),{jbrowse:f}=v;return a.createElement(j.A,{variant:"outlined",key:e.name,className:l.card},a.createElement(I.A,null,a.createElement(r.A,{variant:"h5"},a.createElement(T.A,{href:`${e.location}#readme`,target:"_blank",rel:"noopener"},e.name)),a.createElement("div",{className:l.dataField},a.createElement($.A,{style:{marginRight:"0.5em"}}),a.createElement(r.A,null,e.authors.join(", "))),a.createElement(r.A,{className:l.bold},"Description:"),a.createElement(r.A,null,e.description)),a.createElement(V.A,null,a.createElement(o.A,{variant:"contained",disabled:A,startIcon:d?a.createElement(L.A,null):a.createElement(P.A,null),onClick:()=>{t?f.addPlugin({name:e.name,url:e.url}):(0,w.zA)(s)&&s.addSessionPlugin(e),m(!0)}},d?"Installed":"Install")))})),W=(0,a.lazy)((()=>t.e(4755).then(t.bind(t,54755)))),B=(0,u.n9)()((e=>({expandIcon:{color:e.palette.tertiary.contrastText},adminBadge:{borderRadius:3,backgroundColor:e.palette.quaternary.main,padding:"1em",display:"flex",alignContent:"center"},customPluginButton:{margin:"1em auto",display:"flex"}}))),D=(0,m.observer)((function({model:e}){const{classes:n}=B(),{plugins:t,error:u}=function(){const[e,n]=(0,a.useState)(),[t,r]=(0,a.useState)();return(0,a.useEffect)((()=>{(async()=>{try{const e=await fetch("https://jbrowse.org/plugin-store/plugins.json");if(!e.ok){const n=await e.text();throw new Error(`HTTP ${e.status} fetching plugins: ${n}`)}const t=await e.json();n(t.plugins)}catch(e){console.error(e),r(e)}})()}),[]),{plugins:e,error:t}}(),[m,h]=(0,a.useState)(!1),{adminMode:x}=(0,g.getSession)(e),{pluginManager:y}=(0,p.getEnv)(e);return a.createElement("div",null,x&&a.createElement(a.Fragment,null,!g.isElectron&&a.createElement("div",{className:n.adminBadge},a.createElement(b.A,{style:{marginRight:"0.3em"}}),a.createElement(r.A,null,"You are using the ",a.createElement("code",null,"admin-server"),". Any changes you make will be saved to your configuration file. You also have the ability to add custom plugins that are not in the store.")),a.createElement(o.A,{className:n.customPluginButton,variant:"contained",onClick:()=>h(!0)},"Add custom plugin"),m?a.createElement(a.Suspense,{fallback:null},a.createElement(W,{onClose:()=>h(!1),model:e})):null),a.createElement(l.A,{label:"Filter plugins",value:e.filterText,onChange:n=>e.setFilterText(n.target.value),fullWidth:!0,InputProps:{endAdornment:a.createElement(s.A,{position:"end"},a.createElement(i.A,{onClick:()=>e.clearFilterText()},a.createElement(f.A,null)))}}),a.createElement(c.A,{defaultExpanded:!0},a.createElement(d.A,{expandIcon:a.createElement(v.A,{className:n.expandIcon})},a.createElement(r.A,{variant:"h5"},"Installed plugins")),a.createElement("div",{style:{margin:"1em"}},a.createElement(R,{pluginManager:y,model:e}))),a.createElement(c.A,{defaultExpanded:!0},a.createElement(d.A,{expandIcon:a.createElement(v.A,{className:n.expandIcon})},a.createElement(r.A,{variant:"h5"},"Available plugins")),u?a.createElement(r.A,{color:"error"},`${u}`):t?t.filter((n=>!(g.isElectron&&n.cjsUrl)&&n.name.toLowerCase().includes(e.filterText.toLowerCase()))).map((n=>a.createElement(F,{key:n.name,plugin:n,model:e,adminMode:!!x}))):a.createElement(A.LoadingEllipses,null)))}))},11493:(e,n,t)=>{var a=t(92120);n.A=void 0;var r=a(t(33380)),o=t(69500);n.A=(0,r.default)((0,o.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check")},6212:(e,n,t)=>{var a=t(92120);n.A=void 0;var r=a(t(33380)),o=t(69500);n.A=(0,r.default)((0,o.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore")},47151:(e,n,t)=>{var a=t(92120);n.A=void 0;var r=a(t(33380)),o=t(69500);n.A=(0,r.default)((0,o.jsx)("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"}),"InfoOutlined")},45374:(e,n,t)=>{var a=t(92120);n.A=void 0;var r=a(t(33380)),o=t(69500);n.A=(0,r.default)((0,o.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1z"}),"Lock")},72900:(e,n,t)=>{var a=t(92120);n.A=void 0;var r=a(t(33380)),o=t(69500);n.A=(0,r.default)((0,o.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"}),"Person")},41578:(e,n,t)=>{t.d(n,{A:()=>y});var a=t(83673),r=t(6614),o=t(7552),l=t(93878),s=t(60827),i=t(51148),c=t(31049),d=t(83159),u=t(51132),m=t(55549),p=t(9577);function A(e){return(0,p.Ay)("MuiAccordionSummary",e)}const g=(0,m.A)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]);var v=t(69500);const f=["children","className","expandIcon","focusVisibleClassName","onClick"],b=(0,i.Ay)(d.A,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,n)=>n.root})((({theme:e,ownerState:n})=>{const t={duration:e.transitions.duration.shortest};return(0,r.A)({display:"flex",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],t),[`&.${g.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${g.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`&:hover:not(.${g.disabled})`]:{cursor:"pointer"}},!n.disableGutters&&{[`&.${g.expanded}`]:{minHeight:64}})})),h=(0,i.Ay)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,n)=>n.content})((({theme:e,ownerState:n})=>(0,r.A)({display:"flex",flexGrow:1,margin:"12px 0"},!n.disableGutters&&{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),[`&.${g.expanded}`]:{margin:"20px 0"}}))),x=(0,i.Ay)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,n)=>n.expandIconWrapper})((({theme:e})=>({display:"flex",color:(e.vars||e).palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),[`&.${g.expanded}`]:{transform:"rotate(180deg)"}}))),y=o.forwardRef((function(e,n){const t=(0,c.A)({props:e,name:"MuiAccordionSummary"}),{children:i,className:d,expandIcon:m,focusVisibleClassName:p,onClick:g}=t,y=(0,a.A)(t,f),{disabled:E=!1,disableGutters:C,expanded:w,toggle:S}=o.useContext(u.A),M=(0,r.A)({},t,{expanded:w,disabled:E,disableGutters:C}),k=(e=>{const{classes:n,expanded:t,disabled:a,disableGutters:r}=e,o={root:["root",t&&"expanded",a&&"disabled",!r&&"gutters"],focusVisible:["focusVisible"],content:["content",t&&"expanded",!r&&"contentGutters"],expandIconWrapper:["expandIconWrapper",t&&"expanded"]};return(0,s.A)(o,A,n)})(M);return(0,v.jsxs)(b,(0,r.A)({focusRipple:!1,disableRipple:!0,disabled:E,component:"div","aria-expanded":w,className:(0,l.A)(k.root,d),focusVisibleClassName:(0,l.A)(k.focusVisible,p),onClick:e=>{S&&S(e),g&&g(e)},ref:n,ownerState:M},y,{children:[(0,v.jsx)(h,{className:k.content,ownerState:M,children:i}),m&&(0,v.jsx)(x,{className:k.expandIconWrapper,ownerState:M,children:m})]}))}))},1773:(e,n,t)=>{t.d(n,{A:()=>g});var a=t(6614),r=t(83673),o=t(7552),l=t(93878),s=t(60827),i=t(51148),c=t(31049),d=t(943),u=t(50885),m=t(69500);const p=["className","raised"],A=(0,i.Ay)(d.A,{name:"MuiCard",slot:"Root",overridesResolver:(e,n)=>n.root})((()=>({overflow:"hidden"}))),g=o.forwardRef((function(e,n){const t=(0,c.A)({props:e,name:"MuiCard"}),{className:o,raised:i=!1}=t,d=(0,r.A)(t,p),g=(0,a.A)({},t,{raised:i}),v=(e=>{const{classes:n}=e;return(0,s.A)({root:["root"]},u.T,n)})(g);return(0,m.jsx)(A,(0,a.A)({className:(0,l.A)(v.root,o),elevation:i?8:void 0,ref:n,ownerState:g},d))}))},50885:(e,n,t)=>{t.d(n,{A:()=>l,T:()=>o});var a=t(55549),r=t(9577);function o(e){return(0,r.Ay)("MuiCard",e)}const l=(0,a.A)("MuiCard",["root"])},71379:(e,n,t)=>{t.d(n,{A:()=>A});var a=t(83673),r=t(6614),o=t(7552),l=t(93878),s=t(60827),i=t(51148),c=t(31049),d=t(93863),u=t(69500);const m=["disableSpacing","className"],p=(0,i.Ay)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,!t.disableSpacing&&n.spacing]}})((({ownerState:e})=>(0,r.A)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}}))),A=o.forwardRef((function(e,n){const t=(0,c.A)({props:e,name:"MuiCardActions"}),{disableSpacing:o=!1,className:i}=t,A=(0,a.A)(t,m),g=(0,r.A)({},t,{disableSpacing:o}),v=(e=>{const{classes:n,disableSpacing:t}=e,a={root:["root",!t&&"spacing"]};return(0,s.A)(a,d.E,n)})(g);return(0,u.jsx)(p,(0,r.A)({className:(0,l.A)(v.root,i),ownerState:g,ref:n},A))}))},93863:(e,n,t)=>{t.d(n,{A:()=>l,E:()=>o});var a=t(55549),r=t(9577);function o(e){return(0,r.Ay)("MuiCardActions",e)}const l=(0,a.A)("MuiCardActions",["root","spacing"])},25355:(e,n,t)=>{t.d(n,{A:()=>A});var a=t(6614),r=t(83673),o=t(7552),l=t(93878),s=t(60827),i=t(51148),c=t(31049),d=t(61823),u=t(69500);const m=["className","component"],p=(0,i.Ay)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,n)=>n.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),A=o.forwardRef((function(e,n){const t=(0,c.A)({props:e,name:"MuiCardContent"}),{className:o,component:i="div"}=t,A=(0,r.A)(t,m),g=(0,a.A)({},t,{component:i}),v=(e=>{const{classes:n}=e;return(0,s.A)({root:["root"]},d.h,n)})(g);return(0,u.jsx)(p,(0,a.A)({as:i,className:(0,l.A)(v.root,o),ownerState:g,ref:n},A))}))},61823:(e,n,t)=>{t.d(n,{A:()=>l,h:()=>o});var a=t(55549),r=t(9577);function o(e){return(0,r.Ay)("MuiCardContent",e)}const l=(0,a.A)("MuiCardContent",["root"])},87731:(e,n,t)=>{t.d(n,{A:()=>E});var a=t(83673),r=t(6614),o=t(7552),l=t(93878),s=t(60827),i=t(15622),c=t(51148),d=t(31049),u=t(9527),m=t(51584),p=t(36715),A=t(58161),g=t(20605),v=t(18283);const f={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},b=({theme:e,ownerState:n})=>{const t=(e=>f[e]||e)(n.color),a=(0,g.Yn)(e,`palette.${t}`,!1)||n.color,r=(0,g.Yn)(e,`palette.${t}Channel`);return"vars"in e&&r?`rgba(${r} / 0.4)`:(0,v.X4)(a,.4)};var h=t(69500);const x=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],y=(0,c.Ay)(p.A,{name:"MuiLink",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[`underline${(0,i.A)(t.underline)}`],"button"===t.component&&n.button]}})((({theme:e,ownerState:n})=>(0,r.A)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&(0,r.A)({textDecoration:"underline"},"inherit"!==n.color&&{textDecorationColor:b({theme:e,ownerState:n})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===n.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${A.A.focusVisible}`]:{outline:"auto"}}))),E=o.forwardRef((function(e,n){const t=(0,d.A)({props:e,name:"MuiLink"}),{className:c,color:p="primary",component:g="a",onBlur:v,onFocus:b,TypographyClasses:E,underline:C="always",variant:w="inherit",sx:S}=t,M=(0,a.A)(t,x),{isFocusVisibleRef:k,onBlur:N,onFocus:R,ref:j}=(0,u.A)(),[I,T]=o.useState(!1),V=(0,m.A)(n,j),$=(0,r.A)({},t,{color:p,component:g,focusVisible:I,underline:C,variant:w}),P=(e=>{const{classes:n,component:t,focusVisible:a,underline:r}=e,o={root:["root",`underline${(0,i.A)(r)}`,"button"===t&&"button",a&&"focusVisible"]};return(0,s.A)(o,A.t,n)})($);return(0,h.jsx)(y,(0,r.A)({color:p,className:(0,l.A)(P.root,c),classes:E,component:g,onBlur:e=>{N(e),!1===k.current&&T(!1),v&&v(e)},onFocus:e=>{R(e),!0===k.current&&T(!0),b&&b(e)},ref:V,ownerState:$,variant:w,sx:[...Object.keys(f).includes(p)?[]:[{color:p}],...Array.isArray(S)?S:[S]]},M))}))},58161:(e,n,t)=>{t.d(n,{A:()=>l,t:()=>o});var a=t(55549),r=t(9577);function o(e){return(0,r.Ay)("MuiLink",e)}const l=(0,a.A)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"])}}]);
//# sourceMappingURL=7412.31c78acd.chunk.js.map