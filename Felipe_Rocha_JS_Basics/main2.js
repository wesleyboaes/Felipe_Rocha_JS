const numbers = [1, 2, 3, 4, 5];

// Apply the function on each element
const doubleNumbers = numbers.map(function (number) {
  return number * 2;
});

console.log(doubleNumbers);

const ages = [8, 13, 27, 30, 22, 40];

// If the condition is true, returns value
const evenAges = ages.filter(function (age) {
  return age % 2 === 0;
});

console.log(evenAges);

const sumAges = ages.reduce(function (age, accumulator) {
  return accumulator + age;
}, 0); // Initial value is zeros

console.log(sumAges);
