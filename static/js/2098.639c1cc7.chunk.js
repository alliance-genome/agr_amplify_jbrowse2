/*! For license information please see 2098.639c1cc7.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[2098],{42098:function(t,e,n){n.r(e),n.d(e,{BgzfFilehandle:function(){return H},unzip:function(){return f},unzipChunk:function(){return g},unzipChunkSlice:function(){return p}});var i=n(96234),r=n(32723),s=n(34795),h=n(9249),u=n(87371),o=n(44765),a=n(5482),c=n(26700);function f(t){return l.apply(this,arguments)}function l(){return(l=(0,s.Z)((0,r.Z)().mark((function t(e){var n,i,s,h,u,a,f,l,g,d;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,i=0,s=0,h=[],u=0;case 5:if(f=e.subarray(i),a=new c.Inflate,n=a.strm,a.push(f,c.Z_SYNC_FLUSH),!a.err){t.next=12;break}throw new Error(a.msg);case 12:i+=n.next_in,h[s]=a.result,u+=h[s].length,s+=1;case 16:if(n.avail_in){t.next=5;break}case 17:for(l=new Uint8Array(u),g=0,d=0;g<h.length;g++)l.set(h[g],d),d+=h[g].length;return t.abrupt("return",o.Buffer.from(l));case 22:if(t.prev=22,t.t0=t.catch(0),!"".concat(t.t0).match(/incorrect header check/)){t.next=26;break}throw new Error("problem decompressing block: incorrect gzip header check");case 26:throw t.t0;case 27:case"end":return t.stop()}}),t,null,[[0,22]])})))).apply(this,arguments)}function g(t){return d.apply(this,arguments)}function d(){return(d=(0,s.Z)((0,r.Z)().mark((function t(e){var n,i,s,h,u,a,f,l,g,d;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,i=0,s=0,h=[],u=[],a=[];case 6:if(f=e.slice(i),l=new c.Inflate,n=l.strm,l.push(f,c.Z_SYNC_FLUSH),!l.err){t.next=12;break}throw new Error(l.msg);case 12:g=o.Buffer.from(l.result),h.push(g),u.push(i),a.push(s),i+=n.next_in,s+=g.length;case 18:if(n.avail_in){t.next=6;break}case 19:return d=o.Buffer.concat(h),t.abrupt("return",{buffer:d,cpositions:u,dpositions:a});case 23:if(t.prev=23,t.t0=t.catch(0),!"".concat(t.t0).match(/incorrect header check/)){t.next=27;break}throw new Error("problem decompressing block: incorrect gzip header check");case 27:throw t.t0;case 28:case"end":return t.stop()}}),t,null,[[0,23]])})))).apply(this,arguments)}function p(t,e){return w.apply(this,arguments)}function w(){return(w=(0,s.Z)((0,r.Z)().mark((function t(e,n){var i,s,h,u,a,f,l,g,d,p,w,v,b,m,k,y,x,_,E;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,s=n.minv,h=n.maxv,u=s.blockPosition,a=s.dataPosition,f=[],l=[],g=[],d=0,p=0;case 9:if(w=e.subarray(u-s.blockPosition),v=new c.Inflate,i=v.strm,v.push(w,c.Z_SYNC_FLUSH),!v.err){t.next=15;break}throw new Error(v.msg);case 15:if(b=v.result,f.push(b),m=b.length,l.push(u),g.push(a),1===f.length&&s.dataPosition&&(f[0]=f[0].subarray(s.dataPosition),m=f[0].length),k=u,u+=i.next_in,a+=m,!(k>=h.blockPosition)){t.next=30;break}return f[p]=f[p].subarray(0,h.blockPosition===s.blockPosition?h.dataPosition-s.dataPosition+1:h.dataPosition+1),l.push(u),g.push(a),d+=f[p].length,t.abrupt("break",33);case 30:d+=f[p].length,p++;case 32:if(i.avail_in){t.next=9;break}case 33:for(y=new Uint8Array(d),x=0,_=0;x<f.length;x++)y.set(f[x],_),_+=f[x].length;return E=o.Buffer.from(y),t.abrupt("return",{buffer:E,cpositions:l,dpositions:g});case 39:if(t.prev=39,t.t0=t.catch(0),!"".concat(t.t0).match(/incorrect header check/)){t.next=43;break}throw new Error("problem decompressing block: incorrect gzip header check");case 43:throw t.t0;case 44:case"end":return t.stop()}}),t,null,[[0,39]])})))).apply(this,arguments)}var v=null;try{v=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch(j){}function b(t,e,n){this.low=0|t,this.high=0|e,this.unsigned=!!n}function m(t){return!0===(t&&t.__isLong__)}function k(t){var e=Math.clz32(t&-t);return t?31-e:e}b.prototype.__isLong__,Object.defineProperty(b.prototype,"__isLong__",{value:!0}),b.isLong=m;var y={},x={};function _(t,e){var n,i,r;return e?(r=0<=(t>>>=0)&&t<256)&&(i=x[t])?i:(n=Z(t,0,!0),r&&(x[t]=n),n):(r=-128<=(t|=0)&&t<128)&&(i=y[t])?i:(n=Z(t,t<0?-1:0,!1),r&&(y[t]=n),n)}function E(t,e){if(isNaN(t))return e?T:S;if(e){if(t<0)return T;if(t>=z)return P}else{if(t<=-U)return F;if(t+1>=U)return R}return t<0?E(-t,e).neg():Z(t%I|0,t/I|0,e)}function Z(t,e,n){return new b(t,e,n)}b.fromInt=_,b.fromNumber=E,b.fromBits=Z;var N=Math.pow;function B(t,e,n){if(0===t.length)throw Error("empty string");if("number"===typeof e?(n=e,e=!1):e=!!e,"NaN"===t||"Infinity"===t||"+Infinity"===t||"-Infinity"===t)return e?T:S;if((n=n||10)<2||36<n)throw RangeError("radix");var i;if((i=t.indexOf("-"))>0)throw Error("interior hyphen");if(0===i)return B(t.substring(1),e,n).neg();for(var r=E(N(n,8)),s=S,h=0;h<t.length;h+=8){var u=Math.min(8,t.length-h),o=parseInt(t.substring(h,h+u),n);if(u<8){var a=E(N(n,u));s=s.mul(a).add(E(o))}else s=(s=s.mul(r)).add(E(o))}return s.unsigned=e,s}function L(t,e){return"number"===typeof t?E(t,e):"string"===typeof t?B(t,e):Z(t.low,t.high,"boolean"===typeof e?e:t.unsigned)}b.fromString=B,b.fromValue=L;var I=4294967296,z=I*I,U=z/2,q=_(1<<24),S=_(0);b.ZERO=S;var T=_(0,!0);b.UZERO=T;var O=_(1);b.ONE=O;var A=_(1,!0);b.UONE=A;var M=_(-1);b.NEG_ONE=M;var R=Z(-1,2147483647,!1);b.MAX_VALUE=R;var P=Z(-1,-1,!0);b.MAX_UNSIGNED_VALUE=P;var F=Z(0,-2147483648,!1);b.MIN_VALUE=F;var C=b.prototype;C.toInt=function(){return this.unsigned?this.low>>>0:this.low},C.toNumber=function(){return this.unsigned?(this.high>>>0)*I+(this.low>>>0):this.high*I+(this.low>>>0)},C.toString=function(t){if((t=t||10)<2||36<t)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative()){if(this.eq(F)){var e=E(t),n=this.div(e),i=n.mul(e).sub(this);return n.toString(t)+i.toInt().toString(t)}return"-"+this.neg().toString(t)}for(var r=E(N(t,6),this.unsigned),s=this,h="";;){var u=s.div(r),o=(s.sub(u.mul(r)).toInt()>>>0).toString(t);if((s=u).isZero())return o+h;for(;o.length<6;)o="0"+o;h=""+o+h}},C.getHighBits=function(){return this.high},C.getHighBitsUnsigned=function(){return this.high>>>0},C.getLowBits=function(){return this.low},C.getLowBitsUnsigned=function(){return this.low>>>0},C.getNumBitsAbs=function(){if(this.isNegative())return this.eq(F)?64:this.neg().getNumBitsAbs();for(var t=0!=this.high?this.high:this.low,e=31;e>0&&0==(t&1<<e);e--);return 0!=this.high?e+33:e+1},C.isZero=function(){return 0===this.high&&0===this.low},C.eqz=C.isZero,C.isNegative=function(){return!this.unsigned&&this.high<0},C.isPositive=function(){return this.unsigned||this.high>=0},C.isOdd=function(){return 1===(1&this.low)},C.isEven=function(){return 0===(1&this.low)},C.equals=function(t){return m(t)||(t=L(t)),(this.unsigned===t.unsigned||this.high>>>31!==1||t.high>>>31!==1)&&(this.high===t.high&&this.low===t.low)},C.eq=C.equals,C.notEquals=function(t){return!this.eq(t)},C.neq=C.notEquals,C.ne=C.notEquals,C.lessThan=function(t){return this.comp(t)<0},C.lt=C.lessThan,C.lessThanOrEqual=function(t){return this.comp(t)<=0},C.lte=C.lessThanOrEqual,C.le=C.lessThanOrEqual,C.greaterThan=function(t){return this.comp(t)>0},C.gt=C.greaterThan,C.greaterThanOrEqual=function(t){return this.comp(t)>=0},C.gte=C.greaterThanOrEqual,C.ge=C.greaterThanOrEqual,C.compare=function(t){if(m(t)||(t=L(t)),this.eq(t))return 0;var e=this.isNegative(),n=t.isNegative();return e&&!n?-1:!e&&n?1:this.unsigned?t.high>>>0>this.high>>>0||t.high===this.high&&t.low>>>0>this.low>>>0?-1:1:this.sub(t).isNegative()?-1:1},C.comp=C.compare,C.negate=function(){return!this.unsigned&&this.eq(F)?F:this.not().add(O)},C.neg=C.negate,C.add=function(t){m(t)||(t=L(t));var e=this.high>>>16,n=65535&this.high,i=this.low>>>16,r=65535&this.low,s=t.high>>>16,h=65535&t.high,u=t.low>>>16,o=0,a=0,c=0,f=0;return c+=(f+=r+(65535&t.low))>>>16,a+=(c+=i+u)>>>16,o+=(a+=n+h)>>>16,o+=e+s,Z((c&=65535)<<16|(f&=65535),(o&=65535)<<16|(a&=65535),this.unsigned)},C.subtract=function(t){return m(t)||(t=L(t)),this.add(t.neg())},C.sub=C.subtract,C.multiply=function(t){if(this.isZero())return this;if(m(t)||(t=L(t)),v)return Z(v.mul(this.low,this.high,t.low,t.high),v.get_high(),this.unsigned);if(t.isZero())return this.unsigned?T:S;if(this.eq(F))return t.isOdd()?F:S;if(t.eq(F))return this.isOdd()?F:S;if(this.isNegative())return t.isNegative()?this.neg().mul(t.neg()):this.neg().mul(t).neg();if(t.isNegative())return this.mul(t.neg()).neg();if(this.lt(q)&&t.lt(q))return E(this.toNumber()*t.toNumber(),this.unsigned);var e=this.high>>>16,n=65535&this.high,i=this.low>>>16,r=65535&this.low,s=t.high>>>16,h=65535&t.high,u=t.low>>>16,o=65535&t.low,a=0,c=0,f=0,l=0;return f+=(l+=r*o)>>>16,c+=(f+=i*o)>>>16,f&=65535,c+=(f+=r*u)>>>16,a+=(c+=n*o)>>>16,c&=65535,a+=(c+=i*u)>>>16,c&=65535,a+=(c+=r*h)>>>16,a+=e*o+n*u+i*h+r*s,Z((f&=65535)<<16|(l&=65535),(a&=65535)<<16|(c&=65535),this.unsigned)},C.mul=C.multiply,C.divide=function(t){if(m(t)||(t=L(t)),t.isZero())throw Error("division by zero");var e,n,i;if(v)return this.unsigned||-2147483648!==this.high||-1!==t.low||-1!==t.high?Z((this.unsigned?v.div_u:v.div_s)(this.low,this.high,t.low,t.high),v.get_high(),this.unsigned):this;if(this.isZero())return this.unsigned?T:S;if(this.unsigned){if(t.unsigned||(t=t.toUnsigned()),t.gt(this))return T;if(t.gt(this.shru(1)))return A;i=T}else{if(this.eq(F))return t.eq(O)||t.eq(M)?F:t.eq(F)?O:(e=this.shr(1).div(t).shl(1)).eq(S)?t.isNegative()?O:M:(n=this.sub(t.mul(e)),i=e.add(n.div(t)));if(t.eq(F))return this.unsigned?T:S;if(this.isNegative())return t.isNegative()?this.neg().div(t.neg()):this.neg().div(t).neg();if(t.isNegative())return this.div(t.neg()).neg();i=S}for(n=this;n.gte(t);){e=Math.max(1,Math.floor(n.toNumber()/t.toNumber()));for(var r=Math.ceil(Math.log(e)/Math.LN2),s=r<=48?1:N(2,r-48),h=E(e),u=h.mul(t);u.isNegative()||u.gt(n);)u=(h=E(e-=s,this.unsigned)).mul(t);h.isZero()&&(h=O),i=i.add(h),n=n.sub(u)}return i},C.div=C.divide,C.modulo=function(t){return m(t)||(t=L(t)),v?Z((this.unsigned?v.rem_u:v.rem_s)(this.low,this.high,t.low,t.high),v.get_high(),this.unsigned):this.sub(this.div(t).mul(t))},C.mod=C.modulo,C.rem=C.modulo,C.not=function(){return Z(~this.low,~this.high,this.unsigned)},C.countLeadingZeros=function(){return this.high?Math.clz32(this.high):Math.clz32(this.low)+32},C.clz=C.countLeadingZeros,C.countTrailingZeros=function(){return this.low?k(this.low):k(this.high)+32},C.ctz=C.countTrailingZeros,C.and=function(t){return m(t)||(t=L(t)),Z(this.low&t.low,this.high&t.high,this.unsigned)},C.or=function(t){return m(t)||(t=L(t)),Z(this.low|t.low,this.high|t.high,this.unsigned)},C.xor=function(t){return m(t)||(t=L(t)),Z(this.low^t.low,this.high^t.high,this.unsigned)},C.shiftLeft=function(t){return m(t)&&(t=t.toInt()),0===(t&=63)?this:t<32?Z(this.low<<t,this.high<<t|this.low>>>32-t,this.unsigned):Z(0,this.low<<t-32,this.unsigned)},C.shl=C.shiftLeft,C.shiftRight=function(t){return m(t)&&(t=t.toInt()),0===(t&=63)?this:t<32?Z(this.low>>>t|this.high<<32-t,this.high>>t,this.unsigned):Z(this.high>>t-32,this.high>=0?0:-1,this.unsigned)},C.shr=C.shiftRight,C.shiftRightUnsigned=function(t){return m(t)&&(t=t.toInt()),0===(t&=63)?this:t<32?Z(this.low>>>t|this.high<<32-t,this.high>>>t,this.unsigned):Z(32===t?this.high:this.high>>>t-32,0,this.unsigned)},C.shru=C.shiftRightUnsigned,C.shr_u=C.shiftRightUnsigned,C.rotateLeft=function(t){var e;return m(t)&&(t=t.toInt()),0===(t&=63)?this:32===t?Z(this.high,this.low,this.unsigned):t<32?(e=32-t,Z(this.low<<t|this.high>>>e,this.high<<t|this.low>>>e,this.unsigned)):(e=32-(t-=32),Z(this.high<<t|this.low>>>e,this.low<<t|this.high>>>e,this.unsigned))},C.rotl=C.rotateLeft,C.rotateRight=function(t){var e;return m(t)&&(t=t.toInt()),0===(t&=63)?this:32===t?Z(this.high,this.low,this.unsigned):t<32?(e=32-t,Z(this.high<<e|this.low>>>t,this.low<<e|this.high>>>t,this.unsigned)):(e=32-(t-=32),Z(this.low<<e|this.high>>>t,this.high<<e|this.low>>>t,this.unsigned))},C.rotr=C.rotateRight,C.toSigned=function(){return this.unsigned?Z(this.low,this.high,!1):this},C.toUnsigned=function(){return this.unsigned?this:Z(this.low,this.high,!0)},C.toBytes=function(t){return t?this.toBytesLE():this.toBytesBE()},C.toBytesLE=function(){var t=this.high,e=this.low;return[255&e,e>>>8&255,e>>>16&255,e>>>24,255&t,t>>>8&255,t>>>16&255,t>>>24]},C.toBytesBE=function(){var t=this.high,e=this.low;return[t>>>24,t>>>16&255,t>>>8&255,255&t,e>>>24,e>>>16&255,e>>>8&255,255&e]},b.fromBytes=function(t,e,n){return n?b.fromBytesLE(t,e):b.fromBytesBE(t,e)},b.fromBytesLE=function(t,e){return new b(t[0]|t[1]<<8|t[2]<<16|t[3]<<24,t[4]|t[5]<<8|t[6]<<16|t[7]<<24,e)},b.fromBytesBE=function(t,e){return new b(t[4]<<24|t[5]<<16|t[6]<<8|t[7],t[0]<<24|t[1]<<16|t[2]<<8|t[3],e)};var W=b,G=function(){function t(e){var n=e.filehandle,i=e.path;if((0,h.Z)(this,t),n)this.filehandle=n;else{if(!i)throw new TypeError("either filehandle or path must be defined");this.filehandle=new a.S9(i)}}return(0,u.Z)(t,[{key:"_readLongWithOverflow",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=W.fromBytesLE(t.slice(e,e+8),n);if(i.greaterThan(Number.MAX_SAFE_INTEGER)||i.lessThan(Number.MIN_SAFE_INTEGER))throw new TypeError("integer overflow");return i.toNumber()}},{key:"_getIndex",value:function(){return this.index||(this.index=this._readIndex()),this.index}},{key:"_readIndex",value:function(){var t=(0,s.Z)((0,r.Z)().mark((function t(){var e,n,i,s,h,u,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=o.Buffer.allocUnsafe(8),t.next=3,this.filehandle.read(e,0,8,0);case 3:if(n=this._readLongWithOverflow(e,0,!0)){t.next=6;break}return t.abrupt("return",[[0,0]]);case 6:if((i=new Array(n+1))[0]=[0,0],!((s=16*n)>Number.MAX_SAFE_INTEGER)){t.next=11;break}throw new TypeError("integer overflow");case 11:return e=o.Buffer.allocUnsafe(s),t.next=14,this.filehandle.read(e,0,s,8);case 14:for(h=0;h<n;h+=1)u=this._readLongWithOverflow(e,16*h),a=this._readLongWithOverflow(e,16*h+8),i[h+1]=[u,a];return t.abrupt("return",i);case 16:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getLastBlock",value:function(){var t=(0,s.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this._getIndex();case 2:if((e=t.sent).length){t.next=5;break}return t.abrupt("return",void 0);case 5:return t.abrupt("return",e[e.length-1]);case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getRelevantBlocksForRead",value:function(){var t=(0,s.Z)((0,r.Z)().mark((function t(e,n){var i,s,h,u,o,a,c,f,l;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=n+e,0!==e){t.next=3;break}return t.abrupt("return",[]);case 3:return t.next=5,this._getIndex();case 5:for(s=t.sent,h=[],u=function(t,e){var i=t[1],r=e?e[1]:1/0;return i<=n&&r>n?0:i<n?-1:1},o=0,a=s.length-1,c=Math.floor(s.length/2),f=u(s[c],s[c+1]);0!==f;)f>0?a=c-1:f<0&&(o=c+1),c=Math.ceil((a-o)/2)+o,f=u(s[c],s[c+1]);h.push(s[c]),l=c+1;case 15:if(!(l<s.length)){t.next=22;break}if(h.push(s[l]),!(s[l][1]>=i)){t.next=19;break}return t.abrupt("break",22);case 19:l+=1,t.next=15;break;case 22:return h[h.length-1][1]<i&&h.push([]),t.abrupt("return",h);case 24:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()}]),t}(),H=function(){function t(e){var n=e.filehandle,i=e.path,r=e.gziFilehandle,s=e.gziPath;if((0,h.Z)(this,t),n)this.filehandle=n;else{if(!i)throw new TypeError("either filehandle or path must be defined");this.filehandle=new a.S9(i)}if(!r&&!s&&!i)throw new TypeError("either gziFilehandle or gziPath must be defined");this.gzi=new G({filehandle:r,path:r||s||!i?"".concat(i,".gzi"):s})}return(0,u.Z)(t,[{key:"stat",value:function(){var t=(0,s.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.filehandle.stat();case 2:return e=t.sent,t.t0=Object,t.t1=e,t.next=7,this.getUncompressedFileSize();case 7:return t.t2=t.sent,t.t3=void 0,t.t4=void 0,t.t5={size:t.t2,blocks:t.t3,blksize:t.t4},t.abrupt("return",t.t0.assign.call(t.t0,t.t1,t.t5));case 12:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getUncompressedFileSize",value:function(){var t=(0,s.Z)((0,r.Z)().mark((function t(){var e,n,s,h,u,a,c,f;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.gzi.getLastBlock();case 2:return e=t.sent,n=(0,i.Z)(e,2),s=n[1],t.next=7,this.filehandle.stat();case 7:return h=t.sent,u=h.size,a=o.Buffer.allocUnsafe(4),t.next=12,this.filehandle.read(a,0,4,u-28-4);case 12:if(c=t.sent,4===c.bytesRead){t.next=16;break}throw new Error("read error");case 16:return f=a.readUInt32LE(0),t.abrupt("return",s+f);case 18:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"_readAndUncompressBlock",value:function(){var t=(0,s.Z)((0,r.Z)().mark((function t(e,n,s){var h,u,o,a,c,l,g;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(h=(0,i.Z)(n,1),u=h[0],o=(0,i.Z)(s,1),a=o[0],c=a){t.next=7;break}return t.next=6,this.filehandle.stat();case 6:c=t.sent.size;case 7:return l=c-u,t.next=10,this.filehandle.read(e,0,l,u);case 10:return t.next=12,f(e.slice(0,l));case 12:return g=t.sent,t.abrupt("return",g);case 14:case"end":return t.stop()}}),t,this)})));return function(e,n,i){return t.apply(this,arguments)}}()},{key:"read",value:function(){var t=(0,s.Z)((0,r.Z)().mark((function t(e,n,s,h){var u,a,c,f,l,g,d,p,w,v;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.gzi.getRelevantBlocksForRead(s,h);case 2:u=t.sent,a=o.Buffer.allocUnsafe(65536),c=n,f=0,l=0;case 7:if(!(l<u.length-1)){t.next=18;break}return t.next=10,this._readAndUncompressBlock(a,u[l],u[l+1]);case 10:g=t.sent,d=(0,i.Z)(u[l],2),p=d[1],w=p>=h?0:h-p,v=Math.min(h+s,p+g.length)-p,w>=0&&w<g.length&&(g.copy(e,c,w,v),c+=v-w,f+=v-w);case 15:l+=1,t.next=7;break;case 18:return t.abrupt("return",{bytesRead:f,buffer:e});case 19:case"end":return t.stop()}}),t,this)})));return function(e,n,i,r){return t.apply(this,arguments)}}()}]),t}()}}]);
//# sourceMappingURL=2098.639c1cc7.chunk.js.map