'use strict';
var direction = 'right';
const element = document.querySelector("#"+"snake");
const style = getComputedStyle(element);
setInterval(function(){
  var snakeCollideWithFood = isCollide(document.getElementById('snake'),document.getElementById('food'));
  if(snakeCollideWithFood)
  {
    console.log("h1");
    document.getElementById('food').marginLeft = Math.floor(Math.random() * 100) + "px";
    console.log(document.getElementById('food').marginLeft);
   // document.getElementById('food').marginLeft = Math.floor(Math.random() * 100) + "px";
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
          moveSnakeRight()
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
  const newPos = parseInt(style.marginLeft)+ 20  + "px";
  document.getElementById("snake").style.marginLeft = newPos;
}
function moveSnakeLeft() {
  const newPos = parseInt(style.marginLeft)- 20  + "px";
  document.getElementById("snake").style.marginLeft = newPos;
}
function moveSnakeDown()
{
  const newPos = parseInt(style.marginTop)+ 20  + "px";
  document.getElementById("snake").style.marginTop = newPos;

}
function moveSnakeUp()
{
  const newPos = parseInt(style.marginTop)- 20  + "px";
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
