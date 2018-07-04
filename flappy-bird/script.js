var container = document.getElementById('container');
var canvas = document.getElementById('canvas')
var gameWrapper = document.getElementById('game-wrapper')
//var ctx = canvas.getContext('2d');
// ctx.fillRect(20, 40, 20, 10)
// ctx.fillStyle = 'green';
var height = 500;
var width = 350;
var score = 0
var a = 1;
var key_pressed=false
let collision = false


class Bird{

	constructor(x, y, speedX, speedY, $elem, $parent){
	//console.log(height)
	this.y = 100;
	this.x = 20;
	this.speedY = 1;
	this.speedX = 1;
	this.height= 30;
	this.width= 40;
	this.angle = 70;	//-10
	this.$elem = document.createElement("div");
    this.$parent = document.getElementsByClassName('canvas')[0];
    document.onkeydown = this.keydownHandler;
	document.onkeyup = this.keyupHandler;

}



	keydownHandler(e){
		if(e.keyCode === 32){
			//var j=0;
			//j-=5
			//console.log(e)
			key_pressed = true
			//this.up()
		}
	}
	keyupHandler(e){
		if(e.keyCode === 32){
			key_pressed = false
			//this.update()
		}
		
	}
	
	show(){
		
		this.$elem.className = "bird";
	    this.$elem.style.height = this.height+'px';
	    this.$elem.style.width = this.width+'px';
	    //this.$elem.style.backgroundColor = 'red';
	    this.$elem.style.top = this.y + 'px';
	    this.$elem.style.left = this.x +'px';
	    //console.log(this.$parent, "parent");
	   	this.$parent.appendChild(this.$elem);
	 	}

	animate(){
		if(key_pressed){
			//this.angle = -30
			//this.rotate()
			this.up()
		}
		else
			//this.y+=this.speedY*1.5;
		this.rotate()
		this.update()
	}
	rotate(){
		 if(this.angle<70)
		 	this.angle+=4
		

		

		this.$elem.style.transform = "rotate(" + this.angle + "deg)"

	}

	up(){
		if(this.angle>-20)
		 	this.angle-=4

		

		this.$elem.style.transform = "rotate(" + this.angle + "deg)"


		//this.angle=-20
		// if(this.angle<70)
		// 	this.angle+=4
		

		// this.$elem.style.transform = "rotate(" + this.angle + "deg)"

				
		this.speedX+= this.speedY*.08;
		this.y-=this.speedX;
		//this.
		this.move();
		
	}
	move(){
		this.$elem.style.top = this.y + 'px';
	    this.$elem.style.left = this.x +'px';
	}
	update(){
		
		this.y+=this.speedY*1.5;

		//this.rotate()
		//this.show()
		if(this.y>490 ){
			this.y = 40;
			//this.speedY = 0;
		}
		if(this.y<10 ){
			this.y = 10;
			//this.speedY = 0;
		}
		this.move()
		

	}
}


class Enemy{
	constructor(){
	this.height = Math.floor(Math.random() * 130) + 70;
	this.width = Math.floor(Math.random() *31) + 50;
	this.x = 300;
	this.w = 53;
	this.speed = 1;
	this.top = 0
	this.bottom = 145 
	
	this.$elem = document.createElement("div");
	this.$elem1 = document.createElement("div");
	this.$parent = document.getElementsByClassName('canvas')[0];
	//var this = this;
	}
	showUp(){
	
	//console.log(this.bottom,'bottom')
	this.$elem.className = "enemy";
    this.$elem.style.height = this.height+'px';
    this.$elem.style.width = this.w+'px';
    //this.$elem.style.backgroundColor = 'black';
    //this.$elem.style.bottom = '110px';
    this.$elem.style.top =  this.top+'px';//this.width*4.5 +
    //this.$elem.style.bottom = this.bottom + 'px';
    this.$elem.style.left = this.x +'px';
    //console.log(this.left, "parent");
   	this.$parent.appendChild(this.$elem);
   	// console.log(this.$elem, this.height+8+'ksjdfhkjfdhkjdfhgkjddfhgkjfdhgkfdljgdk')

	}
	showDown(){
		this.$elem1.className = "enemyBottom";
	    this.$elem1.style.height = this.height+'px';
	    this.$elem1.style.width = this.w+'px';
	    //this.$elem.style.backgroundColor = 'black';
	    //this.$elem.style.bottom = '110px';
	    this.$elem1.style.bottom = this.bottom+'px';
	    //this.$elem.style.bottom = this.bottom + 'px';
	    this.$elem1.style.left = this.x +'px';
	    //console.log(this.$elem1, "parent");
	   	this.$parent.appendChild(this.$elem1);
	}
	update(){
		this.x -= this.speed;
	}
	

	outside(){
		if(this.x<-this.w){
			this.$elem.remove()
			this.$elem1.remove()
			return true;
		} else{
			return false;
		}
	}

	hits(bird){
		
		if(bird.x + bird.width >=this.x){
			//console.log('polo')
			if(bird.y<=this.top+this.height || bird.y+bird.height
				>=height - this.height){
				collision = true
				console.log('marco')
			return true
			}

			if(bird.x + bird.width ==this.x+this.w){

			console.log('polo', ++score)
			
			}
			return false
		}
	}
			
		score(){
			return score
		}	

}

const bird = new Bird();
//console.log(bird.$elem)


var enemies = [];
enemies.push(new Enemy({
	bottom: 100,
	top:6

}));

////var gameLoop = function(){
	var j = 100
	var gameLoop = () =>{ 
	 
	// j-=5
	// j+=20
	a++
	//console.log(a)
	if(a%140 == 0){
		//console.log('dhfsdfkhsfkshfs')
		enemies.push(new Enemy());
		//enemies.push(new Enemy());


	}
	

	bird.show();
	//bird.up()	
	bird.animate();
	//console.log(key_pressed, 'ksjfjjjjjjjjjjjjjjjjjjjjjj')
	// if(key_pressed==true)
	// 	bird.rotate(j);
	// else
	// 	bird.rotate(-j)

	//if(j>50||j<-100){j=0}
	// if(key_pressed)

	//    		bird.rotate(j)
	   		
	// if(!key_pressed)
	//    		bird.rotate(j)

	//console.log(enemies.length)
	let i = 1;
	for(let i = enemies.length-1; i>=0; i--){
		enemies[i].showUp();
		enemies[i].showDown();
		enemies[i].update();
		//enemies[i-1].update();
		let output = enemies[i].hits(bird)
		console.log(output)
		if(output===true){
		console.log('Game Over!!!', bird, enemies[i])
		enemies[i].$elem1.style.backgroundColor = "red"
		enemies[i].$elem.style.backgroundColor='red'
		gameWrapper.style.display = 'block'
		return
		}
		//console.log(output)
		if(enemies[i].outside()){
			enemies.splice(i,1)

		}
		var score = enemies[i].score()
		console.log('dkjsfhkjsdhfkjsfhkjhfkjdfh', score)
		document.getElementById('score').innerHTML='Score: '+score
		

	}
	requestAnimationFrame(gameLoop);	
}

gameLoop()

//setInterval(gameLoop, 20)
// key_pressed = false;


// document.addEventListener("keydown", function(event) {
// //if(!key_pressed){
//     if (event.keyCode == 32) {
    	
//         //console.log('hi.');
//         bird.up();
//         key_pressed = true;}
//    // }
// })
// document.addEventListener("keyup", function(event) {
//     key_pressed = false
//         console.log('hello');
//         bird.update();
    
// })




