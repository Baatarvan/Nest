// let int = [10, 20, 30, -20];
// let sum = 0;

// int.forEach((value)=>{
//     sum += value;
// })

// console.log(sum);

// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// readline.question(`lastname `, name => {
//   let fullname = []

//   fullname.push(name);

//   readline.question(`firstname `, name => {
//     fullname.push(name);
//     console.log(fullname.reverse().join(" "));
//     readline.close()
//   })
// })

 // NODE WRITE FILE
const fs = require('fs');

fs.appendFileSync('./notes.txt', 'data to append\n', function (err) {
  if (err) throw err;
  console.log('Saved!');
});