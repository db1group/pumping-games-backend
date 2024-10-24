"use strict";(self.webpackChunkkeycloakify_advanced_starter=self.webpackChunkkeycloakify_advanced_starter||[]).push([[8134],{4006:function(e,s,a){a.r(s);var t=a(1413),l=a(4925),r=a(2791),n=a(4455),i=a(8358),c=a(184),o=["kcContext","i18n","doFetchDefaultThemeResources","Template"],d=(0,r.memo)((function(e){var s,a=e.kcContext,r=e.i18n,d=e.doFetchDefaultThemeResources,p=void 0===d||d,u=e.Template,m=void 0===u?n.Z:u,h=(0,l.Z)(e,o),x=a.url,k=a.isAppInitiatedAction,j=a.totp,g=a.mode,v=a.messagesPerField,f=r.msg,y=r.msgStr,C={HmacSHA1:"SHA1",HmacSHA256:"SHA256",HmacSHA512:"SHA512"};return(0,c.jsx)(m,(0,t.Z)((0,t.Z)({},(0,t.Z)({kcContext:a,i18n:r,doFetchDefaultThemeResources:p},h)),{},{headerNode:f("loginTotpTitle"),formNode:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("ol",{id:"kc-totp-settings",children:[(0,c.jsxs)("li",{children:[(0,c.jsx)("p",{children:f("loginTotpStep1")}),(0,c.jsx)("ul",{id:"kc-totp-supported-apps",children:j.policy.supportedApplications.map((function(e){return(0,c.jsx)("li",{children:e})}))})]}),g&&"manual"==g?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("li",{children:[(0,c.jsx)("p",{children:f("loginTotpManualStep2")}),(0,c.jsx)("p",{children:(0,c.jsx)("span",{id:"kc-totp-secret-key",children:j.totpSecretEncoded})}),(0,c.jsx)("p",{children:(0,c.jsx)("a",{href:j.qrUrl,id:"mode-barcode",children:f("loginTotpScanBarcode")})})]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("p",{children:f("loginTotpManualStep3")}),(0,c.jsx)("p",{children:(0,c.jsxs)("ul",{children:[(0,c.jsxs)("li",{id:"kc-totp-type",children:[f("loginTotpType"),": ",f("loginTotp.".concat(j.policy.type))]}),(0,c.jsxs)("li",{id:"kc-totp-algorithm",children:[f("loginTotpAlgorithm"),":"," ",null!==(s=null===C||void 0===C?void 0:C[j.policy.algorithm])&&void 0!==s?s:j.policy.algorithm]}),(0,c.jsxs)("li",{id:"kc-totp-digits",children:[f("loginTotpDigits"),": ",j.policy.digits]}),"totp"===j.policy.type?(0,c.jsxs)("li",{id:"kc-totp-period",children:[f("loginTotpInterval"),": ",j.policy.period]}):(0,c.jsxs)("li",{id:"kc-totp-counter",children:[f("loginTotpCounter"),": ",j.policy.initialCounter]})]})})]})]}):(0,c.jsxs)("li",{children:[(0,c.jsx)("p",{children:f("loginTotpStep2")}),(0,c.jsx)("img",{id:"kc-totp-secret-qr-code",src:"data:image/png;base64, ".concat(j.totpSecretQrCode),alt:"Figure: Barcode"}),(0,c.jsx)("br",{}),(0,c.jsx)("p",{children:(0,c.jsx)("a",{href:j.manualUrl,id:"mode-manual",children:f("loginTotpUnableToScan")})})]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("p",{children:f("loginTotpStep3")}),(0,c.jsx)("p",{children:f("loginTotpStep3DeviceName")})]})]}),(0,c.jsxs)("form",{action:x.loginAction,className:(0,i.W)(h.kcFormClass),id:"kc-totp-settings-form",method:"post",children:[(0,c.jsxs)("div",{className:(0,i.W)(h.kcFormGroupClass),children:[(0,c.jsxs)("div",{className:(0,i.W)(h.kcInputWrapperClass),children:[(0,c.jsx)("label",{htmlFor:"totp",className:(0,i.W)(h.kcLabelClass),children:f("authenticatorCode")})," ",(0,c.jsx)("span",{className:"required",children:"*"})]}),(0,c.jsxs)("div",{className:(0,i.W)(h.kcInputWrapperClass),children:[(0,c.jsx)("input",{type:"text",id:"totp",name:"totp",autoComplete:"off",className:(0,i.W)(h.kcInputClass),"aria-invalid":v.existsError("totp")}),v.existsError("totp")&&(0,c.jsx)("span",{id:"input-error-otp-code",className:(0,i.W)(h.kcInputErrorMessageClass),"aria-live":"polite",children:v.get("totp")})]}),(0,c.jsx)("input",{type:"hidden",id:"totpSecret",name:"totpSecret",value:j.totpSecret}),g&&(0,c.jsx)("input",{type:"hidden",id:"mode",value:g})]}),(0,c.jsxs)("div",{className:(0,i.W)(h.kcFormGroupClass),children:[(0,c.jsxs)("div",{className:(0,i.W)(h.kcInputWrapperClass),children:[(0,c.jsx)("label",{htmlFor:"userLabel",className:(0,i.W)(h.kcLabelClass),children:f("loginTotpDeviceName")})," ",j.otpCredentials.length>=1&&(0,c.jsx)("span",{className:"required",children:"*"})]}),(0,c.jsxs)("div",{className:(0,i.W)(h.kcInputWrapperClass),children:[(0,c.jsx)("input",{type:"text",id:"userLabel",name:"userLabel",autoComplete:"off",className:(0,i.W)(h.kcInputClass),"aria-invalid":v.existsError("userLabel")}),v.existsError("userLabel")&&(0,c.jsx)("span",{id:"input-error-otp-label",className:(0,i.W)(h.kcInputErrorMessageClass),"aria-live":"polite",children:v.get("userLabel")})]})]}),k?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("input",{type:"submit",className:(0,i.W)(h.kcButtonClass,h.kcButtonPrimaryClass,h.kcButtonLargeClass),id:"saveTOTPBtn",value:y("doSubmit")}),(0,c.jsxs)("button",{type:"submit",className:(0,i.W)(h.kcButtonClass,h.kcButtonDefaultClass,h.kcButtonLargeClass,h.kcButtonLargeClass),id:"cancelTOTPBtn",name:"cancel-aia",value:"true",children:["$",f("doCancel")]})]}):(0,c.jsx)("input",{type:"submit",className:(0,i.W)(h.kcButtonClass,h.kcButtonPrimaryClass,h.kcButtonLargeClass),id:"saveTOTPBtn",value:y("doSubmit")})]})]})}))}));s.default=d},4455:function(e,s,a){a.d(s,{Z:function(){return h}});var t=a(2982),l=a(885),r=a(6196),n=a(5769),i=a(8358),c=a(2228),o=a(8737),d=a(8282),p=a(2791),u=window.kcContext.url.resourcesPath + "/build/static/media/teste-logo.4fe11b94e4aef8519f24.png",m=a(184),h=(0,p.memo)((function(e){var s=e.displayInfo,a=void 0!==s&&s,h=e.displayMessage,x=void 0===h||h,k=e.displayRequiredFields,j=void 0!==k&&k,g=e.displayWide,v=void 0!==g&&g,f=e.showAnotherWayIfPresent,y=void 0===f||f,C=e.headerNode,N=e.showUsernameNode,W=void 0===N?null:N,b=e.formNode,T=e.infoNode,F=void 0===T?null:T,S=e.kcContext,w=e.i18n,L=e.doFetchDefaultThemeResources,A=w.msg,I=w.changeLocale,B=w.labelBySupportedLanguageTag,H=w.currentLanguageTag,E=(0,o.useCallbackFactory)((function(e){var s=(0,l.Z)(e,1)[0];return I(s)})),P=(0,d.useConstCallback)((function(){return document.forms["kc-select-try-another-way-form"].submit(),!1})),Z=S.realm,O=S.locale,R=S.auth,U=S.url,q=S.message,D=S.isAppInitiatedAction,M=(0,p.useReducer)((function(){return!0}),!1),_=(0,l.Z)(M,2),G=_[0],J=_[1];return(0,p.useEffect)((function(){if(L){var s=!1,a=[],l=function(e){return"string"===typeof e?e.split(" "):null!==e&&void 0!==e?e:[]};if(Promise.all([].concat((0,t.Z)(l(e.stylesCommon).map((function(e){return(0,r.pathJoin)(U.resourcesCommonPath,e)}))),(0,t.Z)(l(e.styles).map((function(e){return(0,r.pathJoin)(U.resourcesPath,e)})))).reverse().map((function(e){return(0,c.t)({type:"css",href:e,position:"prepend"})}))).then((function(){s||J()})),l(e.scripts).forEach((function(e){return(0,c.t)({type:"javascript",src:(0,r.pathJoin)(U.resourcesPath,e)})})),void 0!==e.kcHtmlClass){var n=document.getElementsByTagName("html")[0].classList,o=(0,i.W)(e.kcHtmlClass).split(" ");n.add.apply(n,(0,t.Z)(o)),a.push((function(){return n.remove.apply(n,(0,t.Z)(o))}))}return function(){s=!0,a.forEach((function(e){return e()}))}}J()}),[e.kcHtmlClass]),G?(0,m.jsxs)("div",{className:(0,i.W)(e.kcLoginClass),children:[(0,m.jsx)("div",{id:"kc-header",className:(0,i.W)(e.kcHeaderClass),children:(0,m.jsx)("div",{id:"kc-header-wrapper",className:(0,i.W)(e.kcHeaderWrapperClass),children:(0,m.jsx)("img",{src:u,alt:"Logo App"})})}),(0,m.jsxs)("div",{className:(0,i.W)(e.kcFormCardClass,v&&e.kcFormCardAccountClass),children:[(0,m.jsxs)("header",{className:(0,i.W)(e.kcFormHeaderClass),children:[Z.internationalizationEnabled&&((0,n.h)(void 0!==O),!0)&&O.supported.length>1&&(0,m.jsx)("div",{id:"kc-locale",children:(0,m.jsx)("div",{id:"kc-locale-wrapper",className:(0,i.W)(e.kcLocaleWrapperClass),children:(0,m.jsxs)("div",{className:"kc-dropdown",id:"kc-locale-dropdown",children:[(0,m.jsx)("a",{href:"#",id:"kc-current-locale-link",children:B[H]}),(0,m.jsx)("ul",{children:O.supported.map((function(e){var s=e.languageTag;return(0,m.jsx)("li",{className:"kc-dropdown-item",children:(0,m.jsx)("a",{href:"#",onClick:E(s),children:B[s]})},s)}))})]})})}),void 0===R||!R.showUsername||R.showResetCredentials?j?(0,m.jsxs)("div",{className:(0,i.W)(e.kcContentWrapperClass),children:[(0,m.jsx)("div",{className:(0,i.W)(e.kcLabelWrapperClass,"subtitle"),children:(0,m.jsxs)("span",{className:"subtitle",children:[(0,m.jsx)("span",{className:"required",children:"*"}),A("requiredFields")]})}),(0,m.jsx)("div",{className:"col-md-10",children:(0,m.jsx)("h1",{id:"kc-page-title",children:C})})]}):(0,m.jsx)("h1",{id:"kc-page-title",children:C}):j?(0,m.jsxs)("div",{className:(0,i.W)(e.kcContentWrapperClass),children:[(0,m.jsx)("div",{className:(0,i.W)(e.kcLabelWrapperClass,"subtitle"),children:(0,m.jsxs)("span",{className:"subtitle",children:[(0,m.jsx)("span",{className:"required",children:"*"})," ",A("requiredFields")]})}),(0,m.jsxs)("div",{className:"col-md-10",children:[W,(0,m.jsx)("div",{className:(0,i.W)(e.kcFormGroupClass),children:(0,m.jsxs)("div",{id:"kc-username",children:[(0,m.jsx)("label",{id:"kc-attempted-username",children:null===R||void 0===R?void 0:R.attemptedUsername}),(0,m.jsx)("a",{id:"reset-login",href:U.loginRestartFlowUrl,children:(0,m.jsxs)("div",{className:"kc-login-tooltip",children:[(0,m.jsx)("i",{className:(0,i.W)(e.kcResetFlowIcon)}),(0,m.jsx)("span",{className:"kc-tooltip-text",children:A("restartLoginTooltip")})]})})]})})]})]}):(0,m.jsxs)(m.Fragment,{children:[W,(0,m.jsx)("div",{className:(0,i.W)(e.kcFormGroupClass),children:(0,m.jsxs)("div",{id:"kc-username",children:[(0,m.jsx)("label",{id:"kc-attempted-username",children:null===R||void 0===R?void 0:R.attemptedUsername}),(0,m.jsx)("a",{id:"reset-login",href:U.loginRestartFlowUrl,children:(0,m.jsxs)("div",{className:"kc-login-tooltip",children:[(0,m.jsx)("i",{className:(0,i.W)(e.kcResetFlowIcon)}),(0,m.jsx)("span",{className:"kc-tooltip-text",children:A("restartLoginTooltip")})]})})]})})]})]}),(0,m.jsx)("div",{id:"kc-content",children:(0,m.jsxs)("div",{id:"kc-content-wrapper",children:[x&&void 0!==q&&("warning"!==q.type||!D)&&(0,m.jsxs)("div",{className:(0,i.W)("alert","alert-".concat(q.type)),children:["success"===q.type&&(0,m.jsx)("span",{className:(0,i.W)(e.kcFeedbackSuccessIcon),style:{background:"none"}}),"warning"===q.type&&(0,m.jsx)("span",{className:(0,i.W)(e.kcFeedbackWarningIcon),style:{background:"none"}}),"error"===q.type&&(0,m.jsx)("span",{className:(0,i.W)(e.kcFeedbackErrorIcon),style:{background:"none"}}),"info"===q.type&&(0,m.jsx)("span",{className:(0,i.W)(e.kcFeedbackInfoIcon),style:{background:"none"}}),(0,m.jsx)("span",{className:"kc-feedback-text",style:{background:"none"},dangerouslySetInnerHTML:{__html:q.summary}})]}),b,void 0!==R&&R.showTryAnotherWayLink&&y&&(0,m.jsx)("form",{id:"kc-select-try-another-way-form",action:U.loginAction,method:"post",className:(0,i.W)(v&&e.kcContentWrapperClass),children:(0,m.jsx)("div",{className:(0,i.W)(v&&[e.kcFormSocialAccountContentClass,e.kcFormSocialAccountClass]),children:(0,m.jsxs)("div",{className:(0,i.W)(e.kcFormGroupClass),children:[(0,m.jsx)("input",{type:"hidden",name:"tryAnotherWay",value:"on"}),(0,m.jsx)("a",{href:"#",id:"try-another-way",onClick:P,children:A("doTryAnotherWay")})]})})}),a&&(0,m.jsx)("div",{id:"kc-info",className:(0,i.W)(e.kcSignUpClass),children:(0,m.jsx)("div",{id:"kc-info-wrapper",className:(0,i.W)(e.kcInfoAreaWrapperClass),children:F})})]})})]})]}):null}))},4925:function(e,s,a){function t(e,s){if(null==e)return{};var a,t,l=function(e,s){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],s.indexOf(a)>=0||(l[a]=e[a]);return l}(e,s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],s.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}a.d(s,{Z:function(){return t}})}}]);
//# sourceMappingURL=8134.f598e9b9.chunk.js.map