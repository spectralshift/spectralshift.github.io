"use strict";(self.webpackChunkoveranalyse=self.webpackChunkoveranalyse||[]).push([[903],{8903:(n,t,e)=>{e.d(t,{Ay:()=>N});var o=e(8587),r=e(8168),c=e(5043),i=e(8387),a=e(9751),s=e(8698),p=e(8606),u=e(4535),l=e(8206),m=e(6240);const d=c.createContext();var f=e(7056),g=e(2400);function w(n){return(0,g.Ay)("MuiGrid",n)}const h=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],b=(0,f.A)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((n=>"spacing-xs-".concat(n))),...["column-reverse","column","row-reverse","row"].map((n=>"direction-xs-".concat(n))),...["nowrap","wrap-reverse","wrap"].map((n=>"wrap-xs-".concat(n))),...h.map((n=>"grid-xs-".concat(n))),...h.map((n=>"grid-sm-".concat(n))),...h.map((n=>"grid-md-".concat(n))),...h.map((n=>"grid-lg-".concat(n))),...h.map((n=>"grid-xl-".concat(n)))]);var x=e(579);const k=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function v(n){const t=parseFloat(n);return"".concat(t).concat(String(n).replace(String(t),"")||"px")}function S(n){let{breakpoints:t,values:e}=n,o="";Object.keys(e).forEach((n=>{""===o&&0!==e[n]&&(o=n)}));const r=Object.keys(t).sort(((n,e)=>t[n]-t[e]));return r.slice(0,r.indexOf(o))}const W=(0,u.Ay)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:e}=n,{container:o,direction:r,item:c,spacing:i,wrap:a,zeroMinWidth:s,breakpoints:p}=e;let u=[];o&&(u=function(n,t){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return[e["spacing-xs-".concat(String(n))]];const o=[];return t.forEach((t=>{const r=n[t];Number(r)>0&&o.push(e["spacing-".concat(t,"-").concat(String(r))])})),o}(i,p,t));const l=[];return p.forEach((n=>{const o=e[n];o&&l.push(t["grid-".concat(n,"-").concat(String(o))])})),[t.root,o&&t.container,c&&t.item,s&&t.zeroMinWidth,...u,"row"!==r&&t["direction-xs-".concat(String(r))],"wrap"!==a&&t["wrap-xs-".concat(String(a))],...l]}})((n=>{let{ownerState:t}=n;return(0,r.A)({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},"wrap"!==t.wrap&&{flexWrap:t.wrap})}),(function(n){let{theme:t,ownerState:e}=n;const o=(0,a.kW)({values:e.direction,breakpoints:t.breakpoints.values});return(0,a.NI)({theme:t},o,(n=>{const t={flexDirection:n};return 0===n.indexOf("column")&&(t["& > .".concat(b.item)]={maxWidth:"none"}),t}))}),(function(n){let{theme:t,ownerState:e}=n;const{container:o,rowSpacing:r}=e;let c={};if(o&&0!==r){const n=(0,a.kW)({values:r,breakpoints:t.breakpoints.values});let e;"object"===typeof n&&(e=S({breakpoints:t.breakpoints.values,values:n})),c=(0,a.NI)({theme:t},n,((n,o)=>{var r;const c=t.spacing(n);return"0px"!==c?{marginTop:"-".concat(v(c)),["& > .".concat(b.item)]:{paddingTop:v(c)}}:null!=(r=e)&&r.includes(o)?{}:{marginTop:0,["& > .".concat(b.item)]:{paddingTop:0}}}))}return c}),(function(n){let{theme:t,ownerState:e}=n;const{container:o,columnSpacing:r}=e;let c={};if(o&&0!==r){const n=(0,a.kW)({values:r,breakpoints:t.breakpoints.values});let e;"object"===typeof n&&(e=S({breakpoints:t.breakpoints.values,values:n})),c=(0,a.NI)({theme:t},n,((n,o)=>{var r;const c=t.spacing(n);return"0px"!==c?{width:"calc(100% + ".concat(v(c),")"),marginLeft:"-".concat(v(c)),["& > .".concat(b.item)]:{paddingLeft:v(c)}}:null!=(r=e)&&r.includes(o)?{}:{width:"100%",marginLeft:0,["& > .".concat(b.item)]:{paddingLeft:0}}}))}return c}),(function(n){let t,{theme:e,ownerState:o}=n;return e.breakpoints.keys.reduce(((n,c)=>{let i={};if(o[c]&&(t=o[c]),!t)return n;if(!0===t)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===t)i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const s=(0,a.kW)({values:o.columns,breakpoints:e.breakpoints.values}),p="object"===typeof s?s[c]:s;if(void 0===p||null===p)return n;const u="".concat(Math.round(t/p*1e8)/1e6,"%");let l={};if(o.container&&o.item&&0!==o.columnSpacing){const n=e.spacing(o.columnSpacing);if("0px"!==n){const t="calc(".concat(u," + ").concat(v(n),")");l={flexBasis:t,maxWidth:t}}}i=(0,r.A)({flexBasis:u,flexGrow:0,maxWidth:u},l)}return 0===e.breakpoints.values[c]?Object.assign(n,i):n[e.breakpoints.up(c)]=i,n}),{})}));const y=n=>{const{classes:t,container:e,direction:o,item:r,spacing:c,wrap:i,zeroMinWidth:a,breakpoints:s}=n;let u=[];e&&(u=function(n,t){if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return["spacing-xs-".concat(String(n))];const e=[];return t.forEach((t=>{const o=n[t];if(Number(o)>0){const n="spacing-".concat(t,"-").concat(String(o));e.push(n)}})),e}(c,s));const l=[];s.forEach((t=>{const e=n[t];e&&l.push("grid-".concat(t,"-").concat(String(e)))}));const m={root:["root",e&&"container",r&&"item",a&&"zeroMinWidth",...u,"row"!==o&&"direction-xs-".concat(String(o)),"wrap"!==i&&"wrap-xs-".concat(String(i)),...l]};return(0,p.A)(m,w,t)},A=c.forwardRef((function(n,t){const e=(0,l.b)({props:n,name:"MuiGrid"}),{breakpoints:a}=(0,m.A)(),p=(0,s.A)(e),{className:u,columns:f,columnSpacing:g,component:w="div",container:h=!1,direction:b="row",item:v=!1,rowSpacing:S,spacing:A=0,wrap:N="wrap",zeroMinWidth:M=!1}=p,z=(0,o.A)(p,k),j=S||A,G=g||A,E=c.useContext(d),O=h?f||12:E,B={},C=(0,r.A)({},z);a.keys.forEach((n=>{null!=z[n]&&(B[n]=z[n],delete C[n])}));const L=(0,r.A)({},p,{columns:O,container:h,direction:b,item:v,rowSpacing:j,columnSpacing:G,wrap:N,zeroMinWidth:M,spacing:A},B,{breakpoints:a.keys}),T=y(L);return(0,x.jsx)(d.Provider,{value:O,children:(0,x.jsx)(W,(0,r.A)({ownerState:L,className:(0,i.A)(T.root,u),as:w,ref:t},C))})}));const N=A},6240:(n,t,e)=>{e.d(t,{A:()=>i});e(5043);var o=e(5527),r=e(5170),c=e(3375);function i(){const n=(0,o.A)(r.A);return n[c.A]||n}}}]);
//# sourceMappingURL=903.3c089184.chunk.js.map