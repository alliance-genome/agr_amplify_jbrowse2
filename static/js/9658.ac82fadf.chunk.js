"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[9658],{79610:(e,t,a)=>{a.d(t,{$2:()=>o,Eg:()=>c,WT:()=>s,f0:()=>l,mr:()=>r});var n=a(99546),i=a(30385);function r({feature:e,ctx:t,offsets:a,cb:i,height:r,drawCurves:s,oobLimit:l,viewWidth:c,hideTiny:f}){const{p11:h,p12:m,p21:d,p22:g}=e,u=h.offsetPx-a[0],w=m.offsetPx-a[0],p=d.offsetPx-a[1],b=g.offsetPx-a[1],v=Math.abs(w-u),x=Math.abs(b-p),y=r,M=(y-0)/2,C=Math.min(p,b),S=Math.max(p,b);(0,n.doesIntersect2)(C,S,-l,c+l)&&(v<=1&&x<=1?f||(t.beginPath(),t.moveTo(u,0),s?t.bezierCurveTo(u,M,p,M,p,y):t.lineTo(p,y),t.stroke()):(o(t,u,w,0,b,p,y,M,s),i(t)))}function o(e,t,a,n,i,r,o,s,l){l?function(e,t,a,n,i,r,o,s){const l=Math.abs(t-a),c=Math.abs(t-a);if(l<5&&c<5&&a<t&&Math.abs(t-i)>100){const e=t;t=a,a=e}e.beginPath(),e.moveTo(t,n),e.lineTo(a,n),e.bezierCurveTo(a,s,i,s,i,o),e.lineTo(r,o),e.bezierCurveTo(r,s,t,s,t,n),e.closePath(),e.fill()}(e,t,a,n,i,r,o,s):function(e,t,a,n,i,r,o){e.beginPath(),e.moveTo(t,n),e.lineTo(a,n),e.lineTo(i,o),e.lineTo(r,o),e.closePath(),e.fill()}(e,t,a,n,i,r,o)}function s(e,t){const a=t.clickMapCanvas,r=t.cigarClickMapCanvas;if(!a||!r)return;const o=a.getBoundingClientRect(),s=a.getContext("2d"),l=r.getContext("2d");if(!s||!l)return;const c=e.clientX-o.left,f=e.clientY-o.top,[h,m,d]=s.getImageData(c,f,1,1).data,g=Math.floor(i.xx/t.numFeats),u=(0,i.OX)(h,m,d,g),w=t.featPositions[u];if(w){const{f:e}=w;t.setClickId(e.id());const a=(0,n.getSession)(t);(0,n.isSessionModelWithWidgets)(a)&&a.showWidget(a.addWidget("SyntenyFeatureWidget","syntenyFeature",{featureData:{feature1:e.toJSON(),feature2:e.get("mate")}}))}return w}function l(e,t,a){e.preventDefault();const n=t.clickMapCanvas,r=t.cigarClickMapCanvas;if(!n||!r)return;const o=n.getBoundingClientRect(),s=n.getContext("2d"),l=r.getContext("2d");if(!s||!l)return;const{clientX:c,clientY:f}=e,h=c-o.left,m=f-o.top,[d,g,u]=s.getImageData(h,m,1,1).data,w=Math.floor(i.xx/t.numFeats),p=(0,i.OX)(d,g,u,w),b=t.featPositions[p];b&&(t.setClickId(b.f.id()),a({clientX:c,clientY:f,feature:b}))}function c(e,t,a){const i=e.toJSON(),r=i.mate,o=i.end-i.start,s=r.end-r.start,l=i.identity,c=i.name,f=r.name;return[`Loc1: ${(0,n.assembleLocString)(i)}`,`Loc2: ${(0,n.assembleLocString)(r)}`,`Inverted: ${-1===i.strand}`,`Query len: ${o.toLocaleString("en-US")}`,`Target len: ${s.toLocaleString("en-US")}`,l?`Identity: ${l.toPrecision(2)}`:"",t?`CIGAR operator: ${t}${a}`:"",c?`Name 1: ${c}`:"",f?`Name 1: ${f}`:""].filter((e=>!!e)).join("<br/>")}},30385:(e,t,a)=>{a.d(t,{C4:()=>m,OX:()=>f,Ww:()=>h,xx:()=>r});var n=a(99546),i=a(79610);const r=16581375;function o(e){return`rgb(${Math.floor(e/65025)%255},${Math.floor(e/255)%255},${e%255})`}const s={I:"#ff03",N:"#0a03",D:"#00f3",X:"brown",M:"#f003","=":"#f003"},l=3,c=1600;function f(e,t,a,n){return Math.floor((255*e*255+255*t+a-1)/n)}function h(e,t,a){const f=(0,n.getContainingView)(e),h=f.drawCurves,m=f.drawCIGAR,d=f.middleComparativeHeight,g=f.width,u=f.views.map((e=>e.bpPerPx));a&&(a.imageSmoothingEnabled=!1),t.beginPath();const w=e.featPositions,p=f.views.map((e=>e.offsetPx)),b=Math.floor(r/w.length);t.fillStyle=s.M,t.strokeStyle=s.M;for(const{p11:e,p12:a,p21:n,p22:i}of w){const r=e.offsetPx-p[0],o=a.offsetPx-p[0],s=n.offsetPx-p[1],f=i.offsetPx-p[1],m=Math.abs(o-r),u=Math.abs(f-s),w=0,b=d,v=(b-w)/2;m<=l&&u<=l&&s<g+c&&s>-c&&(t.moveTo(r,w),h?t.bezierCurveTo(r,v,s,v,s,b):t.lineTo(s,b))}t.stroke(),t.fillStyle=s.M,t.strokeStyle=s.M;for(const{p11:e,p12:b,p21:v,p22:x,f:y,cigar:M}of w){const w=e.offsetPx-p[0],C=b.offsetPx-p[0],S=v.offsetPx-p[1],k=x.offsetPx-p[1],P=Math.abs(C-w),T=Math.abs(k-S),$=Math.min(S,k),E=Math.max(S,k),z=0,L=d,I=(L-z)/2;if(!(P<=l&&T<=l)&&(0,n.doesIntersect2)($,E,-c,f.width+c)){const e=y.get("strand"),n=-1===e?C:w,l=n<(-1===e?w:C)?1:-1,c=(S<k?1:-1)*e;let f=n,d=-1===e?k:S;if(M?.length&&m){let e=!1,n=0,m=0;const w=Math.floor(r/M.length);for(let r=0;r<M.length;r+=2){const p=r*w+1,b=+M[r],v=M[r+1];e||(n=f,m=d);const x=b/u[0],y=b/u[1];if("M"===v||"="===v||"X"===v?(f+=x*l,d+=y*c):"D"===v||"N"===v?f+=x*l:"I"===v&&(d+=y*c),!(Math.max(n,m,f,d)<0||Math.min(n,m,f,d)>g)){const l=r<M.length-2;Math.abs(f-n)<=1&&Math.abs(d-m)<=1&&l?e=!0:(e=!1,t.fillStyle=s[e&&x>1||y>1?v:"M"],(0,i.$2)(t,n,f,z,d,m,L,I,h),a&&(a.fillStyle=o(p),(0,i.$2)(a,n,f,z,d,m,L,I,h)))}}}else(0,i.$2)(t,w,C,z,k,S,L,I,h)}}const v=e.clickMapCanvas?.getContext("2d");if(v){v.imageSmoothingEnabled=!1,v.clearRect(0,0,g,d);for(let e=0;e<w.length;e++){const t=w[e],a=e*b+1;v.fillStyle=o(a),(0,i.mr)({cb:e=>e.fill(),feature:t,ctx:v,drawCurves:h,offsets:p,oobLimit:c,viewWidth:f.width,hideTiny:!0,height:d})}}}function m(e){const{clickId:t,mouseoverId:a}=e,r=(0,n.getContainingView)(e),o=r.drawCurves,s=r.middleComparativeHeight,l=r.width,f=e.mouseoverCanvas?.getContext("2d"),h=r.views.map((e=>e.offsetPx));if(!f)return;f.resetTransform(),f.scale(1,1),f.clearRect(0,0,l,s);const m=e.featMap[a||""];m&&(f.fillStyle="rgb(0,0,0,0.1)",(0,i.mr)({cb:e=>e.fill(),feature:m,ctx:f,oobLimit:c,viewWidth:r.width,drawCurves:o,offsets:h,height:s}));const d=e.featMap[t||""];d&&(f.strokeStyle="rgb(0, 0, 0, 0.9)",(0,i.mr)({cb:e=>e.stroke(),feature:d,ctx:f,oobLimit:c,viewWidth:r.width,drawCurves:o,offsets:h,height:s}))}},69658:(e,t,a)=>{a.d(t,{renderToSvg:()=>u});var n=a(7552),i=a(48407),r=a(36422),o=a(42489),s=a(99546),l=a(91468),c=a(49823),f=a(68666),h=a(48231);function m({width:e,height:t,shift:a}){const i=(0,h.A)();return n.createElement("rect",{width:e+2*a,height:t,fill:(0,s.stripAlpha)(i.palette.background.default)})}var d=a(30385);function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)({}).hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},g.apply(null,arguments)}async function u(e,t){await(0,o.when)((()=>e.initialized));const{textHeight:a=18,headerHeight:h=30,rulerHeight:u=30,fontSize:w=13,trackLabels:p="offset",Wrapper:b=(({children:e})=>e),themeName:v="default"}=t,x=(0,s.getSession)(e),y=x.allThemes?.()[v],{width:M,views:C,middleComparativeHeight:S,tracks:k}=e,P=h+u,{createRootFn:T}=(0,r.getRoot)(e),$=C.map((e=>(0,f.mJ)(e.tracks,a,p)+P)),E=(0,s.sum)($)+S+100,z=await Promise.all(C.map((async e=>({view:e,data:await Promise.all(e.tracks.map((async e=>{const a=e.displays[0];return await(0,o.when)((()=>void 0===a.ready||a.ready)),{track:e,result:await a.renderSvg({...t,theme:y})}})))})))),L=await Promise.all(k.map((async e=>{const a=e.displays[0];await(0,o.when)((()=>void 0===a.ready||a.ready));const n=await(0,s.renderToAbstractCanvas)(M,S,{exportSVG:t},(e=>(0,d.Ww)(a,e)));if("imageData"in n)throw new Error("found a canvas in svg export, probably a bug");return"canvasRecordedData"in n?{html:await(0,s.getSerializedSvg)({...n,width:M,height:S})}:n}))),I=(0,s.max)(C.flatMap((e=>e.tracks.map((e=>(0,s.measureText)((0,l.getTrackName)(e.configuration,x),w))))),0)+40,R="left"===p?I:0,W=M+R,N=(0,c.createJBrowseTheme)(y);return(0,s.renderToStaticMarkup)(n.createElement(i.A,{theme:N},n.createElement(b,null,n.createElement("svg",{width:M,height:E,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:[0,0,W+100,E].toString()},n.createElement(m,{width:W,height:E,shift:50}),n.createElement("g",{transform:`translate(50 ${w})`},n.createElement("g",{transform:`translate(${R})`},n.createElement("text",g({x:0,fontSize:w},(0,s.getFillProps)(N.palette.text.primary)),C[0].assemblyNames.join(", ")),n.createElement(f.$m,{model:z[0].view,fontSize:w})),n.createElement(f.zh,{textHeight:a,trackLabels:p,fontSize:w,model:z[0].view,displayResults:z[0].data,offset:P,trackLabelOffset:R})),n.createElement("defs",null,n.createElement("clipPath",{id:"synclip"},n.createElement("rect",{x:0,y:0,width:M,height:S}))),n.createElement("g",{transform:`translate(${50+R} ${w+$[0]})`,clipPath:"url(#synclip)"},L.map(((e,t)=>n.createElement(s.ReactRendering,{key:t,rendering:e})))),n.createElement("g",{transform:`translate(50 ${w+$[0]+S})`},n.createElement("g",{transform:`translate(${R})`},n.createElement("text",g({x:0,fontSize:w},(0,s.getFillProps)(N.palette.text.primary)),C[1].assemblyNames.join(", ")),n.createElement(f.$m,{model:z[1].view,fontSize:w})),n.createElement(f.zh,{textHeight:a,trackLabels:p,fontSize:w,model:z[1].view,displayResults:z[1].data,offset:P,trackLabelOffset:R}))))),T)}}}]);
//# sourceMappingURL=9658.ac82fadf.chunk.js.map