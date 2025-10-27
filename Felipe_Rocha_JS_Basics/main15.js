const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const submitButton = document.querySelector("#submit-button");
const errorMessage = document.querySelector(".msg");
const items = document.querySelector(".items");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const nameValue = nameInput.value;
  const emailValue = emailInput.value;

  if (nameValue === "" || emailValue === "") {
    // errorMessage.innerHTML =
    //   "<p style='color: red;'>Please, fill out the fields!<p/>"; // I did like this

    errorMessage.textContent = "Please, fill out the fields!"; // Teacher did like this
    errorMessage.classList = "error"; // Got the class style defined to error

    setTimeout(() => {
      errorMessage.textContent = "";
      errorMessage.classList = "";
    }, 3000);

    return; // To leave the function
  }
  // else {
  //     items.children[0].textContent = nameValue;
  //     items.children[1].textContent = emailValue;
  //   }

  const li_1 = document.createElement("li");
  const li_2 = document.createElement("li");

  li_1.classList = "item";
  li_1.textContent = `Name: ${nameValue}`;
  li_2.classList = "item";
  li_2.textContent = `Email: ${emailValue}`;

  items.appendChild(li_1);
  items.appendChild(li_2);

  nameInput.value = ""; // Clean the name field
  emailInput.value = ""; // Clean the email field
});
