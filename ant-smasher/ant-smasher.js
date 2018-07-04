// // function getRandom(min, max) {
// //   return Math.random() * (max - min) + min;
// // }

// function getRandomValue(){
// 	return (Math.floor(Math.random()*250));
// }

// rand =  getRandomValue()

// var data = [];
// for(var u = 0; u<5; u++){
// 	// data.push({ top: getRandom(1,10), left: getRandom(1,10) });
// 	data.push({ top: getRandomValue(), left: getRandomValue() });
// }

// console.log('data', data);

// function createAnt(ant){

// var newDiv = document.createElement('div');

// newDiv.style.position = 'relative'

// var body = document.getElementsByTagName('body')[0];
// body.appendChild(newDiv);

// var obj = {}, arr = [];
// canArr = []

// data.forEach(function(a){
// 	//console.log('a', a[0].top);
	
// 	var canvas = document.createElement('div');
// 	canvas.style.top = a.top*rand*0.009 + 'px';
// 	canvas.style.left = a.left*rand*.009 + 'px';
// 	canvas.style.height = '10px';
// 	canvas.style.width = '10px';
// 	canvas.style.background = 'black';

// 	canvas.style.position = 'absolute';
// 	body.appendChild(canvas);
// 	canvas.onclick= function(){
// 		console.log(canvas.style.top, canvas.style.left);
// 		body.removeChild(canvas);
// 	}
// // 	obj.top = top;
// // obj.left = left;
// arr.push(a);
// 	console.log('a',a)
// 	console.log(canvas, 'canvas')
// 	for(var i = 0; i<5; i++){
// 	canArr[i] = getClass(canvas);
// 	console.log(canArr[i],'canarr')
// 	//updateBall(canArr[i])
// 	}



// })
// console.log('obj', canArr)
// return canArr;
// }
// arr = createAnt()
// console.log(arr, 'arr')

// function getClass(whichBall){
	
// 	var ball = {
// 		x: getRandomValue(),
// 		y: getRandomValue(),
// 		dx: 1,
// 		dy: 1,
// 		$elem : whichBall,
		
// 	}

// 	return ball;
// }


// for (var key in arr) {
//    if (arr.hasOwnProperty(key)) {
//       console.log('key', arr[key]);
//       a=getClass(arr[key])
//       console.log('a=', a)
//       updateBall(arr[key]);
// }}
//       var speed = 10;

//       setInterval(function(){
	

// 	// console.log(ball.x + '  ' + ball.y);
// 	// checkBoundaryCollision(a);
// 	// checkBoundaryCollision(b);

// 	// checkCollision(a,b);
// 	//console.log(arr[0], 'lolol')
	
// 	for (var key = 0; key < arr.length; key++){
// 		console.log('actual arrayygeretetewr', arr)
  

// 	arr[key].x = arr[key].x + arr[key].dx * speed;
// 	arr[key].y = arr[key].y + arr[key].dy * speed;
// 	// b.x = b.x + b.dx * speed;
// 	// b.y = b.y + b.dy * speed;
// 	console.log(arr[1], 'after 1')
// 	console.log(arr[2], 'after 2')
// 	console.log(arr[3], 'after 3')
	
	
// 	// for (var key in arr) {
//  //   if (arr.hasOwnProperty(key)) {
// 	updateBall(arr[key]);

// 	//updateBall(b);
// }

// }, 1000);
  

// function updateBall(ball){
// 	//ball.forEach(function(a){
// 		//console.log(ball.$elem,'element')
// 	ball.$elem.style.top = ball.y +'px'
// 	ball.$elem.style.left = ball.x +'px'
// 	//})
// }
      
  

var ant = [];
var $ant = [];
var data = []
var numberOfAnts = 20;
var speed = 15;
var box = document.getElementById('box');
var body = document.getElementsByTagName('body')[0];
body.appendChild(box);
for(var u = 0; u<20; u++){


data.push({ top: getrandomNumber(), left: getrandomNumber() });
}
///console.log('data', data)

 for(var i=0; i<numberOfAnts; i++){
    $ant[i] = document.createElement('div');
    $ant[i].className = 'ants';
    ant.push({y: getrandomNumber(), x: getrandomNumber(), dx :1, dy: 1,$elem: $ant[i]});
    body.appendChild($ant[i]);
    console.log($ant[i], '$ant')
    var antt= $ant[i];
    var j = i+4;

    antt.onclick= function(){
    	console.log('clicked',body.childNodes[j]);
    	//console.log
    	this.remove()
    }
    }
//     data.forEach(function(a))
// }

// console.log(typeof(ant));
function getrandomNumber(){
    var number = Math.random();
    return Math.floor(number * 500);
}
// for(var i=0; i<numberOfAnts; i++){
//     $ant[i].style.left = ant[i].x + 'px';
//     $ant[i].style.top = ant[i].y + 'px';
// }
setInterval(updateAnts,400);

function updateAnts(){
    for(var i=0; i<numberOfAnts;i++){

    	//console.log(ant[i], 'after update')
        ant[i].x = ant[i].x + ant[i].dx *speed;
        ant[i].y = ant[i].y + ant[i].dy * speed;
        $ant[i].style.left = ant[i].x + 'px';
        $ant[i].style.top = ant[i].y + 'px';
    }
    collisionwithWalls();
}

function collisionwithWalls(){
    var containerTop = 0;
    var containerLeft = 0;
    var containerRight = 500;
    var containerBottom = 500;
    for(var i=0; i<numberOfAnts; i++){
        if (ant[i].x + 10 > containerRight) {
            ant[i].dx = -ant[i].dx;
            // console.log(ball.y)
        }
        if (ant[i].y + 10 > containerBottom) {
            ant[i].dy = -ant[i].dy;
        }
        if (ant[i].y < containerTop) {
            ant[i].dy = -ant[i].dy;
        }
        if (ant[i].x < containerLeft){
            ant[i].dx = -ant[i].dx;
            // alert('Left ma gayo');
        }

    }
}