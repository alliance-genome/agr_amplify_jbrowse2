,b=r.disableGutters,g=void 0!==b&&b,p=r.variant,h=void 0===p?"regular":p,Z=(0,a.Z)(r,v),E=(0,i.Z)({},r,{component:f,disableGutters:g,variant:h}),w=function(e){var t=e.classes,r={root:["root",!e.disableGutters&&"gutters",e.variant]};return(0,s.Z)(r,l.N,t)}(E);return(0,d.jsx)(m,(0,i.Z)({as:f,className:(0,o.default)(w.root,n),ref:t,ownerState:E},Z))}));t.Z=b},24248:function(e,t,r){r.d(t,{N:function(){return i}});var n=r(74732),a=r(61235);function i(e){return(0,a.Z)("MuiToolbar",e)}var u=(0,n.Z)("MuiToolbar",["root","gutters","regular","dense"]);t.Z=u}}]);
//# sourceMappingURL=3168.0570e77d.chunk.js.map"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[3168,2836],{55303:function(e,t,r){r.r(t);var n=r(6880),a=r(4782),i=(r(96902),r(96251)),u=r(29938),o=(0,a.observer)((function(e){var t=e.model,r=JSON.parse(JSON.stringify(t.featureData)),a=r.feature1,o=r.feature2;return(0,u.jsxs)(n.Z,{"data-testid":"alignment-side-drawer",children:[(0,u.jsx)(i.BaseCoreDetails,{title:"Feature 1",feature:a}),(0,u.jsx)(i.BaseCoreDetails,{title:"Feature 2",feature:o}),(0,u.jsx)(i.BaseAttributes,{title:"Feature 1 attributes",feature:a}),(0,u.jsx)(i.BaseAttributes,{title:"Feature 2 attributes",feature:o})]})}));t.default=o},99051:function(e,t,r){var n=r(96902),a=r(55006),i=r(3677),u=r(92745),o=r(29938);function s(e){return e.substring(2).toLowerCase()}t.Z=function(e){var t=e.children,r=e.disableReactTree,c=void 0!==r&&r,f=e.mouseEvent,l=void 0===f?"onClick":f,d=e.onClickAway,v=e.touchEvent,m=void 0===v?"onTouchEnd":v,b=n.useRef(!1),g=n.useRef(null),p=n.useRef(!1),h=n.useRef(!1);n.useEffect((function(){return setTimeout((function(){p.current=!0}),0),function(){p.current=!1}}),[]);var Z=(0,a.Z)(t.ref,g),E=(0,i.Z)((function(e){var t=h.current;h.current=!1;var r=(0,u.Z)(g.current);!p.current||!g.current||"clientX"in e&&function(e,t){return t.documentElement.clientWidth<e.clientX||t.documentElement.clientHeight<e.clientY}(e,r)||(b.current?b.current=!1:(e.composedPath?e.composedPath().indexOf(g.current)>-1:!r.documentElement.contains(e.target)||g.current.contains(e.target))||!c&&t||d(e))})),w=function(e){return function(r){h.current=!0;var n=t.props[e];n&&n(r)}},x={ref:Z};return!1!==m&&(x[m]=w(m)),n.useEffect((function(){if(!1!==m){var e=s(m),t=(0,u.Z)(g.current),r=function(){b.current=!0};return t.addEventListener(e,E),t.addEventListener("touchmove",r),function(){t.removeEventListener(e,E),t.removeEventListener("touchmove",r)}}}),[E,m]),!1!==l&&(x[l]=w(l)),n.useEffect((function(){if(!1!==l){var e=s(l),t=(0,u.Z)(g.current);return t.addEventListener(e,E),function(){t.removeEventListener(e,E)}}}),[E,l]),(0,o.jsx)(n.Fragment,{children:n.cloneElement(t,x)})}},82658:function(e,t,r){var n=r(56666),a=r(31461),i=r(7896),u=r(96902),o=r(24463),s=r(73674),c=r(53068),f=r(2252),l=r(24248),d=r(29938),v=["className","component","disableGutters","variant"],m=(0,f.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,!r.disableGutters&&t.gutters,t[r.variant]]}})((function(e){var t=e.theme,r=e.ownerState;return(0,i.Z)({position:"relative",display:"flex",alignItems:"center"},!r.disableGutters&&(0,n.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),"dense"===r.variant&&{minHeight:48})}),(function(e){var t=e.theme;return"regular"===e.ownerState.variant&&t.mixins.toolbar})),b=u.forwardRef((function(e,t){var r=(0,c.Z)({props:e,name:"MuiToolbar"}),n=r.className,u=r.component,f=void 0===u?"div":u