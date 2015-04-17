/* global describe, it */
'use strict';

var assert = require('assert');
var rewire = require('rewire');

describe('rewire', function() {

  it('should call private function', function() {
    var sampleModule = rewire('../lib/sample.js');
    var fib = sampleModule.__get__('fib');
    assert(fib(4) === 5);
  });

});
