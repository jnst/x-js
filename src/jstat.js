'use strict';

var _ = require('lodash');
var assert = require('assert');
var jStat = require('jStat').jStat;

// start, stop, count
var vector = jStat(0, 1, 5)[0];
assert.deepEqual(vector, [ 0, 0.25, 0.5, 0.75, 1 ]);

// 平均
var m = jStat.median([1, 5, 5, 1, 3]);
assert(m === 3);

// 対数正規分布
var damages = [500, 512, 505, 515, 480, 501, 491, 521, 495]; //ダメージ分布
var mu = jStat.mean(damages); //平均
var cv = jStat.coeffvar(damages); //変動係数
_.times(10, function() {
  var val = jStat.lognormal.sample(0, cv);
  console.log(Math.floor(mu * val));
});

