(this["webpackJsonp@jbrowse/web"]=this["webpackJsonp@jbrowse/web"]||[]).push([[10],{296:function(e,n,t){"use strict";t.r(n),t.d(n,"bufferToString",(function(){return s})),t.d(n,"parseCsvBuffer",(function(){return d})),t.d(n,"parseTsvBuffer",(function(){return b}));var r=t(86),a=t(29),u=t(82),i=t(80),c=t.n(i),o=t(83);function s(e){return new TextDecoder("utf-8",{fatal:!0}).decode(e)}function m(e){return f.apply(this,arguments)}function f(){return f=Object(u.a)(c.a.mark((function e(n){var a,u,i=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.length>1&&void 0!==i[1]?i[1]:{},e.next=3,t.e(48).then(t.t.bind(null,487,7)).then((function(e){return e.default}));case 3:return u=e.sent,e.abrupt("return",u(Object(r.a)({noheader:!0,output:"csv"},a)).fromString(s(n)));case 5:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function l(e,n,t){var r,a=e.rows[0].cells[n].text||"",u="Text";try{r=Object(o.parseLocString)(a,t)}catch(i){}return r&&r.refName&&"number"===typeof r.start?u="LocString":/^\d+(\.\d+)?$/.test(a)&&(u="Number"),u}function p(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{hasColumnNameLine:!1,columnNameLineNumber:1,isValidRefName:function(){return!1}},t=0,r={isLoaded:!0,rows:e.map((function(e,r){var a=r+(n.hasColumnNameLine?0:1);return e.length>t&&(t=e.length),{id:String(a),cells:e.map((function(e,n){return{columnNumber:n,text:e}}))}}))},u={};if(n.hasColumnNameLine&&void 0!==n.columnNameLineNumber){var i=r.rows.splice(n.columnNameLineNumber-1,1),c=Object(a.a)(i,1),s=c[0];s&&s.cells.forEach((function(e,n){u[n]=e.text||""}))}for(var m=[],f=[],p=function(e){f.push(e);var t=l(r,e,n.isValidRefName);"LocString"===t&&r.rows.forEach((function(t){var r=t.cells[e];r.extendedData=Object(o.parseLocString)(r.text,n.isValidRefName)})),m[e]={name:u[e],dataType:{type:t}}},d=0;d<t;d+=1)p(d);return{rowSet:r,columnDisplayOrder:f,hasColumnNames:!!n.hasColumnNameLine,columns:m,assemblyName:n.selectedAssemblyName}}function d(e){return h.apply(this,arguments)}function h(){return h=Object(u.a)(c.a.mark((function e(n){var t,r,a=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:{hasColumnNameLine:!1,columnNameLineNumber:1,isValidRefName:function(){return!1}},e.next=3,m(n);case 3:return r=e.sent,e.abrupt("return",p(r,t));case 5:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function b(e){return N.apply(this,arguments)}function N(){return N=Object(u.a)(c.a.mark((function e(n){var t,r,a=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:{hasColumnNameLine:!1,columnNameLineNumber:1,isValidRefName:function(){return!1}},e.next=3,m(n,{delimiter:"\t"});case 3:return r=e.sent,e.abrupt("return",p(r,t));case 5:case"end":return e.stop()}}),e)}))),N.apply(this,arguments)}}}]);
//# sourceMappingURL=10.b5099ad0.chunk.js.map