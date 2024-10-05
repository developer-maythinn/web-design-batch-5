// function greet() {
//   console.log("Hello");
//   return "Inside";
// }
// // greet();
// console.log(greet());

// let name = "John";
// let myFunc = function () {
//   console.log("myFunc");
//   return "Hello";
// };

// console.log(name);
// console.log(myFunc());

// function sum(num1 = 5, num2 = 3){ // parameter
//     console.log(num1, num2)
//     return num1 + num2
// }
// console.log(sum(10, 3))
// console.log(sum(20, 30))
// console.log(sum())

// (function (num1) {
//   // IIFE
//   console.log("John");
//   console.log(num1);
// })(3);

let name = myName(); // Hoisting
function myName() {
  console.log("John");
}

let age = age1;
let age1 = 20; // error
console.log(age);
