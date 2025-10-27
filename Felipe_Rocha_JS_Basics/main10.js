class Person {
  constructor(firstName, lastName, age, hobbies) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.hobbies = hobbies;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  static speak() {
    // Doesn't need to instantiate the class with, in this case, the Person values. So it's static.
    return "Hello World!";
  }
}

const wesley = new Person("Wesley", "Boaes", 33, ["Study", "Walk", "Drive"]);
const maiara = new Person("Maiara", "Boaes", 35, [
  "Social Media",
  "Walk",
  "Read",
]);

console.log(wesley);
console.log(maiara);

console.log(wesley.getFullName());
console.log(Person.speak());
