"use strict";(self.webpackChunkkeycloakify_advanced_starter=self.webpackChunkkeycloakify_advanced_starter||[]).push([[1482],{7223:function(e,s,a){a.r(s);var r=a(1413),n=a(4925),l=a(8358),c=a(2791),t=a(4455),i=a(184),o=["kcContext","i18n","doFetchDefaultThemeResources","Template"],d=(0,c.memo)((function(e){var s=e.kcContext,a=e.i18n,c=e.doFetchDefaultThemeResources,d=void 0===c||c,m=e.Template,u=void 0===m?t.Z:m,p=(0,n.Z)(e,o),h=s.url,k=s.realm,x=s.auth,f=a.msg,j=a.msgStr;return(0,i.jsx)(u,(0,r.Z)((0,r.Z)({},(0,r.Z)({kcContext:s,i18n:a,doFetchDefaultThemeResources:d},p)),{},{displayMessage:!1,headerNode:(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("h1",{style:{color:"black",fontWeight:700,fontSize:"2rem"},children:f("emailForgotTitle")})}),formNode:(0,i.jsxs)("form",{id:"kc-reset-password-form",className:(0,l.W)(p.kcFormClass),action:h.loginAction,method:"post",children:[(0,i.jsxs)("div",{className:(0,l.W)(p.kcFormGroupClass),children:[(0,i.jsx)("div",{className:(0,l.W)(p.kcLabelWrapperClass),children:(0,i.jsx)("label",{htmlFor:"username",className:(0,l.W)(p.kcLabelClass),children:k.loginWithEmailAllowed?k.registrationEmailAsUsername?f("email"):f("usernameOrEmail"):f("username")})}),(0,i.jsx)("div",{className:(0,l.W)(p.kcInputWrapperClass),children:(0,i.jsx)("input",{type:"text",id:"username",name:"username",className:(0,l.W)(p.kcInputClass),autoFocus:!0,defaultValue:void 0!==x&&x.showUsername?x.attemptedUsername:void 0})})]}),(0,i.jsx)("div",{className:(0,l.W)(p.kcFormGroupClass,p.kcFormSettingClass),children:(0,i.jsxs)("div",{id:"kc-form-buttons",className:(0,l.W)(p.kcFormButtonsClass),children:[(0,i.jsx)("input",{className:(0,l.W)(p.kcButtonClass,p.kcButtonPrimaryClass,p.kcButtonBlockClass,p.kcButtonLargeClass),type:"submit",value:j("doSubmit")}),(0,i.jsx)("div",{style:{width:"100%",height:"1px",background:"rgba(0, 0, 0, 0.1)",margin:"2rem 0 1.5rem 0"}}),(0,i.jsx)("div",{id:"kc-form-options",className:(0,l.W)(p.kcFormOptionsClass),children:(0,i.jsx)("div",{className:(0,l.W)(p.kcFormOptionsWrapperClass),children:(0,i.jsxs)("span",{style:{display:"flex",color:"#333333",fontSize:"1rem",fontWeight:500},children:["J\xe1 possui uma conta? ","  "," ",(0,i.jsxs)("a",{href:h.loginUrl,children:[" ",f("backToLogin")]})]})})})]})})]}),infoNode:f("emailInstruction")}))}));s.default=d},4455:function(e,s,a){a.d(s,{Z:function(){return h}});var r=a(2982),n=a(885),l=a(6196),c=a(5769),t=a(8358),i=a(2228),o=a(8737),d=a(8282),m=a(2791),u=window.kcContext.url.resourcesPath + "/build/static/media/teste-logo.4fe11b94e4aef8519f24.png",p=a(184),h=(0,m.memo)((function(e){var s=e.displayInfo,a=void 0!==s&&s,h=e.displayMessage,k=void 0===h||h,x=e.displayRequiredFields,f=void 0!==x&&x,j=e.displayWide,v=void 0!==j&&j,g=e.showAnotherWayIfPresent,y=void 0===g||g,C=e.headerNode,N=e.showUsernameNode,W=void 0===N?null:N,b=e.formNode,F=e.infoNode,w=void 0===F?null:F,L=e.kcContext,T=e.i18n,I=e.doFetchDefaultThemeResources,A=T.msg,S=T.changeLocale,Z=T.labelBySupportedLanguageTag,O=T.currentLanguageTag,R=(0,o.useCallbackFactory)((function(e){var s=(0,n.Z)(e,1)[0];return S(s)})),U=(0,d.useConstCallback)((function(){return document.forms["kc-select-try-another-way-form"].submit(),!1})),E=L.realm,B=L.locale,P=L.auth,H=L.url,_=L.message,q=L.isAppInitiatedAction,G=(0,m.useReducer)((function(){return!0}),!1),D=(0,n.Z)(G,2),J=D[0],z=D[1];return(0,m.useEffect)((function(){if(I){var s=!1,a=[],n=function(e){return"string"===typeof e?e.split(" "):null!==e&&void 0!==e?e:[]};if(Promise.all([].concat((0,r.Z)(n(e.stylesCommon).map((function(e){return(0,l.pathJoin)(H.resourcesCommonPath,e)}))),(0,r.Z)(n(e.styles).map((function(e){return(0,l.pathJoin)(H.resourcesPath,e)})))).reverse().map((function(e){return(0,i.t)({type:"css",href:e,position:"prepend"})}))).then((function(){s||z()})),n(e.scripts).forEach((function(e){return(0,i.t)({type:"javascript",src:(0,l.pathJoin)(H.resourcesPath,e)})})),void 0!==e.kcHtmlClass){var c=document.getElementsByTagName("html")[0].classList,o=(0,t.W)(e.kcHtmlClass).split(" ");c.add.apply(c,(0,r.Z)(o)),a.push((function(){return c.remove.apply(c,(0,r.Z)(o))}))}return function(){s=!0,a.forEach((function(e){return e()}))}}z()}),[e.kcHtmlClass]),J?(0,p.jsxs)("div",{className:(0,t.W)(e.kcLoginClass),children:[(0,p.jsx)("div",{id:"kc-header",className:(0,t.W)(e.kcHeaderClass),children:(0,p.jsx)("div",{id:"kc-header-wrapper",className:(0,t.W)(e.kcHeaderWrapperClass),children:(0,p.jsx)("img",{src:u,alt:"Logo App"})})}),(0,p.jsxs)("div",{className:(0,t.W)(e.kcFormCardClass,v&&e.kcFormCardAccountClass),children:[(0,p.jsxs)("header",{className:(0,t.W)(e.kcFormHeaderClass),children:[E.internationalizationEnabled&&((0,c.h)(void 0!==B),!0)&&B.supported.length>1&&(0,p.jsx)("div",{id:"kc-locale",children:(0,p.jsx)("div",{id:"kc-locale-wrapper",className:(0,t.W)(e.kcLocaleWrapperClass),children:(0,p.jsxs)("div",{className:"kc-dropdown",id:"kc-locale-dropdown",children:[(0,p.jsx)("a",{href:"#",id:"kc-current-locale-link",children:Z[O]}),(0,p.jsx)("ul",{children:B.supported.map((function(e){var s=e.languageTag;return(0,p.jsx)("li",{className:"kc-dropdown-item",children:(0,p.jsx)("a",{href:"#",onClick:R(s),children:Z[s]})},s)}))})]})})}),void 0===P||!P.showUsername||P.showResetCredentials?f?(0,p.jsxs)("div",{className:(0,t.W)(e.kcContentWrapperClass),children:[(0,p.jsx)("div",{className:(0,t.W)(e.kcLabelWrapperClass,"subtitle"),children:(0,p.jsxs)("span",{className:"subtitle",children:[(0,p.jsx)("span",{className:"required",children:"*"}),A("requiredFields")]})}),(0,p.jsx)("div",{className:"col-md-10",children:(0,p.jsx)("h1",{id:"kc-page-title",children:C})})]}):(0,p.jsx)("h1",{id:"kc-page-title",children:C}):f?(0,p.jsxs)("div",{className:(0,t.W)(e.kcContentWrapperClass),children:[(0,p.jsx)("div",{className:(0,t.W)(e.kcLabelWrapperClass,"subtitle"),children:(0,p.jsxs)("span",{className:"subtitle",children:[(0,p.jsx)("span",{className:"required",children:"*"})," ",A("requiredFields")]})}),(0,p.jsxs)("div",{className:"col-md-10",children:[W,(0,p.jsx)("div",{className:(0,t.W)(e.kcFormGroupClass),children:(0,p.jsxs)("div",{id:"kc-username",children:[(0,p.jsx)("label",{id:"kc-attempted-username",children:null===P||void 0===P?void 0:P.attemptedUsername}),(0,p.jsx)("a",{id:"reset-login",href:H.loginRestartFlowUrl,children:(0,p.jsxs)("div",{className:"kc-login-tooltip",children:[(0,p.jsx)("i",{className:(0,t.W)(e.kcResetFlowIcon)}),(0,p.jsx)("span",{className:"kc-tooltip-text",children:A("restartLoginTooltip")})]})})]})})]})]}):(0,p.jsxs)(p.Fragment,{children:[W,(0,p.jsx)("div",{className:(0,t.W)(e.kcFormGroupClass),children:(0,p.jsxs)("div",{id:"kc-username",children:[(0,p.jsx)("label",{id:"kc-attempted-username",children:null===P||void 0===P?void 0:P.attemptedUsername}),(0,p.jsx)("a",{id:"reset-login",href:H.loginRestartFlowUrl,children:(0,p.jsxs)("div",{className:"kc-login-tooltip",children:[(0,p.jsx)("i",{className:(0,t.W)(e.kcResetFlowIcon)}),(0,p.jsx)("span",{className:"kc-tooltip-text",children:A("restartLoginTooltip")})]})})]})})]})]}),(0,p.jsx)("div",{id:"kc-content",children:(0,p.jsxs)("div",{id:"kc-content-wrapper",children:[k&&void 0!==_&&("warning"!==_.type||!q)&&(0,p.jsxs)("div",{className:(0,t.W)("alert","alert-".concat(_.type)),children:["success"===_.type&&(0,p.jsx)("span",{className:(0,t.W)(e.kcFeedbackSuccessIcon),style:{background:"none"}}),"warning"===_.type&&(0,p.jsx)("span",{className:(0,t.W)(e.kcFeedbackWarningIcon),style:{background:"none"}}),"error"===_.type&&(0,p.jsx)("span",{className:(0,t.W)(e.kcFeedbackErrorIcon),style:{background:"none"}}),"info"===_.type&&(0,p.jsx)("span",{className:(0,t.W)(e.kcFeedbackInfoIcon),style:{background:"none"}}),(0,p.jsx)("span",{className:"kc-feedback-text",style:{background:"none"},dangerouslySetInnerHTML:{__html:_.summary}})]}),b,void 0!==P&&P.showTryAnotherWayLink&&y&&(0,p.jsx)("form",{id:"kc-select-try-another-way-form",action:H.loginAction,method:"post",className:(0,t.W)(v&&e.kcContentWrapperClass),children:(0,p.jsx)("div",{className:(0,t.W)(v&&[e.kcFormSocialAccountContentClass,e.kcFormSocialAccountClass]),children:(0,p.jsxs)("div",{className:(0,t.W)(e.kcFormGroupClass),children:[(0,p.jsx)("input",{type:"hidden",name:"tryAnotherWay",value:"on"}),(0,p.jsx)("a",{href:"#",id:"try-another-way",onClick:U,children:A("doTryAnotherWay")})]})})}),a&&(0,p.jsx)("div",{id:"kc-info",className:(0,t.W)(e.kcSignUpClass),children:(0,p.jsx)("div",{id:"kc-info-wrapper",className:(0,t.W)(e.kcInfoAreaWrapperClass),children:w})})]})})]})]}):null}))},4925:function(e,s,a){function r(e,s){if(null==e)return{};var a,r,n=function(e,s){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],s.indexOf(a)>=0||(n[a]=e[a]);return n}(e,s);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],s.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}a.d(s,{Z:function(){return r}})}}]);
//# sourceMappingURL=1482.7cb6c55f.chunk.js.map