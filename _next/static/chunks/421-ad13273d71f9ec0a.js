"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[421],{2982:function(e,a,n){var t=n(5893);n(7294),a.Z=e=>{let{id:a,children:n,isDisabled:l,isLoading:i,onClick:o,onDisabledClick:r}=e;return(0,t.jsx)("button",{className:l?"qb-btn qb-ghost-btn qb-btn-disabled":i?"qb-btn qb-ghost-btn qb-btn-loading":"qb-btn qb-ghost-btn",type:"button",id:"".concat(a),onClick:e=>{e.preventDefault();try{l?r():l||i||o()}catch(e){console.log(e)}},children:n})}},6264:function(e,a,n){n.d(a,{g:function(){return i.Z},K:function(){return l}});var t=n(5893);n(7294);var l=e=>{let{id:a,children:n,isDisabled:l,isLoading:i,onClick:o,onDisabledClick:r}=e;return(0,t.jsx)("button",{className:l?"qb-btn qb-primary-btn qb-btn-disabled":i?"qb-btn qb-primary-btn qb-btn-loading":"qb-btn qb-primary-btn",type:"button",id:"".concat(a),onClick:e=>{e.preventDefault();try{l?r():l||i||o()}catch(e){console.log(e)}},children:n})},i=n(2982)},511:function(e,a,n){var t=n(5893),l=n(7294);a.Z=e=>{let{children:a,isVisible:n,handleBackdropClick:i,isLarge:o}=e,[r,s]=(0,l.useState)(!1),[d,c]=(0,l.useState)(!1),u=()=>{s(!0),setTimeout(()=>{c(!0)},400)},p=()=>{c(!1),setTimeout(()=>{s(!1)},400)};return(0,l.useEffect)(()=>{n?u():p()},[n]),(0,t.jsx)("div",{className:r?"qb-modal-wrapper position-fixed":"qb-modal-wrapper position-fixed d-none",onClick:i,children:(0,t.jsx)("div",{className:d?"qb-modal-wrap  qb-modal-active":"qb-modal-wrap",children:(0,t.jsx)("div",{className:o?"qb-modal-large qb-modal-dialog-wrapper position-relative":"qb-modal-dialog-wrapper position-relative",children:(0,t.jsx)("div",{className:"qb-modal-dialog position-absolute d-flex align-items-center justify-content-center position-absolute",onClick:e=>{e.stopPropagation()},children:a})})})})}},1421:function(e,a,n){var t=n(5893),l=n(7294),i=n(511),o=n(6264),r=n(5775),s=n(9655),d=n(7953),c=n(2838);let u={name:0,email:1,phone:2,dob:3};a.Z=e=>{let{isVisible:a,handleBackdropClick:n,user:p,advancedData:h,handleSuccess:m}=e,{token:b}=(0,c.ZP)(),[f,v]=(0,l.useState)([{label:"Name",fieldname:"name",placeholder:"John Doe",value:"",id:1,keyboardType:"default",error:null,isRequired:!0,emptyErrorMessage:"Name is required. Please provide your name.",inputWidthSize:"12"},{label:"Email",fieldname:"email",placeholder:"johndoe@company.com",value:"",id:2,keyboardType:"email",error:null,isRequired:!0,emptyErrorMessage:"Email is required. Please provide your email address.",inputWidthSize:"6"},{label:"Phone",fieldname:"phone",placeholder:"999 999 9999",value:"",id:3,keyboardType:"phone",error:null,isRequired:!0,countryCode:"+91",countryCodeValue:"91",countryCodePlaceholder:"+91",inputFieldType:"PHONE",emptyErrorMessage:"Phone number is required. Please provide your Phone number.",inputWidthSize:"12"},{label:"Date of birth",fieldname:"dob",placeholder:"dd/mm/yyyy",value:"",id:13,keyboardType:"date",error:null,isRequired:!0,emptyErrorMessage:"Date of birth is required. Please provide your birth date.",inputWidthSize:"6"}]),[y,g]=(0,l.useState)(null),[w,x]=(0,l.useState)(!1),{nameValidation:q,returnErrorTexts:C}=(0,s.V$)(),{apiPost:N}=(0,s.kL)(),P=(e,a)=>{let n=[...f];n[a].value=e,n[a].error=null,v(n)},k=(e,a)=>{let n=[...f];n[a].countryCode="+".concat(e.code),n[a].countryCodeValue=e.code,v(n)},j=async()=>{let e=await q(f[u.name].value);if(e){var a,n,t,l;let e;x(!0);let i="".concat(d.kh.qubriuxAPI,"/consumer/editProfile"),o=JSON.stringify({name:f[u.name].value,phone_number:p.phoneNo,email:p.email,birthday:f[u.dob].value});try{e=await N(i,o,b)}catch(e){g("Something went wrong! Please try again after some time."),x(!1)}(null===(n=e)||void 0===n?void 0:null===(a=n.message)||void 0===a?void 0:a.toLowerCase())==="success"?(console.log("response: ",e),m(o)):(null===(l=e)||void 0===l?void 0:null===(t=l.message)||void 0===t?void 0:t.toLowerCase())==="failure"&&e.body?g(e.body):g("Something went wrong! Please try again after some time."),x(!1)}else{let a=[...f];e||(a[u.name].error=await C(f[u.name].value,"name")),v(a)}},T=()=>{let e=p.phoneNo.slice(1),a=p.phoneNo.slice(0,1);1!=a&&(e=p.phoneNo.slice(2),a=p.phoneNo.slice(0,2));let n=[...f];n[u.name].value=p.name,n[u.email].value=p.email,n[u.phone].value=e,n[u.email].isDisabled=!0,n[u.phone].isDisabled=!0,n[u.phone].countryCode="+".concat(a),n[u.phone].countryCodeValue=a,n[u.dob].value=null==h?void 0:h.birthday,v(n)},E=()=>{let e=!0;return f.forEach(a=>{a.isRequired&&!a.value&&(e=!1)}),!e},S=(0,l.useMemo)(()=>E(),[f]);return(0,l.useEffect)(()=>{a&&T()},[a]),(0,t.jsx)(i.Z,{isVisible:a,handleBackdropClick:n,isLarge:!0,children:(0,t.jsxs)("div",{className:"w-100 p-5 d-flex flex-column position-relative qb-profile-update-modal",children:[(0,t.jsx)("div",{className:"qb-close-btn-wrap position-absolute d-flex align-items-center justify-content-center",onClick:n,children:(0,t.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.55806 4.55806C4.80214 4.31398 5.19786 4.31398 5.44194 4.55806L10 9.11612L14.5581 4.55806C14.8021 4.31398 15.1979 4.31398 15.4419 4.55806C15.686 4.80214 15.686 5.19786 15.4419 5.44194L10.8839 10L15.4419 14.5581C15.686 14.8021 15.686 15.1979 15.4419 15.4419C15.1979 15.686 14.8021 15.686 14.5581 15.4419L10 10.8839L5.44194 15.4419C5.19786 15.686 4.80214 15.686 4.55806 15.4419C4.31398 15.1979 4.31398 14.8021 4.55806 14.5581L9.11612 10L4.55806 5.44194C4.31398 5.19786 4.31398 4.80214 4.55806 4.55806Z",fill:"#080A0A"})})}),(0,t.jsx)("div",{className:"container-fluid px-0",children:(0,t.jsxs)("div",{className:"row gy-3",children:[(0,t.jsx)("div",{className:"col-12",children:(0,t.jsx)("h3",{className:"qb-title mb-0 pb-2",children:"Edit profile"})}),f.map((e,a)=>e.isInputHidden?null:(0,t.jsx)("div",{className:"col-12 col-lg-6",children:e.inputFieldType&&"PHONE"===e.inputFieldType?(0,t.jsx)(r.sb,{value:e.value,id:e.id,index:a,label:e.label,placeholder:e.placeholder,fieldname:e.fieldname,error:e.error,isRequired:e.isRequired,countryCode:e.countryCode,codePlaceholder:e.countryCodePlaceholder,isDisabled:e.isDisabled,onCountryCodeSelect:k,onChange:P}):(0,t.jsx)(r.Wz,{value:e.value,id:e.id,index:a,label:e.label,placeholder:e.placeholder,fieldname:e.fieldname,error:e.error,isRequired:e.isRequired,fieldType:e.keyboardType,isPassword:e.isPassword,showPassword:e.isPasswordVisible,isDisabled:e.isDisabled,onChange:P})},"input-".concat(a))),(null==y?void 0:y.length)?(0,t.jsx)("div",{className:"col-12",children:(0,t.jsx)("p",{className:"qb-input-error-message mt-1 qb-general-error qb-error-active",children:y})}):null,(0,t.jsx)("div",{className:"col-12",children:(0,t.jsx)("div",{className:"w-100 d-flex flex-column align-items-end pt-4",children:(0,t.jsx)(o.g,{isDisabled:S,isLoading:w,onDisabledClick:()=>{let e=[...f];f.forEach((a,n)=>{a.isRequired&&!a.value&&(e[n].error=a.emptyErrorMessage?a.emptyErrorMessage:"Required field. Please fill this field to continue.")}),v([...e])},onClick:j,children:(0,t.jsxs)(t.Fragment,{children:["Update",(0,t.jsx)("span",{className:"qb-btn-loader ms-2"})]})})})})]})})]})})}},9655:function(e,a,n){n.d(a,{kL:function(){return t},ZN:function(){return l},V$:function(){return i}}),n(7294);var t=()=>({apiGet:async function(e,a,n,t){let l=new Headers;return l.append("Content-Type","application/json"),a?l.append("X-Api-Token",a):n?l.append("token",n):t&&l.append("Authorization","Bearer ".concat(t)),await fetch(e,{method:"GET",headers:l}).then(e=>e.text()).then(e=>!!e&&JSON.parse(e)).catch(e=>e)},apiPost:async function(e,a,n,t,l){let i=new Headers;return i.append("Content-Type","application/json"),n?i.append("X-Api-Token",n):t?i.append("token",t):l&&i.append("Authorization","Bearer ".concat(l)),await fetch(e,{method:"POST",headers:i,body:a}).then(e=>e.text()).then(e=>!!e&&JSON.parse(e)).catch(e=>e)},apiPut:async function(e,a,n,t,l){let i=new Headers;return i.append("Content-Type","application/json"),n?i.append("X-Api-Token",n):t?i.append("token",t):l&&i.append("Authorization","Bearer ".concat(l)),await fetch(e,{method:"PUT",headers:i,body:a}).then(e=>e.text()).then(e=>!!e&&JSON.parse(e)).catch(e=>e)},apiDelete:async function(e,a,n){let t=new Headers;return t.append("Content-Type","application/json"),n&&t.append("X-Api-Token",n),await fetch(e,{method:"DELETE",headers:t,body:a}).then(e=>e.text()).then(e=>!!e&&JSON.parse(e)).catch(e=>e)},fileUpload:async function(e,a,n){let t=new Headers;return t.append("Content-Type","multipart/form-data"),n&&t.append("X-Api-Token",n),await fetch(e,{method:"POST",headers:t,body:a}).then(e=>e.text()).then(e=>!!e&&JSON.parse(e)).catch(e=>e)}}),l=()=>{async function e(e){for(var a,n={},t=e.slice(e.indexOf("?")+1).split("&"),l=0;l<t.length;l++)n[(a=t[l].split("="))[0]]=a[1];return n}return{breakDownUrl:async function(a){let n,t=a.split("/"),l=[],i=t[2];if(t.length>3){let e;for(e=3;e<t.length;e++)if(e===t.length-1&&-1!=t[e].indexOf("?")){let a=t[e].split("?");l.push(a[0])}else l.push(t[e])}return -1!=a.indexOf("?")&&(n=await e(a)),{protocol:t[0],host:i,paths:l,queries:n}}}},i=()=>({emailValidation:async function(e){return null!=e&&!!e.length&&e.length<=320&&/^\w+([\+\.-]?\w+)*@\w+([\.-]?\w{2,8})*(\.\w{2,8})+$/.test(e)},phoneValidation:async function(e){return!!e&&(null==e?void 0:e.length)<=50&&/^\d{10}$/.test(e)},passwordValidation:async function(e){return!!e&&!!e.length&&/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#\$%\^&\*]).{6,40}$/.test(e)},nameValidation:async function(e){return!!e&&(null==e?void 0:e.length)<=50&&/^(([a-zA-Z])+([ a-zA-Z]*)){2,50}$/.test(e)},hexColorCodeValidation:async function(e){return!!e&&/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(e)},upiValidation:async function(e){return!!e&&/^[\w.-]{2,256}@[\w.-]{2,64}$/.test(e)},returnErrorTexts:async function(e,a){let n="";switch(a){case"email":n=(null==e?void 0:e.length)&&(" "===e[(null==e?void 0:e.length)-1]||" "===e[0])?"Email should not begin or end with spaces.":e&&(null==e?void 0:e.length)>320?"Email should not be more than 320 characters":"Invalid email format. Please enter a valid email format";break;case"name":n=e&&(null==e?void 0:e.length)<2?"Name should be at least 2 characters":(null==e?void 0:e.length)&&" "===e[0]?"Name should not begin with a space.":e&&(null==e?void 0:e.length)>50?"Name should not be more than 50 characters":"Name contains invalid characters. Please enter a valid name";break;case"phone":n=(null==e?void 0:e.length)&&(" "===e[(null==e?void 0:e.length)-1]||" "===e[0])?"Phone number should not begin or end with spaces.":e&&10!=e.length?"Phone number should have exactly 10 digits":"Phone number should have only digits.";break;case"password":n=e&&(null==e?void 0:e.length)<6?"Password should be at least 6 characters":e&&(null==e?void 0:e.length)>40?"Password should not be more than 40 characters":"Password Insecure! Password should contain alphabets, numbers and special characters";break;case"hexcode":n="Please enter a valid hex color code.";break;case"upi":n="Please enter a valid UPI ID."}return n}})}}]);