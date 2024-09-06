// Logical operators (&& ||)

function getName(name) {
  return name;
}

// console.log(getName("John"));
// console.log(true && "hello"); // hello
// console.log(false && "hello"); // false
// console.log(true && getName("John"))

// console.log(true || "hello"); // true
// console.log(false || "hello"); // hello
// console.log(getName("John") || true);

// Template literals (string template)

let name1 = "MT";
let name2 = "Coding";
console.log(name1 + " " + name2);
console.log(`${name1} ${name2}`);

// Ternary operator
let showFruit = true;

// if (showFruit) {
//   console.log(getName("apple"));
// } else {
//   console.log(getName("Orange"));
// }

showFruit ? console.log(getName("apple")) : console.log(getName("orange"));
