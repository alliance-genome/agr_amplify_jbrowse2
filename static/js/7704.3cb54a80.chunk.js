this.checkLine(c,t,n,a,S),L=T.startCoordinate,C=T.overlaps,!(void 0!==v&&void 0!==L&&v>L)){e.next=54;break}throw new Error("Lines not sorted by start coordinate (".concat(v," > ").concat(L,"), this file is not usable with Tabix."));case 54:if(v=L,!C){e.next=59;break}u(S.trim(),256*w[Z]+(y-g[Z])+m.minv.dataPosition+1),e.next=61;break;case 59:if(!(void 0!==L&&L>=a)){e.next=61;break}return e.abrupt("return");case 61:if(!(this.yieldTime&&l-Date.now()>this.yieldTime)){e.next=66;break}return l=Date.now(),b(o),e.next=66,M(1);case 66:y=I+1,e.next=44;break;case 69:p+=1,e.next=32;break;case 72:case"end":return e.stop()}}),e,this)})));return function(t,n,r,a){return e.apply(this,arguments)}}()},{key:"getMetadata",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t,n=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{},e.abrupt("return",this.index.getMetadata(t));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getHeaderBuffer",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t,n,a,i,o,s,u,c,f,h,l,p=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=p.length>0&&void 0!==p[0]?p[0]:{},e.next=3,this.getMetadata(t);case 3:return n=e.sent,a=n.firstDataLine,i=n.metaChar,o=n.maxBlockSize,b(t.signal),s=((null===a||void 0===a?void 0:a.blockPosition)||0)+o,e.next=11,this._readRegion(0,s,t);case 11:return u=e.sent,b(t.signal),e.prev=13,e.next=16,(0,d.unzip)(u);case 16:u=e.sent,e.next=23;break;case 19:throw e.prev=19,e.t0=e.catch(13),console.error(e.t0),new Error("error decompressing block ".concat(e.t0.code," at 0 (length ").concat(s,") ").concat(e.t0));case 23:if(!i){e.next=36;break}c=-1,f="\n".charCodeAt(0),h=i.charCodeAt(0),l=0;case 28:if(!(l<u.length)){e.next=35;break}if(l!==c+1||u[l]===h){e.next=31;break}return e.abrupt("break",35);case 31:u[l]===f&&(c=l);case 32:l+=1,e.next=28;break;case 35:u=u.slice(0,c+1);case 36:return e.abrupt("return",u);case 37:case"end":return e.stop()}}),e,this,[[13,19]])})));return function(){return e.apply(this,arguments)}}()},{key:"getHeader",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t,n,a=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{},e.next=3,this.getHeaderBuffer(t);case 3:return n=e.sent,e.abrupt("return",n.toString("utf8"));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getReferenceSequenceNames",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t,n,a=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{},e.next=3,this.getMetadata(t);case 3:return n=e.sent,e.abrupt("return",n.refIdToName);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"checkLine",value:function(e,t,n,r,a){var i=e.columnNumbers,o=e.metaChar,s=e.coordinateType,u=e.format;if(a.charAt(0)===o)return{overlaps:!1};var c=i.ref,f=i.start,h=i.end;c||(c=0),f||(f=0),h||(h=0),"VCF"===u&&(h=8);for(var d=Math.max(c,f,h),l=1,p=0,v="",m=-1/0,b=0;b<a.length+1;b+=1)if("\t"===a[b]||b===a.length){if(l===c){if(this.renameRefSeq(a.slice(p,b))!==t)return{overlaps:!1}}else if(l===f){if(m=parseInt(a.slice(p,b),10),"1-based-closed"===s&&(m-=1),m>=r)return{startCoordinate:m,overlaps:!1};if((0===h||h===f)&&m+1<=n)return{startCoordinate:m,overlaps:!1}}else if("VCF"===u&&4===l)v=a.slice(p,b);else if(l===h){if(("VCF"===u?this._getVcfEnd(m,v,a.slice(p,b)):parseInt(a.slice(p,b),10))<=n)return{overlaps:!1}}if(p=b+1,(l+=1)>d)break}return{startCoordinate:m,overlaps:!0}}},{key:"_getVcfEnd",value:function(e,t,n){var r=e+t.length,a=-1!==n.indexOf("SVTYPE=TRA");if("."===n[0]||a){if(a)return e+1}else for(var i=";",o=0;o<n.length;o+=1){if(";"===i&&"END="===n.slice(o,o+4)){var s=n.indexOf(";",o);-1===s&&(s=n.length),r=parseInt(n.slice(o+4,s),10);break}i=n[o]}return r}},{key:"lineCount",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:{},e.abrupt("return",this.index.lineCount(t,n));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_readRegion",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a,i,o,s,u,c=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>2&&void 0!==c[2]?c[2]:{},i=z.alloc(n),e.next=4,this.filehandle.read(i,0,n,t,a);case 4:return o=e.sent,s=o.bytesRead,u=o.buffer,e.abrupt("return",u.slice(0,s));case 8:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"readChunk",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,i=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:{},e.next=3,this._readRegion(t.minv.blockPosition,t.fetchedSize(),n);case 3:return a=e.sent,e.prev=4,e.abrupt("return",(0,d.unzipChunkSlice)(a,t));case 8:throw e.prev=8,e.t0=e.catch(4),new Error("error decompressing c ".concat(t.toString()," ").concat(e.t0));case 11:case"end":return e.stop()}}),e,this,[[4,8]])})));return function(t){return e.apply(this,arguments)}}()}]),e}()}}]);
//# sourceMappingURL=7704.3cb54a80.chunk.js.map"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[7704],{7704:function(e,t,n){n.d(t,{pC:function(){return q}});var r=n(32723),a=n(34795),i=n(9249),o=n(87371),s=n(64926),u=n.n(s),c=n(97779),f=n.n(c),h=n(18973),d=n(16959),l=n(45754),p=n(13820);function v(e){if(e.greaterThan(Number.MAX_SAFE_INTEGER)||e.lessThan(Number.MIN_SAFE_INTEGER))throw new Error("integer overflow");return e.toNumber()}var m=function(e){(0,l.Z)(n,e);var t=(0,p.Z)(n);function n(){return(0,i.Z)(this,n),t.apply(this,arguments)}return(0,o.Z)(n)}((0,n(30364).Z)(Error));function b(e){if(e&&e.aborted){if("undefined"!==typeof DOMException)throw new DOMException("aborted","AbortError");var t=new m("aborted");throw t.code="ERR_ABORTED",t}}function x(e,t){var n=[],r=null;return 0===e.length?e:(e.sort((function(e,t){var n=e.minv.blockPosition-t.minv.blockPosition;return 0!==n?n:e.minv.dataPosition-t.minv.dataPosition})),e.forEach((function(e){var a,i;(!t||e.maxv.compareTo(t)>0)&&(null===r?(n.push(e),r=e):(a=r,(i=e).minv.blockPosition-a.maxv.blockPosition<65e3&&i.maxv.blockPosition-a.minv.blockPosition<5e6?e.maxv.compareTo(r.maxv)>0&&(r.maxv=e.maxv):(n.push(e),r=e)))})),n)}var k=n(96234),w=n(41361),g=n(62094),y=n.n(g),Z=function(){function e(t,n){(0,i.Z)(this,e),this.blockPosition=t,this.dataPosition=n}return(0,o.Z)(e,[{key:"toString",value:function(){return"".concat(this.blockPosition,":").concat(this.dataPosition)}},{key:"compareTo",value:function(e){return this.blockPosition-e.blockPosition||this.dataPosition-e.dataPosition}}],[{key:"min",value:function(){for(var e,t=0,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];for(;!e;t+=1)e=r[t];for(;t<r.length;t+=1)e.compareTo(r[t])>0&&(e=r[t]);return e}}]),e}();function I(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(arguments.length>2&&void 0!==arguments[2]&&arguments[2])throw new Error("big-endian virtual file offsets not implemented");return new Z(1099511627776*e[t+7]+4294967296*e[t+6]+16777216*e[t+5]+65536*e[t+4]+256*e[t+3]+e[t+2],e[t+1]<<8|e[t])}var E=function(){function e(t,n,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0;(0,i.Z)(this,e),this.minv=t,this.maxv=n,this.bin=r,this._fetchedSize=a}return(0,o.Z)(e,[{key:"toUniqueString",value:function(){return"".concat(this.minv,"..").concat(this.maxv," (bin ").concat(this.bin,", fetchedSize ").concat(this.fetchedSize(),")")}},{key:"toString",value:function(){return this.toUniqueString()}},{key:"compareTo",value:function(e){return this.minv.compareTo(e.minv)||this.maxv.compareTo(e.maxv)||this.bin-e.bin}},{key:"fetchedSize",value:function(){return void 0!==this._fetchedSize?this._fetchedSize:this.maxv.blockPosition+65536-this.minv.blockPosition}}]),e}(),S=n(59740),T=["indices"],L=function(){function e(t){var n=t.filehandle,r=t.renameRefSeqs,a=void 0===r?function(e){return e}:r;(0,i.Z)(this,e),this.filehandle=n,this.renameRefSeq=a}return(0,o.Z)(e,[{key:"getMetadata",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t,n,a,i=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:{},e.next=3,this.parse(t);case 3:return n=e.sent,n.indices,a=(0,S.Z)(n,T),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_findFirstData",value:function(e,t){return e?e.compareTo(t)>0?t:e:t}},{key:"parse",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t,n=this,a=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{},this.parseP||(this.parseP=this._parse(t).catch((function(e){throw n.parseP=void 0,e}))),e.abrupt("return",this.parseP);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"hasRefSeq",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:{},e.next=3,this.parse(n);case 3:if(e.t1=t,e.t0=e.sent.indices[e.t1],e.t0){e.next=7;break}e.t0={};case 7:return e.abrupt("return",!!e.t0.binIndex);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}();function C(e,t){return[[0,0],[1+((e+=1)>>26),1+((t-=1)>>26)],[9+(e>>23),9+(t>>23)],[73+(e>>20),73+(t>>20)],[585+(e>>17),585+(t>>17)],[4681+(e>>14),4681+(t>>14)]]}var N=function(e){(0,l.Z)(n,e);var t=(0,p.Z)(n);function n(){return(0,i.Z)(this,n),t.apply(this,arguments)}return(0,o.Z)(n,[{key:"lineCount",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,i,o,s=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:{},e.next=3,this.parse(n);case 3:if(a=e.sent){e.next=6;break}return e.abrupt("return",-1);case 6:if(i=a.refNameToId[t],a.indices[i]){e.next=10;break}return e.abrupt("return",-1);case 10:if(!(o=a.indices[i].stats)){e.next=13;break}return e.abrupt("return",o.lineCount);case 13:return e.abrupt("return",-1);case 14:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_parse",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t,n,a,i,o,s,u,c,f,h,l,p,v,m,x,k,w,g,y,Z,S=this,T=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=T.length>0&&void 0!==T[0]?T[0]:{},e.next=3,this.filehandle.readFile(t);case 3:return n=e.sent,e.next=6,(0,d.unzip)(n);case 6:if(a=e.sent,b(t.signal),21578324===a.readUInt32LE(0)){e.next=10;break}throw new Error("Not a TBI file");case 10:if(i=a.readInt32LE(4),o=a.readInt32LE(8),s=65536&o?"zero-based-half-open":"1-based-closed",u={0:"generic",1:"SAM",2:"VCF"}[15&o]){e.next=17;break}throw new Error("invalid Tabix preset format flags ".concat(o));case 17:return c={ref:a.readInt32LE(12),start:a.readInt32LE(16),end:a.readInt32LE(20)},f=a.readInt32LE(24),5,h=37449,l=Math.pow(2,29),p=f?String.fromCharCode(f):null,v=a.readInt32LE(28),m=a.readInt32LE(32),x=this._parseNameBytes(a.slice(36,36+m)),k=x.refNameToId,w=x.refIdToName,g=36+m,Z=new Array(i).fill(0).map((function(){var e=a.readInt32LE(g);g+=4;for(var t,n={},r=0;r<e;r+=1){var i=a.readUInt32LE(g);if(g+=4,i>37450)throw new Error("tabix index contains too many bins, please use a CSI index");if(37450===i){var o=a.readInt32LE(g);g+=4,2===o&&(t=S.parsePseudoBin(a,g)),g+=16*o}else{var s=a.readInt32LE(g);g+=4;for(var u=new Array(s),c=0;c<s;c+=1){var f=I(a,g),h=I(a,g+8);g+=16,y=S._findFirstData(y,f),u[c]=new E(f,h,i)}n[i]=u}}var d=a.readInt32LE(g);g+=4;for(var l=new Array(d),p=0;p<d;p+=1)l[p]=I(a,g),g+=8,y=S._findFirstData(y,l[p]);return{binIndex:n,linearIndex:l,stats:t}})),e.abrupt("return",{indices:Z,metaChar:p,maxBinNumber:h,maxRefLength:l,skipLines:v,firstDataLine:y,columnNumbers:c,coordinateType:s,format:u,refIdToName:w,refNameToId:k,maxBlockSize:65536});case 29:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"parsePseudoBin",value:function(e,t){return{lineCount:v(y().fromBytesLE(e.slice(t+16,t+24),!0))}}},{key:"_parseNameBytes",value:function(e){for(var t=0,n=0,r=[],a={},i=0;i<e.length;i+=1)if(!e[i]){if(n<i){var o=e.toString("utf8",n,i);o=this.renameRefSeq(o),r[t]=o,a[o]=t}n=i+1,t+=1}return{refNameToId:a,refIdToName:r}}},{key:"blocksForRange",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n,a){var i,o,s,u,c,f,h,d,l,p,v,m,b,g,y,I,S,T,L,N,P=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=P.length>3&&void 0!==P[3]?P[3]:{},n<0&&(n=0),e.next=4,this.parse(i);case 4:if(o=e.sent){e.next=7;break}return e.abrupt("return",[]);case 7:if(s=o.refNameToId[t],u=o.indices[s]){e.next=11;break}return e.abrupt("return",[]);case 11:(u.linearIndex.length?u.linearIndex[n>>14>=u.linearIndex.length?u.linearIndex.length-1:n>>14]:new Z(0,0))||console.warn("querying outside of possible tabix range"),c=C(n,a),f=[],h=(0,w.Z)(c);try{for(h.s();!(d=h.n()).done;)for(l=(0,k.Z)(d.value,2),p=l[0],v=l[1],m=p;m<=v;m++)if(u.binIndex[m])for(b=u.binIndex[m],g=0;g<b.length;++g)f.push(new E(b[g].minv,b[g].maxv,m))}catch(r){h.e(r)}finally{h.f()}for(y=u.linearIndex.length,I=null,S=Math.min(n>>14,y-1),T=Math.min(a>>14,y-1),L=S;L<=T;++L)(N=u.linearIndex[L])&&(!I||N.compareTo(I)<0)&&(I=N);return e.abrupt("return",x(f,I));case 23:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()}]),n}(L),P=n(33028);function R(e,t){return Math.floor(e/Math.pow(2,t))}var _=function(e){(0,l.Z)(n,e);var t=(0,p.Z)(n);function n(e){var r;return(0,i.Z)(this,n),(r=t.call(this,e)).maxBinNumber=0,r.depth=0,r.minShift=0,r}return(0,o.Z)(n,[{key:"lineCount",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,i,o,s=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:{},e.next=3,this.parse(n);case 3:if(a=e.sent){e.next=6;break}return e.abrupt("return",-1);case 6:if(i=a.refNameToId[t],a.indices[i]){e.next=10;break}return e.abrupt("return",-1);case 10:if(!(o=a.indices[i].stats)){e.next=13;break}return e.abrupt("return",o.lineCount);case 13:return e.abrupt("return",-1);case 14:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"indexCov",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:throw new Error("CSI indexes do not support indexcov");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"parseAuxData",value:function(e,t){var n=e.readInt32LE(t),r=65536&n?"zero-based-half-open":"1-based-closed",a={0:"generic",1:"SAM",2:"VCF"}[15&n];if(!a)throw new Error("invalid Tabix preset format flags ".concat(n));var i={ref:e.readInt32LE(t+4),start:e.readInt32LE(t+8),end:e.readInt32LE(t+12)},o=e.readInt32LE(t+16),s=o?String.fromCharCode(o):null,u=e.readInt32LE(t+20),c=e.readInt32LE(t+24),f=this._parseNameBytes(e.slice(t+28,t+28+c));return{refIdToName:f.refIdToName,refNameToId:f.refNameToId,skipLines:u,metaChar:s,columnNumbers:i,format:a,coordinateType:r}}},{key:"_parseNameBytes",value:function(e){for(var t=0,n=0,r=[],a={},i=0;i<e.length;i+=1)if(!e[i]){if(n<i){var o=e.toString("utf8",n,i);o=this.renameRefSeq(o),r[t]=o,a[o]=t}n=i+1,t+=1}return{refNameToId:a,refIdToName:r}}},{key:"_parse",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t,n,a,i,o,s,u,c,f,h,l=this,p=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=p.length>0&&void 0!==p[0]?p[0]:{},e.t0=d.unzip,e.next=4,this.filehandle.readFile(t);case 4:return e.t1=e.sent,e.next=7,(0,e.t0)(e.t1);case 7:if(21582659!==(n=e.sent).readUInt32LE(0)){e.next=12;break}a=1,e.next=17;break;case 12:if(38359875!==n.readUInt32LE(0)){e.next=16;break}a=2,e.next=17;break;case 16:throw new Error("Not a CSI file");case 17:return this.minShift=n.readInt32LE(4),this.depth=n.readInt32LE(8),this.maxBinNumber=((1<<3*(this.depth+1))-1)/7,i=Math.pow(2,this.minShift+3*this.depth),o=n.readInt32LE(12),s=o&&o>=30?this.parseAuxData(n,16):{refIdToName:[],refNameToId:{},metaChar:null,columnNumbers:{ref:0,start:1,end:2},coordinateType:"zero-based-half-open",format:"generic"},u=n.readInt32LE(16+o),f=16+o+4,h=new Array(u).fill(0).map((function(){var e=n.readInt32LE(f);f+=4;for(var t,r={},a=0;a<e;a+=1){var i=n.readUInt32LE(f);if(i>l.maxBinNumber)t=l.parsePseudoBin(n,f+4),f+=48;else{var o=I(n,f+4);c=l._findFirstData(c,o);var s=n.readInt32LE(f+12);f+=16;for(var u=new Array(s),h=0;h<s;h+=1){var d=I(n,f),p=I(n,f+8);f+=16,u[h]=new E(d,p,i)}r[i]=u}}return{binIndex:r,stats:t}})),e.abrupt("return",(0,P.Z)((0,P.Z)({},s),{},{csi:!0,refCount:u,maxBlockSize:65536,firstDataLine:c,csiVersion:a,indices:h,depth:this.depth,maxBinNumber:this.maxBinNumber,maxRefLength:i}));case 27:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"parsePseudoBin",value:function(e,t){return{lineCount:v(y().fromBytesLE(e.slice(t+28,t+36),!0))}}},{key:"blocksForRange",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n,a){var i,o,s,u,c,f,h,d,l,p,v,m,b,g,y=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=y.length>3&&void 0!==y[3]?y[3]:{},n<0&&(n=0),e.next=4,this.parse(i);case 4:if(o=e.sent){e.next=7;break}return e.abrupt("return",[]);case 7:if(s=o.refNameToId[t],u=o.indices[s]){e.next=11;break}return e.abrupt("return",[]);case 11:c=this.reg2bins(n,a),f=[],h=(0,w.Z)(c);try{for(h.s();!(d=h.n()).done;)for(l=(0,k.Z)(d.value,2),p=l[0],v=l[1],m=p;m<=v;m++)if(u.binIndex[m])for(b=u.binIndex[m],g=0;g<b.length;++g)f.push(new E(b[g].minv,b[g].maxv,m))}catch(r){h.e(r)}finally{h.f()}return e.abrupt("return",x(f,new Z(0,0)));case 16:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"reg2bins",value:function(e,t){(e-=1)<1&&(e=1),t>Math.pow(2,50)&&(t=Math.pow(2,34)),t-=1;for(var n,r=0,a=0,i=this.minShift+3*this.depth,o=[];r<=this.depth;i-=3,a+=(n=3*r,1*Math.pow(2,n)),r+=1){var s=a+R(e,i),u=a+R(t,i);if(u-s+o.length>this.maxBinNumber)throw new Error("query ".concat(e,"-").concat(t," is too large for current binning scheme (shift ").concat(this.minShift,", depth ").concat(this.depth,"), try a smaller query or a coarser index binning scheme"));o.push([s,u])}return o}}]),n}(L),z=n(97960).lW,B="undefined"!==typeof TextDecoder?new TextDecoder("utf-8"):void 0;function M(e){return new Promise((function(t){return setTimeout(t,e)}))}var q=function(){function e(t){var n=this,r=t.path,a=t.filehandle,o=t.tbiPath,s=t.tbiFilehandle,c=t.csiPath,d=t.csiFilehandle,l=t.yieldTime,p=void 0===l?500:l,v=t.chunkSizeLimit,m=void 0===v?5e7:v,b=t.renameRefSeqs,x=void 0===b?function(e){return e}:b,k=t.chunkCacheSize,w=void 0===k?5*Math.pow(2,20):k;if((0,i.Z)(this,e),a)this.filehandle=a;else{if(!r)throw new TypeError("must provide either filehandle or path");this.filehandle=new h.S9(r)}if(s)this.index=new N({filehandle:s,renameRefSeqs:x});else if(d)this.index=new _({filehandle:d,renameRefSeqs:x});else if(o)this.index=new N({filehandle:new h.S9(o),renameRefSeqs:x});else if(c)this.index=new _({filehandle:new h.S9(c),renameRefSeqs:x});else{if(!r)throw new TypeError("must provide one of tbiFilehandle, tbiPath, csiFilehandle, or csiPath");this.index=new N({filehandle:new h.S9("".concat(r,".tbi")),renameRefSeqs:x})}this.chunkSizeLimit=m,this.renameRefSeq=x,this.yieldTime=p,this.chunkCache=new(u())({cache:new(f())({maxSize:Math.floor(w/65536)}),fill:function(e,t){return n.readChunk(e,{signal:t})}})}return(0,o.Z)(e,[{key:"getLines",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t,n,a,i){var o,s,u,c,f,h,d,l,p,v,m,x,k,w,g,y,Z,I,E,S,T,L,C;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s={},"undefined"!==typeof i){e.next=3;break}throw new TypeError("line callback must be provided");case 3:if("function"===typeof i?u=i:(s=i,u=i.lineCallback),void 0!==t){e.next=6;break}throw new TypeError("must provide a reference sequence name");case 6:if(u){e.next=8;break}throw new TypeError("line callback must be provided");case 8:return e.next=10,this.index.getMetadata(s);case 10:if(c=e.sent,b(o),n||(n=0),a||(a=c.maxRefLength),n<=a){e.next=16;break}throw new TypeError("invalid start and end coordinates. start must be less than or equal to end");case 16:if(n!==a){e.next=18;break}return e.abrupt("return");case 18:return e.next=20,this.index.blocksForRange(t,n,a,s);case 20:f=e.sent,b(o),h=0;case 23:if(!(h<f.length)){e.next=30;break}if(!((d=f[h].fetchedSize())>this.chunkSizeLimit)){e.next=27;break}throw new Error("Too much data. Chunk size ".concat(d.toLocaleString()," bytes exceeds chunkSizeLimit of ").concat(this.chunkSizeLimit.toLocaleString(),"."));case 27:h+=1,e.next=23;break;case 30:l=Date.now(),p=0;case 32:if(!(p<f.length)){e.next=72;break}return v=void 0,m=f[p],e.next=37,this.chunkCache.get(m.toString(),m);case 37:x=e.sent,k=x.buffer,w=x.cpositions,g=x.dpositions,b(o),y=0,Z=0;case 44:if(!(y<k.length)){e.next=69;break}if(-1!==(I=k.indexOf("\n",y))){e.next=48;break}return e.abrupt("break",69);case 48:if(E=k.slice(y,I),S=(null===B||void 0===B?void 0:B.decode(E))||E.toString(),g){for(;y+m.minv.dataPosition>=g[Z++];);Z--}if(T=