'use strict';

var m = require('multiline');

var html = m(function() {/*
<html>
  <body>
  <h1>Hello, World</h1>
  </body>
</html>
*/});

console.log(html);
