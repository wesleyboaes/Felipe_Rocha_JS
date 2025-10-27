const loginUser = (email, password) => {
  setTimeout(() => {
    console.log("User logged!");
    return { email: email };
  }, 1500);
};

const user = loginUser("wesleyboaes@gmail.com", "123456");

console.log({ user });
