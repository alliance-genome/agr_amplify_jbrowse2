"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[6518],{66518:function(e,n,r){r.r(n);var t=r(96234),i=r(96902),c=r(20450),a=r(39041),o=r(88117),l=r(72988),u=r(60916),s=r(18726),h=r(96565),k=r(99836),f=r(29938);n.default=function(e){var n=e.tracks,r=e.onClose,d=(0,i.useState)("MultiWiggle "+Date.now()),j=(0,t.Z)(d,2),x=j[0],m=j[1],p=n.every((function(e){return"QuantitativeTrack"===e.type}));return(0,f.jsxs)(c.Z,{open:!0,onClose:function(){return r(!1)},children:[(0,f.jsx)(a.Z,{children:"Confirm multi-wiggle track create"}),(0,f.jsxs)(o.Z,{children:[(0,f.jsxs)(l.Z,{children:[p?null:"Not every track looks like a QuantitativeTrack. This could have unexpected behavior, confirm if it looks ok.","Listing:"]}),(0,f.jsx)("ul",{children:n.map((function(e){return(0,f.jsxs)("li",{children:[(0,k.readConfObject)(e,"name")," - ",e.type]},e.trackId)}))}),(0,f.jsx)(u.Z,{value:x,onChange:function(e){return m(e.target.value)},helperText:"Track name"}),(0,f.jsx)(l.Z,{children:"Confirm creation of track?"})]}),(0,f.jsxs)(s.Z,{children:[(0,f.jsx)(h.Z,{onClick:function(){return r(!1)},color:"primary",children:"Cancel"}),(0,f.jsx)(h.Z,{onClick:function(){return r(!0,{name:x})},color:"primary",variant:"contained",autoFocus:!0,children:"Submit"})]})]})}}}]);
//# sourceMappingURL=6518.5f0da7c3.chunk.js.map