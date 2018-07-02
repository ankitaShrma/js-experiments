var $body = document.getElementsByTagName("body")[0];
var $container = document.getElementById('container')

var $homescreen = document.getElementById('game-wrapper');
var $background = document.getElementById('background');
var $button = document.getElementById('play-button');

var rand = ['left', 'middle', 'right']

function getRandom(){

	var random = rand[Math.floor(Math.random()*rand.length)];
	return random;
}

var en = new Enemy()
//en.drawEnemy()

clicked = false;

$button.onclick = function(){
	console.log(clicked);
	clicked = true;
	console.log(clicked);
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
		//movebullet()
		//en.drawEnemy();
		//en.moveEnemy();
		checkCollisionwithEnemy();
		
		
	},60)
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
var plane = new Plane();


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
	    console.log(self.$parent);
	   	self.$parent.appendChild(self.$elem);

	   
	   }


	this.movebullet = function() {
		setInterval(function(){

	 //for (var i = 0; i < bullet.length; i++) {
	 	 //self.x += self.speedX;
	   self.y -= self.speedY ;
	   //console.log(self.y, 'hfgkjsdhfkjhdfkjhsrfjk')
	   self.$elem.style.top = self.y + "px";
	  //if(self.y < 0 || self.y > 600) 
	   	//bullets.splice(i, 1);
	   //console.log(self.parent())
		//self.$parent.removeChild(self.$elem)

	 //}
	}, 20)
//console.log('movebullet called')
}
}


function Enemy(){
	//this.x = -100;
	this.y = -100;
	this.speedX= 20 
	 this.speedY= 20 
	 this.width= 100 
	 this.height= 100;
    this.$elem = document.createElement("div");
    this.$parent = document.getElementsByClassName('container')[0];

	 //this.container 
	 var self = this;


	this.drawEnemy = function() {
		
		var e = getRandom()
		if(e=='left'){
			self.$elem.style.left = '35px';
		}
		if(e=='middle'){
			self.$elem.style.left = '150px';
		}
		if(e=='right'){
			self.$elem.style.left = '265px';
		}
 
  //console.log(' drawbullet called');
	  	self.$elem.className = "enemy";
	    self.$elem.style.height = self.height + "px";
	    self.$elem.style.width = self.width + "px";
	    self.$elem.style.backgroundColor = 'red';
	    self.$elem.style.top = self.y + 'px';
	    // self.$elem.style.left = self.x +'px';
	    console.log(self.$parent, "parent");
	   	self.$parent.appendChild(self.$elem);
	   
	   
	   }


	this.moveEnemy = function() {
		
		setInterval(function(){

	 
	   self.y += self.speedY ;
	   //console.log(self.y, 'hfgkjsdhfkjhdfkjhsrfjk')
	   self.$elem.style.top = self.y + "px";
	   
	   	if(self.y == 500){
	   		console.log(self.$parent.childNodes, 'out')
	   		self.$elem.remove()
	   	}
	   	if(self.y == 100){
	   		console.log('yedhj')
	   		var newEnemy = new Enemy()
	   		enemies.push(newEnemy)
	   		newEnemy.drawEnemy()
	   		newEnemy.moveEnemy()

	   	}
	   	console.log('movebullet called', enemies)
	 //}
	}, 800)}

	console.log('movebullet called', enemies)

	

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
				     console.log(bullet.x, bullet.y)
				     bullets.push(bullet)
				     console.log(bullets)
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
	console.log(bullets.length, 'jsdhfjhdfkjhfdkjghdfk')
	console.log(enemies.length, 'jsddhfkjsdh')

}

/*OBJECTS*/
var newPlane = new Plane();
newPlane.updateplanePostion();
plane.resetplanePosition();



var enemy = new Enemy()
enemies.push(enemy)


 enemy.drawEnemy()
 enemy.moveEnemy()





// setInterval(bullet.movebullet(), 800)
 
