"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[5490],{5490:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var s=a(56798),r=a(16979),n=a(90872),i=a(40011),o=a(9762);const c=class extends s.BaseFeatureDataAdapter{async configure(){const e=await(this.getSubAdapter?.(this.getConf("sequenceAdapter")));if(!e)throw new Error("Error getting subadapter");return e.dataAdapter}async getRefNames(){return(await this.configure()).getRefNames()}getFeatures(e,t){return(0,r.ObservableCreate)((async a=>{const s=await this.configure();let{start:r,end:c}=e;if(r=Math.max(0,r-1e3),c+=1e3,c<0||r>c)return void a.complete();const h=s.getFeatures({...e,start:r,end:c},t),d=await(0,o.z)(h.pipe((0,i.q)())),f=d[0]?.get("seq")||"",u=this.getConf("search"),g=this.getConf("searchForward"),l=this.getConf("searchReverse"),m=this.getConf("caseInsensitive"),p=new RegExp(u,"g"+(m?"i":""));if(u){if(g){const t=f.matchAll(p);for(const s of t){const t=r+(s.index||0);(0,n.doesIntersect2)(t,t+u.length,e.start,e.end)&&a.next(new n.SimpleFeature({uniqueId:`${this.id}-match-${t}-p`,refName:e.refName,start:t,end:t+s[0].length,name:s[0],strand:1}))}}if(l){const t=(0,n.revcom)(f).matchAll(p);for(const s of t){const t=c-(s.index||0);(0,n.doesIntersect2)(t,t+u.length,e.start,e.end)&&a.next(new n.SimpleFeature({uniqueId:`${this.id}-match-${t}-n`,refName:e.refName,start:t-s[0].length,name:s[0],end:t,strand:-1}))}}}a.complete()}))}freeResources(){}}}}]);
//# sourceMappingURL=5490.85ffe229.chunk.js.map