(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{4421:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pizzawalasdemo/auth/login",function(){return i(1343)}])},3188:function(e,s,i){"use strict";var a=i(5893),l=i(7294),r=i(5775),n=i(6264),o=i(7953),t=i(9655),d=i(1664),c=i.n(d);let u={email:0,password:1};s.Z=e=>{let{storeId:s,handleSuccess:i,signupUrl:d,otpUrl:p}=e,[m,h]=(0,l.useState)([{label:"Email",fieldname:"email",placeholder:"johndoe@company.com",value:"",id:2,keyboardType:"email",error:null,isRequired:!0,emptyErrorMessage:"Email is required. Please provide your email address.",inputWidthSize:"12"},{label:"Password",fieldname:"password",placeholder:"********",value:"",id:4,keyboardType:"password",error:null,isRequired:!0,isPassword:!0,isPasswordVisible:!1,emptyErrorMessage:"Password is required. Please provide a suitable password.",inputWidthSize:"12"}]),[w,g]=(0,l.useState)(null),[f,x]=(0,l.useState)(!1),{apiPost:v}=(0,t.kL)(),{emailValidation:b,passwordValidation:j,returnErrorTexts:y}=(0,t.V$)(),q=(e,s)=>{let i=[...m];i[s].value=e,i[s].error=null,h(i)},P=e=>{let s=[...m],i=m[e].isPasswordVisible;s[e].keyboardType=i?"password":"default",s[e].isPasswordVisible=!i,h(s)},k=async()=>{let e=await b(m[u.email].value),a=await j(m[u.password].value);if(e&&a&&s){var l,r,n,t;let e;g(null),x(!0);let a="".concat(o.kh.qubriuxAPI,"/store/").concat(s,"/customer/signIn/email"),d=JSON.stringify({email:m[u.email].value.toLowerCase(),password:m[u.password].value,storeId:s});try{e=await v(a,d)}catch(e){g("Something went wrong! Please try again after some time."),x(!1)}(null===(l=e)||void 0===l?void 0:l.message)&&(null===(r=e)||void 0===r?void 0:r.message.toLowerCase())==="success"?(console.log("response: ",e.body),i(e.body)):((null===(n=e)||void 0===n?void 0:n.message)&&(null===(t=e)||void 0===t?void 0:t.message.toLowerCase())==="failure"&&e.body?g(e.body):g("Something went wrong! Please try again after some time."),x(!1))}else{let i=[...m];e||(i[u.email].error=await y(m[u.email].value,"email")),a||(i[u.password].error=await y(m[u.password].value,"password")),s||g("This link seems to be expired or broken, Please try again with another link."),h(i)}},z=()=>{let e=!0;return m.forEach(s=>{s.isRequired&&!s.value&&(e=!1)}),!e},N=(0,l.useMemo)(()=>z(),[m]);return(0,a.jsxs)("form",{className:"qb-signup-form px-md-5 py-5 d-flex flex-column align-items-stretch",id:"qb-signupform",children:[(0,a.jsx)("h3",{className:"qb-title mb-0 pb-4 qb-signup-title-text",children:"Login"}),(0,a.jsx)("div",{className:"container-fluid px-0 pt-md-0",children:(0,a.jsxs)("div",{className:"row gy-3",children:[m.map((e,s)=>e.isInputHidden?null:(0,a.jsx)("div",{className:"col-12 col-lg-".concat(e.inputWidthSize),children:(0,a.jsx)(r.Wz,{value:e.value,id:e.id,index:s,label:e.label,placeholder:e.placeholder,fieldname:e.fieldname,error:e.error,isRequired:e.isRequired,fieldType:e.keyboardType,isPassword:e.isPassword,showPassword:e.isPasswordVisible,isDisabled:e.isDisabled,onViewPassword:P,onChange:q})},"input-".concat(s))),(null==w?void 0:w.length)?(0,a.jsx)("div",{className:"col-12",children:(0,a.jsx)("p",{className:"qb-input-error-message mt-1 qb-general-error qb-error-active",children:w})}):null,(0,a.jsx)("div",{className:"col-lg-12",children:(0,a.jsxs)("div",{className:"w-100 pt-md-3 pt-3 d-flex align-items-center justify-content-end",children:[(0,a.jsx)("div",{className:"pe-4 d-flex align-items-center",children:(0,a.jsx)(c(),{href:p,className:"qb-link",children:"Login using OTP"})}),(0,a.jsx)("div",{className:"d-flex",children:(0,a.jsx)(n.K,{id:"qb-profile-btn",isDisabled:N,isLoading:f,onDisabledClick:()=>{let e=[...m];m.forEach((s,i)=>{s.isRequired&&!s.value&&(e[i].error=s.emptyErrorMessage?s.emptyErrorMessage:"Required field. Please fill this field to continue.")}),h([...e])},onClick:k,children:(0,a.jsxs)(a.Fragment,{children:["Login",(0,a.jsx)("span",{className:"qb-btn-loader ms-2"})]})})})]})}),(0,a.jsx)("div",{className:"col-12",children:(0,a.jsx)("div",{className:"w-100 flex-column align-items-center align-items-md-end d-flex",children:d?(0,a.jsxs)("p",{className:"qb-description",children:["Don’t have an account? ",(0,a.jsx)(c(),{href:d,className:"qb-link",children:"Signup"})]}):null})})]})})]})}},1343:function(e,s,i){"use strict";i.r(s);var a=i(5893),l=i(7294),r=i(8295),n=i(9008),o=i.n(n),t=i(3188),d=i(7953),c=i(2838),u=i(3553),p=i(1163);s.default=()=>{let[e,s]=(0,l.useState)(null),[i,n]=(0,l.useState)(""),[m,h]=(0,l.useState)(""),{onSignUp:w}=(0,c.ZP)(),{updateUserData:g}=(0,u.Z)(),f=(0,p.useRouter)(),x=e=>{let s="/auth/signup",i="/auth/otp-login";if(e.queries){let a;let l=0;for(a in e.queries)s="".concat(s).concat(0===l?"?":"&").concat(a,"=").concat(e.queries[a]),i="".concat(i).concat(0===l?"?":"&").concat(a,"=").concat(e.queries[a]),l++}n(s),h(i)},v=async()=>{let e=d.kh.storeMap.PIZZAWALADEMO.amx;x({queries:{amx:e}}),s(e)};return(0,l.useEffect)(()=>{v()},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o(),{children:[(0,a.jsx)("title",{children:"Pizzawala's | Login"}),(0,a.jsx)("link",{rel:"icon",href:"/pizzawalas/favicon.ico"}),(0,a.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/pizzawalas/apple-touch-icon.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/pizzawalas/favicon-32x32.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/pizzawalas/favicon-16x16.png"}),(0,a.jsx)("link",{rel:"manifest",href:"/pizzawalas/site.webmanifest"})]}),(0,a.jsx)(r.Z,{type:"PIZZAWALA",children:(0,a.jsx)(t.Z,{storeId:e,handleSuccess:e=>{let s=e.accessToken,i={...e,signupUrl:"/pizzawalasdemo/auth/signup"};w(s,i),g(i,s),f.push("/user/overview")},signupUrl:i,otpUrl:m})})]})}}},function(e){e.O(0,[664,775,601,774,888,179],function(){return e(e.s=4421)}),_N_E=e.O()}]);