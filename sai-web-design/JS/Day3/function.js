// function greet() {
//   console.log("Hello");
// }
// greet();

// let myFunc = function () {
//   console.log("myFunc");
//   return "Hello";
// };
// console.log(myFunc());

// function sum(num1 = 10, num2 = 5) {
//   return num1 + num2;
// }
// console.log(sum(2, 10));
// console.log(sum(30, 50));
// console.log(sum());

// (function name(name) { // IIFE
//   console.log(name);
// })("John");

let name = myName(); // Hoisting
function myName() {
  console.log("Doe");
}
