"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[3927],{80691:function(e,t,n){n.d(t,{Z:function(){return S}});var r=n(56666),o=n(31461),a=n(7896),i=n(96902),c=n(24463),s=n(57277),l=n(61235),u=n(73674),d=n(86655),f=n(8044),h=n(91221),v=n(29938),m=["className","component","disableGutters","fixed","maxWidth","classes"],g=(0,h.Z)(),p=(0,f.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,s.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),b=function(e){return(0,d.Z)({props:e,name:"MuiContainer",defaultTheme:g})};var Z=n(70378),x=n(2252),C=n(53068),k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,n=void 0===t?p:t,d=e.useThemeProps,f=void 0===d?b:d,h=e.componentName,g=void 0===h?"MuiContainer":h,Z=n((function(e){var t=e.theme,n=e.ownerState;return(0,a.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!n.disableGutters&&(0,r.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,n){var r=n,o=t.breakpoints.values[r];return 0!==o&&(e[t.breakpoints.up(r)]={maxWidth:"".concat(o).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,n=e.ownerState;return(0,a.Z)({},"xs"===n.maxWidth&&(0,r.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),n.maxWidth&&"xs"!==n.maxWidth&&(0,r.Z)({},t.breakpoints.up(n.maxWidth),{maxWidth:"".concat(t.breakpoints.values[n.maxWidth]).concat(t.breakpoints.unit)}))})),x=i.forwardRef((function(e,t){var n=f(e),r=n.className,i=n.component,d=void 0===i?"div":i,h=n.disableGutters,p=void 0!==h&&h,b=n.fixed,x=void 0!==b&&b,C=n.maxWidth,k=void 0===C?"lg":C,S=(0,o.Z)(n,m),w=(0,a.Z)({},n,{component:d,disableGutters:p,fixed:x,maxWidth:k}),y=function(e,t){var n=e.classes,r=e.fixed,o=e.disableGutters,a=e.maxWidth,i={root:["root",a&&"maxWidth".concat((0,s.Z)(String(a))),r&&"fixed",o&&"disableGutters"]};return(0,u.Z)(i,(function(e){return(0,l.Z)(t,e)}),n)}(w,g);return(0,v.jsx)(Z,(0,a.Z)({as:d,ownerState:w,className:(0,c.default)(y.root,r),ref:t},S))}));return x}({createStyledComponent:(0,x.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,Z.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:function(e){return(0,C.Z)({props:e,name:"MuiContainer"})}}),S=k},12221:function(e,t,n){n.d(t,{Z:function(){return W}});var r=n(56666),o=n(31461),a=n(7896),i=n(96902),c=n(24463),s=n(73674),l=n(16644),u=n(95790),d=n(53068),f=n(30992),h=n(29938),v=(0,f.Z)((0,h.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),m=(0,f.Z)((0,h.jsx)("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),g=n(2252),p=(0,g.ZP)("span")({position:"relative",display:"flex"}),b=(0,g.ZP)(v)({transform:"scale(1)"}),Z=(0,g.ZP)(m)((function(e){var t=e.theme,n=e.ownerState;return(0,a.Z)({left:0,position:"absolute",transform:"scale(0)",transition:t.transitions.create("transform",{easing:t.transitions.easing.easeIn,duration:t.transitions.duration.shortest})},n.checked&&{transform:"scale(1)",transition:t.transitions.create("transform",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.shortest})})}));var x=function(e){var t=e.checked,n=void 0!==t&&t,r=e.classes,o=void 0===r?{}:r,i=e.fontSize,c=(0,a.Z)({},e,{checked:n});return(0,h.jsxs)(p,{className:o.root,ownerState:c,children:[(0,h.jsx)(b,{fontSize:i,className:o.background,ownerState:c}),(0,h.jsx)(Z,{fontSize:i,className:o.dot,ownerState:c})]})},C=n(70378),k=n(69491),S=n(63838),w=n(17318),y=["checked","checkedIcon","color","icon","name","onChange","size","className"],A=(0,g.ZP)(u.Z,{shouldForwardProp:function(e){return(0,g.FO)(e)||"classes"===e},name:"MuiRadio",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["color".concat((0,C.Z)(n.color))]]}})((function(e){var t=e.theme,n=e.ownerState;return(0,a.Z)({color:(t.vars||t).palette.text.secondary},!n.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat("default"===n.color?t.vars.palette.action.activeChannel:t.vars.palette[n.color].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,l.Fq)("default"===n.color?t.palette.action.active:t.palette[n.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==n.color&&(0,r.Z)({},"&.".concat(w.Z.checked),{color:(t.vars||t).palette[n.color].main}),(0,r.Z)({},"&.".concat(w.Z.disabled),{color:(t.vars||t).palette.action.disabled}))}));var R=(0,h.jsx)(x,{checked:!0}),j=(0,h.jsx)(x,{}),W=i.forwardRef((function(e,t){var n,r,l,u,f=(0,d.Z)({props:e,name:"MuiRadio"}),v=f.checked,m=f.checkedIcon,g=void 0===m?R:m,p=f.color,b=void 0===p?"primary":p,Z=f.icon,x=void 0===Z?j:Z,W=f.name,z=f.onChange,M=f.size,P=void 0===M?"medium":M,G=f.className,N=(0,o.Z)(f,y),O=(0,a.Z)({},f,{color:b,size:P}),I=function(e){var t=e.classes,n=e.color,r={root:["root","color".concat((0,C.Z)(n))]};return(0,a.Z)({},t,(0,s.Z)(r,w.l,t))}(O),T=(0,S.Z)(),E=v,_=(0,k.Z)(z,T&&T.onChange),L=W;return T&&("undefined"===typeof E&&(l=T.value,E="object"===typeof(u=f.value)&&null!==u?l===u:String(l)===String(u)),"undefined"===typeof L&&(L=T.name)),(0,h.jsx)(A,(0,a.Z)({type:"radio",icon:i.cloneElement(x,{fontSize:null!=(n=j.props.fontSize)?n:P}),checkedIcon:i.cloneElement(g,{fontSize:null!=(r=R.props.fontSize)?r:P}),ownerState:O,classes:I,name:L,checked:E,onChange:_,ref:t,className:(0,c.default)(I.root,G)},N))}))},17318:function(e,t,n){n.d(t,{l:function(){return a}});var r=n(74732),o=n(61235);function a(e){return(0,o.Z)("MuiRadio",e)}var i=(0,r.Z)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"]);t.Z=i},99782:function(e,t,n){var r=n(96234),o=n(7896),a=n(31461),i=n(96902),c=n(52),s=n(22756),l=n(48962),u=n(39809),d=n(14989),f=n(29938),h=["actions","children","defaultValue","name","onChange","value"],v=i.forwardRef((function(e,t){var n=e.actions,v=e.children,m=e.defaultValue,g=e.name,p=e.onChange,b=e.value,Z=(0,a.Z)(e,h),x=i.useRef(null),C=(0,l.Z)({controlled:b,default:m,name:"RadioGroup"}),k=(0,r.Z)(C,2),S=k[0],w=k[1];i.useImperativeHandle(n,(function(){return{focus:function(){var e=x.current.querySelector("input:not(:disabled):checked");e||(e=x.current.querySelector("input:not(:disabled)")),e&&e.focus()}}}),[]);var y=(0,s.Z)(t,x),A=(0,d.Z)(g),R=i.useMemo((function(){return{name:A,onChange:function(e){w(e.target.value),p&&p(e,e.target.value)},value:S}}),[A,p,w,S]);return(0,f.jsx)(u.Z.Provider,{value:R,children:(0,f.jsx)(c.Z,(0,o.Z)({role:"radiogroup",ref:y},Z,{children:v}))})}));t.Z=v},39809:function(e,t,n){var r=n(96902).createContext(void 0);t.Z=r},63838:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(96902),o=n(39809);function a(){return r.useContext(o.Z)}},8044:function(e,t,n){var r=(0,n(64630).ZP)();t.Z=r},88315:function(e,t,n){var r=n(80341);function o(e){if("string"!==typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function a(e,t){for(var n,r="",o=0,a=-1,i=0,c=0;c<=e.length;++c){if(c<e.length)n=e.charCodeAt(c);else{if(47===n)break;n=47}if(47===n){if(a===c-1||1===i);else if(a!==c-1&&2===i){if(r.length<2||2!==o||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2))if(r.length>2){var s=r.lastIndexOf("/");if(s!==r.length-1){-1===s?(r="",o=0):o=(r=r.slice(0,s)).length-1-r.lastIndexOf("/"),a=c,i=0;continue}}else if(2===r.length||1===r.length){r="",o=0,a=c,i=0;continue}t&&(r.length>0?r+="/..":r="..",o=2)}else r.length>0?r+="/"+e.slice(a+1,c):r=e.slice(a+1,c),o=c-a-1;a=c,i=0}else 46===n&&-1!==i?++i:i=-1}return r}var i={resolve:function(){for(var e,t="",n=!1,i=arguments.length-1;i>=-1&&!n;i--){var c;i>=0?c=arguments[i]:(void 0===e&&(e=r.cwd()),c=e),o(c),0!==c.length&&(t=c+"/"+t,n=47===c.charCodeAt(0))}return t=a(t,!n),n?t.length>0?"/"+t:"/":t.length>0?t:"."},normalize:function(e){if(o(e),0===e.length)return".";var t=47===e.charCodeAt(0),n=47===e.charCodeAt(e.length-1);return 0!==(e=a(e,!t)).length||t||(e="."),e.length>0&&n&&(e+="/"),t?"/"+e:e},isAbsolute:function(e){return o(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,t=0;t<arguments.length;++t){var n=arguments[t];o(n),n.length>0&&(void 0===e?e=n:e+="/"+n)}return void 0===e?".":i.normalize(e)},relative:function(e,t){if(o(e),o(t),e===t)return"";if((e=i.resolve(e))===(t=i.resolve(t)))return"";for(var n=1;n<e.length&&47===e.charCodeAt(n);++n);for(var r=e.length,a=r-n,c=1;c<t.length&&47===t.charCodeAt(c);++c);for(var s=t.length-c,l=a<s?a:s,u=-1,d=0;d<=l;++d){if(d===l){if(s>l){if(47===t.charCodeAt(c+d))return t.slice(c+d+1);if(0===d)return t.slice(c+d)}else a>l&&(47===e.charCodeAt(n+d)?u=d:0===d&&(u=0));break}var f=e.charCodeAt(n+d);if(f!==t.charCodeAt(c+d))break;47===f&&(u=d)}var h="";for(d=n+u+1;d<=r;++d)d!==r&&47!==e.charCodeAt(d)||(0===h.length?h+="..":h+="/..");return h.length>0?h+t.slice(c+u):(c+=u,47===t.charCodeAt(c)&&++c,t.slice(c))},_makeLong:function(e){return e},dirname:function(e){if(o(e),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,a=!0,i=e.length-1;i>=1;--i)if(47===(t=e.charCodeAt(i))){if(!a){r=i;break}}else a=!1;return-1===r?n?"/":".":n&&1===r?"//":e.slice(0,r)},basename:function(e,t){if(void 0!==t&&"string"!==typeof t)throw new TypeError('"ext" argument must be a string');o(e);var n,r=0,a=-1,i=!0;if(void 0!==t&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var c=t.length-1,s=-1;for(n=e.length-1;n>=0;--n){var l=e.charCodeAt(n);if(47===l){if(!i){r=n+1;break}}else-1===s&&(i=!1,s=n+1),c>=0&&(l===t.charCodeAt(c)?-1===--c&&(a=n):(c=-1,a=s))}return r===a?a=s:-1===a&&(a=e.length),e.slice(r,a)}for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!i){r=n+1;break}}else-1===a&&(i=!1,a=n+1);return-1===a?"":e.slice(r,a)},extname:function(e){o(e);for(var t=-1,n=0,r=-1,a=!0,i=0,c=e.length-1;c>=0;--c){var s=e.charCodeAt(c);if(47!==s)-1===r&&(a=!1,r=c+1),46===s?-1===t?t=c:1!==i&&(i=1):-1!==t&&(i=-1);else if(!a){n=c+1;break}}return-1===t||-1===r||0===i||1===i&&t===r-1&&t===n+1?"":e.slice(t,r)},format:function(e){if(null===e||"object"!==typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var n=t.dir||t.root,r=t.base||(t.name||"")+(t.ext||"");return n?n===t.root?n+r:n+e+r:r}("/",e)},parse:function(e){o(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return t;var n,r=e.charCodeAt(0),a=47===r;a?(t.root="/",n=1):n=0;for(var i=-1,c=0,s=-1,l=!0,u=e.length-1,d=0;u>=n;--u)if(47!==(r=e.charCodeAt(u)))-1===s&&(l=!1,s=u+1),46===r?-1===i?i=u:1!==d&&(d=1):-1!==i&&(d=-1);else if(!l){c=u+1;break}return-1===i||-1===s||0===d||1===d&&i===s-1&&i===c+1?-1!==s&&(t.base=t.name=0===c&&a?e.slice(1,s):e.slice(c,s)):(0===c&&a?(t.name=e.slice(1,i),t.base=e.slice(1,s)):(t.name=e.slice(c,i),t.base=e.slice(c,s)),t.ext=e.slice(i,s)),c>0?t.dir=e.slice(0,c-1):a&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};i.posix=i,e.exports=i}}]);
//# sourceMappingURL=3927.9f68f15a.chunk.js.map