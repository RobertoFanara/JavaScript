const number = 15;

const promise = new Promise((resolve, reject) => {
  if (number > 10) {
    resolve('it worked!');
  } else {
    reject("doesn't work");
  }
});

promise.then((message) => {
  console.log(`yay ${message}`);
}).catch((message) => {
    console.log(`Ops! ${message} D:`)
});

