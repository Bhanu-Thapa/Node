// console.log('welcome to my Page :-)');
// const fs = require('fs');

// creating a new file

// fs.writeFileSync('read.txt', 'welcome to my page');

// fs.writeFileSync('read.txt', 'Bhanu, welcome to my page');

// fs.appendFileSync('read.txt', ' how r u i m fine');

// const buf_data = fs.readFileSync('read.txt');
// console.log(buf_data);

// Node.js includes an additional data typr called Buffer
// (Not available in browser's JavaScript)
// Buffer is mainly used to store binary data,
// While reading from a file or receiving packets over the network
// output
/* <Buffer 42 68 61 6e 75 2c 20 77 65 6c 63 6f 6d 65 20 74 6f 20 6d 79
 20 70 61 67 65 20 68 6f 77 20 72 20 75 20 69 20 6d 20 66 69 6e 65> */

// org_data = buf_data.toString();

// console.log(org_data);

// to rename the file

// fs.renameSync('read.txt', 'readwrite.txt');

// CHALLENGE TIME CURD //

/*
  1. Create a folder named it Thapa
  2. Create a file in it named nio.txt and data into it.
  3. Add more data into the file at the end of the existing data.
  4. Read the data without getting the buffer data at first.
  5. Rename the file name to mybio.txt
  6. Now delete both the file and the folder
*/

const fs = require('fs');

// fs.mkdirSync('Thapa');

// fs.writeFileSync('./Thapa/bio.txt', 'this my bio page');

// fs.appendFileSync('./Thapa/bio.txt', ', welcome to my page');

// const data = fs.readFileSync('./Thapa/mybio.txt', 'utf-8');
// console.log(data);

// fs.renameSync('./Thapa/bio.txt', './Thapa/mybio.txt');

// fs.unlinkSync('./Thapa/mybio.txt');

// fs.rmdirSync('Thapa');
