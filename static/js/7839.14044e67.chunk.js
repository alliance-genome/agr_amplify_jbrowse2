"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[7839],{97839:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var n=a(66204),l=a(80846),o=a(43902),i=a(29520),r=a(27513),s=a(46338),u=a(92704),d=a(62301),c=a(7146),m=a(38684),g=a(31211),b=a(49140),h=a(2266);const p=(0,m.ZL)()((e=>({dialogContent:{display:"flex",flexDirection:"column"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"}}))),v=(0,l.observer)((function({onClose:e,model:t}){const{classes:a,cx:l}=p(),[m,v]=(0,n.useState)(""),[E,f]=(0,n.useState)(""),[C,Z]=(0,n.useState)(""),[S,w]=(0,n.useState)(""),[U,k]=(0,n.useState)(!1),{jbrowse:x}=(0,g.getSession)(t),L=Boolean(m&&E||C||S);function y(){m&&E?x.addPlugin({name:m,umdUrl:E}):C?x.addPlugin({esmUrl:C}):S&&x.addPlugin({cjsUrl:S})}return n.createElement(o.Dialog,{open:!0,onClose:e,title:"Add custom plugin"},n.createElement("form",{onSubmit:y},n.createElement(i.Z,{className:a.dialogContent},n.createElement(r.Z,null,"Enter the name of the plugin and its URL. The name should match what is defined in the plugin's build."),n.createElement(s.Z,{label:"Plugin name",variant:"outlined",value:m,onChange:e=>v(e.target.value)}),n.createElement(s.Z,{label:"Plugin URL",variant:"outlined",value:E,onChange:e=>f(e.target.value)}),n.createElement(r.Z,{onClick:()=>k(!U)},n.createElement(b.Z,{className:l(a.expand,{[a.expandOpen]:U}),"aria-expanded":U,"aria-label":"show more"},n.createElement(h.Z,null)),"Advanced options"),n.createElement(u.Z,{in:U},n.createElement("div",{className:a.dialogContent},n.createElement(r.Z,null,"The above fields assume that the plugin is built in UMD format. If your plugin is in another format, or you have additional builds you want to add (such as a CJS build for using NodeJS APIs in desktop), you can enter the URLs for those builds below."),n.createElement(s.Z,{label:"ESM build URL",variant:"outlined",value:C,onChange:e=>Z(e.target.value)}),n.createElement(s.Z,{label:"CJS build URL",variant:"outlined",value:S,onChange:e=>w(e.target.value)})))),n.createElement(d.Z,null,n.createElement(c.Z,{variant:"contained",onClick:e},"Cancel"),n.createElement(c.Z,{variant:"contained",color:"primary",onClick:y,disabled:!L},"Submit"))))}))}}]);
//# sourceMappingURL=7839.14044e67.chunk.js.map