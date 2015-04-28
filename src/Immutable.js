'use strict';

var assert = require('assert');
var Immutable = require('immutable');

// https://facebook.github.io/immutable-js/docs/#/
var map1 = Immutable.Map({ a: 'hello', b: 'world' });
var map2 = Immutable.Map({ a: 'hello', b: 'world' });
assert(map1.size === 2);
assert(map2.size === 2);
assert(map1 !== map2);
assert(Immutable.is(map1, map2) === true);

var map3 = Immutable.Map();
var map4 = map3.set('x', 1);
assert(map3.get('x') === undefined);
assert(map4.get('x') === 1);

var set = Immutable.Set([1, 1, 200, 5, 1, 500]);
assert.deepEqual(set.toArray(), [1, 200, 5, 500]);
