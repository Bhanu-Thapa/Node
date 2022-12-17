const fs = require('fs');

fs.mkdir('Thapa', (err) => {
  console.log('folder created');
});

fs.writeFile('./thapa/bio.txt', 'hello my self Taddy.', () => {
  console.log('file created');
});

fs.appendFile('./thapa/bio.txt', ' Represent Fusion Style', (er) => {
  console.log('data added');
  console.log(er);
});

fs.readFile('./thapa/bio.txt', 'utf-8', (err, data) => {
  console.log(data);
});

fs.rename('./thapa/bio.txt', './thapa/mybio.txt', (err) => {
  console.log('rename');
});

fs.unlink('./thapa/mybio.txt', (err) => {
  console.log('file deleted');
});

fs.rmdir('Thapa', (err) => {
  console.log('folder deleted');
});
