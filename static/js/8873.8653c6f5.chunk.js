"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[8873],{98873:function(e,n,t){t.r(n),t.d(n,{default:function(){return y}});var r=t(33028),a=t(34795),i=t(9249),u=t(87371),c=t(93069),s=t(95058),o=t(45754),f=t(86906),p=t(77162),h=t.n(p),l=t(29598),v=t(33528),d=t(81073),g=t(26131),w=t(44061),b=t(6556),x=t(9077),k=t(4795),y=function(e){(0,o.Z)(t,e);var n=(0,f.Z)(t);function t(){var e;(0,i.Z)(this,t);for(var r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u];return(e=n.call.apply(n,[this].concat(a))).configured=void 0,e}return(0,u.Z)(t,[{key:"configurePre",value:function(){var e=(0,a.Z)(h().mark((function e(){var n,t,r,a,i,u,c;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,x.readConfObject)(this.config,"vcfGzLocation"),t=(0,x.readConfObject)(this.config,["index","location"]),r=(0,x.readConfObject)(this.config,["index","indexType"]),a=(0,v.openLocation)(n,this.pluginManager),i="CSI"===r,u=new w.TabixIndexedFile({filehandle:a,csiFilehandle:i?(0,v.openLocation)(t,this.pluginManager):void 0,tbiFilehandle:i?void 0:(0,v.openLocation)(t,this.pluginManager),chunkCacheSize:50*Math.pow(2,20),chunkSizeLimit:1e9}),e.next=8,u.getHeader();case 8:return c=e.sent,e.abrupt("return",{filehandle:a,vcf:u,parser:new b.Z({header:c})});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"configure",value:function(){var e=(0,a.Z)(h().mark((function e(){var n=this;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.configured||(this.configured=this.configurePre().catch((function(e){throw n.configured=void 0,e}))),e.abrupt("return",this.configured);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getRefNames",value:function(){var e=(0,a.Z)(h().mark((function e(){var n,t,r,a=arguments;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:{},e.next=3,this.configure();case 3:return t=e.sent,r=t.vcf,e.abrupt("return",r.getReferenceSequenceNames(n));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getHeader",value:function(){var e=(0,a.Z)(h().mark((function e(){var n,t;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.configure();case 2:return n=e.sent,t=n.vcf,e.abrupt("return",t.getHeader());case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getMetadata",value:function(){var e=(0,a.Z)(h().mark((function e(){var n,t;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.configure();case 2:return n=e.sent,t=n.parser,e.abrupt("return",t.getMetadata());case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getFeatures",value:function(e){var n=this,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,g.ObservableCreate)(function(){var i=(0,a.Z)(h().mark((function a(i){var u,c,s,o,f,p;return h().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return u=e.refName,c=e.start,s=e.end,a.next=3,n.configure();case 3:return o=a.sent,f=o.vcf,p=o.parser,a.next=8,f.getLines(u,c,s,(0,r.Z)({lineCallback:function(e,t){i.next(new k.Z({variant:p.parseLine(e),parser:p,id:"".concat(n.id,"-vcf-").concat(t)}))}},t));case 8:i.complete();case 9:case"end":return a.stop()}}),a)})));return function(e){return i.apply(this,arguments)}}(),t.signal)}},{key:"getFeaturesInMultipleRegions",value:function(e){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=(0,c.Z)((0,s.Z)(t.prototype),"getFeaturesInMultipleRegions",this);return(0,g.ObservableCreate)(function(){var t=(0,a.Z)(h().mark((function t(a){var u,c,s,o,f,p,l;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.configure();case 2:return u=t.sent,c=u.vcf,t.next=6,(0,d.bytesForRegions)(e,c.index);case 6:return s=t.sent,t.next=9,n.configure();case 9:return o=t.sent,f=o.filehandle,t.next=13,f.stat();case 13:p=t.sent,(l=Math.round(s/p.size*100))>100&&(l=100),l>60&&console.warn("getFeaturesInMultipleRegions fetching ".concat(l,"% of VCF file, but whole-file streaming not yet implemented")),i.call(n,e,r).subscribe(a);case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"freeResources",value:function(){}}]),t}(l.BaseFeatureDataAdapter)}}]);
//# sourceMappingURL=8873.8653c6f5.chunk.js.map