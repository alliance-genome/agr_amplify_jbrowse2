File();if(!n)return Promise.reject("".concat(e," is not a File"));var t=u(n);return Promise.resolve(t)}function h(e){return(0,a.mG)(this,void 0,void 0,(function(){return(0,a.Jh)(this,(function(n){return[2,e.isDirectory?w(e):D(e)]}))}))}function w(e){var n=e.createReader();return new Promise((function(e,t){var r=[];!function o(){var i=this;n.readEntries((function(n){return(0,a.mG)(i,void 0,void 0,(function(){var i,c,u;return(0,a.Jh)(this,(function(a){switch(a.label){case 0:if(n.length)return[3,5];a.label=1;case 1:return a.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return i=a.sent(),e(i),[3,4];case 3:return c=a.sent(),t(c),[3,4];case 4:return[3,6];case 5:u=Promise.all(n.map(h)),r.push(u),o(),a.label=6;case 6:return[2]}}))}))}),(function(e){t(e)}))}()}))}function D(e){return(0,a.mG)(this,void 0,void 0,(function(){return(0,a.Jh)(this,(function(n){return[2,new Promise((function(n,t){e.file((function(t){var r=u(t,e.fullPath);n(r)}),(function(e){t(e)}))}))]}))}))}var j=t(47522);function O(e){return function(e){if(Array.isArray(e))return P(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||k(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function A(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?x(Object(t),!0).forEach((function(n){F(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function F(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function E(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return i}(e,n)||k(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,n){if(e){if("string"===typeof e)return P(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?P(e,n):void 0}}function P(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var C="file-invalid-type",S="file-too-large",z="file-too-small",R="too-many-files",I=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var n=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:C,message:"File type must be ".concat(n)}},T=function(e){return{code:S,message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},M=function(e){return{code:z,message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},L={code:R,message:"Too many files"};function _(e,n){var t="application/x-moz-file"===e.type||(0,j.Z)(e,n);return[t,t?null:I(n)]}function B(e,n,t){if(K(e.size))if(K(n)&&K(t)){if(e.size>t)return[!1,T(t)];if(e.size<n)return[!1,M(n)]}else{if(K(n)&&e.size<n)return[!1,M(n)];if(K(t)&&e.size>t)return[!1,T(t)]}return[!0,null]}function K(e){return void 0!==e&&null!==e}function G(e){return"function"===typeof e.isPropagationStopped?e.isPropagationStopped():"undefined"!==typeof e.cancelBubble&&e.cancelBubble}function J(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function U(e){e.preventDefault()}function Z(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];return n.some((function(n){return!G(e)&&n&&n.apply(void 0,[e].concat(r)),G(e)}))}}function $(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)}function H(e){return/^.*\.[\w]+$/.test(e)}var W=["children"],q=["open"],N=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],V=["refKey","onChange","onClick"];function Y(e){return function(e){if(Array.isArray(e))return ee(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||X(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Q(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return i}(e,n)||X(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function X(e,n){if(e){if("string"===typeof e)return ee(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?ee(e,n):void 0}}function ee(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function ne(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function te(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ne(Object(t),!0).forEach((function(n){re(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ne(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function re(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function oe(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var ie=(0,r.forwardRef)((function(e,n){var t=e.children,o=ue(oe(e,W)),i=o.open,a=oe(o,q);return(0,r.useImperativeHandle)(n,(function(){return{open:i}}),[i]),r.createElement(r.Fragment,null,t(te(te({},a),{},{open:i})))}));ie.displayName="Dropzone";var ae={disabled:!1,getFilesFromEvent:function(e){return(0,a.mG)(this,void 0,void 0,(function(){return(0,a.Jh)(this,(function(n){return s(e)&&s(e.dataTransfer)?[2,d(e.dataTransfer,e.type)]:function(e){return s(e)&&s(e.target)}(e)?[2,f(e)]:Array.isArray(e)&&e.every((function(e){return"getFile"in e&&"function"===typeof e.getFile}))?[2,p(e)]:[2,[]]}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};ie.defaultProps=ae,ie.propTypes={children:i().func,accept:i().objectOf(i().arrayOf(i().string)),multiple:i().bool,preventDropOnDocument:i().bool,noClick:i().bool,noKeyboard:i().bool,noDrag:i().bool,noDragEventsBubbling:i().bool,minSize:i().number,maxSize:i().number,maxFiles:i().number,disabled:i().bool,getFilesFromEvent:i().func,onFileDialogCancel:i().func,onFileDialogOpen:i().func,useFsAccessApi:i().bool,autoFocus:i().bool,onDragEnter:i().func,onDragLeave:i().func,onDragOver:i().func,onDrop:i().func,onDropAccepted:i().func,onDropRejected:i().func,onError:i().func,validator:i().func};var ce={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function ue(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=te(te({},ae),e),t=n.accept,o=n.disabled,i=n.getFilesFromEvent,a=n.maxSize,c=n.minSize,u=n.multiple,l=n.maxFiles,s=n.onDragEnter,f=n.onDragLeave,p=n.onDragOver,d=n.onDrop,v=n.onDropAccepted,m=n.onDropRejected,g=n.onFileDialogCancel,b=n.onFileDialogOpen,y=n.useFsAccessApi,h=n.autoFocus,w=n.preventDropOnDocument,D=n.noClick,j=n.noKeyboard,x=n.noDrag,k=n.noDragEventsBubbling,P=n.onError,C=n.validator,S=(0,r.useMemo)((function(){return function(e){if(K(e))return Object.entries(e).reduce((function(e,n){var t=E(n,2),r=t[0],o=t[1];return[].concat(O(e),[r],O(o))}),[]).filter((function(e){return $(e)||H(e)})).join(",")}(t)}),[t]),z=(0,r.useMemo)((function(){return function(e){return K(e)?[{description:"Files",accept:Object.entries(e).filter((function(e){var n=E(e,2),t=n[0],r=n[1],o=!0;return $(t)||(console.warn('Skipped "'.concat(t,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),o=!1),Array.isArray(r)&&r.every(H)||(console.warn('Skipped "'.concat(t,'" because an invalid file extension was provided.')),o=!1),o})).reduce((function(e,n){var t=E(n,2),r=t[0],o=t[1];return A(A({},e),{},F({},r,o))}),{})}]:e}(t)}),[t]),R=(0,r.useMemo)((function(){return"function"===typeof b?b:se}),[b]),I=(0,r.useMemo)((function(){return"function"===typeof g?g:se}),[g]),T=(0,r.useRef)(null),M=(0,r.useRef)(null),W=Q((0,r.useReducer)(le,ce),2),q=W[0],X=W[1],ee=q.isFocused,ne=q.isFileDialogActive,ie=(0,r.useRef)("undefined"!==typeof window&&window.isSecureContext&&y&&"showOpenFilePicker"in window),ue=function(){!ie.current&&ne&&setTimeout((function(){M.current&&(M.current.files.length||(X({type:"closeDialog"}),I()))}),300)};(0,r.useEffect)((function(){return window.addEventListener("focus",ue,!1),function(){window.removeEventListener("focus",ue,!1)}}),[M,ne,I,ie]);var fe=(0,r.useRef)([]),pe=function(e){T.current&&T.current.contains(e.target)||(e.preventDefault(),fe.current=[])};(0,r.useEffect)((function(){return w&&(document.addEventListener("dragover",U,!1),document.addEventListener("drop",pe,!1)),function(){w&&(document.removeEventListener("dragover",U),document.removeEventListener("drop",pe))}}),[T,w]),(0,r.useEffect)((function(){return!o&&h&&T.current&&T.current.focus(),function(){}}),[T,h,o]);var de=(0,r.useCallback)((function(e){P?P(e):console.error(e)}),[P]),ve=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),Ee(e),fe.current=[].concat(Y(fe.current),[e.target]),J(e)&&"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[409],{16204:function(e,n,t){var r=t(71600);n.Z=void 0;var o=r(t(7152)),i=t(29938),a=(0,o.default)((0,i.jsx)("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"}),"CloudUpload");n.Z=a},25515:function(e,n,t){var r=t(71600);n.Z=void 0;var o=r(t(7152)),i=t(29938),a=(0,o.default)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"}),"Error");n.Z=a},47522:function(e,n){n.Z=function(e,n){if(e&&n){var t=Array.isArray(n)?n:n.split(","),r=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return t.some((function(e){var n=e.trim().toLowerCase();return"."===n.charAt(0)?r.toLowerCase().endsWith(n):n.endsWith("/*")?i===n.replace(/\/.*$/,""):o===n}))}return!0}},82294:function(e,n,t){t.d(n,{uI:function(){return ue}});var r=t(96902),o=t(61113),i=t.n(o),a=t(46266),c=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function u(e,n){var t=function(e){var n=e.name;if(n&&-1!==n.lastIndexOf(".")&&!e.type){var t=n.split(".").pop().toLowerCase(),r=c.get(t);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!==typeof t.path){var r=e.webkitRelativePath;Object.defineProperty(t,"path",{value:"string"===typeof n?n:"string"===typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return t}var l=[".DS_Store","Thumbs.db"];function s(e){return"object"===typeof e&&null!==e}function f(e){return m(e.target.files).map((function(e){return u(e)}))}function p(e){return(0,a.mG)(this,void 0,void 0,(function(){return(0,a.Jh)(this,(function(n){switch(n.label){case 0:return[4,Promise.all(e.map((function(e){return e.getFile()})))];case 1:return[2,n.sent().map((function(e){return u(e)}))]}}))}))}function d(e,n){return(0,a.mG)(this,void 0,void 0,(function(){var t;return(0,a.Jh)(this,(function(r){switch(r.label){case 0:return e.items?(t=m(e.items).filter((function(e){return"file"===e.kind})),"drop"!==n?[2,t]:[4,Promise.all(t.map(g))]):[3,2];case 1:return[2,v(b(r.sent()))];case 2:return[2,v(m(e.files).map((function(e){return u(e)})))]}}))}))}function v(e){return e.filter((function(e){return-1===l.indexOf(e.name)}))}function m(e){if(null===e)return[];for(var n=[],t=0;t<e.length;t++){var r=e[t];n.push(r)}return n}function g(e){if("function"!==typeof e.webkitGetAsEntry)return y(e);var n=e.webkitGetAsEntry();return n&&n.isDirectory?w(n):y(e)}function b(e){return e.reduce((function(e,n){return(0,a.ev)((0,a.ev)([],(0,a.CR)(e),!1),(0,a.CR)(Array.isArray(n)?b(n):[n]),!1)}),[])}function y(e){var n=e.getAsPromise.resolve(i(e)).then((function(n){if(!G(e)||k){var t=n.length,r=t>0&&function(e){var n=e.files,t=e.accept,r=e.minSize,o=e.maxSize,i=e.multiple,a=e.maxFiles,c=e.validator;return!(!i&&n.length>1||i&&a>=1&&n.length>a)&&n.every((function(e){var n=E(_(e,t),1)[0],i=E(B(e,r,o),1)[0],a=c?c(e):null;return n&&i&&!a}))}({files:n,accept:S,minSize:c,maxSize:a,multiple:u,maxFiles:l,validator:C});X({isDragAccept:r,isDragReject:t>0&&!r,isDragActive:!0,type:"setDraggedFiles"}),s&&s(e)}})).catch((function(e){return de(e)}))}),[i,s,de,k,S,c,a,u,l,C]),me=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),Ee(e);var n=J(e);if(n&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(t){}return n&&p&&p(e),!1}),[p,k]),ge=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),Ee(e);var n=fe.current.filter((function(e){return T.current&&T.current.contains(e)})),t=n.indexOf(e.target);-1!==t&&n.splice(t,1),fe.current=n,n.length>0||(X({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),J(e)&&f&&f(e))}),[T,f,k]),be=(0,r.useCallback)((function(e,n){var t=[],r=[];e.forEach((function(e){var n=Q(_(e,S),2),o=n[0],i=n[1],u=Q(B(e,c,a),2),l=u[0],s=u[1],f=C?C(e):null;if(o&&l&&!f)t.push(e);else{var p=[i,s];f&&(p=p.concat(f)),r.push({file:e,errors:p.filter((function(e){return e}))})}})),(!u&&t.length>1||u&&l>=1&&t.length>l)&&(t.forEach((function(e){r.push({file:e,errors:[L]})})),t.splice(0)),X({acceptedFiles:t,fileRejections:r,type:"setFiles"}),d&&d(t,r,n),r.length>0&&m&&m(r,n),t.length>0&&v&&v(t,n)}),[X,u,S,c,a,l,d,v,m,C]),ye=(0,r.useCallback)((function(e){e.preventDefault(),e.persist(),Ee(e),fe.current=[],J(e)&&Promise.resolve(i(e)).then((function(n){G(e)&&!k||be(n,e)})).catch((function(e){return de(e)})),X({type:"reset"})}),[i,be,de,k]),he=(0,r.useCallback)((function(){if(ie.current){X({type:"openDialog"}),R();var e={multiple:u,types:z};window.showOpenFilePicker(e).then((function(e){return i(e)})).then((function(e){be(e,null),X({type:"closeDialog"})})).catch((function(e){var n;(n=e)instanceof DOMException&&("AbortError"===n.name||n.code===n.ABORT_ERR)?(I(e),X({type:"closeDialog"})):!function(e){return e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)}(e)?de(e):(ie.current=!1,M.current?(M.current.value=null,M.current.click()):de(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided.")))}))}else M.current&&(X({type:"openDialog"}),R(),M.current.value=null,M.current.click())}),[X,R,I,y,be,de,z,u]),we=(0,r.useCallback)((function(e){T.current&&T.current.isEqualNode(e.target)&&(" "!==e.key&&"Enter"!==e.key&&32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),he()))}),[T,he]),De=(0,r.useCallback)((function(){X({type:"focus"})}),[]),je=(0,r.useCallback)((function(){X({type:"blur"})}),[]),Oe=(0,r.useCallback)((function(){D||(!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return function(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}(e)||function(e){return-1!==e.indexOf("Edge/")}(e)}()?he():setTimeout(he,0))}),[D,he]),xe=function(e){return o?null:e},Ae=function(e){return j?null:xe(e)},Fe=function(e){return x?null:xe(e)},Ee=function(e){k&&e.stopPropagation()},ke=(0,r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.refKey,t=void 0===n?"ref":n,r=e.role,i=e.onKeyDown,a=e.onFocus,c=e.onBlur,u=e.onClick,l=e.onDragEnter,s=e.onDragOver,f=e.onDragLeave,p=e.onDrop,d=oe(e,N);return te(te(re({onKeyDown:Ae(Z(i,we)),onFocus:Ae(Z(a,De)),onBlur:Ae(Z(c,je)),onClick:xe(Z(u,Oe)),onDragEnter:Fe(Z(l,ve)),onDragOver:Fe(Z(s,me)),onDragLeave:Fe(Z(f,ge)),onDrop:Fe(Z(p,ye)),role:"string"===typeof r&&""!==r?r:"presentation"},t,T),o||j?{}:{tabIndex:0}),d)}}),[T,we,De,je,Oe,ve,me,ge,ye,j,x,o]),Pe=(0,r.useCallback)((function(e){e.stopPropagation()}),[]),Ce=(0,r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.refKey,t=void 0===n?"ref":n,r=e.onChange,o=e.onClick,i=oe(e,V);return te(te({},re({accept:S,multiple:u,type:"file",style:{display:"none"},onChange:xe(Z(r,ye)),onClick:xe(Z(o,Pe)),tabIndex:-1},t,M)),i)}}),[M,t,u,ye,o]);return te(te({},q),{},{isFocused:ee&&!o,getRootProps:ke,getInputProps:Ce,rootRef:T,inputRef:M,open:xe(he)})}function le(e,n){switch(n.type){case"focus":return te(te({},e),{},{isFocused:!0});case"blur":return te(te({},e),{},{isFocused:!1});case"openDialog":return te(te({},ce),{},{isFileDialogActive:!0});case"closeDialog":return te(te({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return te(te({},e),{},{isDragActive:n.isDragActive,isDragAccept:n.isDragAccept,isDragReject:n.isDragReject});case"setFiles":return te(te({},e),{},{acceptedFiles:n.acceptedFiles,fileRejections:n.fileRejections});case"reset":return te({},ce);default:return e}}function se(){}}}]);
//# sourceMappingURL=409.b721b2e0.chunk.js.map