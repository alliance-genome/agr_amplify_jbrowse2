"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[1223],{11223:function(e,n,o){o.r(n),o.d(n,{default:function(){return N},getRatingUtilityClass:function(){return S},ratingClasses:function(){return A}});var i=o(96234),t=o(56666),a=o(31461),l=o(7896),r=o(30969),c=o(81856),s=o(72055),u=o(26540),d=o(73376),v=o(99853),p=o(41806),f=o(61506),m=o(46827),h=o(63970),y=o(12104),g=o(37574),b=(0,y.Z)((0,g.jsx)("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),Z=(0,y.Z)((0,g.jsx)("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder"),x=o(2441),F=o(62221),C=o(2975);function S(e){return(0,C.Z)("MuiRating",e)}var A=(0,o(62746).Z)("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]),w=["value"],R=["className","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","highlightSelectedOnly","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"];function V(e,n){if(null==e)return e;var o=Math.round(e/n)*n;return Number(o.toFixed(function(e){var n=e.toString().split(".")[1];return n?n.length:0}(n)))}var L=(0,F.ZP)("span",{name:"MuiRating",slot:"Root",overridesResolver:function(e,n){var o=e.ownerState;return[(0,t.Z)({},"& .".concat(A.visuallyHidden),n.visuallyHidden),n.root,n["size".concat((0,v.Z)(o.size))],o.readOnly&&n.readOnly]}})((function(e){var n,o=e.theme,i=e.ownerState;return(0,l.Z)((n={display:"inline-flex",position:"relative",fontSize:o.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",WebkitTapHighlightColor:"transparent"},(0,t.Z)(n,"&.".concat(A.disabled),{opacity:(o.vars||o).palette.action.disabledOpacity,pointerEvents:"none"}),(0,t.Z)(n,"&.".concat(A.focusVisible," .").concat(A.iconActive),{outline:"1px solid #999"}),(0,t.Z)(n,"& .".concat(A.visuallyHidden),s.Z),n),"small"===i.size&&{fontSize:o.typography.pxToRem(18)},"large"===i.size&&{fontSize:o.typography.pxToRem(30)},i.readOnly&&{pointerEvents:"none"})})),M=(0,F.ZP)("label",{name:"MuiRating",slot:"Label",overridesResolver:function(e,n){return n.label}})((function(e){var n=e.ownerState;return(0,l.Z)({cursor:"inherit"},n.emptyValueFocused&&{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"})})),z=(0,F.ZP)("span",{name:"MuiRating",slot:"Icon",overridesResolver:function(e,n){var o=e.ownerState;return[n.icon,o.iconEmpty&&n.iconEmpty,o.iconFilled&&n.iconFilled,o.iconHover&&n.iconHover,o.iconFocus&&n.iconFocus,o.iconActive&&n.iconActive]}})((function(e){var n=e.theme,o=e.ownerState;return(0,l.Z)({display:"flex",transition:n.transitions.create("transform",{duration:n.transitions.duration.shortest}),pointerEvents:"none"},o.iconActive&&{transform:"scale(1.2)"},o.iconEmpty&&{color:(n.vars||n).palette.action.disabled})})),j=(0,F.ZP)("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:function(e){return(0,F.Dz)(e)&&"iconActive"!==e},overridesResolver:function(e,n){var o=e.iconActive;return[n.decimal,o&&n.iconActive]}})((function(e){var n=e.iconActive;return(0,l.Z)({position:"relative"},n&&{transform:"scale(1.2)"})}));function H(e){var n=(0,a.Z)(e,w);return(0,g.jsx)("span",(0,l.Z)({},n))}function E(e){var n=e.classes,o=e.disabled,i=e.emptyIcon,t=e.focus,a=e.getLabelText,s=e.highlightSelectedOnly,u=e.hover,d=e.icon,v=e.IconContainerComponent,f=e.isActive,m=e.itemValue,h=e.labelProps,y=e.name,b=e.onBlur,Z=e.onChange,x=e.onClick,F=e.onFocus,C=e.readOnly,S=e.ownerState,A=e.ratingValue,w=s?m===A:m<=A,R=m<=u,V=m<=t,L=m===e.ratingValueRounded,j=(0,p.Z)(),H=(0,g.jsx)(z,{as:v,value:m,className:(0,c.default)(n.icon,w?n.iconFilled:n.iconEmpty,R&&n.iconHover,V&&n.iconFocus,f&&n.iconActive),ownerState:(0,l.Z)({},S,{iconEmpty:!w,iconFilled:w,iconHover:R,iconFocus:V,iconActive:f}),children:i&&!w?i:d});return C?(0,g.jsx)("span",(0,l.Z)({},h,{children:H})):(0,g.jsxs)(r.Fragment,{children:[(0,g.jsxs)(M,(0,l.Z)({ownerState:(0,l.Z)({},S,{emptyValueFocused:void 0}),htmlFor:j},h,{children:[H,(0,g.jsx)("span",{className:n.visuallyHidden,children:a(m)})]})),(0,g.jsx)("input",{className:n.visuallyHidden,onFocus:F,onBlur:b,onChange:Z,onClick:x,disabled:o,value:m,id:j,type:"radio",name:y,checked:L})]})}var O=(0,g.jsx)(b,{fontSize:"inherit"}),T=(0,g.jsx)(Z,{fontSize:"inherit"});function I(e){return"".concat(e," Star").concat(1!==e?"s":"")}var N=r.forwardRef((function(e,n){var o=(0,x.Z)({name:"MuiRating",props:e}),t=o.className,s=o.defaultValue,y=void 0===s?null:s,b=o.disabled,Z=void 0!==b&&b,F=o.emptyIcon,C=void 0===F?T:F,A=o.emptyLabelText,w=void 0===A?"Empty":A,z=o.getLabelText,N=void 0===z?I:z,k=o.highlightSelectedOnly,B=void 0!==k&&k,P=o.icon,_=void 0===P?O:P,X=o.IconContainerComponent,D=void 0===X?H:X,U=o.max,W=void 0===U?5:U,Y=o.name,q=o.onChange,G=o.onChangeActive,J=o.onMouseLeave,K=o.onMouseMove,Q=o.precision,$=void 0===Q?1:Q,ee=o.readOnly,ne=void 0!==ee&&ee,oe=o.size,ie=void 0===oe?"medium":oe,te=o.value,ae=(0,a.Z)(o,R),le=(0,p.Z)(Y),re=(0,f.Z)({controlled:te,default:y,name:"Rating"}),ce=(0,i.Z)(re,2),se=ce[0],ue=ce[1],de=V(se,$),ve=(0,d.Z)(),pe=r.useState({hover:-1,focus:-1}),fe=(0,i.Z)(pe,2),me=fe[0],he=me.hover,ye=me.focus,ge=fe[1],be=de;-1!==he&&(be=he),-1!==ye&&(be=ye);var Ze=(0,m.Z)(),xe=Ze.isFocusVisibleRef,Fe=Ze.onBlur,Ce=Ze.onFocus,Se=Ze.ref,Ae=r.useState(!1),we=(0,i.Z)(Ae,2),Re=we[0],Ve=we[1],Le=r.useRef(),Me=(0,h.Z)(Se,Le,n),ze=function(e){var n=""===e.target.value?null:parseFloat(e.target.value);-1!==he&&(n=he),ue(n),q&&q(e,n)},je=function(e){0===e.clientX&&0===e.clientY||(ge({hover:-1,focus:-1}),ue(null),q&&parseFloat(e.target.value)===de&&q(e,null))},He=function(e){Ce(e),!0===xe.current&&Ve(!0);var n=parseFloat(e.target.value);ge((function(e){return{hover:e.hover,focus:n}}))},Ee=function(e){if(-1===he){Fe(e),!1===xe.current&&Ve(!1);ge((function(e){return{hover:e.hover,focus:-1}}))}},Oe=r.useState(!1),Te=(0,i.Z)(Oe,2),Ie=Te[0],Ne=Te[1],ke=(0,l.Z)({},o,{defaultValue:y,disabled:Z,emptyIcon:C,emptyLabelText:w,emptyValueFocused:Ie,focusVisible:Re,getLabelText:N,icon:_,IconContainerComponent:D,max:W,precision:$,readOnly:ne,size:ie}),Be=function(e){var n=e.classes,o=e.size,i=e.readOnly,t=e.disabled,a=e.emptyValueFocused,l=e.focusVisible,r={root:["root","size".concat((0,v.Z)(o)),t&&"disabled",l&&"focusVisible",i&&"readyOnly"],label:["label","pristine"],labelEmptyValue:[a&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return(0,u.Z)(r,S,n)}(ke);return(0,g.jsxs)(L,(0,l.Z)({ref:Me,onMouseMove:function(e){K&&K(e);var n,o=Le.current,i=o.getBoundingClientRect(),t=i.right,a=i.left,l=o.firstChild.getBoundingClientRect().width;n="rtl"===ve.direction?(t-e.clientX)/(l*W):(e.clientX-a)/(l*W);var r=V(W*n+$/2,$);r=function(e,n,o){return e<n?n:e>o?o:e}(r,$,W),ge((function(e){return e.hover===r&&e.focus===r?e:{hover:r,focus:r}})),Ve(!1),G&&he!==r&&G(e,r)},onMouseLeave:function(e){J&&J(e);ge({hover:-1,focus:-1}),G&&-1!==he&&G(e,-1)},className:(0,c.default)(Be.root,t),ownerState:ke,role:ne?"img":null,"aria-label":ne?N(be):null},ae,{children:[Array.from(new Array(W)).map((function(e,n){var o=n+1,i={classes:Be,disabled:Z,emptyIcon:C,focus:ye,getLabelText:N,highlightSelectedOnly:B,hover:he,icon:_,IconContainerComponent:D,name:le,onBlur:Ee,onChange:ze,onClick:je,onFocus:He,ratingValue:be,ratingValueRounded:de,readOnly:ne,ownerState:ke},t=o===Math.ceil(be)&&(-1!==he||-1!==ye);if($<1){var a=Array.from(new Array(1/$));return(0,g.jsx)(j,{className:(0,c.default)(Be.decimal,t&&Be.iconActive),ownerState:ke,iconActive:t,children:a.map((function(e,n){var t=V(o-1+(n+1)*$,$);return(0,g.jsx)(E,(0,l.Z)({},i,{isActive:!1,itemValue:t,labelProps:{style:a.length-1===n?{}:{width:t===be?"".concat((n+1)*$*100,"%"):"0%",overflow:"hidden",position:"absolute"}}}),t)}))},o)}return(0,g.jsx)(E,(0,l.Z)({},i,{isActive:t,itemValue:o}),o)})),!ne&&!Z&&(0,g.jsxs)(M,{className:(0,c.default)(Be.label,Be.labelEmptyValue),ownerState:ke,children:[(0,g.jsx)("input",{className:Be.visuallyHidden,value:"",id:"".concat(le,"-empty"),type:"radio",name:le,checked:null==de,onFocus:function(){return Ne(!0)},onBlur:function(){return Ne(!1)},onChange:ze}),(0,g.jsx)("span",{className:Be.visuallyHidden,children:w})]})]}))}))}}]);
//# sourceMappingURL=1223.2ef9dec5.chunk.js.map