var tableTag = document.createElement('table');

tableTag.classList.add('table');

var theadTag = document.createElement('thead');
theadTag.setAttribute('class','table-info');
var tbodyTag = document.createElement('tbody');

const createTableElement = (tagName, value='') => {
  var element = document.createElement(tagName);
  element.innerHTML = value;
  return element;
}

var trHeader = createTableElement('tr');
var thHeaderId = createTableElement('th', '#');
var thHeaderFirst = createTableElement('th', 'First');
var thHeaderLast = createTableElement('th', 'Last');

trHeader.append(thHeaderId, thHeaderFirst, thHeaderLast);

theadTag.appendChild(trHeader);


const data = [{first: 'Mark', last: 'Otto'}, {first: 'Jacob', last: 'Thornton'}, {first: 'Sanjay', last: 'Saravanan'}];

data.forEach((obj, index) => {
  var trBody = createTableElement('tr');
  var tdBodyId = createTableElement('td', index + 1);
  var tdBodyFirst = createTableElement('td', obj.first);
  var tdBodyLast = createTableElement('td', obj.last);
  trBody.append(tdBodyId, tdBodyFirst, tdBodyLast);
  tbodyTag.appendChild(trBody);
});


tableTag.append(theadTag, tbodyTag);

document.body.append(tableTag);


// const createHTMLElement = (tagName, value='') => {
//   var element = document.createElement(tagName);
//   element.innerHTML = value;
//   return element;
// }


// const addContent = () => {
//   var element = createHTMLElement('h1', 'Sample');
//   element.style.color = 'red';
//   document.body.append(element);
// }


// var btnElement = document.createElement('button');

// btnElement.setAttribute('type', 'button');

// btnElement.classList.add('btn', 'btn-primary');

// btnElement.innerText = "Click Me to Add Some Content";

// // btnElement.addEventListener('click', addContent);
// btnElement.addEventListener('mouseover', () => {
//   element.style.color = 'red';
// });



// document.body.appendChild(btnElement);


// var divTag = document.createElement('div');
// divTag.innerText = "Sample Text";
// divTag.style.fontSize = "32px";


// divTag.addEventListener('mouseover', () => {
//   divTag.style.color = "green";
//   console.log("triggered Event over")
// });

// divTag.addEventListener('mouseleave', () => {
//   divTag.style.color = "black";
//   console.log("triggered Event leave")
// });


var btnEle = document.createElement('button');

btnEle.innerText = "Click Me To Open Prompt";
btnEle.style.fontSize = "32px";


btnEle.addEventListener('click', () => {
  var userInput = prompt("Enter a value", 'I am Default');
  var spanElement = document.createElement('span');
  spanElement.innerText = userInput || "Defautl Value";
  spanElement.style.color = 'blue';
  spanElement.style.fontSize = '32px';
  document.body.appendChild(spanElement);
});


document.body.appendChild(btnEle);


// var userInput = prompt("Enter a value", 'I am Default');
//   var spanElement = document.createElement('span');
//   spanElement.innerText = userInput || "Defautl Value";
//   spanElement.style.color = 'blue';
//   spanElement.style.fontSize = '32px';
//   document.body.appendChild(spanElement);