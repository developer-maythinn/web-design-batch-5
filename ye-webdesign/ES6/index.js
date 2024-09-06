const id = 1;
const productName = "Product 1";
const rating = 5;

const product = { id, productName, rating };
// console.log(product.id, product.productName);

const product2 = {
  description: "Product description",
  id,
  productName,
  rating,
};
// console.log(product2.description);

const { description } = product2;
// console.log(description);

// *******************************

const arr1 = [1, 2, 3];
// let firstItem = arr1[0];
// let secondItem = arr1[1];

const [firstEle, secondEle, thirdEle, fourthEle] = arr1;
// console.log(firstEle, secondEle, thirdEle, fourthEle);

// *******************************
// default parameter, rest, spread
function sum(num1 = 1, num2 = 3) {
  console.log(num1, num2);
  return num1 + num2;
}
// console.log(sum());
// console.log(sum(10, 20));

// ************** spread
let arrItem1 = [1, 2, 3];
let arrItem2 = [4, 5, 6];
// console.log([10, ...arrItem1, 20, ...arrItem2, 30]);

// ************** rest

function rest(a, b, ...c) {
  //   console.log(a, b, c);
}
rest(1, 2, 3, 4, 5, 6, 7, 8);

// ************** map, find, filter, some, every, includes, indexOf, findInex
let users = [
  {
    name: "Person 01",
    age: 31,
    city: "Mdy",
  },
  {
    name: "Person 1",
    age: 21,
    city: "Ygn",
  },
  {
    name: "Person 2",
    age: 22,
    city: "Mdy",
  },
  {
    name: "Person 3",
    age: 25,
    city: "Ygn",
  },
];
// let getAllNames = users.map((user, index) => {
//   console.log(user, index);
//   const { name, age, city } = user;
//   //   return user.name;
//   //   return `${user.name} age is ${user.age} and live in ${user.city}`;

//   return name;
// });
// console.log(getAllNames);

// let getUserFromYgn = users.find(user => user.city === "Ygn");
// console.log(getUserFromYgn);

// let getAllUsersYgn = users.filter(user => user.city === "Ygn");
// console.log(getAllUsersYgn);

// let getUserSome = users.some((user) => {
//   return user.age > 30;
// });
// console.log(getUserSome); // true

// let getUserEvery = users.every((user) => {
//   return user.age >= 21;
// });
// console.log(getUserEvery);

let fruits = ["apple", "orange", "mango"];
// console.log(fruits.includes("orange"));
// console.log(fruits.includes("pineapple"));
// console.log(fruits.indexOf("orange"));
// console.log(fruits.indexOf("pineapple"));

let getUserIndexYgn = users.findIndex((user) => user.city === "Ygn");
console.log(getUserIndexYgn);
