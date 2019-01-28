// JavaScript source code
function SetColors() {
   var i = 0;
   for (0; i < playableCount; i++) {
      colorBoxes[i].style.backgroundColor = colors[i];
   }
   for (; i < colorBoxes.length; i++) {
      colorBoxes[i].style.backgroundColor = "#232323";

   }
}
function SetUp() {
   for (var i = 0; i < playableCount; i++) {
      colors[i] = getRandomColor();
   }
   selectedIndex = getRandomInt(0, playableCount);
   SetColors();

   document.querySelector("#rgb").textContent = colors[selectedIndex];
   document.querySelector("#topBar").style.backgroundColor = "#232323";
}

function rgb(r, g, b) {
   var decColor = 0x1000000 + b + 0x100 * g + 0x10000 * r;
   //return '#' + decColor.toString(16).substr(1);
   return "rgb(" + r + ", " + g + ", " + b + ")";
}

function getRandomColor() {
   return rgb(getRandomInt(0, 256), getRandomInt(0, 256), getRandomInt(0, 256))
}

function getRandomInt(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min)) + min;
   //The maximum is exclusive and the minimum is inclusive
}

function OnDificultyClick() {
   var options = document.querySelectorAll(".dificulty")
   for (var i = 0; i < options.length; i++) {
      options[i].classList.remove("active");
      if (this == options[i]) {
         options[i].classList.add("active");

         playableCount = i * 3 + 3;
      }
   }
   SetUp();
}

function onColorBoxClick() {


   if (this.style.backgroundColor == colors[selectedIndex]) {
      playerWin();
   } else
      this.style.backgroundColor = "#232323";
}

function playerWin() {
   for (var j = 0; j < playableCount; j++) {
      colorBoxes[j].style.backgroundColor = colors[selectedIndex];
   }
   document.querySelector("#topBar").style.backgroundColor = colors[selectedIndex];

}