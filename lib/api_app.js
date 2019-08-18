'use strict';

var util = require('./util');
var getJSON = util.getJSON;


/**
 * 微信公众平台接入指南
 * https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421135319
 */


exports.getAppAccessToken = function (appId, secret) {
  var url = this.endpoint + `/cgi-bin/token?grant_type=client_credential&appid=${appId}&secret=${secret}`;
  return this.promise(url, getJSON());
};


exports.getAppJsapiTicket = function (accessToken) {
  var url = this.endpoint + `/cgi-bin/ticket/getticket?access_token=${accessToken}&type=jsapi`;
  return this.promise(url, getJSON());
};
