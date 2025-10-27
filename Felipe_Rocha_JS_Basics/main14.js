const submitButton = document.querySelector("#submit-button");
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  //   console.log(event);
  //   console.log("Clicked!");

  //   const nameValue = nameInput.value;
  //   console.log(nameValue);

  const nameValue = nameInput.value;
  const emailValue = emailInput.value;

  if (nameValue === "" || emailValue === "") {
    return alert("Please, fill out all the fields!");
  }

  myForm.style.background = "red";
});

const items = document.querySelector(".items");
console.log(items.children[1].textContent);

nameInput.addEventListener("change", function (e) {
  console.log(e.target.value);
  items.children[0].textContent = e.target.value;
});
emailInput.addEventListener("change", function (e) {
  items.children[1].textContent = e.target.value;
});

const body = document.querySelector("body");
body.style.background = "white";
