"use strict";(self.webpackChunkkeycloakify_advanced_starter=self.webpackChunkkeycloakify_advanced_starter||[]).push([[411],{6985:function(e,s,n){n.r(s);var a=n(1413),r=n(4925),c=n(2791),i=n(4455),l=n(184),t=["kcContext","i18n","doFetchDefaultThemeResources","Template"],o=(0,c.memo)((function(e){var s=e.kcContext,n=e.i18n,c=e.doFetchDefaultThemeResources,o=void 0===c||c,d=e.Template,u=void 0===d?i.Z:d,m=(0,r.Z)(e,t),p=s.url,h=s.realm,k=s.brokerContext,f=s.idpAlias,x=n.msg;return(0,l.jsx)(u,(0,a.Z)((0,a.Z)({},(0,a.Z)({kcContext:s,i18n:n,doFetchDefaultThemeResources:o},m)),{},{headerNode:x("emailLinkIdpTitle",f),formNode:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{id:"instruction1",className:"instruction",children:x("emailLinkIdp1",f,k.username,h.displayName)}),(0,l.jsxs)("p",{id:"instruction2",className:"instruction",children:[x("emailLinkIdp2")," ",(0,l.jsx)("a",{href:p.loginAction,children:x("doClickHere")})," ",x("emailLinkIdp3")]}),(0,l.jsxs)("p",{id:"instruction3",className:"instruction",children:[x("emailLinkIdp4")," ",(0,l.jsx)("a",{href:p.loginAction,children:x("doClickHere")})," ",x("emailLinkIdp5")]})]})}))}));s.default=o},4455:function(e,s,n){n.d(s,{Z:function(){return h}});var a=n(2982),r=n(885),c=n(6196),i=n(5769),l=n(8358),t=n(2228),o=n(8737),d=n(8282),u=n(2791),m=window.kcContext.url.resourcesPath + "/build/static/media/teste-logo.4fe11b94e4aef8519f24.png",p=n(184),h=(0,u.memo)((function(e){var s=e.displayInfo,n=void 0!==s&&s,h=e.displayMessage,k=void 0===h||h,f=e.displayRequiredFields,x=void 0!==f&&f,j=e.displayWide,v=void 0!==j&&j,y=e.showAnotherWayIfPresent,g=void 0===y||y,N=e.headerNode,C=e.showUsernameNode,W=void 0===C?null:C,b=e.formNode,F=e.infoNode,w=void 0===F?null:F,I=e.kcContext,L=e.i18n,T=e.doFetchDefaultThemeResources,A=L.msg,Z=L.changeLocale,R=L.labelBySupportedLanguageTag,H=L.currentLanguageTag,O=(0,o.useCallbackFactory)((function(e){var s=(0,r.Z)(e,1)[0];return Z(s)})),S=(0,d.useConstCallback)((function(){return document.forms["kc-select-try-another-way-form"].submit(),!1})),E=I.realm,P=I.locale,U=I.auth,_=I.url,q=I.message,D=I.isAppInitiatedAction,G=(0,u.useReducer)((function(){return!0}),!1),J=(0,r.Z)(G,2),B=J[0],M=J[1];return(0,u.useEffect)((function(){if(T){var s=!1,n=[],r=function(e){return"string"===typeof e?e.split(" "):null!==e&&void 0!==e?e:[]};if(Promise.all([].concat((0,a.Z)(r(e.stylesCommon).map((function(e){return(0,c.pathJoin)(_.resourcesCommonPath,e)}))),(0,a.Z)(r(e.styles).map((function(e){return(0,c.pathJoin)(_.resourcesPath,e)})))).reverse().map((function(e){return(0,t.t)({type:"css",href:e,position:"prepend"})}))).then((function(){s||M()})),r(e.scripts).forEach((function(e){return(0,t.t)({type:"javascript",src:(0,c.pathJoin)(_.resourcesPath,e)})})),void 0!==e.kcHtmlClass){var i=document.getElementsByTagName("html")[0].classList,o=(0,l.W)(e.kcHtmlClass).split(" ");i.add.apply(i,(0,a.Z)(o)),n.push((function(){return i.remove.apply(i,(0,a.Z)(o))}))}return function(){s=!0,n.forEach((function(e){return e()}))}}M()}),[e.kcHtmlClass]),B?(0,p.jsxs)("div",{className:(0,l.W)(e.kcLoginClass),children:[(0,p.jsx)("div",{id:"kc-header",className:(0,l.W)(e.kcHeaderClass),children:(0,p.jsx)("div",{id:"kc-header-wrapper",className:(0,l.W)(e.kcHeaderWrapperClass),children:(0,p.jsx)("img",{src:m,alt:"Logo App"})})}),(0,p.jsxs)("div",{className:(0,l.W)(e.kcFormCardClass,v&&e.kcFormCardAccountClass),children:[(0,p.jsxs)("header",{className:(0,l.W)(e.kcFormHeaderClass),children:[E.internationalizationEnabled&&((0,i.h)(void 0!==P),!0)&&P.supported.length>1&&(0,p.jsx)("div",{id:"kc-locale",children:(0,p.jsx)("div",{id:"kc-locale-wrapper",className:(0,l.W)(e.kcLocaleWrapperClass),children:(0,p.jsxs)("div",{className:"kc-dropdown",id:"kc-locale-dropdown",children:[(0,p.jsx)("a",{href:"#",id:"kc-current-locale-link",children:R[H]}),(0,p.jsx)("ul",{children:P.supported.map((function(e){var s=e.languageTag;return(0,p.jsx)("li",{className:"kc-dropdown-item",children:(0,p.jsx)("a",{href:"#",onClick:O(s),children:R[s]})},s)}))})]})})}),void 0===U||!U.showUsername||U.showResetCredentials?x?(0,p.jsxs)("div",{className:(0,l.W)(e.kcContentWrapperClass),children:[(0,p.jsx)("div",{className:(0,l.W)(e.kcLabelWrapperClass,"subtitle"),children:(0,p.jsxs)("span",{className:"subtitle",children:[(0,p.jsx)("span",{className:"required",children:"*"}),A("requiredFields")]})}),(0,p.jsx)("div",{className:"col-md-10",children:(0,p.jsx)("h1",{id:"kc-page-title",children:N})})]}):(0,p.jsx)("h1",{id:"kc-page-title",children:N}):x?(0,p.jsxs)("div",{className:(0,l.W)(e.kcContentWrapperClass),children:[(0,p.jsx)("div",{className:(0,l.W)(e.kcLabelWrapperClass,"subtitle"),children:(0,p.jsxs)("span",{className:"subtitle",children:[(0,p.jsx)("span",{className:"required",children:"*"})," ",A("requiredFields")]})}),(0,p.jsxs)("div",{className:"col-md-10",children:[W,(0,p.jsx)("div",{className:(0,l.W)(e.kcFormGroupClass),children:(0,p.jsxs)("div",{id:"kc-username",children:[(0,p.jsx)("label",{id:"kc-attempted-username",children:null===U||void 0===U?void 0:U.attemptedUsername}),(0,p.jsx)("a",{id:"reset-login",href:_.loginRestartFlowUrl,children:(0,p.jsxs)("div",{className:"kc-login-tooltip",children:[(0,p.jsx)("i",{className:(0,l.W)(e.kcResetFlowIcon)}),(0,p.jsx)("span",{className:"kc-tooltip-text",children:A("restartLoginTooltip")})]})})]})})]})]}):(0,p.jsxs)(p.Fragment,{children:[W,(0,p.jsx)("div",{className:(0,l.W)(e.kcFormGroupClass),children:(0,p.jsxs)("div",{id:"kc-username",children:[(0,p.jsx)("label",{id:"kc-attempted-username",children:null===U||void 0===U?void 0:U.attemptedUsername}),(0,p.jsx)("a",{id:"reset-login",href:_.loginRestartFlowUrl,children:(0,p.jsxs)("div",{className:"kc-login-tooltip",children:[(0,p.jsx)("i",{className:(0,l.W)(e.kcResetFlowIcon)}),(0,p.jsx)("span",{className:"kc-tooltip-text",children:A("restartLoginTooltip")})]})})]})})]})]}),(0,p.jsx)("div",{id:"kc-content",children:(0,p.jsxs)("div",{id:"kc-content-wrapper",children:[k&&void 0!==q&&("warning"!==q.type||!D)&&(0,p.jsxs)("div",{className:(0,l.W)("alert","alert-".concat(q.type)),children:["success"===q.type&&(0,p.jsx)("span",{className:(0,l.W)(e.kcFeedbackSuccessIcon),style:{background:"none"}}),"warning"===q.type&&(0,p.jsx)("span",{className:(0,l.W)(e.kcFeedbackWarningIcon),style:{background:"none"}}),"error"===q.type&&(0,p.jsx)("span",{className:(0,l.W)(e.kcFeedbackErrorIcon),style:{background:"none"}}),"info"===q.type&&(0,p.jsx)("span",{className:(0,l.W)(e.kcFeedbackInfoIcon),style:{background:"none"}}),(0,p.jsx)("span",{className:"kc-feedback-text",style:{background:"none"},dangerouslySetInnerHTML:{__html:q.summary}})]}),b,void 0!==U&&U.showTryAnotherWayLink&&g&&(0,p.jsx)("form",{id:"kc-select-try-another-way-form",action:_.loginAction,method:"post",className:(0,l.W)(v&&e.kcContentWrapperClass),children:(0,p.jsx)("div",{className:(0,l.W)(v&&[e.kcFormSocialAccountContentClass,e.kcFormSocialAccountClass]),children:(0,p.jsxs)("div",{className:(0,l.W)(e.kcFormGroupClass),children:[(0,p.jsx)("input",{type:"hidden",name:"tryAnotherWay",value:"on"}),(0,p.jsx)("a",{href:"#",id:"try-another-way",onClick:S,children:A("doTryAnotherWay")})]})})}),n&&(0,p.jsx)("div",{id:"kc-info",className:(0,l.W)(e.kcSignUpClass),children:(0,p.jsx)("div",{id:"kc-info-wrapper",className:(0,l.W)(e.kcInfoAreaWrapperClass),children:w})})]})})]})]}):null}))},4925:function(e,s,n){function a(e,s){if(null==e)return{};var n,a,r=function(e,s){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],s.indexOf(n)>=0||(r[n]=e[n]);return r}(e,s);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],s.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(s,{Z:function(){return a}})}}]);
//# sourceMappingURL=411.62f565b5.chunk.js.map