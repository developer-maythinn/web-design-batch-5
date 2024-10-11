// let fruit = [];
// fruit[0] = "apple";
// fruit[1] = "orange";
// console.log(fruit);
// console.log(typeof fruit, typeof null);

// let fruits = new Array("apple", "orange");
// console.log(fruits);
// console.log(fruits[1])

// let fruits = ["apple", "orange", "mango"];
// let strFruit = fruits.toString();
// console.log(typeof fruits);
// console.log(strFruit);
// console.log(typeof strFruit);

// let fruits = ["apple", "orange", "mango", "banana"];
// console.log(fruits.length)
// let pushArr = fruits.push("pipeapple");
// fruits.pop();
// fruits.unshift("kiwi");
// fruits.shift();
// console.log(fruits);

// fruits.splice(3, 0, "kiwi");

// let text = "";
// for (let fruit of fruits) {
//   text += fruit + ", ";
// }
// console.log(text);
// document.getElementById("demo").innerHTML = text;

// function myFruit() {
//     return "hello"
// }

// const myFruit = () => {
//     console.log("first")
//     return "hello"
// }
// const myFruits = () => "hello"

let fruits = ["apple", "orange", "mango"];
let text = "";
const myFruitForEach = fruits.forEach((item, index) => item);

const myFruitMap = fruits.map((item, index) => item);
console.log(text);
console.log("myFruitForEach", myFruitForEach);
console.log("myFruitMap", myFruitMap);
