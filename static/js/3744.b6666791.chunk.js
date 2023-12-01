"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[3744],{39946:function(t,e,r){var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const n=r(48477),a=o(r(76939)),i=o(r(9576));class l{constructor({fill:t,cache:e}){if("function"!=typeof t)throw new TypeError("must pass a fill function");if("object"!=typeof e)throw new TypeError("must pass a cache object");if("function"!=typeof e.get||"function"!=typeof e.set||"function"!=typeof e.delete)throw new TypeError("cache must implement get(key), set(key, val), and and delete(key)");this.cache=e,this.fillCallback=t}static isAbortException(t){return"AbortError"===t.name||"ERR_ABORTED"===t.code||"AbortError: aborted"===t.message||"Error: aborted"===t.message}evict(t,e){this.cache.get(t)===e&&this.cache.delete(t)}fill(t,e,r,o){const n=new a.default,l=new i.default;l.addCallback(o);const p={aborter:n,promise:this.fillCallback(e,n.signal,(t=>{l.callback(t)})),settled:!1,statusReporter:l,get aborted(){return this.aborter.signal.aborted}};p.aborter.addSignal(r),p.aborter.signal.addEventListener("abort",(()=>{p.settled||this.evict(t,p)})),p.promise.then((()=>{p.settled=!0}),(()=>{p.settled=!0,this.evict(t,p)})).catch((t=>{throw console.error(t),t})),this.cache.set(t,p)}static checkSinglePromise(t,e){function r(){if(e&&e.aborted)throw Object.assign(new Error("aborted"),{code:"ERR_ABORTED"})}return t.then((t=>(r(),t)),(t=>{throw r(),t}))}has(t){return this.cache.has(t)}get(t,e,r,o){if(!r&&e instanceof n.AbortSignal)throw new TypeError("second get argument appears to be an AbortSignal, perhaps you meant to pass `null` for the fill data?");const a=this.cache.get(t);return a?a.aborted&&!a.settled?(this.evict(t,a),this.get(t,e,r,o)):a.settled?a.promise:(a.aborter.addSignal(r),a.statusReporter.addCallback(o),l.checkSinglePromise(a.promise,r)):(this.fill(t,e,r,o),l.checkSinglePromise(this.cache.get(t).promise,r))}delete(t){const e=this.cache.get(t);e&&(e.settled||e.aborter.abort(),this.cache.delete(t))}clear(){const t=this.cache.keys();let e=0;for(let r=t.next();!r.done;r=t.next())this.delete(r.value),e+=1;return e}}e.default=l},76939:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0});const o=r(48477);class n{}e.default=class{constructor(){this.signals=new Set,this.abortController=new o.AbortController}addSignal(t=new n){if(this.signal.aborted)throw new Error("cannot add a signal, already aborted!");this.signals.add(t),t.aborted?this.handleAborted(t):"function"==typeof t.addEventListener&&t.addEventListener("abort",(()=>{this.handleAborted(t)}))}handleAborted(t){this.signals.delete(t),0===this.signals.size&&this.abortController.abort()}get signal(){return this.abortController.signal}abort(){this.abortController.abort()}}},9576:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=class{constructor(){this.callbacks=new Set}addCallback(t=(()=>{})){this.callbacks.add(t),t(this.currentMessage)}callback(t){this.currentMessage=t,this.callbacks.forEach((e=>{e(t)}))}}},48477:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.AbortSignal=e.AbortController=void 0;const o=r(82919);var n=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==r.g)return r.g;throw new Error("unable to locate global object")};let a=void 0===n().AbortController?o.AbortController:n().AbortController;e.AbortController=a;let i=void 0===n().AbortController?o.AbortSignal:n().AbortSignal;e.AbortSignal=i},4317:function(t,e,r){var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const n=o(r(39946));e.default=n.default},47208:(t,e,r)=>{var o=r(85395),n=r(65205),a=r(40985),i=n("%TypeError%"),l=n("%Function.prototype.apply%"),p=n("%Function.prototype.call%"),y=n("%Reflect.apply%",!0)||o.call(p,l),c=n("%Object.defineProperty%",!0),s=n("%Math.max%");if(c)try{c({},"a",{value:1})}catch(t){c=null}t.exports=function(t){if("function"!=typeof t)throw new i("a function is required");var e=y(o,p,arguments);return a(e,1+s(0,t.length-(arguments.length-1)),!0)};var f=function(){return y(o,l,arguments)};c?c(t.exports,"apply",{value:f}):t.exports.apply=f},40823:(t,e,r)=>{var o=r(23280)(),n=r(65205),a=o&&n("%Object.defineProperty%",!0);if(a)try{a({},"a",{value:1})}catch(t){a=!1}var i=n("%SyntaxError%"),l=n("%TypeError%"),p=r(558);t.exports=function(t,e,r){if(!t||"object"!=typeof t&&"function"!=typeof t)throw new l("`obj` must be an object or a function`");if("string"!=typeof e&&"symbol"!=typeof e)throw new l("`property` must be a string or a symbol`");if(arguments.length>3&&"boolean"!=typeof arguments[3]&&null!==arguments[3])throw new l("`nonEnumerable`, if provided, must be a boolean or null");if(arguments.length>4&&"boolean"!=typeof arguments[4]&&null!==arguments[4])throw new l("`nonWritable`, if provided, must be a boolean or null");if(arguments.length>5&&"boolean"!=typeof arguments[5]&&null!==arguments[5])throw new l("`nonConfigurable`, if provided, must be a boolean or null");if(arguments.length>6&&"boolean"!=typeof arguments[6])throw new l("`loose`, if provided, must be a boolean");var o=arguments.length>3?arguments[3]:null,n=arguments.length>4?arguments[4]:null,y=arguments.length>5?arguments[5]:null,c=arguments.length>6&&arguments[6],s=!!p&&p(t,e);if(a)a(t,e,{configurable:null===y&&s?s.configurable:!y,enumerable:null===o&&s?s.enumerable:!o,value:r,writable:null===n&&s?s.writable:!n});else{if(!c&&(o||n||y))throw new i("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");t[e]=r}}},3843:t=>{var e=Object.prototype.toString,r=Math.max,o=function(t,e){for(var r=[],o=0;o<t.length;o+=1)r[o]=t[o];for(var n=0;n<e.length;n+=1)r[n+t.length]=e[n];return r};t.exports=function(t){var n=this;if("function"!=typeof n||"[object Function]"!==e.apply(n))throw new TypeError("Function.prototype.bind called on incompatible "+n);for(var a,i=function(t,e){for(var r=[],o=1,n=0;o<t.length;o+=1,n+=1)r[n]=t[o];return r}(arguments),l=r(0,n.length-i.length),p=[],y=0;y<l;y++)p[y]="$"+y;if(a=Function("binder","return function ("+function(t,e){for(var r="",o=0;o<t.length;o+=1)r+=t[o],o+1<t.length&&(r+=",");return r}(p)+"){ return binder.apply(this,arguments); }")((function(){if(this instanceof a){var e=n.apply(this,o(i,arguments));return Object(e)===e?e:this}return n.apply(t,o(i,arguments))})),n.prototype){var c=function(){};c.prototype=n.prototype,a.prototype=new c,c.prototype=null}return a}},85395:(t,e,r)=>{var o=r(3843);t.exports=Function.prototype.bind||o},65205:(t,e,r)=>{var o,n=SyntaxError,a=Function,i=TypeError,l=function(t){try{return a('"use strict"; return ('+t+").constructor;")()}catch(t){}},p=Object.getOwnPropertyDescriptor;if(p)try{p({},"")}catch(t){p=null}var y=function(){throw new i},c=p?function(){try{return y}catch(t){try{return p(arguments,"callee").get}catch(t){return y}}}():y,s=r(89191)(),f=r(18757)(),u=Object.getPrototypeOf||(f?function(t){return t.__proto__}:null),d={},b="undefined"!=typeof Uint8Array&&u?u(Uint8Array):o,h={"%AggregateError%":"undefined"==typeof AggregateError?o:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?o:ArrayBuffer,"%ArrayIteratorPrototype%":s&&u?u([][Symbol.iterator]()):o,"%AsyncFromSyncIteratorPrototype%":o,"%AsyncFunction%":d,"%AsyncGenerator%":d,"%AsyncGeneratorFunction%":d,"%AsyncIteratorPrototype%":d,"%Atomics%":"undefined"==typeof Atomics?o:Atomics,"%BigInt%":"undefined"==typeof BigInt?o:BigInt,"%BigInt64Array%":"undefined"==typeof BigInt64Array?o:BigInt64Array,"%BigUint64Array%":"undefined"==typeof BigUint64Array?o:BigUint64Array,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?o:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":"undefined"==typeof Float32Array?o:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?o:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?o:FinalizationRegistry,"%Function%":a,"%GeneratorFunction%":d,"%Int8Array%":"undefined"==typeof Int8Array?o:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?o:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?o:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":s&&u?u(u([][Symbol.iterator]())):o,"%JSON%":"object"==typeof JSON?JSON:o,"%Map%":"undefined"==typeof Map?o:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&s&&u?u((new Map)[Symbol.iterator]()):o,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?o:Promise,"%Proxy%":"undefined"==typeof Proxy?o:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":"undefined"==typeof Reflect?o:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?o:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&s&&u?u((new Set)[Symbol.iterator]()):o,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?o:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":s&&u?u(""[Symbol.iterator]()):o,"%Symbol%":s?Symbol:o,"%SyntaxError%":n,"%ThrowTypeError%":c,"%TypedArray%":b,"%TypeError%":i,"%Uint8Array%":"undefined"==typeof Uint8Array?o:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?o:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?o:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?o:Uint32Array,"%URIError%":URIError,"%WeakMap%":"undefined"==typeof WeakMap?o:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?o:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?o:WeakSet};if(u)try{null.error}catch(t){var g=u(u(t));h["%Error.prototype%"]=g}var A=function t(e){var r;if("%AsyncFunction%"===e)r=l("async function () {}");else if("%GeneratorFunction%"===e)r=l("function* () {}");else if("%AsyncGeneratorFunction%"===e)r=l("async function* () {}");else if("%AsyncGenerator%"===e){var o=t("%AsyncGeneratorFunction%");o&&(r=o.prototype)}else if("%AsyncIteratorPrototype%"===e){var n=t("%AsyncGenerator%");n&&u&&(r=u(n.prototype))}return h[e]=r,r},m={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},w=r(85395),v=r(65912),P=w.call(Function.call,Array.prototype.concat),S=w.call(Function.apply,Array.prototype.splice),E=w.call(Function.call,String.prototype.replace),O=w.call(Function.call,String.prototype.slice),j=w.call(Function.call,RegExp.prototype.exec),F=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,_=/\\(\\)?/g,I=function(t,e){var r,o=t;if(v(m,o)&&(o="%"+(r=m[o])[0]+"%"),v(h,o)){var a=h[o];if(a===d&&(a=A(o)),void 0===a&&!e)throw new i("intrinsic "+t+" exists, but is not available. Please file an issue!");return{alias:r,name:o,value:a}}throw new n("intrinsic "+t+" does not exist!")};t.exports=function(t,e){if("string"!=typeof t||0===t.length)throw new i("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof e)throw new i('"allowMissing" argument must be a boolean');if(null===j(/^%?[^%]*%?$/,t))throw new n("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var r=function(t){var e=O(t,0,1),r=O(t,-1);if("%"===e&&"%"!==r)throw new n("invalid intrinsic syntax, expected closing `%`");if("%"===r&&"%"!==e)throw new n("invalid intrinsic syntax, expected opening `%`");var o=[];return E(t,F,(function(t,e,r,n){o[o.length]=r?E(n,_,"$1"):e||t})),o}(t),o=r.length>0?r[0]:"",a=I("%"+o+"%",e),l=a.name,y=a.value,c=!1,s=a.alias;s&&(o=s[0],S(r,P([0,1],s)));for(var f=1,u=!0;f<r.length;f+=1){var d=r[f],b=O(d,0,1),g=O(d,-1);if(('"'===b||"'"===b||"`"===b||'"'===g||"'"===g||"`"===g)&&b!==g)throw new n("property names with quotes must have matching quotes");if("constructor"!==d&&u||(c=!0),v(h,l="%"+(o+="."+d)+"%"))y=h[l];else if(null!=y){if(!(d in y)){if(!e)throw new i("base intrinsic for "+t+" exists, but the property is not available.");return}if(p&&f+1>=r.length){var A=p(y,d);y=(u=!!A)&&"get"in A&&!("originalValue"in A.get)?A.get:y[d]}else u=v(y,d),y=y[d];u&&!c&&(h[l]=y)}}return y}},558:(t,e,r)=>{var o=r(65205)("%Object.getOwnPropertyDescriptor%",!0);if(o)try{o([],"length")}catch(t){o=null}t.exports=o},23280:(t,e,r)=>{var o=r(65205)("%Object.defineProperty%",!0),n=function(){if(o)try{return o({},"a",{value:1}),!0}catch(t){return!1}return!1};n.hasArrayLengthDefineBug=function(){if(!n())return null;try{return 1!==o([],"length",{value:1}).length}catch(t){return!0}},t.exports=n},18757:t=>{var e={foo:{}},r=Object;t.exports=function(){return{__proto__:e}.foo===e.foo&&!({__proto__:null}instanceof r)}},89191:(t,e,r)=>{var o="undefined"!=typeof Symbol&&Symbol,n=r(62267);t.exports=function(){return"function"==typeof o&&"function"==typeof Symbol&&"symbol"==typeof o("foo")&&"symbol"==typeof Symbol("bar")&&n()}},62267:t=>{t.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var t={},e=Symbol("test"),r=Object(e);if("string"==typeof e)return!1;if("[object Symbol]"!==Object.prototype.toString.call(e))return!1;if("[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(e in t[e]=42,t)return!1;if("function"==typeof Object.keys&&0!==Object.keys(t).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return!1;var o=Object.getOwnPropertySymbols(t);if(1!==o.length||o[0]!==e)return!1;if(!Object.prototype.propertyIsEnumerable.call(t,e))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var n=Object.getOwnPropertyDescriptor(t,e);if(42!==n.value||!0!==n.enumerable)return!1}return!0}},65912:(t,e,r)=>{var o=Function.prototype.call,n=Object.prototype.hasOwnProperty,a=r(85395);t.exports=a.call(o,n)},40985:(t,e,r)=>{var o=r(65205),n=r(40823),a=r(23280)(),i=r(558),l=o("%TypeError%"),p=o("%Math.floor%");t.exports=function(t,e){if("function"!=typeof t)throw new l("`fn` is not a function");if("number"!=typeof e||e<0||e>4294967295||p(e)!==e)throw new l("`length` must be a positive 32-bit integer");var r=arguments.length>2&&!!arguments[2],o=!0,y=!0;if("length"in t&&i){var c=i(t,"length");c&&!c.configurable&&(o=!1),c&&!c.writable&&(y=!1)}return(o||y||!r)&&(a?n(t,"length",e,!0,!0):n(t,"length",e)),t}}}]);
//# sourceMappingURL=3744.b6666791.chunk.js.map