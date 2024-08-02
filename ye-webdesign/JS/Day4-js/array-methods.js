// let fruits = ["apple", "orange", "mango", "pineapple"];
// console.log(fruits.length);
// let fruitsString = fruits.toString();
// console.log(typeof fruitsString);

// let pushArr = fruits.push("banana");
// let popArr = fruits.pop();
// let shiftArr = fruits.shift();
// let unshift = fruits.unshift("Pineapple");
// let spliceArr = fruits.splice(2, 2);

// let colors = ["white", "black"];
// let result = colors.concat(fruits);
// console.log(result);

// let fruits = ["apple", "orange", "mango", "pineapple"];
// let text = "";
// function myFunc(item, index) {
//   text += `${item} ${index} `;
// }

// fruits.forEach(myFunc);
// console.log(text);

const array1 = [1, 4, 9, 16];
// function myFunc(x) {
//   return x * 2;
// }

const myFunc = (x) => x * 2;
const map1 = array1.map(myFunc);
console.log(map1);
