"use strict";(self.webpackChunkkeycloakify_advanced_starter=self.webpackChunkkeycloakify_advanced_starter||[]).push([[8295],{8503:function(s,e,a){a.r(e);var r=a(1413),l=a(4925),c=a(8358),n=a(2791),t=a(4455),i=a(184),o=["kcContext","i18n"],d=(0,n.memo)((function(s){var e,a,n,d,m=s.kcContext,p=s.i18n,u=(0,l.Z)(s,o),h=m.url,k=m.messagesPerField,x=m.register,f=m.realm,j=m.passwordRequired,N=m.recaptchaRequired,C=m.recaptchaSiteKey,W=p.msg,v=p.msgStr;return console.log("NOTE: It is up to you do do something meaningful with ".concat(m.authorizedMailDomains)),(0,i.jsx)(t.Z,(0,r.Z)((0,r.Z)({},(0,r.Z)({kcContext:m,i18n:p},u)),{},{doFetchDefaultThemeResources:!0,headerNode:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{style:{color:"black",textAlign:"center",fontWeight:700,fontSize:"2rem"},children:W("registerTitle")}),(0,i.jsx)("div",{className:(0,c.W)(u.kcFormOptionsWrapperClass),style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,i.jsxs)("span",{style:{fontSize:"0.875rem",fontWeight:700,margin:"1rem 0"},children:["J\xc1 POSSUI UMA CONTA?"," ",(0,i.jsx)("a",{href:h.loginUrl,style:{fontSize:"0.875rem",fontWeight:700},children:W("backToLogin")})]})})]}),formNode:(0,i.jsxs)("form",{id:"kc-register-form",className:(0,c.W)(u.kcFormClass),action:h.registrationAction,method:"post",children:[(0,i.jsxs)("div",{className:(0,c.W)(u.kcFormGroupClass,k.printIfExists("firstName",u.kcFormGroupErrorClass)),children:[(0,i.jsx)("div",{className:(0,c.W)(u.kcLabelWrapperClass),children:(0,i.jsx)("label",{htmlFor:"firstName",className:(0,c.W)(u.kcLabelClass),children:W("firstName")})}),(0,i.jsx)("div",{className:(0,c.W)(u.kcInputWrapperClass),children:(0,i.jsx)("input",{type:"text",id:"firstName",className:(0,c.W)(u.kcInputClass),name:"firstName",defaultValue:null!==(e=x.formData.firstName)&&void 0!==e?e:""})})]}),(0,i.jsxs)("div",{className:(0,c.W)(u.kcFormGroupClass,k.printIfExists("lastName",u.kcFormGroupErrorClass)),children:[(0,i.jsx)("div",{className:(0,c.W)(u.kcLabelWrapperClass),children:(0,i.jsx)("label",{htmlFor:"lastName",className:(0,c.W)(u.kcLabelClass),children:W("lastName")})}),(0,i.jsx)("div",{className:(0,c.W)(u.kcInputWrapperClass),children:(0,i.jsx)("input",{type:"text",id:"lastName",className:(0,c.W)(u.kcInputClass),name:"lastName",defaultValue:null!==(a=x.formData.lastName)&&void 0!==a?a:""})})]}),(0,i.jsxs)("div",{className:(0,c.W)(u.kcFormGroupClass,k.printIfExists("email",u.kcFormGroupErrorClass)),children:[(0,i.jsx)("div",{className:(0,c.W)(u.kcLabelWrapperClass),children:(0,i.jsx)("label",{htmlFor:"email",className:(0,c.W)(u.kcLabelClass),children:W("email")})}),(0,i.jsx)("div",{className:(0,c.W)(u.kcInputWrapperClass),children:(0,i.jsx)("input",{type:"text",id:"email",className:(0,c.W)(u.kcInputClass),name:"email",defaultValue:null!==(n=x.formData.email)&&void 0!==n?n:"",autoComplete:"email"})})]}),!f.registrationEmailAsUsername&&(0,i.jsxs)("div",{className:(0,c.W)(u.kcFormGroupClass,k.printIfExists("username",u.kcFormGroupErrorClass)),children:[(0,i.jsx)("div",{className:(0,c.W)(u.kcLabelWrapperClass),children:(0,i.jsx)("label",{htmlFor:"username",className:(0,c.W)(u.kcLabelClass),children:W("username")})}),(0,i.jsx)("div",{className:(0,c.W)(u.kcInputWrapperClass),children:(0,i.jsx)("input",{type:"text",id:"username",className:(0,c.W)(u.kcInputClass),name:"username",defaultValue:null!==(d=x.formData.username)&&void 0!==d?d:"",autoComplete:"username"})})]}),j&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:(0,c.W)(u.kcFormGroupClass,k.printIfExists("password",u.kcFormGroupErrorClass)),children:[(0,i.jsx)("div",{className:(0,c.W)(u.kcLabelWrapperClass),children:(0,i.jsx)("label",{htmlFor:"password",className:(0,c.W)(u.kcLabelClass),children:W("password")})}),(0,i.jsx)("div",{className:(0,c.W)(u.kcInputWrapperClass),children:(0,i.jsx)("input",{type:"password",id:"password",className:(0,c.W)(u.kcInputClass),name:"password",autoComplete:"new-password"})})]}),(0,i.jsxs)("div",{className:(0,c.W)(u.kcFormGroupClass,k.printIfExists("password-confirm",u.kcFormGroupErrorClass)),children:[(0,i.jsx)("div",{className:(0,c.W)(u.kcLabelWrapperClass),children:(0,i.jsx)("label",{htmlFor:"password-confirm",className:(0,c.W)(u.kcLabelClass),children:W("passwordConfirm")})}),(0,i.jsx)("div",{className:(0,c.W)(u.kcInputWrapperClass),children:(0,i.jsx)("input",{type:"password",id:"password-confirm",className:(0,c.W)(u.kcInputClass),name:"password-confirm"})})]})]}),N&&(0,i.jsx)("div",{className:"form-group",children:(0,i.jsx)("div",{className:(0,c.W)(u.kcInputWrapperClass),children:(0,i.jsx)("div",{className:"g-recaptcha","data-size":"compact","data-sitekey":C})})}),(0,i.jsx)("div",{className:(0,c.W)(u.kcFormGroupClass),children:(0,i.jsx)("div",{id:"kc-form-buttons",className:(0,c.W)(u.kcFormButtonsClass),children:(0,i.jsx)("input",{className:(0,c.W)(u.kcButtonClass,u.kcButtonPrimaryClass,u.kcButtonBlockClass,u.kcButtonLargeClass),type:"submit",value:v("doRegister")})})})]})}))}));e.default=d},4455:function(s,e,a){a.d(e,{Z:function(){return h}});var r=a(2982),l=a(885),c=a(6196),n=a(5769),t=a(8358),i=a(2228),o=a(8737),d=a(8282),m=a(2791),p=window.kcContext.url.resourcesPath + "/build/static/media/teste-logo.4fe11b94e4aef8519f24.png",u=a(184),h=(0,m.memo)((function(s){var e=s.displayInfo,a=void 0!==e&&e,h=s.displayMessage,k=void 0===h||h,x=s.displayRequiredFields,f=void 0!==x&&x,j=s.displayWide,N=void 0!==j&&j,C=s.showAnotherWayIfPresent,W=void 0===C||C,v=s.headerNode,g=s.showUsernameNode,y=void 0===g?null:g,b=s.formNode,F=s.infoNode,w=void 0===F?null:F,I=s.kcContext,L=s.i18n,E=s.doFetchDefaultThemeResources,A=L.msg,G=L.changeLocale,S=L.labelBySupportedLanguageTag,T=L.currentLanguageTag,Z=(0,o.useCallbackFactory)((function(s){var e=(0,l.Z)(s,1)[0];return G(e)})),O=(0,d.useConstCallback)((function(){return document.forms["kc-select-try-another-way-form"].submit(),!1})),R=I.realm,U=I.locale,P=I.auth,B=I.url,q=I.message,D=I.isAppInitiatedAction,H=(0,m.useReducer)((function(){return!0}),!1),z=(0,l.Z)(H,2),_=z[0],J=z[1];return(0,m.useEffect)((function(){if(E){var e=!1,a=[],l=function(s){return"string"===typeof s?s.split(" "):null!==s&&void 0!==s?s:[]};if(Promise.all([].concat((0,r.Z)(l(s.stylesCommon).map((function(s){return(0,c.pathJoin)(B.resourcesCommonPath,s)}))),(0,r.Z)(l(s.styles).map((function(s){return(0,c.pathJoin)(B.resourcesPath,s)})))).reverse().map((function(s){return(0,i.t)({type:"css",href:s,position:"prepend"})}))).then((function(){e||J()})),l(s.scripts).forEach((function(s){return(0,i.t)({type:"javascript",src:(0,c.pathJoin)(B.resourcesPath,s)})})),void 0!==s.kcHtmlClass){var n=document.getElementsByTagName("html")[0].classList,o=(0,t.W)(s.kcHtmlClass).split(" ");n.add.apply(n,(0,r.Z)(o)),a.push((function(){return n.remove.apply(n,(0,r.Z)(o))}))}return function(){e=!0,a.forEach((function(s){return s()}))}}J()}),[s.kcHtmlClass]),_?(0,u.jsxs)("div",{className:(0,t.W)(s.kcLoginClass),children:[(0,u.jsx)("div",{id:"kc-header",className:(0,t.W)(s.kcHeaderClass),children:(0,u.jsx)("div",{id:"kc-header-wrapper",className:(0,t.W)(s.kcHeaderWrapperClass),children:(0,u.jsx)("img",{src:p,alt:"Logo App"})})}),(0,u.jsxs)("div",{className:(0,t.W)(s.kcFormCardClass,N&&s.kcFormCardAccountClass),children:[(0,u.jsxs)("header",{className:(0,t.W)(s.kcFormHeaderClass),children:[R.internationalizationEnabled&&((0,n.h)(void 0!==U),!0)&&U.supported.length>1&&(0,u.jsx)("div",{id:"kc-locale",children:(0,u.jsx)("div",{id:"kc-locale-wrapper",className:(0,t.W)(s.kcLocaleWrapperClass),children:(0,u.jsxs)("div",{className:"kc-dropdown",id:"kc-locale-dropdown",children:[(0,u.jsx)("a",{href:"#",id:"kc-current-locale-link",children:S[T]}),(0,u.jsx)("ul",{children:U.supported.map((function(s){var e=s.languageTag;return(0,u.jsx)("li",{className:"kc-dropdown-item",children:(0,u.jsx)("a",{href:"#",onClick:Z(e),children:S[e]})},e)}))})]})})}),void 0===P||!P.showUsername||P.showResetCredentials?f?(0,u.jsxs)("div",{className:(0,t.W)(s.kcContentWrapperClass),children:[(0,u.jsx)("div",{className:(0,t.W)(s.kcLabelWrapperClass,"subtitle"),children:(0,u.jsxs)("span",{className:"subtitle",children:[(0,u.jsx)("span",{className:"required",children:"*"}),A("requiredFields")]})}),(0,u.jsx)("div",{className:"col-md-10",children:(0,u.jsx)("h1",{id:"kc-page-title",children:v})})]}):(0,u.jsx)("h1",{id:"kc-page-title",children:v}):f?(0,u.jsxs)("div",{className:(0,t.W)(s.kcContentWrapperClass),children:[(0,u.jsx)("div",{className:(0,t.W)(s.kcLabelWrapperClass,"subtitle"),children:(0,u.jsxs)("span",{className:"subtitle",children:[(0,u.jsx)("span",{className:"required",children:"*"})," ",A("requiredFields")]})}),(0,u.jsxs)("div",{className:"col-md-10",children:[y,(0,u.jsx)("div",{className:(0,t.W)(s.kcFormGroupClass),children:(0,u.jsxs)("div",{id:"kc-username",children:[(0,u.jsx)("label",{id:"kc-attempted-username",children:null===P||void 0===P?void 0:P.attemptedUsername}),(0,u.jsx)("a",{id:"reset-login",href:B.loginRestartFlowUrl,children:(0,u.jsxs)("div",{className:"kc-login-tooltip",children:[(0,u.jsx)("i",{className:(0,t.W)(s.kcResetFlowIcon)}),(0,u.jsx)("span",{className:"kc-tooltip-text",children:A("restartLoginTooltip")})]})})]})})]})]}):(0,u.jsxs)(u.Fragment,{children:[y,(0,u.jsx)("div",{className:(0,t.W)(s.kcFormGroupClass),children:(0,u.jsxs)("div",{id:"kc-username",children:[(0,u.jsx)("label",{id:"kc-attempted-username",children:null===P||void 0===P?void 0:P.attemptedUsername}),(0,u.jsx)("a",{id:"reset-login",href:B.loginRestartFlowUrl,children:(0,u.jsxs)("div",{className:"kc-login-tooltip",children:[(0,u.jsx)("i",{className:(0,t.W)(s.kcResetFlowIcon)}),(0,u.jsx)("span",{className:"kc-tooltip-text",children:A("restartLoginTooltip")})]})})]})})]})]}),(0,u.jsx)("div",{id:"kc-content",children:(0,u.jsxs)("div",{id:"kc-content-wrapper",children:[k&&void 0!==q&&("warning"!==q.type||!D)&&(0,u.jsxs)("div",{className:(0,t.W)("alert","alert-".concat(q.type)),children:["success"===q.type&&(0,u.jsx)("span",{className:(0,t.W)(s.kcFeedbackSuccessIcon),style:{background:"none"}}),"warning"===q.type&&(0,u.jsx)("span",{className:(0,t.W)(s.kcFeedbackWarningIcon),style:{background:"none"}}),"error"===q.type&&(0,u.jsx)("span",{className:(0,t.W)(s.kcFeedbackErrorIcon),style:{background:"none"}}),"info"===q.type&&(0,u.jsx)("span",{className:(0,t.W)(s.kcFeedbackInfoIcon),style:{background:"none"}}),(0,u.jsx)("span",{className:"kc-feedback-text",style:{background:"none"},dangerouslySetInnerHTML:{__html:q.summary}})]}),b,void 0!==P&&P.showTryAnotherWayLink&&W&&(0,u.jsx)("form",{id:"kc-select-try-another-way-form",action:B.loginAction,method:"post",className:(0,t.W)(N&&s.kcContentWrapperClass),children:(0,u.jsx)("div",{className:(0,t.W)(N&&[s.kcFormSocialAccountContentClass,s.kcFormSocialAccountClass]),children:(0,u.jsxs)("div",{className:(0,t.W)(s.kcFormGroupClass),children:[(0,u.jsx)("input",{type:"hidden",name:"tryAnotherWay",value:"on"}),(0,u.jsx)("a",{href:"#",id:"try-another-way",onClick:O,children:A("doTryAnotherWay")})]})})}),a&&(0,u.jsx)("div",{id:"kc-info",className:(0,t.W)(s.kcSignUpClass),children:(0,u.jsx)("div",{id:"kc-info-wrapper",className:(0,t.W)(s.kcInfoAreaWrapperClass),children:w})})]})})]})]}):null}))},4925:function(s,e,a){function r(s,e){if(null==s)return{};var a,r,l=function(s,e){if(null==s)return{};var a,r,l={},c=Object.keys(s);for(r=0;r<c.length;r++)a=c[r],e.indexOf(a)>=0||(l[a]=s[a]);return l}(s,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(s);for(r=0;r<c.length;r++)a=c[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(s,a)&&(l[a]=s[a])}return l}a.d(e,{Z:function(){return r}})}}]);
//# sourceMappingURL=8295.337eb94f.chunk.js.map