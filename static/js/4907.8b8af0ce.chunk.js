"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[4907],{4907:(e,n,t)=>{t.r(n),t.d(n,{default:()=>d});var a=t(66204),l=t(35421),s=t(29520),o=t(27513),r=t(62301),i=t(7146),c=t(45466),u=t(36539),h=t(67677);function m({onConfirm:e,onCancel:n,reason:t}){return a.createElement(l.Dialog,{open:!0,maxWidth:"xl",title:"Warning"},a.createElement(s.Z,null,a.createElement(u.Z,{fontSize:"large"}),a.createElement(o.Z,null,"This link contains a session that has the following unknown plugins:",a.createElement("ul",null,t.map((e=>a.createElement("li",{key:JSON.stringify(e)},(0,h.OK)(e))))),"Please ensure you trust the source of this session.")),a.createElement(r.Z,null,a.createElement(i.Z,{color:"primary",variant:"contained",onClick:()=>e()},"Yes, I trust it"),a.createElement(i.Z,{variant:"contained",color:"secondary",onClick:()=>n()},"Cancel")))}function d({loader:e,handleClose:n}){const{sessionTriaged:t}=e;return t?a.createElement(m,{onConfirm:async()=>{const a=JSON.parse(JSON.stringify(t.snap));await e.setSessionSnapshot({...a,id:(0,c.x0)()},!0),n()},onCancel:()=>{e.setBlankSession(!0),n()},reason:t.reason}):null}},36539:(e,n,t)=>{var a=t(57739);n.Z=void 0;var l=a(t(53948)),s=t(43188),o=(0,l.default)((0,s.jsx)("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");n.Z=o}}]);
//# sourceMappingURL=4907.8b8af0ce.chunk.js.map