const sum = 1 + 3;

if (sum === 2) {
  console.log(sum, "is equals 2!");
} else if (sum === 3) {
  console.log(sum, "is equals 3!");
} else {
  console.log(sum, "is not equal to 2 or 3 either!");
}

const sum1 = 2 + 2;
const sum2 = 3 + 3;

if (sum1 === 4 && sum2 === 6) {
  console.log(sum1, "is 4 and", sum2, "is 6.");
}
if (sum1 === 4 || sum2 === 6) {
  console.log(sum1, "is 4 or", sum2, "is 6.");
}

let number = sum === 2 ? 2 : 4;
console.log(number);

const car = "Ferrari";

switch (car) {
  case "Mercedes":
    console.log("It's a Mercedes!");
    break;
  case "Ferrari":
    console.log("It's a Ferrari");
    break;
  case "Tesla":
    console.log("It's a Tesla");
    break;
}
