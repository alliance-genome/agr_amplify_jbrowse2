(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[9342],{59894:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var n=r(96234),a=r(33028),s=r(32723),u=r(34795),i=r(9249),c=r(87371),o=r(45754),f=r(13820),l=r(29598),d=r(33528),h=r(26131),p=r(16362),v=r(14956),g=r(42098),w=r(64526);function Z(e){return 31===e[0]&&139===e[1]&&8===e[2]}var b=function(e){(0,o.Z)(r,e);var t=(0,f.Z)(r);function r(){var e;(0,i.Z)(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).gffFeatures=void 0,e}return(0,c.Z)(r,[{key:"loadDataP",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(){var t,r,n,a,u,i,c,o,f,l,h=this;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.pluginManager,e.next=3,(0,d.openLocation)(this.getConf("gffLocation"),t).readFile();case 3:if(!Z(r=e.sent)){e.next=10;break}return e.next=7,(0,g.unzip)(r);case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=r;case 11:if(!((n=e.t0).length>536870888)){e.next=14;break}throw new Error("Data exceeds maximum string length (512MB)");case 14:for(a=new TextDecoder("utf8",{fatal:!0}).decode(n),u=a.split(/\n|\r\n|\r/),i=[],c=0;c<u.length&&u[c].startsWith("#");c++)i.push(u[c]);return o=i.join("\n"),f=w.Z.parseStringSync(a,{parseFeatures:!0,parseComments:!1,parseDirectives:!1,parseSequences:!1,disableDerivesFromReferences:!0}),l=f.flat().map((function(e,t){return new v.Z({data:h.featureData(e),id:"".concat(h.id,"-offset-").concat(t)})})).reduce((function(e,t){var r=t.get("refName");return e[r]||(e[r]=new p.ZP),e[r].insert([t.get("start"),t.get("end")],t),e}),{}),e.abrupt("return",{header:o,intervalTree:l});case 22:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loadData",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(){var t=this;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.gffFeatures||(this.gffFeatures=this.loadDataP().catch((function(e){throw t.gffFeatures=void 0,e}))),e.abrupt("return",this.gffFeatures);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getRefNames",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(){var t,r,n=arguments;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.length>0&&void 0!==n[0]?n[0]:{},e.next=3,this.loadData();case 3:return t=e.sent,r=t.intervalTree,e.abrupt("return",Object.keys(r));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getHeader",value:function(){var e=(0,u.Z)((0,s.Z)().mark((function e(){var t,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadData();case 2:return t=e.sent,r=t.header,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getFeatures",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,h.ObservableCreate)(function(){var r=(0,u.Z)((0,s.Z)().mark((function r(n){var a,u,i,c,o,f;return(0,s.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,u=e.start,i=e.end,c=e.refName,r.next=4,t.loadData();case 4:o=r.sent,f=o.intervalTree,null===(a=f[c])||void 0===a||a.search([u,i]).forEach((function(e){return n.next(e)})),n.complete(),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(0),n.error(r.t0);case 13:case"end":return r.stop()}}),r,null,[[0,10]])})));return function(e){return r.apply(this,arguments)}}(),r.signal)}},{key:"featureData",value:function(e){var t=this,r=(0,a.Z)({},e);r.start-=1,"+"===e.strand?r.strand=1:"-"===e.strand?r.strand=-1:"."===e.strand?r.strand=0:r.strand=void 0,r.phase=Number(e.phase),r.refName=e.seq_id,null===e.score&&delete r.score,null===e.phase&&delete r.score;var s=["start","end","seq_id","score","type","source","phase","strand"],u=e.attributes||{};return Object.keys(u).forEach((function(e){var t=e.toLowerCase();if(s.includes(t)&&(t+="2"),null!==u[e]){var a=u[e];if(Array.isArray(a)&&1===a.length){var i=a;a=(0,n.Z)(i,1)[0]}r[t]=a}})),r.refName=r.seq_id,e.child_features&&e.child_features.length&&(r.subfeatures=e.child_features.map((function(e){return e.map((function(e){return t.featureData(e)}))})).flat()),delete r.child_features,delete r.data,delete r.attributes,delete r.seq_id,r}},{key:"freeResources",value:function(){}}]),r}(l.BaseFeatureDataAdapter)},57267:function(){},48732:function(){}}]);
//# sourceMappingURL=9342.17b74eca.chunk.js.map