# keybase-user [![Build Status](https://travis-ci.org/gmontalvoriv/keybase-user.svg?branch=master)](https://travis-ci.org/gmontalvoriv/keybase-user)

> Get user info of a Keybase user

## Install

```
$ npm install --save keybase-user
```

## Usage Examples

```js
var kbuser = require('keybase-user');

kbuser({ value: 'max' }, function(user) {
  console.log(user.id); // => dbb165b7879fe7b1174df73bed0b9500
  console.log(user.basics);

  /* 
	{
         "username": "max",
         "ctime": 1391657400,
         "mtime": 1421074124,
         "id_version": 143,
         "track_version": 91,
         "last_id_change": 1447788494,
         "username_cased": "max" }
  */
  
});
```

```js
// other usernames
kbuser({ value: 'bitcoyne', proof: 'coinbase' }, function(user) {
  console.log(user.id); // => 23260c2ce19420f97b58d7d95b68ca00
});
```

## API

kbuser(value, [proof])

#### value

*Required*  
Type: `string`

Keybase/linked account username, domain name, or the user's fingerprint.

#### proof (proof type)

Type: `string`  

- github, coinbase, hackernews, etc.

***Notes:*** 

- Ignoring this option will get results from a Keybase username
- Visit the official [API](https://keybase.io/docs/api/1.0) for more information

## License

MIT © Gabriel Montalvo
