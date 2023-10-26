"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[3844],{63844:function(e,r,t){t.r(r);var n=t(32723),a=t(96234),s=t(34795),o=t(41867),c=t(3762),i=t(90872),u=t(55022),l=t(35421),p=t(47409),d=t(81108),f=t(89170),h=t(51590),x=t(77573),m=t(3725),Z=t(49133),v=t(27768),k=t(23801),w=t(59062),b=t(78155),j=t(47192),g=t(93226),y=t(95460),S=t(42844),I=t(42408),C=t(97990),N=t(80838),A=(0,j.ZL)()((function(e){var r;return{flexItem:{margin:5},expandIcon:{color:(null===(r=e.palette.tertiary)||void 0===r?void 0:r.contrastText)||"#fff"}}}));function D(e,r){return L.apply(this,arguments)}function L(){return(L=(0,s.Z)((0,n.Z)().mark((function e(r,t){var a,s,o,c,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://share.jbrowse.org/api/v1/",a=new URL(r),s=a.searchParams.get("bookmarks"),o=a.searchParams.get("password"),e.next=6,(0,C.h)("".concat(null!==t&&void 0!==t?t:"https://share.jbrowse.org/api/v1/","load"),s||"",o||"");case 6:return c=e.sent,e.t0=JSON,e.next=10,(0,I.cD)(c);case 10:return e.t1=e.sent,i=e.t0.parse.call(e.t0,e.t1),e.abrupt("return",i.sharedBookmarks);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e,r){return P.apply(this,arguments)}function P(){return(P=(0,s.Z)((0,n.Z)().mark((function e(r,t){var s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,w.openLocation)(r).readFile("utf8");case 2:return s=e.sent,e.abrupt("return",s.split(/\n|\r\n|\r/).filter((function(e){return!!e.trim()})).filter((function(e){return!e.startsWith("#")&&!e.startsWith("track")&&!e.startsWith("browser")})).map((function(e){var r=e.split("\t"),n=(0,a.Z)(r,5),s=n[0],o=n[1],c=n[2],i=n[3],u=n[4];return{assemblyName:null!==u&&void 0!==u?u:t,refName:s,start:+o,end:+c,label:"."===i?void 0:i}})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var B=(0,c.observer)((function(e){var r=e.onClose,t=e.model,c=A().classes,w=(0,o.useState)(),j=(0,a.Z)(w,2),I=j[0],C=j[1],L=(0,o.useState)(),P=(0,a.Z)(L,2),B=P[0],T=P[1],E=(0,o.useState)(""),U=(0,a.Z)(E,2),F=U[0],J=U[1],M=(0,i.getSession)(t),O=M.assemblyNames,W=(0,o.useState)(O[0]),_=(0,a.Z)(W,2),V=_[0],Y=_[1],q=(0,o.useState)("shareLinkAccordion"),z=(0,a.Z)(q,2),G=z[0],H=z[1];return(0,N.jsxs)(l.Dialog,{open:!0,onClose:r,maxWidth:"xl",title:"Import bookmarks",children:[(0,N.jsxs)(p.Z,{children:[(0,N.jsxs)(d.Z,{expanded:"shareLinkAccordion"===G,onChange:function(){return H("shareLinkAccordion")},children:[(0,N.jsx)(f.Z,{expandIcon:(0,N.jsx)(y.Z,{className:c.expandIcon}),children:(0,N.jsxs)(h.Z,{style:{display:"flex",alignItems:"center",gap:"5px"},children:["Import from share link"," ",(0,N.jsx)(x.Z,{title:"The appropriate share link for sharing bookmarks is one generated via the 'Share' button in the 'Bookmarked regions' drawer. Paste it below to import shared bookmarks.",children:(0,N.jsx)(S.Z,{})})]})}),(0,N.jsx)(m.Z,{children:(0,N.jsx)(Z.Z,{label:"Enter URL",variant:"outlined",style:{width:"100%"},value:F,onChange:function(e){return J(e.target.value)}})})]}),(0,N.jsxs)(d.Z,{expanded:"fileAccordion"===G,onChange:function(){return H("fileAccordion")},children:[(0,N.jsx)(f.Z,{expandIcon:(0,N.jsx)(y.Z,{className:c.expandIcon}),children:(0,N.jsx)(h.Z,{children:"Import from file"})}),(0,N.jsxs)(m.Z,{children:[(0,N.jsx)(l.FileSelector,{location:I,setLocation:C,name:"File",description:"Choose a BED or TSV format file to import."}),(0,N.jsx)(b.Z,{onChange:function(e){return Y(e)},helperText:"Select the assembly your bookmarks belong to (BED or TSV without assembly column).",session:M,selected:V})]})]}),B?(0,N.jsx)(h.Z,{color:"error",variant:"h6",children:"".concat(B)}):null]}),(0,N.jsxs)(v.Z,{children:[(0,N.jsx)(k.Z,{variant:"contained",color:"secondary",onClick:r,children:"Cancel"}),(0,N.jsx)(k.Z,{className:c.flexItem,"data-testid":"dialogImport",variant:"contained",color:"primary",disabled:!I&&!F,startIcon:(0,N.jsx)(g.Z,{}),onClick:(0,s.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!I){e.next=9;break}return e.t0=t,e.next=5,R(I,V);case 5:e.t1=e.sent,e.t0.importBookmarks.call(e.t0,e.t1),e.next=15;break;case 9:if(!F||!(0,u.gx)(M)){e.next=15;break}return e.t2=t,e.next=13,D(F,M.shareURL);case 13:e.t3=e.sent,e.t2.importBookmarks.call(e.t2,e.t3);case 15:r(),e.next=22;break;case 18:e.prev=18,e.t4=e.catch(0),console.error(e.t4),T(e.t4);case 22:case"end":return e.stop()}}),e,null,[[0,18]])}))),children:"Import"})]})]})}));r.default=B},97990:function(e,r,t){t.d(r,{h:function(){return d},p:function(){return l}});var n=t(32723),a=t(34795),s=t(68079),o=t(42408);var c=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r,a){var s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(9466),t.e(5607)]).then(t.t.bind(t,45607,23));case 2:return s=e.sent,e.abrupt("return",s.encrypt(r,a).toString());case 4:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r,a){var s,o,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.e(9466),t.e(5607)]).then(t.t.bind(t,45607,23));case 2:return s=e.sent,e.next=5,t.e(7380).then(t.t.bind(t,87380,23));case 5:return o=e.sent,c=s.decrypt(r,a),e.abrupt("return",c.toString(o));case 8:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}();function u(e){try{return JSON.parse(e).message}catch(r){return e}}function l(e,r,t){return p.apply(this,arguments)}function p(){return(p=(0,a.Z)((0,n.Z)().mark((function e(r,t,a){var i,l,p,d,f,h,x;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.JY)(JSON.stringify(r));case 2:return i=e.sent,n=5,l=window.btoa((0,s.Z)(window.crypto.getRandomValues(new Uint8Array(2*n))).map((function(e){return String.fromCharCode(e)})).join("")).replaceAll(/[+/]/g,"").slice(0,n),e.next=6,c(i,l);case 6:return p=e.sent,(d=new FormData).append("session",p),d.append("dateShared","".concat(Date.now())),d.append("referer",a),e.next=13,fetch("".concat(t,"share"),{method:"POST",mode:"cors",body:d});case 13:if((f=e.sent).ok){e.next=19;break}return e.next=17,f.text();case 17:throw h=e.sent,new Error(u(h));case 19:return e.next=21,f.json();case 21:return x=e.sent,e.abrupt("return",{json:x,encryptedSession:p,password:l});case 23:case"end":return e.stop()}var n}),e)})))).apply(this,arguments)}function d(e,r,t,n){return f.apply(this,arguments)}function f(){return(f=(0,a.Z)((0,n.Z)().mark((function e(r,t,a,s){var o,c,l,p,d;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.split("share-")[1],c="".concat(r,"?sessionId=").concat(encodeURIComponent(o)),e.next=4,fetch(c,{signal:s});case 4:if((l=e.sent).ok){e.next=10;break}return e.next=8,l.text();case 8:throw p=e.sent,new Error(u(p));case 10:return e.next=12,l.json();case 12:return d=e.sent,e.abrupt("return",i(d.session,a));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},3725:function(e,r,t){var n=t(7896),a=t(31461),s=t(41867),o=t(66184),c=t(92705),i=t(75693),u=t(90293),l=t(31498),p=t(80838),d=["className"],f=(0,i.ZP)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:function(e,r){return r.root}})((function(e){return{padding:e.theme.spacing(1,2,2)}})),h=s.forwardRef((function(e,r){var t=(0,u.Z)({props:e,name:"MuiAccordionDetails"}),s=t.className,i=(0,a.Z)(t,d),h=t,x=function(e){var r=e.classes;return(0,c.Z)({root:["root"]},l.s,r)}(h);return(0,p.jsx)(f,(0,n.Z)({className:(0,o.Z)(x.root,s),ref:r,ownerState:h},i))}));r.Z=h},31498:function(e,r,t){t.d(r,{s:function(){return s}});var n=t(70101),a=t(88498);function s(e){return(0,a.Z)("MuiAccordionDetails",e)}var o=(0,n.Z)("MuiAccordionDetails",["root"]);r.Z=o}}]);
//# sourceMappingURL=3844.d54fc174.chunk.js.map