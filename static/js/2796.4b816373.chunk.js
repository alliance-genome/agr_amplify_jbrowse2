"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[2796,9202],{63409:function(e,t,a){var n=a(32723),r=a(96234),i=a(41361),s=a(9249),c=a(87371),u=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if((0,s.Z)(this,t),!(e.maxSize&&e.maxSize>0))throw new TypeError("`maxSize` must be a number greater than 0");this.maxSize=e.maxSize,this.cache=new Map,this.oldCache=new Map,this._size=0}return(0,c.Z)(t,[{key:"_set",value:function(e,t){this.cache.set(e,t),this._size+=1,this._size>=this.maxSize&&(this._size=0,this.oldCache=this.cache,this.cache=new Map)}},{key:"get",value:function(e){if(this.cache.has(e))return this.cache.get(e);if(this.oldCache.has(e)){var t=this.oldCache.get(e);return this.oldCache.delete(e),this._set(e,t),t}}},{key:"set",value:function(e,t){return this.cache.has(e)?this.cache.set(e,t):this._set(e,t),this}},{key:"has",value:function(e){return this.cache.has(e)||this.oldCache.has(e)}},{key:"peek",value:function(e){return this.cache.has(e)?this.cache.get(e):this.oldCache.has(e)?this.oldCache.get(e):void 0}},{key:"delete",value:function(e){var t=this.cache.delete(e);return t&&(this._size-=1),this.oldCache.delete(e)||t}},{key:"clear",value:function(){this.cache.clear(),this.oldCache.clear(),this._size=0}},{key:"keys",value:(0,n.Z)().mark((function e(){var t,a,s,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=(0,i.Z)(this),e.prev=1,t.s();case 3:if((a=t.n()).done){e.next=9;break}return s=(0,r.Z)(a.value,1),c=s[0],e.next=7,c;case 7:e.next=3;break;case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t.e(e.t0);case 14:return e.prev=14,t.f(),e.finish(14);case 17:case"end":return e.stop()}}),e,this,[[1,11,14,17]])}))},{key:"values",value:(0,n.Z)().mark((function e(){var t,a,s,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=(0,i.Z)(this),e.prev=1,t.s();case 3:if((a=t.n()).done){e.next=9;break}return s=(0,r.Z)(a.value,2),c=s[1],e.next=7,c;case 7:e.next=3;break;case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t.e(e.t0);case 14:return e.prev=14,t.f(),e.finish(14);case 17:case"end":return e.stop()}}),e,this,[[1,11,14,17]])}))},{key:e,value:(0,n.Z)().mark((function e(){var t,a,s,c,u,o,h,f;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=(0,i.Z)(this.cache),e.prev=1,t.s();case 3:if((a=t.n()).done){e.next=9;break}return s=a.value,e.next=7,s;case 7:e.next=3;break;case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t.e(e.t0);case 14:return e.prev=14,t.f(),e.finish(14);case 17:c=(0,i.Z)(this.oldCache),e.prev=18,c.s();case 20:if((u=c.n()).done){e.next=28;break}if(o=u.value,h=(0,r.Z)(o,1),f=h[0],this.cache.has(f)){e.next=26;break}return e.next=26,o;case 26:e.next=20;break;case 28:e.next=33;break;case 30:e.prev=30,e.t1=e.catch(18),c.e(e.t1);case 33:return e.prev=33,c.f(),e.finish(33);case 36:case"end":return e.stop()}}),e,this,[[1,11,14,17],[18,30,33,36]])}))},{key:"size",get:function(){var e,t=0,a=(0,i.Z)(this.oldCache.keys());try{for(a.s();!(e=a.n()).done;){var n=e.value;this.cache.has(n)||(t+=1)}}catch(r){a.e(r)}finally{a.f()}return this._size+t}}]),t}(Symbol.iterator);t.Z=u},2796:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var n=a(87371),r=a(9249),i=a(45754),s=a(86906),c=a(33736),u=a(33528),o=a(9077),h=function(e){(0,i.Z)(a,e);var t=(0,s.Z)(a);function a(e,n,i){var s;(0,r.Z)(this,a),s=t.call(this,e,n,i);var h=(0,o.readConfObject)(e,"fastaLocation"),f=(0,o.readConfObject)(e,"faiLocation"),l=(0,o.readConfObject)(e,"gziLocation");if(!h)throw new Error("must provide fastaLocation");if(!f)throw new Error("must provide faiLocation");if(!l)throw new Error("must provide gziLocation");var v={fasta:(0,u.openLocation)(h,s.pluginManager),fai:(0,u.openLocation)(f,s.pluginManager),gzi:(0,u.openLocation)(l,s.pluginManager)};return s.fasta=new c.IB(v),s}return(0,n.Z)(a)}(a(29202).default)},29202:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var n=a(32723),r=a(33028),i=a(34795),s=a(9249),c=a(87371),u=a(45754),o=a(86906),h=a(33736),f=a(29598),l=a(33528),v=a(26131),p=a(81073),d=a(89410),k=a.n(d),Z=a(63409),g=function(e){(0,u.Z)(a,e);var t=(0,o.Z)(a);function a(e,c,u){var o;(0,s.Z)(this,a),(o=t.call(this,e,c,u)).fasta=void 0,o.header=void 0,o.seqCache=new(k())({cache:new Z.Z({maxSize:200}),fill:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t,a){var i,s,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.refName,s=t.start,c=t.end,e.abrupt("return",o.fasta.getSequence(i,s,c,(0,r.Z)((0,r.Z)({},t),{},{signal:a})));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()});var f=o.getConf("fastaLocation"),v=o.getConf("faiLocation"),p={fasta:(0,l.openLocation)(f,o.pluginManager),fai:(0,l.openLocation)(v,o.pluginManager)};return o.fasta=new h.P(p),o}return(0,c.Z)(a,[{key:"getRefNames",value:function(e){return this.fasta.getSequenceNames(e)}},{key:"getRegions",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fasta.getSequenceSizes(t);case 2:return a=e.sent,e.abrupt("return",Object.keys(a).map((function(e){return{refName:e,start:0,end:a[e]}})));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getHeader",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(){var t,a=this;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.header){e.next=2;break}return e.abrupt("return",this.header);case 2:if(""!==(t=this.getConf("metadataLocation")).uri&&"/path/to/fa.metadata.yaml"!==t.uri){e.next=5;break}return e.abrupt("return",null);case 5:return this.header=(0,l.openLocation)(t).readFile("utf8").catch((function(e){throw a.header=void 0,e})),e.abrupt("return",this.header);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getFeatures",value:function(e,t){var a=this,r=e.refName,s=e.start,c=e.end;return(0,v.ObservableCreate)(function(){var e=(0,i.Z)((0,n.Z)().mark((function e(i){var u,o,h,f,l,v,d,k,Z;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.fasta.getSequenceSize(r,t);case 2:for(u=e.sent,o=void 0!==u?Math.min(u,c):c,h=[],v=c+((f=128e3)-c%f),d=l=s-s%f;d<v;d+=f)k={refName:r,start:d,end:d+f},h.push(a.seqCache.get(JSON.stringify(k),k,null===t||void 0===t?void 0:t.signal));return e.next=11,Promise.all(h);case 11:(Z=e.sent.join("").slice(s-l).slice(0,c-s))&&i.next(new p.SimpleFeature({id:"".concat(r," ").concat(s,"-").concat(o),data:{refName:r,start:s,end:o,seq:Z}})),i.complete();case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},{key:"freeResources",value:function(){}}]),a}(f.BaseSequenceAdapter)}}]);
//# sourceMappingURL=2796.4b816373.chunk.js.map