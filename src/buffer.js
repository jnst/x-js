'use strict';

var str = 'こんにちは';
var byte = Buffer.byteLength(str);
console.log(str, '=', byte, 'byte');

var buf = new Buffer(64);
buf.write(str);
buf.write('hello', byte);
console.log(buf.slice(0, 20).toString());
