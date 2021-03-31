const axios = require("axios");
const chalk = require("chalk");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(chalk.green("Хайх хотын нэр оруулна уу? "), (location) => {
  axios
    .get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?limit=2&access_token=pk.eyJ1IjoiYmFhdGFydmFuIiwiYSI6ImNrbXd4dTRhbjAzNXQycnFrOWs2M2JndWgifQ.yQcbjJNnNZ_Fp-MfsnB4VQ`
    )
    .then(function (response) {
      let cities = response.data.features;
      cities.forEach((el, i) => {
        console.log(chalk.red(`${i}. ${el["place_name"]}`));
      });
      rl.question(chalk.green("Зөв хаягыг сонгоно уу? "), (answer) => {
        let ans = parseInt(answer);
        let weatherLoc = `${cities[ans].center[1]}, ${cities[ans].center[0]}`;
        axios
          .get(
            `https://api.darksky.net/forecast/81d38b9c958eb018e01083a72b0926b5/${weatherLoc}`
          )
          .then(function (response) {
            let location = response.data.timezone;
            let temperature = response.data.currently.temperature;
            let celcuis = chalk.red(Math.round(((temperature - 32) * 5) / 9));
            let precipProbability = chalk.red(
              response.data.currently.precipProbability
            );

            console.log(chalk.green(`${location} яг одоо ${celcuis}°C baina`));
            console.log(
              chalk.green(
                `Яг одоо хур тундас унах магадлал ${precipProbability} байна.`
              )
            );
          })
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {});
        rl.close();
      });
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {});
});
