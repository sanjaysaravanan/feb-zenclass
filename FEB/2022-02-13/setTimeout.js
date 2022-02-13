const myTimeout = setTimeout(() => {
  let h1Tag = document.createElement('h1');
  h1Tag.innerHTML = "I am the H1 Created using SetTimeout"
  document.getElementById('time-out').appendChild(h1Tag);
}, 3000);


const myInterval = setInterval(() => {
  document.getElementById('time-area').innerHTML = new Date();
}, 1000);


const stopFunction = () => {
  setTimeout(() => {
    clearTimeout(myTimeout);
    clearInterval(myInterval);
    const h2Tag = document.createElement('h2');
    h2Tag.innerText = "Timer Stopped";
    document.getElementById('interval').appendChild(h2Tag);
  }, 10000)
}

stopFunction();