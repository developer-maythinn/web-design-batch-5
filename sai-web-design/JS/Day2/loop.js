// for (let i = 0; i <= 100; i++) {
//   console.log(i);
// }

let colors = ["white", "black", "pink", "blue", "green", "yellow", "red"];
// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);
// console.log(colors[3]);
// console.log(colors.length);
// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

// for (let color of colors) {
//   console.log(color);
// }
// let username = "John";
// for (let i of username) {
//   console.log(i);
// }
// let person = {
//   name: "John",
//   age: 20,
//   city: "Yangon",
//   color: "white",
// };

// console.log(person.name);
// console.log(person.age);
// console.log(person.city);

// for (let i in person) {
//   console.log(person[i]);
// }

let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 2) {
    continue;
  }
  text += i;
}
console.log(text);
