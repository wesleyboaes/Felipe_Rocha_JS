let i = 0;

while (i < 10) {
  console.log(i, "is less than 10!");
  i++;
}

const person = {
  name: "John",
  age: 30,
};

for (property in person) {
  console.log(person[property]); // First loop is person.name and the second is person.age => Have a bad performance in JS
}
