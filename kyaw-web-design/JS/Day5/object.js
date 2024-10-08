// let user = {
//   name: "John", // property, value
//   age: 20,
//   parent: {
//     fatherName: "Jobs",
//     motherName: "Rose",
//   },
//   city: "Ygn",
// };
// console.log(user.parent.fatherName, user.parent.motherName);
// console.log(user.city);

// delete user.city;
// user.age = 30;
// console.log(user);

// const user = {
//   name: "MT",
// };
// user.name = "Coding";
// console.log(user);

// function makeUser(name, age) {
//   return name + age;
// }

// const makeUser = (name, age) => name + age;
// console.log(makeUser("John", 20));

// let user = {
//   name: "John",
//   age: 20,
// };
// let admin = user;
// admin.name = "Rose";
// console.log("user", user);
// console.log("admin", admin);

// let a = {};
// // let b = a;
// let b = {}
// console.log(a);
// console.log(b);
// console.log(a == b);

let user = {
  name: "John",
  age: 20,
};

// let cloneUser = {};
// for (let i in user) {
//   //   cloneUser["name"];
//   //   cloneUser["age"];
//   cloneUser[i] = user[i];
// }
// cloneUser.name = "Rose";
// user.name = "Jobs";
// console.log(user);
// console.log(cloneUser);

const { name, age } = user;
console.log(name);
