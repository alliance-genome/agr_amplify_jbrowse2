"use strict";(self.webpackChunk_jbrowse_web=self.webpackChunk_jbrowse_web||[]).push([[6319],{96319:function(e,r,o){o.r(r);var t=o(96234),a=o(30969),n=o(90550),l=o(59071),s=o(33359),c=o(87006),i=o(96074),d=o(72097),h=o(59767),u=o(37574),p=(0,n.observer)((function(e){var r=e.model,o=e.handleClose,n=(0,a.useState)(""),p=(0,t.Z)(n,2),f=p[0],g=p[1],x=f.match(/^[A-Za-z][A-Za-z0-9]$/);return(0,u.jsx)(h.Dialog,{open:!0,onClose:o,title:"Color by tag",children:(0,u.jsxs)(l.Z,{style:{overflowX:"hidden"},children:[(0,u.jsx)(s.Z,{children:"Enter tag to color by: "}),(0,u.jsx)(s.Z,{color:"textSecondary",children:"Examples: XS or TS for RNA-seq inferred read strand, ts (lower-case) for minimap2 read strand, HP for haplotype, RG for read group, etc."}),(0,u.jsx)(c.Z,{value:f,onChange:function(e){return g(e.target.value)},placeholder:"Enter tag name",inputProps:{maxLength:2},error:2===f.length&&!x,helperText:2!==f.length||x?"":"Not a valid tag",autoComplete:"off"}),(0,u.jsxs)(i.Z,{children:[(0,u.jsx)(d.Z,{variant:"contained",color:"primary",onClick:function(){r.setColorScheme({type:"tag",tag:f}),o()},disabled:!x,children:"Submit"}),(0,u.jsx)(d.Z,{variant:"contained",color:"secondary",onClick:o,children:"Cancel"})]})]})})}));r.default=p}}]);
//# sourceMappingURL=6319.83229550.chunk.js.map