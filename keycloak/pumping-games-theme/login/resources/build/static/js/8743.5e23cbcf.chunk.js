"use strict";(self.webpackChunkkeycloakify_advanced_starter=self.webpackChunkkeycloakify_advanced_starter||[]).push([[8743],{9780:function(e,a,s){s.r(a);var n=s(1413),t=s(885),r=s(4925),l=s(2791),c=s(4455),o=s(8358),i=s(785),d=s(184),m=["kcContext","i18n","doFetchDefaultThemeResources","Template"],u=(0,l.memo)((function(e){var a=e.kcContext,s=e.i18n,u=e.doFetchDefaultThemeResources,p=void 0===u||u,h=e.Template,k=void 0===h?c.Z:h,f=(0,r.Z)(e,m),v=s.msg,x=s.msgStr,y=a.url,g=(0,l.useState)(!1),C=(0,t.Z)(g,2),j=C[0],b=C[1];return(0,d.jsx)(k,(0,n.Z)((0,n.Z)({},(0,n.Z)({kcContext:a,i18n:s,doFetchDefaultThemeResources:p},f)),{},{headerNode:v("loginIdpReviewProfileTitle"),formNode:(0,d.jsxs)("form",{id:"kc-idp-review-profile-form",className:(0,o.W)(f.kcFormClass),action:y.loginAction,method:"post",children:[(0,d.jsx)(i.M,(0,n.Z)({kcContext:a,onIsFormSubmittableValueChange:b,i18n:s},f)),(0,d.jsxs)("div",{className:(0,o.W)(f.kcFormGroupClass),children:[(0,d.jsx)("div",{id:"kc-form-options",className:(0,o.W)(f.kcFormOptionsClass),children:(0,d.jsx)("div",{className:(0,o.W)(f.kcFormOptionsWrapperClass)})}),(0,d.jsx)("div",{id:"kc-form-buttons",className:(0,o.W)(f.kcFormButtonsClass),children:(0,d.jsx)("input",{className:(0,o.W)(f.kcButtonClass,f.kcButtonPrimaryClass,f.kcButtonBlockClass,f.kcButtonLargeClass),type:"submit",value:x("doSubmit"),disabled:!j})})]})]})}))}));a.default=u},4455:function(e,a,s){s.d(a,{Z:function(){return h}});var n=s(2982),t=s(885),r=s(6196),l=s(5769),c=s(8358),o=s(2228),i=s(8737),d=s(8282),m=s(2791),u=window.kcContext.url.resourcesPath + "/build/static/media/teste-logo.4fe11b94e4aef8519f24.png",p=s(184),h=(0,m.memo)((function(e){var a=e.displayInfo,s=void 0!==a&&a,h=e.displayMessage,k=void 0===h||h,f=e.displayRequiredFields,v=void 0!==f&&f,x=e.displayWide,y=void 0!==x&&x,g=e.showAnotherWayIfPresent,C=void 0===g||g,j=e.headerNode,b=e.showUsernameNode,N=void 0===b?null:b,W=e.formNode,F=e.infoNode,w=void 0===F?null:F,E=e.kcContext,I=e.i18n,O=e.doFetchDefaultThemeResources,S=I.msg,L=I.changeLocale,Z=I.labelBySupportedLanguageTag,A=I.currentLanguageTag,T=(0,i.useCallbackFactory)((function(e){var a=(0,t.Z)(e,1)[0];return L(a)})),B=(0,d.useConstCallback)((function(){return document.forms["kc-select-try-another-way-form"].submit(),!1})),P=E.realm,R=E.locale,H=E.auth,D=E.url,G=E.message,M=E.isAppInitiatedAction,U=(0,m.useReducer)((function(){return!0}),!1),q=(0,t.Z)(U,2),V=q[0],_=q[1];return(0,m.useEffect)((function(){if(O){var a=!1,s=[],t=function(e){return"string"===typeof e?e.split(" "):null!==e&&void 0!==e?e:[]};if(Promise.all([].concat((0,n.Z)(t(e.stylesCommon).map((function(e){return(0,r.pathJoin)(D.resourcesCommonPath,e)}))),(0,n.Z)(t(e.styles).map((function(e){return(0,r.pathJoin)(D.resourcesPath,e)})))).reverse().map((function(e){return(0,o.t)({type:"css",href:e,position:"prepend"})}))).then((function(){a||_()})),t(e.scripts).forEach((function(e){return(0,o.t)({type:"javascript",src:(0,r.pathJoin)(D.resourcesPath,e)})})),void 0!==e.kcHtmlClass){var l=document.getElementsByTagName("html")[0].classList,i=(0,c.W)(e.kcHtmlClass).split(" ");l.add.apply(l,(0,n.Z)(i)),s.push((function(){return l.remove.apply(l,(0,n.Z)(i))}))}return function(){a=!0,s.forEach((function(e){return e()}))}}_()}),[e.kcHtmlClass]),V?(0,p.jsxs)("div",{className:(0,c.W)(e.kcLoginClass),children:[(0,p.jsx)("div",{id:"kc-header",className:(0,c.W)(e.kcHeaderClass),children:(0,p.jsx)("div",{id:"kc-header-wrapper",className:(0,c.W)(e.kcHeaderWrapperClass),children:(0,p.jsx)("img",{src:u,alt:"Logo App"})})}),(0,p.jsxs)("div",{className:(0,c.W)(e.kcFormCardClass,y&&e.kcFormCardAccountClass),children:[(0,p.jsxs)("header",{className:(0,c.W)(e.kcFormHeaderClass),children:[P.internationalizationEnabled&&((0,l.h)(void 0!==R),!0)&&R.supported.length>1&&(0,p.jsx)("div",{id:"kc-locale",children:(0,p.jsx)("div",{id:"kc-locale-wrapper",className:(0,c.W)(e.kcLocaleWrapperClass),children:(0,p.jsxs)("div",{className:"kc-dropdown",id:"kc-locale-dropdown",children:[(0,p.jsx)("a",{href:"#",id:"kc-current-locale-link",children:Z[A]}),(0,p.jsx)("ul",{children:R.supported.map((function(e){var a=e.languageTag;return(0,p.jsx)("li",{className:"kc-dropdown-item",children:(0,p.jsx)("a",{href:"#",onClick:T(a),children:Z[a]})},a)}))})]})})}),void 0===H||!H.showUsername||H.showResetCredentials?v?(0,p.jsxs)("div",{className:(0,c.W)(e.kcContentWrapperClass),children:[(0,p.jsx)("div",{className:(0,c.W)(e.kcLabelWrapperClass,"subtitle"),children:(0,p.jsxs)("span",{className:"subtitle",children:[(0,p.jsx)("span",{className:"required",children:"*"}),S("requiredFields")]})}),(0,p.jsx)("div",{className:"col-md-10",children:(0,p.jsx)("h1",{id:"kc-page-title",children:j})})]}):(0,p.jsx)("h1",{id:"kc-page-title",children:j}):v?(0,p.jsxs)("div",{className:(0,c.W)(e.kcContentWrapperClass),children:[(0,p.jsx)("div",{className:(0,c.W)(e.kcLabelWrapperClass,"subtitle"),children:(0,p.jsxs)("span",{className:"subtitle",children:[(0,p.jsx)("span",{className:"required",children:"*"})," ",S("requiredFields")]})}),(0,p.jsxs)("div",{className:"col-md-10",children:[N,(0,p.jsx)("div",{className:(0,c.W)(e.kcFormGroupClass),children:(0,p.jsxs)("div",{id:"kc-username",children:[(0,p.jsx)("label",{id:"kc-attempted-username",children:null===H||void 0===H?void 0:H.attemptedUsername}),(0,p.jsx)("a",{id:"reset-login",href:D.loginRestartFlowUrl,children:(0,p.jsxs)("div",{className:"kc-login-tooltip",children:[(0,p.jsx)("i",{className:(0,c.W)(e.kcResetFlowIcon)}),(0,p.jsx)("span",{className:"kc-tooltip-text",children:S("restartLoginTooltip")})]})})]})})]})]}):(0,p.jsxs)(p.Fragment,{children:[N,(0,p.jsx)("div",{className:(0,c.W)(e.kcFormGroupClass),children:(0,p.jsxs)("div",{id:"kc-username",children:[(0,p.jsx)("label",{id:"kc-attempted-username",children:null===H||void 0===H?void 0:H.attemptedUsername}),(0,p.jsx)("a",{id:"reset-login",href:D.loginRestartFlowUrl,children:(0,p.jsxs)("div",{className:"kc-login-tooltip",children:[(0,p.jsx)("i",{className:(0,c.W)(e.kcResetFlowIcon)}),(0,p.jsx)("span",{className:"kc-tooltip-text",children:S("restartLoginTooltip")})]})})]})})]})]}),(0,p.jsx)("div",{id:"kc-content",children:(0,p.jsxs)("div",{id:"kc-content-wrapper",children:[k&&void 0!==G&&("warning"!==G.type||!M)&&(0,p.jsxs)("div",{className:(0,c.W)("alert","alert-".concat(G.type)),children:["success"===G.type&&(0,p.jsx)("span",{className:(0,c.W)(e.kcFeedbackSuccessIcon),style:{background:"none"}}),"warning"===G.type&&(0,p.jsx)("span",{className:(0,c.W)(e.kcFeedbackWarningIcon),style:{background:"none"}}),"error"===G.type&&(0,p.jsx)("span",{className:(0,c.W)(e.kcFeedbackErrorIcon),style:{background:"none"}}),"info"===G.type&&(0,p.jsx)("span",{className:(0,c.W)(e.kcFeedbackInfoIcon),style:{background:"none"}}),(0,p.jsx)("span",{className:"kc-feedback-text",style:{background:"none"},dangerouslySetInnerHTML:{__html:G.summary}})]}),W,void 0!==H&&H.showTryAnotherWayLink&&C&&(0,p.jsx)("form",{id:"kc-select-try-another-way-form",action:D.loginAction,method:"post",className:(0,c.W)(y&&e.kcContentWrapperClass),children:(0,p.jsx)("div",{className:(0,c.W)(y&&[e.kcFormSocialAccountContentClass,e.kcFormSocialAccountClass]),children:(0,p.jsxs)("div",{className:(0,c.W)(e.kcFormGroupClass),children:[(0,p.jsx)("input",{type:"hidden",name:"tryAnotherWay",value:"on"}),(0,p.jsx)("a",{href:"#",id:"try-another-way",onClick:B,children:S("doTryAnotherWay")})]})})}),s&&(0,p.jsx)("div",{id:"kc-info",className:(0,c.W)(e.kcSignUpClass),children:(0,p.jsx)("div",{id:"kc-info-wrapper",className:(0,c.W)(e.kcInfoAreaWrapperClass),children:w})})]})})]})]}):null}))},785:function(e,a,s){s.d(a,{M:function(){return i}});var n=s(885),t=s(2791),r=s(8358),l=s(8737),c=s(5006),o=function(e,a){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(s[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var t=0;for(n=Object.getOwnPropertySymbols(e);t<n.length;t++)a.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(s[n[t]]=e[n[t]])}return s},i=(0,t.memo)((function(e){var a=e.kcContext,s=e.onIsFormSubmittableValueChange,i=e.i18n,d=e.BeforeField,m=e.AfterField,u=o(e,["kcContext","onIsFormSubmittableValueChange","i18n","BeforeField","AfterField"]),p=i.advancedMsg,h=(0,c.H)({kcContext:a,i18n:i}),k=h.formValidationState,f=k.fieldStateByAttributeName,v=k.isFormSubmittable,x=h.formValidationReducer,y=h.attributesWithPassword;(0,t.useEffect)((function(){s(v)}),[v]);var g=(0,l.useCallbackFactory)((function(e,a){var s=(0,n.Z)(e,1)[0],t=(0,n.Z)(a,1)[0].target.value;return x({action:"update value",name:s,newValue:t})})),C=(0,l.useCallbackFactory)((function(e){var a=(0,n.Z)(e,1)[0];return x({action:"focus lost",name:a})})),j="";return t.createElement(t.Fragment,null,y.map((function(e,a){var s,n=e.group,l=void 0===n?"":n,c=e.groupDisplayHeader,o=void 0===c?"":c,i=e.groupDisplayDescription,h=void 0===i?"":i,k=f[e.name],v=k.value,x=k.displayableErrors,y=(0,r.W)(u.kcFormGroupClass,0!==x.length&&u.kcFormGroupErrorClass);return t.createElement(t.Fragment,{key:a},l!==j&&""!==(j=l)&&t.createElement("div",{className:y},t.createElement("div",{className:(0,r.W)(u.kcContentWrapperClass)},t.createElement("label",{id:"header-".concat(l),className:(0,r.W)(u.kcFormGroupHeader)},p(o)||j)),""!==h&&t.createElement("div",{className:(0,r.W)(u.kcLabelWrapperClass)},t.createElement("label",{id:"description-".concat(l),className:"".concat((0,r.W)(u.kcLabelClass))},p(h)))),d&&t.createElement(d,{attribute:e}),t.createElement("div",{className:y},t.createElement("div",{className:(0,r.W)(u.kcLabelWrapperClass)},t.createElement("label",{htmlFor:e.name,className:(0,r.W)(u.kcLabelClass)},p(null!==(s=e.displayName)&&void 0!==s?s:"")),e.required&&t.createElement(t.Fragment,null,"*")),t.createElement("div",{className:(0,r.W)(u.kcInputWrapperClass)},function(){var a=e.validators.options;return void 0!==a?t.createElement("select",{id:e.name,name:e.name,onChange:g(e.name),onBlur:C(e.name),value:v},a.options.map((function(e){return t.createElement("option",{key:e,value:e},e)}))):t.createElement("input",{type:function(){switch(e.name){case"password-confirm":case"password":return"password";default:return"text"}}(),id:e.name,name:e.name,value:v,onChange:g(e.name),className:(0,r.W)(u.kcInputClass),"aria-invalid":0!==x.length,disabled:e.readOnly,autoComplete:e.autocomplete,onBlur:C(e.name)})}(),0!==x.length&&function(){var a="input-error-".concat(e.name);return t.createElement(t.Fragment,null,t.createElement("style",null,"#".concat(a," > span: { display: block; }")),t.createElement("span",{id:a,className:(0,r.W)(u.kcInputErrorMessageClass),style:{position:1===x.length?"absolute":void 0},"aria-live":"polite"},x.map((function(e){return e.errorMessage}))))}())),m&&t.createElement(m,{attribute:e}))})))}))},4925:function(e,a,s){function n(e,a){if(null==e)return{};var s,n,t=function(e,a){if(null==e)return{};var s,n,t={},r=Object.keys(e);for(n=0;n<r.length;n++)s=r[n],a.indexOf(s)>=0||(t[s]=e[s]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)s=r[n],a.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(t[s]=e[s])}return t}s.d(a,{Z:function(){return n}})}}]);
//# sourceMappingURL=8743.5e23cbcf.chunk.js.map