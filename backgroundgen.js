var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var button = document.getElementById("gradient");
button.style.background = "linear-gradient(to right ," + color1.value + ","+ color2.value +")";
css.textContent = button.style.background + ";" ;
function changeBackground(){
button.style.background = "linear-gradient(to right ," + color1.value + ","+ color2.value +")";
css.textContent = button.style.background + ";" ;
}
color1.addEventListener("input",changeBackground);

color2.addEventListener("input",changeBackground);
