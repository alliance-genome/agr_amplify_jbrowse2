"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[6921,2836],{98907:function(e,t,n){n.r(t),n.d(t,{default:function(){return r.Attributes}});var r=n(96251)},99051:function(e,t,n){var r=n(96902),o=n(55006),i=n(3677),u=n(92745),a=n(29938);function c(e){return e.substring(2).toLowerCase()}t.Z=function(e){var t=e.children,n=e.disableReactTree,s=void 0!==n&&n,f=e.mouseEvent,d=void 0===f?"onClick":f,v=e.onClickAway,l=e.touchEvent,m=void 0===l?"onTouchEnd":l,p=r.useRef(!1),g=r.useRef(null),b=r.useRef(!1),h=r.useRef(!1);r.useEffect((function(){return setTimeout((function(){b.current=!0}),0),function(){b.current=!1}}),[]);var Z=(0,o.Z)(t.ref,g),E=(0,i.Z)((function(e){var t=h.current;h.current=!1;var n=(0,u.Z)(g.current);!b.current||!g.current||"clientX"in e&&function(e,t){return t.documentElement.clientWidth<e.clientX||t.documentElement.clientHeight<e.clientY}(e,n)||(p.current?p.current=!1:(e.composedPath?e.composedPath().indexOf(g.current)>-1:!n.documentElement.contains(e.target)||g.current.contains(e.target))||!s&&t||v(e))})),w=function(e){return function(n){h.current=!0;var r=t.props[e];r&&r(n)}},R={ref:Z};return!1!==m&&(R[m]=w(m)),r.useEffect((function(){if(!1!==m){var e=c(m),t=(0,u.Z)(g.current),n=function(){p.current=!0};return t.addEventListener(e,E),t.addEventListener("touchmove",n),function(){t.removeEventListener(e,E),t.removeEventListener("touchmove",n)}}}),[E,m]),!1!==d&&(R[d]=w(d)),r.useEffect((function(){if(!1!==d){var e=c(d),t=(0,u.Z)(g.current);return t.addEventListener(e,E),function(){t.removeEventListener(e,E)}}}),[E,d]),(0,a.jsx)(r.Fragment,{children:r.cloneElement(t,R)})}},82658:function(e,t,n){var r=n(56666),o=n(31461),i=n(7896),u=n(96902),a=n(24463),c=n(73674),s=n(53068),f=n(2252),d=n(24248),v=n(29938),l=["className","component","disableGutters","variant"],m=(0,f.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,!n.disableGutters&&t.gutters,t[n.variant]]}})((function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({position:"relative",display:"flex",alignItems:"center"},!n.disableGutters&&(0,r.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),"dense"===n.variant&&{minHeight:48})}),(function(e){var t=e.theme;return"regular"===e.ownerState.variant&&t.mixins.toolbar})),p=u.forwardRef((function(e,t){var n=(0,s.Z)({props:e,name:"MuiToolbar"}),r=n.className,u=n.component,f=void 0===u?"div":u,p=n.disableGutters,g=void 0!==p&&p,b=n.variant,h=void 0===b?"regular":b,Z=(0,o.Z)(n,l),E=(0,i.Z)({},n,{component:f,disableGutters:g,variant:h}),w=function(e){var t=e.classes,n={root:["root",!e.disableGutters&&"gutters",e.variant]};return(0,c.Z)(n,d.N,t)}(E);return(0,v.jsx)(m,(0,i.Z)({as:f,className:(0,a.default)(w.root,r),ref:t,ownerState:E},Z))}));t.Z=p},24248:function(e,t,n){n.d(t,{N:function(){return i}});var r=n(74732),o=n(61235);function i(e){return(0,o.Z)("MuiToolbar",e)}var u=(0,r.Z)("MuiToolbar",["root","gutters","regular","dense"]);t.Z=u}}]);
//# sourceMappingURL=6921.3eacd3bf.chunk.js.map