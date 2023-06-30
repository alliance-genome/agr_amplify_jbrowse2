"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[4459],{64459:function(e,t,n){n.r(t),n.d(t,{default:function(){return A}});var r=n(96234),a=n(32723),s=n(34795),o=n(9249),i=n(87371),c=n(45754),u=n(13820),f=n(2646),l=n(43430),d=n(93824),p=n(66043),v=n(56218),h=n(41361),b=n(33028),g=n(95920),k=n(24793),x=n(27664);function y(e){return Z(e.type)?1:e.length}function Z(e){return"softclip"===e||"hardclip"===e||"insertion"===e}function m(e,t,n,r){var a=e[n][r];void 0===a&&(a=e[n][r]={total:0,"-1":0,0:0,1:0}),a.total++,a[t]++}function w(e,t,n,r){return q.apply(this,arguments)}function q(){return(q=(0,s.Z)((0,a.Z)().mark((function e(t,n,r,s){var o,i,c,u,f,l,d,p,v,w;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=r.colorBy,c=(0,b.Z)((0,b.Z)({},n),{},{start:Math.max(0,n.start-1),end:n.end+1}),u=Math.ceil(c.end-c.start),f={},!t.length||!(0,g.ES)(null===(o=r.colorBy)||void 0===o?void 0:o.type)){e.next=10;break}return e.next=7,s(n);case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=void 0;case 11:l=e.t0,d=[],p=(0,h.Z)(t),e.prev=14,w=(0,a.Z)().mark((function e(){var t,r,s,o,c,p,b,w,q,A,M,S,C,R,_,F,N,B,E,j,D,I,O,P,L,T,Y,z,G,U,X,H,J,K,Q,V,W,$,ee,te,ne,re,ae;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=v.value,r=t.get("start"),s=t.get("end"),o=t.get("strand"),c=t.get("mismatches")||[],p=r;p<s+1;p++)(b=p-n.start)>=0&&b<u&&(void 0===d[b]&&(d[b]={total:0,all:0,ref:0,"-1":0,0:0,1:0,lowqual:{},cov:{},delskips:{},noncov:{}}),p!==s&&(d[b].total++,d[b].all++,d[b].ref++,d[b][o]++));if("modifications"===(null===i||void 0===i?void 0:i.type)&&(w=t.get("seq"),q=(0,g.TN)(t,"MM","Mm")||"",A=(0,k.parseCigar)(t.get("CIGAR")),M=t.get("end"),w)){S=(0,k.getModificationPositions)(q,w,o),C=(0,h.Z)(S);try{for(C.s();!(R=C.n()).done;){_=R.value,F=_.type,N=_.positions,B="mod_".concat(F),E=(0,h.Z)((0,k.getNextRefPos)(A,N));try{for(E.s();!(j=E.n()).done;)D=j.value,(I=D+r-n.start)>=0&&I<d.length&&D+r<M&&(void 0===d[I]&&(d[I]={total:0,all:0,ref:0,"-1":0,0:0,1:0,lowqual:{},cov:{},delskips:{},noncov:{}}),(O=d[I])?m(O,o,"cov",B):console.warn("Undefined position in modifications snpcoverage encountered"))}catch(se){E.e(se)}finally{E.f()}}}catch(se){C.e(se)}finally{C.f()}}if("methylation"!==(null===i||void 0===i?void 0:i.type)){e.next=22;break}if(l){e.next=10;break}throw new Error("no region sequence detected, need sequenceAdapter configuration");case 10:if(t.get("seq")){e.next=13;break}return e.abrupt("return","continue");case 13:P=(0,k.getMethBins)(t),L=P.methBins,T=P.methProbs,Y=c.filter((function(e){return"deletion"===e.type})),z=(0,a.Z)().mark((function e(){var t,s,i,c,u,f,p,v,h,b,g;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=null===(t=l[(i=G+r)-n.start+1])||void 0===t?void 0:t.toLowerCase(),u=null===(s=l[i-n.start+2])||void 0===s?void 0:s.toLowerCase(),"c"===c&&"g"===u&&(f=d[i-n.start],p=d[i-n.start+1],v=L[G],h=L[G+1],b=T[G],g=T[G+1],v&&(void 0===b||b>.5)||h&&(void 0===g||g>.5)?(f&&(m(f,o,"cov","meth"),f.ref--,f[o]--),p&&(m(p,o,"cov","meth"),p.ref--,p[o]--)):(f&&(null!==Y&&void 0!==Y&&Y.some((function(e){return(0,x.doesIntersect2)(i,i+1,e.start+r,e.start+r+e.length)}))||(m(f,o,"cov","unmeth"),f.ref--,f[o])),p&&(null!==Y&&void 0!==Y&&Y.some((function(e){return(0,x.doesIntersect2)(i+1,i+2,e.start+r,e.start+r+e.length)}))||(m(p,o,"cov","unmeth"),p.ref--,p[o]--))));case 4:case"end":return e.stop()}}),e)})),G=0;case 17:if(!(G<s-r)){e.next=22;break}return e.delegateYield(z(),"t0",19);case 19:G++,e.next=17;break;case 22:U="modifications"!==(null===i||void 0===i?void 0:i.type)&&"methylation"!==(null===i||void 0===i?void 0:i.type),X=(0,h.Z)(c);try{for(X.s();!(H=X.n()).done;){for(J=H.value,K=r+J.start,Q=y(J),V=K+Q,W=K;W<K+Q;W++)($=W-n.start)>=0&&$<d.length&&(ee=d[$],te=J.base,ne=J.type,(re=Z(ne))?m(ee,o,"noncov",ne):(ee.ref--,ee[o]--),"deletion"===ne||"skip"===ne?(m(ee,o,"delskips",ne),ee.total--):!re&&U&&(m(ee,o,"cov",te),ee.refbase=J.altbase));"skip"===J.type&&(ae="".concat(K,"_").concat(V,"_").concat(o),void 0===f[ae]&&(f[ae]={feature:t,start:K,end:V,strand:o,xs:(0,g.h1)(t,"XS")||(0,g.h1)(t,"TS"),score:0}),f[ae].score++)}}catch(se){X.e(se)}finally{X.f()}case 25:case"end":return e.stop()}}),e)})),p.s();case 17:if((v=p.n()).done){e.next=24;break}return e.delegateYield(w(),"t1",19);case 19:if("continue"!==e.t1){e.next=22;break}return e.abrupt("continue",22);case 22:e.next=17;break;case 24:e.next=29;break;case 26:e.prev=26,e.t2=e.catch(14),p.e(e.t2);case 29:return e.prev=29,p.f(),e.finish(29);case 32:return e.abrupt("return",{bins:d,skipmap:f});case 33:case"end":return e.stop()}}),e,null,[[14,26,29,32]])})))).apply(this,arguments)}var A=function(e){(0,c.Z)(n,e);var t=(0,u.Z)(n);function n(){return(0,o.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"configure",value:function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){var t,n,r,s,o,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.getConf("subadapter"),s=r.sequenceAdapter,e.next=4,null===(t=this.getSubAdapter)||void 0===t?void 0:t.call(this,r);case 4:if(o=e.sent,!s){e.next=11;break}return e.next=8,null===(n=this.getSubAdapter)||void 0===n?void 0:n.call(this,s);case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=void 0;case 12:if(i=e.t0,o){e.next=15;break}throw new Error("Failed to get subadapter");case 15:return e.abrupt("return",{subadapter:o.dataAdapter,sequenceAdapter:null===i||void 0===i?void 0:i.dataAdapter});case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchSequence",value:function(){var e=(0,s.Z)((0,a.Z)().mark((function e(t){var n,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.configure();case 2:if(n=e.sent,r=n.sequenceAdapter){e.next=6;break}return e.abrupt("return",void 0);case 6:return e.abrupt("return",(0,g.O)(t,r));case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getFeatures",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,d.ObservableCreate)(function(){var o=(0,s.Z)((0,a.Z)().mark((function s(o){var i,c,u,f,d,h;return(0,a.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.configure();case 2:return i=a.sent,c=i.subadapter,a.next=6,(0,v.z)(c.getFeatures(e,n).pipe((0,p.q)()));case 6:return u=a.sent,a.next=9,w(u,e,n,(function(e){return t.fetchSequence(e)}));case 9:f=a.sent,d=f.bins,h=f.skipmap,d.forEach((function(n,r){var a=e.start+r;o.next(new l.Z({id:"".concat(t.id,"-").concat(a),data:{score:n.total,snpinfo:n,start:a,end:a+1,refName:e.refName}}))})),Object.entries(h).forEach((function(e){var t=(0,r.Z)(e,2),n=t[0],a=t[1];o.next(new l.Z({id:n,data:{type:"skip",start:a.start,end:a.end,strand:a.strand,score:a.score,xs:a.xs}}))})),o.complete();case 15:case"end":return a.stop()}}),s)})));return function(e){return o.apply(this,arguments)}}(),n.signal)}},{key:"getMultiRegionFeatureDensityStats",value:function(){var e=(0,s.Z)((0,a.Z)().mark((function e(t,n){var r,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.configure();case 2:return r=e.sent,s=r.subadapter,e.abrupt("return",s.getMultiRegionFeatureDensityStats(t,n));case 5:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getRefNames",value:function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){var t,n,r,s=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:{},e.next=3,this.configure();case 3:return n=e.sent,r=n.subadapter,e.abrupt("return",r.getRefNames(t));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"freeResources",value:function(){}}]),n}(f.BaseFeatureDataAdapter)}}]);
//# sourceMappingURL=4459.c66e8168.chunk.js.map