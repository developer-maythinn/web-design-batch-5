// 1.Object literal
// let user = {
//   name: "John", // property, value
//   age: 20,
// };
// console.log(typeof user, user.name, user.age);

// 2.By creating instance of Object
// let myObj = new Object();
// myObj.name = "John";
// myObj.age = 20;
// console.log(myObj);

// 3.By using an Object constructor

function myFruit(name, price) {
  console.log(name, price);
  console.log(this);
  this.fruit = name;
  this.price = price;
}
let myObj = new myFruit("apple", "$10");
console.log(myObj);
