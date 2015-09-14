'use strict';

var _ = require('lodash');
var randy = require('randy');

function arrayRand(array) {
  return array[Math.round(Math.random() * array.length - 0.5)];
}

function rangeRand(min, max) {
  if (min >= max)
    return max;
  return min + Math.floor(Math.random() * (max - min + 1));
}

console.log(arrayRand([1, 10]));
console.log(randy.choice([1, 10]));

_.times(100, function() {
  console.log(rangeRand(1, 10));
});
