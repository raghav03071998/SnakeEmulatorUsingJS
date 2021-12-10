'use strict';
var direction = 'right';
const element = document.querySelector("#"+"snake");
const style = getComputedStyle(element);
var score = 0;
var speed = 20;
document.getElementById("labelScore").innerText = score;
setFoodPosition();
setObstaclePosition();
setScorePosition();
setInterval(function(){
  
  var snakeCollideWithFood = isCollide(document.getElementById('snake'),document.getElementById('food'));
  var snakeCollideWithobstacle = isCollide(document.getElementById('snake'),document.getElementById('obstacle'));
  var snakeCollideWithBox = isCollide(document.getElementById('snake'),document.getElementById('box'));
  if(snakeCollideWithFood )
  {
    handleSnakeFoodCollision();
    setFoodPosition();
  }
  if(snakeCollideWithobstacle|| !snakeCollideWithBox)
  {
    alert('Game over');
   // setObstaclePosition();
    resetGame();
  }
  document.addEventListener('keydown', function(e) {
    switch (e.keyCode) {
        case 37:
            direction = 'left';
            break;
        case 38:
          direction = 'up'
            break;
        case 39:
          direction = 'right'
            break;
        case 40:
          direction = 'down'
            break;
    }
  });
     if(direction == 'left')
     {
        moveSnakeLeft();
     }
     else if (direction == 'up')
     {
     moveSnakeUp();   
     }
     else if (direction == 'down')
     {
       moveSnakeDown();
     }
     else 
     {
       moveSnakeRight();
     }
  }, 1000);
function moveSnakeRight() {
  const newPos = parseInt(style.marginLeft)+ speed  + "px";
  document.getElementById("snake").style.marginLeft = newPos;
}
function moveSnakeLeft() {
  const newPos = parseInt(style.marginLeft)- speed  + "px";
  document.getElementById("snake").style.marginLeft = newPos;
}
function moveSnakeDown()
{
  const newPos = parseInt(style.marginTop)+ speed  + "px";
  document.getElementById("snake").style.marginTop = newPos;
}
function moveSnakeUp()
{
  const newPos = parseInt(style.marginTop)- speed  + "px";
  document.getElementById("snake").style.marginTop = newPos;
}
function isCollide(a, b) {
  var aRect = a.getBoundingClientRect();
  var bRect = b.getBoundingClientRect();

  return !(
      ((aRect.top + aRect.height) < (bRect.top)) ||
      (aRect.top > (bRect.top + bRect.height)) ||
      ((aRect.left + aRect.width) < bRect.left) ||
      (aRect.left > (bRect.left + bRect.width))
  );
}
function setFoodPosition()
{

  var topRandom = (Math.random() * (5 - 1.6) + 1.6)*100;
  var leftRandom = (Math.random() * (7.5 - 2) + 2)*100;
  document.getElementById("food").style.top = Math.floor(topRandom) + "px";
  document.getElementById("food").style.left = Math.floor(leftRandom) + "px";
}
function setObstaclePosition()
{
  var topRandom = (Math.random() * (5 - 1.6) + 1.6)*100;
  var leftRandom = (Math.random() * (7.5 - 2) + 2)*100;
  document.getElementById("obstacle").style.top = Math.floor(topRandom) + "px";
  document.getElementById("obstacle").style.left = Math.floor(leftRandom) + "px";
}
function setScorePosition()
{
  document.getElementById("score").style.top =   "550px";
  document.getElementById("score").style.left = "468px";
}

function handleSnakeFoodCollision()
{
  score = score +1;
  speed = speed +2;
  const newWidthOfSnake = parseInt(style.width)+ 5 +"px";
  document.getElementById("snake").style.width = newWidthOfSnake;
  console.log(score);
  document.getElementById("labelScore").innerText = score;
}
function resetGame()
{
  score = 0;
  direction = 'right';
  document.getElementById("labelScore").innerText = score;
  document.getElementById("snake").style.width = "50px";
  document.getElementById("snake").style.height = "10px";
  document.getElementById("snake").style.marginTop = "100px";
  document.getElementById("snake").style.marginLeft = "150px";
  setFoodPosition();
  setObstaclePosition();


}