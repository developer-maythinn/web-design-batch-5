// let a, b, rest;
// [a, b, ...rest] = [10, 20, 30, 40, 50, 60];
// console.log("a", a)
// console.log("b", b)
// console.log("rest", rest, rest[1])

// Basic variable assignment
let user = ["John", 20, "Ygn", "white"];
let [name, age, ...city] = user;
console.log(name, age, city, city[1]);
