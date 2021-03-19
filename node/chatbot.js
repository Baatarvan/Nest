const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getAnswer(choice, callback) {
  //   if (choice === "date") {
  //     let d = new Date(),
  //       month = "" + (d.getMonth() + 1),
  //       day = "" + d.getDate(),
  //       year = d.getFullYear();
  //     if (month.length < 2) month = "0" + month;
  //     if (day.length < 2) day = "0" + day;
  //     return [year, month, day].join("-");
  //   } else {
  //     if (choice === "time") {
  //       return new Date().toLocaleTimeString("en-US", {
  //         hour12: false,
  //         hour: "numeric",
  //         minute: "numeric",
  //       });
  //     }
  //   }
}

module.exports = {
  getAnswer: getAnswer,
  answer: answer,
};
