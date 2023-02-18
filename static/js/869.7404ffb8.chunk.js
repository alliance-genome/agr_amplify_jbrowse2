"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[869],{80869:function(e,t,n){n.r(t),n.d(t,{default:function(){return P}});var a=n(96234),o=n(96902),s=n(4782),i=n(52809),r=n(99688),c=n(44536),l=n(46186),d=n(51467),u=n(90322),m=n(6880),p=n(39275),h=n(5603),j=n(74194),x=n(27344),f=n(26074),Z=n(25322),b=n(99836),y=n(36786),L=n(31946),v=n(29938),g=(0,s.observer)((function(e){var t=e.rootModel,n=e.setIsAssemblyBeingEdited,a=e.setAssemblyBeingEdited;var o=t.jbrowse.assemblies;return(0,v.jsx)(u.Z,{component:m.Z,children:(0,v.jsxs)(p.Z,{children:[(0,v.jsx)(h.Z,{children:(0,v.jsxs)(j.Z,{children:[(0,v.jsx)(x.Z,{children:"Name"}),(0,v.jsx)(x.Z,{children:"Display name"}),(0,v.jsx)(x.Z,{children:"Aliases"}),(0,v.jsx)(x.Z,{children:"Actions"})]})}),(0,v.jsx)(f.Z,{children:o.map((function(e){var o=(0,b.readConfObject)(e,"name"),s=(0,b.readConfObject)(e,"displayName"),i=(0,b.readConfObject)(e,"aliases");return(0,v.jsxs)(j.Z,{children:[(0,v.jsx)(x.Z,{children:o}),(0,v.jsx)(x.Z,{children:s}),(0,v.jsx)(x.Z,{children:i?i.toString():""}),(0,v.jsxs)(x.Z,{children:[(0,v.jsx)(Z.Z,{"data-testid":"".concat(o,"-edit"),onClick:function(){n(!0),a(e)},children:(0,v.jsx)(y.Z,{color:"primary"})}),(0,v.jsx)(Z.Z,{"data-testid":"".concat(o,"-delete"),onClick:function(){return function(e){t.jbrowse.removeAssemblyConf(e)}(o)},children:(0,v.jsx)(L.Z,{color:"error"})})]})]},o)}))})]})})})),S=n(66519),A=n(15996),w=n(54417),C=(0,s.observer)((function(e){var t=e.adapterSelection,n=e.setAdapterSelection,a=e.adapterTypes;return(0,v.jsx)(S.Z,{value:t,label:"Type",select:!0,helperText:"Type of adapter to use",fullWidth:!0,onChange:function(e){return n(e.target.value)},children:a.map((function(e){return(0,v.jsx)(A.Z,{value:e,children:e},e)}))})})),B=(0,s.observer)((function(e){var t=e.adapterSelection,n=e.fastaLocation,a=e.setFastaLocation,o=e.faiLocation,s=e.setFaiLocation,i=e.gziLocation,r=e.setGziLocation,c=e.twoBitLocation,d=e.setTwoBitLocation,u=e.chromSizesLocation,m=e.setChromSizesLocation;return"IndexedFastaAdapter"===t||"BgzipFastaAdapter"===t?(0,v.jsxs)(w.ZP,{container:!0,spacing:2,children:[(0,v.jsx)(w.ZP,{item:!0,children:(0,v.jsx)(l.FileSelector,{name:"fastaLocation",location:n,setLocation:function(e){return a(e)}})}),(0,v.jsx)(w.ZP,{item:!0,children:(0,v.jsx)(l.FileSelector,{name:"faiLocation",location:o,setLocation:function(e){return s(e)}})}),"BgzipFastaAdapter"===t?(0,v.jsx)(w.ZP,{item:!0,children:(0,v.jsx)(l.FileSelector,{name:"gziLocation",location:i,setLocation:function(e){return r(e)}})}):null]}):"TwoBitAdapter"===t?(0,v.jsxs)(w.ZP,{container:!0,spacing:2,children:[(0,v.jsx)(w.ZP,{item:!0,children:(0,v.jsx)(l.FileSelector,{name:"twoBitLocation",location:c,setLocation:function(e){return d(e)}})}),(0,v.jsx)(w.ZP,{item:!0,children:(0,v.jsx)(l.FileSelector,{name:"chromSizesLocation (optional, can be added to speed up loading 2bit files with many contigs)",location:u,setLocation:function(e){return m(e)}})})]}):null})),F={uri:""},z=(0,s.observer)((function(e){var t=e.rootModel,n=e.setFormOpen,s=["IndexedFastaAdapter","BgzipFastaAdapter","TwoBitAdapter"],i=(0,o.useState)(""),r=(0,a.Z)(i,2),l=r[0],u=r[1],p=(0,o.useState)(""),h=(0,a.Z)(p,2),j=h[0],x=h[1],f=(0,o.useState)(s[0]),Z=(0,a.Z)(f,2),b=Z[0],y=Z[1],L=(0,o.useState)(F),g=(0,a.Z)(L,2),A=g[0],w=g[1],z=(0,o.useState)(F),T=(0,a.Z)(z,2),k=T[0],P=T[1],I=(0,o.useState)(F),M=(0,a.Z)(I,2),N=M[0],O=M[1],E=(0,o.useState)(F),_=(0,a.Z)(E,2),q=_[0],D=_[1],G=(0,o.useState)(F),H=(0,a.Z)(G,2),J=H[0],V=H[1];return(0,v.jsxs)("div",{children:[(0,v.jsxs)(m.Z,{children:[(0,v.jsx)(S.Z,{id:"assembly-name",inputProps:{"data-testid":"assembly-name"},label:"Assembly name",helperText:"The assembly name e.g. hg38",variant:"outlined",value:l,onChange:function(e){return u(e.target.value)}}),(0,v.jsx)(S.Z,{id:"assembly-name",inputProps:{"data-testid":"assembly-display-name"},label:"Assembly display name",helperText:'A human readable display name for the assembly e.g. "Homo sapiens (hg38)"',variant:"outlined",value:j,onChange:function(e){return x(e.target.value)}}),(0,v.jsx)(C,{adapterSelection:b,setAdapterSelection:y,adapterTypes:s}),(0,v.jsx)(B,{adapterSelection:b,fastaLocation:A,setFastaLocation:w,faiLocation:k,setFaiLocation:P,gziLocation:N,setGziLocation:O,twoBitLocation:q,setTwoBitLocation:D,chromSizesLocation:J,setChromSizesLocation:V})]}),(0,v.jsx)(c.Z,{variant:"contained",color:"secondary",startIcon:(0,v.jsx)(d.Z,{}),onClick:function(){var e;""===l?t.session.notify("Can't create an assembly without a name"):(n(!1),"IndexedFastaAdapter"===b?e={name:l,displayName:j,sequence:{adapter:{type:"IndexedFastaAdapter",fastaLocation:A,faiLocation:k}}}:"BgzipFastaAdapter"===b?e={name:l,displayName:j,sequence:{adapter:{type:"BgzipFastaAdapter",fastaLocation:A,faiLocation:k,gziLocation:N}}}:"TwoBitAdapter"===b&&(e={name:l,displayName:j,sequence:{adapter:{type:"TwoBitAdapter",twoBitLocation:q,chromSizesLocation:J}}}),t.jbrowse.addAssemblyConf(e),t.session.notify("Successfully added ".concat(l," assembly to JBrowse 2"),"success"))},children:"Create new assembly"})]})})),T=n(30474),k=(0,s.observer)((function(e){var t=e.assembly;return(0,v.jsx)("div",{style:{maxHeight:600,overflow:"auto"},children:(0,v.jsx)(T.wP,{model:{target:t}})})})),P=(0,s.observer)((function(e){var t=e.rootModel,n=e.onClose,s=(0,o.useState)(!1),u=(0,a.Z)(s,2),m=u[0],p=u[1],h=(0,o.useState)(!1),j=(0,a.Z)(h,2),x=j[0],f=j[1],Z=(0,o.useState)(),b=(0,a.Z)(Z,2),y=b[0],L=b[1],S=!m&&!x;return(0,v.jsxs)(l.Dialog,{open:!0,onClose:function(){return n(!1)},title:"Assembly manager",children:[(0,v.jsxs)(i.Z,{children:[S?(0,v.jsx)(g,{rootModel:t,setIsAssemblyBeingEdited:f,setAssemblyBeingEdited:L}):null,x?(0,v.jsx)(k,{assembly:y}):null,m?(0,v.jsx)(z,{rootModel:t,setFormOpen:p}):null]}),(0,v.jsxs)(r.Z,{children:[m?(0,v.jsx)(c.Z,{variant:"contained",onClick:function(){return p(!1)},children:"Back"}):null,x?(0,v.jsx)(c.Z,{variant:"contained",onClick:function(){return f(!1)},children:"Back"}):null,S?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(c.Z,{color:"secondary",variant:"contained",onClick:function(){return n(!1)},children:"Close"}),(0,v.jsx)(c.Z,{variant:"contained",startIcon:(0,v.jsx)(d.Z,{}),onClick:function(){return p(!0)},children:"Add new assembly"})]}):null]})]})}))},36786:function(e,t,n){var a=n(71600);t.Z=void 0;var o=a(n(7152)),s=n(29938),i=(0,o.default)((0,s.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Create");t.Z=i}}]);
//# sourceMappingURL=869.7404ffb8.chunk.js.map