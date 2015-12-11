# keybase-user [![Build Status](https://travis-ci.org/gmontalvoriv/keybase-user.svg?branch=master)](https://travis-ci.org/gmontalvoriv/keybase-user)

> Get user info of a Keybase user

## Install

```
$ npm install --save keybase-user
```

## Usage Examples

```js
var kbuser = require('keybase-user');

kbuser('max').then(function(user) {
  console.log(user.id); // => dbb165b7879fe7b1174df73bed0b9500
  console.log(user.basics);

/* 
 {
   username: 'max',
   ctime: 1391657400,
   mtime: 1421074124,
   id_version: 150,
   track_version: 99,
   last_id_change: 1448627381,
   username_cased: 'max'
 }
*/
});
```

```js
// other usernames
kbuser('bitcoyne', 'coinbase').then(function(user) {
  console.log(user.id); // => 23260c2ce19420f97b58d7d95b68ca00
});
```
*Will return `null` if the user object doesn't exist*

## API

kbuser(value, [proof])

#### value

*Required*  
Type: `string`

Keybase/linked account username, domain name, or the user's fingerprint.

#### proof

Type: `string`  

Linked accounts like github, coinbase, hackernews, reddit, etc.

***Notes:*** 

- For domains and fingerprint queries use `domain` and `key_fingerprint`

#### Promise

##### user

Type: `object`

Various [user info](https://keybase.io/docs/api/1.0/user_objects).

***Notes:*** 

- Visit the official [API](https://keybase.io/docs/api/1.0) for more information

#### User sub-objects

| Name  | Description |
| ----- | ----------- |
| id    | The user's id (random 32-digit hex string). |
| basics | The simplest and often most commonly-accessed info about a user. |
| profile  | Profile information. By default, user.profile is null, until a user creates one. |
| public_keys  | Public key bundle. You should access someone's public key with `public_keys.primary`.|
| crypto_add  | Bitcoin address and signature id.  |

## License

MIT © Gabriel Montalvo
