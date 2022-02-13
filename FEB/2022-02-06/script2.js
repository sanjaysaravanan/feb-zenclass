// var container = document.createElement('div');
// container.setAttribute('class', 'container');

// var row = document.createElement('div');
// row.setAttribute('class', 'row');

// var column = document.createElement('div');
// column.setAttribute('class', 'col');


// row.append(column);
// container.append(row);
// document.body.append(container);


// var ele = document.getElementById('same-id');
// console.log(ele);
// ele.style.height = '100px';
// ele.style.width = '100px';
// ele.style.backgroundColor = 'green';

var eles = document.getElementsByClassName("main");
console.log(eles);

var ele = document.querySelector('.main');
console.log(ele);

var elements = document.querySelectorAll('.main');
console.log(elements);

console.log("### ID ###")
var idEle = document.querySelector("#some-id");
console.log(idEle);

var idEles = document.querySelectorAll("#some-id");
console.log(idEles);


const foo = () => {
  var inpEle = document.querySelector("#inp");
  console.log(inpEle.value);
}