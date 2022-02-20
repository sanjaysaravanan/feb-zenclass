var grandParent = document.getElementById("grand-parent");
var parent = document.getElementById("parent");
var child = document.getElementById("child");




document.addEventListener('click', (e) => {
  console.log(e.target);
  if(e.target.id === "child") {
    console.log("Child Element");
  }
});






