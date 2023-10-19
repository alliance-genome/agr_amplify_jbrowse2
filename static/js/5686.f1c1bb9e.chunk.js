"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[5686],{25686:function(e,n,r){r.r(n),r.d(n,{default:function(){return g}});var t=r(32723),s=r(34795),a=r(96234),i=r(30969),l=r(94308),o=r(33359),c=r(59071),u=r(87006),h=r(2689),d=r(49884),f=r(88876),x=r(96074),m=r(72097),j=r(59767),Z=r(81073),v=r(37574);function p(){return(0,v.jsxs)("div",{children:[(0,v.jsx)(l.Z,{size:20,style:{marginRight:20}}),(0,v.jsx)(o.Z,{display:"inline",children:"Creating SVG"})]})}function b(e,n){return(0,Z.useLocalStorage)("svg-"+e,n)}function g(e){var n=e.model,r=e.handleClose,l=(0,Z.getSession)(n),g="undefined"!==typeof OffscreenCanvas,C=(0,i.useState)(g),k=(0,a.Z)(C,2),w=k[0],y=k[1],S=(0,i.useState)(!1),z=(0,a.Z)(S,2),T=z[0],_=z[1],G=(0,i.useState)(),N=(0,a.Z)(G,2),V=N[0],E=N[1],L=b("file","jbrowse.svg"),O=(0,a.Z)(L,2),R=O[0],D=O[1],F=b("theme",l.themeName||"default"),M=(0,a.Z)(F,2),U=M[0],q=M[1];return(0,v.jsxs)(j.Dialog,{open:!0,onClose:r,title:"Export SVG",children:[(0,v.jsxs)(c.Z,{children:[V?(0,v.jsx)(j.ErrorMessage,{error:V}):T?(0,v.jsx)(p,{}):null,(0,v.jsx)(u.Z,{helperText:"filename",value:R,onChange:function(e){return D(e.target.value)}}),(0,v.jsx)("br",{}),l.allThemes?(0,v.jsx)(u.Z,{select:!0,label:"Theme",value:U,onChange:function(e){return q(e.target.value)},children:Object.entries(l.allThemes()).map((function(e){var n=(0,a.Z)(e,2),r=n[0],t=n[1];return(0,v.jsx)(h.Z,{value:r,children:t.name||"(Unknown name)"},r)}))}):null,g?(0,v.jsx)(d.Z,{control:(0,v.jsx)(f.Z,{checked:w,onChange:function(){return y((function(e){return!e}))}}),label:"Rasterize canvas based tracks? File may be much larger if this is turned off"}):(0,v.jsx)(o.Z,{children:"Note: rasterizing layers not yet supported in this browser, so SVG size may be large"})]}),(0,v.jsxs)(x.Z,{children:[(0,v.jsx)(m.Z,{variant:"contained",color:"secondary",onClick:function(){return r()},children:"Cancel"}),(0,v.jsx)(m.Z,{variant:"contained",color:"primary",type:"submit",onClick:(0,s.Z)((0,t.Z)().mark((function e(){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(!0),E(void 0),e.prev=2,e.next=5,n.exportSvg({rasterizeLayers:w,filename:R,themeName:U});case 5:r(),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(2),console.error(e.t0),E(e.t0),_(!1);case 13:case"end":return e.stop()}}),e,null,[[2,8]])}))),children:"Submit"})]})]})}}}]);
//# sourceMappingURL=5686.f1c1bb9e.chunk.js.map