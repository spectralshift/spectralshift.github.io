"use strict";(self.webpackChunkoveranalyse=self.webpackChunkoveranalyse||[]).push([[516],{3217:(e,t,o)=>{o.d(t,{A:()=>T});var n=o(8587),a=o(8168),r=o(5043),s=o(8387),c=o(8606),i=o(7266),l=o(6803),d=o(4535),u=o(1475),p=o(5242),m=o(5213),h=o(5429),v=o(7056),f=o(2400);function b(e){return(0,f.Ay)("PrivateSwitchBase",e)}(0,v.A)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var A=o(579);const y=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],g=(0,d.Ay)(h.A)((e=>{let{ownerState:t}=e;return(0,a.A)({padding:9,borderRadius:"50%"},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})})),k=(0,d.Ay)("input",{shouldForwardProp:u.A})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),x=r.forwardRef((function(e,t){const{autoFocus:o,checked:r,checkedIcon:i,className:d,defaultChecked:u,disabled:h,disableFocusRipple:v=!1,edge:f=!1,icon:x,id:C,inputProps:w,inputRef:S,name:R,onBlur:P,onChange:M,onFocus:I,readOnly:N,required:F=!1,tabIndex:j,type:O,value:z}=e,T=(0,n.A)(e,y),[B,L]=(0,p.A)({controlled:r,default:Boolean(u),name:"SwitchBase",state:"checked"}),V=(0,m.A)();let _=h;V&&"undefined"===typeof _&&(_=V.disabled);const q="checkbox"===O||"radio"===O,E=(0,a.A)({},e,{checked:B,disabled:_,disableFocusRipple:v,edge:f}),G=(e=>{const{classes:t,checked:o,disabled:n,edge:a}=e,r={root:["root",o&&"checked",n&&"disabled",a&&"edge".concat((0,l.A)(a))],input:["input"]};return(0,c.A)(r,b,t)})(E);return(0,A.jsxs)(g,(0,a.A)({component:"span",className:(0,s.A)(G.root,d),centerRipple:!0,focusRipple:!v,disabled:_,tabIndex:null,role:void 0,onFocus:e=>{I&&I(e),V&&V.onFocus&&V.onFocus(e)},onBlur:e=>{P&&P(e),V&&V.onBlur&&V.onBlur(e)},ownerState:E,ref:t},T,{children:[(0,A.jsx)(k,(0,a.A)({autoFocus:o,checked:r,defaultChecked:u,className:G.input,disabled:_,id:q?C:void 0,name:R,onChange:e=>{if(e.nativeEvent.defaultPrevented)return;const t=e.target.checked;L(t),M&&M(e,t)},readOnly:N,ref:S,required:F,ownerState:E,tabIndex:j,type:O},"checkbox"===O&&void 0===z?{}:{value:z},w)),B?i:x]}))}));var C=o(9662);const w=(0,C.A)((0,A.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),S=(0,C.A)((0,A.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),R=(0,C.A)((0,A.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");var P=o(8206);function M(e){return(0,f.Ay)("MuiCheckbox",e)}const I=(0,v.A)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),N=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],F=(0,d.Ay)(x,{shouldForwardProp:e=>(0,u.A)(e)||"classes"===e,name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.indeterminate&&t.indeterminate,t["size".concat((0,l.A)(o.size))],"default"!==o.color&&t["color".concat((0,l.A)(o.color))]]}})((e=>{let{theme:t,ownerState:o}=e;return(0,a.A)({color:(t.vars||t).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat("default"===o.color?t.vars.palette.action.activeChannel:t.vars.palette[o.color].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,i.X4)("default"===o.color?t.palette.action.active:t.palette[o.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==o.color&&{["&.".concat(I.checked,", &.").concat(I.indeterminate)]:{color:(t.vars||t).palette[o.color].main},["&.".concat(I.disabled)]:{color:(t.vars||t).palette.action.disabled}})})),j=(0,A.jsx)(S,{}),O=(0,A.jsx)(w,{}),z=(0,A.jsx)(R,{}),T=r.forwardRef((function(e,t){var o,i;const d=(0,P.b)({props:e,name:"MuiCheckbox"}),{checkedIcon:u=j,color:p="primary",icon:m=O,indeterminate:h=!1,indeterminateIcon:v=z,inputProps:f,size:b="medium",className:y}=d,g=(0,n.A)(d,N),k=h?v:m,x=h?v:u,C=(0,a.A)({},d,{color:p,indeterminate:h,size:b}),w=(e=>{const{classes:t,indeterminate:o,color:n,size:r}=e,s={root:["root",o&&"indeterminate","color".concat((0,l.A)(n)),"size".concat((0,l.A)(r))]},i=(0,c.A)(s,M,t);return(0,a.A)({},t,i)})(C);return(0,A.jsx)(F,(0,a.A)({type:"checkbox",inputProps:(0,a.A)({"data-indeterminate":h},f),icon:r.cloneElement(k,{fontSize:null!=(o=k.props.fontSize)?o:b}),checkedIcon:r.cloneElement(x,{fontSize:null!=(i=x.props.fontSize)?i:b}),ownerState:C,ref:t,className:(0,s.A)(w.root,y)},g,{classes:w}))}))},5293:(e,t,o)=>{o.d(t,{A:()=>K});var n=o(8587),a=o(8168),r=o(5043),s=o(8387),c=o(8606),i=o(5213),l=o(3216),d=o(2400),u=o(3174),p=o(8280),m=o(8812);const h=["ownerState"],v=["variants"],f=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function b(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}const A=(0,p.A)(),y=e=>e?e.charAt(0).toLowerCase()+e.slice(1):e;function g(e){let{defaultTheme:t,theme:o,themeId:n}=e;return a=o,0===Object.keys(a).length?t:o[n]||o;var a}function k(e){return e?(t,o)=>o[e]:null}function x(e,t){let{ownerState:o}=t,r=(0,n.A)(t,h);const s="function"===typeof e?e((0,a.A)({ownerState:o},r)):e;if(Array.isArray(s))return s.flatMap((e=>x(e,(0,a.A)({ownerState:o},r))));if(s&&"object"===typeof s&&Array.isArray(s.variants)){const{variants:e=[]}=s;let t=(0,n.A)(s,v);return e.forEach((e=>{let n=!0;"function"===typeof e.props?n=e.props((0,a.A)({ownerState:o},r,o)):Object.keys(e.props).forEach((t=>{(null==o?void 0:o[t])!==e.props[t]&&r[t]!==e.props[t]&&(n=!1)})),n&&(Array.isArray(t)||(t=[t]),t.push("function"===typeof e.style?e.style((0,a.A)({ownerState:o},r,o)):e.style))})),t}return s}const C=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{themeId:t,defaultTheme:o=A,rootShouldForwardProp:r=b,slotShouldForwardProp:s=b}=e,c=e=>(0,m.A)((0,a.A)({},e,{theme:g((0,a.A)({},e,{defaultTheme:o,themeId:t}))}));return c.__mui_systemSx=!0,function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,u.internal_processStyles)(e,(e=>e.filter((e=>!(null!=e&&e.__mui_systemSx)))));const{name:d,slot:p,skipVariantsResolver:m,skipSx:h,overridesResolver:v=k(y(p))}=i,A=(0,n.A)(i,f),C=void 0!==m?m:p&&"Root"!==p&&"root"!==p||!1,w=h||!1;let S=b;"Root"===p||"root"===p?S=r:p?S=s:function(e){return"string"===typeof e&&e.charCodeAt(0)>96}(e)&&(S=void 0);const R=(0,u.default)(e,(0,a.A)({shouldForwardProp:S,label:undefined},A)),P=e=>"function"===typeof e&&e.__emotion_real!==e||(0,l.Q)(e)?n=>x(e,(0,a.A)({},n,{theme:g({theme:n.theme,defaultTheme:o,themeId:t})})):e,M=function(n){let r=P(n);for(var s=arguments.length,i=new Array(s>1?s-1:0),l=1;l<s;l++)i[l-1]=arguments[l];const u=i?i.map(P):[];d&&v&&u.push((e=>{const n=g((0,a.A)({},e,{defaultTheme:o,themeId:t}));if(!n.components||!n.components[d]||!n.components[d].styleOverrides)return null;const r=n.components[d].styleOverrides,s={};return Object.entries(r).forEach((t=>{let[o,r]=t;s[o]=x(r,(0,a.A)({},e,{theme:n}))})),v(e,s)})),d&&!C&&u.push((e=>{var n;const r=g((0,a.A)({},e,{defaultTheme:o,themeId:t}));return x({variants:null==r||null==(n=r.components)||null==(n=n[d])?void 0:n.variants},(0,a.A)({},e,{theme:r}))})),w||u.push(c);const p=u.length-i.length;if(Array.isArray(n)&&p>0){const e=new Array(p).fill("");r=[...n,...e],r.raw=[...n.raw,...e]}const m=R(r,...u);return e.muiName&&(m.muiName=e.muiName),m};return R.withConfig&&(M.withConfig=R.withConfig),M}}(),w=C;var S=o(2018);var R=o(5527);function P(e){let{props:t,name:o,defaultTheme:n,themeId:a}=e,r=(0,R.A)(n);a&&(r=r[a]||r);const s=function(e){const{theme:t,name:o,props:n}=e;return t&&t.components&&t.components[o]&&t.components[o].defaultProps?(0,S.A)(t.components[o].defaultProps,n):n}({theme:r,name:o,props:t});return s}var M=o(8698),I=o(9751),N=o(8604),F=o(579);const j=["component","direction","spacing","divider","children","className","useFlexGap"],O=(0,p.A)(),z=w("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function T(e){return P({props:e,name:"MuiStack",defaultTheme:O})}function B(e,t){const o=r.Children.toArray(e).filter(Boolean);return o.reduce(((e,n,a)=>(e.push(n),a<o.length-1&&e.push(r.cloneElement(t,{key:"separator-".concat(a)})),e)),[])}const L=e=>{let{ownerState:t,theme:o}=e,n=(0,a.A)({display:"flex",flexDirection:"column"},(0,I.NI)({theme:o},(0,I.kW)({values:t.direction,breakpoints:o.breakpoints.values}),(e=>({flexDirection:e}))));if(t.spacing){const e=(0,N.LX)(o),a=Object.keys(o.breakpoints.values).reduce(((e,o)=>(("object"===typeof t.spacing&&null!=t.spacing[o]||"object"===typeof t.direction&&null!=t.direction[o])&&(e[o]=!0),e)),{}),r=(0,I.kW)({values:t.direction,base:a}),s=(0,I.kW)({values:t.spacing,base:a});"object"===typeof r&&Object.keys(r).forEach(((e,t,o)=>{if(!r[e]){const n=t>0?r[o[t-1]]:"column";r[e]=n}}));const c=(o,n)=>{return t.useFlexGap?{gap:(0,N._W)(e,o)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{["margin".concat((a=n?r[n]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[a]))]:(0,N._W)(e,o)}};var a};n=(0,l.A)(n,(0,I.NI)({theme:o},s,c))}return n=(0,I.iZ)(o.breakpoints,n),n};var V=o(4535),_=o(8206);const q=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{createStyledComponent:t=z,useThemeProps:o=T,componentName:i="MuiStack"}=e,l=t(L),u=r.forwardRef((function(e,t){const r=o(e),u=(0,M.A)(r),{component:p="div",direction:m="column",spacing:h=0,divider:v,children:f,className:b,useFlexGap:A=!1}=u,y=(0,n.A)(u,j),g={direction:m,spacing:h,useFlexGap:A},k=(0,c.A)({root:["root"]},(e=>(0,d.Ay)(i,e)),{});return(0,F.jsx)(l,(0,a.A)({as:p,ownerState:g,ref:t,className:(0,s.A)(k.root,b)},y,{children:v?B(f,v):f}))}));return u}({createStyledComponent:(0,V.Ay)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,_.b)({props:e,name:"MuiStack"})}),E=q;var G=o(5865),H=o(6803);function D(e){return(0,d.Ay)("MuiFormControlLabel",e)}const W=(0,o(7056).A)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]);var X=o(4827);const Q=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],Z=(0,V.Ay)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{["& .".concat(W.label)]:t.label},t.root,t["labelPlacement".concat((0,H.A)(o.labelPlacement))]]}})((e=>{let{theme:t,ownerState:o}=e;return(0,a.A)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,["&.".concat(W.disabled)]:{cursor:"default"}},"start"===o.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===o.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===o.labelPlacement&&{flexDirection:"column",marginLeft:16},{["& .".concat(W.label)]:{["&.".concat(W.disabled)]:{color:(t.vars||t).palette.text.disabled}}})})),J=(0,V.Ay)("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,t)=>t.asterisk})((e=>{let{theme:t}=e;return{["&.".concat(W.error)]:{color:(t.vars||t).palette.error.main}}})),K=r.forwardRef((function(e,t){var o,l;const d=(0,_.b)({props:e,name:"MuiFormControlLabel"}),{className:u,componentsProps:p={},control:m,disabled:h,disableTypography:v,label:f,labelPlacement:b="end",required:A,slotProps:y={}}=d,g=(0,n.A)(d,Q),k=(0,i.A)(),x=null!=(o=null!=h?h:m.props.disabled)?o:null==k?void 0:k.disabled,C=null!=A?A:m.props.required,w={disabled:x,required:C};["checked","name","onChange","value","inputRef"].forEach((e=>{"undefined"===typeof m.props[e]&&"undefined"!==typeof d[e]&&(w[e]=d[e])}));const S=(0,X.A)({props:d,muiFormControl:k,states:["error"]}),R=(0,a.A)({},d,{disabled:x,labelPlacement:b,required:C,error:S.error}),P=(e=>{const{classes:t,disabled:o,labelPlacement:n,error:a,required:r}=e,s={root:["root",o&&"disabled","labelPlacement".concat((0,H.A)(n)),a&&"error",r&&"required"],label:["label",o&&"disabled"],asterisk:["asterisk",a&&"error"]};return(0,c.A)(s,D,t)})(R),M=null!=(l=y.typography)?l:p.typography;let I=f;return null==I||I.type===G.A||v||(I=(0,F.jsx)(G.A,(0,a.A)({component:"span"},M,{className:(0,s.A)(P.label,null==M?void 0:M.className),children:I}))),(0,F.jsxs)(Z,(0,a.A)({className:(0,s.A)(P.root,u),ownerState:R,ref:t},g,{children:[r.cloneElement(m,w),C?(0,F.jsxs)(E,{display:"block",children:[I,(0,F.jsxs)(J,{ownerState:R,"aria-hidden":!0,className:P.asterisk,children:["\u2009","*"]})]}):I]}))}))},2143:(e,t,o)=>{o.d(t,{A:()=>R});var n=o(8587),a=o(8168),r=o(5043),s=o(8387),c=o(8606),i=o(7266),l=o(4535),d=o(1475),u=o(8206),p=o(1347),m=o(5429),h=o(5013),v=o(5849),f=o(5658),b=o(1424),A=o(5671),y=o(7056),g=o(2400);function k(e){return(0,g.Ay)("MuiMenuItem",e)}const x=(0,y.A)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]);var C=o(579);const w=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],S=(0,l.Ay)(m.A,{shouldForwardProp:e=>(0,d.A)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.dense&&t.dense,o.divider&&t.divider,!o.disableGutters&&t.gutters]}})((e=>{let{theme:t,ownerState:o}=e;return(0,a.A)({},t.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!o.disableGutters&&{paddingLeft:16,paddingRight:16},o.divider&&{borderBottom:"1px solid ".concat((t.vars||t).palette.divider),backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},["&.".concat(x.selected)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,i.X4)(t.palette.primary.main,t.palette.action.selectedOpacity),["&.".concat(x.focusVisible)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.focusOpacity,"))"):(0,i.X4)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},["&.".concat(x.selected,":hover")]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.hoverOpacity,"))"):(0,i.X4)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,i.X4)(t.palette.primary.main,t.palette.action.selectedOpacity)}},["&.".concat(x.focusVisible)]:{backgroundColor:(t.vars||t).palette.action.focus},["&.".concat(x.disabled)]:{opacity:(t.vars||t).palette.action.disabledOpacity},["& + .".concat(f.A.root)]:{marginTop:t.spacing(1),marginBottom:t.spacing(1)},["& + .".concat(f.A.inset)]:{marginLeft:52},["& .".concat(A.A.root)]:{marginTop:0,marginBottom:0},["& .".concat(A.A.inset)]:{paddingLeft:36},["& .".concat(b.A.root)]:{minWidth:36}},!o.dense&&{[t.breakpoints.up("sm")]:{minHeight:"auto"}},o.dense&&(0,a.A)({minHeight:32,paddingTop:4,paddingBottom:4},t.typography.body2,{["& .".concat(b.A.root," svg")]:{fontSize:"1.25rem"}}))})),R=r.forwardRef((function(e,t){const o=(0,u.b)({props:e,name:"MuiMenuItem"}),{autoFocus:i=!1,component:l="li",dense:d=!1,divider:m=!1,disableGutters:f=!1,focusVisibleClassName:b,role:A="menuitem",tabIndex:y,className:g}=o,x=(0,n.A)(o,w),R=r.useContext(p.A),P=r.useMemo((()=>({dense:d||R.dense||!1,disableGutters:f})),[R.dense,d,f]),M=r.useRef(null);(0,h.A)((()=>{i&&M.current&&M.current.focus()}),[i]);const I=(0,a.A)({},o,{dense:P.dense,divider:m,disableGutters:f}),N=(e=>{const{disabled:t,dense:o,divider:n,disableGutters:r,selected:s,classes:i}=e,l={root:["root",o&&"dense",t&&"disabled",!r&&"gutters",n&&"divider",s&&"selected"]},d=(0,c.A)(l,k,i);return(0,a.A)({},i,d)})(o),F=(0,v.A)(M,t);let j;return o.disabled||(j=void 0!==y?y:-1),(0,C.jsx)(p.A.Provider,{value:P,children:(0,C.jsx)(S,(0,a.A)({ref:F,role:A,tabIndex:j,component:l,focusVisibleClassName:(0,s.A)(N.focusVisible,b),className:(0,s.A)(N.root,g)},x,{ownerState:I,classes:N}))})}))},9650:(e,t,o)=>{o.d(t,{A:()=>f});var n=o(8168),a=o(8587),r=o(5043),s=o(8387),c=o(8606),i=o(8206),l=o(4535),d=o(7056),u=o(2400);function p(e){return(0,u.Ay)("MuiTableContainer",e)}(0,d.A)("MuiTableContainer",["root"]);var m=o(579);const h=["className","component"],v=(0,l.Ay)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"}),f=r.forwardRef((function(e,t){const o=(0,i.b)({props:e,name:"MuiTableContainer"}),{className:r,component:l="div"}=o,d=(0,a.A)(o,h),u=(0,n.A)({},o,{component:l}),f=(e=>{const{classes:t}=e;return(0,c.A)({root:["root"]},p,t)})(u);return(0,m.jsx)(v,(0,n.A)({ref:t,as:l,className:(0,s.A)(f.root,r),ownerState:u},d))}))}}]);
//# sourceMappingURL=516.86748900.chunk.js.map