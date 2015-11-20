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
  function checkSrc(src) {
    if (src === undefined) {
      src = 'username';
      return src;
    } else {
      return src;
    }
  }

  exports.full = function(username, src) {
    src = checkSrc(src);
    var res = httpGet(url + src + '=' + username);
    if (src == 'username') {
      return res.them;
    } else {
      return res.them[0];
    }
  }

  exports.basics = function(username, src) {
    src = checkSrc(src);
    var res = httpGet(url + src + '=' + username + '&fields=basics');
    if (src == 'username') {
      return res.them.basics;
    } else {
      return res.them[0].basics;
    }
  }

  exports.profile = function(username, src) {
    src = checkSrc(src);
    var res = httpGet(url + src + '=' + username + '&fields=profile');
    if (src == 'username') {
      return res.them.profile;
    } else {
      return res.them[0].profile;
    }
  }

  exports.public_keys = function(username, src) {
    src = checkSrc(src);
    var res = httpGet(url + src + '=' + username + '&fields=public_keys');
    if (src == 'username') {
      return res.them.public_keys;
    } else {
      return res.them[0].public_keys;
    }
  }

  exports.crypto_add = function(username, src) {
    src = checkSrc(src);
    var res = httpGet(url + src + '=' + username  + '&fields=cryptocurrency_addresses');
    if (src == 'username') {
      return res.them.cryptocurrency_addresses;
    } else {
      return res.them[0].cryptocurrency_addresses;
    }
  }
  return exports
}();