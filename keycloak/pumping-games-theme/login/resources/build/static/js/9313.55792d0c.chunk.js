"use strict";(self.webpackChunkkeycloakify_advanced_starter=self.webpackChunkkeycloakify_advanced_starter||[]).push([[9313],{8663:function(e,s,a){a.r(s);var n=a(1413),r=a(4925),c=a(2791),i=a(4455),l=a(184),t=["kcContext","i18n","doFetchDefaultThemeResources","Template"],o=(0,c.memo)((function(e){var s=e.kcContext,a=e.i18n,c=e.doFetchDefaultThemeResources,o=void 0===c||c,d=e.Template,u=void 0===d?i.Z:d,p=(0,r.Z)(e,t),m=s.url,h=a.msg;return(0,l.jsx)(u,(0,n.Z)((0,n.Z)({},(0,n.Z)({kcContext:s,i18n:a,doFetchDefaultThemeResources:o},p)),{},{displayMessage:!1,headerNode:h("pageExpiredTitle"),formNode:(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("p",{id:"instruction1",className:"instruction",children:[h("pageExpiredMsg1"),(0,l.jsx)("a",{id:"loginRestartLink",href:m.loginRestartFlowUrl,children:h("doClickHere")})," ",".",(0,l.jsx)("br",{}),h("pageExpiredMsg2")," ",(0,l.jsx)("a",{id:"loginContinueLink",href:m.loginAction,children:h("doClickHere")})," ","."]})})}))}));s.default=o},4455:function(e,s,a){a.d(s,{Z:function(){return h}});var n=a(2982),r=a(885),c=a(6196),i=a(5769),l=a(8358),t=a(2228),o=a(8737),d=a(8282),u=a(2791),p=window.kcContext.url.resourcesPath + "/build/static/media/teste-logo.4fe11b94e4aef8519f24.png",m=a(184),h=(0,u.memo)((function(e){var s=e.displayInfo,a=void 0!==s&&s,h=e.displayMessage,k=void 0===h||h,x=e.displayRequiredFields,f=void 0!==x&&x,j=e.displayWide,v=void 0!==j&&j,g=e.showAnotherWayIfPresent,y=void 0===g||g,C=e.headerNode,N=e.showUsernameNode,W=void 0===N?null:N,b=e.formNode,w=e.infoNode,F=void 0===w?null:w,T=e.kcContext,L=e.i18n,A=e.doFetchDefaultThemeResources,I=L.msg,R=L.changeLocale,Z=L.labelBySupportedLanguageTag,E=L.currentLanguageTag,H=(0,o.useCallbackFactory)((function(e){var s=(0,r.Z)(e,1)[0];return R(s)})),O=(0,d.useConstCallback)((function(){return document.forms["kc-select-try-another-way-form"].submit(),!1})),S=T.realm,U=T.locale,P=T.auth,_=T.url,q=T.message,M=T.isAppInitiatedAction,D=(0,u.useReducer)((function(){return!0}),!1),G=(0,r.Z)(D,2),J=G[0],B=G[1];return(0,u.useEffect)((function(){if(A){var s=!1,a=[],r=function(e){return"string"===typeof e?e.split(" "):null!==e&&void 0!==e?e:[]};if(Promise.all([].concat((0,n.Z)(r(e.stylesCommon).map((function(e){return(0,c.pathJoin)(_.resourcesCommonPath,e)}))),(0,n.Z)(r(e.styles).map((function(e){return(0,c.pathJoin)(_.resourcesPath,e)})))).reverse().map((function(e){return(0,t.t)({type:"css",href:e,position:"prepend"})}))).then((function(){s||B()})),r(e.scripts).forEach((function(e){return(0,t.t)({type:"javascript",src:(0,c.pathJoin)(_.resourcesPath,e)})})),void 0!==e.kcHtmlClass){var i=document.getElementsByTagName("html")[0].classList,o=(0,l.W)(e.kcHtmlClass).split(" ");i.add.apply(i,(0,n.Z)(o)),a.push((function(){return i.remove.apply(i,(0,n.Z)(o))}))}return function(){s=!0,a.forEach((function(e){return e()}))}}B()}),[e.kcHtmlClass]),J?(0,m.jsxs)("div",{className:(0,l.W)(e.kcLoginClass),children:[(0,m.jsx)("div",{id:"kc-header",className:(0,l.W)(e.kcHeaderClass),children:(0,m.jsx)("div",{id:"kc-header-wrapper",className:(0,l.W)(e.kcHeaderWrapperClass),children:(0,m.jsx)("a",{href:"https://www.db1.com.br/",children:(0,m.jsx)("img",{src:p,alt:"Logo App"})})})}),(0,m.jsxs)("div",{className:(0,l.W)(e.kcFormCardClass,v&&e.kcFormCardAccountClass),children:[(0,m.jsxs)("header",{className:(0,l.W)(e.kcFormHeaderClass),children:[S.internationalizationEnabled&&((0,i.h)(void 0!==U),!0)&&U.supported.length>1&&(0,m.jsx)("div",{id:"kc-locale",children:(0,m.jsx)("div",{id:"kc-locale-wrapper",className:(0,l.W)(e.kcLocaleWrapperClass),children:(0,m.jsxs)("div",{className:"kc-dropdown",id:"kc-locale-dropdown",children:[(0,m.jsx)("a",{href:"#",id:"kc-current-locale-link",children:Z[E]}),(0,m.jsx)("ul",{children:U.supported.map((function(e){var s=e.languageTag;return(0,m.jsx)("li",{className:"kc-dropdown-item",children:(0,m.jsx)("a",{href:"#",onClick:H(s),children:Z[s]})},s)}))})]})})}),void 0===P||!P.showUsername||P.showResetCredentials?f?(0,m.jsxs)("div",{className:(0,l.W)(e.kcContentWrapperClass),children:[(0,m.jsx)("div",{className:(0,l.W)(e.kcLabelWrapperClass,"subtitle"),children:(0,m.jsxs)("span",{className:"subtitle",children:[(0,m.jsx)("span",{className:"required",children:"*"}),I("requiredFields")]})}),(0,m.jsx)("div",{className:"col-md-10",children:(0,m.jsx)("h1",{id:"kc-page-title",children:C})})]}):(0,m.jsx)("h1",{id:"kc-page-title",children:C}):f?(0,m.jsxs)("div",{className:(0,l.W)(e.kcContentWrapperClass),children:[(0,m.jsx)("div",{className:(0,l.W)(e.kcLabelWrapperClass,"subtitle"),children:(0,m.jsxs)("span",{className:"subtitle",children:[(0,m.jsx)("span",{className:"required",children:"*"})," ",I("requiredFields")]})}),(0,m.jsxs)("div",{className:"col-md-10",children:[W,(0,m.jsx)("div",{className:(0,l.W)(e.kcFormGroupClass),children:(0,m.jsxs)("div",{id:"kc-username",children:[(0,m.jsx)("label",{id:"kc-attempted-username",children:null===P||void 0===P?void 0:P.attemptedUsername}),(0,m.jsx)("a",{id:"reset-login",href:_.loginRestartFlowUrl,children:(0,m.jsxs)("div",{className:"kc-login-tooltip",children:[(0,m.jsx)("i",{className:(0,l.W)(e.kcResetFlowIcon)}),(0,m.jsx)("span",{className:"kc-tooltip-text",children:I("restartLoginTooltip")})]})})]})})]})]}):(0,m.jsxs)(m.Fragment,{children:[W,(0,m.jsx)("div",{className:(0,l.W)(e.kcFormGroupClass),children:(0,m.jsxs)("div",{id:"kc-username",children:[(0,m.jsx)("label",{id:"kc-attempted-username",children:null===P||void 0===P?void 0:P.attemptedUsername}),(0,m.jsx)("a",{id:"reset-login",href:_.loginRestartFlowUrl,children:(0,m.jsxs)("div",{className:"kc-login-tooltip",children:[(0,m.jsx)("i",{className:(0,l.W)(e.kcResetFlowIcon)}),(0,m.jsx)("span",{className:"kc-tooltip-text",children:I("restartLoginTooltip")})]})})]})})]})]}),(0,m.jsx)("div",{id:"kc-content",children:(0,m.jsxs)("div",{id:"kc-content-wrapper",children:[k&&void 0!==q&&("warning"!==q.type||!M)&&(0,m.jsxs)("div",{className:(0,l.W)("alert","alert-".concat(q.type)),children:["success"===q.type&&(0,m.jsx)("span",{className:(0,l.W)(e.kcFeedbackSuccessIcon),style:{background:"none"}}),"warning"===q.type&&(0,m.jsx)("span",{className:(0,l.W)(e.kcFeedbackWarningIcon),style:{background:"none"}}),"error"===q.type&&(0,m.jsx)("span",{className:(0,l.W)(e.kcFeedbackErrorIcon),style:{background:"none"}}),"info"===q.type&&(0,m.jsx)("span",{className:(0,l.W)(e.kcFeedbackInfoIcon),style:{background:"none"}}),(0,m.jsx)("span",{className:"kc-feedback-text",style:{background:"none"},dangerouslySetInnerHTML:{__html:q.summary}})]}),b,void 0!==P&&P.showTryAnotherWayLink&&y&&(0,m.jsx)("form",{id:"kc-select-try-another-way-form",action:_.loginAction,method:"post",className:(0,l.W)(v&&e.kcContentWrapperClass),children:(0,m.jsx)("div",{className:(0,l.W)(v&&[e.kcFormSocialAccountContentClass,e.kcFormSocialAccountClass]),children:(0,m.jsxs)("div",{className:(0,l.W)(e.kcFormGroupClass),children:[(0,m.jsx)("input",{type:"hidden",name:"tryAnotherWay",value:"on"}),(0,m.jsx)("a",{href:"#",id:"try-another-way",onClick:O,children:I("doTryAnotherWay")})]})})}),a&&(0,m.jsx)("div",{id:"kc-info",className:(0,l.W)(e.kcSignUpClass),children:(0,m.jsx)("div",{id:"kc-info-wrapper",className:(0,l.W)(e.kcInfoAreaWrapperClass),children:F})})]})})]})]}):null}))},4925:function(e,s,a){function n(e,s){if(null==e)return{};var a,n,r=function(e,s){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],s.indexOf(a)>=0||(r[a]=e[a]);return r}(e,s);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],s.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a.d(s,{Z:function(){return n}})}}]);
//# sourceMappingURL=9313.55792d0c.chunk.js.map