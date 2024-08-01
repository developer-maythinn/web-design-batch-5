// let user = {
//   name: "John",
//   age: 30,
//   parent: {
//     fatherName: "Jobs",
//     motherName: "Rose",
//   },
// };
// delete user.name;
// console.log(user);
// console.log(user.name);
// console.log(user.age);
// console.log(user.parent.fatherName);
// console.log(user.parent.motherName);

// let user = new Object();
// user.name = "John";
// user.age = 30;
// console.log(user);

// function myFruit(name, price) {
//   this.fruit = name;
//   this.price = price;
// }
// let myObj = new myFruit("Apple", 500);
// console.log(myObj);

// let a = {};
// let b = a;
// console.log(a === b);

// let a = {};
// let b = {};
// console.log(a == b);

// let user = { name: "John" };
// let admin = user;
// admin.name = "Rose";
// user.name = "Jobs";
// console.log("admin", admin);
// console.log("user", user);

let user = { name: "John", age: 30 };
let clone = {};
for (let i in user) {
  clone[i] = user[i];
}
user.name = "Rose";
clone.name = "Jobs";
console.log("user", user);
console.log("clone", clone);
