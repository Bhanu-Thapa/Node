const fs = require('fs');

// fs.writeFile('read.txt', 'today is awesome day :-)', (err) => {
//   console.log('files is created');
//   console.log(err);
// });

// fs.appendFile('read.txt', ' user, (err) => {
//   console.log('data added');
//   console.log(err);
// });

fs.readFile('read.txt', 'utf-8', (err, data) => {
  console.log(data);
  console.log(err);
});
