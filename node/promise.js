const isEvenOrOdd = new Promise((resolve, reject) => {
  let arr = [1, 2, "3"];
  let num = arr[Math.round(Math.random() * 3)];
  if (!isNaN(num)) {
    if (num % 2 == 0) {
      resolve("even");
    } else {
      reject("+odd");
    }
  } else {
    reject("error");
  }
});

const checkingNumber = (number) => {
  console.log("this is", number);
};

const error = (error) => {
  console.log(error);
};

const a = isEvenOrOdd.then(checkingNumber).catch(error);
console.log(a);
