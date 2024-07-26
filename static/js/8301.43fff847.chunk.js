"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[8301],{682:(e,t,a)=>{a.r(t),a.d(t,{default:()=>M});var n=a(7552),o=a(48171),r=a(22679),s=a(56089),l=a(33371),c=a(33248),i=a(63896),m=a(67314),d=a(943),u=a(5401),h=a(75785),p=a(68446),A=a(99546),y=a(49823),b=a(36715);function f({radioOption:e,assembly1:t,assembly2:a,fileLocation:n,bed1Location:o,bed2Location:r}){if(".paf"===e)return{type:"PAFAdapter",pafLocation:n,queryAssembly:t,targetAssembly:a};if(".out"===e)return{type:"MashMapAdapter",outLocation:n,queryAssembly:t,targetAssembly:a};if(".delta"===e)return{type:"DeltaAdapter",deltaLocation:n,queryAssembly:t,targetAssembly:a};if(".chain"===e)return{type:"ChainAdapter",chainLocation:n,queryAssembly:t,targetAssembly:a};if(".anchors"===e)return{type:"MCScanAnchorsAdapter",mcscanAnchorsLocation:n,bed1Location:o,bed2Location:r,assemblyNames:[t,a]};if(".anchors.simple"===e)return{type:"MCScanSimpleAnchorsAdapter",mcscanSimpleAnchorsLocation:n,bed1Location:o,bed2Location:r,assemblyNames:[t,a]};throw new Error(`Unknown to detect type ${e} from filename (select radio button to clarify)`)}const g=(0,p.observer)((({assembly1:e,assembly2:t,setSessionTrackData:a})=>{const[o,r]=(0,n.useState)(),[i,u]=(0,n.useState)(),[h,p]=(0,n.useState)(),[A,g]=(0,n.useState)(""),[v,E]=(0,n.useState)(),S=(k=h)?k.uri||k.localPath||k.name:void 0;var k;const w=A||(S?function(e){const t=e.split(".").pop();return t?`.${t}`:""}(function(e){return e.endsWith(".gz")?e.slice(0,-3):e}(S)):"");return(0,n.useEffect)((()=>{try{if(h){const n=S?S.split("#")[0].split("?")[0].split("/").pop():"MyTrack",r=`${n}-${Date.now()}`;E(void 0),a({trackId:r,name:n,assemblyNames:[t,e],type:"SyntenyTrack",adapter:f({radioOption:w,assembly1:e,assembly2:t,fileLocation:h,bed1Location:i,bed2Location:o})})}}catch(e){console.error(e),E(e)}}),[S,e,t,i,o,h,w,a]),n.createElement(d.A,{style:{padding:12}},v?n.createElement(y.ErrorMessage,{error:v}):null,n.createElement(b.A,{style:{textAlign:"center"}},"Add a .paf, .out (MashMap), .delta (Mummer), .chain, .anchors or .anchors.simple (MCScan) file to view in the dotplot. These file types can also be gzipped. The first assembly should be the query sequence (e.g. left column of the PAF) and the second assembly should be the target sequence (e.g. right column of the PAF)"),n.createElement(s.A,{value:w,onChange:e=>g(e.target.value)},n.createElement(m.Ay,{container:!0,justifyContent:"center"},n.createElement(m.Ay,{item:!0},n.createElement(l.A,{value:".paf",control:n.createElement(c.A,null),label:".paf"})),n.createElement(m.Ay,{item:!0},n.createElement(l.A,{value:".out",control:n.createElement(c.A,null),label:".out"})),n.createElement(m.Ay,{item:!0},n.createElement(l.A,{value:".delta",control:n.createElement(c.A,null),label:".delta"})),n.createElement(m.Ay,{item:!0},n.createElement(l.A,{value:".chain",control:n.createElement(c.A,null),label:".chain"})),n.createElement(m.Ay,{item:!0},n.createElement(l.A,{value:".anchors",control:n.createElement(c.A,null),label:".anchors"})),n.createElement(m.Ay,{item:!0},n.createElement(l.A,{value:".anchors.simple",control:n.createElement(c.A,null),label:".anchors.simple"})))),n.createElement(m.Ay,{container:!0,justifyContent:"center"},n.createElement(m.Ay,{item:!0},".anchors"===A||".anchors.simple"===A?n.createElement("div",null,n.createElement("div",{style:{margin:20}},"Open the ",A," and .bed files for both genome assemblies from the MCScan (Python version) pipeline"," ",n.createElement("a",{href:"https://github.com/tanghaibao/jcvi/wiki/MCscan-(Python-version)"},"(more info)")),n.createElement("div",{style:{display:"flex"}},n.createElement("div",null,n.createElement(y.FileSelector,{name:".anchors file",description:"",location:h,setLocation:e=>p(e)})),n.createElement("div",null,n.createElement(y.FileSelector,{name:"genome 1 .bed (left column of anchors file)",description:"",location:i,setLocation:e=>u(e)})),n.createElement("div",null,n.createElement(y.FileSelector,{name:"genome 2 .bed (right column of anchors file)",description:"",location:o,setLocation:e=>r(e)})))):n.createElement(y.FileSelector,{name:A?A+" location":"",description:"",location:h,setLocation:e=>p(e)}))))}));var v=a(98360),E=a(29629),S=a(91468),k=a(68584);const w=(0,p.observer)((({model:e,assembly1:t,assembly2:a,setShowTrackId:o})=>{const r=(0,A.getSession)(e),{tracks:s=[],sessionTracks:l=[]}=r,c=[...s,...l].filter((e=>function(e,t,a){const n=(0,k.readConfObject)(e,"assemblyNames");return n.includes(t)&&n.includes(a)&&e.type.includes("Synteny")}(e,a,t))),i=c[0]?.trackId||"",[m,u]=(0,n.useState)(i);return(0,n.useEffect)((()=>{u(i)}),[i]),(0,n.useEffect)((()=>{o(m)}),[m,o]),n.createElement(d.A,{style:{padding:12}},n.createElement(b.A,{paragraph:!0},'Select a track from the select box below, the track will be shown when you hit "Launch".'),c.length?n.createElement(v.A,{value:m,onChange:e=>u(e.target.value)},c.map((e=>n.createElement(E.A,{key:e.trackId,value:e.trackId},(0,S.getTrackName)(e,r))))):n.createElement(y.ErrorMessage,{error:`No synteny tracks found for ${t},${a}`}))})),x=(0,h.n9)()((e=>({importFormContainer:{padding:e.spacing(4),margin:"0 auto"},assemblySelector:{width:"75%",margin:"0 auto"}})));function C({setSessionTrackData:e,setShowTrackId:t,sessionTrackData:a,assembly1:i,assembly2:m,model:d}){const[u,h]=(0,n.useState)("tracklist");return(0,n.useEffect)((()=>{"none"===u&&(e(void 0),t(void 0))}),[u,e,t]),n.createElement(n.Fragment,null,n.createElement(o.A,null,n.createElement(r.A,{id:"group-label"},"(Optional) Select or add a synteny track"),n.createElement(s.A,{row:!0,value:u,onChange:e=>h(e.target.value),"aria-labelledby":"group-label"},n.createElement(l.A,{value:"none",control:n.createElement(c.A,null),label:"None"}),n.createElement(l.A,{value:"tracklist",control:n.createElement(c.A,null),label:"Existing track"}),n.createElement(l.A,{value:"custom",control:n.createElement(c.A,null),label:"New track"}))),"custom"===u?n.createElement(g,{setSessionTrackData:e,sessionTrackData:a,assembly2:m,assembly1:i}):null,"tracklist"===u?n.createElement(w,{model:d,assembly1:i,assembly2:m,setShowTrackId:t}):null)}const M=(0,p.observer)((function({model:e}){const{classes:t}=x(),a=(0,A.getSession)(e),{assemblyNames:r}=a,[s,l]=(0,n.useState)(r[0]||""),[c,h]=(0,n.useState)(r[0]||""),[p,b]=(0,n.useState)(),[f,g]=(0,n.useState)(),[v,E]=(0,n.useState)(),S=p;return n.createElement(i.A,{className:t.importFormContainer},S?n.createElement(y.ErrorMessage,{error:S}):null,n.createElement(m.Ay,{container:!0,spacing:1,justifyContent:"center",alignItems:"center",className:t.assemblySelector},n.createElement(m.Ay,{item:!0},n.createElement(d.A,{style:{padding:12}},n.createElement("p",{style:{textAlign:"center"}},"Select assemblies for linear synteny view"),n.createElement(m.Ay,{container:!0,spacing:1,justifyContent:"center",alignItems:"center"},n.createElement(m.Ay,{item:!0},n.createElement(y.AssemblySelector,{selected:c,onChange:e=>h(e),session:a})),n.createElement(m.Ay,{item:!0},n.createElement(y.AssemblySelector,{selected:s,onChange:e=>l(e),session:a})),n.createElement(m.Ay,{item:!0},n.createElement(o.A,null,n.createElement(u.A,{onClick:async function(){try{if(!(0,A.isSessionWithAddTracks)(a))return;b(void 0);const{assemblyManager:t}=a,n=[c,s];e.setViews(await Promise.all(n.map((async e=>{const a=await t.waitForAssembly(e);if(!a)throw new Error(`Assembly ${e} failed to load`);return{type:"LinearGenomeView",bpPerPx:1,offsetPx:0,hideHeader:!0,displayedRegions:a.regions}})))),e.views.forEach((t=>t.setWidth(e.width))),e.views.forEach((e=>e.showAllRegions())),f?(a.addTrackConf(f),e.toggleTrack(f.trackId)):v&&e.showTrack(v)}catch(e){console.error(e),b(e)}},variant:"contained",color:"primary"},"Launch"))))),n.createElement(C,{setShowTrackId:E,assembly2:s,assembly1:c,setSessionTrackData:g,sessionTrackData:f,model:e}))))}))},63896:(e,t,a)=>{a.d(t,{A:()=>S});var n=a(83673),o=a(6614),r=a(7552),s=a(93878),l=a(85693),c=a(70799),i=a(33283),m=a(97269),d=a(49267),u=a(25269),h=a(69500);const p=["className","component","disableGutters","fixed","maxWidth","classes"],A=(0,u.A)(),y=(0,d.A)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[`maxWidth${(0,i.A)(String(a.maxWidth))}`],a.fixed&&t.fixed,a.disableGutters&&t.disableGutters]}}),b=e=>(0,m.A)({props:e,name:"MuiContainer",defaultTheme:A});var f=a(15622),g=a(51148),v=a(4785);const E=function(e={}){const{createStyledComponent:t=y,useThemeProps:a=b,componentName:m="MuiContainer"}=e,d=t((({theme:e,ownerState:t})=>(0,o.A)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}})),(({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce(((t,a)=>{const n=a,o=e.breakpoints.values[n];return 0!==o&&(t[e.breakpoints.up(n)]={maxWidth:`${o}${e.breakpoints.unit}`}),t}),{})),(({theme:e,ownerState:t})=>(0,o.A)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}))),u=r.forwardRef((function(e,t){const r=a(e),{className:u,component:A="div",disableGutters:y=!1,fixed:b=!1,maxWidth:f="lg"}=r,g=(0,n.A)(r,p),v=(0,o.A)({},r,{component:A,disableGutters:y,fixed:b,maxWidth:f}),E=((e,t)=>{const{classes:a,fixed:n,disableGutters:o,maxWidth:r}=e,s={root:["root",r&&`maxWidth${(0,i.A)(String(r))}`,n&&"fixed",o&&"disableGutters"]};return(0,c.A)(s,(e=>(0,l.Ay)(t,e)),a)})(v,m);return(0,h.jsx)(d,(0,o.A)({as:A,ownerState:v,className:(0,s.A)(E.root,u),ref:t},g))}));return u}({createStyledComponent:(0,g.Ay)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[`maxWidth${(0,f.A)(String(a.maxWidth))}`],a.fixed&&t.fixed,a.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,v.b)({props:e,name:"MuiContainer"})}),S=E},33248:(e,t,a)=>{a.d(t,{A:()=>T});var n=a(83673),o=a(6614),r=a(7552),s=a(93878),l=a(70799),c=a(22991),i=a(15110),m=a(4785),d=a(74893),u=a(69500);const h=(0,d.A)((0,u.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),p=(0,d.A)((0,u.jsx)("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked");var A=a(51148),y=a(55270);const b=(0,A.Ay)("span",{shouldForwardProp:y.A})({position:"relative",display:"flex"}),f=(0,A.Ay)(h)({transform:"scale(1)"}),g=(0,A.Ay)(p)((({theme:e,ownerState:t})=>(0,o.A)({left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},t.checked&&{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}))),v=function(e){const{checked:t=!1,classes:a={},fontSize:n}=e,r=(0,o.A)({},e,{checked:t});return(0,u.jsxs)(b,{className:a.root,ownerState:r,children:[(0,u.jsx)(f,{fontSize:n,className:a.background,ownerState:r}),(0,u.jsx)(g,{fontSize:n,className:a.dot,ownerState:r})]})};var E=a(15622),S=a(4402),k=a(39006),w=a(38127);const x=["checked","checkedIcon","color","icon","name","onChange","size","className"],C=(0,A.Ay)(i.A,{shouldForwardProp:e=>(0,y.A)(e)||"classes"===e,name:"MuiRadio",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,"medium"!==a.size&&t[`size${(0,E.A)(a.size)}`],t[`color${(0,E.A)(a.color)}`]]}})((({theme:e,ownerState:t})=>(0,o.A)({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===t.color?e.vars.palette.action.activeChannel:e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.X4)("default"===t.color?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${w.A.checked}`]:{color:(e.vars||e).palette[t.color].main}},{[`&.${w.A.disabled}`]:{color:(e.vars||e).palette.action.disabled}}))),M=(0,u.jsx)(v,{checked:!0}),L=(0,u.jsx)(v,{}),T=r.forwardRef((function(e,t){var a,c;const i=(0,m.b)({props:e,name:"MuiRadio"}),{checked:d,checkedIcon:h=M,color:p="primary",icon:A=L,name:y,onChange:b,size:f="medium",className:g}=i,v=(0,n.A)(i,x),T=(0,o.A)({},i,{color:p,size:f}),R=(e=>{const{classes:t,color:a,size:n}=e,r={root:["root",`color${(0,E.A)(a)}`,"medium"!==n&&`size${(0,E.A)(n)}`]};return(0,o.A)({},t,(0,l.A)(r,w.q,t))})(T),N=(0,k.A)();let $=d;const j=(0,S.A)(b,N&&N.onChange);let z=y;var W,I;return N&&(void 0===$&&(W=N.value,$="object"==typeof(I=i.value)&&null!==I?W===I:String(W)===String(I)),void 0===z&&(z=N.name)),(0,u.jsx)(C,(0,o.A)({type:"radio",icon:r.cloneElement(A,{fontSize:null!=(a=L.props.fontSize)?a:f}),checkedIcon:r.cloneElement(h,{fontSize:null!=(c=M.props.fontSize)?c:f}),ownerState:T,classes:R,name:z,checked:$,onChange:j,ref:t,className:(0,s.A)(R.root,g)},v))}))},38127:(e,t,a)=>{a.d(t,{A:()=>s,q:()=>r});var n=a(33761),o=a(85693);function r(e){return(0,o.Ay)("MuiRadio",e)}const s=(0,n.A)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"])},56089:(e,t,a)=>{a.d(t,{A:()=>y});var n=a(6614),o=a(83673),r=a(7552),s=a(93878),l=a(70799),c=a(83867),i=a(87625),m=a(51584),d=a(77259),u=a(76258),h=a(89456),p=a(69500);const A=["actions","children","className","defaultValue","name","onChange","value"],y=r.forwardRef((function(e,t){const{actions:a,children:y,className:b,defaultValue:f,name:g,onChange:v,value:E}=e,S=(0,o.A)(e,A),k=r.useRef(null),w=(e=>{const{classes:t,row:a,error:n}=e,o={root:["root",a&&"row",n&&"error"]};return(0,l.A)(o,i.B,t)})(e),[x,C]=(0,d.A)({controlled:E,default:f,name:"RadioGroup"});r.useImperativeHandle(a,(()=>({focus:()=>{let e=k.current.querySelector("input:not(:disabled):checked");e||(e=k.current.querySelector("input:not(:disabled)")),e&&e.focus()}})),[]);const M=(0,m.A)(t,k),L=(0,h.A)(g),T=r.useMemo((()=>({name:L,onChange(e){C(e.target.value),v&&v(e,e.target.value)},value:x})),[L,v,C,x]);return(0,p.jsx)(u.A.Provider,{value:T,children:(0,p.jsx)(c.A,(0,n.A)({role:"radiogroup",ref:M,className:(0,s.A)(w.root,b)},S,{children:y}))})}))},76258:(e,t,a)=>{a.d(t,{A:()=>n});const n=a(7552).createContext(void 0)},87625:(e,t,a)=>{a.d(t,{A:()=>s,B:()=>r});var n=a(33761),o=a(85693);function r(e){return(0,o.Ay)("MuiRadioGroup",e)}const s=(0,n.A)("MuiRadioGroup",["root","row","error"])},39006:(e,t,a)=>{a.d(t,{A:()=>r});var n=a(7552),o=a(76258);function r(){return n.useContext(o.A)}}}]);
//# sourceMappingURL=8301.43fff847.chunk.js.map