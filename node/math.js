// const PI = 3.14159;

const { rename } = require("fs");

// const findCirclePerimeter = (radius) => {
//   return 2 * PI * radius;
// };

// const findRound = (number) => {
//   let round;
//   let a = number % 1;
//   if (a > 0.5) {
//     return number + 1;
//   } else {
//     return number - 1;
//   }
// };

// let findSqrt = (sqrt) => {
//   return Math.sqrt(sqrt);
// };

// module.exports = {
//   PI: PI,
//   getPerimeter: findCirclePerimeter,
//   getSqrt: findSqrt,
//   Round: findRound,
// };

function name(name) {
  return name;
}

function choice(choice) {
  if (choice === "date") {
    let d = new Date(),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  } else {
    if (choice === "time") {
      return new Date().toLocaleTimeString("en-US", {
        hour12: false,
        hour: "numeric",
        minute: "numeric",
      });
    }
  }
}

module.exports = {
  name: name,
  choice: choice,
};
