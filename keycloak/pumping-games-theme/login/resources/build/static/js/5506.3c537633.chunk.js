"use strict";(self.webpackChunkkeycloakify_advanced_starter=self.webpackChunkkeycloakify_advanced_starter||[]).push([[5506],{4545:function(e,s,a){a.r(s);var n=a(1413),r=a(4925),c=a(2791),i=a(4455),l=a(184),t=["kcContext","i18n","doFetchDefaultThemeResources","Template"],o=(0,c.memo)((function(e){var s=e.kcContext,a=e.i18n,c=e.doFetchDefaultThemeResources,o=void 0===c||c,d=e.Template,u=void 0===d?i.Z:d,m=(0,r.Z)(e,t),p=a.msg,h=s.url,k=s.user;return(0,l.jsx)(u,(0,n.Z)((0,n.Z)({},(0,n.Z)({kcContext:s,i18n:a,doFetchDefaultThemeResources:o},m)),{},{displayMessage:!1,headerNode:p("emailVerifyTitle"),formNode:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{className:"instruction",children:p("emailVerifyInstruction1",null===k||void 0===k?void 0:k.email)}),(0,l.jsxs)("p",{className:"instruction",children:[p("emailVerifyInstruction2"),(0,l.jsx)("br",{}),(0,l.jsx)("a",{href:h.loginAction,children:p("doClickHere")}),"\xa0",p("emailVerifyInstruction3")]})]})}))}));s.default=o},4455:function(e,s,a){a.d(s,{Z:function(){return h}});var n=a(2982),r=a(885),c=a(6196),i=a(5769),l=a(8358),t=a(2228),o=a(8737),d=a(8282),u=a(2791),m=window.kcContext.url.resourcesPath + "/build/static/media/teste-logo.4fe11b94e4aef8519f24.png",p=a(184),h=(0,u.memo)((function(e){var s=e.displayInfo,a=void 0!==s&&s,h=e.displayMessage,k=void 0===h||h,f=e.displayRequiredFields,x=void 0!==f&&f,j=e.displayWide,v=void 0!==j&&j,y=e.showAnotherWayIfPresent,g=void 0===y||y,N=e.headerNode,C=e.showUsernameNode,W=void 0===C?null:C,b=e.formNode,F=e.infoNode,w=void 0===F?null:F,I=e.kcContext,T=e.i18n,A=e.doFetchDefaultThemeResources,L=T.msg,Z=T.changeLocale,R=T.labelBySupportedLanguageTag,H=T.currentLanguageTag,O=(0,o.useCallbackFactory)((function(e){var s=(0,r.Z)(e,1)[0];return Z(s)})),S=(0,d.useConstCallback)((function(){return document.forms["kc-select-try-another-way-form"].submit(),!1})),E=I.realm,P=I.locale,U=I.auth,_=I.url,q=I.message,D=I.isAppInitiatedAction,V=(0,u.useReducer)((function(){return!0}),!1),G=(0,r.Z)(V,2),J=G[0],M=G[1];return(0,u.useEffect)((function(){if(A){var s=!1,a=[],r=function(e){return"string"===typeof e?e.split(" "):null!==e&&void 0!==e?e:[]};if(Promise.all([].concat((0,n.Z)(r(e.stylesCommon).map((function(e){return(0,c.pathJoin)(_.resourcesCommonPath,e)}))),(0,n.Z)(r(e.styles).map((function(e){return(0,c.pathJoin)(_.resourcesPath,e)})))).reverse().map((function(e){return(0,t.t)({type:"css",href:e,position:"prepend"})}))).then((function(){s||M()})),r(e.scripts).forEach((function(e){return(0,t.t)({type:"javascript",src:(0,c.pathJoin)(_.resourcesPath,e)})})),void 0!==e.kcHtmlClass){var i=document.getElementsByTagName("html")[0].classList,o=(0,l.W)(e.kcHtmlClass).split(" ");i.add.apply(i,(0,n.Z)(o)),a.push((function(){return i.remove.apply(i,(0,n.Z)(o))}))}return function(){s=!0,a.forEach((function(e){return e()}))}}M()}),[e.kcHtmlClass]),J?(0,p.jsxs)("div",{className:(0,l.W)(e.kcLoginClass),children:[(0,p.jsx)("div",{id:"kc-header",className:(0,l.W)(e.kcHeaderClass),children:(0,p.jsx)("div",{id:"kc-header-wrapper",className:(0,l.W)(e.kcHeaderWrapperClass),children:(0,p.jsx)("img",{src:m,alt:"Logo App"})})}),(0,p.jsxs)("div",{className:(0,l.W)(e.kcFormCardClass,v&&e.kcFormCardAccountClass),children:[(0,p.jsxs)("header",{className:(0,l.W)(e.kcFormHeaderClass),children:[E.internationalizationEnabled&&((0,i.h)(void 0!==P),!0)&&P.supported.length>1&&(0,p.jsx)("div",{id:"kc-locale",children:(0,p.jsx)("div",{id:"kc-locale-wrapper",className:(0,l.W)(e.kcLocaleWrapperClass),children:(0,p.jsxs)("div",{className:"kc-dropdown",id:"kc-locale-dropdown",children:[(0,p.jsx)("a",{href:"#",id:"kc-current-locale-link",children:R[H]}),(0,p.jsx)("ul",{children:P.supported.map((function(e){var s=e.languageTag;return(0,p.jsx)("li",{className:"kc-dropdown-item",children:(0,p.jsx)("a",{href:"#",onClick:O(s),children:R[s]})},s)}))})]})})}),void 0===U||!U.showUsername||U.showResetCredentials?x?(0,p.jsxs)("div",{className:(0,l.W)(e.kcContentWrapperClass),children:[(0,p.jsx)("div",{className:(0,l.W)(e.kcLabelWrapperClass,"subtitle"),children:(0,p.jsxs)("span",{className:"subtitle",children:[(0,p.jsx)("span",{className:"required",children:"*"}),L("requiredFields")]})}),(0,p.jsx)("div",{className:"col-md-10",children:(0,p.jsx)("h1",{id:"kc-page-title",children:N})})]}):(0,p.jsx)("h1",{id:"kc-page-title",children:N}):x?(0,p.jsxs)("div",{className:(0,l.W)(e.kcContentWrapperClass),children:[(0,p.jsx)("div",{className:(0,l.W)(e.kcLabelWrapperClass,"subtitle"),children:(0,p.jsxs)("span",{className:"subtitle",children:[(0,p.jsx)("span",{className:"required",children:"*"})," ",L("requiredFields")]})}),(0,p.jsxs)("div",{className:"col-md-10",children:[W,(0,p.jsx)("div",{className:(0,l.W)(e.kcFormGroupClass),children:(0,p.jsxs)("div",{id:"kc-username",children:[(0,p.jsx)("label",{id:"kc-attempted-username",children:null===U||void 0===U?void 0:U.attemptedUsername}),(0,p.jsx)("a",{id:"reset-login",href:_.loginRestartFlowUrl,children:(0,p.jsxs)("div",{className:"kc-login-tooltip",children:[(0,p.jsx)("i",{className:(0,l.W)(e.kcResetFlowIcon)}),(0,p.jsx)("span",{className:"kc-tooltip-text",children:L("restartLoginTooltip")})]})})]})})]})]}):(0,p.jsxs)(p.Fragment,{children:[W,(0,p.jsx)("div",{className:(0,l.W)(e.kcFormGroupClass),children:(0,p.jsxs)("div",{id:"kc-username",children:[(0,p.jsx)("label",{id:"kc-attempted-username",children:null===U||void 0===U?void 0:U.attemptedUsername}),(0,p.jsx)("a",{id:"reset-login",href:_.loginRestartFlowUrl,children:(0,p.jsxs)("div",{className:"kc-login-tooltip",children:[(0,p.jsx)("i",{className:(0,l.W)(e.kcResetFlowIcon)}),(0,p.jsx)("span",{className:"kc-tooltip-text",children:L("restartLoginTooltip")})]})})]})})]})]}),(0,p.jsx)("div",{id:"kc-content",children:(0,p.jsxs)("div",{id:"kc-content-wrapper",children:[k&&void 0!==q&&("warning"!==q.type||!D)&&(0,p.jsxs)("div",{className:(0,l.W)("alert","alert-".concat(q.type)),children:["success"===q.type&&(0,p.jsx)("span",{className:(0,l.W)(e.kcFeedbackSuccessIcon),style:{background:"none"}}),"warning"===q.type&&(0,p.jsx)("span",{className:(0,l.W)(e.kcFeedbackWarningIcon),style:{background:"none"}}),"error"===q.type&&(0,p.jsx)("span",{className:(0,l.W)(e.kcFeedbackErrorIcon),style:{background:"none"}}),"info"===q.type&&(0,p.jsx)("span",{className:(0,l.W)(e.kcFeedbackInfoIcon),style:{background:"none"}}),(0,p.jsx)("span",{className:"kc-feedback-text",style:{background:"none"},dangerouslySetInnerHTML:{__html:q.summary}})]}),b,void 0!==U&&U.showTryAnotherWayLink&&g&&(0,p.jsx)("form",{id:"kc-select-try-another-way-form",action:_.loginAction,method:"post",className:(0,l.W)(v&&e.kcContentWrapperClass),children:(0,p.jsx)("div",{className:(0,l.W)(v&&[e.kcFormSocialAccountContentClass,e.kcFormSocialAccountClass]),children:(0,p.jsxs)("div",{className:(0,l.W)(e.kcFormGroupClass),children:[(0,p.jsx)("input",{type:"hidden",name:"tryAnotherWay",value:"on"}),(0,p.jsx)("a",{href:"#",id:"try-another-way",onClick:S,children:L("doTryAnotherWay")})]})})}),a&&(0,p.jsx)("div",{id:"kc-info",className:(0,l.W)(e.kcSignUpClass),children:(0,p.jsx)("div",{id:"kc-info-wrapper",className:(0,l.W)(e.kcInfoAreaWrapperClass),children:w})})]})})]})]}):null}))},4925:function(e,s,a){function n(e,s){if(null==e)return{};var a,n,r=function(e,s){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],s.indexOf(a)>=0||(r[a]=e[a]);return r}(e,s);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],s.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a.d(s,{Z:function(){return n}})}}]);
//# sourceMappingURL=5506.3c537633.chunk.js.map