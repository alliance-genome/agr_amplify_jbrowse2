"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[7452],{77452:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var r=a(56798),s=a(59062),n=a(16979),i=a(48026),c=a(71631),h=a(25086),o=a(59131);class u extends r.BaseFeatureDataAdapter{static capabilities=["getFeatures","getRefNames"];async getHeader(){const{header:e}=await this.setup();return e}async getMetadata(){const{header:e}=await this.setup();return new h.Z({header:e}).getMetadata()}async setupP(){const e=this.pluginManager,t=await(0,s.openLocation)(this.getConf("vcfLocation"),e).readFile(),a=function(e){return 31===e[0]&&139===e[1]&&8===e[2]}(t)?await(0,c.unzip)(t):t;if(a.length>536870888)throw new Error("Data exceeds maximum string length (512MB)");const r=(new TextDecoder).decode(a),{header:n,lines:h}=(e=>{const t=[],a=[];return e.split(/\n|\r\n|\r/).map((e=>e.trim())).filter((e=>!!e)).forEach((e=>{e.startsWith("#")?t.push(e):e&&a.push(e)})),{header:t.join("\n"),lines:a}})(r),o={};for(const e of h.map(((e,t)=>{const[a,r,,s,,,,n]=e.split("\t"),i=+r-1,c=i+s.length;return{line:e,refName:a,start:i,end:+(n.match(/END=(\d+)/)?.[1].trim()||c),id:t}}))){const t=e.refName;o[t]||(o[t]=new i.ZP),o[t].insert([e.start,e.end],e)}return{header:n,intervalTree:o}}async setup(){return this.vcfFeatures||(this.vcfFeatures=this.setupP().catch((e=>{throw this.vcfFeatures=void 0,e}))),this.vcfFeatures}async getRefNames(e={}){const{intervalTree:t}=await this.setup();return Object.keys(t)}getFeatures(e,t={}){return(0,n.ObservableCreate)((async t=>{try{const{start:a,end:r,refName:s}=e,{header:n,intervalTree:i}=await this.setup(),c=new h.Z({header:n});i[s]?.search([a,r]).forEach((e=>t.next(new o.Z({variant:c.parseLine(e.line),parser:c,id:`${this.id}-${e.id}`})))),t.complete()}catch(e){t.error(e)}}),t.signal)}freeResources(){}}}}]);
//# sourceMappingURL=7452.259871a5.chunk.js.map