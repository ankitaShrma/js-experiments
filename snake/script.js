var $body = document.getElementsByTagName("body")[0];
var $container = document.getElementById('container')

// var $homescreen = document.getElementById('game-wrapper');
// var $background = document.getElementById('background');
// var $button = document.getElementById('play-button');

var rand = [1, 2, 3, 4, 5]


function randInRange(max, min){
  return Math.random() * (max - min) + min;
}

function getRandom(arr)
{

	var random = arr[Math.floor(Math.random()*arr.length)];
	return random;
}


// enemies.push(new Enemy())
var height = 500;
var width = 352;

function Enemy(props){
	this.y = -100;
	
	
	//this.speedX= 5 
	this.speedY= 3;
	this.width= 70 
	this.height= 70;
	this.$elem = document.createElement("div");
	this.$parent = document.getElementsByClassName('container')[0];
	this.health = 3;

	var self = this;

	this.drawEnemy = function(pos) 
	{
		if(pos==1){
      self.speedX = 0;
    }
    if(pos==2){
      self.x = 70;
    }
    if(pos==3){
      self.speedX = 140;
    }
    if(pos==4){
      self.x = 210;
    }
    if(pos==5){
      self.x = 280;
    }
		
		self.$elem.className = "enemy";
		self.$elem.style.height = self.height + "px";
		self.$elem.style.width = self.width + "px";
		self.$elem.style.backgroundColor = 'red';
		self.$elem.style.top = self.y + 'px';
		self.$elem.style.left = self.x + 'px';
		
		self.$parent.appendChild(self.$elem);

	   	   
	}

	this.moveEnemy = function() {
		// console.log("moveEnemy");
		self.y += self.speedY;
		self.$elem.style.top = self.y + 'px';
	}
	this.removeEnemy = function(){
		if(self.y === 500)
			{		   		
				self.$elem.remove()
				//console.log(enemies.indexOf(self), 'kjdfgfd')
				enemies.splice(enemies.indexOf(self), 1)
			}
	}
	this.collide = function(snake){
		console.log(this.x+this.height, snake.x+'snake' ,'llll')
		if(this.x<snake.x && this.width+this.x>snake.x +15 ){
			//console.log('first collide')
			if(this.y+this.height > snake.y >this.y ){
				

			//this.health -= 1;
			//if(this.health === 0){
						console.log('collide called', this.$elem)

				self.$elem.remove()
				// console.lo
				snake.$elem.remove()
				enemies.splice(enemies.indexOf(self), 1)
				snakes.splice(snakes.indexOf(snake),1)

				if(snakes.length===0){
					console.log('game-over')
				//}

			}
		}
	}
}
}



function Point(props){
	this.x = -100;
	this.y = 10;
	
	//this.speedX= 5 
	this.speedY= 2;
	this.width= 15; 
	this.height= 15;
	this.$elem = document.createElement("div");
	this.$parent = document.getElementsByClassName('container')[0];

	var self = this;

	this.drawPoint = function(pos) 
	{
		if(pos==1){
      self.$elem.style.left = '8px';
    }
    if(pos==2){
      self.$elem.style.left = '78px';
    }
    if(pos==3){
      self.$elem.style.left = '148px';
    }
    if(pos==4){
      self.$elem.style.left = '218px';
    }
    if(pos==5){
      self.$elem.style.left = '288px';
    }
		
		self.$elem.className = "point";
		self.$elem.style.height = self.height + "px";
		self.$elem.style.width = self.width + "px";
		self.$elem.style.backgroundColor = 'yellow';
		self.$elem.style.top = self.y + 'px';
		
		self.$parent.appendChild(self.$elem);

	   	   
	}

	this.movePoint = function() {
		// console.log("moveEnemy");
		self.y += self.speedY;
		self.$elem.style.top = self.y + 'px';
	}
	this.removePoint = function(){
		if(self.y === 480)
			{		   		
				self.$elem.remove()
				//console.log(enemies.indexOf(self), 'kjdfgfd')
				enemies.splice(enemies.indexOf(self), 1)
			}
	}
}


function Snake(props){
	
	this.y = props.y;
	this.x = 160;
	this.width= 15; 
	this.height= 15;
	this.$elem = document.createElement("div");
	this.$parent = document.getElementsByClassName('container')[0];
	

	var self = this;

	this.resetX = function(x) {
		self.x = x;
		console.log(self.x);
	}

	this.drawSnake = function() 
	{
		self.$elem.className = "snake";
		self.$elem.style.height = self.height + "px";
		self.$elem.style.width = self.width + "px";
		self.$elem.style.top = self.y + 'px'
		
		self.$parent.appendChild(self.$elem);	   	   
	}

	// this.rotate = function(x) {
	// 	console.log(x)


	// 	var elements = document.getElementsByClassName('snake');
	// 	//console.log(elements)
	// 	[].forEach.call(elements, function(element, i) {
	// 	setTimeout(function(){ 
	// 		element.style.transform = 'translate('+x+'px)';
	// 		element.style.transition = '0.5s'
	// 	},i*300);
	// 	});
	// }
	
	document.getElementById('container')
        .addEventListener('mousemove',function(event){

        	var elements = document.getElementsByClassName('snake');
		//console.log(elements)
		[].forEach.call(elements, function(element, i) {
		setTimeout(function(){ 
			if(event.clientX>0&&event.clientX<350){
				// console.log(event.clientX);
				// console.log(event.clientX-140)
				x=event.clientX-8;

				// console.log(x);
				self.resetX(x);
			element.style.transform = 'translate('+x+'px)';
			element.style.transition = '0.1s'


		}
		},i*30);
		});

        })
        	// x=event.clientX;
        	// console.log(x)
        	// rotate(x)
        ;
		// console.log("rotate");
		
// 	}

	this.collisionPoint = function(point){

	}
	

}

var snake = {}
var snakes = []

//console.log('enemies', enemies)

for(i=0; i<6; i++){
snake[i] = new Snake({
	y:300+i*15
})
snakes.push(snake[i])
snake[i].drawSnake()

}
//console.log(snakes, 'snake')

var enemies = [];
var points = []
var q = 0;
setInterval(function(){	 
				
	q = q + 1;
	//console.log(q)

	if(q%160 == 0){
		var tempRand = [1,2,3,4,5];
		var e = getRandom(rand);
		// console.log(e, '=e') 
		var enem ={} 
		var point ={} 		
		for( var a = 1; a <= e; a++) {		

			let pos = getRandom(tempRand)
			enem[a] = new Enemy()
			enemies.push(enem[a])
			enem[a].drawEnemy(pos)
			
			

			// point[a] = new Point()
			// points.push(point[a])
			// point[a].drawPoint(pos)


			tempRand.splice(tempRand.indexOf(pos),1)

		}
	}

	
					
	//console.log(enemies.length, 'length');
	enemies.map((enemy) => {
		//snakes.map((snake) => {
			//console.log(enemy)
				// if(enemy.collide(snake) === true){
				// 	let l = enemies.length;

				// 	let y = enemies[l-1].y;
				// 	console.log('true')
					// snakes.push(new Snake({
					// 	y: y+15
					// }))

					enemy.collide(snakes[0])
				//}
			//})
		enemy.moveEnemy();
		enemy.removeEnemy();
		//console.log(snake[0], 'snake[0]')
		
	});

	points.map((point) => {
		point.movePoint();
		point.removePoint();
	});

}, 20)
		

var getPos=function(e){
     // console.log(e)
        x=e.clientX;
        y=e.clientY;
        cursor="Mouse Position Is : " + x + " and " + y ;
        // console.log(cursor)
       // this.rotate(x-57)
        
    }
    var stopTracking = function()
{}
    // document.getElementById('container')
    //     .addEventListener('mousemove',function(event){
    //     	x=event.clientX;
    //     	console.log(x)
    //     });
        document.getElementById('container')
  .addEventListener("onmouseout", 
  stopTracking())