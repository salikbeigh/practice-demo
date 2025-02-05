// const x = (a, b) => {
//   for (var i = a; i <= b; i++) {
//     console.log(i);
//   }
// };
// x(10, 20);

// let x = [1, 2, 34, 5, 67];
// const sum = () => {
//   for (var i = 0; i <= x.length - 5; i++) {
//     sum2 = x.reduce((a, b) => a + b);
//     console.log(sum2);
//   }
// };
// sum();
// const arr = [1, 2, [3, 4, 5]];
// const check = () => {
//   let flatArray = arr.flat(Infinity);
//   console.log(flatArray);
// };
// check();

// const Constructor = function () {
//   count = 0;
//   this.increase = function () {
//     count++;
//     document.getElementById("count").innerHTML = count;

//     console.log(count);
//   };
//   this.decrease = function () {
//     count--;
//     console.log(count);
//   };
// };
// var constructor1 = new Constructor();

// const check = () => {
//   for (let i = 0; i <= 10; i++) {
//     if (i % 2 == 0) {
//       console.log(i, "fizz");
//     } else {
//       console.log(i, "buzz");
//     }
//   }
// };
// check();

// const double = (x) => {
//   return x * 2;
// };
// const triple = (x) => {
//   return x * 3;
// };

// const output = arr.map(
//   (binary = (x) => {
//     return x.toString(2);
//   })
// );
// console.log(output);
// const arr = [2, 3, 4, 5, 6];

// const findMax = (x) => {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// };
// console.log(findMax(arr));

// const sum = () => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = arr[i];
//   }
//   return sum;
// };
// console.log(sum(arr));

// const output = arr.reduce(
//   (func = (max, curr) => {
//     if (curr > max) {
//       max = curr;
//     }
//     return max;
//   }),
//   0
// );
// console.log(output);

// const output = arr.reduce(
//   (demo = (arr, curr) => {
//     arr = arr + curr;
//     return arr;
//   }),
//   0
// );
// console.log(output);
// const users = [
//   { name: "John", age: 25 },
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 2 },
//   { name: "salik", age: 25 },
//   { name: "salik", age: 25 },
//   { name: "sumaan", age: 25 },
//   { name: "fardeen", age: 25 },
// ];
// const output = users.filter((x) => x.age < 24);
// console.log(output);

// setTimeout(() => {
//   console.log("salik");
// }, 5000);

// const arr = [1, 2, 3, 4, 5, 6];

// arr.map((x) =>
//   x % 2 === 0 ? console.log(`even :${x}`) : console.log(`odd: ${x}`)
// );
// Write a function that takes a string as input and returns the reversed version of the string.

const revsersedString = (str) => {
  return str == str.split("").reverse().join("");
};

console.log(revsersedString("hello"));
console.log(revsersedString("maliyalam"));
