// looping

// for (let i = 0; i < 20; i++) {
//   console.log(i);
// }

let colors = ["white", "black", "pink", "blue", "yellow", "red"];
// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);
// console.log(colors[3]);
// console.log(colors.length);
// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

//  For of (array and string)
// for(let color of colors){
//     console.log(color)
// }

// let username = "John";
// for(let i of username){
//     console.log(i)
// }

// For in (Object)
// let person = {
//   name: "John",
//   age: 20,
//   city: "Ygn",
//   color: "White"
// };
// console.log(person.name);
// console.log(person["name"]);
// console.log(person["age"]);
// console.log(person["city"]);
// for(let i in person){
//     console.log(person[i])
// }

let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 2) {
    // break;
    continue;
  }
  text += i;
}
console.log(text);
