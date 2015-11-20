var keybase_user = function() {
  if (typeof require == 'function') {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var exports = module.exports = {};	
    var httpGet = function(url)
    {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open("GET", url, false);
      xmlHttp.send(null);
      return JSON.parse(xmlHttp.responseText);
    }	
  } else {
    var exports = {};
    var httpGet = $.get;
  }

  var url = 'https://keybase.io/_/api/1.0/user/lookup.json?';

  exports.full = function(username) {
    var res = httpGet(url + 'usernames=' + username);
    return res.them;
  }

  exports.basics = function(username) {
    var res = httpGet(url + 'username=' + username);
    return res.them.basics;
  }

  exports.profile = function(username) {
    var res = httpGet(url + 'username=' + username);
    return res.them.profile;
  }

  exports.public_keys = function(username) {
    var res = httpGet(url + 'username=' + username);
    return res.them.public_keys;
  }

  exports.crypto_add = function(username) {
    var res = httpGet(url + 'username=' + username);
    return res.them.cryptocurrency_addresses;
  }
  return exports
}();