function createCounter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());
