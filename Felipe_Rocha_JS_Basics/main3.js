const person = {
  firstName: "Wesley",
  lastName: "Boaes",
  age: 33,
  hobbies: ["Study", "Drive", "Walk"],
  wife: {
    firstName: "Maiara",
    lastName: "Boaes",
    age: 35,
    hobbies: ["Social Media", "Walk", "Bicycle"],
  },
};

// firstName = person.firstName;
// lastName = person.lastName;
// age = person.age;
// hobbies = person.hobbies;

// Same as above
const {
  firstName: primeiroNome,
  lastName,
  age,
  hobbies,
  wife: { age: wifeAge },
} = person;

const walk = person.hobbies[2];

console.log(primeiroNome);
console.log(lastName);
console.log(age);
console.log(hobbies);
console.log(walk);

// person.wife = "Maiara";

console.log(person.wife.firstName);
console.log(wifeAge);

const toDo = [
  {
    id: 1,
    description: "Study",
    isCompleted: false,
  },
  {
    id: 2,
    description: "Read",
    isCompleted: true,
  },
  {
    id: 3,
    description: "Walk",
    isCompleted: true,
  },
];

console.log(toDo[2].description);
