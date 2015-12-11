var Promise = require('bluebird');
module.exports =  function(v, p) {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var httpGet = function(url) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", url, false);
        xmlHttp.send(null);
        return JSON.parse(xmlHttp.responseText);
    };

    var url = 'https://keybase.io/_/api/1.0/user/lookup.json?', res, req;
    var val = v, proof;

    if (p === undefined) {
        proof  = 'username';
    } else {
        proof = p;
    }

    return new Promise(function (resolve, reject) {
        req = {
            id: httpGet(url + proof + '=' + val),
            basics: httpGet(url + proof + '=' + val + '&fields=basics'),
            profile: httpGet(url + proof + '=' + val + '&fields=profile'),
            public_keys: httpGet(url + proof + '=' + val + '&fields=public_keys'),
            crypto_add: httpGet(url + proof + '=' + val + '&fields=cryptocurrency_addresses')
        };

        if (req.id.them === undefined) {
            return resolve(null);
        } else if ((req.id.them === undefined) && (req.id.them[0] === undefined)) {
            return resolve(null);
        } else {
            res = {
                id: req.id.them.id || req.id.them[0].id,
                basics: req.basics.them.basics || req.basics.them[0].basics,
                profile: req.profile.them.profile || req.profile.them[0].profile,
                public_keys: req.public_keys.them.public_keys || req.public_keys.them[0].public_keys,
                crypto_add: req.crypto_add.them.cryptocurrency_addresses || req.crypto_add.them[0].cryptocurrency_addresses
            };
            return resolve(res);
        }
    });
};
