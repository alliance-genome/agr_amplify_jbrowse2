"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[7126],{53740:(e,t,n)=>{n.d(t,{A:()=>f});var r=n(7552),o=n(68446),a=n(99546),l=n(68584),s=n(72241),i=n(9502);function c(e,t){const n=t?(0,i.h)(t):void 0,r=e.get("start");let o=e.get("end");const a=e.get("strand"),l=e.get("mate"),s=e.get("refName");let c,m=0,u=0,d=0,g=0;if(["<TRA","<DEL","<INV","<INS","<DUP","<CNV"].some((e=>t?.startsWith(e)))){const t=e.get("INFO"),n=t?.END?.[0]??o;c=t?.CHR2?.[0]??s,m=n,u=n-1,o=r+1}else if(n?.MatePosition){const e=n.MatePosition.split(":");g="left"===n.MateDirection?1:-1,d="left"===n.Join?-1:1,m=+e[1],u=+e[1]-1,c=e[0]}return{k1:{refName:s,start:r,end:o,strand:a,mateDirection:g},k2:l??{refName:c,end:m,start:u,mateDirection:d}}}function m(e,t){const{k1:n,k2:r}=c(e,t);return[e.get("name"),e.get("id"),(0,a.assembleLocString)(n),(0,a.assembleLocString)(r),e.get("INFO")?.SVTYPE,t].filter((e=>!!e)).join(" - ")}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}const d=(0,o.observer)((function({model:e,feature:t,alt:n,assembly:o,view:i}){const[d,g]=(0,r.useState)(!1),{height:f}=e,{k1:b,k2:p}=c(t,n),h=(0,r.useRef)(null),k=(0,l.getConf)(e,"color",{feature:t,alt:n}),v=o.getCanonicalRefName(b.refName)||b.refName,E=o.getCanonicalRefName(p.refName)||p.refName,x=b.start,N=p.start,C=i.bpToPx({refName:v,coord:x})?.offsetPx,y=i.bpToPx({refName:E,coord:N})?.offsetPx;if(void 0!==C&&void 0!==y){const o=(y-C)/2,l=Math.abs(o),c=Math.min(f,l),v=C-i.offsetPx,E=y-i.offsetPx,x=d?"black":k,N=3;return l>1?r.createElement(r.Fragment,null,r.createElement("path",u({d:`M ${v} 0 C ${v} ${c}, ${E} ${c}, ${E} 0`,ref:h},(0,a.getStrokeProps)(x),{strokeWidth:N,onMouseOut:()=>g(!1),onMouseOver:()=>g(!0),onClick:()=>e.selectFeature(t),fill:"none",pointerEvents:"stroke"})),void 0!==b.mateDirection?r.createElement("line",u({},(0,a.getStrokeProps)(x),{strokeWidth:N,onMouseOut:()=>g(!1),onMouseOver:()=>g(!0),onClick:()=>e.selectFeature(t),x1:v,x2:v+20*b.mateDirection,y1:1.5,y2:1.5})):null,void 0!==p.mateDirection?r.createElement("line",u({},(0,a.getStrokeProps)(x),{strokeWidth:N,onMouseOut:()=>g(!1),onMouseOver:()=>g(!0),onClick:()=>e.selectFeature(t),x1:E,x2:E+20*p.mateDirection,y1:1.5,y2:1.5})):null,d?r.createElement(s.A,{contents:m(t,n)}):null):null}return null})),g=(0,o.observer)((function({model:e,exportSVG:t,children:n}){const{height:o}=e,l=(0,a.getContainingView)(e),s=Math.round(l.dynamicBlocks.totalWidthPx);return t?n:r.createElement("svg",{width:s,height:o},n)})),f=(0,o.observer)((function({model:e,exportSVG:t}){const n=(0,a.getContainingView)(e),o=(0,a.getSession)(e),{assemblyManager:l}=o,{features:s}=e,i=l.get(n.assemblyNames[0]);return i?r.createElement(g,{model:e,exportSVG:t},s?.map((t=>{const a=t.get("ALT");return a?.map((a=>r.createElement(d,{key:t.id()+"-"+a,session:o,feature:t,alt:a,view:n,model:e,assembly:i})))??r.createElement(d,{key:t.id(),session:o,feature:t,view:n,model:e,assembly:i})}))):null}))},87126:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var r=n(7552),o=n(68446),a=n(89003),l=n(61723),s=n(49823),i=n(68666),c=n(75785),m=n(38130),u=n(2047),d=n(99546);const g=(0,r.lazy)((()=>Promise.all([n.e(9245),n.e(4630)]).then(n.bind(n,74630)))),f=(0,c.n9)()((e=>({loading:{backgroundColor:e.palette.background.default,backgroundImage:`repeating-linear-gradient(45deg, transparent, transparent 5px, ${e.palette.action.disabledBackground} 5px, ${e.palette.action.disabledBackground} 10px)`,position:"absolute",bottom:0,height:50,width:300,right:0,pointerEvents:"none",textAlign:"center"}}))),b=(0,o.observer)((function({model:e,children:t}){const{error:n,regionTooLarge:o}=e;return n?r.createElement(i.LW,{message:`${n}`,severity:"error",action:r.createElement(r.Fragment,null,r.createElement(a.A,{title:"Reload"},r.createElement(l.A,{"data-testid":"reload_button",onClick:()=>e.reload()},r.createElement(m.A,null))),r.createElement(a.A,{title:"Show stack trace"},r.createElement(l.A,{onClick:()=>{(0,d.getSession)(e).queueDialog((t=>[g,{onClose:t,error:e.error}]))}},r.createElement(u.A,null))))}):o?e.regionCannotBeRendered():r.createElement(p,{model:e},t)})),p=(0,o.observer)((function({model:e,children:t}){const{loading:n}=e;return r.createElement("div",null,t,n?r.createElement(h,{model:e}):null)})),h=(0,o.observer)((function({model:e}){const{classes:t}=f(),{message:n}=e;return r.createElement("div",{className:t.loading},r.createElement(s.LoadingEllipses,{message:n}))})),k=b;var v=n(53740);const E=(0,o.observer)((function({model:e,exportSVG:t}){return r.createElement(k,{model:e},r.createElement(v.A,{model:e,exportSVG:t}))}))}}]);
//# sourceMappingURL=7126.51e7533e.chunk.js.map