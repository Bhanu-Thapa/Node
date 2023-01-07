// module wrapper function
// behind the scine
(function (exports, require, module, __filename, __dirname) {
  const a = require('fs');
  const name = 'vinod';
  console.log(name);
  module.exports = { asdfasf };
});
/////////////////////////////////////////////////

// BONUS  IIFE

(function () {
  var a = 'taddy';
  console.log(a);
  console.log(__filename);
  console.log(__dirname);
})();
