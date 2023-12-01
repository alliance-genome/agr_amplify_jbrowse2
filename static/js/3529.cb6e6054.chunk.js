"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[3529],{63529:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var n=a(66204),l=a(10126),r=a(80013),s=a(29520),o=a(46338),c=a(78781),i=a(39780),m=a(70539),u=a(62301),h=a(7146),g=a(35421),b=a(90872);function E(){return n.createElement("div",null,n.createElement(l.Z,{size:20,style:{marginRight:20}}),n.createElement(r.Z,{display:"inline"},"Creating SVG"))}function d(e,t){return(0,b.useLocalStorage)("svg-"+e,t)}function f({model:e,handleClose:t}){const a=(0,b.getSession)(e),l="undefined"!=typeof OffscreenCanvas,[f,v]=(0,n.useState)(l),[p,y]=(0,n.useState)(!1),[C,Z]=(0,n.useState)(),[k,w]=d("file","jbrowse.svg"),[S,T]=d("theme",a.themeName||"default");return n.createElement(g.Dialog,{open:!0,onClose:t,title:"Export SVG"},n.createElement(s.Z,null,C?n.createElement(g.ErrorMessage,{error:C}):p?n.createElement(E,null):null,n.createElement(o.Z,{helperText:"filename",value:k,onChange:e=>w(e.target.value)}),n.createElement("br",null),a.allThemes?n.createElement(o.Z,{select:!0,label:"Theme",value:S,onChange:e=>T(e.target.value)},Object.entries(a.allThemes()).map((([e,t])=>n.createElement(c.Z,{key:e,value:e},t.name||"(Unknown name)")))):null,l?n.createElement(i.Z,{control:n.createElement(m.Z,{checked:f,onChange:()=>v((e=>!e))}),label:"Rasterize canvas based tracks? File may be much larger if this is turned off"}):n.createElement(r.Z,null,"Note: rasterizing layers not yet supported in this browser, so SVG size may be large")),n.createElement(u.Z,null,n.createElement(h.Z,{variant:"contained",color:"secondary",onClick:()=>t()},"Cancel"),n.createElement(h.Z,{variant:"contained",color:"primary",type:"submit",onClick:async()=>{y(!0),Z(void 0);try{await e.exportSvg({rasterizeLayers:f,filename:k,themeName:S}),t()}catch(e){console.error(e),Z(e),y(!1)}}},"Submit")))}}}]);
//# sourceMappingURL=3529.cb6e6054.chunk.js.map