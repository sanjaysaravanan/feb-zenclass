var btnEle = document.createElement('button');
btnEle.setAttribute('type', 'button');
btnEle.classList.add('btn', 'btn-primary');

btnEle.innerText = 'Click Me';

const addPara = () => {
  var paraEle = document.createElement('p');
  paraEle.innerText = "This is a Para";
  paraEle.style.color = "red";
  document.body.appendChild(paraEle);
}


btnEle.addEventListener('click', addPara);
document.body.appendChild(btnEle);