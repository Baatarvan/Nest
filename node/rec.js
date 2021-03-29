// let n = 3;

// for (let i = 1; i <= n; i++) {
//   console.log(i);
// }

// const recurse = (n, value = 1) => {
//   if (value !== n) {
//     console.log(value);
//     recurse(n, value + 1);
//   }
// };

// 2.
// const n = 5;

// function fun(num) {
//   if (num == 1) {
//     return 1;
//   }
//   return num * fun(num - 1);
// }

// console.log(fun(n));

// 3.

function fibonacci(num) {
  if (num == 1 || num == 2) {
    return 1;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}
console.log(fibonacci(10));
