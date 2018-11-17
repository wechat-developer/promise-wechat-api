'use strict';

var util = require('./util');
var postJSON = util.postJSON;


/**
 * 第三方开放平台
 * 详细请看：https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1453779503&token=&lang=zh_CN
 */


exports.getComponentAccessToken = function (componentId, componentSecret, componentTicket) {
  var url = this.endpoint + '/cgi-bin/component/api_component_token';
  var command = {
    component_appid: componentId ,
    component_appsecret: componentSecret,
    component_verify_ticket: componentTicket,
  };
  return this.promise(url, postJSON(command));
};


exports.getPreAuthCode = function (componentId, componentAccessToken) {
  var url = this.endpoint + '/cgi-bin/component/api_create_preauthcode?component_access_token=' + componentAccessToken;
  var command = {
    component_appid: componentId,
  };
  return this.promise(url, postJSON(command));
};


exports.getAuthInfo = function (componentId, componentAccessToken, queryAuthCode) {
  var url = this.endpoint + '/cgi-bin/component/api_query_auth?component_access_token=' + componentAccessToken;
  var command = {
    component_appid: componentId,
    authorization_code: queryAuthCode,
  };
  return this.promise(url, postJSON(command));
};


exports.getBindComponentUrl = function (componentId, preAuthCode, redirectUri) {
  // TODO: this.mpPrefix
  return 'https://mp.weixin.qq.com/safe/bindcomponent?action=bindcomponent&auth_type=3&no_scan=1'
       + '&component_appid=' + componentId
       + '&pre_auth_code=' + preAuthCode
       + '&redirect_uri=' + redirectUri
       + '#wechat_redirect';
};


exports.refreshAuthorizerAccessToken = function (componentId, componentAccessToken, authorizerAppId, authorizerRefreshToken) {
  var url = this.endpoint + '/cgi-bin/component/api_authorizer_token?component_access_token=' + componentAccessToken;
  var command = {
    component_appid: componentId,
    authorizer_appid: authorizerAppId,
    authorizer_refresh_token: authorizerRefreshToken,
  };
  return this.promise(url, postJSON(command));
};


exports.getAuthorizerInfo = function (componentId, componentAccessToken, authorizerAppId) {
  var url = this.endpoint + '/cgi-bin/component/api_get_authorizer_info?component_access_token=' + componentAccessToken;
  var command = {
    component_appid: componentId,
    authorizer_appid: authorizerAppId,
  };
  return this.promise(url, postJSON(command));
};
