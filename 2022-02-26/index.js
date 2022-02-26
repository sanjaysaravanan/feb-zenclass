



const sampleFunc = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    if (num < 50) {
      resolve(num * 2);
    } else {
      reject("Num exceeded 50, Hence Rejected");
    }
  }, 2000);
  });
}

sampleFunc(10)
.then((result) => {
  console.log("Promise Has been Fullfilled");
  console.log(result);
  return sampleFunc(result);
}).then((result) => {
  console.log("Second Promise Has been Fullfilled");
  console.log(result);
  return sampleFunc(result);
}).then((result) => {
  console.log("Third Promise Has been Fullfilled");
  console.log(result);
  return sampleFunc(result);
})
.catch((errReult) => {
  console.log("Promise has been rejected");
  console.log(errReult);
}).finally(() => {
  console.log("I am finally, I will be executed all the after the try block irrrespective errors");
});


// Promise All
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Finished First");
    resolve("first");
  }, 1000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Finished second");
    resolve("seond");
  }, 2000);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Finished third");
    resolve("third");
  }, 3000);
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
}).catch(err => console.log(err));


