for (let index = 0; index < 10; index++) {
  console.log(index);
}

const cars = ["Ferrari", "Tesla", "Audi"];

for (let i = 0; i < cars.length; i++) {
  console.log(i, cars[i]);
}

for (let car of cars) {
  console.log(car);
}

cars.forEach(function (car, index) {
  console.log("The car number", index, "is", car);
});
