const msg = "Hello World!"; // Doesn't change
let msg2 = "Hello!"; // Can be changed

console.log(msg.length);

const firstName = "Wesley";
const lastName = "Boaes";

console.log(`My name is ${firstName} ${lastName}`); // Like f string in Python

const names = "Wesley, Pimenta, Boaes";
console.log(names.split(",")); // Will make a list

const number = 5;
console.log(number.toString()); // Converts to string
console.log(typeof number); // Shows the type
console.log(typeof number.toString()); // Converts the type to string

console.log(2 == 3); // False
console.log(2 == 2); // True

const x = null;
console.log(x);

const y = undefined;
console.log(y);

const lista = [1, 2, 3, 4, 5];
console.log(lista);

const names_2 = ["Wesley", "Pimenta", "Boaes"];
console.log(names_2[2]);

names_2.push("Oliveira"); // Add as the last element
names_2.unshift("Maiara"); // Add as the last element
names_2.pop(); // Removes the last element
console.log(names_2);

console.log(names_2.indexOf("Wesley"));

console.log(names_2.sort());

console.log(Array.isArray(names_2)); // Tells if it's an array
