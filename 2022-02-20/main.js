
// const callbackFunc = (a, b) => {
//   return a + b;
// }

// const multiple = (a, b) => {
//   return a * b;
// }


// const mainFunc = (myFunc, mulFunc) => {
//   console.log("Getting Values of a, b");
//   const resAdd = myFunc(10, 20);
//   const resMul = mulFunc(resAdd, 100);
//   console.log("Output", resMul);
// }


// mainFunc(callbackFunc, multiple);



// const someList = ['man', 'women', 'child'];

// const addKind = (ele) => ele + 'kind';

// const resList = someList.map(addKind);

// console.log(resList);


// const logFunc = () => console.log("Log 2")


// console.log("Log 1");
// setTimeout(logFunc, 1000);
// console.log("Log 3");

// 2s get id student
// 2s use the id and fetch the name and age
// 2s use the name and fetch biodata


// id ---> name ---> biodata
// setTimeout(() => {
//   const id = 21;
//   console.log("Fetched Student Id");
//   console.log("Student Id: ", id);
//   fetchName(id);
// }, 2000);


// const fetchName = (id) => {
//   setTimeout((idFromArge) => {
//     console.log("Got Id from arguements", idFromArge);
//     const name = "Sanjay";
//     console.log("Got Name using Id, Name: ", name);
//     bio = fetchBio(name);
//   }, 2000, id);
// } 

// const fetchBio = (name) => {
//   setTimeout((nameFromParent) => {
//     console.log("Got Name from arguements", nameFromParent);
//     console.log("Fetched Bio using name", 21, "1997")
//   }, 2000, name);
// }
console.log( "gettingInput" );
var inp;
setTimeout(() => {
  inp = "Some Ouput"; // result of some operations
  console.log("After Time Inside CallBack", inp);
}, 1000);
console.log(inp);