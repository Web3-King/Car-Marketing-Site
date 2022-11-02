(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[742],{50122:function(e,n,t){"use strict";t.d(n,{Z:function(){return k}});var r=t(63366),o=t(87462),i=t(67294),a=t(86010),s=t(27192),l=t(54844),c=t(41796),d=t(48177),u=t(11496),p=t(2734),m=t(71657),h=t(65294),f=t(52836),x=t(15861),v=t(28979);function b(e){return(0,v.Z)("MuiLink",e)}var g=(0,t(76087).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),Z=t(85893);const w=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},j=(0,u.ZP)(x.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[`underline${(0,d.Z)(t.underline)}`],"button"===t.component&&n.button]}})((({theme:e,ownerState:n})=>{const t=(0,l.D)(e,`palette.${(e=>y[e]||e)(n.color)}`)||n.color;return(0,o.Z)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==t?(0,c.Fq)(t,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===n.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${g.focusVisible}`]:{outline:"auto"}})}));var k=i.forwardRef((function(e,n){const t=(0,p.Z)(),l=(0,m.Z)({props:e,name:"MuiLink"}),{className:c,color:u="primary",component:x="a",onBlur:v,onFocus:g,TypographyClasses:k,underline:P="always",variant:C="inherit",sx:F}=l,R=(0,r.Z)(l,w),S="function"===typeof F?F(t).color:null==F?void 0:F.color,{isFocusVisibleRef:W,onBlur:T,onFocus:N,ref:A}=(0,h.Z)(),[I,_]=i.useState(!1),L=(0,f.Z)(n,A),B=(0,o.Z)({},l,{color:("function"===typeof S?S(t):S)||u,component:x,focusVisible:I,underline:P,variant:C}),E=(e=>{const{classes:n,component:t,focusVisible:r,underline:o}=e,i={root:["root",`underline${(0,d.Z)(o)}`,"button"===t&&"button",r&&"focusVisible"]};return(0,s.Z)(i,b,n)})(B);return(0,Z.jsx)(j,(0,o.Z)({color:u,className:(0,a.Z)(E.root,c),classes:k,component:x,onBlur:e=>{T(e),!1===W.current&&_(!1),v&&v(e)},onFocus:e=>{N(e),!0===W.current&&_(!0),g&&g(e)},ref:L,ownerState:B,variant:C,sx:[...e.color?[{color:y[u]||u}]:[],...Array.isArray(F)?F:[F]]},R))}))},50135:function(e,n,t){"use strict";t.d(n,{Z:function(){return k}});var r=t(87462),o=t(63366),i=t(67294),a=t(86010),s=t(27192),l=t(41853),c=t(11496),d=t(71657),u=t(79332),p=t(6135),m=t(57709),h=t(33841),f=t(94054),x=t(56815),v=t(18360),b=t(28979);function g(e){return(0,b.Z)("MuiTextField",e)}(0,t(76087).Z)("MuiTextField",["root"]);var Z=t(85893);const w=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],y={standard:u.Z,filled:p.Z,outlined:m.Z},j=(0,c.ZP)(f.Z,{name:"MuiTextField",slot:"Root",overridesResolver:(e,n)=>n.root})({});var k=i.forwardRef((function(e,n){const t=(0,d.Z)({props:e,name:"MuiTextField"}),{autoComplete:i,autoFocus:c=!1,children:u,className:p,color:m="primary",defaultValue:f,disabled:b=!1,error:k=!1,FormHelperTextProps:P,fullWidth:C=!1,helperText:F,id:R,InputLabelProps:S,inputProps:W,InputProps:T,inputRef:N,label:A,maxRows:I,minRows:_,multiline:L=!1,name:B,onBlur:E,onChange:H,onFocus:M,placeholder:V,required:D=!1,rows:$,select:q=!1,SelectProps:z,type:O,value:X,variant:G="outlined"}=t,U=(0,o.Z)(t,w),J=(0,r.Z)({},t,{autoFocus:c,color:m,disabled:b,error:k,fullWidth:C,multiline:L,required:D,select:q,variant:G}),K=(e=>{const{classes:n}=e;return(0,s.Z)({root:["root"]},g,n)})(J);const Q={};"outlined"===G&&(S&&"undefined"!==typeof S.shrink&&(Q.notched=S.shrink),Q.label=A),q&&(z&&z.native||(Q.id=void 0),Q["aria-describedby"]=void 0);const Y=(0,l.Z)(R),ee=F&&Y?`${Y}-helper-text`:void 0,ne=A&&Y?`${Y}-label`:void 0,te=y[G],re=(0,Z.jsx)(te,(0,r.Z)({"aria-describedby":ee,autoComplete:i,autoFocus:c,defaultValue:f,fullWidth:C,multiline:L,name:B,rows:$,maxRows:I,minRows:_,type:O,value:X,id:Y,inputRef:N,onBlur:E,onChange:H,onFocus:M,placeholder:V,inputProps:W},Q,T));return(0,Z.jsxs)(j,(0,r.Z)({className:(0,a.Z)(K.root,p),disabled:b,error:k,fullWidth:C,ref:n,required:D,color:m,variant:G,ownerState:J},U,{children:[null!=A&&""!==A&&(0,Z.jsx)(h.Z,(0,r.Z)({htmlFor:Y,id:ne},S,{children:A})),q?(0,Z.jsx)(v.Z,(0,r.Z)({"aria-describedby":ee,id:Y,labelId:ne,value:X,input:re},z,{children:u})):re,F&&(0,Z.jsx)(x.Z,(0,r.Z)({id:ee},P,{children:F}))]}))}))},41229:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forgot-password",function(){return t(11692)}])},88942:function(e,n,t){"use strict";var r=t(85893),o=t(11496),i=t(79172),a=(0,o.ZP)(i.Z)((function(e){return{height:"100vh","& .content-center":{display:"flex",minHeight:"100vh",alignItems:"center",justifyContent:"center",padding:e.theme.spacing(5)},"& .content-right":{display:"flex",minHeight:"100vh",overflowX:"hidden",position:"relative"}}}));n.Z=function(e){var n=e.children;return(0,r.jsx)(a,{className:"layout-wrapper",children:(0,r.jsx)(i.Z,{className:"app-content",sx:{minHeight:"100vh",overflowX:"hidden",position:"relative"},children:n})})}},11692:function(e,n,t){"use strict";t.r(n);var r=t(85893),o=t(67294),i=t(41664),a=t.n(i),s=t(50122),l=t(63030),c=t(50135),d=t(79172),u=t(98396),p=t(11496),m=t(2734),h=t(56815),f=t(15861),x=t(90935),v=t(88942),b=t(51514),g=t(39437);function Z(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}(0,p.ZP)(d.Z)((function(e){var n=e.theme;return Z({padding:n.spacing(0),paddingRight:"0 !important"},n.breakpoints.down("lg"),{padding:n.spacing(0)})})),(0,p.ZP)("img")((function(e){var n,t=e.theme;return Z(n={maxWidth:"100%"},t.breakpoints.down("xl"),{maxWidth:"100%"}),Z(n,t.breakpoints.down("lg"),{maxWidth:"100%"}),n}));var w=(0,p.ZP)("img")((function(e){var n,t=e.theme;return Z(n={maxWidth:"15rem"},t.breakpoints.down("xl"),{maxWidth:"11rem"}),Z(n,t.breakpoints.down("lg"),{maxWidth:"7rem"}),n})),y=(0,p.ZP)(d.Z)((function(e){var n,t=e.theme;return Z(n={width:"100%"},t.breakpoints.up("md"),{maxWidth:400}),Z(n,t.breakpoints.up("lg"),{maxWidth:450}),n})),j=(0,p.ZP)(d.Z)((function(e){return Z({width:"100%"},e.theme.breakpoints.down("md"),{maxWidth:400})})),k=(0,p.ZP)(f.Z)((function(e){var n=e.theme;return Z({fontWeight:600,letterSpacing:"0.18px",marginBottom:n.spacing(1.5)},n.breakpoints.down("md"),{marginTop:n.spacing(8)})})),P=function(){var e=(0,m.Z)(),n=(0,b.r)().settings.skin,t=(0,u.Z)(e.breakpoints.down("md")),i=(0,o.useState)(""),p=i[0],v=i[1],Z=(0,o.useState)(!1),P=Z[0],C=Z[1],F="bordered"===n?"auth-v2-forgot-password-illustration-bordered":"auth-v2-forgot-password-illustration";return(0,r.jsxs)(d.Z,{className:"content-right",children:[t?null:(0,r.jsx)(d.Z,{sx:{flex:1,display:"flex",position:"relative",alignItems:"center",justifyContent:"center",width:"100%"},children:(0,r.jsx)("div",{style:{background:"url(/images/pages/".concat(F,"-").concat(e.palette.mode,".png)"),bakcgroundRepeat:"no-repeat",backgroundSize:"cover",width:"100%",height:"100vh"}})}),(0,r.jsx)(y,{sx:"bordered"!==n||t?{}:{borderLeft:"1px solid ".concat(e.palette.divider)},children:(0,r.jsx)(d.Z,{sx:{p:7,height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"background.paper"},children:(0,r.jsxs)(j,{children:[(0,r.jsx)(d.Z,{sx:{top:30,left:40,display:"flex",position:"absolute",alignItems:"center",justifyContent:"center"},children:(0,r.jsx)(a(),{href:"http://inspecturo.com",children:(0,r.jsx)(w,{alt:"login-title",src:"/images/pages/".concat("inspecturo-turo-owner-software-logo","-").concat(e.palette.mode,".png")})})}),(0,r.jsxs)(d.Z,{sx:{mb:6},children:[(0,r.jsx)(k,{variant:"h5",children:"Forgot Password? \ud83d\udd12"}),(0,r.jsx)(f.Z,{variant:"body2",children:"Enter your email and we\u2032ll send you instructions to reset your password"})]}),(0,r.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault();var n=new Headers;n.append("Content-Type","application/x-www-form-urlencoded"),n.append("Access-Control-Allow-Origin","http://161.35.118.186"),n.append("Access-Control-Allow-Methods","*"),n.append("Access-Control-Allow-Headers","*");var t=new URLSearchParams;t.append("email",e.target.email.value);var r={method:"POST",headers:n,body:t,redirect:"follow"};fetch("".concat(g.LB,"/forgotPassword"),r).then((function(e){return e.text()})).then((function(e){e.includes("Invalid")?v("Invalid Email Address"):(v("Password Reset Link sent to your Email box. Please confirm your Email box!"),C(!0))})).catch((function(e){return console.log("error",e)}))},children:[(0,r.jsx)(c.Z,{autoFocus:!0,name:"email",type:"email",label:"Email",sx:{display:"flex",mb:4},disabled:P}),(0,r.jsx)(h.Z,{sx:{ml:2},id:"",children:p}),(0,r.jsx)(l.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",sx:{mb:5.25,mt:3},disabled:P,children:"Send reset link"}),(0,r.jsx)(f.Z,{component:"div",sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,r.jsx)(a(),{passHref:!0,href:"/login",children:(0,r.jsxs)(f.Z,{component:s.Z,sx:{display:"flex",alignItems:"center",color:"primary.main",justifyContent:"center"},children:[(0,r.jsx)(x.Z,{sx:{mr:1.5,fontSize:"2rem"}}),(0,r.jsx)("span",{children:"Back to login"})]})})})]})]})})})]})};P.guestGuard=!0,P.getLayout=function(e){return(0,r.jsx)(v.Z,{children:e})},n.default=P}},function(e){e.O(0,[959,774,888,179],(function(){return n=41229,e(e.s=n);var n}));var n=e.O();_N_E=n}]);