"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[9206],{19206:(e,n,a)=>{a.r(n),a.d(n,{default:()=>f});var t=a(66204),l=a(29520),r=a(27513),o=a(62301),i=a(7146),s=a(35421),c=a(45466),u=a(91932),h=a(36539),m=a(67677);function g({onConfirm:e,onCancel:n,reason:a}){return t.createElement(s.Dialog,{open:!0,maxWidth:"xl",title:"Warning"},t.createElement(l.Z,null,t.createElement(h.Z,{fontSize:"large"}),t.createElement(r.Z,null,"This link contains a cross origin config that has the following unknown plugins:",t.createElement("ul",null,a.map((e=>t.createElement("li",{key:JSON.stringify(e)},(0,m.OK)(e))))),"Please ensure you trust the source of this link.")),t.createElement(o.Z,null,t.createElement(i.Z,{color:"primary",variant:"contained",onClick:()=>e()},"Yes, I trust it"),t.createElement(i.Z,{color:"secondary",variant:"contained",onClick:()=>n()},"Cancel")))}function f({loader:e,handleClose:n}){const{sessionTriaged:a}=e;return a?t.createElement(g,{onConfirm:async()=>{const t=JSON.parse(JSON.stringify(a.snap));await e.fetchPlugins(t),e.setConfigSnapshot({...t,id:(0,c.x0)()}),n()},onCancel:async()=>{await(0,u.Z)(),n()},reason:a.reason}):null}},36539:(e,n,a)=>{var t=a(57739);n.Z=void 0;var l=t(a(53948)),r=a(43188),o=(0,l.default)((0,r.jsx)("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");n.Z=o}}]);
//# sourceMappingURL=9206.8618a895.chunk.js.map