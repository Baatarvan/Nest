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

// const readline = require("readline");
// const { number } = require("yargs");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

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
// getAc = (allowed) => (allowed ? "granted" : "denied");
// rl.close();

// console.log((result1 = getAc(true)));
// console.log((result2 = getAc(false)));

// let bool1 = true;
// let bool2 = false;
// let a;
// a = bool1 ? "bool1 is true" : bool2 ? "bool2 is true" : "else";

// console.log(a);
// getLastName = (obj) => obj.lastName;

// result = getLastName({ fistname: "baatar", lastName: "van" });

// console.log(result);

// function getlast(obj) {
//   return obj.lastName;
// }

// console.log(
//   getlast({
//     fistname: "baatar",
//     lastName: "van",
//   })
// );

// const a = [1, 2, 3, 4];

// mul = (num) => {
//   return num * 2;
// };

// console.log(a.map(mul));
// const bday = [1994, 1997, 2003];
// let thisYear = new Date();
// console.log(
//   bday.map((year) => {
//     return thisYear.getFullYear() - year;
//   })
// );
// persons = [
//   {
//     id: 1,
//     name: "dorj",
//     age: 16,
//   },
//   {
//     id: 1,
//     name: "dorj",
//     age: 19,
//   },
//   {
//     id: 1,
//     name: "baatar",
//     age: 23,
//   },
//   {
//     id: 1,
//     name: "saruul",
//     age: 19,
//   },
// ];

// console.log(persons.filter((person) => person.age > 18));

// const arr = [1, 2, 3, 4, 5];
// let sum = 0;
// arr.forEach((el) => {
//   sum += el;
// });

// reducer = (acc, cur) => acc + cur;

// console.log(arr.reduce(reducer, 0));

// let a = 1,
//   b = 3,
//   c = 3;

// function sum(f, c, g) {
//   return a * b * c;
// }

// console.log(sum(a, b, c));

// const chocolates = [
//   { dark: true, flavour: "strawberry" },
//   { dark: false, flavour: "strawberry" },
//   { dark: false, flavour: "almond" },
//   { dark: true, flavour: "almond" },
//   { dark: false, flavour: "lemon" },
// ];

// function checkProperty(k) {
//   return (value) => {
//     return (item) => {
//       return item[k] == value;
//     };
//   };
// }
// // Chocolates array object өгөгджээ. Тухайн arrays -аас ямарч field -ын утгаар нь шүүх боломжтой currying function бич (checkProperty).
// const darkChocolates = chocolates.filter(checkProperty("dark")(true));
// console.log(darkChocolates);
// const almondChocolates = chocolates.filter(checkProperty("flavour")("almond"));
// console.log(almondChocolates);

// const mul = makeFun(2)("*");
// const result2 = mul(5);

// const makeFun = (num1) => (op) => (num2) => {
//   switch (op) {
//     case "*":
//       return num1 * num2;
//       break;
//     case "+":
//       return num1 + num2;
//       break;
//     case "-":
//       return num1 - num2;
//       break;
//     case "/":
//       return num1 / num2;
//       break;
//   }
// };

// console.log(result2);

// const chalk = require("chalk");

// const makefun = (hello) => (chalk) => (name) => {
//   return hello + chalk(` ${name}`);
// };
// greetBlue;
// const greetRed = makefun("Hello")(chalk.red);
// console.log(greetRed("Bulgaa"));
// const greetGreen = makefun("Hello")(chalk.green);
// console.log(greetGreen("Bulgaa"));
// const greetBlue = makefun("Hello")(chalk.blue);
// console.log(greetBlue("Bulgaa"));
