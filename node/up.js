// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Radius: ", (radius) => {
//   const answer = math.getPerimeter(radius);

//   console.log("Ans: ", answer);

//   rl.question("Sqrt: ", (sqrt) => {
//     const answerSqrt = math.getSqrt(sqrt);
//     console.log("Ans ", answerSqrt);

//     rl.question("FindRound: ", (number) => {
//       const answerRound = math.Round(round);
//       console.log("Ans ", answerRound);

//       rl.close();
//     });
//   });
// });
const { read } = require("fs");
const readline = require("readline");
const math = require("./math.js");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Whas is your name?: ", (name) => {
  const answer = math.name(name);
  console.log(`What's up ${answer}?`);

  rl.question("Date or time?: ", (choice) => {
    if (choice === "date") {
      const dateOrTime = math.choice(choice);
      console.log(`Today is ${dateOrTime}`);
    } else {
      if (choice === "time") {
        const dateOrTime = math.choice(choice);
        console.log(`Time is ${dateOrTime}`);
      } else {
        console.log("wrong answer");
      }
    }
    rl.close();
  });
});
