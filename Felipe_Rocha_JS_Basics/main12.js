// Select just one element

// const addUserText = document.getElementById("add-user");
// console.log(addUserText);
//addUserText.innerText = "Adicionar Usuário"; // Changes the selected ID value

const addUserText = document.querySelector("#add-user"); // Here I can chose between ID, Class, and others. Just need to use # to ID.
console.log(addUserText);
addUserText.textContent = "Adicionar Usuário";

const myForm = document.querySelector(".container #my-form");
console.log(myForm);

const myItem = document.querySelector(".item"); // Just return the first element of the class, even if has more then one
console.log(myItem);

// Select more elements at once

const allItems = document.querySelectorAll(".item"); // Recommended to use
console.log(allItems);

const allItems2 = document.getElementsByClassName("item"); // Can't use list methods
console.log(allItems2);

const getTag = document.getElementsByTagName("li"); // Can't use list methods
console.log(getTag);
