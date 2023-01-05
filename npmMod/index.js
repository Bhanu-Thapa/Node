const chalk = require('chalk');
const validator = require('validator');

console.log(chalk.green.underline.inverse('success'));

const res = validator.isEmail('bhanuthapa@gmail.com');
console.log(res);
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
