"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[5339],{87213:(e,t,n)=>{n.d(t,{UL:()=>p,WK:()=>h,i1:()=>f,u_:()=>u});var l=n(66204),r=n(38684),a=n(80846),o=n(88196),s=n(31211),c=n(17925),i=n(92368),m=n(70333);const d=(0,r.ZL)()((()=>({vtext:{gridColumn:"1/2",gridRow:"1/2",pointerEvents:"none",userSelect:"none"},htext:{gridColumn:"2/2",gridRow:"2/2",pointerEvents:"none",userSelect:"none"}}))),u=(0,a.observer)((function({model:e}){const{viewWidth:t,borderY:n}=e,{classes:r}=d();return l.createElement("svg",{width:t,height:n,className:r.htext},l.createElement(h,{model:e}))})),h=(0,a.observer)((function({model:e}){const{viewWidth:t,borderX:n,borderY:r,hview:a,htextRotation:d,hticks:u}=e,{offsetPx:h,width:p,dynamicBlocks:f,bpPerPx:y}=a,E=f.contentBlocks,b=(0,m.F$)(E,t,h),g=(0,i.Z)(),v={...(0,o.getSnapshot)(a),width:p,staticBlocks:a.staticBlocks},w=u.map((e=>[e,(0,c.R)({refName:e.refName,coord:e.base,self:v})?.offsetPx])).filter((e=>void 0!==e[1])).map((e=>[e[0],e[1]-h]));return l.createElement(l.Fragment,null,E.filter((e=>!b.has(e.key))).map((e=>{const t=e.offsetPx,n=Math.floor(t-a.offsetPx);return l.createElement("text",{transform:`rotate(${d},${n},0)`,key:JSON.stringify(e),x:n,y:1,fill:g.palette.text.primary,fontSize:11,dominantBaseline:"hanging",textAnchor:"end"},e.refName)})),w.map((([e,t])=>t>0&&t<p?l.createElement("line",{key:`line-${JSON.stringify(e)}`,x1:t,x2:t,y1:0,y2:"major"===e.type?6:4,strokeWidth:1,stroke:g.palette.grey[400]}):null)),w.filter((e=>"major"===e[0].type)).map((([e,t])=>t>10&&t<p?l.createElement("text",{x:t-7,y:0,transform:`rotate(${d},${t},0)`,key:`text-${JSON.stringify(e)}`,fill:g.palette.text.primary,fontSize:11,dominantBaseline:"middle",textAnchor:"end"},(0,s.getTickDisplayStr)(e.base+1,y)):null)),l.createElement("text",{y:r-12,x:(t-n)/2,fill:g.palette.text.primary,textAnchor:"middle",fontSize:11,dominantBaseline:"hanging"},a.assemblyNames.join(",")))})),p=(0,a.observer)((function({model:e}){const{borderX:t,viewHeight:n}=e,{classes:r}=d();return l.createElement("svg",{className:r.vtext,width:t,height:n},l.createElement(f,{model:e}))})),f=(0,a.observer)((function({model:e}){const{viewHeight:t,borderX:n,borderY:r,vview:a,vtextRotation:d,vticks:u}=e,{offsetPx:h,width:p,dynamicBlocks:f,bpPerPx:y}=a,E=f.contentBlocks,b=(0,m.F$)(E,t,h),g=(0,i.Z)(),v={...(0,o.getSnapshot)(a),width:p,staticBlocks:a.staticBlocks},w=u.map((e=>[e,(0,c.R)({refName:e.refName,coord:e.base,self:v})?.offsetPx])).filter((e=>void 0!==e[1])).map((e=>[e[0],e[1]-h]));return l.createElement(l.Fragment,null,E.filter((e=>!b.has(e.key))).map((e=>{const r=e.offsetPx,a=n,o=Math.floor(t-r+h);return l.createElement("text",{transform:`rotate(${d},${a},${r})`,key:JSON.stringify(e),x:a,y:o,fill:g.palette.text.primary,fontSize:11,textAnchor:"end"},e.refName)})),w.map((([e,r])=>r>0?l.createElement("line",{key:`line-${JSON.stringify(e)}`,y1:t-r,y2:t-r,x1:n,x2:n-("major"===e.type?6:4),strokeWidth:1,stroke:g.palette.grey[400]}):null)),w.filter((e=>"major"===e[0].type)).map((([e,r])=>r>10&&r<t?l.createElement("text",{y:t-r-3,x:n-7,key:`text-${JSON.stringify(e)}`,textAnchor:"end",fill:g.palette.text.primary,dominantBaseline:"hanging",fontSize:11},(0,s.getTickDisplayStr)(e.base+1,y)):null)),l.createElement("text",{y:(t-r)/2,x:12,fill:g.palette.text.primary,transform:`rotate(-90,12,${(t-r)/2})`,textAnchor:"middle",fontSize:11},a.assemblyNames.join(",")))}))},5339:(e,t,n)=>{n.r(t),n.d(t,{default:()=>pe});var l=n(66204),r=n(43902),a=n(80846),o=n(99247),s=n(38684),c=n(50236),i=n.n(c),m=n(94926),d=n(5723),u=n(73689),h=n(39780),p=n(32842),f=n(82051),y=n(93840),E=n(86636),b=n(80013),g=n(7146),v=n(31211);function w({radioOption:e,assembly1:t,assembly2:n,fileLocation:l,bed1Location:r,bed2Location:a}){if(".paf"===e)return{type:"PAFAdapter",pafLocation:l,queryAssembly:t,targetAssembly:n};if(".out"===e)return{type:"MashMapAdapter",outLocation:l,queryAssembly:t,targetAssembly:n};if(".delta"===e)return{type:"DeltaAdapter",deltaLocation:l,queryAssembly:t,targetAssembly:n};if(".chain"===e)return{type:"ChainAdapter",chainLocation:l,queryAssembly:t,targetAssembly:n};if(".anchors"===e)return{type:"MCScanAnchorsAdapter",mcscanAnchorsLocation:l,bed1Location:r,bed2Location:a,assemblyNames:[t,n]};if(".anchors.simple"===e)return{type:"MCScanSimpleAnchorsAdapter",mcscanSimpleAnchorsLocation:l,bed1Location:r,bed2Location:a,assemblyNames:[t,n]};throw new Error(`Unknown to detect type ${e} from filename (select radio button to clarify)`)}const k=(0,a.observer)((({assembly1:e,assembly2:t,setSessionTrackData:n})=>{const[a,o]=(0,l.useState)(),[s,c]=(0,l.useState)(),[i,m]=(0,l.useState)(),[d,f]=(0,l.useState)(""),[g,v]=(0,l.useState)(),k=(x=i)?x.uri||x.localPath||x.name:void 0;var x;const Z=d||(k?function(e){const t=e.split(".").pop();return t?`.${t}`:""}(function(e){return e.endsWith(".gz")?e.slice(0,-3):e}(k)):"");return(0,l.useEffect)((()=>{try{if(i){const l=k?k.split("#")[0].split("?")[0].split("/").pop():"MyTrack",r=`${l}-${Date.now()}`;v(void 0),n({trackId:r,name:l,assemblyNames:[t,e],type:"SyntenyTrack",adapter:w({radioOption:Z,assembly1:e,assembly2:t,fileLocation:i,bed1Location:s,bed2Location:a})})}}catch(e){console.error(e),v(e)}}),[k,e,t,s,a,i,Z,n]),l.createElement(E.Z,{style:{padding:12}},g?l.createElement(r.ErrorMessage,{error:g}):null,l.createElement(b.Z,{style:{textAlign:"center"}},"Add a .paf, .out (MashMap), .delta (Mummer), .chain, .anchors or .anchors.simple (MCScan) file to view in the dotplot. These file types can also be gzipped. The first assembly should be the query sequence (e.g. left column of the PAF) and the second assembly should be the target sequence (e.g. right column of the PAF)"),l.createElement(u.Z,{value:Z,onChange:e=>f(e.target.value)},l.createElement(y.ZP,{container:!0,justifyContent:"center"},l.createElement(y.ZP,{item:!0},l.createElement(h.Z,{value:".paf",control:l.createElement(p.Z,null),label:".paf"})),l.createElement(y.ZP,{item:!0},l.createElement(h.Z,{value:".out",control:l.createElement(p.Z,null),label:".out"})),l.createElement(y.ZP,{item:!0},l.createElement(h.Z,{value:".delta",control:l.createElement(p.Z,null),label:".delta"})),l.createElement(y.ZP,{item:!0},l.createElement(h.Z,{value:".chain",control:l.createElement(p.Z,null),label:".chain"})),l.createElement(y.ZP,{item:!0},l.createElement(h.Z,{value:".anchors",control:l.createElement(p.Z,null),label:".anchors"})),l.createElement(y.ZP,{item:!0},l.createElement(h.Z,{value:".anchors.simple",control:l.createElement(p.Z,null),label:".anchors.simple"})))),l.createElement(y.ZP,{container:!0,justifyContent:"center"},l.createElement(y.ZP,{item:!0},".anchors"===d||".anchors.simple"===d?l.createElement("div",null,l.createElement("div",{style:{margin:20}},"Open the ",d," and .bed files for both genome assemblies from the MCScan (Python version) pipeline"," ",l.createElement("a",{href:"https://github.com/tanghaibao/jcvi/wiki/MCscan-(Python-version)"},"(more info)")),l.createElement("div",{style:{display:"flex"}},l.createElement("div",null,l.createElement(r.FileSelector,{name:".anchors file",description:"",location:i,setLocation:e=>m(e)})),l.createElement("div",null,l.createElement(r.FileSelector,{name:"genome 1 .bed (left column of anchors file)",description:"",location:s,setLocation:e=>c(e)})),l.createElement("div",null,l.createElement(r.FileSelector,{name:"genome 2 .bed (right column of anchors file)",description:"",location:a,setLocation:e=>o(e)})))):l.createElement(r.FileSelector,{name:d?d+" location":"",description:"",location:i,setLocation:e=>m(e)}))))}));var x=n(32339),Z=n(78781),S=n(5930),C=n(36349),P=n(19609);const L=(0,a.observer)((({model:e,assembly1:t,assembly2:n,setShowTrackId:a})=>{const o=(0,v.getSession)(e),{tracks:s,sessionTracks:c}=o,i=[...s,...c||[]].filter((e=>function(e,t,n){const l=(0,C.readConfObject)(e,"assemblyNames");return l.includes(t)&&l.includes(n)&&e.type.includes("Synteny")}(e,n,t))),m=i[0]?.trackId||"",[d,u]=(0,l.useState)(m);return(0,l.useEffect)((()=>{u(m)}),[m]),(0,l.useEffect)((()=>{a(d)}),[d,a]),l.createElement(E.Z,{style:{padding:12}},l.createElement(b.Z,{paragraph:!0},'Select a track from the select box below, the track will be shown when you hit "Launch".'),l.createElement(b.Z,{paragraph:!0},"Note: there is a track selector ",l.createElement("i",null,"inside")," the DotplotView, which can turn on one or more SyntenyTracks (more than one can be displayed at once). Look for the track selector icon ",l.createElement(P.GD,null)),i.length?l.createElement(x.Z,{value:d,onChange:e=>u(e.target.value)},i.map((e=>l.createElement(Z.Z,{key:e.trackId,value:e.trackId},(0,S.getTrackName)(e,o))))):l.createElement(r.ErrorMessage,{error:`No synteny tracks found for ${t},${n}`}))})),M=(0,s.ZL)()((e=>({importFormContainer:{padding:e.spacing(4),margin:"0 auto"},assemblySelector:{width:"75%",margin:"0 auto"}})));function N({setSessionTrackData:e,setShowTrackId:t,sessionTrackData:n,assembly1:r,assembly2:a,model:o}){const[s,c]=(0,l.useState)("tracklist");return(0,l.useEffect)((()=>{"none"===s&&(e(void 0),t(void 0))}),[s,e,t]),l.createElement(l.Fragment,null,l.createElement(m.Z,null,l.createElement(d.Z,{id:"group-label"},"(Optional) Select or add a synteny track"),l.createElement(u.Z,{row:!0,value:s,onChange:e=>c(e.target.value),"aria-labelledby":"group-label"},l.createElement(h.Z,{value:"none",control:l.createElement(p.Z,null),label:"None"}),l.createElement(h.Z,{value:"tracklist",control:l.createElement(p.Z,null),label:"Existing track"}),l.createElement(h.Z,{value:"custom",control:l.createElement(p.Z,null),label:"New track"}))),"custom"===s?l.createElement(k,{setSessionTrackData:e,sessionTrackData:n,assembly2:a,assembly1:r}):null,"tracklist"===s?l.createElement(L,{model:o,assembly1:r,assembly2:a,setShowTrackId:t}):null)}const A=(0,a.observer)((({model:e})=>{const{classes:t}=M(),n=(0,v.getSession)(e),{assemblyNames:a}=n,[s,c]=(0,l.useState)(a[0]||""),[i,d]=(0,l.useState)(a[0]||""),[u,h]=(0,l.useState)(),[p,w]=(0,l.useState)(),[k,x]=(0,l.useState)(),Z=u||e.error;return l.createElement(f.Z,{className:t.importFormContainer},Z?l.createElement(r.ErrorMessage,{error:Z}):null,l.createElement(y.ZP,{container:!0,spacing:1,justifyContent:"center",alignItems:"center",className:t.assemblySelector},l.createElement(y.ZP,{item:!0},l.createElement(E.Z,{style:{padding:12}},l.createElement(b.Z,{style:{textAlign:"center"}},"Select assemblies for dotplot view"),l.createElement(y.ZP,{container:!0,spacing:1,justifyContent:"center",alignItems:"center"},l.createElement(y.ZP,{item:!0},l.createElement(r.AssemblySelector,{selected:i,onChange:e=>d(e),session:n})),l.createElement(y.ZP,{item:!0},l.createElement(r.AssemblySelector,{selected:s,onChange:e=>c(e),session:n})),l.createElement(y.ZP,{item:!0},l.createElement(m.Z,null,l.createElement(g.Z,{onClick:function(){try{if(!(0,v.isSessionWithAddTracks)(n))return;h(void 0),e.setError(void 0),(0,o.transaction)((()=>{p?(n.addTrackConf(p),e.toggleTrack(p.trackId)):k&&e.showTrack(k),e.setViews([{bpPerPx:.1,offsetPx:0},{bpPerPx:.1,offsetPx:0}]),e.setAssemblyNames(s,i)}))}catch(e){console.error(e),h(e)}},variant:"contained",color:"primary"},"Launch"))))),l.createElement(N,{setShowTrackId:x,assembly2:s,assembly1:i,setSessionTrackData:w,sessionTrackData:p,model:e}))))}));var B=n(32831);const T=(0,l.lazy)((()=>Promise.all([n.e(7395),n.e(3155),n.e(7667)]).then(n.bind(n,78469)))),z=(0,a.observer)((function({model:e}){const t=e.tracks.filter((e=>e.displays[0].warnings?.length)),[n,r]=(0,l.useState)(!1);return t.length?l.createElement(B.Z,{severity:"warning"},"Warnings during render"," ",l.createElement(g.Z,{onClick:()=>r(!0)},"More info"),n?l.createElement(T,{trackWarnings:t,handleClose:()=>r(!1)}):null):null}));var R=n(49140),I=n(61961),$=n(83688),D=n(57001),F=n(18964),O=n(54378),j=n(41247);const H=(0,s.ZL)()({dpad:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",margin:0,position:"absolute",right:50,zIndex:1e3,top:50},icon:{padding:0,margin:0}}),W=(0,a.observer)((function({model:e}){const{classes:t}=H();return l.createElement(E.Z,{className:t.dpad,elevation:6},l.createElement("div",null),l.createElement(R.Z,{className:t.icon,onClick:()=>e.vview.scroll(100)},l.createElement($.Z,null)),l.createElement("div",null),l.createElement(R.Z,{className:t.icon,onClick:()=>e.hview.scroll(-100)},l.createElement(D.Z,null)),l.createElement("div",null),l.createElement(R.Z,{className:t.icon,onClick:()=>e.hview.scroll(100)},l.createElement(F.Z,null)),l.createElement("div",null),l.createElement(R.Z,{className:t.icon,onClick:()=>e.vview.scroll(-100)},l.createElement(I.Z,null)),l.createElement("div",null),l.createElement(R.Z,{className:t.icon,onClick:()=>{e.hview.zoomIn(),e.vview.zoomIn()}},l.createElement(O.Z,null)),l.createElement("div",null),l.createElement(R.Z,{className:t.icon,onClick:()=>{e.hview.zoomOut(),e.vview.zoomOut()}},l.createElement(j.Z,null)))}));var V=n(69522),q=n(98313),Y=n(81650);function J(e){return l.createElement(Y.Z,e,l.createElement("path",{fill:"currentColor",d:"M13,6V11H18V7.75L22.25,12L18,16.25V13H13V18H16.25L12,22.25L7.75,18H11V13H6V16.25L1.75,12L6,7.75V11H11V6H7.75L12,1.75L16.25,6H13Z"}))}function X(e){return l.createElement(Y.Z,e,l.createElement("path",{fill:"currentColor",d:"M10.07,14.27C10.57,14.03 11.16,14.25 11.4,14.75L13.7,19.74L15.5,18.89L13.19,13.91C12.95,13.41 13.17,12.81 13.67,12.58L13.95,12.5L16.25,12.05L8,5.12V15.9L9.82,14.43L10.07,14.27M13.64,21.97C13.14,22.21 12.54,22 12.31,21.5L10.13,16.76L7.62,18.78C7.45,18.92 7.24,19 7,19A1,1 0 0,1 6,18V3A1,1 0 0,1 7,2C7.24,2 7.47,2.09 7.64,2.23L7.65,2.22L19.14,11.86C19.57,12.22 19.62,12.85 19.27,13.27C19.12,13.45 18.91,13.57 18.7,13.61L15.54,14.23L17.74,18.96C18,19.46 17.76,20.05 17.26,20.28L13.64,21.97Z"}))}const _=(0,a.observer)((function({model:e}){return l.createElement("div",null,l.createElement(R.Z,{onClick:e.zoomOutButton},l.createElement(j.Z,null)),l.createElement(R.Z,{onClick:e.zoomInButton},l.createElement(O.Z,null)),l.createElement(R.Z,{onClick:()=>e.activateTrackSelector(),title:"Open track selector"},l.createElement(P.GD,null)),l.createElement(V.Z,{menuItems:[{onClick:()=>e.squareView(),label:"Square view - same base pairs per pixel"},{onClick:()=>e.squareViewProportional(),label:"Rectanglularize view - same total bp"},{onClick:()=>e.showAllRegions(),label:"Show all regions"},{onClick:()=>e.setDrawCigar(!e.drawCigar),type:"checkbox",label:"Draw CIGAR",checked:e.drawCigar},{onClick:()=>e.setShowPanButtons(!e.showPanButtons),label:"Show pan buttons",type:"checkbox",checked:e.showPanButtons},{label:"Click and drag mode",subMenu:[{onClick:()=>e.setCursorMode("move"),label:"Pan by default, select region when ctrl key is held",icon:J,type:"radio",checked:"move"===e.cursorMode},{onClick:()=>e.setCursorMode("crosshair"),label:"Select region by default, pan when ctrl key is held",icon:X,type:"radio",checked:"crosshair"===e.cursorMode}]},{label:"Wheel scroll mode",subMenu:[{onClick:()=>e.setWheelMode("pan"),label:"Pans view",type:"radio",checked:"pan"===e.wheelMode},{onClick:()=>e.setWheelMode("zoom"),label:"Zooms view",type:"radio",checked:"zoom"===e.wheelMode},{onClick:()=>e.setWheelMode("none"),label:"Disable",type:"radio",checked:"none"===e.wheelMode}]}]},l.createElement(q.Z,null)))})),G=(0,s.ZL)()({bp:{display:"flex",alignItems:"center",marginLeft:10},spacer:{flexGrow:1},headerBar:{display:"flex",position:"relative"}}),U=(0,a.observer)((function({model:e,selection:t}){const{classes:n}=G(),{hview:r,vview:a,showPanButtons:o}=e;return l.createElement("div",{className:n.headerBar},l.createElement(_,{model:e}),l.createElement(b.Z,{className:n.bp,variant:"body2",color:"textSecondary"},"x: ",r.assemblyNames.join(",")," ",(0,v.getBpDisplayStr)(r.currBp),l.createElement("br",null),"y: ",a.assemblyNames.join(",")," ",(0,v.getBpDisplayStr)(a.currBp)),t?l.createElement(b.Z,{className:n.bp,variant:"body2",color:"textSecondary"},`width:${(0,v.getBpDisplayStr)(r.bpPerPx*t.width)}`," ",l.createElement("br",null),`height:${(0,v.getBpDisplayStr)(a.bpPerPx*t.height)}`):null,l.createElement("div",{className:n.spacer}),l.createElement(z,{model:e}),o?l.createElement(W,{model:e}):null)}));var K=n(94891),Q=n(87213),ee=n(70333),te=n(73330),ne=n(92368),le=n(70421),re=n(19047);function ae(){return ae=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},ae.apply(this,arguments)}const oe=(0,s.ZL)()((e=>({tooltip:{position:"absolute",pointerEvents:"none",backgroundColor:(0,te.Fq)(e.palette.grey[700],.9),borderRadius:e.shape.borderRadius,color:e.palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(12),lineHeight:(1.4,Math.round(14e4)/1e5+"em"),maxWidth:300,wordWrap:"break-word"}}))),se=(0,a.observer)((function({model:e,mouserect:t,mouserectClient:n,xdistance:r}){const{classes:a}=oe(),{hview:o,vview:s,viewHeight:c}=e,i=(0,ne.Z)(),{refs:m,floatingStyles:d,context:u}=(0,re.YF)({placement:r<0?"left":"right"}),h=(0,re.gR)(u,n?{x:n[0],y:n[1]}:void 0),{getFloatingProps:p}=(0,re.NI)([h]),f=i?.components?.MuiPopper;return t?l.createElement(le.h,{container:f?.defaultProps?.container},l.createElement("div",ae({className:a.tooltip,ref:m.setFloating,style:{...d,zIndex:1e5,pointerEvents:"none"}},p()),`x - ${(0,ee.c4)(t[0],o)}`,l.createElement("br",null),`y - ${(0,ee.c4)(c-t[1],s)}`,l.createElement("br",null))):null})),ce=(0,a.observer)((function({model:e,mousedown:t,mousedownClient:n,xdistance:r,ydistance:a}){const{classes:o}=oe(),{hview:s,vview:c,viewHeight:i}=e,m=(0,ne.Z)(),d=(n?.[0]||0)-0,u=(n?.[1]||0)-0,{refs:h,floatingStyles:p,context:f}=(0,re.YF)({placement:r<0?"right":"left"}),y=(0,re.gR)(f,{x:d,y:u}),{getFloatingProps:E}=(0,re.NI)([y]),b=m?.components?.MuiPopper;return t&&Math.abs(r)>3&&Math.abs(a)>3?l.createElement(le.h,{container:b?.defaultProps?.container},l.createElement("div",ae({className:o.tooltip,ref:h.setFloating,style:{...p,zIndex:1e5,pointerEvents:"none"}},E()),`x - ${(0,ee.c4)(t[0],s)}`,l.createElement("br",null),`y - ${(0,ee.c4)(i-t[1],c)}`,l.createElement("br",null))):null})),ie={left:0,top:0,width:0,height:0},me=(0,s.ZL)()((e=>({spacer:{gridColumn:"1/2",gridRow:"2/2"},root:{position:"relative",marginBottom:e.spacing(1),overflow:"hidden"},container:{display:"grid",padding:5,position:"relative"},overlay:{pointerEvents:"none",overflow:"hidden",display:"flex",width:"100%",gridRow:"1/2",gridColumn:"2/2",zIndex:100,"& path":{cursor:"crosshair",fill:"none"}},content:{position:"relative",gridColumn:"2/2",gridRow:"1/2"},resizeHandle:{height:4,background:"#ccc",boxSizing:"border-box",borderTop:"1px solid #fafafa"}})));function de(e,t){return e&&[e[0]-t.left,e[1]-t.top]}const ue=(0,a.observer)((({model:e})=>{const{classes:t}=me();return l.createElement("div",{className:t.overlay},e.tracks.map((e=>{const[t]=e.displays,{RenderingComponent:n}=t;return n?l.createElement(n,{key:e.configuration.trackId,model:t}):null})))})),he=(0,a.observer)((function({model:e}){const{classes:t}=me(),[n,a]=(0,l.useState)(),[s,c]=(0,l.useState)(),[m,d]=(0,l.useState)(!1),[u,h]=(0,l.useState)(),p=(0,l.useRef)(null),f=(0,l.useRef)(null),y=(0,l.useRef)(0),E=(0,l.useRef)(0),b=(0,l.useRef)(!1),[g,v]=(0,l.useState)(!1),w=p.current?.getBoundingClientRect()||ie,k=p.current?.getBoundingClientRect()||ie,x=de(s,w),Z=de(n,w),S=de(u,w),C=S||Z,P=u||n,L=x&&C?C[0]-x[0]:0,M=x&&C?C[1]-x[1]:0,{hview:N,vview:A,wheelMode:B,cursorMode:T}=e,z="move"===T&&!g||"crosshair"===T&&g,R="move"===T&&g||"crosshair"===T&&!g;return(0,l.useEffect)((()=>{function e(e){const t=i()(e);e.preventDefault(),y.current+=t.pixelX,E.current-=t.pixelY,b.current||(b.current=!0,window.requestAnimationFrame((()=>{(0,o.transaction)((()=>{if("pan"===B)N.scroll(y.current/3),A.scroll(E.current/10);else if("zoom"===B&&Math.abs(E.current)>2*Math.abs(y.current)&&Z){const e=E.current<0?1.1:.9;N.zoomTo(N.bpPerPx*e,Z[0]),A.zoomTo(A.bpPerPx*e,k.height-Z[1])}})),b.current=!1,y.current=0,E.current=0})))}if(p.current){const t=p.current;return t.addEventListener("wheel",e),()=>t.removeEventListener("wheel",e)}return()=>{}}),[N,A,B,Z,k.height]),(0,l.useEffect)((()=>{function e(e){a([e.clientX,e.clientY]),n&&s&&z&&!u&&(N.scroll(-e.clientX+n[0]),A.scroll(e.clientY-n[1]))}return window.addEventListener("mousemove",e),()=>window.removeEventListener("mousemove",e)}),[z,n,s,T,g,u,N,A]),(0,l.useEffect)((()=>{if(x&&!S){function e(e){Math.abs(L)>3&&Math.abs(M)>3&&R?h([e.clientX,e.clientY]):c(void 0)}return window.addEventListener("mouseup",e,!0),()=>{window.removeEventListener("mouseup",e,!0)}}return()=>{}}),[R,x,Z,S,L,M,g,T]),l.createElement("div",null,l.createElement(U,{model:e,selection:R&&x&&C?{width:Math.abs(L),height:Math.abs(M)}:void 0}),l.createElement("div",{ref:f,className:t.root,onMouseLeave:()=>d(!1),onMouseEnter:()=>d(!0)},l.createElement("div",{className:t.container},l.createElement(Q.UL,{model:e}),l.createElement(Q.u_,{model:e}),l.createElement("div",{ref:p,className:t.content},m&&R?l.createElement(se,{model:e,mouserect:C,mouserectClient:P,xdistance:L}):null,R?l.createElement(ce,{model:e,mousedown:x,mousedownClient:s,xdistance:L,ydistance:M}):null,l.createElement("div",{style:{cursor:g?"pointer":T},onMouseDown:e=>{if(0===e.button){const{clientX:t,clientY:n}=e;c([t,n]),a([t,n]),v(e.ctrlKey)}}},l.createElement(K.Z,{model:e},R&&x&&C?l.createElement("rect",{fill:"rgba(255,0,0,0.3)",x:Math.min(C[0],x[0]),y:Math.min(C[1],x[1]),width:Math.abs(L),height:Math.abs(M)}):null)),l.createElement("div",{className:t.spacer})),l.createElement(ue,{model:e}),l.createElement(r.Menu,{open:Boolean(S),onMenuItemClick:(e,t)=>{t(),h(void 0),c(void 0)},onClose:()=>{h(void 0),c(void 0)},anchorReference:"anchorPosition",anchorPosition:u?{top:u[1]+50,left:u[0]+50}:void 0,style:{zIndex:1e4},menuItems:[{label:"Zoom in",onClick:()=>{x&&S&&e.zoomIn(x,S),d(!1)}},{label:"Open linear synteny view",onClick:()=>{x&&S&&e.onDotplotView(x,S),d(!1)}}]})),l.createElement(r.ResizeHandle,{onDrag:t=>e.setHeight(e.height+t),className:t.resizeHandle})))})),pe=(0,a.observer)((({model:e})=>{const{initialized:t,loading:n,error:a}=e;return!t&&!n||a?l.createElement(A,{model:e}):n?l.createElement(r.LoadingEllipses,{variant:"h6"}):l.createElement(he,{model:e})}))},94891:(e,t,n)=>{n.d(t,{B:()=>o,Z:()=>s});var l=n(66204),r=n(80846),a=n(92368);const o=(0,r.observer)((function({model:e,children:t}){const{viewWidth:n,viewHeight:r,hview:o,vview:s}=e,c=o.dynamicBlocks.contentBlocks,i=s.dynamicBlocks.contentBlocks;if(!c.length||!i.length)return null;const m=o.displayedRegionsTotalPx-o.offsetPx,d=s.displayedRegionsTotalPx-s.offsetPx,u=c[0].offsetPx-o.offsetPx,h=i[0].offsetPx-s.offsetPx,p=(0,a.Z)(),f=p.palette.divider,y=Math.max(u,0),E=Math.max(r-d,0),b=Math.min(m-u,n),g=Math.min(r-h-E,r);let v=1/0,w=1/0;return l.createElement(l.Fragment,null,l.createElement("rect",{x:y,y:E,width:b,height:g,fill:p.palette.background.default}),l.createElement("g",null,c.map((e=>{const t=e.offsetPx-o.offsetPx,n=Math.floor(t)!==Math.floor(v);return n&&(v=t),n?l.createElement("line",{key:JSON.stringify(e),x1:t,y1:0,x2:t,y2:r,stroke:f}):null})),i.map((e=>{const t=r-(e.offsetPx-s.offsetPx),a=Math.floor(t)!==Math.floor(w);return a&&(w=t),a?l.createElement("line",{key:JSON.stringify(e),x1:0,y1:t,x2:n,y2:t,stroke:f}):null})),l.createElement("line",{x1:m,y1:0,x2:m,y2:r,stroke:f}),l.createElement("line",{x1:0,y1:r-d,x2:n,y2:r-d,stroke:f})),t)}));function s({model:e,children:t}){const{viewWidth:n,viewHeight:r}=e;return l.createElement("svg",{width:n,height:r,style:{background:"rgba(0,0,0,0.12)"}},l.createElement(o,{model:e},t))}}}]);
//# sourceMappingURL=5339.62de173b.chunk.js.map