
var CreateShape = function () {
   if (gameOver)
      return;
   if (this.classList.contains("g_circle"))
      return;
   if (this.classList.contains("g_cross"))
      return;
   if (circlePlaying)
      this.classList.add("g_circle");
   else
      this.classList.add("g_cross");
   circlePlaying = !circlePlaying;
   document.querySelector(".g_player").innerHTML = circlePlaying ? "circle" : "cross";
   CheckIfSomebodyWins();
}

var CheckIfSomebodyWins = function() {

   CheckRow(0, 1, 2);
   CheckRow(3, 4, 5);
   CheckRow(6, 7, 8);
   CheckRow(0, 3, 6);
   CheckRow(1, 4, 7);
   CheckRow(2, 5, 8);
   CheckRow(0, 4, 8);
   CheckRow(6, 4, 2);


   for (var i = 0; i < boxes.length; i++) {
      if (!boxes[i].classList.contains("g_cross") && !boxes[i].classList.contains("g_circle"))
         return;
   }
   Draw();
}

var CheckRow = function(first, second, third) {
   if (boxes[first].classList.contains("g_cross") &&
      boxes[second].classList.contains("g_cross") &&
      boxes[third].classList.contains("g_cross")) {
      CrossWins();
      return true;
   }
   
   if (boxes[first].classList.contains("g_circle") &&
      boxes[second].classList.contains("g_circle") &&
      boxes[third].classList.contains("g_circle")) {
      CircleWins();
      return true;
   }

   return false;
}

var NewGameF = function () {
   console.log("new game f");
   document.querySelector(".g_gameOverMessage").style.display = "none";
   gameOver = false;
   for (var i = 0; i < boxes.length; i++) {
      boxes[i].classList.remove("g_circle");
      boxes[i].classList.remove("g_cross");
   }
   document.removeEventListener("keydown", NewGameF);
   circlePlaying = Math.random() >= 0.5;

}

var GameOverF = function () {
   console.log("game over f");
   document.querySelector(".g_gameOverMessage").style.display = "";
   gameOver = true;
   document.addEventListener("keydown", NewGameF);
}

var CrossWins = function () {
   document.querySelector(".g_gameOverMessage .message").innerHTML = "CROSSES WINS!";
   GameOverF();
}

var CircleWins = function () {
   document.querySelector(".g_gameOverMessage .message").innerHTML = "CIRCLES WINS!";
   GameOverF();

}

var Draw = function () {
   document.querySelector(".g_gameOverMessage .message").innerHTML = "ITS A DRAW!";
   GameOverF();

}


var gameOver = false;
var circlePlaying = Math.random() >= 0.5;

document.querySelector(".g_gameOverMessage").style.display = "none";
var boxes = document.querySelectorAll(".g_shape");
for (var i = 0; i < boxes.length; i++) {
   boxes[i].addEventListener("click", CreateShape);
}

