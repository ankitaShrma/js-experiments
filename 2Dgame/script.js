var $body = document.getElementsByTagName("body")[0];
var $container = document.getElementById('container')

var $homescreen = document.getElementById('game-wrapper');
var $background = document.getElementById('background');
var $button = document.getElementById('play-button');

var rand = ['40px', '150px', '260px']

function getRandom(){

	var random = rand[Math.floor(Math.random()*rand.length)];
	return random;
}


var speed = 0;
var speed_dy = 1;
//clicked = true;
var bulletTotal = 2
var bullets = [];
var enemies = [];
//var ctx = $background.getContext("2d");
var height = 600;
var width = 400;

var en = new Enemy({
	x: getRandom()
})
//en.drawEnemy()

clicked = false;

/*OBJECTS*/
var plane = new Plane();

var newPlane = new Plane();
newPlane.updateplanePostion();
plane.resetplanePosition();



//var enemy = new Enemy()
//enemies.push(en)


 //en.drawEnemy()
 //en.moveEnemy()
 
var a = 0;

$button.onclick = function(){
	//console.log(clicked);
	clicked = true;
	//console.log(clicked);
 	var pos = 0;
 	$homescreen.style.display = 'none';
 	$background.style.backgroundImage = 'url("http://hanslodge.com/images/8cE6oaLxi.jpg")';
 	this.style.display = 'none';

	setInterval (function(){
		if (pos == 600) {
			pos = 0;
		}
		else{
			pos++;
			$background.style.backgroundPosition = "0px" + " " + pos +"px";	
		}

		
		//console.log(a)
		if(a%20 == 0){
		//console.log('dhfsdfkhsfkshfs')
		var en = new Enemy({
		x: getRandom()
		})
		enemies.push(en);
		//console.log(enemies)

		}
		a++
		//movebullet()
		// en.drawEnemy();
		// en.moveEnemy();
		for(var i = enemies.length-1; i>=0; i--){
		enemies[i].drawEnemy();
		enemies[i].moveEnemy();
		// if(enemies[i].hits(plane) || enemies[i].collide(bullets)){
		// console.log('Game Over!!!')
		// }
		if(enemies[i].outside()){
			enemies.splice(i,1)
		}

	}

	for(var i = 0; i<enemies.length; i++){

		console.log('after', plane.planeX+'planeX')
	   		//for (var j = 0; j < bullets.length; j++) {
	   			if(enemies[i].hits(plane)){
	   				//console.log('after', enemies[i])

	   				// enemies[i].health-=1
	   				
	   				// bullets[j].$elem.remove();
	   				
	   				// bullets.splice(j,1)
	   				alert('game over')
	   			}
	   			
	   			
	   		}
		
		
		
	},100)
}



function Plane(){
	this.$plane = document.getElementById('plane');
	this.planeY = 0;
	this.planeX = 0;
	var self = this;

	this.resetplanePosition = function(){
		self.planeY = 500;
		self.planeX = 150;
		self.$plane.style.top = self.planeY + 'px';
		self.$plane.style.left = self.planeX + 'px';
	}
	this.updateplanePostion = function(e){
	var value = 0;
			if(e==1 && self.planeX<260)
				{
					value=110;
				}
			else if (e==-1 && self.planeX>140)
				{
					value=-110;
				}
			else
				{
					value=0;
				}
			
			self.planeX = self.planeX + value;
			self.$plane.style.left = self.planeX + 'px';
	}
}






function Enemy(props){
	this.x = props.x;
	this.health = 2
	this.y = -120;
	this.speedX= 40 
	this.speedY= 10 
	this.width= 100 
	this.height= 100;
    this.$elem = document.createElement("div");
    this.$parent = document.getElementsByClassName('container')[0];

	 //this.container 
	 var self = this;
	


	this.drawEnemy = function() {
		
		// var e = getRandom()
		// if(e=='left'){
		// 	self.$elem.style.left = '35px';
		// }
		// else if(e=='middle'){
		// 	self.$elem.style.left = '150px';
		// }
		// else if(e=='right'){
		// 	self.$elem.style.left = '265px';
		// }
 
  //console.log(' drawbullet called');
	  	self.$elem.className = "enemy";
	    self.$elem.style.height = self.height + "px";
	    self.$elem.style.width = self.width + "px";
	    self.$elem.style.backgroundColor = 'red';
	    self.$elem.style.top = self.y + 'px';
	    self.$elem.style.left = self.x;
	    //console.log(self.$parent, "parent");
	   	self.$parent.appendChild(self.$elem);
	   
	   
	   }
	this.outside = function(){
		if(this.y>500){
			self.$elem.remove()
			return true
		}
		else return false


	}


	this.moveEnemy = function() {
		
		//setInterval(function(){

	 
	   self.y += self.speedY ;
	   //console.log(self.y, 'hfgkjsdhfkjhdfkjhsrfjk')
	   self.$elem.style.top = self.y + "px";
	   
	   	if(self.y == 520){
	   		console.log(self.$parent.childNodes, 'out')
	   		self.$elem.remove()
	   	}
	   	if(self.y == 100){
	   		//console.log('yedhj')
	   		// var newEnemy = new Enemy()
	   		// enemies.push(newEnemy)
	   		// newEnemy.drawEnemy()
	   		//newEnemy.moveEnemy()

	   	}
	   //	console.log('movebullet called', enemies)
	 }
	//}, 80)}

	
		
			
	
	this.hits = function(plane){
		//console.log('hhh', plane, self.y+'selfy', self.x+'selfx')
		//console.log(plane.planeY <= self.y+60 && plane.planeX+'px'==self.x )
		if(plane.planeY <= self.y+60 && plane.planeX+'px'==self.x   ){
		 	
		 	console.log('hello')
		 	return true;
		 }
		 return false;

	}

	//console.log('movebullet called', enemies)

	

}

function Bullet(){
	this.x = plane.planeX + 50;
	this.y = plane.planeY + 50;
	this.speedX= 20 
	this.speedY= 20 
	this.width= 5 
	this.height= 20;
    this.$elem = document.createElement("div");
    this.$parent = document.getElementsByClassName('container')[0];

	 //this.container 
	var self = this;



	this.drawbullet = function() {
 
  //console.log(' drawbullet called');
	  	self.$elem.className = "bullet";
	    self.$elem.style.height = self.height + "px";
	    self.$elem.style.width = self.width + "px";
	    self.$elem.style.backgroundColor = 'yellow';
	    self.$elem.style.top = self.y + 'px';
	    self.$elem.style.left = self.x +'px';
	    //console.log(self.$parent);
	   	self.$parent.appendChild(self.$elem);

	   
	   }
	   this.collide = function(enemy){

		//console.log(enemy, self.y +'self.y'+self.height+'self.height',self.x, 'collide func called')
		console.log(enemy.x=== self.x-50+'px')
		 if(enemy.y+65 >= self.y && enemy.x==self.x - 50+'px'  ){
		 	
		 	console.log('hello')
		 	return true;
		 }
		 return false;
		
	}


	this.movebullet = function() {
		setInterval(function(){

			

			

	 //for (var i = 0; i < bullet.length; i++) {
	 	 //self.x += self.speedX;
	   self.y -= self.speedY ;
	   //console.log(self.y, 'hfgkjsdhfkjhdfkjhsrfjk')
	   self.$elem.style.top = self.y + "px";
	   

	   for(var i = 0; i<enemies.length; i++){
	   		for (var j = 0; j < bullets.length; j++) {
	   			if(bullets[j].collide(enemies[i])){
	   				//console.log('after', bullets[j], enemies[i])

	   				enemies[i].health-=1
	   				
	   				bullets[j].$elem.remove();
	   				
	   				bullets.splice(j,1)
	   				//console.log(bullets, 'bull', enemies[i].health)
	   			}
	   			if(enemies[i].health===0){
	   			enemies[i].$elem.remove();
	   				enemies.splice(i, 1)
	   			}
	   			
	   		}
	   	}
	   		
	   		// console.log(enemies[i]);
				    //  	for(var j = 0; j<enemies.length; i++){
				    //  			console.log(bullets[i], 'before slice', enemies[j])
				    //  		if(bullets[i].collide(enemies[j])){
								// // bullets.splice(i,1)
								// console.log(bullets, "after slice")
								// }
				    //  	}
				     
	  //if(self.y < 0 || self.y > 600) 
	   	//bullets.splice(i, 1);
	   //console.log(self.parent())
		//self.$parent.removeChild(self.$elem)

	 //}
	}, 1)
	
//console.log('movebullet called')
}
}






function keydownEventHandler(e)
	{
		console.log(e.keyCode);
		if(clicked)
			{
				if(e.keyCode == 37)
				{
					//left
					plane.updateplanePostion(-1);
				}
				
				if(e.keyCode == 39)
				{
					//right
					plane.updateplanePostion(+1);
				}
				
				
				
				if (e.keyCode == 32 ) {
				   // let b = {
				   //   x: 200, 
				   //   y: 550, 
				   //   speedX: 0, 
				   //   speedY: 0, 
				   //   width: 20, 
				   //   height: 20
				   // };
				   
				     // b.x += 100;
				     // b.speedX += 20;
				     // b.height = 5;

				     var bullet = new Bullet()
				     bullet.drawbullet()
				     bullet.movebullet()
				    // setInterval(bullet.movebullet(), 800)
				     
				     bullets.push(bullet)
				     
				     

				     //console.log(enemies, 'ufhgkfdhkjdfhgkjfdhg')
				 }
			}

			else
			{
				if(e.keyCode == 27)
				{
					var homescreen = document.getElementById("homescreen");
					homescreen.style.display="block";
				}
			}
	}

function keyupEventHandler(e)
	{

	}


	document.onkeydown = keydownEventHandler;
	document.onkeyup = keyupEventHandler;




var checkCollisionwithEnemy = function(bullet, enemy){
	//console.log(bullets.length, 'jsdhfjhdfkjhfdkjghdfk')
	//console.log(enemies.length, 'jsddhfkjsdh')

}






// setInterval(bullet.movebullet(), 800)
 
