"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[66],{10066:function(e,n,t){t.r(n);var r=t(96234),a=t(30969),s=t(92256),c=t(48651),o=t(66581),l=t(74466),i=t(17984),u=t(70054),h=t(35436),d=t(20098),g=t(78742),p=t(21268),x=t(52907),Z=t(69852),j=t(40909),f=t(2374),k=t(90550),C=t(81073),b=t(88581),m=t(37574),S=(0,f.ZL)()((function(e){return{closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]},dialogContent:{width:"40em"}}}));n.default=(0,k.observer)((function(e){var n,t=e.model,f=e.handleClose,k=S().classes,v=(0,a.useState)(""),w=(0,r.Z)(v,2),y=w[0],q=w[1],T=(0,a.useState)(!0),_=(0,r.Z)(T,2),A=_[0],N=_[1],B=(0,a.useState)(!0),F=(0,r.Z)(B,2),I=F[0],R=F[1],z=(0,a.useState)(!0),D=(0,r.Z)(z,2),E=D[0],L=D[1];try{new RegExp(y)}catch(M){n=M}return(0,m.jsxs)(s.Z,{maxWidth:"xl",open:!0,onClose:f,children:[(0,m.jsxs)(c.Z,{children:["Sequence search",f?(0,m.jsx)(o.Z,{className:k.closeButton,onClick:function(){return f()},size:"large",children:(0,m.jsx)(b.Z,{})}):null]}),(0,m.jsx)(l.Z,{}),(0,m.jsxs)(i.Z,{className:k.dialogContent,children:[(0,m.jsx)(u.Z,{children:"Supply a sequence to search for. A track will be created with the resulting matches once submitted. You can also supply regex style expressions e.g. AACT(C|T)."}),(0,m.jsx)(h.Z,{value:y,onChange:function(e){return q(e.target.value)},helperText:"Sequence search pattern"}),(0,m.jsxs)(d.Z,{children:[(0,m.jsx)(g.Z,{control:(0,m.jsx)(p.Z,{checked:A,onChange:function(e){return N(e.target.checked)}}),label:"Search forward strand"}),(0,m.jsx)(g.Z,{control:(0,m.jsx)(p.Z,{checked:I,onChange:function(e){return R(e.target.checked)}}),label:"Search reverse strand"}),(0,m.jsx)(g.Z,{control:(0,m.jsx)(p.Z,{checked:E,onChange:function(e){return L(e.target.checked)}}),label:"Case insensitive"})]}),n?(0,m.jsx)(u.Z,{color:"error",children:"".concat(n)}):null]}),(0,m.jsxs)(x.Z,{children:[(0,m.jsx)(Z.Z,{onClick:function(){if(y){var e,n="sequence_search_".concat(+Date.now()),r=(0,C.getSession)(t),a=r.assemblyManager,s=t.assemblyNames[0];r.addTrackConf({trackId:n,name:"Sequence search ".concat(y),assemblyNames:[s],type:"FeatureTrack",adapter:{type:"SequenceSearchAdapter",search:y,searchForward:A,searchReverse:I,caseInsensitive:E,sequenceAdapter:(0,j.getSnapshot)(null===(e=a.get(s))||void 0===e?void 0:e.configuration.sequence.adapter)}}),t.toggleTrack(n)}f()},variant:"contained",color:"primary",children:"Submit"}),(0,m.jsx)(Z.Z,{onClick:function(){return f()},variant:"contained",color:"secondary",children:"Close"})]})]})}))}}]);
//# sourceMappingURL=66.bc297775.chunk.js.map