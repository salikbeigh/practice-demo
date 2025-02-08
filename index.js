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

// const arr = [1, 2, 34, 45, 6, 7, 8, 9, 2, 1];
// const dub = () => {
//   return arr.reduce((acc, curr) => (curr > acc ? curr : acc), arr[0]);
// };
// console.log(dub(arr));

// let a = "Learning";
// let b = "is fun!";
// console.log(a, b);
// let word = "programming";
// console.log(word.slice(2));
// let str = "CodeChef";
// if (str.length > 5) {
//   console.log("Long String");
// } else "Short String";
// function check(a, b) {
//   if (a > b) {
//     console.log("Coding is Fun");
//   }
// }
// check(20, 11);
// function printScore(score) {
//   // Complete this function
//   if (score >= 100) {
//     console.log("Perfect score");
//   } else if (score >= 80) {
//     console.log("Almost perfect score");
//   } else {
//     console.log("Nice try");
//   }
// }
// printScore(79);
// let name = "salik";
// console.log("hello", name);
// var price = 105;
// if(price > 100) {
//   console.log("Expensive");
// else {
//   console.log("Affordable");
// }
// function solve(num1, num2) {
//   let isEqual = "Equal";
//   if (num1 === num2) {
//     isEqual = "Equal";
//   } else {
//     isEqual = "Not Equal";
//   }
//   console.log(isEqual);
// }
// solve(1, 2);
// var x = 5;
// if x == 5 {
//     console.log("x is 5");
// }

// function check(n) {
//   if (n > 5) {
//     console.log("the number is greater than 5");
//   } else {
//     console.log("the number is smaller than or equal to 5");
//   }
// }
// check(10);
// const arr = ["monday", "tuesday", n / "wednesday", "thursday"];
// console.log(arr);
// const arr = ["Monday", "Tuesday", "Wednesday", "Thursday"];
// console.log(arr[arr.length - 2]);
// // console.log(arr[arr.length - 1]);
// const arr = [-10, 20, 30, 40, 50, 60];
// console.log(arr.length);
// var a = 0;
// for (let a = 0; a < 7; a++) {
//   console.log(a);
// // }
// function runLoop(n) {
//   for (let i = 0; i < n; i++) {
//     console.log(i);
//   }
// }
// runLoop(16);
// var a = 4;
// var b = 1;
// while (a != b) {
//   console.log(b);
//   b = b + 1; // can be written as b += 1; also
// }
// var a = 1;
// var b = 4;
// while (a != b) {
//   console.log(b);
//   b = b + 1;
// }
// const isEvenOrOdd = () => (256789 % 2 === 0 ? "Even" : "Odd");
// console.log(isEvenOrOdd());
// const subtract = () => 789 - 456;

// // 2. A function that divides the number 678 with 8
// const divide = () => 678 / 8;

// // 3. A function that calculates the square of 89
// const square = () => 89 * 89;

// // 4. A function that checks whether the number 256789 is even or odd
// const isEvenOrOdd = () => (256789 % 2 === 0 ? "Even" : "Odd");

// // Testing the functions
// console.log("Subtraction result:", subtract()); // Output for task 1
// console.log("Division result:", divide()); // Output for task 2
// console.log("Square result:", square()); // Output for task 3
// console.log("256789 is:", isEvenOrOdd()); // Output for task 4

// var person={
//   name: 'Alice',
//   greet() {
//     setTimeout(() => {
//       console.log('Hello, ' + this.name);
//     }, 1000);
//   }
// }

// your code goes here
const userInfo = { name: "John", age: 30 };
const userContact = { email: "john@example.com", phone: "1234567890" };

const userProfile = {
  ...userInfo,
  ...userContact,
};
console.log(userProfile);

// const person = {
//   name: 'Alice',
//   greet function() {
//     setTimeout(() ==> {
//       console.log('Hello, ' + this.name);
//     }1000);

// };

// person.greet();
