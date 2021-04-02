const fs = require("fs");
const { resolve } = require("path");

const filePaths = [
  "./smaller.txt",
  "./shakespeare.txt",
  "./sgb-words.txt",
  "./big.txt",
];

// const alphabet = 'abcdefghijklmnoqprstuwvxyz'.split('')

const isWord = (word) => {
  return /^[a-zA-Z]+$/.test(word);

  // for (let i = 0; i < word.length; i ++) {
  //     if (!alphabet.includes(word[i].toLowerCase())) {
  //         return false;
  //     }
  // }

  // return true;
};

const array = [];

function top10(path) {
  new Promise((resolve, reject) => {
    fs.readFile(filePaths[0], "utf-8", (err, data) => {
      if (err) {
        reject(console.error(err));
      }

      const wordCounts = data
        .split("\n")
        .join(" ")
        .split(" ")
        .filter(isWord)
        .reduce((acc, word) => {
          // acc[word] = (acc[word] || 1) + 1
          if (acc[word]) {
            acc[word]++;
          } else {
            acc[word] = 1;
          }
          return acc;
        }, {});

      resolve(
        Object.entries(wordCounts)
          .sort((item1, item2) => item2[1] - item1[1])
          .splice(0, 10)
          .map((item) => {
            return item[0];
          })
      );
    });
  });
}

filePaths.forEach((item) => {
  array.push(top10(item));
});

Promise.all(array)
  .then((list) => {
    console.log(list);
  })
  .catch((er) => {
    console.log(er);
  });
