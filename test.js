var kbuser = require('./index');

var usr1, usr2;
kbuser('chris').then(function(user) {
    usr1 = {
        id: user.id,
        basics: user.basics,
        profile: user.profile,
        public_keys: user.public_keys,
        crypto_address: user.crypto_add,
        all: user
    };
});

kbuser('bitcoyne', 'coinbase').then(function(user) {
    usr2 = {
        id: user.id,
        basics: user.basics,
        profile: user.profile,
        public_keys: user.public_keys,
        crypto_address: user.crypto_add,
        all: user
    };
});


