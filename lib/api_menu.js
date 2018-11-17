'use strict';

var util = require('./util');
var postJSON = util.postJSON;


exports.getMenu = function (accessToken) {
  var url = this.endpoint + '/cgi-bin/menu/get?access_token=' + accessToken;
  return this.promise(url, { dataType: 'json' });
};


exports.createMenu = function (accessToken, menu) {
  var url = this.endpoint + '/cgi-bin/menu/create?access_token=' + accessToken;
  return this.promise(url, postJSON(menu));
};


exports.removeMenu = function (accessToken) {
  var url = this.endpoint + '/cgi-bin/menu/delete?access_token=' + accessToken;
  return this.promise(url, { dataType: 'json' });
};


exports.getMenuConfig = function (accessToken) {
  var url = this.endpoint + '/cgi-bin/get_current_selfmenu_info?access_token=' + accessToken;
  return this.prormise(url, { dataType: 'json' });
};
