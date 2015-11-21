var kbuser = require('./index');

var usrInfo;
kbuser.info({ value: 'max' }, function(user) {
  usrInfo = {
    id: user.id,
    basics: user.profile,
    profile: user.profile,
    public_keys: user.public_keys,
    crypto_address: user.crypto_add
  };
});
