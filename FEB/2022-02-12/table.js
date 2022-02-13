var table = document.createElement('table');
table.setAttribute('class', 'table');

var thead = document.createElement('thead');
thead.setAttribute('class', 'table-dark');

const createTableEle = (elementname, value="") => {
  var ele = document.createElement(elementname);
  ele.innerHTML = value;
  return ele;
}

var trEle = createTableEle('tr');


trEle.append(createTableEle('th', 'First'), createTableEle('th', 'Last'));

thead.appendChild(trEle);
table.appendChild(thead);


var tbody = document.createElement('tbody');
var trow = createTableEle('tr');
trow.append(createTableEle('td', 'john'), createTableEle('td', 'doe'));

tbody.appendChild(trow);

table.appendChild(tbody);

document.body.appendChild(table);