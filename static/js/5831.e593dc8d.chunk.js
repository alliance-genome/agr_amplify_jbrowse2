"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[5831,6167],{16167:(e,t,s)=>{s.r(t),s.d(t,{default:()=>c,makeFeatures:()=>u});var a=s(72600),r=s(28777),n=s(95454),o=s(36349);function u(e){const t=new Map;for(const s of e)if(s){const e=new r.Z(s),a=e.get("refName");let n=t.get(a);n||(n=[],t.set(a,n)),n.push(e)}for(const e of t.values())e.sort(((e,t)=>e.get("start")-t.get("start")));return t}class c extends a.BaseFeatureDataAdapter{constructor(e,t,s){super(e,t,s);const a=(0,o.readConfObject)(e,"features");this.features=u(a||[])}async getRefNames(){return[...this.features.keys()]}async getRefNameAliases(){return[...this.features.values()].map((e=>({refName:e[0].get("refName"),aliases:e[0].get("aliases")})))}getFeatures(e){const{refName:t,start:s,end:a}=e;return(0,n.ObservableCreate)((async e=>{const r=this.features.get(t)||[];for(const t of r)t.get("end")>s&&t.get("start")<a&&e.next(t);e.complete()}))}freeResources(){}}},65831:(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});var a=s(28777),r=s(95454),n=s(40011),o=s(16167),u=s(9762);class c extends o.default{getFeatures(e){return(0,r.ObservableCreate)((async t=>{const s=(await(0,u.z)(super.getFeatures(e).pipe((0,n.q)())))[0];t.next(new a.Z({...s.toJSON(),uniqueId:`${s.id()}:${e.start}-${e.end}`,end:e.end,start:e.start,seq:s.get("seq").slice(Math.max(e.start-s.get("start"),0),Math.max(e.end-s.get("start"),0))})),t.complete()}))}async getRegions(){const e=[];for(const[t,s]of this.features){let a;for(const r of s)a&&a.end>=r.get("start")&&a.start<=r.get("end")?a.end=r.get("end"):(a&&e.push(a),a={refName:t,start:r.get("start"),end:r.get("end")});a&&e.push(a)}return e}freeResources(){}}}}]);
//# sourceMappingURL=5831.e593dc8d.chunk.js.map