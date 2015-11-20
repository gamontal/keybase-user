# keybase-user

> Get user info a Keybase user

## Install

```
$ npm install --save keybase-user
```

## Usage

```js
var kbuser = require('keybase-user');
// basic information
console.log(kbuser.basics('max'));

  /* 
	{
		"id": "dbb165b7879fe7b1174df73bed0b9500",
        "basics": {
         "username": "max",
         "ctime": 1391657400,
         "mtime": 1421074124,
         "id_version": 143,
         "track_version": 91,
         "last_id_change": 1447788494,
         "username_cased": "max"
        }
	}
	*/
```
## License

MIT © Gabriel Montalvo
