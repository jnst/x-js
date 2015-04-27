'use strict';

var _ = require('lodash');

exports.run = function() {
  _.times(43, function(i) {
    console.log(i, fib(i));
  });
};

function fib(n) {
  if (n <= 2) return n;
  return fib(n - 1) + fib(n - 2);
}
