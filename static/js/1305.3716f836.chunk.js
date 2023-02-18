"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[1305],{61305:function(e,n,t){t.r(n);var o=t(32723),i=t(96234),r=t(33028),s=t(30969),a=t(22714),l=t(80975),c=t(317),d=t(93717),u=t(24684),h=t(32343),f=t(22248),g=t(11112),x=t(1720),v=t(7690),m=t(5877),b=t(49430),k=t(10901),j=t(58459),C=t(34213),p=t(73876),Z=t(22539),y=t(22417),W=t(87695),w=t(76770),T=t(81073),S=t(9077),I=t(90550),M=t(26119),A=t(37574),N=(0,s.lazy)((function(){return t.e(8113).then(t.bind(t,28113))})),B=(0,s.lazy)((function(){return t.e(2092).then(t.bind(t,2092))})),L=(0,s.lazy)((function(){return t.e(7582).then(t.bind(t,47582))})),F=(0,s.lazy)((function(){return t.e(9145).then(t.bind(t,19145))})),H=(0,a.Z)((function(e){var n,t;return{searchBox:{margin:e.spacing(2)},menuIcon:{marginRight:e.spacing(1),marginBottom:0},fab:{position:"absolute",bottom:e.spacing(6),right:e.spacing(6)},compactCheckbox:{padding:0},checkboxLabel:{marginRight:0,"&:hover":{backgroundColor:"#eee"}},accordionBase:{display:"flex"},accordionCard:{padding:3,cursor:"pointer",display:"flex"},nestingLevelMarker:{position:"absolute",borderLeft:"1.5px solid #555"},accordionColor:{background:null===(n=e.palette.tertiary)||void 0===n?void 0:n.main,color:null===(t=e.palette.tertiary)||void 0===t?void 0:t.contrastText,width:"100%",display:"flex",paddingLeft:5},accordionText:{margin:"auto 0"}}}));function D(e){var n=e.data,t=e.isOpen,o=e.style,i=e.setOpen,r=n.isLeaf,s=n.nestingLevel,a=n.checked,f=n.id,g=n.name,x=n.onChange,v=n.toggleCollapse,m=n.conf,b=n.onMoreInfo,k=n.drawerPosition,p=H(),y=10*s+(r?10:0),W=(null===g||void 0===g?void 0:g.endsWith("(Unsupported)"))||(null===g||void 0===g?void 0:g.endsWith("(Unknown)")),w=m&&(0,S.readConfObject)(m,["description"])||"";return(0,A.jsxs)("div",{style:o,className:r?void 0:p.accordionBase,children:[new Array(s).fill(0).map((function(e,n){return(0,A.jsx)("div",{style:{left:10*n+4,height:null===o||void 0===o?void 0:o.height},className:p.nestingLevelMarker},"mark-".concat(n))})),(0,A.jsx)("div",{className:r?void 0:p.accordionCard,onClick:function(){v(f),i(!t)},style:{marginLeft:y,whiteSpace:"nowrap",width:"100%"},children:(0,A.jsx)("div",{className:r?void 0:p.accordionColor,children:r?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(c.ZP,{title:w,placement:"left"===k?"right":"left",children:(0,A.jsx)(d.Z,{className:p.checkboxLabel,control:(0,A.jsx)(u.Z,{className:p.compactCheckbox,checked:a,onChange:function(){return x(f)},color:"primary",disabled:W,inputProps:{"data-testid":"htsTrackEntry-".concat(f)}}),label:g})}),(0,A.jsx)(h.Z,{onClick:function(e){return b({target:e.currentTarget,id:f,conf:m})},color:"secondary","data-testid":"htsTrackEntryMenu-".concat(f),children:(0,A.jsx)(Z.Z,{})})]}):(0,A.jsx)("div",{className:p.accordionText,children:(0,A.jsxs)(l.Z,{children:[t?(0,A.jsx)(j.Z,{}):(0,A.jsx)(C.Z,{}),g]})})})})]})}function E(e,n,t){var o=!!e.conf;return{data:(0,r.Z)((0,r.Z)({defaultHeight:o?22:40,isLeaf:o,isOpenByDefault:!0,nestingLevel:n},e),t),nestingLevel:n,node:e}}var O=(0,I.observer)((function(e){var n,t=e.height,r=e.tree,a=e.model,l=a.filterText,c=a.view,d=(0,s.useRef)(null),u=(0,s.useState)(),h=(0,i.Z)(u,2),f=h[0],g=h[1],x=(0,T.getSession)(a),v=x.drawerPosition,m=(0,s.useMemo)((function(){return{onChange:function(e){return c.toggleTrack(e)},toggleCollapse:function(e){return a.toggleCategory(e)},onMoreInfo:g,drawerPosition:v}}),[c,a,v]),b=(0,s.useCallback)((0,o.Z)().mark((function e(){var n,t,i,s,a;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=0;case 1:if(!(n<r.children.length)){e.next=8;break}return t=r.children[n],e.next=5,E(t,0,m);case 5:n++,e.next=1;break;case 8:return void(e.next=11);case 11:i=e.sent,s=0;case 13:if(!(s<i.node.children.length)){e.next=20;break}return a=i.node.children[s],e.next=17,E(a,i.nestingLevel+1,m);case 17:s++,e.next=13;break;case 20:e.next=8;break;case 22:case"end":return e.stop()}}),e)})),[r,m]),k=null===f||void 0===f?void 0:f.conf,j=k&&(null===(n=x.getTrackActionMenuItems)||void 0===n?void 0:n.call(x,k))||[];return(0,s.useEffect)((function(){d.current.recomputeTree({refreshNodes:!0,useDefaultHeight:!0})}),[r,l]),(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(M.qF,{ref:d,treeWalker:b,height:t,children:D}),(0,A.jsx)(w.Z,{anchorEl:null===f||void 0===f?void 0:f.target,menuItems:j,onMenuItemClick:function(e,n){n(),g(void 0)},open:Boolean(f),onClose:function(){return g(void 0)}})]})})),P=function(e){var n=e.tree,t=e.model,o=e.offset;return"undefined"===typeof jest?(0,A.jsx)(W.Z,{disableWidth:!0,children:function(e){var i=e.height;return(0,A.jsx)(O,{height:i-o,model:t,tree:n})}}):(0,A.jsx)(O,{height:9e3,model:t,tree:n})},_=function(e){var n=e.overrideDimensions,t=e.children;return n?(0,A.jsx)("div",{style:(0,r.Z)({},n),children:t}):(0,A.jsx)(A.Fragment,{children:t})},z=(0,I.observer)((function(e){var n=e.model,t=e.toolbarHeight,o=e.overrideDimensions,r=H(),a=(0,T.getSession)(n),l=(0,s.useState)(null),c=(0,i.Z)(l,2),d=c[0],u=c[1];function h(){u(null)}var v=(0,T.isSessionModelWithConnections)(a),m=(0,T.isSessionWithAddTracks)(a);return(0,A.jsxs)(_,{overrideDimensions:o,children:[(0,A.jsx)(U,{model:n,toolbarHeight:t}),m||v?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(f.Z,{color:"secondary",className:r.fab,onClick:function(e){return u(e.currentTarget)},children:(0,A.jsx)(k.Z,{})}),(0,A.jsxs)(g.Z,{anchorEl:d,open:Boolean(d),onClose:function(){return u(null)},children:[v?(0,A.jsx)(x.Z,{onClick:function(){h(),(0,T.isSessionModelWithWidgets)(a)&&a.showWidget(a.addWidget("AddConnectionWidget","addConnectionWidget"))},children:"Add connection"}):null,m?(0,A.jsx)(x.Z,{onClick:function(){h(),(0,T.isSessionModelWithWidgets)(a)&&a.showWidget(a.addWidget("AddTrackWidget","addTrackWidget",{view:n.view.id}))},children:"Add track"}):null]})]}):null]})})),R=(0,I.observer)((function(e){var n=e.model,t=e.setHeaderHeight,o=e.setAssemblyIdx,r=e.assemblyIdx,a=H(),l=(0,T.getSession)(n),c=(0,s.useState)(),d=(0,i.Z)(c,2),u=d[0],f=d[1],g=(0,s.useState)(),x=(0,i.Z)(g,2),k=x[0],j=x[1],C=(0,s.useState)(),Z=(0,i.Z)(C,2),W=Z[0],I=Z[1],M=(0,s.useState)(),D=(0,i.Z)(M,2),E=D[0],O=D[1],P=(0,s.useState)(!1),_=(0,i.Z)(P,2),z=_[0],R=_[1],U=(0,s.useState)(!1),q=(0,i.Z)(U,2),G=q[0],J=q[1],K=n.assemblyNames,Q=K[r];function V(e,n){var t=(0,S.readConfObject)(e,"name"),o=l.prepareToBreakConnection(e);if(o){var r=(0,i.Z)(o,2),s=r[0],a=r[1];Object.keys(a).length>0?I({connectionConf:e,safelyBreakConnection:s,dereferenceTypeCount:a,name:t}):s()}n&&O({name:t,connectionConf:e})}var X=[{label:"Turn on/off connections...",onClick:function(){return J(!0)}}];(0,T.isSessionModelWithConnections)(l)&&(X.unshift({label:"Add connection",onClick:function(){if((0,T.isSessionModelWithWidgets)(l)){var e=l.addWidget("AddConnectionWidget","addConnectionWidget");l.showWidget(e)}}}),X.push({label:"Delete connections...",onClick:function(){return R(!0)}}));var Y=K.length>1?[{label:"Select assembly...",subMenu:K.map((function(e,n){return{label:e,onClick:function(){return o(n)}}}))}]:[],$=[{label:"Add track...",onClick:function(){if((0,T.isSessionModelWithWidgets)(l)){var e=l.addWidget("AddTrackWidget","addTrackWidget",{view:n.view.id});l.showWidget(e)}}}].concat(Y);return(0,A.jsxs)("div",{ref:function(e){return t((null===e||void 0===e?void 0:e.getBoundingClientRect().height)||0)},"data-testid":"hierarchical_track_selector",children:[(0,A.jsxs)("div",{style:{display:"flex"},children:[(0,T.isSessionWithAddTracks)(l)&&(0,A.jsx)(h.Z,{className:a.menuIcon,onClick:function(e){return j(e.currentTarget)},children:(0,A.jsx)(p.Z,{})}),l.makeConnection&&(0,A.jsx)(h.Z,{className:a.menuIcon,onClick:function(e){return f(e.currentTarget)},children:(0,A.jsx)(y.sB,{})}),(0,A.jsx)(v.Z,{className:a.searchBox,label:"Filter tracks",value:n.filterText,onChange:function(e){return n.setFilterText(e.target.value)},fullWidth:!0,InputProps:{endAdornment:(0,A.jsx)(m.Z,{position:"end",children:(0,A.jsx)(h.Z,{color:"secondary",onClick:n.clearFilterText,children:(0,A.jsx)(b.Z,{})})})}})]}),(0,A.jsx)(w.Z,{anchorEl:u,open:Boolean(u),onMenuItemClick:function(e,n){n(),f(void 0)},onClose:function(){return f(void 0)},menuItems:X}),(0,A.jsx)(w.Z,{anchorEl:k,open:Boolean(k),onMenuItemClick:function(e,n){n(),j(void 0)},onClose:function(){return j(void 0)},menuItems:$}),(0,A.jsxs)(s.Suspense,{fallback:(0,A.jsx)("div",{}),children:[W?(0,A.jsx)(N,{modalInfo:W,setModalInfo:I}):E?(0,A.jsx)(B,{handleClose:function(){return O(void 0)},deleteDialogDetails:E,session:l}):null,z?(0,A.jsx)(L,{handleClose:function(){return R(!1)},breakConnection:V,session:l}):null,G?(0,A.jsx)(F,{handleClose:function(){return J(!1)},session:l,breakConnection:V,assemblyName:Q}):null]})]})})),U=(0,I.observer)((function(e){var n=e.model,t=e.toolbarHeight,o=void 0===t?0:t,r=(0,s.useState)(0),a=(0,i.Z)(r,2),l=a[0],c=a[1],d=(0,s.useState)(0),u=(0,i.Z)(d,2),h=u[0],f=u[1],g=n.assemblyNames[l];return g?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(R,{model:n,setHeaderHeight:f,setAssemblyIdx:c,assemblyIdx:l}),(0,A.jsx)(P,{tree:n.hierarchy(g),model:n,offset:o+h})]}):null}));n.default=z}}]);
//# sourceMappingURL=1305.3716f836.chunk.js.map