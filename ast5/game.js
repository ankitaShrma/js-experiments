var KEY = {
    
    LEFT:     37,
    UP:       38,
    RIGHT:    39,
    DOWN:     40,
   
  };


var $container = document.getElementById('container');

var  $movingBall = document.createElement('div');
$movingBall.style.background = 'red';
$movingBall.className = "ball";
$container.appendChild($movingBall);


var $movingBall2 = document.createElement('div');
$movingBall2.style.background = 'black';
$movingBall2.className = "ball2";
$container.appendChild($movingBall2);

console.log($movingBall)	//div class


function getRandomValue(){
	return (Math.floor(Math.random()*250));
}
console.log($movingBall)
console.log($movingBall2)

var speed = 20;


function getClass(whichBall){
	
var ball = {
	x: getRandomValue(),
	y: getRandomValue(),
	dx: 1,
	dy: 1,
	$elem : whichBall,
	
}

return ball;



}
a = getClass($movingBall);
b = getClass($movingBall2);
console.log(a + 'hi')




//console.log(ball.$elem + 'lol')
updateBall(a);
updateBall(b);




document.addEventListener('keydown', function(event) {
  switch (event.keyCode) {
    case 37: // Left
    if(a.dx!=-1)      a.dx = -a.dx;
    break;

    case 38: // Up
    if(a.dy!=-1)
      a.dy = -a.dy
    break;

    case 39: // Right
    if(a.dx!=1)
      a.dx = -a.dx;
    break;

    case 40: // Down
    if(a.dy!=1)
      a.dy = -a.dy
    break;
  }
}, false);


setInterval(function(){
	
	

	// console.log(ball.x + '  ' + ball.y);
	checkBoundaryCollision(a);
	checkBoundaryCollision(b);

	checkCollision(a,b);
	a.x = a.x + a.dx * speed;
	a.y = a.y + a.dy * speed;
	b.x = b.x + b.dx * speed;
	b.y = b.y + b.dy * speed;

	updateBall(a);
	updateBall(b);

}, 100);

function updateBall(ball){
	//ball.forEach(function(a){
	ball.$elem.style.top = ball.y + 'px';
	ball.$elem.style.left = ball.x + 'px';
	//})
}

function checkBoundaryCollision(ball){

	var ballLeft = ball.x;
	var ballRight = ball.x + 10;
	var ballTop = ball.y;
	var ballBottom = ball.y + 10;

	var containerTop = 10;
	var containerLeft = 10;
	var containerRight = 480;
	var containerBottom = 480;

	//ball.right = ball.left + ball.width
	
	if (ballRight > containerRight) {
		ball.dx = -ball.dx;
		// console.log(ball.y)
	}
	if (ballBottom > containerBottom) {
		ball.dy = -ball.dy;
	}
	if (ballTop < containerTop) {
		ball.dy = -ball.dy;
	}
	if (ballLeft < containerLeft){
		ball.dx = -ball.dx;
		// alert('Left ma gayo');
	}
}

function checkCollision(rect1, rect2){



//console.log('lol', rect1.x, rect2.x)
// var rect1 = {x: 5, y: 5, width: 50, height: 50}
// var rect2 = {x: 20, y: 10, width: 10, height: 10}

if (rect1.x < rect2.x + 20 && rect1.x + 20 > rect2.x && rect1.y < rect2.y + 20 && 20 + rect1.y > rect2.y) {
     console.log('collision', rect2.dx, rect2.dy)
    rect2.dx = -rect2.dx;
    rect2.dy = -rect2.dy;
    rect1.dx = -rect1.dx;
    rect1.dy = -rect1.dy;
   
    console.log('collision haha', rect2.dx, rect2.dy)
}
}

