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

// const revsersedString = (str) => {
//   return str == str.split("").reverse().join("");
// };

// console.log(revsersedString("hello"));
// console.log(revsersedString("maliyalam"));

// const cart = ["shoes", "bats", "boots"];
// createOrder(cart)
//   .then(function (orderID) {
//     console.log(orderID);
//     return orderID;
//   })
//   .catch(function (err) {
//     console.log(err, "error");
//   })
//   .then(function (orderID) {
//     return proceedToPayment(orderID);
//   });

// function createOrder(cart) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       if (cart.length > 0) {
//         resolve("Order created successfully with ID: " + Math.random() * 1000);
//       } else {
//         reject("Cart is empty");
//       }
//     }, 1000);
//   });
// }

// function proceedToPayment(orderID) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       if (orderID) {
//         resolve("Payment successful for order ID: " + orderID);
//       } else {
//         reject("Invalid order ID");
//       }
//       resolve("Payment successful for order ID: " + orderID);
//     }, 1000);
//   });
// }
// let orderID = 123344;

// const cart = ["shoes", "boots", "clothes"];
// createOrder(cart)
//   .then(function (orderid) {
//     console.log(orderid);
//     return orderid;
//   })
//   .catch(function (err) {
//     console.log(err, "error");
//   })
//   .then(function (orderid) {
//     return proceedPayment(orderid);
//   });

// function createOrder(cart) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       if (cart.length > 0) {
//         resolve("order placed successfully: " + Math.random() * 1000);
//       } else {
//         reject("cart is empty");
//       }
//     }, 1000);
//   });
// }
// function proceedPayment() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       if (orderid) {
//         resolve("payment successful for order id : " + orderid);
//       } else {
//         reject("Invalid order id");
//       }
//     }, 1000);
//   });
// }
// let orderid = 12345;

// Reverse a String
// Write a function that takes a string as input and returns the reversed version of the string.

// const reversedString = (str) => {
//   return str.split("").reverse().join("");
// };
// console.log(reversedString("hello world"));
// Check for Palindrome
// Write a function to check if a given string is a palindrome (same forward and backward).

// const reversedString2 = (str) => {
//   return str === str.split("").reverse().join("");
// };
// console.log(reversedString2("racecar"));
// Find the Maximum Number in an Array
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 2, 6, 8];
// const findMax = () => {
//   return arr.reduce((acc, curr) => (curr > acc ? curr : acc), arr[0]);
// };
// console.log(findMax());
// Remove Duplicates from an Array

// const dubArr = (arr) => {
//   return [...new Set(arr)];
// };
// console.log(dubArr([1, 2, 1, 2, 1, 22, 1, 2, 1, 2]));

const arr = [1, 2, 34, 45, 6, 7, 8, 9, 2, 1];
const dub = () => {
  return arr.reduce((acc, curr) => (curr > acc ? curr : acc), arr[0]);
};
console.log(dub(arr));
