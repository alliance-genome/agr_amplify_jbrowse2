"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[7040],{17040:function(t,e,r){r.r(e),r.d(e,{default:function(){return h}});var n=r(32723),u=r(96234),s=r(34795),a=r(9249),i=r(87371),c=r(45754),o=r(13820),p=r(20783),f=r(33528),h=function(t){(0,c.Z)(r,t);var e=(0,o.Z)(r);function r(){var t;(0,a.Z)(this,r);for(var n=arguments.length,u=new Array(n),s=0;s<n;s++)u[s]=arguments[s];return(t=e.call.apply(e,[this].concat(u))).setupP=void 0,t}return(0,i.Z)(r,[{key:"setupPre",value:function(){var t=(0,s.Z)((0,n.Z)().mark((function t(){var e,r,s;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.pluginManager,r=(0,f.openLocation)(this.getConf("chromSizesLocation"),e),t.next=4,r.readFile("utf8");case 4:return s=t.sent,t.abrupt("return",Object.fromEntries(s.split(/\n|\r\n|\r/).map((function(t){return t.trim()})).filter((function(t){return!!t})).map((function(t){var e=t.split("\t"),r=(0,u.Z)(e,2);return[r[0],+r[1]]}))));case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"setup",value:function(){var t=(0,s.Z)((0,n.Z)().mark((function t(){var e=this;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.setupP||(this.setupP=this.setupPre().catch((function(t){throw e.setupP=void 0,t}))),t.abrupt("return",this.setupP);case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getRegions",value:function(){var t=(0,s.Z)((0,n.Z)().mark((function t(){var e;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setup();case 2:return e=t.sent,t.abrupt("return",Object.keys(e).map((function(t){return{refName:t,start:0,end:e[t]}})));case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getHeader",value:function(){return{}}},{key:"freeResources",value:function(){}}]),r}(p.BaseAdapter)}}]);
//# sourceMappingURL=7040.f7ceda32.chunk.js.map