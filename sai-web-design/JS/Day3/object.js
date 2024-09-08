// let user = {
//   name: "John",
//   age: 20,
// };
// console.log(user.name, user.age);

// let myObj = new Object();
// myObj.name = "Apple";
// myObj.price = "$10";
// console.log(myObj);

// function myFruit(name, price) { //object constructor
//   this.fruit = name;
//   this.price = price;
// }
// let myObj = new myFruit("Orange", "$10");
// console.log(myObj);
// console.log(myObj.fruit);
// console.log(myObj.price);

// const user = {
//   // nested obj
//   name: "John",
//   age: 20,
//   parent: {
//     fatherName: "Jobs",
//     motherName: "Amelia",
//   },
// };
// console.log(user.parent.fatherName, user.parent.motherName);
// delete user.age;
// user.name = "Rose";
// console.log(user);

// function makeUser(name, age) {
//   return name + age;
// }
// let makeUser = (name, age) =>  name + age;
// console.log(makeUser("John", 20));

// let user = {
//   name: "John",
//   age: 20,
// };
// let admin = user;
// admin.name = "Rose";
// user.name = "Doe";
// console.log("user", user);
// console.log("admin", admin);

// let user = {
//   name: "John",
//   age: 20,
// };

// let clone = {};
// for (let i in user) {
//   clone[i] = user[i];
// }
// clone.name = "Rose";
// user.name = "Doe";
// console.log("user", user);
// console.log("clone", clone);

let a = {};
let b = a;
// let b = {};
console.log(a == b);
console.log(a === b);
