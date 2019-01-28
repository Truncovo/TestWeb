// JavaScript source code


var colors = [];
var selectedIndex;
var colorBoxes = document.querySelectorAll(".colorBox");
var playableCount = 6;

SetUp();

document.querySelector("#newColors").addEventListener("click", SetUp);

for (var i = 0; i < colorBoxes.length; i++) {
   colorBoxes[i].addEventListener("click", onColorBoxClick);
}

var a = document.querySelectorAll(".dificulty");
for (var i = 0; i < a.length; i++) {
   a[i].addEventListener("click", OnDificultyClick);
}

