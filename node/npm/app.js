const arr = process.argv.slice(2);
const chalk = require("chalk");

let background = "black";
let color = "white";
let word = "Hello World";

arr.forEach((el, index) => {
  if (el === "-t") {
    word = arr[index + 1];
  }
  if (el === "-c") {
    color = arr[index + 1];
  }
  if (el === "-bg") {
    background = arr[index + 1];
  }
});

background = capitalizeFirstLetter(background);

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(chalk[color][`bg${background}`](word));
