"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[806],{59748:function(e,t,n){var r=n(56666),o=n(31461),a=n(7896),i=n(96902),l=n(24463),c=n(22157),s=n(73674),d=n(52449),u=n(31085),p=n(50301),v=n(62158),f=n(32503),m=n(4606),Z=n(92300),h=n(29938),b=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],x=(0,d.ZP)("div",{name:"MuiCollapse",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.orientation],"entered"===n.state&&t.entered,"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&t.hidden]}})((function(e){var t=e.theme,n=e.ownerState;return(0,a.Z)({height:0,overflow:"hidden",transition:t.transitions.create("height")},"horizontal"===n.orientation&&{height:"auto",width:0,transition:t.transitions.create("width")},"entered"===n.state&&(0,a.Z)({height:"auto",overflow:"visible"},"horizontal"===n.orientation&&{width:"auto"}),"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&{visibility:"hidden"})})),S=(0,d.ZP)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:function(e,t){return t.wrapper}})((function(e){var t=e.ownerState;return(0,a.Z)({display:"flex",width:"100%"},"horizontal"===t.orientation&&{width:"auto",height:"100%"})})),w=(0,d.ZP)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:function(e,t){return t.wrapperInner}})((function(e){var t=e.ownerState;return(0,a.Z)({width:"100%"},"horizontal"===t.orientation&&{width:"auto",height:"100%"})})),L=i.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiCollapse"}),d=n.addEndListener,L=n.children,g=n.className,y=n.collapsedSize,C=void 0===y?"0px":y,M=n.component,R=n.easing,N=n.in,j=n.onEnter,z=n.onEntered,P=n.onEntering,E=n.onExit,I=n.onExited,T=n.onExiting,D=n.orientation,k=void 0===D?"vertical":D,W=n.style,A=n.timeout,H=void 0===A?p.x9.standard:A,F=n.TransitionComponent,_=void 0===F?c.ZP:F,B=(0,o.Z)(n,b),$=(0,a.Z)({},n,{orientation:k,collapsedSize:C}),O=function(e){var t=e.orientation,n=e.classes,r={root:["root","".concat(t)],entered:["entered"],hidden:["hidden"],wrapper:["wrapper","".concat(t)],wrapperInner:["wrapperInner","".concat(t)]};return(0,s.Z)(r,Z.d,n)}($),V=(0,f.Z)(),q=i.useRef(),G=i.useRef(null),J=i.useRef(),K="number"===typeof C?"".concat(C,"px"):C,Q="horizontal"===k,U=Q?"width":"height";i.useEffect((function(){return function(){clearTimeout(q.current)}}),[]);var X=i.useRef(null),Y=(0,m.Z)(t,X),ee=function(e){return function(t){if(e){var n=X.current;void 0===t?e(n):e(n,t)}}},te=function(){return G.current?G.current[Q?"clientWidth":"clientHeight"]:0},ne=ee((function(e,t){G.current&&Q&&(G.current.style.position="absolute"),e.style[U]=K,j&&j(e,t)})),re=ee((function(e,t){var n=te();G.current&&Q&&(G.current.style.position="");var r=(0,v.C)({style:W,timeout:H,easing:R},{mode:"enter"}),o=r.duration,a=r.easing;if("auto"===H){var i=V.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(i,"ms"),J.current=i}else e.style.transitionDuration="string"===typeof o?o:"".concat(o,"ms");e.style[U]="".concat(n,"px"),e.style.transitionTimingFunction=a,P&&P(e,t)})),oe=ee((function(e,t){e.style[U]="auto",z&&z(e,t)})),ae=ee((function(e){e.style[U]="".concat(te(),"px"),E&&E(e)})),ie=ee(I),le=ee((function(e){var t=te(),n=(0,v.C)({style:W,timeout:H,easing:R},{mode:"exit"}),r=n.duration,o=n.easing;if("auto"===H){var a=V.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(a,"ms"),J.current=a}else e.style.transitionDuration="string"===typeof r?r:"".concat(r,"ms");e.style[U]=K,e.style.transitionTimingFunction=o,T&&T(e)}));return(0,h.jsx)(_,(0,a.Z)({in:N,onEnter:ne,onEntered:oe,onEntering:re,onExit:ae,onExited:ie,onExiting:le,addEndListener:function(e){"auto"===H&&(q.current=setTimeout(e,J.current||0)),d&&d(X.current,e)},nodeRef:X,timeout:"auto"===H?null:H},B,{children:function(e,t){return(0,h.jsx)(x,(0,a.Z)({as:M,className:(0,l.default)(O.root,g,{entered:O.entered,exited:!N&&"0px"===K&&O.hidden}[e]),style:(0,a.Z)((0,r.Z)({},Q?"minWidth":"minHeight",K),W),ownerState:(0,a.Z)({},$,{state:e}),ref:Y},t,{children:(0,h.jsx)(S,{ownerState:(0,a.Z)({},$,{state:e}),className:O.wrapper,ref:G,children:(0,h.jsx)(w,{ownerState:(0,a.Z)({},$,{state:e}),className:O.wrapperInner,children:L})})}))}}))}));L.muiSupportAuto=!0,t.Z=L},92300:function(e,t,n){n.d(t,{d:function(){return a}});var r=n(74732),o=n(61235);function a(e){return(0,o.Z)("MuiCollapse",e)}var i=(0,r.Z)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);t.Z=i},48182:function(e,t,n){var r=n(31461),o=n(7896),a=n(96902),i=n(24463),l=n(73674),c=n(69889),s=n(8339),d=n(31085),u=n(52449),p=n(24633),v=n(29938),f=["active","children","className","component","completed","disabled","expanded","index","last"],m=(0,u.ZP)("div",{name:"MuiStep",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.orientation],n.alternativeLabel&&t.alternativeLabel,n.completed&&t.completed]}})((function(e){var t=e.ownerState;return(0,o.Z)({},"horizontal"===t.orientation&&{paddingLeft:8,paddingRight:8},t.alternativeLabel&&{flex:1,position:"relative"})})),Z=a.forwardRef((function(e,t){var n=(0,d.Z)({props:e,name:"MuiStep"}),u=n.active,Z=n.children,h=n.className,b=n.component,x=void 0===b?"div":b,S=n.completed,w=n.disabled,L=n.expanded,g=void 0!==L&&L,y=n.index,C=n.last,M=(0,r.Z)(n,f),R=a.useContext(c.Z),N=R.activeStep,j=R.connector,z=R.alternativeLabel,P=R.orientation,E=R.nonLinear,I=void 0!==u&&u,T=void 0!==S&&S,D=void 0!==w&&w;N===y?I=void 0===u||u:!E&&N>y?T=void 0===S||S:!E&&N<y&&(D=void 0===w||w);var k=a.useMemo((function(){return{index:y,last:C,expanded:g,icon:y+1,active:I,completed:T,disabled:D}}),[y,C,g,I,T,D]),W=(0,o.Z)({},n,{active:I,orientation:P,alternativeLabel:z,completed:T,disabled:D,expanded:g,component:x}),A=function(e){var t=e.classes,n={root:["root",e.orientation,e.alternativeLabel&&"alternativeLabel",e.completed&&"completed"]};return(0,l.Z)(n,p.$,t)}(W),H=(0,v.jsxs)(m,(0,o.Z)({as:x,className:(0,i.default)(A.root,h),ref:t,ownerState:W},M,{children:[j&&z&&0!==y?j:null,Z]}));return(0,v.jsx)(s.Z.Provider,{value:k,children:j&&!z&&0!==y?(0,v.jsxs)(a.Fragment,{children:[j,H]}):H})}));t.Z=Z},8339:function(e,t,n){n.d(t,{s:function(){return a}});var r=n(96902),o=r.createContext({});function a(){return r.useContext(o)}t.Z=o},24633:function(e,t,n){n.d(t,{$:function(){return a}});var r=n(74732),o=n(61235);function a(e){return(0,o.Z)("MuiStep",e)}var i=(0,r.Z)("MuiStep",["root","horizontal","vertical","alternativeLabel","completed"]);t.Z=i},20878:function(e,t,n){var r=n(31461),o=n(7896),a=n(96902),i=n(24463),l=n(73674),c=n(58475),s=n(52449),d=n(31085),u=n(69889),p=n(8339),v=n(49004),f=n(29938),m=["className"],Z=(0,s.ZP)("div",{name:"MuiStepConnector",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.orientation],n.alternativeLabel&&t.alternativeLabel,n.completed&&t.completed]}})((function(e){var t=e.ownerState;return(0,o.Z)({flex:"1 1 auto"},"vertical"===t.orientation&&{marginLeft:12},t.alternativeLabel&&{position:"absolute",top:12,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"})})),h=(0,s.ZP)("span",{name:"MuiStepConnector",slot:"Line",overridesResolver:function(e,t){var n=e.ownerState;return[t.line,t["line".concat((0,c.Z)(n.orientation))]]}})((function(e){var t=e.ownerState,n=e.theme,r="light"===n.palette.mode?n.palette.grey[400]:n.palette.grey[600];return(0,o.Z)({display:"block",borderColor:n.vars?n.vars.palette.StepConnector.border:r},"horizontal"===t.orientation&&{borderTopStyle:"solid",borderTopWidth:1},"vertical"===t.orientation&&{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24})})),b=a.forwardRef((function(e,t){var n=(0,d.Z)({props:e,name:"MuiStepConnector"}),s=n.className,b=(0,r.Z)(n,m),x=a.useContext(u.Z),S=x.alternativeLabel,w=x.orientation,L=void 0===w?"horizontal":w,g=a.useContext(p.Z),y=g.active,C=g.disabled,M=g.completed,R=(0,o.Z)({},n,{alternativeLabel:S,orientation:L,active:y,completed:M,disabled:C}),N=function(e){var t=e.classes,n=e.orientation,r={root:["root",n,e.alternativeLabel&&"alternativeLabel",e.active&&"active",e.completed&&"completed",e.disabled&&"disabled"],line:["line","line".concat((0,c.Z)(n))]};return(0,l.Z)(r,v.M,t)}(R);return(0,f.jsx)(Z,(0,o.Z)({className:(0,i.default)(N.root,s),ref:t,ownerState:R},b,{children:(0,f.jsx)(h,{className:N.line,ownerState:R})}))}));t.Z=b},49004:function(e,t,n){n.d(t,{M:function(){return a}});var r=n(74732),o=n(61235);function a(e){return(0,o.Z)("MuiStepConnector",e)}var i=(0,r.Z)("MuiStepConnector",["root","horizontal","vertical","alternativeLabel","active","completed","disabled","line","lineHorizontal","lineVertical"]);t.Z=i},84051:function(e,t,n){n.d(t,{Z:function(){return S}});var r=n(31461),o=n(7896),a=n(96902),i=n(24463),l=n(73674),c=n(52449),s=n(31085),d=n(59748),u=n(69889),p=n(8339),v=n(74732),f=n(61235);function m(e){return(0,f.Z)("MuiStepContent",e)}(0,v.Z)("MuiStepContent",["root","last","transition"]);var Z=n(29938),h=["children","className","TransitionComponent","transitionDuration","TransitionProps"],b=(0,c.ZP)("div",{name:"MuiStepContent",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.last&&t.last]}})((function(e){var t=e.ownerState,n=e.theme;return(0,o.Z)({marginLeft:12,paddingLeft:20,paddingRight:8,borderLeft:n.vars?"1px solid ".concat(n.vars.palette.StepContent.border):"1px solid ".concat("light"===n.palette.mode?n.palette.grey[400]:n.palette.grey[600])},t.last&&{borderLeft:"none"})})),x=(0,c.ZP)(d.Z,{name:"MuiStepContent",slot:"Transition",overridesResolver:function(e,t){return t.transition}})({}),S=a.forwardRef((function(e,t){var n=(0,s.Z)({props:e,name:"MuiStepContent"}),c=n.children,v=n.className,f=n.TransitionComponent,S=void 0===f?d.Z:f,w=n.transitionDuration,L=void 0===w?"auto":w,g=n.TransitionProps,y=(0,r.Z)(n,h),C=(a.useContext(u.Z).orientation,a.useContext(p.Z)),M=C.active,R=C.last,N=C.expanded,j=(0,o.Z)({},n,{last:R}),z=function(e){var t=e.classes,n={root:["root",e.last&&"last"],transition:["transition"]};return(0,l.Z)(n,m,t)}(j);var P=L;return"auto"!==L||S.muiSupportAuto||(P=void 0),(0,Z.jsx)(b,(0,o.Z)({className:(0,i.default)(z.root,v),ref:t,ownerState:j},y,{children:(0,Z.jsx)(x,(0,o.Z)({as:S,in:M||N,className:z.transition,ownerState:j,timeout:P,unmountOnExit:!0},g,{children:c}))}))}))},65065:function(e,t,n){n.d(t,{Z:function(){return w}});var r,o=n(56666),a=n(7896),i=n(31461),l=n(96902),c=n(24463),s=n(73674),d=n(52449),u=n(31085),p=n(7649),v=n(29938),f=(0,p.Z)((0,v.jsx)("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),m=(0,p.Z)((0,v.jsx)("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning"),Z=n(3148),h=n(95323),b=["active","className","completed","error","icon"],x=(0,d.ZP)(Z.Z,{name:"MuiStepIcon",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){var t,n=e.theme;return t={display:"block",transition:n.transitions.create("color",{duration:n.transitions.duration.shortest}),color:(n.vars||n).palette.text.disabled},(0,o.Z)(t,"&.".concat(h.Z.completed),{color:(n.vars||n).palette.primary.main}),(0,o.Z)(t,"&.".concat(h.Z.active),{color:(n.vars||n).palette.primary.main}),(0,o.Z)(t,"&.".concat(h.Z.error),{color:(n.vars||n).palette.error.main}),t})),S=(0,d.ZP)("text",{name:"MuiStepIcon",slot:"Text",overridesResolver:function(e,t){return t.text}})((function(e){var t=e.theme;return{fill:(t.vars||t).palette.primary.contrastText,fontSize:t.typography.caption.fontSize,fontFamily:t.typography.fontFamily}})),w=l.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiStepIcon"}),o=n.active,l=void 0!==o&&o,d=n.className,p=n.completed,Z=void 0!==p&&p,w=n.error,L=void 0!==w&&w,g=n.icon,y=(0,i.Z)(n,b),C=(0,a.Z)({},n,{active:l,completed:Z,error:L}),M=function(e){var t=e.classes,n={root:["root",e.active&&"active",e.completed&&"completed",e.error&&"error"],text:["text"]};return(0,s.Z)(n,h.M,t)}(C);if("number"===typeof g||"string"===typeof g){var R=(0,c.default)(d,M.root);return L?(0,v.jsx)(x,(0,a.Z)({as:m,className:R,ref:t,ownerState:C},y)):Z?(0,v.jsx)(x,(0,a.Z)({as:f,className:R,ref:t,ownerState:C},y)):(0,v.jsxs)(x,(0,a.Z)({className:R,ref:t,ownerState:C},y,{children:[r||(r=(0,v.jsx)("circle",{cx:"12",cy:"12",r:"12"})),(0,v.jsx)(S,{className:M.text,x:"12",y:"12",textAnchor:"middle",dominantBaseline:"central",ownerState:C,children:g})]}))}return g}))},95323:function(e,t,n){n.d(t,{M:function(){return a}});var r=n(74732),o=n(61235);function a(e){return(0,o.Z)("MuiStepIcon",e)}var i=(0,r.Z)("MuiStepIcon",["root","active","completed","error","text"]);t.Z=i},69113:function(e,t,n){var r=n(56666),o=n(31461),a=n(7896),i=n(96902),l=n(24463),c=n(73674),s=n(52449),d=n(31085),u=n(65065),p=n(69889),v=n(8339),f=n(75720),m=n(29938),Z=["children","className","componentsProps","error","icon","optional","slotProps","StepIconComponent","StepIconProps"],h=(0,s.ZP)("span",{name:"MuiStepLabel",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.orientation]]}})((function(e){var t,n=e.ownerState;return(0,a.Z)((t={display:"flex",alignItems:"center"},(0,r.Z)(t,"&.".concat(f.Z.alternativeLabel),{flexDirection:"column"}),(0,r.Z)(t,"&.".concat(f.Z.disabled),{cursor:"default"}),t),"vertical"===n.orientation&&{textAlign:"left",padding:"8px 0"})})),b=(0,s.ZP)("span",{name:"MuiStepLabel",slot:"Label",overridesResolver:function(e,t){return t.label}})((function(e){var t,n=e.theme;return(0,a.Z)({},n.typography.body2,(t={display:"block",transition:n.transitions.create("color",{duration:n.transitions.duration.shortest})},(0,r.Z)(t,"&.".concat(f.Z.active),{color:(n.vars||n).palette.text.primary,fontWeight:500}),(0,r.Z)(t,"&.".concat(f.Z.completed),{color:(n.vars||n).palette.text.primary,fontWeight:500}),(0,r.Z)(t,"&.".concat(f.Z.alternativeLabel),{marginTop:16}),(0,r.Z)(t,"&.".concat(f.Z.error),{color:(n.vars||n).palette.error.main}),t))})),x=(0,s.ZP)("span",{name:"MuiStepLabel",slot:"IconContainer",overridesResolver:function(e,t){return t.iconContainer}})((function(){return(0,r.Z)({flexShrink:0,display:"flex",paddingRight:8},"&.".concat(f.Z.alternativeLabel),{paddingRight:0})})),S=(0,s.ZP)("span",{name:"MuiStepLabel",slot:"LabelContainer",overridesResolver:function(e,t){return t.labelContainer}})((function(e){var t=e.theme;return(0,r.Z)({width:"100%",color:(t.vars||t).palette.text.secondary},"&.".concat(f.Z.alternativeLabel),{textAlign:"center"})})),w=i.forwardRef((function(e,t){var n,r=(0,d.Z)({props:e,name:"MuiStepLabel"}),s=r.children,w=r.className,L=r.componentsProps,g=void 0===L?{}:L,y=r.error,C=void 0!==y&&y,M=r.icon,R=r.optional,N=r.slotProps,j=void 0===N?{}:N,z=r.StepIconComponent,P=r.StepIconProps,E=(0,o.Z)(r,Z),I=i.useContext(p.Z),T=I.alternativeLabel,D=I.orientation,k=i.useContext(v.Z),W=k.active,A=k.disabled,H=k.completed,F=k.icon,_=M||F,B=z;_&&!B&&(B=u.Z);var $=(0,a.Z)({},r,{active:W,alternativeLabel:T,completed:H,disabled:A,error:C,orientation:D}),O=function(e){var t=e.classes,n=e.orientation,r=e.active,o=e.completed,a=e.error,i=e.disabled,l=e.alternativeLabel,s={root:["root",n,a&&"error",i&&"disabled",l&&"alternativeLabel"],label:["label",r&&"active",o&&"completed",a&&"error",i&&"disabled",l&&"alternativeLabel"],iconContainer:["iconContainer",r&&"active",o&&"completed",a&&"error",i&&"disabled",l&&"alternativeLabel"],labelContainer:["labelContainer",l&&"alternativeLabel"]};return(0,c.Z)(s,f.H,t)}($),V=null!=(n=j.label)?n:g.label;return(0,m.jsxs)(h,(0,a.Z)({className:(0,l.default)(O.root,w),ref:t,ownerState:$},E,{children:[_||B?(0,m.jsx)(x,{className:O.iconContainer,ownerState:$,children:(0,m.jsx)(B,(0,a.Z)({completed:H,active:W,error:C,icon:_},P))}):null,(0,m.jsxs)(S,{className:O.labelContainer,ownerState:$,children:[s?(0,m.jsx)(b,(0,a.Z)({ownerState:$},V,{className:(0,l.default)(O.label,null==V?void 0:V.className),children:s})):null,R]})]}))}));w.muiName="StepLabel",t.Z=w},75720:function(e,t,n){n.d(t,{H:function(){return a}});var r=n(74732),o=n(61235);function a(e){return(0,o.Z)("MuiStepLabel",e)}var i=(0,r.Z)("MuiStepLabel",["root","horizontal","vertical","label","active","completed","error","disabled","iconContainer","alternativeLabel","labelContainer"]);t.Z=i},79745:function(e,t,n){var r=n(31461),o=n(7896),a=n(96902),i=n(24463),l=n(73674),c=n(31085),s=n(52449),d=n(92285),u=n(20878),p=n(69889),v=n(29938),f=["activeStep","alternativeLabel","children","className","component","connector","nonLinear","orientation"],m=(0,s.ZP)("div",{name:"MuiStepper",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.orientation],n.alternativeLabel&&t.alternativeLabel]}})((function(e){var t=e.ownerState;return(0,o.Z)({display:"flex"},"horizontal"===t.orientation&&{flexDirection:"row",alignItems:"center"},"vertical"===t.orientation&&{flexDirection:"column"},t.alternativeLabel&&{alignItems:"flex-start"})})),Z=(0,v.jsx)(u.Z,{}),h=a.forwardRef((function(e,t){var n=(0,c.Z)({props:e,name:"MuiStepper"}),s=n.activeStep,u=void 0===s?0:s,h=n.alternativeLabel,b=void 0!==h&&h,x=n.children,S=n.className,w=n.component,L=void 0===w?"div":w,g=n.connector,y=void 0===g?Z:g,C=n.nonLinear,M=void 0!==C&&C,R=n.orientation,N=void 0===R?"horizontal":R,j=(0,r.Z)(n,f),z=(0,o.Z)({},n,{alternativeLabel:b,orientation:N,component:L}),P=function(e){var t=e.orientation,n=e.alternativeLabel,r=e.classes,o={root:["root",t,n&&"alternativeLabel"]};return(0,l.Z)(o,d.c,r)}(z),E=a.Children.toArray(x).filter(Boolean),I=E.map((function(e,t){return a.cloneElement(e,(0,o.Z)({index:t,last:t+1===E.length},e.props))})),T=a.useMemo((function(){return{activeStep:u,alternativeLabel:b,connector:y,nonLinear:M,orientation:N}}),[u,b,y,M,N]);return(0,v.jsx)(p.Z.Provider,{value:T,children:(0,v.jsx)(m,(0,o.Z)({as:L,ownerState:z,className:(0,i.default)(P.root,S),ref:t},j,{children:I}))})}));t.Z=h},69889:function(e,t,n){n.d(t,{s:function(){return a}});var r=n(96902),o=r.createContext({});function a(){return r.useContext(o)}t.Z=o},92285:function(e,t,n){n.d(t,{c:function(){return a}});var r=n(74732),o=n(61235);function a(e){return(0,o.Z)("MuiStepper",e)}var i=(0,r.Z)("MuiStepper",["root","horizontal","vertical","alternativeLabel"]);t.Z=i}}]);
//# sourceMappingURL=806.ed5a76e4.chunk.js.map