"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[7209],{28453:(e,t,n)=>{var r=n(57739);t.Z=void 0;var o=r(n(53948)),i=n(43188),a=(0,o.default)((0,i.jsx)("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"}),"CloudUpload");t.Z=a},49824:(e,t,n)=>{var r=n(57739);t.Z=void 0;var o=r(n(53948)),i=n(43188),a=(0,o.default)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"}),"Error");t.Z=a},22875:(e,t)=>{t.Z=function(e,t){if(e&&t){var n=Array.isArray(t)?t:t.split(","),r=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return n.some((function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?r.toLowerCase().endsWith(t):t.endsWith("/*")?i===t.replace(/\/.*$/,""):o===t}))}return!0}},55069:(e,t,n)=>{n.d(t,{uI:()=>re});var r=n(66204),o=n(97641),i=n.n(o),a=n(37382),c=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function u(e,t){var n=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var n=t.split(".").pop().toLowerCase(),r=c.get(n);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof n.path){var r=e.webkitRelativePath;Object.defineProperty(n,"path",{value:"string"==typeof t?t:"string"==typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}var l=[".DS_Store","Thumbs.db"];function s(e){return"object"==typeof e&&null!==e}function f(e){return m(e.target.files).map((function(e){return u(e)}))}function p(e){return(0,a.mG)(this,void 0,void 0,(function(){return(0,a.Jh)(this,(function(t){switch(t.label){case 0:return[4,Promise.all(e.map((function(e){return e.getFile()})))];case 1:return[2,t.sent().map((function(e){return u(e)}))]}}))}))}function d(e,t){return(0,a.mG)(this,void 0,void 0,(function(){var n;return(0,a.Jh)(this,(function(r){switch(r.label){case 0:return e.items?(n=m(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,n]:[4,Promise.all(n.map(g))]):[3,2];case 1:return[2,v(b(r.sent()))];case 2:return[2,v(m(e.files).map((function(e){return u(e)})))]}}))}))}function v(e){return e.filter((function(e){return-1===l.indexOf(e.name)}))}function m(e){if(null===e)return[];for(var t=[],n=0;n<e.length;n++){var r=e[n];t.push(r)}return t}function g(e){if("function"!=typeof e.webkitGetAsEntry)return y(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?w(t):y(e)}function b(e){return e.reduce((function(e,t){return(0,a.ev)((0,a.ev)([],(0,a.CR)(e),!1),(0,a.CR)(Array.isArray(t)?b(t):[t]),!1)}),[])}function y(e){var t=e.getAsFile();if(!t)return Promise.reject("".concat(e," is not a File"));var n=u(t);return Promise.resolve(n)}function h(e){return(0,a.mG)(this,void 0,void 0,(function(){return(0,a.Jh)(this,(function(t){return[2,e.isDirectory?w(e):D(e)]}))}))}function w(e){var t=e.createReader();return new Promise((function(e,n){var r=[];!function o(){var i=this;t.readEntries((function(t){return(0,a.mG)(i,void 0,void 0,(function(){var i,c,u;return(0,a.Jh)(this,(function(a){switch(a.label){case 0:if(t.length)return[3,5];a.label=1;case 1:return a.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return i=a.sent(),e(i),[3,4];case 3:return c=a.sent(),n(c),[3,4];case 4:return[3,6];case 5:u=Promise.all(t.map(h)),r.push(u),o(),a.label=6;case 6:return[2]}}))}))}),(function(e){n(e)}))}()}))}function D(e){return(0,a.mG)(this,void 0,void 0,(function(){return(0,a.Jh)(this,(function(t){return[2,new Promise((function(t,n){e.file((function(n){var r=u(n,e.fullPath);t(r)}),(function(e){n(e)}))}))]}))}))}var j=n(22875);function O(e){return function(e){if(Array.isArray(e))return P(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||k(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){F(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(e,t)||k(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){if(e){if("string"==typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?P(e,t):void 0}}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var C=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var t=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:"file-invalid-type",message:"File type must be ".concat(t)}},S=function(e){return{code:"file-too-large",message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},z=function(e){return{code:"file-too-small",message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},R={code:"too-many-files",message:"Too many files"};function I(e,t){var n="application/x-moz-file"===e.type||(0,j.Z)(e,t);return[n,n?null:C(t)]}function T(e,t,n){if(M(e.size))if(M(t)&&M(n)){if(e.size>n)return[!1,S(n)];if(e.size<t)return[!1,z(t)]}else{if(M(t)&&e.size<t)return[!1,z(t)];if(M(n)&&e.size>n)return[!1,S(n)]}return[!0,null]}function M(e){return null!=e}function L(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function _(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function B(e){e.preventDefault()}function K(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return t.some((function(t){return!L(e)&&t&&t.apply(void 0,[e].concat(r)),L(e)}))}}function G(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)}function J(e){return/^.*\.[\w]+$/.test(e)}var U=["children"],Z=["open"],$=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],H=["refKey","onChange","onClick"];function W(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(e,t)||q(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e,t){if(e){if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(e,t):void 0}}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){Q(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function X(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var ee=(0,r.forwardRef)((function(e,t){var n=e.children,o=re(X(e,U)),i=o.open,a=X(o,Z);return(0,r.useImperativeHandle)(t,(function(){return{open:i}}),[i]),r.createElement(r.Fragment,null,n(Y(Y({},a),{},{open:i})))}));ee.displayName="Dropzone";var te={disabled:!1,getFilesFromEvent:function(e){return(0,a.mG)(this,void 0,void 0,(function(){return(0,a.Jh)(this,(function(t){return s(e)&&s(e.dataTransfer)?[2,d(e.dataTransfer,e.type)]:s(n=e)&&s(n.target)?[2,f(e)]:Array.isArray(e)&&e.every((function(e){return"getFile"in e&&"function"==typeof e.getFile}))?[2,p(e)]:[2,[]];var n}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};ee.defaultProps=te,ee.propTypes={children:i().func,accept:i().objectOf(i().arrayOf(i().string)),multiple:i().bool,preventDropOnDocument:i().bool,noClick:i().bool,noKeyboard:i().bool,noDrag:i().bool,noDragEventsBubbling:i().bool,minSize:i().number,maxSize:i().number,maxFiles:i().number,disabled:i().bool,getFilesFromEvent:i().func,onFileDialogCancel:i().func,onFileDialogOpen:i().func,useFsAccessApi:i().bool,autoFocus:i().bool,onDragEnter:i().func,onDragLeave:i().func,onDragOver:i().func,onDrop:i().func,onDropAccepted:i().func,onDropRejected:i().func,onError:i().func,validator:i().func};var ne={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function re(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Y(Y({},te),e),n=t.accept,o=t.disabled,i=t.getFilesFromEvent,a=t.maxSize,c=t.minSize,u=t.multiple,l=t.maxFiles,s=t.onDragEnter,f=t.onDragLeave,p=t.onDragOver,d=t.onDrop,v=t.onDropAccepted,m=t.onDropRejected,g=t.onFileDialogCancel,b=t.onFileDialogOpen,y=t.useFsAccessApi,h=t.autoFocus,w=t.preventDropOnDocument,D=t.noClick,j=t.noKeyboard,x=t.noDrag,k=t.noDragEventsBubbling,P=t.onError,C=t.validator,S=(0,r.useMemo)((function(){return function(e){if(M(e))return Object.entries(e).reduce((function(e,t){var n=E(t,2),r=n[0],o=n[1];return[].concat(O(e),[r],O(o))}),[]).filter((function(e){return G(e)||J(e)})).join(",")}(n)}),[n]),z=(0,r.useMemo)((function(){return function(e){return M(e)?[{description:"Files",accept:Object.entries(e).filter((function(e){var t=E(e,2),n=t[0],r=t[1],o=!0;return G(n)||(console.warn('Skipped "'.concat(n,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),o=!1),Array.isArray(r)&&r.every(J)||(console.warn('Skipped "'.concat(n,'" because an invalid file extension was provided.')),o=!1),o})).reduce((function(e,t){var n=E(t,2),r=n[0],o=n[1];return A(A({},e),{},F({},r,o))}),{})}]:e}(n)}),[n]),U=(0,r.useMemo)((function(){return"function"==typeof b?b:ie}),[b]),Z=(0,r.useMemo)((function(){return"function"==typeof g?g:ie}),[g]),V=(0,r.useRef)(null),ee=(0,r.useRef)(null),re=W((0,r.useReducer)(oe,ne),2),ae=re[0],ce=re[1],ue=ae.isFocused,le=ae.isFileDialogActive,se=(0,r.useRef)("undefined"!=typeof window&&window.isSecureContext&&y&&"showOpenFilePicker"in window),fe=function(){!se.current&&le&&setTimeout((function(){ee.current&&(ee.current.files.length||(ce({type:"closeDialog"}),Z()))}),300)};(0,r.useEffect)((function(){return window.addEventListener("focus",fe,!1),function(){window.removeEventListener("focus",fe,!1)}}),[ee,le,Z,se]);var pe=(0,r.useRef)([]),de=function(e){V.current&&V.current.contains(e.target)||(e.preventDefault(),pe.current=[])};(0,r.useEffect)((function(){return w&&(document.addEventListener("dragover",B,!1),document.addEventListener("drop",de,!1)),function(){w&&(document.removeEventListener("dragover",B),document.removeEventListener("drop",de))}}),[V,w]),(0,r.useEffect)((function(){return!o&&h&&V.current&&V.current.focus(),function(){}}),[V,h,o]);var ve=(0,r.useCallback)((function(e){P?P(e):console.error(e)}),[P]),me=(0,r.useCallback)((function(e){var t;e.preventDefault(),e.persist(),ke(e),pe.current=[].concat(function(e){if(Array.isArray(e))return N(e)}(t=pe.current)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||q(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[e.target]),_(e)&&Promise.resolve(i(e)).then((function(t){if(!L(e)||k){var n=t.length,r=n>0&&function(e){var t=e.files,n=e.accept,r=e.minSize,o=e.maxSize,i=e.multiple,a=e.maxFiles,c=e.validator;return!(!i&&t.length>1||i&&a>=1&&t.length>a)&&t.every((function(e){var t=E(I(e,n),1)[0],i=E(T(e,r,o),1)[0],a=c?c(e):null;return t&&i&&!a}))}({files:t,accept:S,minSize:c,maxSize:a,multiple:u,maxFiles:l,validator:C});ce({isDragAccept:r,isDragReject:n>0&&!r,isDragActive:!0,type:"setDraggedFiles"}),s&&s(e)}})).catch((function(e){return ve(e)}))}),[i,s,ve,k,S,c,a,u,l,C]),ge=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),ke(e);var t=_(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(e){}return t&&p&&p(e),!1}),[p,k]),be=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),ke(e);var t=pe.current.filter((function(e){return V.current&&V.current.contains(e)})),n=t.indexOf(e.target);-1!==n&&t.splice(n,1),pe.current=t,t.length>0||(ce({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),_(e)&&f&&f(e))}),[V,f,k]),ye=(0,r.useCallback)((function(e,t){var n=[],r=[];e.forEach((function(e){var t=W(I(e,S),2),o=t[0],i=t[1],u=W(T(e,c,a),2),l=u[0],s=u[1],f=C?C(e):null;if(o&&l&&!f)n.push(e);else{var p=[i,s];f&&(p=p.concat(f)),r.push({file:e,errors:p.filter((function(e){return e}))})}})),(!u&&n.length>1||u&&l>=1&&n.length>l)&&(n.forEach((function(e){r.push({file:e,errors:[R]})})),n.splice(0)),ce({acceptedFiles:n,fileRejections:r,type:"setFiles"}),d&&d(n,r,t),r.length>0&&m&&m(r,t),n.length>0&&v&&v(n,t)}),[ce,u,S,c,a,l,d,v,m,C]),he=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),ke(e),pe.current=[],_(e)&&Promise.resolve(i(e)).then((function(t){L(e)&&!k||ye(t,e)})).catch((function(e){return ve(e)})),ce({type:"reset"})}),[i,ye,ve,k]),we=(0,r.useCallback)((function(){if(se.current){ce({type:"openDialog"}),U();var e={multiple:u,types:z};window.showOpenFilePicker(e).then((function(e){return i(e)})).then((function(e){ye(e,null),ce({type:"closeDialog"})})).catch((function(e){var t;(t=e)instanceof DOMException&&("AbortError"===t.name||t.code===t.ABORT_ERR)?(Z(e),ce({type:"closeDialog"})):function(e){return e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)}(e)?(se.current=!1,ee.current?(ee.current.value=null,ee.current.click()):ve(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):ve(e)}))}else ee.current&&(ce({type:"openDialog"}),U(),ee.current.value=null,ee.current.click())}),[ce,U,Z,y,ye,ve,z,u]),De=(0,r.useCallback)((function(e){V.current&&V.current.isEqualNode(e.target)&&(" "!==e.key&&"Enter"!==e.key&&32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),we()))}),[V,we]),je=(0,r.useCallback)((function(){ce({type:"focus"})}),[]),Oe=(0,r.useCallback)((function(){ce({type:"blur"})}),[]),xe=(0,r.useCallback)((function(){D||(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return function(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}(e)||function(e){return-1!==e.indexOf("Edge/")}(e)}()?setTimeout(we,0):we())}),[D,we]),Ae=function(e){return o?null:e},Fe=function(e){return j?null:Ae(e)},Ee=function(e){return x?null:Ae(e)},ke=function(e){k&&e.stopPropagation()},Pe=(0,r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,r=e.role,i=e.onKeyDown,a=e.onFocus,c=e.onBlur,u=e.onClick,l=e.onDragEnter,s=e.onDragOver,f=e.onDragLeave,p=e.onDrop,d=X(e,$);return Y(Y(Q({onKeyDown:Fe(K(i,De)),onFocus:Fe(K(a,je)),onBlur:Fe(K(c,Oe)),onClick:Ae(K(u,xe)),onDragEnter:Ee(K(l,me)),onDragOver:Ee(K(s,ge)),onDragLeave:Ee(K(f,be)),onDrop:Ee(K(p,he)),role:"string"==typeof r&&""!==r?r:"presentation"},n,V),o||j?{}:{tabIndex:0}),d)}}),[V,De,je,Oe,xe,me,ge,be,he,j,x,o]),Ce=(0,r.useCallback)((function(e){e.stopPropagation()}),[]),Se=(0,r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,r=e.onChange,o=e.onClick,i=X(e,H);return Y(Y({},Q({accept:S,multiple:u,type:"file",style:{display:"none"},onChange:Ae(K(r,he)),onClick:Ae(K(o,Ce)),tabIndex:-1},n,ee)),i)}}),[ee,n,u,he,o]);return Y(Y({},ae),{},{isFocused:ue&&!o,getRootProps:Pe,getInputProps:Se,rootRef:V,inputRef:ee,open:Ae(we)})}function oe(e,t){switch(t.type){case"focus":return Y(Y({},e),{},{isFocused:!0});case"blur":return Y(Y({},e),{},{isFocused:!1});case"openDialog":return Y(Y({},ne),{},{isFileDialogActive:!0});case"closeDialog":return Y(Y({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return Y(Y({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return Y(Y({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return Y({},ne);default:return e}}function ie(){}}}]);
//# sourceMappingURL=7209.af184ee6.chunk.js.map