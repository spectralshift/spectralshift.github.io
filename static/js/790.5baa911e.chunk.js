"use strict";(self.webpackChunkoveranalyse=self.webpackChunkoveranalyse||[]).push([[790],{73460:(e,t,o)=>{o.d(t,{A:()=>b});var a=o(58168),r=o(98587),n=o(65043),i=o(58387),s=o(68606),l=o(21573),c=o(98206),d=o(34535),p=o(57056),u=o(32400);function v(e){return(0,u.Ay)("MuiTableBody",e)}(0,p.A)("MuiTableBody",["root"]);var m=o(70579);const g=["className","component"],A=(0,d.Ay)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),y={variant:"body"},h="tbody",b=n.forwardRef((function(e,t){const o=(0,c.b)({props:e,name:"MuiTableBody"}),{className:n,component:d=h}=o,p=(0,r.A)(o,g),u=(0,a.A)({},o,{component:d}),b=(e=>{const{classes:t}=e;return(0,s.A)({root:["root"]},v,t)})(u);return(0,m.jsx)(l.A.Provider,{value:y,children:(0,m.jsx)(A,(0,a.A)({className:(0,i.A)(b.root,n),as:d,ref:t,role:d===h?null:"rowgroup",ownerState:u},p))})}))},10039:(e,t,o)=>{o.d(t,{A:()=>x});var a=o(98587),r=o(58168),n=o(65043),i=o(58387),s=o(68606),l=o(67266),c=o(6803),d=o(41009),p=o(21573),u=o(98206),v=o(34535),m=o(57056),g=o(32400);function A(e){return(0,g.Ay)("MuiTableCell",e)}const y=(0,m.A)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]);var h=o(70579);const b=["align","className","component","padding","scope","size","sortDirection","variant"],f=(0,v.Ay)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],t["size".concat((0,c.A)(o.size))],"normal"!==o.padding&&t["padding".concat((0,c.A)(o.padding))],"inherit"!==o.align&&t["align".concat((0,c.A)(o.align))],o.stickyHeader&&t.stickyHeader]}})((e=>{let{theme:t,ownerState:o}=e;return(0,r.A)({},t.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:t.vars?"1px solid ".concat(t.vars.palette.TableCell.border):"1px solid\n    ".concat("light"===t.palette.mode?(0,l.a)((0,l.X4)(t.palette.divider,1),.88):(0,l.e$)((0,l.X4)(t.palette.divider,1),.68)),textAlign:"left",padding:16},"head"===o.variant&&{color:(t.vars||t).palette.text.primary,lineHeight:t.typography.pxToRem(24),fontWeight:t.typography.fontWeightMedium},"body"===o.variant&&{color:(t.vars||t).palette.text.primary},"footer"===o.variant&&{color:(t.vars||t).palette.text.secondary,lineHeight:t.typography.pxToRem(21),fontSize:t.typography.pxToRem(12)},"small"===o.size&&{padding:"6px 16px",["&.".concat(y.paddingCheckbox)]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},"checkbox"===o.padding&&{width:48,padding:"0 0 0 4px"},"none"===o.padding&&{padding:0},"left"===o.align&&{textAlign:"left"},"center"===o.align&&{textAlign:"center"},"right"===o.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===o.align&&{textAlign:"justify"},o.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(t.vars||t).palette.background.default})})),x=n.forwardRef((function(e,t){const o=(0,u.b)({props:e,name:"MuiTableCell"}),{align:l="inherit",className:v,component:m,padding:g,scope:y,size:x,sortDirection:w,variant:k}=o,T=(0,a.A)(o,b),C=n.useContext(d.A),M=n.useContext(p.A),R=M&&"head"===M.variant;let H;H=m||(R?"th":"td");let N=y;"td"===H?N=void 0:!N&&R&&(N="col");const z=k||M&&M.variant,S=(0,r.A)({},o,{align:l,component:H,padding:g||(C&&C.padding?C.padding:"normal"),size:x||(C&&C.size?C.size:"medium"),sortDirection:w,stickyHeader:"head"===z&&C&&C.stickyHeader,variant:z}),j=(e=>{const{classes:t,variant:o,align:a,padding:r,size:n,stickyHeader:i}=e,l={root:["root",o,i&&"stickyHeader","inherit"!==a&&"align".concat((0,c.A)(a)),"normal"!==r&&"padding".concat((0,c.A)(r)),"size".concat((0,c.A)(n))]};return(0,s.A)(l,A,t)})(S);let O=null;return w&&(O="asc"===w?"ascending":"descending"),(0,h.jsx)(f,(0,r.A)({as:H,ref:t,className:(0,i.A)(j.root,v),"aria-sort":O,scope:N,ownerState:S},T))}))},79650:(e,t,o)=>{o.d(t,{A:()=>A});var a=o(58168),r=o(98587),n=o(65043),i=o(58387),s=o(68606),l=o(98206),c=o(34535),d=o(57056),p=o(32400);function u(e){return(0,p.Ay)("MuiTableContainer",e)}(0,d.A)("MuiTableContainer",["root"]);var v=o(70579);const m=["className","component"],g=(0,c.Ay)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"}),A=n.forwardRef((function(e,t){const o=(0,l.b)({props:e,name:"MuiTableContainer"}),{className:n,component:c="div"}=o,d=(0,r.A)(o,m),p=(0,a.A)({},o,{component:c}),A=(e=>{const{classes:t}=e;return(0,s.A)({root:["root"]},u,t)})(p);return(0,v.jsx)(g,(0,a.A)({ref:t,as:c,className:(0,i.A)(A.root,n),ownerState:p},d))}))},84882:(e,t,o)=>{o.d(t,{A:()=>b});var a=o(58168),r=o(98587),n=o(65043),i=o(58387),s=o(68606),l=o(21573),c=o(98206),d=o(34535),p=o(57056),u=o(32400);function v(e){return(0,u.Ay)("MuiTableHead",e)}(0,p.A)("MuiTableHead",["root"]);var m=o(70579);const g=["className","component"],A=(0,d.Ay)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),y={variant:"head"},h="thead",b=n.forwardRef((function(e,t){const o=(0,c.b)({props:e,name:"MuiTableHead"}),{className:n,component:d=h}=o,p=(0,r.A)(o,g),u=(0,a.A)({},o,{component:d}),b=(e=>{const{classes:t}=e;return(0,s.A)({root:["root"]},v,t)})(u);return(0,m.jsx)(l.A.Provider,{value:y,children:(0,m.jsx)(A,(0,a.A)({as:d,className:(0,i.A)(b.root,n),ref:t,role:d===h?null:"rowgroup",ownerState:u},p))})}))},28076:(e,t,o)=>{o.d(t,{A:()=>f});var a=o(58168),r=o(98587),n=o(65043),i=o(58387),s=o(68606),l=o(67266),c=o(21573),d=o(98206),p=o(34535),u=o(57056),v=o(32400);function m(e){return(0,v.Ay)("MuiTableRow",e)}const g=(0,u.A)("MuiTableRow",["root","selected","hover","head","footer"]);var A=o(70579);const y=["className","component","hover","selected"],h=(0,p.Ay)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.head&&t.head,o.footer&&t.footer]}})((e=>{let{theme:t}=e;return{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,["&.".concat(g.hover,":hover")]:{backgroundColor:(t.vars||t).palette.action.hover},["&.".concat(g.selected)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,l.X4)(t.palette.primary.main,t.palette.action.selectedOpacity),"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.hoverOpacity,"))"):(0,l.X4)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity)}}}})),b="tr",f=n.forwardRef((function(e,t){const o=(0,d.b)({props:e,name:"MuiTableRow"}),{className:l,component:p=b,hover:u=!1,selected:v=!1}=o,g=(0,r.A)(o,y),f=n.useContext(c.A),x=(0,a.A)({},o,{component:p,hover:u,selected:v,head:f&&"head"===f.variant,footer:f&&"footer"===f.variant}),w=(e=>{const{classes:t,selected:o,hover:a,head:r,footer:n}=e,i={root:["root",o&&"selected",a&&"hover",r&&"head",n&&"footer"]};return(0,s.A)(i,m,t)})(x);return(0,A.jsx)(h,(0,a.A)({as:p,ref:t,className:(0,i.A)(w.root,l),role:p===b?null:"row",ownerState:x},g))}))},71806:(e,t,o)=>{o.d(t,{A:()=>h});var a=o(98587),r=o(58168),n=o(65043),i=o(58387),s=o(68606),l=o(41009),c=o(98206),d=o(34535),p=o(57056),u=o(32400);function v(e){return(0,u.Ay)("MuiTable",e)}(0,p.A)("MuiTable",["root","stickyHeader"]);var m=o(70579);const g=["className","component","padding","size","stickyHeader"],A=(0,d.Ay)("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.stickyHeader&&t.stickyHeader]}})((e=>{let{theme:t,ownerState:o}=e;return(0,r.A)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,r.A)({},t.typography.body2,{padding:t.spacing(2),color:(t.vars||t).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},o.stickyHeader&&{borderCollapse:"separate"})})),y="table",h=n.forwardRef((function(e,t){const o=(0,c.b)({props:e,name:"MuiTable"}),{className:d,component:p=y,padding:u="normal",size:h="medium",stickyHeader:b=!1}=o,f=(0,a.A)(o,g),x=(0,r.A)({},o,{component:p,padding:u,size:h,stickyHeader:b}),w=(e=>{const{classes:t,stickyHeader:o}=e,a={root:["root",o&&"stickyHeader"]};return(0,s.A)(a,v,t)})(x),k=n.useMemo((()=>({padding:u,size:h,stickyHeader:b})),[u,h,b]);return(0,m.jsx)(l.A.Provider,{value:k,children:(0,m.jsx)(A,(0,r.A)({as:p,role:p===y?null:"table",ref:t,className:(0,i.A)(w.root,d),ownerState:x},f))})}))},41009:(e,t,o)=>{o.d(t,{A:()=>a});const a=o(65043).createContext()},21573:(e,t,o)=>{o.d(t,{A:()=>a});const a=o(65043).createContext()}}]);
//# sourceMappingURL=790.5baa911e.chunk.js.map