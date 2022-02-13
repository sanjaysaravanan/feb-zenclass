const textOnChange = (e) => {
  console.log(e.target.value);
}

const inpElement = document.getElementById('inp');

inpElement.addEventListener('click', (e) => {
  var x = e.clientX;     // Get the horizontal coordinate
  var y = e.clientY;     // Get the vertical coordinate
  var coor = "X coords: " + x + ", Y coords: " + y;
  console.log(coor)
  console.log(e.target);
});

inpElement.addEventListener('change', (e) => {
  console.log(e.target.value);
});