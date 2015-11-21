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
   exports.info = function(options, cb) {
     var val = options.value;
     var src = options.source || 'username';

     var req = {
       id: httpGet(url + src + '=' + val),
       basics: httpGet(url + src + '=' + val + '&fields=basics'),
       profile: httpGet(url + src + '=' + val + '&fields=profile'),
       public_keys: httpGet(url + src + '=' + val + '&fields=public_keys'),
       crypto_add: httpGet(url + src + '=' + val + '&fields=cryptocurrency_addresses')
     }
     
     var res = {
       id: req.id.them.id || req.id.them[0].id,
       basics: req.basics.them.basics || req.basics.them[0].basics,
       profile: req.profile.them.profile || req.profile.them[0].profile,
       public_keys: req.public_keys.them.public_keys || req.public_keys.them[0].public_keys,
       crypto_add: req.crypto_add.them.cryptocurrency_addresses || req.crypto_add.them[0].cryptocurrency_addresses
     }
     cb(res);
   }
  return exports
}();
