// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// let colors = ["white", "black", "blue", "green"];
// // console.log(colors.length);
// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

// let person = {
//   name: "John",
//   age: 30,
//   address: "Yangon",
//   color: "white",
// };
// // console.log(person.name, person.age, person.address);
// for (let i in person) {
//   console.log(person[i]);
// }

// let colors = ["white", "black", "blue", "green"];
// let colors = "White";
// for (let i of colors) {
//   console.log(i);
// }
let text = null;
for (i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text += "The number is " + i;
}
console.log(text);
