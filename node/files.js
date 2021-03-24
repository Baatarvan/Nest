// const chalk = require("chalk");
// const fs = require("fs");
// const args = require("yargs").boolean("l").argv;

// if (args.l) {
//   console.log("-l provided");
// }

// if (args._) {
//   console.log(JSON.stringify(args._));
// }

// const files = fs.readdirSync("./");
// for (let fileName of files) {
//   if (fs.lstatSync(fileName).isDirectory()) {
//     console.log(chalk.blue(fileName));
//   } else {
//     console.log(fileName);
//   }
// }

const readline = require("readline");
const { number } = require("yargs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// let even = 0;
// let odd = 1;

// rl.question("Number? ", (num) => {
//   num.split(" ").forEach((el) => {
//     if (parseInt(el) % 2) {
//       even += parseInt(el);
//     } else {
//       odd *= parseInt(el);
//     }
//   });
//   console.log(`Tegsh: ${even}`);
//   console.log(`Sondgoi: ${odd}`);

//   rl.close();
// });

// rl.question("Given number?", (num) => {
//   console.log(
//     num
//       .split(" ")
//       .map((x) => x * 2)
//       .join(" ")
//   );
//   rl.close();
// });

// rl.question("Given number?", (num) => {
//   console.log(
//     num
//       .split(" ")
//       .map((x) => x * -4 + 6)
//       .join(" ")
//   );
//   rl.close();
// });

// let add = function (num1, num2) {
//   return num1 + num2;
// };

// console.log(add(1, 2));
// getAc = (allowed) => {
//   if (allowed) {
//     return "granted";
//   } else {
//     return "denied";
//   }
// };
getAc = (allowed) => (allowed ? "granted" : "denied");
rl.close();

console.log((result1 = getAc(true)));
console.log((result2 = getAc(false)));
