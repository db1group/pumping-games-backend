"use strict";(self.webpackChunkkeycloakify_advanced_starter=self.webpackChunkkeycloakify_advanced_starter||[]).push([[1296],{4104:function(e,s,a){a.r(s);var r=a(1413),n=a(885),c=a(4925),l=a(2791),i=a(4455),o=a(8358),t=a(8282),d=a(184),m=["kcContext","i18n","doFetchDefaultThemeResources","Template"],u=(0,l.memo)((function(e){var s=e.kcContext,a=e.i18n,u=e.doFetchDefaultThemeResources,p=void 0===u||u,h=e.Template,k=void 0===h?i.Z:h,x=(0,c.Z)(e,m),v=s.social,f=s.realm,j=s.url,g=s.usernameHidden,C=s.login,y=s.registrationDisabled,N=a.msg,b=a.msgStr,W=(0,l.useState)(!1),F=(0,n.Z)(W,2),w=F[0],A=F[1],I=(0,t.useConstCallback)((function(e){var s;e.preventDefault(),A(!0);var a=e.target;null===(s=a.querySelector("input[name='email']"))||void 0===s||s.setAttribute("name","username"),a.submit()}));return(0,d.jsx)(k,(0,r.Z)((0,r.Z)({},(0,r.Z)({kcContext:s,i18n:a,doFetchDefaultThemeResources:p},x)),{},{displayInfo:v.displayInfo,displayWide:f.password&&void 0!==v.providers,headerNode:N("doLogIn"),formNode:(0,d.jsxs)("div",{id:"kc-form",className:(0,o.W)(f.password&&void 0!==v.providers&&x.kcContentWrapperClass),children:[(0,d.jsx)("div",{id:"kc-form-wrapper",className:(0,o.W)(f.password&&v.providers&&[x.kcFormSocialAccountContentClass,x.kcFormSocialAccountClass]),children:f.password&&(0,d.jsxs)("form",{id:"kc-form-login",onSubmit:I,action:j.loginAction,method:"post",children:[(0,d.jsx)("div",{className:(0,o.W)(x.kcFormGroupClass),children:!g&&function(){var e,s=f.loginWithEmailAllowed?f.registrationEmailAsUsername?"email":"usernameOrEmail":"username",a="usernameOrEmail"===s?"username":s;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("label",{htmlFor:a,className:(0,o.W)(x.kcLabelClass),children:N(s)}),(0,d.jsx)("input",{tabIndex:1,id:a,className:(0,o.W)(x.kcInputClass),name:a,defaultValue:null!==(e=C.username)&&void 0!==e?e:"",type:"text",autoFocus:!0,autoComplete:"off"})]})}()}),(0,d.jsx)("div",{className:(0,o.W)(x.kcFormGroupClass,x.kcFormSettingClass),children:(0,d.jsx)("div",{id:"kc-form-options",children:f.rememberMe&&!g&&(0,d.jsx)("div",{className:"checkbox",children:(0,d.jsxs)("label",{children:[(0,d.jsx)("input",(0,r.Z)({tabIndex:3,id:"rememberMe",name:"rememberMe",type:"checkbox"},C.rememberMe?{checked:!0}:{})),N("rememberMe")]})})})}),(0,d.jsx)("div",{id:"kc-form-buttons",className:(0,o.W)(x.kcFormGroupClass),children:(0,d.jsx)("input",{tabIndex:4,className:(0,o.W)(x.kcButtonClass,x.kcButtonPrimaryClass,x.kcButtonBlockClass,x.kcButtonLargeClass),name:"login",id:"kc-login",type:"submit",value:b("doLogIn"),disabled:w})})]})}),f.password&&void 0!==v.providers&&(0,d.jsx)("div",{id:"kc-social-providers",className:(0,o.W)(x.kcFormSocialAccountContentClass,x.kcFormSocialAccountClass),children:(0,d.jsx)("ul",{className:(0,o.W)(x.kcFormSocialAccountListClass,v.providers.length>4&&x.kcFormSocialAccountDoubleListClass),children:v.providers.map((function(e){return(0,d.jsx)("li",{className:(0,o.W)(x.kcFormSocialAccountListLinkClass),children:(0,d.jsx)("a",{href:e.loginUrl,id:"zocial-".concat(e.alias),className:(0,o.W)("zocial",e.providerId),children:(0,d.jsx)("span",{children:e.displayName})})},e.providerId)}))})})]}),infoNode:f.password&&f.registrationAllowed&&!y&&(0,d.jsx)("div",{id:"kc-registration",children:(0,d.jsxs)("span",{children:[N("noAccount"),(0,d.jsx)("a",{tabIndex:6,href:j.registrationUrl,children:N("doRegister")})]})})}))}));s.default=u},4455:function(e,s,a){a.d(s,{Z:function(){return h}});var r=a(2982),n=a(885),c=a(6196),l=a(5769),i=a(8358),o=a(2228),t=a(8737),d=a(8282),m=a(2791),u=window.kcContext.url.resourcesPath + "/build/static/media/teste-logo.4fe11b94e4aef8519f24.png",p=a(184),h=(0,m.memo)((function(e){var s=e.displayInfo,a=void 0!==s&&s,h=e.displayMessage,k=void 0===h||h,x=e.displayRequiredFields,v=void 0!==x&&x,f=e.displayWide,j=void 0!==f&&f,g=e.showAnotherWayIfPresent,C=void 0===g||g,y=e.headerNode,N=e.showUsernameNode,b=void 0===N?null:N,W=e.formNode,F=e.infoNode,w=void 0===F?null:F,A=e.kcContext,I=e.i18n,L=e.doFetchDefaultThemeResources,S=I.msg,T=I.changeLocale,Z=I.labelBySupportedLanguageTag,R=I.currentLanguageTag,E=(0,t.useCallbackFactory)((function(e){var s=(0,n.Z)(e,1)[0];return T(s)})),O=(0,d.useConstCallback)((function(){return document.forms["kc-select-try-another-way-form"].submit(),!1})),U=A.realm,H=A.locale,P=A.auth,B=A.url,D=A.message,M=A.isAppInitiatedAction,q=(0,m.useReducer)((function(){return!0}),!1),G=(0,n.Z)(q,2),_=G[0],z=G[1];return(0,m.useEffect)((function(){if(L){var s=!1,a=[],n=function(e){return"string"===typeof e?e.split(" "):null!==e&&void 0!==e?e:[]};if(Promise.all([].concat((0,r.Z)(n(e.stylesCommon).map((function(e){return(0,c.pathJoin)(B.resourcesCommonPath,e)}))),(0,r.Z)(n(e.styles).map((function(e){return(0,c.pathJoin)(B.resourcesPath,e)})))).reverse().map((function(e){return(0,o.t)({type:"css",href:e,position:"prepend"})}))).then((function(){s||z()})),n(e.scripts).forEach((function(e){return(0,o.t)({type:"javascript",src:(0,c.pathJoin)(B.resourcesPath,e)})})),void 0!==e.kcHtmlClass){var l=document.getElementsByTagName("html")[0].classList,t=(0,i.W)(e.kcHtmlClass).split(" ");l.add.apply(l,(0,r.Z)(t)),a.push((function(){return l.remove.apply(l,(0,r.Z)(t))}))}return function(){s=!0,a.forEach((function(e){return e()}))}}z()}),[e.kcHtmlClass]),_?(0,p.jsxs)("div",{className:(0,i.W)(e.kcLoginClass),children:[(0,p.jsx)("div",{id:"kc-header",className:(0,i.W)(e.kcHeaderClass),children:(0,p.jsx)("div",{id:"kc-header-wrapper",className:(0,i.W)(e.kcHeaderWrapperClass),children:(0,p.jsx)("a",{href:"https://www.db1.com.br/",children:(0,p.jsx)("img",{src:u,alt:"Logo App"})})})}),(0,p.jsxs)("div",{className:(0,i.W)(e.kcFormCardClass,j&&e.kcFormCardAccountClass),children:[(0,p.jsxs)("header",{className:(0,i.W)(e.kcFormHeaderClass),children:[U.internationalizationEnabled&&((0,l.h)(void 0!==H),!0)&&H.supported.length>1&&(0,p.jsx)("div",{id:"kc-locale",children:(0,p.jsx)("div",{id:"kc-locale-wrapper",className:(0,i.W)(e.kcLocaleWrapperClass),children:(0,p.jsxs)("div",{className:"kc-dropdown",id:"kc-locale-dropdown",children:[(0,p.jsx)("a",{href:"#",id:"kc-current-locale-link",children:Z[R]}),(0,p.jsx)("ul",{children:H.supported.map((function(e){var s=e.languageTag;return(0,p.jsx)("li",{className:"kc-dropdown-item",children:(0,p.jsx)("a",{href:"#",onClick:E(s),children:Z[s]})},s)}))})]})})}),void 0===P||!P.showUsername||P.showResetCredentials?v?(0,p.jsxs)("div",{className:(0,i.W)(e.kcContentWrapperClass),children:[(0,p.jsx)("div",{className:(0,i.W)(e.kcLabelWrapperClass,"subtitle"),children:(0,p.jsxs)("span",{className:"subtitle",children:[(0,p.jsx)("span",{className:"required",children:"*"}),S("requiredFields")]})}),(0,p.jsx)("div",{className:"col-md-10",children:(0,p.jsx)("h1",{id:"kc-page-title",children:y})})]}):(0,p.jsx)("h1",{id:"kc-page-title",children:y}):v?(0,p.jsxs)("div",{className:(0,i.W)(e.kcContentWrapperClass),children:[(0,p.jsx)("div",{className:(0,i.W)(e.kcLabelWrapperClass,"subtitle"),children:(0,p.jsxs)("span",{className:"subtitle",children:[(0,p.jsx)("span",{className:"required",children:"*"})," ",S("requiredFields")]})}),(0,p.jsxs)("div",{className:"col-md-10",children:[b,(0,p.jsx)("div",{className:(0,i.W)(e.kcFormGroupClass),children:(0,p.jsxs)("div",{id:"kc-username",children:[(0,p.jsx)("label",{id:"kc-attempted-username",children:null===P||void 0===P?void 0:P.attemptedUsername}),(0,p.jsx)("a",{id:"reset-login",href:B.loginRestartFlowUrl,children:(0,p.jsxs)("div",{className:"kc-login-tooltip",children:[(0,p.jsx)("i",{className:(0,i.W)(e.kcResetFlowIcon)}),(0,p.jsx)("span",{className:"kc-tooltip-text",children:S("restartLoginTooltip")})]})})]})})]})]}):(0,p.jsxs)(p.Fragment,{children:[b,(0,p.jsx)("div",{className:(0,i.W)(e.kcFormGroupClass),children:(0,p.jsxs)("div",{id:"kc-username",children:[(0,p.jsx)("label",{id:"kc-attempted-username",children:null===P||void 0===P?void 0:P.attemptedUsername}),(0,p.jsx)("a",{id:"reset-login",href:B.loginRestartFlowUrl,children:(0,p.jsxs)("div",{className:"kc-login-tooltip",children:[(0,p.jsx)("i",{className:(0,i.W)(e.kcResetFlowIcon)}),(0,p.jsx)("span",{className:"kc-tooltip-text",children:S("restartLoginTooltip")})]})})]})})]})]}),(0,p.jsx)("div",{id:"kc-content",children:(0,p.jsxs)("div",{id:"kc-content-wrapper",children:[k&&void 0!==D&&("warning"!==D.type||!M)&&(0,p.jsxs)("div",{className:(0,i.W)("alert","alert-".concat(D.type)),children:["success"===D.type&&(0,p.jsx)("span",{className:(0,i.W)(e.kcFeedbackSuccessIcon),style:{background:"none"}}),"warning"===D.type&&(0,p.jsx)("span",{className:(0,i.W)(e.kcFeedbackWarningIcon),style:{background:"none"}}),"error"===D.type&&(0,p.jsx)("span",{className:(0,i.W)(e.kcFeedbackErrorIcon),style:{background:"none"}}),"info"===D.type&&(0,p.jsx)("span",{className:(0,i.W)(e.kcFeedbackInfoIcon),style:{background:"none"}}),(0,p.jsx)("span",{className:"kc-feedback-text",style:{background:"none"},dangerouslySetInnerHTML:{__html:D.summary}})]}),W,void 0!==P&&P.showTryAnotherWayLink&&C&&(0,p.jsx)("form",{id:"kc-select-try-another-way-form",action:B.loginAction,method:"post",className:(0,i.W)(j&&e.kcContentWrapperClass),children:(0,p.jsx)("div",{className:(0,i.W)(j&&[e.kcFormSocialAccountContentClass,e.kcFormSocialAccountClass]),children:(0,p.jsxs)("div",{className:(0,i.W)(e.kcFormGroupClass),children:[(0,p.jsx)("input",{type:"hidden",name:"tryAnotherWay",value:"on"}),(0,p.jsx)("a",{href:"#",id:"try-another-way",onClick:O,children:S("doTryAnotherWay")})]})})}),a&&(0,p.jsx)("div",{id:"kc-info",className:(0,i.W)(e.kcSignUpClass),children:(0,p.jsx)("div",{id:"kc-info-wrapper",className:(0,i.W)(e.kcInfoAreaWrapperClass),children:w})})]})})]})]}):null}))},4925:function(e,s,a){function r(e,s){if(null==e)return{};var a,r,n=function(e,s){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],s.indexOf(a)>=0||(n[a]=e[a]);return n}(e,s);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],s.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}a.d(s,{Z:function(){return r}})}}]);
//# sourceMappingURL=1296.aa8a6cec.chunk.js.map