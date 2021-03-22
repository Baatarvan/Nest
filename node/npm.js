// // if (process.argv.indexOf("--hello-param")) {
// //   console.log(process.argv[process.argv.indexOf("--hello-param") + 1]);
// //   console.log(process.argv[process.argv.indexOf("-t") + 1]);
// // } else {
// //   if (process.argv.indexOf("-t")) {
// //     console.log(process.argv[process.argv.indexOf("-t") + 1]);
// //   } else {
// //     console.log("Hello world");
// //   }
// // }

// // Дээрх arr өгөгдсөн бол доорхуудыг ол:
// //     1. Тэгш тоонуудын нийлбэр
// //     2. Сондгой тоонуудын үржвэр
// //     3. Тэгш индекс дээр байгаа тоонуудын нийлбэр
// //     4. Сондгой индекс дээр байгаа тоонуудын үржвэр
// //     5. Өөрөөсөө 1 индексийн зөрүүтэй тоонуудын нийлбээрүүд.
// //         Хариу нь: [8, 17, 26, 62, 70, 98, 150] гарна гэсэн үг

// let arr = [1, 7, 9, 10, 43, 17, 38, 95];
// let sum = 0;
// let urj = 1;
// arr.forEach((el) => {
//   if (el % 2) {
//     sum = sum + el;
//   } else {
//     urj *= el;
//   }
// });
// console.log(`1. Тэгш тоонуудын нийлбэр: ${sum}`);
// console.log(`2. Сондгой тоонуудын үржвэр: ${urj}`);

// let tegshIndex = 0;
// let sondgoiIndex = 1;

// arr.forEach((el, i) => {
//   if (i % 2) {
//     tegshIndex += el;
//   } else {
//     sondgoiIndex *= el;
//   }
// });

// console.log(`3. Тэгш индекс дээр байгаа тоонуудын нийлбэр: ${tegshIndex}`);
// console.log(`4. Сондгой индекс дээр байгаа тоонуудын үржвэр: ${sondgoiIndex}`);

// let result = [];
// result.push(arr[0] + arr[1]);
// for (let i = 1; i < arr.length - 1; i++) {
//   let sum = arr[i - 1] + arr[i] + arr[i + 1];
//   result.push(sum);
// }
// result.push(arr[arr.length - 2] + arr[arr.length - 1]);

// console.log(result);

let obarr = ["-a", "27", "-b", "21", "-c", "-12", "-o", "-20"];

// Дээрх array өгөгдсөн бол доорхуудыг ол:
//     1. Эгшигийн ард байгаа тоонуудын нийлбэр
//     2. Гийгүүлэгчийн ард байгаа тоонуудын үржвэр
//     3. Дээрх array - аас object үүсгэж хэвлэх
//         Хариу нь: {
//                     "-a": "27",
//                     "-b": "27",
//                     "-c": "-12",
//                     "-o": "-20",
//         }

let egshig = 0;
let giiguulegch = 0;

obarr.forEach((el) => {
  if (obarr.indexOf("-a") && obarr.indexOf("-o")) {
    egshig +=
      parseInt(obarr[obarr.indexOf("-a") + 2]) +
      parseInt(obarr[obarr.indexOf("-a") + 2]);
  } else {
    giiguulegch += parseInt(obarr[obarr.indexOf(el) + 2]);
  }
});

console.log(egshig);
console.log(giiguulegch);
