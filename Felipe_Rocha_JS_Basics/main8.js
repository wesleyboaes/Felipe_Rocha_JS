// All false results
const x = "";
const y = 0;
const z = null;
const w = undefined;

console.log(!!x); // !! Verify if it's true or false (an empty value is always false)
console.log(!!y);
console.log(!!z);
console.log(!!w);

// Empty list is true
const list = [];

// Empty object is true
const object = {};

console.log(!!list);
console.log(!!object);
