# keybase-user

> Get user info of a Keybase user

## Install

```
$ npm install --save keybase-user
```

## Usage

```js
var kbuser = require('keybase-user');

var newUser = {
  basics: kbuser.basics('chris'),
  public_keys: kbuser.public_keys('bitcoyne', 'coinbase')
}

console.log(newUser.public_keys.primary.key_fingerprint); // => 94aa3a5bdbd40ea549cabaf9fbc07d6a97016cb3
console.log(newUser.basics);

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
```
## License

MIT © Gabriel Montalvo
