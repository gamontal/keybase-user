'use strict';

const Promise = require('bluebird');

module.exports =  function(v, p) {
  const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
  let xmlHttp;
  let httpGet = function(url) {
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', url, false);
    xmlHttp.send(null);
    return JSON.parse(xmlHttp.responseText);
  };

  let url = 'https://keybase.io/_/api/1.0/user/lookup.json?', res, req;
  let val = v, proof;

  if (p === undefined) {
    proof  = 'username';
  } else {
    proof = p;
  }

  return new Promise(function (resolve, reject) {
    if ((typeof v !== 'string') || (v === undefined)) {
      return Promise.reject(new Error('username required'));
    }

    req = {
      id: httpGet(url + proof + '=' + val),
      basics: httpGet(url + proof + '=' + val + '&fields=basics'),
      profile: httpGet(url + proof + '=' + val + '&fields=profile'),
      public_keys: httpGet(url + proof + '=' + val + '&fields=public_keys'),
      crypto_address: httpGet(url + proof + '=' + val + '&fields=cryptocurrency_addresses')
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
        crypto_address: req.crypto_address.them.cryptocurrency_addresses || req.crypto_address.them[0].cryptocurrency_addresses
      };
      return resolve(res);
    }
  });
};

