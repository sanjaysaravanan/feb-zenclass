// const printHello = () => {
//   console.log("Printing Hellow");
// }


// function NormalFlow (printHello) {
//   console.log("some operation");
//   printHello();
//   console.log("Another operation");
// }

// NormalFlow(printHello);


// const someList = ['man', 'women', 'child'];

// const addKind = (ele) => ele + "kind";

// var newList = someList.map(addKind);
// console.log(newList);


// const func = () => {
//   console.log("Log from function one");
// }
// ;
// const func2 = () => {
//   console.log("Log from func2");
// }


// const display = (res) => {
//   console.log(res);
// }
// const sum = (a, b, callbackfunc) => {
//   callbackfunc(a+b);
// }

// sum(10, 20, display);

setTimeout(myFunc, 1000);

function myFunc(){
  console.log("MyFunc is being executed");

}

// Callback Hell
function Main() {
  setTimeout(() => {
    setInterval(() => {
      console.log("Some Output which need to be passed back to main function");
    }, 1000);
  }, 1000)
}

Main();