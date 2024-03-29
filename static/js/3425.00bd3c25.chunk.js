"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[3425],{23425:(e,t,a)=>{a.r(t),a.d(t,{default:()=>C});var n=a(7552),r=a(68446),o=a(99546),s=a(92516),i=a(48735),c=a(29499),l=a(63011),d=a(41578),m=a(36715),p=a(89003),u=a(63165),h=a(1343),A=a(58507),f=a(5401),b=a(99834),w=a(91405),x=a(75785),g=a(54042),y=a(6212),k=a(7334),v=a(84495),S=a(32984);const E=(0,x.n9)()((e=>({flexItem:{margin:5},expandIcon:{color:e.palette.tertiary?.contrastText||"#fff"}}))),C=(0,r.observer)((function({onClose:e,model:t}){const{classes:a}=E(),[r,x]=(0,n.useState)(),[C,I]=(0,n.useState)(),[N,R]=(0,n.useState)(""),j=(0,o.getSession)(t),{assemblyNames:M}=j,[$,V]=(0,n.useState)(M[0]),[W,D]=(0,n.useState)("shareLinkAccordion");return n.createElement(i.Dialog,{open:!0,onClose:e,maxWidth:"xl",title:"Import bookmarks"},n.createElement(c.A,null,n.createElement(l.A,{expanded:"shareLinkAccordion"===W,onChange:()=>D("shareLinkAccordion")},n.createElement(d.A,{expandIcon:n.createElement(y.A,{className:a.expandIcon})},n.createElement(m.A,{style:{display:"flex",alignItems:"center",gap:"5px"}},"Import from share link"," ",n.createElement(p.A,{title:"The appropriate share link for sharing bookmarks is one generated via the 'Share' button in the 'Bookmarked regions' drawer. Paste it below to import shared bookmarks."},n.createElement(k.A,null)))),n.createElement(u.A,null,n.createElement(h.A,{label:"Enter URL",variant:"outlined",style:{width:"100%"},value:N,onChange:e=>R(e.target.value)}))),n.createElement(l.A,{expanded:"fileAccordion"===W,onChange:()=>D("fileAccordion")},n.createElement(d.A,{expandIcon:n.createElement(y.A,{className:a.expandIcon})},n.createElement(m.A,null,"Import from file")),n.createElement(u.A,null,n.createElement(i.FileSelector,{location:r,setLocation:x,name:"File",description:"Choose a BED or TSV format file to import."}),n.createElement(w.A,{onChange:e=>V(e),helperText:"Select the assembly your bookmarks belong to (BED or TSV without assembly column).",session:j,selected:$}))),C?n.createElement(m.A,{color:"error",variant:"h6"},`${C}`):null),n.createElement(A.A,null,n.createElement(f.A,{variant:"contained",color:"secondary",onClick:e},"Cancel"),n.createElement(f.A,{className:a.flexItem,"data-testid":"dialogImport",variant:"contained",color:"primary",disabled:!r&&!N,startIcon:n.createElement(g.A,null),onClick:async()=>{try{r?t.importBookmarks(await async function(e,t){return(await(0,b.openLocation)(e).readFile("utf8")).split(/\n|\r\n|\r/).filter((e=>!!e.trim())).filter((e=>!e.startsWith("#")&&!e.startsWith("track")&&!e.startsWith("browser"))).map((e=>{const[a,n,r,o,s]=e.split("\t");return{assemblyName:s??t,refName:a,start:+n,end:+r,label:"."===o?void 0:o}}))}(r,$)):N&&(0,s.xv)(j)&&t.importBookmarks(await async function(e,t){const a=new URL(e),n=a.searchParams.get("bookmarks"),r=a.searchParams.get("password"),o=await(0,S.Z)(`${t??"https://share.jbrowse.org/api/v1/"}load`,n||"",r||"");return JSON.parse(await(0,v.LP)(o)).sharedBookmarks}(N,j.shareURL)),e()}catch(e){console.error(e),I(e)}}},"Import")))}))},32984:(e,t,a)=>{a.d(t,{J:()=>i,Z:()=>c});var n=a(84495);const r=async(e,t)=>(await Promise.all([a.e(7753),a.e(9831),a.e(5156)]).then(a.t.bind(a,29831,23))).encrypt(e,t).toString(),o=async(e,t)=>{const n=await Promise.all([a.e(7753),a.e(9831),a.e(5156)]).then(a.t.bind(a,29831,23)),r=await Promise.all([a.e(7753),a.e(6235)]).then(a.t.bind(a,12598,23));return n.decrypt(e,t).toString(r)};function s(e){try{return JSON.parse(e).message}catch(t){return e}}async function i(e,t,a){const o=await(0,n.eW)(JSON.stringify(e)),i=(5,window.btoa([...window.crypto.getRandomValues(new Uint8Array(10))].map((e=>String.fromCharCode(e))).join("")).replaceAll(/[+/]/g,"").slice(0,5));const c=await r(o,i),l=new FormData;l.append("session",c),l.append("dateShared",`${Date.now()}`),l.append("referer",a);const d=await fetch(`${t}share`,{method:"POST",mode:"cors",body:l});if(!d.ok){const e=await d.text();throw new Error(s(e))}return{json:await d.json(),encryptedSession:c,password:i}}async function c(e,t,a,n){const r=t.split("share-")[1],i=`${e}?sessionId=${encodeURIComponent(r)}`,c=await fetch(i,{signal:n});if(!c.ok){const e=await c.text();throw new Error(s(e))}const l=await c.json();return o(l.session,a)}},6212:(e,t,a)=>{var n=a(92120);t.A=void 0;var r=n(a(33380)),o=a(69500);t.A=(0,r.default)((0,o.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore")},63165:(e,t,a)=>{a.d(t,{A:()=>h});var n=a(6614),r=a(83673),o=a(7552),s=a(93878),i=a(60827),c=a(51148),l=a(31049),d=a(79509),m=a(69500);const p=["className"],u=(0,c.Ay)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({padding:e.spacing(1,2,2)}))),h=o.forwardRef((function(e,t){const a=(0,l.A)({props:e,name:"MuiAccordionDetails"}),{className:o}=a,c=(0,r.A)(a,p),h=a,A=(e=>{const{classes:t}=e;return(0,i.A)({root:["root"]},d.n,t)})(h);return(0,m.jsx)(u,(0,n.A)({className:(0,s.A)(A.root,o),ref:t,ownerState:h},c))}))},79509:(e,t,a)=>{a.d(t,{A:()=>s,n:()=>o});var n=a(55549),r=a(9577);function o(e){return(0,r.Ay)("MuiAccordionDetails",e)}const s=(0,n.A)("MuiAccordionDetails",["root"])},41578:(e,t,a)=>{a.d(t,{A:()=>y});var n=a(83673),r=a(6614),o=a(7552),s=a(93878),i=a(60827),c=a(51148),l=a(31049),d=a(83159),m=a(51132),p=a(55549),u=a(9577);function h(e){return(0,u.Ay)("MuiAccordionSummary",e)}const A=(0,p.A)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]);var f=a(69500);const b=["children","className","expandIcon","focusVisibleClassName","onClick"],w=(0,c.Ay)(d.A,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e,ownerState:t})=>{const a={duration:e.transitions.duration.shortest};return(0,r.A)({display:"flex",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],a),[`&.${A.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${A.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`&:hover:not(.${A.disabled})`]:{cursor:"pointer"}},!t.disableGutters&&{[`&.${A.expanded}`]:{minHeight:64}})})),x=(0,c.Ay)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,t)=>t.content})((({theme:e,ownerState:t})=>(0,r.A)({display:"flex",flexGrow:1,margin:"12px 0"},!t.disableGutters&&{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),[`&.${A.expanded}`]:{margin:"20px 0"}}))),g=(0,c.Ay)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,t)=>t.expandIconWrapper})((({theme:e})=>({display:"flex",color:(e.vars||e).palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),[`&.${A.expanded}`]:{transform:"rotate(180deg)"}}))),y=o.forwardRef((function(e,t){const a=(0,l.A)({props:e,name:"MuiAccordionSummary"}),{children:c,className:d,expandIcon:p,focusVisibleClassName:u,onClick:A}=a,y=(0,n.A)(a,b),{disabled:k=!1,disableGutters:v,expanded:S,toggle:E}=o.useContext(m.A),C=(0,r.A)({},a,{expanded:S,disabled:k,disableGutters:v}),I=(e=>{const{classes:t,expanded:a,disabled:n,disableGutters:r}=e,o={root:["root",a&&"expanded",n&&"disabled",!r&&"gutters"],focusVisible:["focusVisible"],content:["content",a&&"expanded",!r&&"contentGutters"],expandIconWrapper:["expandIconWrapper",a&&"expanded"]};return(0,i.A)(o,h,t)})(C);return(0,f.jsxs)(w,(0,r.A)({focusRipple:!1,disableRipple:!0,disabled:k,component:"div","aria-expanded":S,className:(0,s.A)(I.root,d),focusVisibleClassName:(0,s.A)(I.focusVisible,u),onClick:e=>{E&&E(e),A&&A(e)},ref:t,ownerState:C},y,{children:[(0,f.jsx)(x,{className:I.content,ownerState:C,children:c}),p&&(0,f.jsx)(g,{className:I.expandIconWrapper,ownerState:C,children:p})]}))}))}}]);
//# sourceMappingURL=3425.00bd3c25.chunk.js.map