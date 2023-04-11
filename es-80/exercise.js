const isLogged = true;

const promise = (isLogged) => {
  return new Promise((resolve, reject) => {
    if (isLogged) {
      resolve(Math.random());
    } else {
      reject("doesn't work");
    }
  });
};

const promise2 = (number) => {
  return new Promise((resolve, reject) => {
    if (number > 0.5) {
      resolve({ name: "John", age: 24 });
    } else {
      reject("that number isn't over 0.5");
    }
  });
};

promise(isLogged)
  .then(promise2)
  .then((user) => console.log(user))
  .catch((message) => console.log(`${message}`));
