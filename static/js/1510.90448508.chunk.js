"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[1510],{81510:function(e,t,a){a.r(t);var n=a(96234),r=a(30969),o=a(90550),l=a(59071),s=a(33359),c=a(87006),i=a(96074),u=a(72097),d=a(59767),h=a(37574),p=(0,o.observer)((function(e){var t=e.model,a=e.handleClose,o=(0,r.useState)(""),p=(0,n.Z)(o,2),g=p[0],f=p[1],x=g.match(/^[A-Za-z][A-Za-z0-9]$/);return(0,h.jsx)(d.Dialog,{open:!0,onClose:a,title:"Sort by tag",children:(0,h.jsxs)(l.Z,{children:[(0,h.jsx)(s.Z,{children:"Set the tag to sort by"}),(0,h.jsx)(s.Z,{color:"textSecondary",children:"Examples: HP for haplotype, RG for read group, etc."}),(0,h.jsx)(c.Z,{value:g,onChange:function(e){return f(e.target.value)},placeholder:"Enter tag name",inputProps:{maxLength:2,"data-testid":"sort-tag-name-input"},error:2===g.length&&!x,helperText:2!==g.length||x?"":"Not a valid tag",autoComplete:"off","data-testid":"sort-tag-name"}),(0,h.jsxs)(i.Z,{children:[(0,h.jsx)(u.Z,{variant:"contained",color:"primary",type:"submit",autoFocus:!0,onClick:function(){t.setSortedBy("tag",g),a()},children:"Submit"}),(0,h.jsx)(u.Z,{variant:"contained",color:"secondary",onClick:function(){return a()},children:"Cancel"})]})]})})}));t.default=p}}]);
//# sourceMappingURL=1510.90448508.chunk.js.map