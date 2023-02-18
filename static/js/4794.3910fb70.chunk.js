"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[4794,6824],{16824:function(e,t,r){r.r(t),r.d(t,{default:function(){return Z}});var n=r(41361),a=r(32723),i=r(34795),u=r(9249),s=r(87371),c=r(93069),o=r(95058),f=r(45754),d=r(86906),h=r(77431),p=r(29598),g=r(81073),l=r(33528),v=r(26131),m=r(26080),b=r(9077),_=r(33028),k=r(68079),y=r(99703),x=function(){function e(t,r,n){(0,u.Z)(this,e),this.record=t,this.adapter=r,this.ref=n}return(0,s.Z)(e,[{key:"_get_name",value:function(){return this.record.get("name")}},{key:"_get_type",value:function(){return"match"}},{key:"_get_score",value:function(){return this.record.get("mq")}},{key:"_get_flags",value:function(){return this.record.flags}},{key:"_get_strand",value:function(){return this.record.isReverseComplemented()?-1:1}},{key:"_get_pair_orientation",value:function(){return this.record.isPaired()?this.record.getPairOrientation():void 0}},{key:"_get_next_seq_id",value:function(){return this.record._next_refid()}},{key:"_get_seq_id",value:function(){return this.record._refID}},{key:"_get_next_refName",value:function(){return this.adapter.refIdToName(this.record._next_refid())}},{key:"_get_next_segment_position",value:function(){var e=this.record,t=this.adapter;return e.isPaired()?"".concat(t.refIdToName(e._next_refid()),":").concat(e._next_pos()+1):void 0}},{key:"_get_seq",value:function(){return this.record.getReadBases()}},{key:"qualRaw",value:function(){return this.record.qualRaw()}},{key:"set",value:function(){}},{key:"tags",value:function(){var t=Object.getOwnPropertyNames(e.prototype);return(0,k.Z)(new Set(t.filter((function(e){return e.startsWith("_get_")&&"_get_mismatches"!==e&&"_get_tags"!==e&&"_get_next_seq_id"!==e&&"_get_seq_id"!==e})).map((function(e){return e.replace("_get_","")})).concat(this.record._tags())))}},{key:"id",value:function(){return"".concat(this.adapter.id,"-").concat(this.record.id())}},{key:"get",value:function(e){var t="_get_".concat(e);return this[t]?this[t]():this.record.get(e)}},{key:"_get_refName",value:function(){return this.adapter.refIdToName(this.record.seq_id())}},{key:"parent",value:function(){}},{key:"children",value:function(){}},{key:"pairedFeature",value:function(){return!1}},{key:"toJSON",value:function(){var e=this;return(0,_.Z)((0,_.Z)({},Object.fromEntries(this.tags().map((function(t){return[t,e.get(t)]})).filter((function(e){return void 0!==e[1]})))),{},{uniqueId:this.id()})}},{key:"_get_mismatches",value:function(){return(0,y.getMismatches)(this.get("CIGAR"),this.get("MD"),this.get("seq"),this.ref,this.qualRaw())}},{key:"_get_clipPos",value:function(){var e=this.get("CIGAR")||"";return-1===this.get("strand")?+(e.match(/(\d+)[SH]$/)||[])[1]||0:+(e.match(/^(\d+)([SH])/)||[])[1]||0}}]),e}(),Z=function(e){(0,f.Z)(r,e);var t=(0,d.Z)(r);function r(){var e;(0,u.Z)(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).samHeader=void 0,e.setupP=void 0,e.configured=void 0,e}return(0,s.Z)(r,[{key:"configure",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var t,r,n,i,u;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.configured||(t=(0,b.readConfObject)(this.config,"bamLocation"),r=(0,b.readConfObject)(this.config,["index","location"]),n=(0,b.readConfObject)(this.config,["index","indexType"]),i=new h.$({bamFilehandle:(0,l.openLocation)(t,this.pluginManager),csiFilehandle:"CSI"===n?(0,l.openLocation)(r,this.pluginManager):void 0,baiFilehandle:"CSI"!==n?(0,l.openLocation)(r,this.pluginManager):void 0,chunkSizeLimit:1/0,fetchSizeLimit:1/0,yieldThreadTime:1/0}),(u=(0,b.readConfObject)(this.config,"sequenceAdapter"))&&this.getSubAdapter?this.configured=this.getSubAdapter(u).then((function(e){var t=e.dataAdapter;return{bam:i,sequenceAdapter:t}})):this.configured=Promise.resolve({bam:i})),e.abrupt("return",this.configured);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getHeader",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){var r,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.configure();case 2:return r=e.sent,n=r.bam,e.abrupt("return",n.getHeaderText(t));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"setupPre",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){var r,n,u,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(t||{}).statusCallback,n=void 0===r?function(){}:r,e.next=3,this.configure();case 3:return u=e.sent,s=u.bam,e.next=7,(0,g.updateStatus)("Downloading index",n,(0,i.Z)((0,a.Z)().mark((function e(){var r,n,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.getHeader(t);case 2:return r=e.sent,n=[],i={},r.filter((function(e){return"SQ"===e.tag})).forEach((function(e,t){e.data.forEach((function(e){if("SN"===e.tag){var r=e.value;i[r]=t,n[t]=r}}))})),e.abrupt("return",{idToName:n,nameToId:i});case 7:case"end":return e.stop()}}),e)}))));case 7:return this.samHeader=e.sent,e.abrupt("return",this.samHeader);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"setup",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){var r=this;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setupP||(this.setupP=this.setupPre(t).catch((function(e){throw r.setupP=void 0,e}))),e.abrupt("return",this.setupP);case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getRefNames",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t){var r,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setup(t);case 2:return r=e.sent,n=r.idToName,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"seqFetch",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t,r,n){var i,u,s,c,o,f;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.configure();case 2:if(i=e.sent,u=i.sequenceAdapter,s=u){e.next=7;break}return e.abrupt("return",void 0);case 7:if(t){e.next=9;break}return e.abrupt("return",void 0);case 9:return c=s.getFeatures({refName:t,start:r,end:n,assemblyName:""}),e.next=12,c.pipe((0,m.q)()).toPromise();case 12:if(o=e.sent,f="",o.sort((function(e,t){return e.get("start")-t.get("start")})).forEach((function(e){var t=e.get("start"),a=e.get("end"),i=Math.max(r-t,0),u=Math.min(n-t,a-t)-i,s=e.get("seq")||e.get("residues");f+=s.substr(i,u)})),f.length===n-r){e.next=17;break}throw new Error("sequence fetch failed: fetching ".concat(t,":").concat((r-1).toLocaleString(),"-").concat(n.toLocaleString()," returned ").concat(f.length.toLocaleString()," bases, but should have returned ").concat((n-r).toLocaleString()));case 17:return e.abrupt("return",f);case 18:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"getFeatures",value:function(e,t){var r=this,u=e.refName,s=e.start,c=e.end,o=e.originalRefName,f=t||{},d=f.signal,h=f.filterBy,p=f.statusCallback,g=void 0===p?function(){}:p;return(0,v.ObservableCreate)(function(){var e=(0,i.Z)((0,a.Z)().mark((function e(i){var f,d,p,l,v,m,b,_,k,y,Z,w,S,q,C,N;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.configure();case 2:return f=e.sent,d=f.bam,e.next=6,r.setup(t);case 6:return g("Downloading alignments"),e.next=9,d.getRecordsForRange(u,s,c,t);case 9:p=e.sent,v=(l=h||{}).flagInclude,m=void 0===v?0:v,b=l.flagExclude,_=void 0===b?0:b,k=l.tagFilter,y=l.readName,Z=(0,n.Z)(p),e.prev=12,Z.s();case 14:if((w=Z.n()).done){e.next=33;break}if(S=w.value,q=void 0,S.get("MD")){e.next=21;break}return e.next=20,r.seqFetch(o||u,S.get("start"),S.get("end"));case 20:q=e.sent;case 21:if(((C=S.flags)&m)===m&&!(C&_)){e.next=24;break}return e.abrupt("continue",31);case 24:if(!k){e.next=28;break}if("*"===(N=S.get(k.tag))?void 0!==N:N===k.value){e.next=28;break}return e.abrupt("continue",31);case 28:if(!y||S.get("name")===y){e.next=30;break}return e.abrupt("continue",31);case 30:i.next(new x(S,r,q));case 31:e.next=14;break;case 33:e.next=38;break;case 35:e.prev=35,e.t0=e.catch(12),Z.e(e.t0);case 38:return e.prev=38,Z.f(),e.finish(38);case 41:g(""),i.complete();case 43:case"end":return e.stop()}}),e,null,[[12,35,38,41]])})));return function(t){return e.apply(this,arguments)}}(),d)}},{key:"estimateRegionsStats",value:function(){var e=(0,i.Z)((0,a.Z)().mark((function e(t,n){var i,u,s,f;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.configure();case 2:if(i=e.sent,"?"===(u=i.bam).index.filehandle){e.next=12;break}return e.next=7,(0,g.bytesForRegions)(t,u);case 7:return s=e.sent,f=(0,b.readConfObject)(this.config,"fetchSizeLimit"),e.abrupt("return",{bytes:s,fetchSizeLimit:f});case 12:return e.abrupt("return",(0,c.Z)((0,o.Z)(r.prototype),"estimateRegionsStats",this).call(this,t,n));case 13:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"freeResources",value:function(){}},{key:"refIdToName",value:function(e){var t;return null===(t=this.samHeader)||void 0===t?void 0:t.idToName[e]}}]),r}(p.BaseFeatureDataAdapter)},64794:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var n=r(32723),a=r(34795),i=r(9249),u=r(87371),s=r(45754),c=r(86906),o=r(77431),f=r(9077),d=function(e){(0,s.Z)(r,e);var t=(0,c.Z)(r);function r(){return(0,i.Z)(this,r),t.apply(this,arguments)}return(0,u.Z)(r,[{key:"configure",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,r,a,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.configured||(t=(0,f.readConfObject)(this.config,"htsgetBase"),r=(0,f.readConfObject)(this.config,"htsgetTrackId"),a=new o.S5({baseUrl:t,trackId:r}),(i=(0,f.readConfObject)(this.config,"sequenceAdapter"))&&this.getSubAdapter&&(this.configured=this.getSubAdapter(i).then((function(e){var t=e.dataAdapter;return{bam:a,sequenceAdapter:t}}))),this.configured=Promise.resolve({bam:a})),e.abrupt("return",this.configured);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),r}(r(16824).default)}}]);
//# sourceMappingURL=4794.3910fb70.chunk.js.map