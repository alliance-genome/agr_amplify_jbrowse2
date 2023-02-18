"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[4656,644],{44656:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(32723),a=n(34795),u=n(9249),s=n(87371),i=n(45754),c=n(13820),o=n(32145),f=n(16959);function l(e){for(var t="",n="",r=0,a=0,u=0,s=0,i=0,c=0,o=[],f=0,l=0,p=!1,h=[],m=new RegExp(/^>(\S+)\s+(\S+)\s+(\d+)\s+(\d+)/),v=0;v<e.length;v++){var d=e[v],g=m.exec(d);if(null===g){if(p){var x=d.split(" ");if(7===x.length){var b=+x[0],Z=+x[1],y=+x[2],w=+x[3];i=b<Z&&y<w||b>Z&&y>w?1:-1,u=+(b<Z?b:Z)-1,s=+(Z>b?Z:b),r=+(y<w?y:w)-1,a=+(w>y?w:y),f=l=0,c=+x[4],o=[]}else if(1===x.length){var k=+x[0];if(0===k){var q=0,N=[];if(s-u-f!==a-r-l)throw new Error("inconsistent alignment on line ".concat(v));o.push(s-u-f<<4);for(var M=0;M<o.length;++M){var A=o[M]>>4;q+=A,N.push(A+"MID".charAt(15&o[M]))}h.push({qname:n,qstart:r,qend:a,tname:t,tstart:u,tend:s,strand:i,extra:{numMatches:q-c,blockLen:q,mappingQual:0,NM:c,cg:N.join("")}})}else if(k>0){var C=k-1;f+=C+1,l+=C,C>0&&o.push(C<<4),o.length>0&&2===(15&o[o.length-1])?o[o.length-1]+=16:o.push(18)}else{var D=-k-1;f+=D,l+=D+1,D>0&&o.push(D<<4),o.length>0&&1===(15&o[o.length-1])?o[o.length-1]+=16:o.push(17)}}}}else t=g[1],n=g[2],p=!0}return h}function p(e){return 31===e[0]&&139===e[1]&&8===e[2]}var h=function(e){(0,i.Z)(n,e);var t=(0,c.Z)(n);function n(){return(0,u.Z)(this,n),t.apply(this,arguments)}return(0,s.Z)(n,[{key:"setupPre",value:function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,u,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,o.openLocation)(this.getConf("deltaLocation"),this.pluginManager),e.next=3,n.readFile(t);case 3:if(!p(a=e.sent)){e.next=10;break}return e.next=7,(0,f.unzip)(a);case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=a;case 11:if(!((u=e.t0).length>536870888)){e.next=14;break}throw new Error("Data exceeds maximum string length (512MB)");case 14:return s=new TextDecoder("utf8",{fatal:!0}).decode(u),e.abrupt("return",l(s.split(/\n|\r\n|\r/).filter((function(e){return!!e}))));case 16:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),n}(n(19068).default)},19068:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var r=n(33028),a=n(59740),u=n(32723),s=n(34795),i=n(9249),c=n(87371),o=n(45754),f=n(13820),l=n(82972),p=n(23995),h=n(32145),m=n(93824),v=n(99836),d=n(16959),g=n(24839),x=n(93069),b=n(95058),Z=n(42054),y=g.tr.getMismatches,w=function(e){(0,o.Z)(n,e);var t=(0,f.Z)(n);function n(){return(0,i.Z)(this,n),t.apply(this,arguments)}return(0,c.Z)(n,[{key:"get",value:function(e){return"mismatches"===e?y(this.get("CIGAR")):(0,x.Z)((0,b.Z)(n.prototype),"get",this).call(this,e)}}]),n}(Z.SimpleFeature),k=n(44922),q=n(46840),N=n(96234);function M(e){for(var t={},n=0;n<e.length;n++){var r=e[n],a=r.qname+"-"+r.tname;t[a]||(t[a]={quals:[],len:[]}),t[a].quals.push(r.extra.mappingQual),t[a].len.push(r.extra.blockLen||1)}for(var u=Object.fromEntries(Object.entries(t).map((function(e){var t=(0,N.Z)(e,2),n=t[0],r=t[1];return[n,A((0,k.$R)(r.quals,r.len))]}))),s=0;s<e.length;s++){var i=e[s],c=i.qname+"-"+i.tname;i.extra.meanScore=u[c]}for(var o=1e4,f=0,l=0;l<e.length;l++){var p=e[l];o=Math.min(p.extra.meanScore||0,o),f=Math.max(p.extra.meanScore||0,f)}for(var h=0;h<e.length;h++){var m=e[h],v=m.extra.meanScore||0;m.extra.meanScore=(v-o)/(f-o)}return e}function A(e){var t=e.reduce((function(e,t){var n=(0,N.Z)(e,2),r=n[0],a=n[1],u=(0,N.Z)(t,2),s=u[0],i=u[1];return[r+s*i,a+i]}),[0,0]),n=(0,N.Z)(t,2);return n[0]/n[1]}function C(e){return e.split(/\n|\r\n|\r/).filter((function(e){return!!e})).map((function(e){var t=e.split("\t"),n=(0,q.Z)(t),a=n[0],u=n[2],s=n[3],i=n[4],c=n[5],o=n[7],f=n[8],l=n[9],p=n[10],h=n[11],m=n.slice(12),v=Object.fromEntries(m.map((function(e){var t=e.indexOf(":");return[e.slice(0,t),e.slice(t+3)]})));return{tname:c,tstart:+o,tend:+f,qname:a,qstart:+u,qend:+s,strand:"-"===i?-1:1,extra:(0,r.Z)({numMatches:+l,blockLen:+p,mappingQual:+h},v)}}))}function D(e){for(var t=[],n=e.length-2;n>=0;n-=2){t.push(e[n]);var r=e[n+1];"D"===r?t.push("I"):"I"===r?t.push("D"):t.push(r)}return t}function I(e){return e.replaceAll("D","K").replaceAll("I","D").replaceAll("K","I")}var L=["numMatches","blockLen","cg"],S=g.tr.parseCigar,R=function(e){(0,o.Z)(n,e);var t=(0,f.Z)(n);function n(){var e;(0,i.Z)(this,n);for(var r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u];return(e=t.call.apply(t,[this].concat(a))).setupP=void 0,e}return(0,c.Z)(n,[{key:"setup",value:function(){var e=(0,s.Z)((0,u.Z)().mark((function e(t){var n=this;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setupP||(this.setupP=this.setupPre(t).catch((function(e){throw n.setupP=void 0,e}))),e.abrupt("return",this.setupP);case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"setupPre",value:function(){var e=(0,s.Z)((0,u.Z)().mark((function e(t){var n,r,a,s,i;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.pluginManager,r=(0,h.openLocation)(this.getConf("pafLocation"),n),e.next=4,r.readFile(t);case 4:if(a=e.sent,!(0,k.lq)(a)){e.next=11;break}return e.next=8,(0,d.unzip)(a);case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=a;case 12:if(!((s=e.t0).length>536870888)){e.next=15;break}throw new Error("Data exceeds maximum string length (512MB)");case 15:return i=new TextDecoder("utf8",{fatal:!0}).decode(s),e.abrupt("return",C(i));case 17:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"hasDataForRefName",value:function(){var e=(0,s.Z)((0,u.Z)().mark((function e(){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getAssemblyNames",value:function(){var e=this.getConf("assemblyNames");return 0===e.length?[this.getConf("queryAssembly"),this.getConf("targetAssembly")]:e}},{key:"getRefNames",value:function(){var e=(0,s.Z)((0,u.Z)().mark((function e(){var t,n,r,a,s,i,c,o=arguments;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>0&&void 0!==o[0]?o[0]:{},r=null===(t=n.regions)||void 0===t?void 0:t[0].assemblyName,e.next=4,this.setup(n);case 4:if(a=e.sent,-1===(s=this.getAssemblyNames().indexOf(r))){e.next=10;break}for(i=new Set,c=0;c<a.length;c++)i.add(0===s?a[c].qname:a[c].tname);return e.abrupt("return",Array.from(i));case 10:return console.warn("Unable to do ref renaming on adapter"),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getFeatures",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,m.ObservableCreate)(function(){var i=(0,s.Z)((0,u.Z)().mark((function s(i){var c,o,f,l,h,m,d,g,x,b,Z,y,k,q,N,A,C,R,j,F,O,P,E,B,Q,_;return(0,u.Z)().wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,t.setup(n);case 2:for(c=u.sent,(o=n.config)&&"meanQueryIdentity"===(0,v.readConfObject)(o,"colorBy")&&(c=M(c)),f=t.getAssemblyNames(),l=f.indexOf(e.assemblyName),h=e.start,m=e.end,d=e.refName,g=e.assemblyName,-1===l&&(console.warn("".concat(g," not found in this adapter")),i.complete()),x=0;x<c.length;x++)b=c[x],Z=0,y=0,k="",q="",N=0,A=0,R=f[+!(C=0===l)],0===l?(Z=b.qstart,y=b.qend,k=b.qname,q=b.tname,N=b.tstart,A=b.tend):(Z=b.tstart,y=b.tend,k=b.tname,q=b.qname,N=b.qstart,A=b.qend),j=b.extra,F=b.strand,k===d&&(0,p.qY)(h,m,Z,y)&&(O=j.numMatches,P=void 0===O?0:O,E=j.blockLen,B=void 0===E?1:E,j.cg,Q=(0,a.Z)(j,L),_=j.cg,j.cg&&(C&&-1===F?_=D(S(j.cg)).join(""):C&&(_=I(j.cg))),i.next(new w((0,r.Z)((0,r.Z)({uniqueId:x+R,assemblyName:R,start:Z,end:y,type:"match",refName:k,strand:F},Q),{},{CIGAR:_,syntenyId:x,identity:P/B,numMatches:P,blockLen:B,mate:{start:N,end:A,refName:q,assemblyName:f[+C]}}))));i.complete();case 11:case"end":return u.stop()}}),s)})));return function(e){return i.apply(this,arguments)}}())}},{key:"freeResources",value:function(){}}]),n}(l.BaseFeatureDataAdapter);R.capabilities=["getFeatures","getRefNames"]},44922:function(e,t,n){n.d(t,{$R:function(){return l},SN:function(){return c},lq:function(){return i},pJ:function(){return o}});var r=n(32723),a=n(34795),u=n(96234),s=n(16959);function i(e){return 31===e[0]&&139===e[1]&&8===e[2]}function c(e){return new Map(e.split(/\n|\r\n|\r/).filter((function(e){return!!e||e.startsWith("#")})).map((function(e){var t=e.split("\t"),n=(0,u.Z)(t,6),r=n[0],a=n[1],s=n[2],i=n[3];return[i,{refName:r,start:+a,end:+s,score:+n[4],name:i,strand:"-"===n[5]?-1:1}]})))}function o(e,t){return f.apply(this,arguments)}function f(){return(f=(0,a.Z)((0,r.Z)().mark((function e(t,n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.readFile(n);case 2:if(a=e.sent,e.t0=new TextDecoder("utf8",{fatal:!0}),!i(a)){e.next=10;break}return e.next=7,(0,s.unzip)(a);case 7:e.t1=e.sent,e.next=11;break;case 10:e.t1=a;case 11:return e.t2=e.t1,e.abrupt("return",e.t0.decode.call(e.t0,e.t2));case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e,t){return e.map((function(e,n){return[e,t[n]]}))}}}]);
//# sourceMappingURL=4656.fe29d0f4.chunk.js.map