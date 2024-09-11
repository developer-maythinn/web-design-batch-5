// **************** map, find, filter, some, every, includes, indexOf, findIndex

let users = [
  {
    name: "Person 1",
    age: 31,
    city: "Ygn",
  },
  {
    name: "Person 2",
    age: 21,
    city: "Mdy",
  },
  {
    name: "Person 3",
    age: 23,
    city: "Ygn",
  },
];
// console.log(users[0].name, users[0].age);
// console.log(users[1].name, users[1].age);

let getAllNames = users.map((user) => {
  console.log(user);
  const { name, age, city } = user;
  //   return name;
  return `${name} age is ${age} and live in ${city}`;
});
console.log(getAllNames);
