"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[9531],{39531:(e,t,o)=>{o.r(t),o.d(t,{default:()=>A});var n=o(7552),a=o(48735),r=o(29499),s=o(99123),l=o(61723),c=o(48171),i=o(56089),d=o(33371),u=o(33248),h=o(29494);function m({onClose:e,open:t}){return n.createElement(a.Dialog,{onClose:()=>e(),open:t,title:"Info about session URLs"},n.createElement(r.A,null,n.createElement(s.A,null,"Because everything about the JBrowse session is encoded in the URL (e.g. state of the tracks, views, features selected, etc.) the sessions can get very long. Therefore, we created a URL shortener, both as a convenience and because long URLs can break some programs. Note that both the long and short URLs encode the same data, but due to long URLs causing problems with some programs, we recommend sharing short URLs."),n.createElement(s.A,null,'We generate the short URLs in a secure manner which involves encrypting the session on the client side with a random password string and uploading them to a central database. Then the random password is added to the URL but is not uploaded to the central database, making these short URLs effectively "end-to-end encrypted"'),n.createElement(s.A,null,"Only users with a share link can read the session.")))}const p="jbrowse-shareURL";function A(e){const{onClose:t,open:o,currentSetting:A}=e,[g,v]=(0,n.useState)(A),[f,b]=(0,n.useState)(!1);return n.createElement(n.Fragment,null,n.createElement(a.Dialog,{onClose:()=>{localStorage.setItem(p,g),t(g)},open:o,title:"Configure session sharing"},n.createElement(r.A,null,n.createElement(s.A,null,"Select between generating long or short URLs for the session sharing",n.createElement(l.A,{onClick:()=>b(!0)},n.createElement(h.A,null))),n.createElement(c.A,{component:"fieldset"},n.createElement(i.A,{value:g,onChange:e=>v(e.target.value)},n.createElement(d.A,{value:"short",control:n.createElement(u.A,null),label:"Short URL"}),n.createElement(d.A,{value:"long",control:n.createElement(u.A,null),label:"Long URL"}))))),n.createElement(m,{open:f,onClose:()=>b(!1)}))}},29494:(e,t,o)=>{var n=o(92120);t.A=void 0;var a=n(o(33380)),r=o(69500);t.A=(0,a.default)((0,r.jsx)("path",{d:"M11 18h2v-2h-2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4"}),"HelpOutline")},33248:(e,t,o)=>{o.d(t,{A:()=>j});var n=o(83673),a=o(6614),r=o(7552),s=o(93878),l=o(60827),c=o(18283),i=o(15110),d=o(31049),u=o(74893),h=o(69500);const m=(0,u.A)((0,h.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),p=(0,u.A)((0,h.jsx)("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked");var A=o(51148);const g=(0,A.Ay)("span",{shouldForwardProp:A.ep})({position:"relative",display:"flex"}),v=(0,A.Ay)(m)({transform:"scale(1)"}),f=(0,A.Ay)(p)((({theme:e,ownerState:t})=>(0,a.A)({left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},t.checked&&{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}))),b=function(e){const{checked:t=!1,classes:o={},fontSize:n}=e,r=(0,a.A)({},e,{checked:t});return(0,h.jsxs)(g,{className:o.root,ownerState:r,children:[(0,h.jsx)(v,{fontSize:n,className:o.background,ownerState:r}),(0,h.jsx)(f,{fontSize:n,className:o.dot,ownerState:r})]})};var C=o(15622),w=o(4402),S=o(39006),k=o(38127);const R=["checked","checkedIcon","color","icon","name","onChange","size","className"],y=(0,A.Ay)(i.A,{shouldForwardProp:e=>(0,A.ep)(e)||"classes"===e,name:"MuiRadio",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,"medium"!==o.size&&t[`size${(0,C.A)(o.size)}`],t[`color${(0,C.A)(o.color)}`]]}})((({theme:e,ownerState:t})=>(0,a.A)({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${"default"===t.color?e.vars.palette.action.activeChannel:e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.X4)("default"===t.color?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&{[`&.${k.A.checked}`]:{color:(e.vars||e).palette[t.color].main}},{[`&.${k.A.disabled}`]:{color:(e.vars||e).palette.action.disabled}}))),E=(0,h.jsx)(b,{checked:!0}),z=(0,h.jsx)(b,{}),j=r.forwardRef((function(e,t){var o,c;const i=(0,d.A)({props:e,name:"MuiRadio"}),{checked:u,checkedIcon:m=E,color:p="primary",icon:A=z,name:g,onChange:v,size:f="medium",className:b}=i,j=(0,n.A)(i,R),x=(0,a.A)({},i,{color:p,size:f}),L=(e=>{const{classes:t,color:o,size:n}=e,r={root:["root",`color${(0,C.A)(o)}`,"medium"!==n&&`size${(0,C.A)(n)}`]};return(0,a.A)({},t,(0,l.A)(r,k.q,t))})(x),U=(0,S.A)();let M=u;const $=(0,w.A)(v,U&&U.onChange);let I=g;var N,O;return U&&(void 0===M&&(N=U.value,M="object"==typeof(O=i.value)&&null!==O?N===O:String(N)===String(O)),void 0===I&&(I=U.name)),(0,h.jsx)(y,(0,a.A)({type:"radio",icon:r.cloneElement(A,{fontSize:null!=(o=z.props.fontSize)?o:f}),checkedIcon:r.cloneElement(m,{fontSize:null!=(c=E.props.fontSize)?c:f}),ownerState:x,classes:L,name:I,checked:M,onChange:$,ref:t,className:(0,s.A)(L.root,b)},j))}))},38127:(e,t,o)=>{o.d(t,{A:()=>s,q:()=>r});var n=o(55549),a=o(9577);function r(e){return(0,a.Ay)("MuiRadio",e)}const s=(0,n.A)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"])},56089:(e,t,o)=>{o.d(t,{A:()=>m});var n=o(6614),a=o(83673),r=o(7552),s=o(83867),l=o(51584),c=o(77259),i=o(76258),d=o(89456),u=o(69500);const h=["actions","children","defaultValue","name","onChange","value"],m=r.forwardRef((function(e,t){const{actions:o,children:m,defaultValue:p,name:A,onChange:g,value:v}=e,f=(0,a.A)(e,h),b=r.useRef(null),[C,w]=(0,c.A)({controlled:v,default:p,name:"RadioGroup"});r.useImperativeHandle(o,(()=>({focus:()=>{let e=b.current.querySelector("input:not(:disabled):checked");e||(e=b.current.querySelector("input:not(:disabled)")),e&&e.focus()}})),[]);const S=(0,l.A)(t,b),k=(0,d.A)(A),R=r.useMemo((()=>({name:k,onChange(e){w(e.target.value),g&&g(e,e.target.value)},value:C})),[k,g,w,C]);return(0,u.jsx)(i.A.Provider,{value:R,children:(0,u.jsx)(s.A,(0,n.A)({role:"radiogroup",ref:S},f,{children:m}))})}))},76258:(e,t,o)=>{o.d(t,{A:()=>n});const n=o(7552).createContext(void 0)},39006:(e,t,o)=>{o.d(t,{A:()=>r});var n=o(7552),a=o(76258);function r(){return n.useContext(a.A)}}}]);
//# sourceMappingURL=9531.4cb99f35.chunk.js.map