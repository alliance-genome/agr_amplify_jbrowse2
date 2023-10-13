"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[3547],{83547:function(e,n,r){r.r(n),r.d(n,{default:function(){return p}});var t=r(32723),a=r(34795),s=r(96234),l=r(30969),i=r(94308),o=r(33359),c=r(59071),u=r(87006),h=r(2689),f=r(49884),d=r(88876),v=r(96074),x=r(72097),j=r(59767),Z=r(81073),b=r(37574);function m(){return(0,b.jsxs)("div",{children:[(0,b.jsx)(i.Z,{size:20,style:{marginRight:20}}),(0,b.jsx)(o.Z,{display:"inline",children:"Creating SVG"})]})}function g(e,n){return(0,Z.useLocalStorage)("svg-"+e,n)}function p(e){var n=e.model,r=e.handleClose,i=(0,Z.getSession)(n),p="undefined"!==typeof OffscreenCanvas,k=(0,l.useState)(p),y=(0,s.Z)(k,2),C=y[0],w=y[1],S=(0,l.useState)(!1),z=(0,s.Z)(S,2),T=z[0],L=z[1],N=(0,l.useState)(),O=(0,s.Z)(N,2),_=O[0],G=O[1],V=g("file","jbrowse.svg"),E=(0,s.Z)(V,2),R=E[0],D=E[1],F=g("tracklabels","offset"),M=(0,s.Z)(F,2),U=M[0],q=M[1],A=g("theme",i.themeName||"default"),B=(0,s.Z)(A,2),H=B[0],I=B[1];return(0,b.jsxs)(j.Dialog,{open:!0,onClose:r,title:"Export SVG",children:[(0,b.jsxs)(c.Z,{children:[_?(0,b.jsx)(j.ErrorMessage,{error:_}):T?(0,b.jsx)(m,{}):null,(0,b.jsx)(u.Z,{helperText:"filename",value:R,onChange:function(e){return D(e.target.value)}}),(0,b.jsx)("br",{}),(0,b.jsxs)(u.Z,{select:!0,label:"Track label positioning",variant:"outlined",style:{width:150},value:U,onChange:function(e){return q(e.target.value)},children:[(0,b.jsx)(h.Z,{value:"offset",children:"Offset"}),(0,b.jsx)(h.Z,{value:"overlay",children:"Overlay"}),(0,b.jsx)(h.Z,{value:"left",children:"Left"}),(0,b.jsx)(h.Z,{value:"none",children:"None"})]}),(0,b.jsx)("br",{}),i.allThemes?(0,b.jsx)(u.Z,{select:!0,label:"Theme",variant:"outlined",value:H,onChange:function(e){return I(e.target.value)},children:Object.entries(i.allThemes()).map((function(e){var n=(0,s.Z)(e,2),r=n[0],t=n[1];return(0,b.jsx)(h.Z,{value:r,children:t.name||"(Unknown name)"},r)}))}):null,p?(0,b.jsx)(f.Z,{control:(0,b.jsx)(d.Z,{checked:C,onChange:function(){return w((function(e){return!e}))}}),label:"Rasterize canvas based tracks? File may be much larger if this is turned off"}):(0,b.jsx)(o.Z,{children:"Note: rasterizing layers not yet supported in this browser, so SVG size may be large"})]}),(0,b.jsxs)(v.Z,{children:[(0,b.jsx)(x.Z,{variant:"contained",color:"secondary",onClick:function(){return r()},children:"Cancel"}),(0,b.jsx)(x.Z,{variant:"contained",color:"primary",type:"submit",onClick:(0,a.Z)((0,t.Z)().mark((function e(){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(!0),G(void 0),e.prev=2,e.next=5,n.exportSvg({rasterizeLayers:C,filename:R,trackLabels:U,themeName:H});case 5:r(),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(2),console.error(e.t0),G(e.t0),L(!1);case 13:case"end":return e.stop()}}),e,null,[[2,8]])}))),children:"Submit"})]})]})}}}]);
//# sourceMappingURL=3547.a162f09e.chunk.js.map