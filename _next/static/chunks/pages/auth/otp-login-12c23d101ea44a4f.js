(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1627],{8747:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/otp-login",function(){return s(9365)}])},5494:function(e,t){"use strict";t.Z={src:"/_next/static/media/general.7095fc5d.png",height:506,width:500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAxUlEQVR42mPABX6UNDP+a21nhAt8K29n/5zTovGtqFX3Z207N1zieWgHE4j+mNtm/qG0x/N7cbPW9/JWh9/1bVJ/G9uEwYreJ7WJfMjvjXhX3Jn+PrvJ5H99P/+fhnaNP41tSgwvPKpE38R3ur0vnxT3oayt/ENVQ8WnjnLjX+2NKv+bujgZXgY0sL6JbBL8kNth+LmizfZLXaPdl+Zam58tDZIYLn9TO5X9TXs9O4z/pbUK4ou38W2MH9PyGVG82dIA5gMAcORU4v0N6lsAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},511:function(e,t,s){"use strict";var i=s(5893),a=s(7294);t.Z=e=>{let{children:t,isVisible:s,handleBackdropClick:o,isLarge:l}=e,[n,r]=(0,a.useState)(!1),[c,u]=(0,a.useState)(!1),d=()=>{r(!0),setTimeout(()=>{u(!0)},400)},p=()=>{u(!1),setTimeout(()=>{r(!1)},400)};return(0,a.useEffect)(()=>{s?d():n&&p()},[s]),(0,i.jsx)("div",{className:n?"qb-modal-wrapper position-fixed":"qb-modal-wrapper position-fixed d-none",onClick:o,children:(0,i.jsx)("div",{className:c?"qb-modal-wrap  qb-modal-active":"qb-modal-wrap",children:(0,i.jsx)("div",{className:l?"qb-modal-large qb-modal-dialog-wrapper position-relative":"qb-modal-dialog-wrapper position-relative",children:(0,i.jsx)("div",{className:"qb-modal-dialog position-absolute d-flex align-items-stretch justify-content-center position-absolute",onClick:e=>{e.stopPropagation()},children:t})})})})}},6775:function(e,t,s){"use strict";var i=s(5893);s(7294);var a=s(511),o=s(5675),l=s.n(o),n=s(5494);t.Z=e=>{let{isVisible:t,handleBackdropClick:s,title:o,message:r}=e;return(0,i.jsx)(a.Z,{isVisible:t,handleBackdropClick:s,children:(0,i.jsxs)("div",{className:"w-100 p-5",children:[(0,i.jsx)("div",{className:"qb-popup-illustration-wrapper pb-3 w-100 d-flex align-items-center justify-content-center",children:(0,i.jsx)(l(),{src:n.Z,alt:"success",className:"qb-popup-illustration"})}),(0,i.jsx)("h3",{className:"qb-title mb-0 pb-3 pt-5",children:o}),(0,i.jsx)("p",{className:"qb-description mb-0 pb-4",children:r})]})})}},9365:function(e,t,s){"use strict";s.r(t);var i=s(5893),a=s(7294),o=s(1163),l=s(9008),n=s.n(l),r=s(8295),c=s(2838),u=s(3553),d=s(9655),p=s(5202),m=s(6775),h=s(6835),g=s(5785),b=s(5353);t.default=()=>{let[e,t]=(0,a.useState)(null),[s,l]=(0,a.useState)(""),[f,v]=(0,a.useState)(""),[w,x]=(0,a.useState)(!1),[A,N]=(0,a.useState)(!1),[j,q]=(0,a.useState)(null),[k,E]=(0,a.useState)(null),[S,Z]=(0,a.useState)(!1),[y,P]=(0,a.useState)(!1),[C,I]=(0,a.useState)(null),{breakDownUrl:T}=(0,d.ZN)(),{onSignUp:_}=(0,c.ZP)(),{updateUserStorageData:L}=(0,u.Z)(),{apiGet:U}=(0,d.kL)();(0,o.useRouter)();let X=e=>{let t="/auth/signup",s="/auth/login";if(e.queries){let i;let a=0;for(i in e.queries)t="".concat(t).concat(0===a?"?":"&").concat(i,"=").concat(e.queries[i]),s="".concat(s).concat(0===a?"?":"&").concat(i,"=").concat(e.queries[i]),a++}l(t),v(s)},R=async e=>{let t,s="".concat(p.kh.qfferAPI,"/customer/web/signUp/email/store-info/").concat(e);try{return t=await U(s)}catch(e){return console.log(e),t}},G=(e,t)=>{E({title:e,message:t}),Z(!0)},O=async e=>{var t;let s=await R(e);if(console.log("resp: ",s),s&&"success"===s.message){console.log("resp: ",s);let e=!1;(null===(t=s.body.platform)||void 0===t?void 0:t.toLowerCase())==="qffer"&&(e=!0),x(e),P(!0),I(s.body)}else(null==s?void 0:s.message)&&"failure"===s.message&&s.body&&"Something went wrong"!=s.body?(console.log("error"),setTimeout(()=>{G("Invalid link",s.body)},300)):(console.log("error"),setTimeout(()=>{G("Invalid link","Oops! this link seems to be expired or broken, Please try again with another link.")},300))},V=async()=>{let e=window.location.href,s=await T(e);X(s),s.queries&&s.queries.amx&&(O(s.queries.amx),t(s.queries.amx))};return(0,a.useEffect)(()=>{V()},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n(),{children:(0,i.jsx)("title",{children:"Qffer | Login"})}),y?(0,i.jsx)(r.Z,{type:w?"QFFER":"GENERIC",logo:null==C?void 0:C.logo,brandColor:null==C?void 0:C.brandColor,children:A?(0,i.jsx)(b.Z,{authType:"LOGIN",user:j,handleSuccess:e=>{let t=e.accessToken,i={...e,signupUrl:s};_(t,i),L(i,t),window.location.href="/user/overview"},storeId:e}):(0,i.jsx)(g.Z,{storeId:e,handleSuccess:e=>{q(e),N(!0)},signupUrl:s,loginUrl:f})}):(0,i.jsx)(h.Z,{removePreloader:y,loaderType:"GENERIC"}),(0,i.jsx)(m.Z,{isVisible:S,handleBackdropClick:()=>{},title:null==k?void 0:k.title,message:null==k?void 0:k.message})]})}}},function(e){e.O(0,[1664,3439,6211,8248,9774,2888,179],function(){return e(e.s=8747)}),_N_E=e.O()}]);