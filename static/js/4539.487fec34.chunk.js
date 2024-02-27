"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[4539,5243],{14539:(e,t,r)=>{r.r(t),r.d(t,{default:()=>$});var a=r(7552),n=r(68446),o=r(48735),i=r(99546),l=r(75785),s=r(83803),c=r(61723),d=r(8463),m=r(95936),u=r(50253),h=r(18355),g=r(43962),p=r(25746),f=r(45374),v=r(32306),b=r(64359),x=r(90542),A=r(15243);const k=(0,l.n9)()((e=>({controls:{position:"absolute",borderRight:`1px solid ${e.palette.divider}`,borderBottom:`1px solid ${e.palette.divider}`,left:0,top:0}}))),E=(0,n.observer)((function({model:e}){const{classes:t}=k(),[r,n]=(0,a.useState)(null);return a.createElement("div",{className:t.controls},a.createElement(c.A,{onClick:e.zoomOutButton,title:e.lockedFitToWindow?"unlock to zoom out":"zoom out",disabled:e.atMaxBpPerPx||e.lockedFitToWindow},a.createElement(m.A,null)),a.createElement(c.A,{onClick:e.zoomInButton,disabled:e.atMinBpPerPx,title:"zoom in"},a.createElement(u.A,null)),a.createElement(c.A,{onClick:e.rotateCounterClockwiseButton,title:"rotate counter-clockwise"},a.createElement(h.A,null)),a.createElement(c.A,{onClick:e.rotateClockwiseButton,title:"rotate clockwise"},a.createElement(g.A,null)),a.createElement(c.A,{onClick:e.toggleFitToWindowLock,title:e.lockedFitToWindow?"locked model to window size":"unlocked model to zoom further",disabled:e.tooSmallToLock},e.lockedFitToWindow?a.createElement(f.A,null):a.createElement(p.A,null)),a.createElement(c.A,{onClick:e=>n(e.currentTarget)},a.createElement(b.A,null)),e.hideTrackSelectorButton?null:a.createElement(c.A,{onClick:e.activateTrackSelector,title:"Open track selector","data-testid":"circular_track_select"},a.createElement(x.xU,null)),r?a.createElement(d.A,{anchorEl:r,menuItems:[{label:"Export SVG",icon:v.A,onClick:()=>{(0,i.getSession)(e).queueDialog((t=>[A.default,{model:e,handleClose:t}]))}}],onMenuItemClick:(e,t)=>{t(),n(null)},open:Boolean(r),onClose:()=>n(null)}):null)}));var y=r(63896),S=r(67314),C=r(5401);const w=(0,l.n9)()((e=>({importFormContainer:{padding:e.spacing(6)}}))),M=(0,n.observer)((({model:e})=>{const{classes:t}=w(),r=(0,i.getSession)(e),{error:n}=e,{assemblyNames:l,assemblyManager:s}=r,[c,d]=(0,a.useState)(l[0]),m=s.get(c),u=l.length?m?.error:"No configured assemblies",h=m?.regions||[],g=u||n;return a.createElement(y.A,{className:t.importFormContainer},g?a.createElement(S.Ay,{container:!0,spacing:1,justifyContent:"center",alignItems:"center"},a.createElement(S.Ay,{item:!0},a.createElement(o.ErrorMessage,{error:g}))):null,a.createElement(S.Ay,{container:!0,spacing:1,justifyContent:"center",alignItems:"center"},a.createElement(S.Ay,{item:!0},a.createElement(o.AssemblySelector,{onChange:t=>{e.setError(void 0),d(t)},session:r,selected:c})),a.createElement(S.Ay,{item:!0},a.createElement(C.A,{disabled:!h?.length,onClick:()=>{e.setError(void 0),e.setDisplayedRegions(h)},variant:"contained",color:"primary"},h.length||g?"Open":"Loading..."))))})),R=(0,l.n9)()((e=>({root:{position:"relative",marginBottom:e.spacing(1),overflow:"hidden"},scroller:{overflow:"auto"}}))),W=(0,n.observer)((({model:e})=>a.createElement(a.Fragment,null,e.staticSlices.map((t=>a.createElement(s.A,{key:(0,i.assembleLocString)(t.region.elided?t.region.regions[0]:t.region),model:e,slice:t}))),e.tracks.map((t=>{const r=t.displays[0];return a.createElement(r.RenderingComponent,{key:r.id,display:r,view:e})}))))),T=(0,n.observer)((({model:e})=>{const t=!!e.displayedRegions.length&&!!e.figureWidth&&!!e.figureHeight&&e.initialized,r=!t&&!e.disableImportForm,n=t&&!r;return a.createElement(a.Fragment,null,r||e.error?a.createElement(M,{model:e}):n?a.createElement(z,{model:e}):null)})),z=(0,n.observer)((function({model:e}){const{width:t,height:r,id:n,offsetRadians:i,centerXY:l,figureWidth:s,figureHeight:c,hideVerticalResizeHandle:d}=e,{classes:m}=R();return a.createElement("div",{className:m.root,style:{width:t,height:r},"data-testid":n},a.createElement("div",{className:m.scroller,style:{width:t,height:r}},a.createElement("svg",{style:{transform:`rotate(${i}rad)`,transition:"transform 0.5s",transformOrigin:l.map((e=>`${e}px`)).join(" "),position:"absolute",left:0,top:0},width:s,height:c},a.createElement("g",{transform:`translate(${l})`},a.createElement(W,{model:e})))),a.createElement(E,{model:e}),d?null:a.createElement(o.ResizeHandle,{onDrag:e.resizeHeight,style:{height:3,position:"absolute",bottom:0,left:0,background:"#ccc",boxSizing:"border-box",borderTop:"1px solid #fafafa"}}))})),$=T},15243:(e,t,r)=>{r.r(t),r.d(t,{default:()=>v});var a=r(7552),n=r(59705),o=r(36715),i=r(29499),l=r(1343),s=r(29629),c=r(33371),d=r(32808),m=r(58507),u=r(5401),h=r(48735),g=r(99546);function p(){return a.createElement("div",null,a.createElement(n.A,{size:20,style:{marginRight:20}}),a.createElement(o.A,{display:"inline"},"Creating SVG"))}function f(e,t){return(0,g.useLocalStorage)("svg-"+e,t)}function v({model:e,handleClose:t}){const r=(0,g.getSession)(e),n="undefined"!=typeof OffscreenCanvas,[v,b]=(0,a.useState)(n),[x,A]=(0,a.useState)(!1),[k,E]=(0,a.useState)(),[y,S]=f("file","jbrowse.svg"),[C,w]=f("theme",r.themeName||"default");return a.createElement(h.Dialog,{open:!0,onClose:t,title:"Export SVG"},a.createElement(i.A,null,k?a.createElement(h.ErrorMessage,{error:k}):x?a.createElement(p,null):null,a.createElement(l.A,{helperText:"filename",value:y,onChange:e=>S(e.target.value)}),a.createElement("br",null),r.allThemes?a.createElement(l.A,{select:!0,label:"Theme",value:C,onChange:e=>w(e.target.value)},Object.entries(r.allThemes()).map((([e,t])=>a.createElement(s.A,{key:e,value:e},t.name||"(Unknown name)")))):null,n?a.createElement(c.A,{control:a.createElement(d.A,{checked:v,onChange:()=>b((e=>!e))}),label:"Rasterize canvas based tracks? File may be much larger if this is turned off"}):a.createElement(o.A,null,"Note: rasterizing layers not yet supported in this browser, so SVG size may be large")),a.createElement(m.A,null,a.createElement(u.A,{variant:"contained",color:"secondary",onClick:()=>t()},"Cancel"),a.createElement(u.A,{variant:"contained",color:"primary",type:"submit",onClick:async()=>{A(!0),E(void 0);try{await e.exportSvg({rasterizeLayers:v,filename:y,themeName:C}),t()}catch(e){console.error(e),E(e),A(!1)}}},"Submit")))}},83803:(e,t,r)=>{r.d(t,{A:()=>h});var a=r(7552),n=r(68446),o=r(99546),i=r(80208),l=r(48231);const s=(0,r(75785).n9)()({rulerLabel:{fontSize:"0.8rem",fontWeight:500,lineHeight:1.6,letterSpacing:"0.0075em"}});function c(e,t,r,a){e.flipped&&([r,a]=[a,r]);const n=e.bpToXY(r,t),o=e.bpToXY(a,t);return["M",...n,"A",t,t,"0",Math.abs(a-r)/e.bpPerRadian>Math.PI?"1":"0","1",...o].join(" ")}const d=(0,n.observer)((function({model:e,slice:t,region:r}){const n=(0,l.A)(),{radiusPx:i}=e,s=i+1,{endRadians:c,startRadians:d}=t,u=(0,o.polarToCartesian)(s,d),h=(0,o.polarToCartesian)(s,c),g=(c-d)*s,p=c-d>Math.PI?"1":"0",f=(c+d)/2,v=`[${Number(r.regions.length).toLocaleString()}]`;return a.createElement(a.Fragment,null,a.createElement(m,{text:v,view:e,maxWidthPx:g,radians:f,radiusPx:s,title:`${v} more regions`,color:n.palette.text.primary}),a.createElement("path",{d:["M",...u,"A",s,s,"0",p,"1",...h].join(" "),stroke:n.palette.text.secondary,strokeWidth:2,strokeDasharray:"2,2",fill:"none"}))})),m=(0,n.observer)((function({view:e,text:t,maxWidthPx:r,radians:n,radiusPx:i,title:l,color:c}){const{classes:d}=s(),m=(0,o.polarToCartesian)(i+5,n);return t?6.5*t.length<r?a.createElement("text",{x:0,y:0,className:d.rulerLabel,textAnchor:"middle",dominantBaseline:"baseline",transform:`translate(${m}) rotate(${(0,o.radToDeg)(n)+90})`,style:{fill:c}},t,a.createElement("title",null,l||t)):r>4?(0,o.radToDeg)(n+e.offsetRadians-Math.PI/2)>=180?a.createElement("text",{x:0,y:0,className:d.rulerLabel,textAnchor:"start",dominantBaseline:"middle",transform:`translate(${m}) rotate(${(0,o.radToDeg)(n)})`,style:{fill:c}},t,a.createElement("title",null,l||t)):a.createElement("text",{x:0,y:0,className:d.rulerLabel,textAnchor:"end",dominantBaseline:"middle",transform:`translate(${m}) rotate(${(0,o.radToDeg)(n)+180})`,style:{fill:c}},t,a.createElement("title",null,l||t)):null:null})),u=(0,n.observer)((function({model:e,slice:t,region:r}){const n=(0,l.A)(),{radiusPx:s}=e,{endRadians:d,startRadians:u}=t,h=(d+u)/2,g=(d-u)*s;let p;const f=(0,o.getSession)(e).assemblyManager.get(r.assemblyName);if(f&&(p=f.getRefNameColor(r.refName)),p)try{p=(0,i.makeContrasting)(p,n.palette.background.paper)}catch(e){p=n.palette.text.primary}else p=n.palette.text.primary;return a.createElement(a.Fragment,null,a.createElement(m,{text:r.refName,view:e,maxWidthPx:g,radians:h,radiusPx:s,color:p}),a.createElement("path",{d:c(t,s+1,r.start,r.end),stroke:p,strokeWidth:2,fill:"none"}))})),h=(0,n.observer)((function({model:e,slice:t}){return t.region.elided?a.createElement(d,{key:(0,o.assembleLocString)(t.region.regions[0]),model:e,region:t.region,slice:t}):a.createElement(u,{key:(0,o.assembleLocString)(t.region),region:t.region,model:e,slice:t})}))},45374:(e,t,r)=>{var a=r(92120);t.A=void 0;var n=a(r(33380)),o=r(69500);t.A=(0,n.default)((0,o.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1z"}),"Lock")},25746:(e,t,r)=>{var a=r(92120);t.A=void 0;var n=a(r(33380)),o=r(69500);t.A=(0,n.default)((0,o.jsx)("path",{d:"M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m0 12H6V10h12z"}),"LockOpen")},18355:(e,t,r)=>{var a=r(92120);t.A=void 0;var n=a(r(33380)),o=r(69500);t.A=(0,n.default)((0,o.jsx)("path",{d:"M7.11 8.53 5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47M6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47m1.01 5.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03zM13 4.07V1L8.45 5.55 13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93"}),"RotateLeft")},43962:(e,t,r)=>{var a=r(92120);t.A=void 0;var n=a(r(33380)),o=r(69500);t.A=(0,n.default)((0,o.jsx)("path",{d:"M15.55 5.55 11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10zM19.93 11c-.17-1.39-.72-2.73-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47zM13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03m3.89-2.42 1.42 1.41c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48"}),"RotateRight")},59705:(e,t,r)=>{r.d(t,{A:()=>C});var a=r(83673),n=r(6614),o=r(7552),i=r(93878),l=r(60827),s=r(64761),c=r(15622),d=r(31049),m=r(51148),u=r(72489),h=r(69500);const g=["className","color","disableShrink","size","style","thickness","value","variant"];let p,f,v,b,x=e=>e;const A=(0,s.i7)(p||(p=x`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),k=(0,s.i7)(f||(f=x`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),E=(0,m.Ay)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`color${(0,c.A)(r.color)}`]]}})((({ownerState:e,theme:t})=>(0,n.A)({display:"inline-block"},"determinate"===e.variant&&{transition:t.transitions.create("transform")},"inherit"!==e.color&&{color:(t.vars||t).palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,s.AH)(v||(v=x`
      animation: ${0} 1.4s linear infinite;
    `),A))),y=(0,m.Ay)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),S=(0,m.Ay)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.circle,t[`circle${(0,c.A)(r.variant)}`],r.disableShrink&&t.circleDisableShrink]}})((({ownerState:e,theme:t})=>(0,n.A)({stroke:"currentColor"},"determinate"===e.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,s.AH)(b||(b=x`
      animation: ${0} 1.4s ease-in-out infinite;
    `),k))),C=o.forwardRef((function(e,t){const r=(0,d.A)({props:e,name:"MuiCircularProgress"}),{className:o,color:s="primary",disableShrink:m=!1,size:p=40,style:f,thickness:v=3.6,value:b=0,variant:x="indeterminate"}=r,A=(0,a.A)(r,g),k=(0,n.A)({},r,{color:s,disableShrink:m,size:p,thickness:v,value:b,variant:x}),C=(e=>{const{classes:t,variant:r,color:a,disableShrink:n}=e,o={root:["root",r,`color${(0,c.A)(a)}`],svg:["svg"],circle:["circle",`circle${(0,c.A)(r)}`,n&&"circleDisableShrink"]};return(0,l.A)(o,u.b,t)})(k),w={},M={},R={};if("determinate"===x){const e=2*Math.PI*((44-v)/2);w.strokeDasharray=e.toFixed(3),R["aria-valuenow"]=Math.round(b),w.strokeDashoffset=`${((100-b)/100*e).toFixed(3)}px`,M.transform="rotate(-90deg)"}return(0,h.jsx)(E,(0,n.A)({className:(0,i.A)(C.root,o),style:(0,n.A)({width:p,height:p},M,f),ownerState:k,ref:t,role:"progressbar"},R,A,{children:(0,h.jsx)(y,{className:C.svg,ownerState:k,viewBox:"22 22 44 44",children:(0,h.jsx)(S,{className:C.circle,style:w,ownerState:k,cx:44,cy:44,r:(44-v)/2,fill:"none",strokeWidth:v})})}))}))},72489:(e,t,r)=>{r.d(t,{A:()=>i,b:()=>o});var a=r(55549),n=r(9577);function o(e){return(0,n.Ay)("MuiCircularProgress",e)}const i=(0,a.A)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"])},63896:(e,t,r)=>{r.d(t,{A:()=>E});var a=r(83673),n=r(6614),o=r(7552),i=r(93878),l=r(81119),s=r(9577),c=r(60827),d=r(97269),m=r(3581),u=r(23955),h=r(69500);const g=["className","component","disableGutters","fixed","maxWidth","classes"],p=(0,u.A)(),f=(0,m.A)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`maxWidth${(0,l.A)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),v=e=>(0,d.A)({props:e,name:"MuiContainer",defaultTheme:p});var b=r(15622),x=r(51148),A=r(31049);const k=function(e={}){const{createStyledComponent:t=f,useThemeProps:r=v,componentName:d="MuiContainer"}=e,m=t((({theme:e,ownerState:t})=>(0,n.A)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}})),(({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce(((t,r)=>{const a=r,n=e.breakpoints.values[a];return 0!==n&&(t[e.breakpoints.up(a)]={maxWidth:`${n}${e.breakpoints.unit}`}),t}),{})),(({theme:e,ownerState:t})=>(0,n.A)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}))),u=o.forwardRef((function(e,t){const o=r(e),{className:u,component:p="div",disableGutters:f=!1,fixed:v=!1,maxWidth:b="lg"}=o,x=(0,a.A)(o,g),A=(0,n.A)({},o,{component:p,disableGutters:f,fixed:v,maxWidth:b}),k=((e,t)=>{const{classes:r,fixed:a,disableGutters:n,maxWidth:o}=e,i={root:["root",o&&`maxWidth${(0,l.A)(String(o))}`,a&&"fixed",n&&"disableGutters"]};return(0,c.A)(i,(e=>(0,s.Ay)(t,e)),r)})(A,d);return(0,h.jsx)(m,(0,n.A)({as:p,ownerState:A,className:(0,i.A)(k.root,u),ref:t},x))}));return u}({createStyledComponent:(0,x.Ay)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`maxWidth${(0,b.A)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,A.A)({props:e,name:"MuiContainer"})}),E=k}}]);
//# sourceMappingURL=4539.487fec34.chunk.js.map