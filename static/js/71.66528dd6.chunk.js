(this["webpackJsonp@jbrowse/web"]=this["webpackJsonp@jbrowse/web"]||[]).push([[71],{959:function(e,t,a){"use strict";a.r(t);var r=a(29),n=a(1),l=a.n(n),c=a(84),o=a(79),i=a(51),s=a(85),m=a(108),d=a(1642),u=a(1638),v=a(133),E=a(459),p=a.n(E),b=a(460),g=a.n(b),f=a(349),h=a.n(f),y=Object(i.a)((function(){return{headerBar:{gridArea:"1/1/auto/span 2",display:"flex"},spacer:{flexGrow:1},bp:{display:"flex",alignItems:"center",marginLeft:10},searchContainer:{marginLeft:5},searchBox:{display:"flex"}}})),w=Object(c.observer)((function(e){var t=e.model;return l.a.createElement(d.a,{onClick:t.toggleLinkViews,title:"Toggle linked scrolls and behavior across views"},t.linkViews?l.a.createElement(g.a,{color:"secondary"}):l.a.createElement(p.a,{color:"secondary"}))})),j=Object(c.observer)((function(e){var t=e.model;return l.a.createElement(d.a,{onClick:t.squareView,title:"Square view (make both the same zoom level)"},l.a.createElement(h.a,{color:"secondary"}))})),k=Object(c.observer)((function(e){var t=e.model,a=e.ExtraButtons,r=y(),n=t.views.some((function(e){return!e.hideHeader}));return l.a.createElement("div",{className:r.headerBar},l.a.createElement(w,{model:t}),l.a.createElement(j,{model:t}),a,n?null:t.views.map((function(e){return l.a.createElement("div",{key:e.id,className:r.searchBox},l.a.createElement("div",{className:r.searchContainer},l.a.createElement(v.c,{model:e,showHelp:!1})),l.a.createElement("div",{className:r.bp},l.a.createElement(u.a,{variant:"body2",color:"textSecondary",className:r.bp},Math.round(e.coarseTotalBp).toLocaleString("en-US")," bp")))})),l.a.createElement("div",{className:r.spacer}))})),O=Object(i.a)((function(){return{container:{display:"grid"},overlay:{zIndex:100,gridArea:"1/1"},content:{gridArea:"1/1",position:"relative"},grid:{display:"grid"},relative:{position:"relative"}}})),x=Object(c.observer)((function(e){var t=e.model,a=O();return l.a.createElement(l.a.Fragment,null,t.tracks.map((function(e){var n=Object(r.a)(e.displays,1)[0],c=n.RenderingComponent,i=Object(o.getConf)(e,"trackId");return c?l.a.createElement("div",{className:a.overlay,key:i,style:{height:t.middleComparativeHeight,overflow:"hidden"}},l.a.createElement(c,{model:n})):null})))})),C=Object(c.observer)((function(e){var t=e.model,a=e.ExtraButtons,r=O(),n=t.views,c=Object(s.getEnv)(t).pluginManager.getViewType(n[0].type).ReactComponent;return l.a.createElement("div",null,l.a.createElement(k,{ExtraButtons:a,model:t}),l.a.createElement("div",{className:r.container},l.a.createElement(c,{model:n[0]}),l.a.createElement("div",{className:r.grid},l.a.createElement(x,{model:t})),l.a.createElement(m.ResizeHandle,{onDrag:function(e){return t.setMiddleComparativeHeight(t.middleComparativeHeight+e)},style:{height:4,background:"#ccc"}}),l.a.createElement(c,{model:n[1]})))})),N=Object(c.observer)((function(e){var t=e.model,a=e.ExtraButtons,r=O(),n=t.views,c=Object(s.getEnv)(t).pluginManager;return l.a.createElement("div",null,l.a.createElement(k,{model:t,ExtraButtons:a}),l.a.createElement("div",{className:r.container},l.a.createElement("div",{className:r.content},l.a.createElement("div",{className:r.relative},n.map((function(e){var t=c.getViewType(e.type).ReactComponent;return l.a.createElement(t,{key:e.id,model:e})}))),l.a.createElement(x,{model:t}))))})),B=Object(c.observer)((function(e){return e.model.tracks.some((function(e){return e.displays.some((function(e){return Object(o.getConf)(e,"middle")}))}))?l.a.createElement(C,e):l.a.createElement(N,e)}));t.default=B}}]);
//# sourceMappingURL=71.66528dd6.chunk.js.map