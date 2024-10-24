<!DOCTYPE html><html lang="en"><head><script>
    window.kcContext=  
<#assign pageId="login-update-password.ftl">
(()=>{

    const out = 
${ftl_object_to_js_code_declaring_an_object(.data_model, [])?no_esc};

    out["msg"]= function(){ throw new Error("use import { useKcMessage } from 'keycloakify'"); };
    out["advancedMsg"]= function(){ throw new Error("use import { useKcMessage } from 'keycloakify'"); };

    out["messagesPerField"]= {
        <#assign fieldNames = [
            "global", "userLabel", "username", "email", "firstName", "lastName", "password", "password-confirm",
            "totp", "totpSecret", "SAMLRequest", "SAMLResponse", "relayState", "device_user_code", "code", 
            "password-new", "rememberMe", "login", "authenticationExecution", "cancel-aia", "clientDataJSON", 
            "authenticatorData", "signature", "credentialId", "userHandle", "error", "authn_use_chk", "authenticationExecution", 
            "isSetRetry", "try-again", "attestationObject", "publicKeyCredentialId", "authenticatorLabel"
        ]>
    
        <#attempt>
            <#if profile?? && profile.attributes?? && profile.attributes?is_enumerable>
                <#list profile.attributes as attribute>
                    <#if fieldNames?seq_contains(attribute.name)>
                        <#continue>
                    </#if>
                    <#assign fieldNames += [attribute.name]>
                </#list>
            </#if>
        <#recover>
        </#attempt>
    
        "printIfExists": function (fieldName, x) {
            <#if !messagesPerField?? >
                return undefined;
            <#else>
                <#list fieldNames as fieldName>
                    if(fieldName === "${fieldName}" ){
                        <#attempt>
                            return "${messagesPerField.printIfExists(fieldName,'1')}" ? x : undefined;
                        <#recover>
                        </#attempt>
                    }
                </#list>
                throw new Error("There is no " + fieldName + " field");
            </#if>
        },
        "existsError": function (fieldName) {
            <#if !messagesPerField?? >
                return false;
            <#else>
                <#list fieldNames as fieldName>
                    if(fieldName === "${fieldName}" ){
                        <#attempt>
                            return <#if messagesPerField.existsError('${fieldName}')>true<#else>false</#if>;
                        <#recover>
                        </#attempt>
                    }
                </#list>
                throw new Error("There is no " + fieldName + " field");
            </#if>
        },
        "get": function (fieldName) {
            <#if !messagesPerField?? >
                return '';
            <#else>
                <#list fieldNames as fieldName>
                    if(fieldName === "${fieldName}" ){
                        <#attempt>
                            <#if messagesPerField.existsError('${fieldName}')>
                                return "${messagesPerField.get('${fieldName}')?no_esc}";
                            </#if>
                        <#recover>
                        </#attempt>
                    }
                </#list>
                throw new Error("There is no " + fieldName + " field");
            </#if>
        },
        "exists": function (fieldName) {
            <#if !messagesPerField?? >
                return false;
            <#else>
                <#list fieldNames as fieldName>
                    if(fieldName === "${fieldName}" ){
                        <#attempt>
                            return <#if messagesPerField.exists('${fieldName}')>true<#else>false</#if>;
                        <#recover>
                        </#attempt>
                    }
                </#list>
                throw new Error("There is no " + fieldName + " field");
            </#if>
        }
    };

    out["pageId"] = "${pageId}";

    return out;

})()
<#function ftl_object_to_js_code_declaring_an_object object path>

        <#local isHash = "">
        <#attempt>
            <#local isHash = object?is_hash || object?is_hash_ex>
        <#recover>
            <#return "ABORT: Can't evaluate if " + path?join(".") + " is hash">
        </#attempt>

        <#if isHash>

            <#if path?size gt 10>
                <#return "ABORT: Too many recursive calls">
            </#if>

            <#local keys = "">

            <#attempt>
                <#local keys = object?keys>
            <#recover>
                <#return "ABORT: We can't list keys on this object">
            </#attempt>


            <#local out_seq = []>

            <#list keys as key>

                <#if ["class","declaredConstructors","superclass","declaringClass" ]?seq_contains(key) >
                    <#continue>
                </#if>

                <#if 
                    (
                        ["loginUpdatePasswordUrl", "loginUpdateProfileUrl", "loginUsernameReminderUrl", "loginUpdateTotpUrl"]?seq_contains(key) && 
                        are_same_path(path, ["url"])
                    ) || (
                        key == "updateProfileCtx" && 
                        are_same_path(path, [])
                    ) || (
                        <#-- https://github.com/InseeFrLab/keycloakify/pull/65#issuecomment-991896344 (reports with saml-post-form.ftl) -->
                        <#-- https://github.com/InseeFrLab/keycloakify/issues/91#issue-1212319466 (reports with error.ftl and Kc18) -->
                        <#-- https://github.com/InseeFrLab/keycloakify/issues/109#issuecomment-1134610163 -->
                        key == "loginAction" && 
                        are_same_path(path, ["url"]) && 
                        ["saml-post-form.ftl", "error.ftl", "info.ftl"]?seq_contains(pageId) &&
                        !(auth?has_content && auth.showTryAnotherWayLink())
                    ) || (
                        ["contextData", "idpConfig", "idp", "authenticationSession"]?seq_contains(key) &&
                        are_same_path(path, ["brokerContext"]) &&
                        ["login-idp-link-confirm.ftl", "login-idp-link-email.ftl" ]?seq_contains(pageId)
                    ) || (
                        key == "identityProviderBrokerCtx" && 
                        are_same_path(path, []) &&
                        ["login-idp-link-confirm.ftl", "login-idp-link-email.ftl" ]?seq_contains(pageId)
                    ) ||  (
                        ["masterAdminClient", "delegateForUpdate", "defaultRole"]?seq_contains(key) &&
                        are_same_path(path, ["realm"])
                    )
                >
                    <#local out_seq += ["/*If you need '" + key + "' on " + pageId + ", please submit an issue to the Keycloakify repo*/"]>
                    <#continue>
                </#if>

                <#if key == "attemptedUsername" && are_same_path(path, ["auth"])>

                    <#attempt>
                        <#-- https://github.com/keycloak/keycloak/blob/3a2bf0c04bcde185e497aaa32d0bb7ab7520cf4a/themes/src/main/resources/theme/base/login/template.ftl#L63 -->
                        <#if !(auth?has_content && auth.showUsername() && !auth.showResetCredentials())>
                            <#continue>
                        </#if>
                    <#recover>
                    </#attempt>

                </#if>
                
                <#attempt>
                    <#if !object[key]??>
                        <#continue>
                    </#if>
                <#recover>
                    <#local out_seq += ["/*Couldn't test if '" + key + "' is available on this object*/"]>
                    <#continue>
                </#attempt>

                <#local propertyValue = "">

                <#attempt>
                    <#local propertyValue = object[key]>
                <#recover>
                    <#local out_seq += ["/*Couldn't dereference '" + key + "' on this object*/"]>
                    <#continue>
                </#attempt>

                <#local rec_out = ftl_object_to_js_code_declaring_an_object(propertyValue, path + [ key ])>

                <#if rec_out?starts_with("ABORT:")>

                    <#local errorMessage = rec_out?remove_beginning("ABORT:")>

                    <#if errorMessage != " It's a method" >
                        <#local out_seq += ["/*" + key + ": " + errorMessage + "*/"]>
                    </#if>

                    <#continue>
                </#if>

                <#local out_seq +=  ['"' + key + '": ' + rec_out + ","]>

            </#list>

            <#return (["{"] + out_seq?map(str -> ""?right_pad(4 * (path?size + 1)) + str) + [ ""?right_pad(4 * path?size) + "}"])?join("\n")>

        </#if>

        <#local isMethod = "">
        <#attempt>
            <#local isMethod = object?is_method>
        <#recover>
            <#return "ABORT: Can't test if it'sa method.">
        </#attempt>

        <#if isMethod>

            <#if are_same_path(path, ["auth", "showUsername"])>
                <#attempt>
                    <#return auth.showUsername()?c>
                <#recover>
                    <#return "ABORT: Couldn't evaluate auth.showUsername()">
                </#attempt>
            </#if>

            <#if are_same_path(path, ["auth", "showResetCredentials"])>
                <#attempt>
                    <#return auth.showResetCredentials()?c>
                <#recover>
                    <#return "ABORT: Couldn't evaluate auth.showResetCredentials()">
                </#attempt>
            </#if>

            <#if are_same_path(path, ["auth", "showTryAnotherWayLink"])>
                <#attempt>
                    <#return auth.showTryAnotherWayLink()?c>
                <#recover>
                    <#return "ABORT: Couldn't evaluate auth.showTryAnotherWayLink()">
                </#attempt>
            </#if>

            <#return "ABORT: It's a method">
        </#if>

        <#local isBoolean = "">
        <#attempt>
            <#local isBoolean = object?is_boolean>
        <#recover>
            <#return "ABORT: Can't test if it's a boolean">
        </#attempt>

        <#if isBoolean>
            <#return object?c>
        </#if>

        <#local isEnumerable = "">
        <#attempt>
            <#local isEnumerable = object?is_enumerable>
        <#recover>
            <#return "ABORT: Can't test if it's an enumerable">
        </#attempt>


        <#if isEnumerable>

            <#local out_seq = []>

            <#local i = 0>

            <#list object as array_item>

                <#if !array_item??>
                    <#local out_seq += ["null,"]>
                    <#continue>
                </#if>

                <#local rec_out = ftl_object_to_js_code_declaring_an_object(array_item, path + [ i ])>

                <#local i = i + 1>

                <#if rec_out?starts_with("ABORT:")>

                    <#local errorMessage = rec_out?remove_beginning("ABORT:")>

                    <#if errorMessage != " It's a method" >
                        <#local out_seq += ["/*" + i?string + ": " + errorMessage + "*/"]>
                    </#if>

                    <#continue>
                </#if>

                <#local out_seq += [rec_out + ","]>

            </#list>

            <#return (["["] + out_seq?map(str -> ""?right_pad(4 * (path?size + 1)) + str) + [ ""?right_pad(4 * path?size) + "]"])?join("\n")>

        </#if>

        <#attempt>
            <#return '"' + object?js_string + '"'>;
        <#recover>
        </#attempt>

        <#return "ABORT: Couldn't convert into string non hash, non method, non boolean, non enumerable object">

</#function>
<#function are_same_path path searchedPath>

    <#if path?size != searchedPath?size>
        <#return false>
    </#if>

    <#local i=0>

    <#list path as property>

        <#local searchedProperty=searchedPath[i]>

        <#if searchedProperty?is_string && searchedProperty == "*">
            <#continue>
        </#if>

        <#if searchedProperty?is_string && !property?is_string>
            <#return false>
        </#if>

        <#if searchedProperty?is_number && !property?is_number>
            <#return false>
        </#if>

        <#if searchedProperty?string != property?string>
            <#return false>
        </#if>

        <#local i+= 1>

    </#list>

    <#return true>

</#function>
;
</script>

<#if scripts??>
    <#list scripts as script>
        <script src="${script}" type="text/javascript"></script>
    </#list>
</#if>
<style>
:root {
    --urla02e02c3bf6ff23: url(${url.resourcesPath}/build/static/media/teste-logo.4fe11b94e4aef8519f24.png);
}
</style>
<meta charset="utf-8"><link rel="icon" href="${url.resourcesPath}/build/teste-logo.svg"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Pumping Games</title><link rel="preload" href="${url.resourcesPath}/build/fonts/WorkSans/worksans-bold-webfont.woff2" as="font" crossorigin="anonymous"><link rel="preload" href="${url.resourcesPath}/build/fonts/WorkSans/worksans-medium-webfont.woff2" as="font" crossorigin="anonymous"><link rel="preload" href="${url.resourcesPath}/build/fonts/WorkSans/worksans-regular-webfont.woff2" as="font" crossorigin="anonymous"><link rel="preload" href="${url.resourcesPath}/build/fonts/WorkSans/worksans-semibold-webfont.woff2" as="font" crossorigin="anonymous"><style>@font-face{font-family:'Work Sans';font-style:normal;font-weight:400;font-display:swap;src:url(${url.resourcesPath}/build/fonts/WorkSans/worksans-regular-webfont.woff2) format('woff2')}@font-face{font-family:'Work Sans';font-style:normal;font-weight:500;font-display:swap;src:url(${url.resourcesPath}/build/fonts/WorkSans/worksans-medium-webfont.woff2) format('woff2')}@font-face{font-family:'Work Sans';font-style:normal;font-weight:600;font-display:swap;src:url(${url.resourcesPath}/build/fonts/WorkSans/worksans-semibold-webfont.woff2) format('woff2')}@font-face{font-family:'Work Sans';font-style:normal;font-weight:700;font-display:swap;src:url(${url.resourcesPath}/build/fonts/WorkSans/worksans-bold-webfont.woff2) format('woff2')}</style><script defer="defer" src="${url.resourcesPath}/build/static/js/main.68bcbb2b.js"></script></head><body><noscript>You need to enable JavaScript to run this app.</noscript><div id="root"></div></body></html>