(this["webpackJsonp@jbrowse/web"]=this["webpackJsonp@jbrowse/web"]||[]).push([[38],{1717:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return j}));var n=r(86),a=r(83),c=r(81),s=r(11),i=r(88),u=r(89),o=r(80),d=r.n(o),l=r(956),f=r(116),p=r(104),b=r(125),h=r(119),v=r(636),m=r(79),g=r(635),j=function(e){Object(i.a)(r,e);var t=Object(u.a)(r);function r(e,n,a){var s;Object(c.a)(this,r),(s=t.call(this,e,n,a)).parser=void 0,s.bed=void 0,s.columnNames=void 0,s.scoreColumn=void 0;var i=Object(m.readConfObject)(e,"bedGzLocation"),u=Object(m.readConfObject)(e,"index"),o=Object(m.readConfObject)(e,"autoSql"),d=u.location,f=u.indexType;return s.bed=new v.TabixIndexedFile({filehandle:Object(p.openLocation)(i,s.pluginManager),csiFilehandle:"CSI"===f?Object(p.openLocation)(d,s.pluginManager):void 0,tbiFilehandle:"CSI"!==f?Object(p.openLocation)(d,s.pluginManager):void 0,chunkCacheSize:50*Math.pow(2,20)}),s.columnNames=Object(m.readConfObject)(e,"columnNames"),s.scoreColumn=Object(m.readConfObject)(e,"scoreColumn"),s.parser=new l.a({autoSql:o}),s}return Object(s.a)(r,[{key:"getRefNames",value:function(){var e=Object(a.a)(d.a.mark((function e(){var t,r=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},e.abrupt("return",this.bed.getReferenceSequenceNames(t));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getHeader",value:function(){var e=Object(a.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.bed.getHeader());case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"defaultParser",value:function(e,t){return Object.fromEntries(t.split("\t").map((function(t,r){return[e[r],t]})))}},{key:"getNames",value:function(){var e=Object(a.a)(d.a.mark((function e(){var t,r,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.columnNames.length){e.next=2;break}return e.abrupt("return",this.columnNames);case 2:return e.next=4,this.bed.getHeader();case 4:return t=e.sent,r=t.split("\n").filter((function(e){return!!e})),n=r[r.length-1],e.abrupt("return",n&&n.includes("\t")?n.slice(1).split("\t").map((function(e){return e.trim()})):null);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getFeatures",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(b.ObservableCreate)(function(){var c=Object(a.a)(d.a.mark((function a(c){var s,i,u,o,l,f,p;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.bed.getMetadata();case 2:return s=a.sent,i=s.columnNumbers,u=i.ref-1,o=i.start-1,l=i.end-1,f=o===l?1:0,a.next=10,t.getNames();case 10:return p=a.sent,a.next=13,t.bed.getLines(e.refName,e.start,e.end,{lineCallback:function(e,r){var a=e.split("\t"),s=a[u],i=+a[o],d=+a[l]+f,b="".concat(t.id,"-").concat(r),v=p?t.defaultParser(p,e):t.parser.parseLine(e,{uniqueId:b}),m=v.blockCount,j=v.blockSizes,k=v.blockStarts,O=v.chromStarts;if(m){var y=O||k||[],C=j,S=i;v.subfeatures=[];for(var w=0;w<m;w+=1){var x=(y[w]||0)+S,N=x+(C[w]||0);v.subfeatures.push({uniqueId:"".concat(b,"-").concat(w),start:x,end:N,type:"block"})}}t.scoreColumn&&(v.score=+v[t.scoreColumn]),delete v.chrom,delete v.chromStart,delete v.chromEnd;var _=new h.a(Object(n.a)(Object(n.a)({},v),{},{start:i,end:d,refName:s,uniqueId:b})),R=_.get("thickStart")?Object(g.a)(_):_;c.next(R)},signal:r.signal});case 13:c.complete();case 14:case"end":return a.stop()}}),a)})));return function(e){return c.apply(this,arguments)}}(),r.signal)}},{key:"freeResources",value:function(){}}]),r}(f.BaseFeatureDataAdapter);j.capabilities=["getFeatures","getRefNames"]},635:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(119);function a(e){var t=e.children(),r=e.get("thickStart"),a=e.get("thickEnd");if(!r&&!a)return e;var c=t?t.filter((function(e){return"block"===e.get("type")})).sort((function(e,t){return e.get("start")-t.get("start")})):[],s=[];c.forEach((function(t){var n=t.get("start"),c=t.get("end");if(r>=c){var i=e.get("strand")>0?"five":"three";s.push({type:"".concat(i,"_prime_UTR"),start:n,end:c})}else if(r>n&&r<c&&a>=c){var u=e.get("strand")>0?"five":"three";s.push({type:"".concat(u,"_prime_UTR"),start:n,end:r},{type:"CDS",start:r,end:c})}else if(r<=n&&a>=c)s.push({type:"CDS",start:n,end:c});else if(r>n&&r<c&&a<c){var o=e.get("strand")>0?"five":"three",d=e.get("strand")>0?"three":"five";s.push({type:"".concat(o,"_prime_UTR"),start:n,end:r},{type:"CDS",start:r,end:a},{type:"".concat(d,"_prime_UTR"),start:a,end:c})}else if(r<=n&&a>n&&a<c){var l=e.get("strand")>0?"three":"five";s.push({type:"CDS",start:n,end:a},{type:"".concat(l,"_prime_UTR"),start:a,end:c})}else if(a<=n){var f=e.get("strand")>0?"three":"five";s.push({type:"".concat(f,"_prime_UTR"),start:n,end:c})}}));var i={};return e.tags().forEach((function(t){i[t]=e.get(t)})),i.subfeatures=s,i.type="mRNA",i.uniqueId=e.id(),delete i.chromStarts,delete i.chromStart,delete i.chromEnd,delete i.chrom,delete i.blockStarts,delete i.blockSizes,delete i.blockCount,delete i.thickStart,delete i.thickEnd,new n.a({data:i,id:e.id()})}}}]);
//# sourceMappingURL=38.355df4dc.chunk.js.map