const path = require('path');

console.log(path.dirname('C:/Users/tadyt/Desktop/Node/PathModule/path.js'));
console.log(path.extname('C:/Users/tadyt/Desktop/Node/PathModule/path.js'));
console.log(path.basename('C:/Users/tadyt/Desktop/Node/PathModule/path.js'));

const myPath = path.parse('C:/Users/tadyt/Desktop/Node/PathModule/path.js');
console.log(myPath.root);
console.log(myPath.name);
