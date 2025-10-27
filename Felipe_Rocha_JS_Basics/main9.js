function sum(a, b) {
  return a + b;
}

sumValue = sum(2, 2);

console.log(sumValue);

const sumArrow = (a, b) => {
  return a + b;
};
// Above is the same thing as below
const sumArrow2 = (a, b) => a + b;

sumOtherValue = sumArrow(1, 1);
sumOtherValue2 = sumArrow2(3, 3);

console.log(sumOtherValue);
console.log(sumOtherValue2);
