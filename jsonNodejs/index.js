const fs = require('fs');
const bioData = {
  name: 'Bhanu',
  age: 22,
};

// console.log(bioData);
// // { name: 'Bhanu', age: 22 }

// const jsonData = JSON.stringify(bioData);
// console.log(jsonData);
// //  {"name":"Bhanu","age":22}

// const objData = JSON.parse(jsonData);
// console.log(objData);
// // { name: 'Bhanu', age: 22 }
// console.log(objData.name);
// // Bhanu

////////////////////////////////////////////
// 1. convert to JSON => done
// 2. create file and add JSON data
// 3. read file
// 4. again convert back to js obj ori

const jsonData = JSON.stringify(bioData);
console.log(jsonData);
// fs.writeFile('json1.json', jsonData, (err) => {
//   console.log('done');
// });

fs.readFile('json1.json', 'utf-8', (err, data) => {
  console.log(data);
  const orgData = JSON.parse(data);
  console.log(orgData);
});
