"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[4234],{14234:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var s=a(89238),r=a(46377),i=a(99834),n=a(99546),u=a(66885),o=a(37957);class c extends r.BaseFeatureDataAdapter{static capabilities=["hasResolution","hasLocalStats","hasGlobalStats"];async setupPre(e){const{statusCallback:t=(()=>{})}=e||{},a=this.pluginManager,r=new s.j({filehandle:(0,i.openLocation)(this.getConf("bigWigLocation"),a)}),u=await(0,n.updateStatus)("Downloading bigwig header",t,(()=>r.getHeader(e)));return{bigwig:r,header:u}}async setup(e){return this.setupP||(this.setupP=this.setupPre(e).catch((e=>{throw this.setupP=void 0,e}))),this.setupP}async getRefNames(e){const{header:t}=await this.setup(e);return Object.keys(t.refsByName)}async refIdToName(e){const{header:t}=await this.setup();return t.refsByNumber[e]?.name}async getGlobalStats(e){const{header:t}=await this.setup(e);return(0,o.WD)(t.totalSummary)}getFeatures(e,t={}){const{refName:a,start:s,end:r}=e,{bpPerPx:i=0,signal:n,resolution:o=1,statusCallback:c=(()=>{})}=t;return(0,u.ObservableCreate)((async n=>{c("Downloading bigwig data");const u=this.getConf("source"),{bigwig:h}=await this.setup(t),l=await h.getFeatures(a,s,r,{...t,basesPerSpan:i/o});for(const t of l){u&&(t.source=u);const s=`${u}:${e.refName}:${t.start}-${t.end}`;t.refName=a,t.uniqueId=s,n.next({get:e=>t[e],id:()=>s,toJSON:()=>t})}n.complete()}),n)}async getMultiRegionFeatureDensityStats(e){return{featureDensity:0}}freeResources(){}}}}]);
//# sourceMappingURL=4234.ad373e22.chunk.js.map