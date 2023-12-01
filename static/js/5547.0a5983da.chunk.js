"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[5547],{51782:(t,e,a)=>{a.d(e,{Z:()=>S});var i=a(55559),n=a(30984),r=a(66204),o=a(56317),s=a(71580),h=a(58029),l=a(29136),d=a(73330),u=a(61125),c=a(57369),m=a(65816),p=a(43188);const g=["animation","className","component","height","style","variant","width"];let b,w,v,f,k=t=>t;const C=(0,s.F4)(b||(b=k`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),Z=(0,s.F4)(w||(w=k`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),y=(0,u.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant],!1!==a.animation&&e[a.animation],a.hasChildren&&e.withChildren,a.hasChildren&&!a.width&&e.fitContent,a.hasChildren&&!a.height&&e.heightAuto]}})((({theme:t,ownerState:e})=>{const a=(0,l.Wy)(t.shape.borderRadius)||"px",i=(0,l.YL)(t.shape.borderRadius);return(0,n.Z)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,d.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===e.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${i}${a}/${Math.round(i/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===e.variant&&{borderRadius:"50%"},"rounded"===e.variant&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})}),(({ownerState:t})=>"pulse"===t.animation&&(0,s.iv)(v||(v=k`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),C)),(({ownerState:t,theme:e})=>"wave"===t.animation&&(0,s.iv)(f||(f=k`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),Z,(e.vars||e).palette.action.hover))),S=r.forwardRef((function(t,e){const a=(0,c.Z)({props:t,name:"MuiSkeleton"}),{animation:r="pulse",className:s,component:l="span",height:d,style:u,variant:b="text",width:w}=a,v=(0,i.Z)(a,g),f=(0,n.Z)({},a,{animation:r,component:l,variant:b,hasChildren:Boolean(v.children)}),k=(t=>{const{classes:e,variant:a,animation:i,hasChildren:n,width:r,height:o}=t,s={root:["root",a,i,n&&"withChildren",n&&!r&&"fitContent",n&&!o&&"heightAuto"]};return(0,h.Z)(s,m.B,e)})(f);return(0,p.jsx)(y,(0,n.Z)({as:l,ref:e,className:(0,o.Z)(k.root,s),ownerState:f},v,{style:(0,n.Z)({width:w,height:d},u)}))}))},65547:(t,e,a)=>{a.r(e),a.d(e,{default:()=>i.Z,getSkeletonUtilityClass:()=>n.B,skeletonClasses:()=>n.Z});var i=a(51782),n=a(65816)},65816:(t,e,a)=>{a.d(e,{B:()=>r,Z:()=>o});var i=a(58109),n=a(95201);function r(t){return(0,n.Z)("MuiSkeleton",t)}const o=(0,i.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"])}}]);
//# sourceMappingURL=5547.0a5983da.chunk.js.map