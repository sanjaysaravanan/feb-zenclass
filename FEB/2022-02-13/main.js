// console.log(window);
// console.log(document);


// const addLocalStorage = () => {
//   let inputFromUser = prompt("Enter Something to Localstorage:");
//   window.localStorage.setItem("inputFromUser", inputFromUser);
// }

// const addSessionStorage = () => {
//   const userInput = window.prompt("Enter Something to SessionStorage:");
//   window.sessionStorage.setItem("Session Storage", userInput);
// }


// const getLocalStorage = () => {
//   const value = window.localStorage.getItem("inputFromUser");
//   console.log(value);
// }

// const removeItemLocalStorage = () => {
//   window.localStorage.removeItem("inputFromUser");
// }


// const timeOutFunc = setTimeout(() => {
//   const h1Tag = document.createElement("h1");
//   h1Tag.innerText = "Some Content";
//   document.body.appendChild(h1Tag);
//   console.log("Content Added");  
// }, 3000);

// const sampleInterVal = setInterval(() => {
//   const timerDiv = document.getElementById('timer');
//   timerDiv.innerText = new Date();
// }, 1000);

// const cleaningFunc = () => {
//   clearTimeout(timeOutFunc);
//   clearInterval(sampleInterVal);
// }


const inpElement = document.getElementById('inp');

const clickFunc = (event) => {
  console.log(event.target.value);
}

inpElement.addEventListener('click', clickFunc);

inpElement.addEventListener('change', (event) => {
  console.log(event.target.value);
});


const sampleDiv = document.getElementById('sample-div');
sampleDiv.addEventListener('click', (event) => {
  console.log(event.target.value);
});

// const removeInpListeners = () => {
//   console.log("Removing Event Listeners Of INP")
//   inpElement.removeEventListener('click', clickFunc);
// }

