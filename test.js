import test from 'ava';
import fn from './';

test(async t => {
	var USER = await fn('chris');

	t.is(USER.id, '23260c2ce19420f97b58d7d95b68ca00');
	t.is(USER.basics.username, 'chris');

});

