"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7419],{5494:function(e,l){l.Z={src:"/_next/static/media/general.7095fc5d.png",height:506,width:500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAxUlEQVR42mPABX6UNDP+a21nhAt8K29n/5zTovGtqFX3Z207N1zieWgHE4j+mNtm/qG0x/N7cbPW9/JWh9/1bVJ/G9uEwYreJ7WJfMjvjXhX3Jn+PrvJ5H99P/+fhnaNP41tSgwvPKpE38R3ur0vnxT3oayt/ENVQ8WnjnLjX+2NKv+bujgZXgY0sL6JbBL8kNth+LmizfZLXaPdl+Zam58tDZIYLn9TO5X9TXs9O4z/pbUK4ou38W2MH9PyGVG82dIA5gMAcORU4v0N6lsAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},6775:function(e,l,a){var r=a(5893);a(7294);var i=a(511),s=a(5675),d=a.n(s),o=a(5494);l.Z=e=>{let{isVisible:l,handleBackdropClick:a,title:s,message:t}=e;return(0,r.jsx)(i.Z,{isVisible:l,handleBackdropClick:a,children:(0,r.jsxs)("div",{className:"w-100 p-5",children:[(0,r.jsx)("div",{className:"qb-popup-illustration-wrapper pb-3 w-100 d-flex align-items-center justify-content-center",children:(0,r.jsx)(d(),{src:o.Z,alt:"success",className:"qb-popup-illustration"})}),(0,r.jsx)("h3",{className:"qb-title mb-0 pb-3 pt-5",children:s}),(0,r.jsx)("p",{className:"qb-description mb-0 pb-4",children:t})]})})}},1102:function(e,l,a){var r=a(5893),i=a(7294),s=a(3439),d=a(6264),o=a(5202),t=a(4047),n=a(9655);let u={name:0,email:1,phone:2,password:3,address:4,city:5,state:6,zipcode:7,dob:8,gender:9,referral:10,checkBox:11},p=[{label:"Male",value:"Male"},{label:"Female",value:"Female"},{label:"Prefer not to answer/other",value:"Prefer not to answer/other"}],c=[{label:"Single",value:"Single"},{label:"Married",value:"Married"},{label:"Prefer not to answer/other",value:"Prefer not to answer/other"}];l.Z=e=>{let{navigateToOtp:l,customerDetails:a,token:m,successPopup:h}=e,[y,v]=(0,i.useState)([{label:"Name",fieldname:"name",placeholder:"John Doe",value:"",id:1,keyboardType:"default",error:null,isRequired:!0,emptyErrorMessage:"Name is required. Please provide your name.",inputWidthSize:"12"},{label:"Email",fieldname:"email",placeholder:"johndoe@company.com",value:"",id:2,keyboardType:"email",error:null,isRequired:!0,emptyErrorMessage:"Email is required. Please provide your email address.",inputWidthSize:"6"},{label:"Phone",fieldname:"phone",placeholder:"999 999 9999",value:"",id:3,keyboardType:"phone",error:null,isRequired:!0,countryCodeValue:"1",inputFieldType:"DEFAULT",emptyErrorMessage:"Phone number is required. Please provide your Phone number.",inputWidthSize:"6"},{label:"Password",fieldname:"password",placeholder:"********",value:"",id:4,keyboardType:"password",error:null,isRequired:!0,isPassword:!0,isPasswordVisible:!1,emptyErrorMessage:"Password is required. Please provide a suitable password.",inputWidthSize:"12"},{label:"Address",fieldname:"address",value:"",id:9,keyboardType:"default",error:null,isRequired:!1,inputFieldType:"MULTI_LINE",inputWidthSize:"12"},{label:"City",fieldname:"city",placeholder:"Beverly Hills",value:"",id:12,keyboardType:"default",error:null,isRequired:!0,inputFieldType:"DEFAULT",emptyErrorMessage:"City name is required. Please select your City.",inputWidthSize:"6"},{label:"State",fieldname:"state",placeholder:"Texas",value:"",id:11,keyboardType:"default",error:null,isRequired:!0,inputFieldType:"SELECT_TYPE",isDropdownOpen:!1,selectBoxType:"state",emptyErrorMessage:"State is required. Please select your State.",inputWidthSize:"6"},{label:"Zip code",fieldname:"zipcode",placeholder:"40170",value:"",id:18,keyboardType:"default",error:null,isRequired:!0,emptyErrorMessage:"Zip code is required. Please provide your zip code"},{label:"Date of birth",fieldname:"dob",placeholder:"dd/mm/yyyy",value:"",id:13,keyboardType:"date",error:null,isRequired:!0,emptyErrorMessage:"Date of birth is required. Please provide your birth date.",inputWidthSize:"6"},{label:"Gender",fieldname:"gender",placeholder:"Select",value:"",id:14,keyboardType:"default",error:null,isRequired:!0,inputFieldType:"SELECT",isDropdownOpen:!1,selectBoxType:"gender",emptyErrorMessage:"Gender is required. Please provide your gender.",inputWidthSize:"6"},{label:"Referral code",fieldname:"referral",placeholder:"AXLTYD",value:"",id:6,keyboardType:"default",error:null,isRequired:!1},{label:(0,r.jsxs)(r.Fragment,{children:["I agree to Pizzawala's ",(0,r.jsx)("a",{href:"https://thepizzawalas.com/privacy-policy-2/",className:"qb-link",target:"_blank",rel:"noopener noreferrer",children:"privacy policy"})," & to receive loyalty rewards, offers and updates via email and text."]}),value:!0,id:17,error:null,isRequired:!0,emptyErrorMessage:"Please agree to receive loyalty reward communications if you wish to signup to our loyalty program.",inputWidthSize:"12",inputFieldType:"CHECKBOX"}]),[b,f]=(0,i.useState)({country:o.Ju,state:[],city:[],gender:p,marital:c}),[g,w]=(0,i.useState)(null),[T,x]=(0,i.useState)(null),[q,P]=(0,i.useState)(null),[E,C]=(0,i.useState)([]),[S,j]=(0,i.useState)([]),[A,z]=(0,i.useState)(null),[N,k]=(0,i.useState)(!1),{nameValidation:D,emailValidation:R,passwordValidation:L,returnErrorTexts:F}=(0,n.V$)(),{apiPut:M}=(0,n.kL)(),O=e=>{let l=[...y];l[e].isDropdownOpen=!y[e].isDropdownOpen,v(l)},W=e=>{let l=t.FH[e.value];console.log("options: ",l),C([...l]),w(e)},V=e=>{j([...t._I[e.value]]),x(e)},B=e=>{P(e)},I=e=>{},U=(e,l,a,r)=>{let i=[...y];i[l].isDropdownOpen=!1,i[l].value=e.label,i[l].error=null,"country"===r?W(e):"state"===r?V(e):"city"===r?B(e):"marital"===r&&I(e),v(i)},X=(e,l,a,r)=>{let i={...b};i[r]=l,f(i);let s=[...y];s[e].isDropdownOpen=a,console.log("options: ",i,a,e,s[e]),v(s)},Z=(e,l)=>{let a=[];(null==e?void 0:e.length)&&e.length>1?(console.log("Val: ",e),E.forEach(l=>{l.label.toLowerCase().includes(e.toLowerCase())&&a.push(l)}),(null==a?void 0:a.length)&&X(l,a,!0,"state")):e&&e.length||X(l,a,!1,"state")},J=(e,l)=>{let a=[];(null==e?void 0:e.length)&&e.length>1?(console.log("Val: ",e),S.forEach(l=>{l.label.toLowerCase().includes(e.toLowerCase())&&a.push(l)}),(null==a?void 0:a.length)&&X(l,a,!0,"city")):e&&e.length||X(l,a,!1,"city")},_=(e,l,a)=>{"state"===a?Z(e,l):"city"===a&&J(e,l)},H=(e,l,a,r)=>{let i=[...y];i[l].value=e,i[l].error=null,r&&_(e,l,r),v(i)},K=e=>{let l=[...y],a=y[e].isPasswordVisible;l[e].keyboardType=a?"password":"default",l[e].isPasswordVisible=!a,v(l)};async function G(e){return/^\d{5}(-\d{4})?$/.test(e)}let Y=async()=>{let e=await D(y[u.name].value),l=await R(y[u.email].value),r=await L(y[u.password].value),i=await G(y[u.zipcode].value);if(e&&l&&r&&i){var s,d,t;let e;k(!0);let l="".concat(o.kh.qfferAPI,"/customer/web/profile"),r={name:y[u.name].value,email:a.email?a.email:y[u.email].value.toLowerCase(),phone:a.phone?a.phone:"".concat(y[u.phone].countryCodeValue).concat(y[u.phone].value),deviceId:null,referralCode:y[u.referral].value?null===(s=y[u.referral].value)||void 0===s?void 0:s.toUpperCase():null,dateOfBirth:y[u.dob].value,address:y[u.address].value,gender:y[u.gender].value,state:y[u.state].value,city:y[u.city].value,zipCode:y[u.zipcode].value,acceptChannelCommunications:y[u.checkBox].value};a.isPasswordSet||(r.password=y[u.password].value);let i=JSON.stringify(r);try{e=await M(l,i,null,m)}catch(e){z("Something went wrong! Please try again after some time."),k(!1)}(null===(d=e)||void 0===d?void 0:d.message)==="success"?(console.log("response: ",e),h()):(null===(t=e)||void 0===t?void 0:t.message)==="failure"&&e.body?z(e.body):z("Something went wrong! Please try again after some time."),k(!1)}else{let a=[...y];e||(a[u.name].error=await F(y[u.name].value,"name")),l||(a[u.email].error=await F(y[u.email].value,"email")),r||(a[u.password].error=await F(y[u.password].value,"password")),i||(a[u.zipcode].error="Invalid zip code. Please enter a valid zip code"),v(a)}},Q=()=>{let e=!0;return y.forEach(l=>{l.isRequired&&!l.value&&(e=!1)}),!e};(0,i.useEffect)(()=>{if(a){let e=[...y];a.name&&(e[u.name].value=a.name),a.email&&(e[u.email].value=a.email,e[u.email].isDisabled=!0),a.phone&&(e[u.phone].value=a.phone,e[u.phone].isDisabled=!0),a.isPasswordSet&&(e[u.password].value="**********",e[u.password].isDisabled=!0),a.gender&&(e[u.gender].value=a.gender),a.dateOfBirth&&(e[u.dob].value=a.dateOfBirth),a.address&&(e[u.address].value=a.address),a.state&&(e[u.state].value=a.state),a.city&&(e[u.city].value=a.city),a.referralCode&&(e[u.referral].value=a.referralCode),a.zipCode&&(e[u.zipcode].value=a.zipCode),v(e)}W({label:"United States",value:"USA",code:"1"})},[a]);let $=(0,i.useMemo)(()=>Q(),[y]);return(0,r.jsxs)("form",{className:"qb-signup-form px-md-5 py-5 d-flex flex-column align-items-stretch",id:"qb-signupform",children:[(0,r.jsx)("h3",{className:"qb-title mb-0 pb-4 qb-signup-title-text",children:"Complete Profile"}),(0,r.jsx)("div",{className:"container-fluid px-0 pt-md-0",children:(0,r.jsxs)("div",{className:"row gy-3",children:[y.map((e,l)=>e.isInputHidden?null:(0,r.jsx)("div",{className:"col-12 col-lg-".concat(e.inputWidthSize),children:e.inputFieldType&&"SELECT_TYPE"===e.inputFieldType?(0,r.jsx)(s.jL,{value:e.value,id:e.id,index:l,label:e.label,placeholder:e.placeholder,fieldname:e.fieldname,error:e.error,isRequired:e.isRequired,fieldType:e.keyboardType,inputAllowed:!0,options:b[e.selectBoxType],isDropdownOpen:e.isDropdownOpen,onClick:O,onChange:H,onSelect:U}):e.inputFieldType&&"SELECT"===e.inputFieldType?(0,r.jsx)(s.jL,{value:e.value,id:e.id,index:l,label:e.label,placeholder:e.placeholder,fieldname:e.fieldname,error:e.error,isRequired:e.isRequired,fieldType:e.keyboardType,options:b[e.selectBoxType],isDropdownOpen:e.isDropdownOpen,onClick:O,onChange:H,onSelect:U}):e.inputFieldType&&"MULTI_LINE"===e.inputFieldType?(0,r.jsx)(s.zC,{value:e.value,id:e.id,index:l,label:e.label,placeholder:e.placeholder,fieldname:e.fieldname,error:e.error,isRequired:e.isRequired,isDisabled:e.isDisabled,onChange:H}):e.inputFieldType&&"CHECKBOX"===e.inputFieldType?(0,r.jsx)(s.Jg,{value:e.value,id:e.id,index:l,label:e.label,error:e.error,isDisabled:e.isDisabled,onChange:H}):(0,r.jsx)(s.Wz,{value:e.value,id:e.id,index:l,label:e.label,placeholder:e.placeholder,fieldname:e.fieldname,error:e.error,isRequired:e.isRequired,fieldType:e.keyboardType,isPassword:e.isPassword,showPassword:e.isPasswordVisible,isDisabled:e.isDisabled,onViewPassword:K,onChange:H})},"input-".concat(l))),(null==A?void 0:A.length)?(0,r.jsx)("div",{className:"col-12",children:(0,r.jsx)("p",{className:"qb-input-error-message mt-1 qb-general-error qb-error-active",children:A})}):null,(0,r.jsx)("div",{className:"col-lg-12",children:(0,r.jsx)("div",{className:"w-100 pt-md-3 pt-3 d-flex flex-column flex-md-row align-items-stretch align-items-md-center justify-content-end",children:(0,r.jsx)(d.K,{id:"qb-profile-btn",isDisabled:$,isLoading:N,onDisabledClick:()=>{let e=[...y];y.forEach((l,a)=>{l.isRequired&&!l.value&&(e[a].error=l.emptyErrorMessage?l.emptyErrorMessage:"Required field. Please fill this field to continue.")}),v([...e])},onClick:Y,children:(0,r.jsxs)(r.Fragment,{children:["Signup",(0,r.jsx)("span",{className:"qb-btn-loader ms-2"})]})})})})]})})]})}}}]);