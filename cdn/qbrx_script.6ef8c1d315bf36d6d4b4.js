/*! For license information please see qbrx_script.6ef8c1d315bf36d6d4b4.js.LICENSE.txt */
(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,n(i.key),i)}}function n(t){var n=function(t){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==e(n)?n:n+""}var r=function(){return e=function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.selector=t,this.type=n,this.element=null,this.errorIndicator=null,this.input=null,this.isValid=!1,this.initialize()},n=[{key:"initialize",value:function(){this.create(),this.addListeners(),"phone"===this.type&&(this.isValid=!0)}},{key:"create",value:function(){this.element=document.querySelector(this.selector),this.input=this.element.querySelector("input"),this.errorIndicator=this.element.querySelector(".error-label")}},{key:"emailValidation",value:function(e){return!!(null!=e&&e.length&&e.length<=320)&&/^\w+([\+\.-]?\w+)*@\w+([\.-]?\w{2,8})*(\.\w{2,8})+$/.test(e)}},{key:"nameValidation",value:function(e){return!!(e&&(null==e?void 0:e.length)<=50)&&/^(([a-zA-Z])+([ a-zA-Z]*)){2,50}$/.test(e)}},{key:"phoneValidation",value:function(e){return!!(e&&(null==e?void 0:e.length)<=50)&&/^\d{10}$/.test(e)}},{key:"validateInput",value:function(e){return"name"===this.type?this.nameValidation(e):"email"===this.type?this.emailValidation(e):"phone"===this.type&&null!=e&&e.length?this.phoneValidation(e):("phone"!==this.type||e&&e.length,!0)}},{key:"onChange",value:function(e){var t=e.target.value,n=this.validateInput(t);this.value=t,this.isValid=!!n}},{key:"clear",value:function(){this.input.value=""}},{key:"onBlur",value:function(e){var t=e.target.value;this.validateInput(t)?(this.isValid=!0,this.errorIndicator.classList.remove("input--error"),this.errorIndicator.classList.remove("show-error-label")):(this.isValid=!1,this.errorIndicator.classList.add("input--error"),this.errorIndicator.classList.add("show-error-label"))}},{key:"onFocus",value:function(){this.errorIndicator.classList.remove("input--error"),this.errorIndicator.classList.remove("show-error-label")}},{key:"addListeners",value:function(){this.input.addEventListener("change",this.onChange.bind(this)),this.input.addEventListener("blur",this.onBlur.bind(this)),this.input.addEventListener("focus",this.onFocus.bind(this))}}],n&&t(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,n}();function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,a(r.key),r)}}function a(e){var t=function(e){if("object"!=i(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==i(t)?t:t+""}var s=function(){return e=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.dateLimit=t,this.createForm()},(t=[{key:"createForm",value:function(){this.container=this.createFormContent(),this.formUi=this.container.querySelector(".form-ui"),this.formActions=this.container.querySelector(".form-actions"),this.formSuccess=this.container.querySelector(".form-success-msg"),this.errorWrap=this.container.querySelector(".form-error-msg")}},{key:"createInputs",value:function(){this.inputs={firstName:new r(".qbx-esp-input-first-name","name"),lastName:new r(".qbx-esp-input-last-name","name"),email:new r(".qbx-esp-input-email","email"),phone:new r(".qbx-esp-input-phone","phone"),dob:new r(".qbx-esp-input-dob","dob")}}},{key:"getFormValue",value:function(){return{name:"".concat(this.inputs.firstName.value," ").concat(this.inputs.lastName.value),mobile:this.inputs.phone.value,email:this.inputs.email.value,dob:this.inputs.dob.value}}},{key:"checkIfFormValid",value:function(){return this.inputs.firstName.isValid&&this.inputs.lastName.isValid&&this.inputs.email.isValid&&this.inputs.phone.isValid}},{key:"clearInputs",value:function(){var e;for(e in this.inputs)this.inputs[e].clear()}},{key:"handleError",value:function(e){this.errorWrap.innerText=e,this.errorWrap.classList.add("qbx-esp-display-block")}},{key:"handleSuccess",value:function(){this.formUi.classList.add("qbx-esp-display-none"),this.formActions.classList.add("qbx-esp-display-none"),this.formSuccess.classList.add("qbx-esp-display-block")}},{key:"clearError",value:function(){this.errorWrap.classList.remove("qbx-esp-display-block")}},{key:"createFormContent",value:function(){var e=document.createElement("div");e.className="qbx-esp-form-wrapper";var t='<form class="js-form-ajax container-sm qbx-mailer-form">\n        <div class="form-header">\n            <h2 class="h1 form-heading">Email Signup</h2>\n        </div>\n        <div class="form-ui">\n            <label for="qbx-form-input-first-name" class="qbx-esp-input-first-name">\n                <i class="error-label" id="firstname-error">Please, enter a valid first name</i>\n                <span class="input-label">First Name\n                    <span class="input-label-required">- Required</span>\n                </span>\n                <input id="qbx-form-input-first-name" class="form-control" type="text" name="qbx-form-input-first-name"\n                    required=""\n                    autocomplete="given-name">\n            </label>\n            <label for="qbx-form-input-last-name" class="qbx-esp-input-last-name">\n                <i class="error-label" id="lastname-error">Please, enter a valid last name</i>\n                <span class="input-label">Last Name\n                    <span class="input-label-required">- Required</span>\n                </span>\n                <input id="qbx-form-input-last-name" class="form-control" type="text" name="qbx-form-input-last-name"\n                    required=""\n                    autocomplete="family-name">\n            </label>\n            <label for="qbx-form-input-email" class="qbx-esp-input-email">\n                <i class="error-label" id="email-error">Please, enter a valid email</i>\n                <span class="input-label">Email\n                    <span class="input-label-required">- Required</span>\n                </span>\n                <input id="qbx-form-input-email" class="form-control" type="email" name="qbx-form-input-email" required=""\n                    autocomplete="email">\n            </label>\n            <label for="qbx-form-input-phone" class="qbx-esp-input-phone">\n                <i class="error-label" id="phone-error">Please, enter a valid phone number</i>\n                <span class="input-label">Phone Number\n                </span>\n                <input id="qbx-form-input-phone" class="form-control" type="number" name="qbx-form-input-phone"\n                    autocomplete="tel">\n            </label>\n            <label for="qbx-form-input-dob" class="qbx-esp-input-dob">\n                <i class="error-label" id="dob-error">Please, enter a valid date of birth</i>\n                <span class="input-label">Birthday\n                </span>\n                <input id="qbx-form-input-dob" class="form-control" type="date" name="qbx-form-input-dob" max="'.concat(this.dateLimit,'" placeholder="dd/mm/yyyy"\n                    autocomplete="bday">\n            </label>\n        </div>\n        <div class="form-actions">\n            <button type="submit" class="btn btn-brand-alt qbx-form-submit-button" data-qbx="form_submit_btn">Submit</button>\n            <span class="form-error-msg">Please check errors in the form above</span>\n        </div>\n        <div class="form-success-msg">\n            <span role="alert">Thank you for signing up for email updates!</span>\n            <button type="button" class="btn btn-brand-alt" data-qbx="form_close_btn" data-qbx-action="close_popup">Close</button>\n        </div>\n        <div class="recaptcha-form-footer">\n            <span>\n                This site is protected by reCAPTCHA and the Google\n                <a href="https://policies.google.com/privacy">Privacy Policy</a> and\n                <a href="https://policies.google.com/terms">Terms of Service</a> apply.\n            </span>\n        </div>\n    </form>');return e.innerHTML=t,e}}])&&o(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,u(r.key),r)}}function u(e){var t=function(e){if("object"!=c(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==c(t)?t:t+""}var p=function(){return e=function e(t){var n=t.body,r=t.main,i=t.type,o=t.form,a=t.footer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.documentBody=n,this.main=r,this.type=i,this.form=o,this.footer=a,this.backdrop=null,this.container=null,this.trigger=null,this.createPopup(),this.createInputs(),this.createTrigger()},(t=[{key:"createPopup",value:function(){var e=this.getCurrentThemes(),t=e.color,n=e.background;this.pageColor=t,this.pageBackground=n;var r=this.createStyles();this.backdrop=this.createBackdrop(),"EMBEDDED"===this.type?(this.section=this.createSection(),this.container=this.createDialogContainer(),this.main.appendChild(this.section)):this.container=this.createDialogContainer(!0),document.head.appendChild(r),this.documentBody.appendChild(this.backdrop),this.documentBody.appendChild(this.container)}},{key:"createInputs",value:function(){this.form.createInputs()}},{key:"createTrigger",value:function(){"FLOATING"===this.type?(this.trigger=this.createFloatingTrigger(),this.documentBody.appendChild(this.trigger)):"BANNER"===this.type?(this.trigger=this.createBannerTrigger(),this.documentBody.insertBefore(this.trigger,this.documentBody.firstChild)):"FOOTER_BUTTON"===this.type&&(this.trigger=this.createFooterButton(),this.footer.appendChild(this.trigger))}},{key:"showPopup",value:function(){"EMBEDDED"!=this.type&&(this.form.formUi.classList.remove("qbx-esp-display-none"),this.form.formActions.classList.remove("qbx-esp-display-none"),this.form.formSuccess.classList.remove("qbx-esp-display-block"),this.form.errorWrap.classList.remove("qbx-esp-display-block")),this.backdrop.classList.remove("qbx-esp-modal-hidden"),this.container.classList.remove("qbx-esp-modal-hidden")}},{key:"hidePopup",value:function(){this.backdrop.classList.add("qbx-esp-modal-hidden"),this.container.classList.add("qbx-esp-modal-hidden")}},{key:"createBackdrop",value:function(){var e=document.createElement("div");return e.className="qbx-esp-bg qbx-esp-modal-hidden",e.setAttribute("data-qbx","esp_bg"),e.setAttribute("data-qbx-action","close_popup"),e.setAttribute("id","qbx-espf-bg"),e}},{key:"createSection",value:function(){var e=document.createElement("section");return e.className="c-one-col--text content container revealable c-one-col--text--1 c-one-col--text--odd c-one-col--text--last revealed",e.appendChild(this.form.container),e}},{key:"createDialogContainer",value:function(e){var t=document.createElement("div");return t.className="qbx-esp-wrap qbx-esp-modal-hidden",t.setAttribute("aria-label","Email Sign Up"),t.setAttribute("id","qbx-espf-wrap"),t.innerHTML='\n        <div class="qbx-esp-container">\n            <div class="qbx-esp-content">\n                <button aria-label="Close" type="button" data-qbx="close_btn" class="qbx-esp-close" data-qbx-action="close_popup" tabindex="0" autofocus="">\n                    <svg focusable="false"\n                        aria-hidden="true" viewBox="0 0 24 24">\n                        <path\n                            d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">\n                        </path>\n                    </svg>\n                </button>\n                '.concat(e?"":'<div class="qbx-esp-form-wrapper">\n                        <form class="js-form-ajax container-sm qbx-mailer-form">\n                            <div class="form-header">\n                                <h2 class="h1 form-heading">Email Signup</h2>\n                            </div>\n                            <div class="form-success-msg qbx-esp-display-block">\n                                <span role="alert">Thank you for signing up for email updates!</span>\n                                <button type="button" class="btn btn-brand-alt" data-qbx="form_close_btn" data-qbx-action="close_popup">Close</button>\n                            </div>\n                            <div class="recaptcha-form-footer">\n                                <span>\n                                    This site is protected by reCAPTCHA and the Google\n                                    <a href="https://policies.google.com/privacy">Privacy Policy</a> and\n                                    <a href="https://policies.google.com/terms">Terms of Service</a> apply.\n                                </span>\n                            </div>\n                        </form>\n                    </div>',"\n            </div>\n        </div>"),e&&t.querySelector(".qbx-esp-content").appendChild(this.form.container),t}},{key:"createFloatingTrigger",value:function(){var e=document.createElement("div");return e.className="qbx-esp-floating-trigger",e.setAttribute("id","qb-email-signup-button"),e.innerHTML='\n        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path fill-rule="evenodd" clip-rule="evenodd" d="M3 6.66666C3 6.11437 3.44772 5.66666 4 5.66666H28C28.5523 5.66666 29 6.11437 29 6.66666V23.3333C29 24.9902 27.6569 26.3333 26 26.3333H6C4.34315 26.3333 3 24.9902 3 23.3333V6.66666ZM5 7.66666V23.3333C5 23.8856 5.44772 24.3333 6 24.3333H26C26.5523 24.3333 27 23.8856 27 23.3333V7.66666H5Z" fill="'.concat(this.pageBackground?this.pageBackground:"#FFF",'"/>\n            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.29289 5.95955C3.68342 5.56903 4.31658 5.56903 4.70711 5.95955L16 17.2524L27.2929 5.95955C27.6834 5.56903 28.3166 5.56903 28.7071 5.95955C29.0976 6.35007 29.0976 6.98324 28.7071 7.37376L16.7071 19.3738C16.3166 19.7643 15.6834 19.7643 15.2929 19.3738L3.29289 7.37376C2.90237 6.98324 2.90237 6.35007 3.29289 5.95955Z" fill="').concat(this.pageBackground?this.pageBackground:"#FFF",'"/>\n        </svg>'),e}},{key:"createBannerTrigger",value:function(){var e=document.createElement("div");return e.className="qbx-esp-top-banner-trigger",e.innerHTML='<p>Sign up for email updates.</p><div class="qbx-esp-banner-trigger-btn" id="qb-email-signup-button">Email Signup</div>',e}},{key:"createFooterButton",value:function(){var e=document.createElement("li");return e.innerHTML='<button type="button" class="btn btn-brand" id="qb-email-signup-button">Email Signup</button>',e}},{key:"createStyles",value:function(){var e=document.createElement("style");return e.innerHTML="\n        .qbx-esp-bg {\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            z-index: 1042;\n            overflow: hidden;\n            position: fixed;\n            background-color: ".concat(this.pageColor?this.pageColor:"#000",";\n            opacity: 0.8;\n            transition: 0.35s ease-in;\n        }\n        .qbx-esp-wrap {\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            z-index: 1043;\n            position: fixed;\n            outline: none !important;\n            -webkit-backface-visibility: hidden;\n            transition: 0.35s ease-in;\n            transform: translateY(0);\n            pointer-events: none;\n            overflow: hidden;\n            opacity: 1;\n        }\n        .qbx-esp-wrap.qbx-esp-modal-hidden{\n            transform: translateY(20px);\n            opacity: 0;\n        }\n        .qbx-esp-bg.qbx-esp-modal-hidden{\n            pointer-events: none;\n            opacity: 0;\n        }\n        .qbx-esp-container {\n            display: flex;\n            align-items: center;\n            margin-top: 16px;\n            margin-bottom: 16px;\n            min-height: calc(100% - (16px * 2));\n            width: 500px;\n            margin-right: auto;\n            margin-left: auto;\n            box-sizing: border-box;\n        }\n        .qbx-esp-content {\n            position: relative;\n            display: flex;\n            flex-direction: column;\n            width: 100%;\n            pointer-events: auto;\n            background-color: ").concat(this.pageBackground?this.pageBackground:"#FFF",";\n            background-clip: padding-box;\n            outline: 0;\n            pointer-events: all;\n        }\n        .qbx-esp-modal-hidden .qbx-esp-content {\n            pointer-events: none;\n        }\n        button.qbx-esp-close{\n            width: 32px;\n            height: 32px;\n            position: absolute;\n            top: 8px;\n            right: 8px;\n            background-color: #0000;\n            outline: none;\n            border: none;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n        }\n        .qbx-esp-display-none{\n            display: none;\n        }\n        .qbx-esp-display-block{\n            display: block;\n        }\n        .qbx-esp-form-wrapper{\n            padding-top: 1.875rem;\n        }\n        .qbx-esp-floating-trigger{\n            position: fixed;\n            bottom: 96px;\n            right: 24px;\n            width: 48px;\n            height: 48px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            background-color: ").concat(this.pageColor?this.pageColor:"#000",";\n            border-radius: 30px;\n        }\n        .qbx-esp-top-banner-trigger{\n            width: 100%;\n            padding: 12px;\n            background-color: ").concat(this.pageColor?this.pageColor:"#000",";\n            color: ").concat(this.pageBackground?this.pageBackground:"#FFF",";\n            display: flex;\n            align-items: center;\n            justify-content: center;\n        }\n        .qbx-esp-top-banner-trigger p{\n            margin: 0;\n            padding: 0;\n        }\n        .qbx-esp-top-banner-trigger .qbx-esp-banner-trigger-btn{\n            margin-left: 8px;\n            text-decoration: underline;\n        }"),e}},{key:"getCurrentThemes",value:function(){var e=window.getComputedStyle(this.documentBody,null);return{color:e.getPropertyValue("color"),background:e.getPropertyValue("background-color")}}}])&&l(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function f(){f=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var o=t&&t.prototype instanceof g?t:g,a=Object.create(o.prototype),s=new B(r||[]);return i(a,"_invoke",{value:T(e,n,s)}),a}function p(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=u;var d="suspendedStart",m="suspendedYield",b="executing",y="completed",v={};function g(){}function x(){}function w(){}var q={};l(q,a,(function(){return this}));var k=Object.getPrototypeOf,S=k&&k(k(F([])));S&&S!==n&&r.call(S,a)&&(q=S);var L=w.prototype=g.prototype=Object.create(q);function E(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function P(e,t){function n(i,o,a,s){var c=p(e[i],e,o);if("throw"!==c.type){var l=c.arg,u=l.value;return u&&"object"==h(u)&&r.call(u,"__await")?t.resolve(u.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(u).then((function(e){l.value=e,a(l)}),(function(e){return n("throw",e,a,s)}))}s(c.arg)}var o;i(this,"_invoke",{value:function(e,r){function i(){return new t((function(t,i){n(e,r,t,i)}))}return o=o?o.then(i,i):i()}})}function T(t,n,r){var i=d;return function(o,a){if(i===b)throw Error("Generator is already running");if(i===y){if("throw"===o)throw a;return{value:e,done:!0}}for(r.method=o,r.arg=a;;){var s=r.delegate;if(s){var c=O(s,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===d)throw i=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=b;var l=p(t,n,r);if("normal"===l.type){if(i=r.done?y:m,l.arg===v)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(i=y,r.method="throw",r.arg=l.arg)}}}function O(t,n){var r=n.method,i=t.iterator[r];if(i===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,O(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var o=p(i,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function B(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function F(t){if(t||""===t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function n(){for(;++i<t.length;)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}throw new TypeError(h(t)+" is not iterable")}return x.prototype=w,i(L,"constructor",{value:w,configurable:!0}),i(w,"constructor",{value:x,configurable:!0}),x.displayName=l(w,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===x||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,l(e,c,"GeneratorFunction")),e.prototype=Object.create(L),e},t.awrap=function(e){return{__await:e}},E(P.prototype),l(P.prototype,s,(function(){return this})),t.AsyncIterator=P,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new P(u(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(L),l(L,c,"Generator"),l(L,a,(function(){return this})),l(L,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=F,B.prototype={constructor:B,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return s.type="throw",s.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;j(n)}return i}}throw Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:F(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t,n){return(t=x(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t,n,r,i,o,a){try{var s=e[o](a),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,i)}function v(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){y(o,r,i,a,s,"next",e)}function s(e){y(o,r,i,a,s,"throw",e)}a(void 0)}))}}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,x(r.key),r)}}function x(e){var t=function(e){if("object"!=h(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==h(t)?t:t+""}var w=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.initialize()},t=[{key:"initialize",value:function(){this.documentBody=document.querySelector("body"),this.main=document.querySelector("main"),this.apiBase="https://qa.qubriux.com/ezloyal-web",this.getDates(),this.fetchKeys(),this.createForm(),this.createQfferWrapper(),this.addListeners(),this.authenticateScript()}},{key:"getDates",value:function(){var e=new Date,t=e.getHours(),n=e.getMinutes(),r=e.getSeconds();t=t>9?t:"0".concat(t),n=n>9?n:"0".concat(n),r=r>9?r:"0".concat(r);var i=new Date;i.setDate(i.getDate()-1);var o=i.toISOString().split("T");this.dateLimit=o[0],this.currentDateTime="".concat(o[0]," ").concat(t,":").concat(n,":").concat(r)}},{key:"fetchKeys",value:function(){var e=document.querySelector("#qbx_email_signup_sx");this.qbxData={api_key:e.getAttribute("data-key"),clientId:e.getAttribute("data-id"),clientSecret:e.getAttribute("data-qbx")},this.type=e.getAttribute("data-type")}},{key:"createForm",value:function(){this.form=new s(this.dateLimit)}},{key:"createQfferWrapper",value:function(){var e=document.querySelector(".site-nav-menu");"FOOTER_BUTTON"!==this.type||e||(this.type="BANNER"),this.qfferOptions={body:this.documentBody,main:this.main,type:this.type,form:this.form,footer:e},this.qfferWrapper=new p(this.qfferOptions)}},{key:"handleApiCall",value:(i=v(f().mark((function e(t,n,r){var i,o;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=new Headers).append("Content-Type","application/json"),r&&i.append("Authorization","Bearer ".concat(r)),o=m(m({},n),{},{headers:i}),e.next=6,fetch(t,o).then((function(e){return e.text()})).then((function(e){return!!e&&JSON.parse(e)})).catch((function(e){return e}));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)}))),function(e,t,n){return i.apply(this,arguments)})},{key:"onFormSubmit",value:(r=v(f().mark((function e(t){var n,r,i,o,a,s;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=this.form.checkIfFormValid(),r=this.form.getFormValue(),!n||!this.qbxToken){e.next=13;break}return i="".concat(this.apiBase,"/openapi/createCustomer"),o=JSON.stringify({api_key:this.qbxData.api_key,customer_info:r,createdAt:this.currentDateTime}),a={method:"POST",body:o},e.next=9,this.handleApiCall(i,a,this.qbxToken);case 9:null!=(s=e.sent)&&s.message&&"success"===s.message?(this.form.clearError(),this.form.clearInputs(),"EMBEDDED"===this.type?this.qfferWrapper.showPopup():this.form.handleSuccess()):this.form.handleError("Oops! Looks like we are facing some technical difficulties right now."),e.next=14;break;case 13:this.form.handleError("Oops! Looks like we are facing some technical difficulties right now.");case 14:return e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,this)}))),function(e){return r.apply(this,arguments)})},{key:"addListeners",value:function(){var e=this;this.openPopupTrigger=document.querySelector("#qb-email-signup-button"),this.closePopupTriggers=document.querySelectorAll('[data-qbx-action="close_popup"]'),this.signupForm=document.querySelector(".qbx-mailer-form"),this.openPopupTrigger&&this.openPopupTrigger.addEventListener("click",(function(){return e.qfferWrapper.showPopup()})),this.closePopupTriggers.forEach((function(t){return t.addEventListener("click",(function(){return e.qfferWrapper.hidePopup()}))})),this.signupForm.addEventListener("submit",this.onFormSubmit.bind(this))}},{key:"authenticateScript",value:(n=v(f().mark((function e(){var t,n,r,i;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(this.apiBase,"/openapi/auth/getAccessToken"),n=JSON.stringify(this.qbxData),r={method:"POST",body:n},e.next=5,this.handleApiCall(t,r);case 5:null!=(i=e.sent)&&i.message&&"success"===i.message&&(this.qbxToken=i.body.accessToken);case 7:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})}],t&&g(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t,n,r,i}();window.addEventListener("load",(function(){new w}))})();