"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[2458],{2458:function(e,t,a){a.r(t),a.d(t,{default:function(){return N}});var n=a(96234),o=a(41867),r=a(3762),i=a(47409),s=a(27768),c=a(23801),l=a(35421),d=a(36686),u=a(26659),p=a(7229),v=a(36636),m=a(10752),f=a(95431),Z=a(24886),h=a(97612),g=a(68367),y=a(43800),x=a(84415),b=a(98662),j=a(80838),w=(0,r.observer)((function(e){var t=e.rootModel,a=e.setIsAssemblyBeingEdited,n=e.setAssemblyBeingEdited;var o=t.jbrowse.assemblies;return(0,j.jsx)(u.Z,{component:p.Z,children:(0,j.jsxs)(v.Z,{children:[(0,j.jsx)(m.Z,{children:(0,j.jsxs)(f.Z,{children:[(0,j.jsx)(Z.Z,{children:"Name"}),(0,j.jsx)(Z.Z,{children:"Display name"}),(0,j.jsx)(Z.Z,{children:"Aliases"}),(0,j.jsx)(Z.Z,{children:"Actions"})]})}),(0,j.jsx)(h.Z,{children:o.map((function(e){var o=(0,y.readConfObject)(e,"name"),r=(0,y.readConfObject)(e,"displayName"),i=(0,y.readConfObject)(e,"aliases");return(0,j.jsxs)(f.Z,{children:[(0,j.jsx)(Z.Z,{children:o}),(0,j.jsx)(Z.Z,{children:r}),(0,j.jsx)(Z.Z,{children:i?i.toString():""}),(0,j.jsxs)(Z.Z,{children:[(0,j.jsx)(g.Z,{"data-testid":"".concat(o,"-edit"),onClick:function(){a(!0),n(e)},children:(0,j.jsx)(x.Z,{color:"primary"})}),(0,j.jsx)(g.Z,{"data-testid":"".concat(o,"-delete"),onClick:function(){return function(e){t.jbrowse.removeAssemblyConf(e)}(o)},children:(0,j.jsx)(b.Z,{color:"error"})})]})]},o)}))})]})})})),C=a(49133),S=a(59231),T=a(45294),L=(0,r.observer)((function(e){var t=e.adapterSelection,a=e.setAdapterSelection,n=e.adapterTypes;return(0,j.jsx)(C.Z,{value:t,label:"Type",select:!0,helperText:"Type of adapter to use",fullWidth:!0,onChange:function(e){return a(e.target.value)},children:n.map((function(e){return(0,j.jsx)(S.Z,{value:e,children:e},e)}))})})),k=(0,r.observer)((function(e){var t=e.adapterSelection,a=e.fastaLocation,n=e.setFastaLocation,o=e.faiLocation,r=e.setFaiLocation,i=e.gziLocation,s=e.setGziLocation,c=e.twoBitLocation,d=e.setTwoBitLocation,u=e.chromSizesLocation,p=e.setChromSizesLocation;return"IndexedFastaAdapter"===t||"BgzipFastaAdapter"===t?(0,j.jsxs)(T.ZP,{container:!0,spacing:2,children:[(0,j.jsx)(T.ZP,{item:!0,children:(0,j.jsx)(l.FileSelector,{name:"fastaLocation",location:a,setLocation:function(e){return n(e)}})}),(0,j.jsx)(T.ZP,{item:!0,children:(0,j.jsx)(l.FileSelector,{name:"faiLocation",location:o,setLocation:function(e){return r(e)}})}),"BgzipFastaAdapter"===t?(0,j.jsx)(T.ZP,{item:!0,children:(0,j.jsx)(l.FileSelector,{name:"gziLocation",location:i,setLocation:function(e){return s(e)}})}):null]}):"TwoBitAdapter"===t?(0,j.jsxs)(T.ZP,{container:!0,spacing:2,children:[(0,j.jsx)(T.ZP,{item:!0,children:(0,j.jsx)(l.FileSelector,{name:"twoBitLocation",location:c,setLocation:function(e){return d(e)}})}),(0,j.jsx)(T.ZP,{item:!0,children:(0,j.jsx)(l.FileSelector,{name:"chromSizesLocation (optional, can be added to speed up loading 2bit files with many contigs)",location:u,setLocation:function(e){return p(e)}})})]}):null})),z={uri:""},A=(0,r.observer)((function(e){var t=e.rootModel,a=e.setFormOpen,r=["IndexedFastaAdapter","BgzipFastaAdapter","TwoBitAdapter"],i=(0,o.useState)(""),s=(0,n.Z)(i,2),l=s[0],u=s[1],v=(0,o.useState)(""),m=(0,n.Z)(v,2),f=m[0],Z=m[1],h=(0,o.useState)(r[0]),g=(0,n.Z)(h,2),y=g[0],x=g[1],b=(0,o.useState)(z),w=(0,n.Z)(b,2),S=w[0],T=w[1],A=(0,o.useState)(z),M=(0,n.Z)(A,2),H=M[0],B=M[1],N=(0,o.useState)(z),R=(0,n.Z)(N,2),F=R[0],P=R[1],O=(0,o.useState)(z),I=(0,n.Z)(O,2),q=I[0],D=I[1],_=(0,o.useState)(z),E=(0,n.Z)(_,2),G=E[0],V=E[1];return(0,j.jsxs)("div",{children:[(0,j.jsxs)(p.Z,{children:[(0,j.jsx)(C.Z,{id:"assembly-name",inputProps:{"data-testid":"assembly-name"},label:"Assembly name",helperText:"The assembly name e.g. hg38",variant:"outlined",value:l,onChange:function(e){return u(e.target.value)}}),(0,j.jsx)(C.Z,{id:"assembly-name",inputProps:{"data-testid":"assembly-display-name"},label:"Assembly display name",helperText:'A human readable display name for the assembly e.g. "Homo sapiens (hg38)"',variant:"outlined",value:f,onChange:function(e){return Z(e.target.value)}}),(0,j.jsx)(L,{adapterSelection:y,setAdapterSelection:x,adapterTypes:r}),(0,j.jsx)(k,{adapterSelection:y,fastaLocation:S,setFastaLocation:T,faiLocation:H,setFaiLocation:B,gziLocation:F,setGziLocation:P,twoBitLocation:q,setTwoBitLocation:D,chromSizesLocation:G,setChromSizesLocation:V})]}),(0,j.jsx)(c.Z,{variant:"contained",color:"secondary",startIcon:(0,j.jsx)(d.Z,{}),onClick:function(){var e;""===l?t.session.notify("Can't create an assembly without a name"):(a(!1),"IndexedFastaAdapter"===y?e={name:l,displayName:f,sequence:{adapter:{type:"IndexedFastaAdapter",fastaLocation:S,faiLocation:H}}}:"BgzipFastaAdapter"===y?e={name:l,displayName:f,sequence:{adapter:{type:"BgzipFastaAdapter",fastaLocation:S,faiLocation:H,gziLocation:F}}}:"TwoBitAdapter"===y&&(e={name:l,displayName:f,sequence:{adapter:{type:"TwoBitAdapter",twoBitLocation:q,chromSizesLocation:G}}}),t.jbrowse.addAssemblyConf(e),t.session.notify("Successfully added ".concat(l," assembly to JBrowse 2"),"success"))},children:"Create new assembly"})]})})),M=a(93533),H=(0,a(47192).ZL)()({container:{overflow:"auto",maxHeight:600}}),B=(0,r.observer)((function(e){var t=e.assembly,a=H().classes;return(0,j.jsx)("div",{className:a.container,children:t?(0,j.jsx)(M.wP,{model:{target:t}}):(0,j.jsx)("div",{children:"No assembly"})})})),N=(0,r.observer)((function(e){var t=e.rootModel,a=e.onClose,r=(0,o.useState)(!1),u=(0,n.Z)(r,2),p=u[0],v=u[1],m=(0,o.useState)(!1),f=(0,n.Z)(m,2),Z=f[0],h=f[1],g=(0,o.useState)(),y=(0,n.Z)(g,2),x=y[0],b=y[1],C=!p&&!Z;return(0,j.jsxs)(l.Dialog,{open:!0,onClose:function(){return a(!1)},title:"Assembly manager",children:[(0,j.jsxs)(i.Z,{children:[C?(0,j.jsx)(w,{rootModel:t,setIsAssemblyBeingEdited:h,setAssemblyBeingEdited:b}):null,Z?(0,j.jsx)(B,{assembly:x}):null,p?(0,j.jsx)(A,{rootModel:t,setFormOpen:v}):null]}),(0,j.jsxs)(s.Z,{children:[p?(0,j.jsx)(c.Z,{variant:"contained",onClick:function(){return v(!1)},children:"Back"}):null,Z?(0,j.jsx)(c.Z,{variant:"contained",onClick:function(){return h(!1)},children:"Back"}):null,C?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(c.Z,{color:"secondary",variant:"contained",onClick:function(){return a(!1)},children:"Close"}),(0,j.jsx)(c.Z,{variant:"contained",startIcon:(0,j.jsx)(d.Z,{}),onClick:function(){return v(!0)},children:"Add new assembly"})]}):null]})]})}))},84415:function(e,t,a){var n=a(71600);t.Z=void 0;var o=n(a(80337)),r=a(80838),i=(0,o.default)((0,r.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Create");t.Z=i},98662:function(e,t,a){var n=a(71600);t.Z=void 0;var o=n(a(80337)),r=a(80838),i=(0,o.default)((0,r.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=i},36636:function(e,t,a){var n=a(31461),o=a(7896),r=a(41867),i=a(66184),s=a(92705),c=a(67582),l=a(90293),d=a(75693),u=a(99815),p=a(80838),v=["className","component","padding","size","stickyHeader"],m=(0,d.ZP)("table",{name:"MuiTable",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,a=e.ownerState;return(0,o.Z)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,o.Z)({},t.typography.body2,{padding:t.spacing(2),color:(t.vars||t).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},a.stickyHeader&&{borderCollapse:"separate"})})),f="table",Z=r.forwardRef((function(e,t){var a=(0,l.Z)({props:e,name:"MuiTable"}),d=a.className,Z=a.component,h=void 0===Z?f:Z,g=a.padding,y=void 0===g?"normal":g,x=a.size,b=void 0===x?"medium":x,j=a.stickyHeader,w=void 0!==j&&j,C=(0,n.Z)(a,v),S=(0,o.Z)({},a,{component:h,padding:y,size:b,stickyHeader:w}),T=function(e){var t=e.classes,a={root:["root",e.stickyHeader&&"stickyHeader"]};return(0,s.Z)(a,u.K,t)}(S),L=r.useMemo((function(){return{padding:y,size:b,stickyHeader:w}}),[y,b,w]);return(0,p.jsx)(c.Z.Provider,{value:L,children:(0,p.jsx)(m,(0,o.Z)({as:h,role:h===f?null:"table",ref:t,className:(0,i.Z)(T.root,d),ownerState:S},C))})}));t.Z=Z},67582:function(e,t,a){var n=a(41867).createContext();t.Z=n},45981:function(e,t,a){var n=a(41867).createContext();t.Z=n},99815:function(e,t,a){a.d(t,{K:function(){return r}});var n=a(70101),o=a(88498);function r(e){return(0,o.Z)("MuiTable",e)}var i=(0,n.Z)("MuiTable",["root","stickyHeader"]);t.Z=i},97612:function(e,t,a){var n=a(7896),o=a(31461),r=a(41867),i=a(66184),s=a(92705),c=a(45981),l=a(90293),d=a(75693),u=a(62161),p=a(80838),v=["className","component"],m=(0,d.ZP)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-row-group"}),f={variant:"body"},Z="tbody",h=r.forwardRef((function(e,t){var a=(0,l.Z)({props:e,name:"MuiTableBody"}),r=a.className,d=a.component,h=void 0===d?Z:d,g=(0,o.Z)(a,v),y=(0,n.Z)({},a,{component:h}),x=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},u.j,t)}(y);return(0,p.jsx)(c.Z.Provider,{value:f,children:(0,p.jsx)(m,(0,n.Z)({className:(0,i.Z)(x.root,r),as:h,ref:t,role:h===Z?null:"rowgroup",ownerState:y},g))})}));t.Z=h},62161:function(e,t,a){a.d(t,{j:function(){return r}});var n=a(70101),o=a(88498);function r(e){return(0,o.Z)("MuiTableBody",e)}var i=(0,n.Z)("MuiTableBody",["root"]);t.Z=i},24886:function(e,t,a){var n=a(56666),o=a(31461),r=a(7896),i=a(41867),s=a(66184),c=a(92705),l=a(71939),d=a(9931),u=a(67582),p=a(45981),v=a(90293),m=a(75693),f=a(66571),Z=a(80838),h=["align","className","component","padding","scope","size","sortDirection","variant"],g=(0,m.ZP)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t[a.variant],t["size".concat((0,d.Z)(a.size))],"normal"!==a.padding&&t["padding".concat((0,d.Z)(a.padding))],"inherit"!==a.align&&t["align".concat((0,d.Z)(a.align))],a.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,a=e.ownerState;return(0,r.Z)({},t.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:t.vars?"1px solid ".concat(t.vars.palette.TableCell.border):"1px solid\n    ".concat("light"===t.palette.mode?(0,l.$n)((0,l.Fq)(t.palette.divider,1),.88):(0,l._j)((0,l.Fq)(t.palette.divider,1),.68)),textAlign:"left",padding:16},"head"===a.variant&&{color:(t.vars||t).palette.text.primary,lineHeight:t.typography.pxToRem(24),fontWeight:t.typography.fontWeightMedium},"body"===a.variant&&{color:(t.vars||t).palette.text.primary},"footer"===a.variant&&{color:(t.vars||t).palette.text.secondary,lineHeight:t.typography.pxToRem(21),fontSize:t.typography.pxToRem(12)},"small"===a.size&&(0,n.Z)({padding:"6px 16px"},"&.".concat(f.Z.paddingCheckbox),{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}),"checkbox"===a.padding&&{width:48,padding:"0 0 0 4px"},"none"===a.padding&&{padding:0},"left"===a.align&&{textAlign:"left"},"center"===a.align&&{textAlign:"center"},"right"===a.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===a.align&&{textAlign:"justify"},a.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(t.vars||t).palette.background.default})})),y=i.forwardRef((function(e,t){var a,n=(0,v.Z)({props:e,name:"MuiTableCell"}),l=n.align,m=void 0===l?"inherit":l,y=n.className,x=n.component,b=n.padding,j=n.scope,w=n.size,C=n.sortDirection,S=n.variant,T=(0,o.Z)(n,h),L=i.useContext(u.Z),k=i.useContext(p.Z),z=k&&"head"===k.variant,A=j;"td"===(a=x||(z?"th":"td"))?A=void 0:!A&&z&&(A="col");var M=S||k&&k.variant,H=(0,r.Z)({},n,{align:m,component:a,padding:b||(L&&L.padding?L.padding:"normal"),size:w||(L&&L.size?L.size:"medium"),sortDirection:C,stickyHeader:"head"===M&&L&&L.stickyHeader,variant:M}),B=function(e){var t=e.classes,a=e.variant,n=e.align,o=e.padding,r=e.size,i={root:["root",a,e.stickyHeader&&"stickyHeader","inherit"!==n&&"align".concat((0,d.Z)(n)),"normal"!==o&&"padding".concat((0,d.Z)(o)),"size".concat((0,d.Z)(r))]};return(0,c.Z)(i,f.U,t)}(H),N=null;return C&&(N="asc"===C?"ascending":"descending"),(0,Z.jsx)(g,(0,r.Z)({as:a,ref:t,className:(0,s.Z)(B.root,y),"aria-sort":N,scope:A,ownerState:H},T))}));t.Z=y},66571:function(e,t,a){a.d(t,{U:function(){return r}});var n=a(70101),o=a(88498);function r(e){return(0,o.Z)("MuiTableCell",e)}var i=(0,n.Z)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]);t.Z=i},26659:function(e,t,a){var n=a(7896),o=a(31461),r=a(41867),i=a(66184),s=a(92705),c=a(90293),l=a(75693),d=a(43703),u=a(80838),p=["className","component"],v=(0,l.ZP)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:function(e,t){return t.root}})({width:"100%",overflowX:"auto"}),m=r.forwardRef((function(e,t){var a=(0,c.Z)({props:e,name:"MuiTableContainer"}),r=a.className,l=a.component,m=void 0===l?"div":l,f=(0,o.Z)(a,p),Z=(0,n.Z)({},a,{component:m}),h=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},d.n,t)}(Z);return(0,u.jsx)(v,(0,n.Z)({ref:t,as:m,className:(0,i.Z)(h.root,r),ownerState:Z},f))}));t.Z=m},43703:function(e,t,a){a.d(t,{n:function(){return r}});var n=a(70101),o=a(88498);function r(e){return(0,o.Z)("MuiTableContainer",e)}var i=(0,n.Z)("MuiTableContainer",["root"]);t.Z=i},10752:function(e,t,a){var n=a(7896),o=a(31461),r=a(41867),i=a(66184),s=a(92705),c=a(45981),l=a(90293),d=a(75693),u=a(18956),p=a(80838),v=["className","component"],m=(0,d.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-header-group"}),f={variant:"head"},Z="thead",h=r.forwardRef((function(e,t){var a=(0,l.Z)({props:e,name:"MuiTableHead"}),r=a.className,d=a.component,h=void 0===d?Z:d,g=(0,o.Z)(a,v),y=(0,n.Z)({},a,{component:h}),x=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},u.s,t)}(y);return(0,p.jsx)(c.Z.Provider,{value:f,children:(0,p.jsx)(m,(0,n.Z)({as:h,className:(0,i.Z)(x.root,r),ref:t,role:h===Z?null:"rowgroup",ownerState:y},g))})}));t.Z=h},18956:function(e,t,a){a.d(t,{s:function(){return r}});var n=a(70101),o=a(88498);function r(e){return(0,o.Z)("MuiTableHead",e)}var i=(0,n.Z)("MuiTableHead",["root"]);t.Z=i},95431:function(e,t,a){var n=a(56666),o=a(7896),r=a(31461),i=a(41867),s=a(66184),c=a(92705),l=a(71939),d=a(45981),u=a(90293),p=a(75693),v=a(26267),m=a(80838),f=["className","component","hover","selected"],Z=(0,p.ZP)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.head&&t.head,a.footer&&t.footer]}})((function(e){var t,a=e.theme;return t={color:"inherit",display:"table-row",verticalAlign:"middle",outline:0},(0,n.Z)(t,"&.".concat(v.Z.hover,":hover"),{backgroundColor:(a.vars||a).palette.action.hover}),(0,n.Z)(t,"&.".concat(v.Z.selected),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,l.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity),"&:hover":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):(0,l.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)}}),t})),h=i.forwardRef((function(e,t){var a=(0,u.Z)({props:e,name:"MuiTableRow"}),n=a.className,l=a.component,p=void 0===l?"tr":l,h=a.hover,g=void 0!==h&&h,y=a.selected,x=void 0!==y&&y,b=(0,r.Z)(a,f),j=i.useContext(d.Z),w=(0,o.Z)({},a,{component:p,hover:g,selected:x,head:j&&"head"===j.variant,footer:j&&"footer"===j.variant}),C=function(e){var t=e.classes,a={root:["root",e.selected&&"selected",e.hover&&"hover",e.head&&"head",e.footer&&"footer"]};return(0,c.Z)(a,v.G,t)}(w);return(0,m.jsx)(Z,(0,o.Z)({as:p,ref:t,className:(0,s.Z)(C.root,n),role:"tr"===p?null:"row",ownerState:w},b))}));t.Z=h},26267:function(e,t,a){a.d(t,{G:function(){return r}});var n=a(70101),o=a(88498);function r(e){return(0,o.Z)("MuiTableRow",e)}var i=(0,n.Z)("MuiTableRow",["root","selected","hover","head","footer"]);t.Z=i}}]);
//# sourceMappingURL=2458.81da9fa6.chunk.js.map