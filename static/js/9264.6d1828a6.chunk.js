"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[9264],{59264:function(e,t,n){n.r(t);var r=n(32723),a=n(34795),i=n(96234),s=n(96902),o=n(91188),c=n(4782),u=n(27664),l=n(80691),d=n(54417),x=n(13655),h=n(78888),m=n(44536),p=n(17867),f=n(47057),v=n(2199),b=n(36949),g=n(29938),Z=(0,o.ZL)()((function(e){return{importFormContainer:{padding:e.spacing(2)},button:{margin:e.spacing(2)},container:{padding:e.spacing(4)}}}));t.default=(0,c.observer)((function(e){var t,n=e.model,o=Z().classes,c=(0,u.getSession)(n),k=c.assemblyNames,S=c.assemblyManager,y=c.textSearchManager,w=n.rankSearchResults,j=n.error,W=(0,s.useState)(k[0]),C=(0,i.Z)(W,2),N=C[0],R=C[1],L=(0,s.useState)(),G=(0,i.Z)(L,2),M=G[0],T=G[1],P=n.searchScope(N),E=S.get(N),I=k.length?null===E||void 0===E?void 0:E.error:"No configured assemblies",_=I||j,q=(0,s.useState)(""),A=(0,i.Z)(q,2),F=A[0],z=A[1],D=null===E||void 0===E?void 0:E.regions,O=!!D,K=D?null===(t=D[0])||void 0===t?void 0:t.refName:"";function B(e){return H.apply(this,arguments)}function H(){return H=(0,a.Z)((0,r.Z)().mark((function e(t){var a,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.getLocation(),i=t.getTrackId(),!a){e.next=6;break}return e.next=5,n.navToLocString(a,N);case 5:i&&n.showTrack(i);case 6:case"end":return e.stop()}}),e)}))),H.apply(this,arguments)}function J(e){return Q.apply(this,arguments)}function Q(){return(Q=(0,a.Z)((0,r.Z)().mark((function e(t){var a,s,o,u,l,d,x;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,(null===M||void 0===M?void 0:M.getDisplayString())!==t||!M.hasLocation()){e.next=6;break}return e.next=4,B(M);case 4:e.next=31;break;case 6:if(null===M||void 0===M||null===(a=M.results)||void 0===a||!a.length){e.next=10;break}n.setSearchResults(M.results,M.getLabel(),N),e.next=31;break;case 10:if(s=(0,b.pG)(t,":"),o=(0,i.Z)(s,2),u=o[0],l=o[1],!((d=(null===E||void 0===E?void 0:E.allRefNamesWithLowerCase)||[]).includes(t)||d.includes(u)&&!Number.isNaN(Number.parseInt(l,10)))){e.next=17;break}return e.next=15,n.navToLocString(t,N);case 15:e.next=31;break;case 17:return e.next=19,(0,b.kx)({queryString:t,searchType:"exact",searchScope:P,rankSearchResults:w,textSearchManager:y,assembly:E});case 19:if(!((x=e.sent).length>1)){e.next=24;break}n.setSearchResults(x,t.toLowerCase(),N),e.next=31;break;case 24:if(1!==x.length){e.next=29;break}return e.next=27,B(x[0]);case 27:e.next=31;break;case 29:return e.next=31,n.navToLocString(t,N);case 31:e.next=37;break;case 33:e.prev=33,e.t0=e.catch(0),console.error(e.t0),c.notify("".concat(e.t0),"warning");case 37:case"end":return e.stop()}}),e,null,[[0,33]])})))).apply(this,arguments)}return(0,s.useEffect)((function(){z(K)}),[K,N]),(0,g.jsxs)("div",{className:o.container,children:[_?(0,g.jsx)(p.ErrorMessage,{error:_}):null,(0,g.jsx)(l.Z,{className:o.importFormContainer,children:(0,g.jsx)("form",{onSubmit:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n.setError(void 0),!F){e.next=5;break}return e.next=5,J(F);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:(0,g.jsxs)(d.ZP,{container:!0,spacing:1,justifyContent:"center",alignItems:"center",children:[(0,g.jsx)(d.ZP,{item:!0,children:(0,g.jsx)(x.Z,{children:(0,g.jsx)(p.AssemblySelector,{onChange:function(e){return R(e)},localStorageKey:"lgv",session:c,selected:N})})}),(0,g.jsx)(d.ZP,{item:!0,children:N?I?(0,g.jsx)(f.Z,{style:{color:"red"}}):O?(0,g.jsx)(x.Z,{children:(0,g.jsx)(v.Z,{fetchResults:function(e){return(0,b.kx)({queryString:e,assembly:E,textSearchManager:y,rankSearchResults:w,searchScope:P})},model:n,assemblyName:N,value:F,minWidth:270,onChange:function(e){return z(e)},onSelect:function(e){return T(e)},TextFieldProps:{variant:"outlined",helperText:"Enter sequence name, feature name, or location"}})}):(0,g.jsx)(h.Z,{size:20,disableShrink:!0}):null}),(0,g.jsxs)(d.ZP,{item:!0,children:[(0,g.jsx)(x.Z,{children:(0,g.jsx)(m.Z,{type:"submit",disabled:!F,className:o.button,variant:"contained",color:"primary",children:"Open"})}),(0,g.jsx)(x.Z,{children:(0,g.jsx)(m.Z,{disabled:!F,className:o.button,onClick:function(){n.setError(void 0),n.showAllRegionsInAssembly(N)},variant:"contained",color:"secondary",children:"Show all regions in assembly"})})]})]})})})]})}))},80691:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(56666),a=n(31461),i=n(7896),s=n(96902),o=n(24463),c=n(57277),u=n(61235),l=n(73674),d=n(86655),x=n(8044),h=n(91221),m=n(29938),p=["className","component","disableGutters","fixed","maxWidth","classes"],f=(0,h.Z)(),v=(0,x.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,c.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),b=function(e){return(0,d.Z)({props:e,name:"MuiContainer",defaultTheme:f})};var g=n(70378),Z=n(2252),k=n(53068),S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,n=void 0===t?v:t,d=e.useThemeProps,x=void 0===d?b:d,h=e.componentName,f=void 0===h?"MuiContainer":h,g=n((function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!n.disableGutters&&(0,r.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,n){var r=n,a=t.breakpoints.values[r];return 0!==a&&(e[t.breakpoints.up(r)]={maxWidth:"".concat(a).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({},"xs"===n.maxWidth&&(0,r.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),n.maxWidth&&"xs"!==n.maxWidth&&(0,r.Z)({},t.breakpoints.up(n.maxWidth),{maxWidth:"".concat(t.breakpoints.values[n.maxWidth]).concat(t.breakpoints.unit)}))})),Z=s.forwardRef((function(e,t){var n=x(e),r=n.className,s=n.component,d=void 0===s?"div":s,h=n.disableGutters,v=void 0!==h&&h,b=n.fixed,Z=void 0!==b&&b,k=n.maxWidth,S=void 0===k?"lg":k,y=(0,a.Z)(n,p),w=(0,i.Z)({},n,{component:d,disableGutters:v,fixed:Z,maxWidth:S}),j=function(e,t){var n=e.classes,r=e.fixed,a=e.disableGutters,i=e.maxWidth,s={root:["root",i&&"maxWidth".concat((0,c.Z)(String(i))),r&&"fixed",a&&"disableGutters"]};return(0,l.Z)(s,(function(e){return(0,u.Z)(t,e)}),n)}(w,f);return(0,m.jsx)(g,(0,i.Z)({as:d,ownerState:w,className:(0,o.default)(j.root,r),ref:t},y))}));return Z}({createStyledComponent:(0,Z.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,g.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:function(e){return(0,k.Z)({props:e,name:"MuiContainer"})}}),y=S},8044:function(e,t,n){var r=(0,n(64630).ZP)();t.Z=r}}]);
//# sourceMappingURL=9264.6d1828a6.chunk.js.map