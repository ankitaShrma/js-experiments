var $body = document.getElementsByTagName("body")[0];
console.log($body);
var num = 4;
var c = 0;
function getRandom(){
 return (Math.floor(Math.random()*250));
}

function Container(props) {
  this.height = props.height;
  this.width = props.width;

  this.x = props.x;
  this.y = props.y;
  this.$parent = props.$parent || $body;
  this.$elem = document.createElement("div");
  this.boxes = [];
  console.log(this.$elem.style.width, 'width');

  var self = this;

  this.plot = function() {
    self.$elem.className = "container";
    self.$elem.style.height = self.height + "px";
    self.$elem.style.width = self.width + "px";
    self.$elem.style.position = 'relative';
    self.$elem.style.backgroundColor ='pink';
    console.log(self.$elem.style.width, 'llllll');
    self.$elem.style.left = self.x + 'px';
    self.$elem.style.top = self.y + 'px';
    self.$parent.appendChild(self.$elem);
  };
  //console.log(this.plot)

  this.addBox = function(box) {
    this.boxes.push(box);
    
  };
  

  

  
  this.intervalSet = function() {
    setInterval(function(){
    self.boxes.forEach(box => {
      box.incrementPosition();
      box.updateElement();
      box.checkCollisionWall();
  });

  for(i = 0; i<num; i++){
    for(j = 0; j<num; j++){
      if (self.boxes[j]!=self.boxes[i]){
      if (self.boxes[i].checkCollision(self.boxes[j])) {
      console.log("BOOM");

      self.boxes[i].reversePosition();
      self.boxes[j].reversePosition();
    }
    }

    }
  }
  console.log('box', self.boxes.length)
}, 100)

}
}



function Box(props) {
  this.x =  props.x || getRandom();
  this.y = props.y ||  getRandom();
  this.dx = props.dx || 1
  this.dy = props.dy || 1
  this.size = props.size || 30
  this.speed = props.speed || Math.floor(Math.random()*6)+1
  this.container = props.container || container ;
  //this.container = 
  var self = this
  this.backgroundColor = props.backgroundColor || 'black';
  this.$elem = document.createElement("div");
  this.plot = function() {
    self.$elem.className = "box";
    self.$elem.style.height = self.size + "px";
    self.$elem.style.width = self.size + "px";
    self.$elem.style.backgroundColor = self.backgroundColor;
    self.container.$elem.appendChild(self.$elem);

    self.$elem.onclick= function(){
      console.log('clicked');
      c = c+1;
      //console.log()

      
      self.container.$elem.removeChild(this);
    }

      //console.log(self.container.$elem)
      updateElement()
      if(c === num){
      alert('Winner!!!')
    }
  


    //self.container.$elem.appendChild(self.$elem);
    updateElement();
  };
  

    

  var self = this;

  var updateElement = function() {
    self.$elem.style.top = self.y + "px";
    self.$elem.style.left = self.x + "px";
  };

  

  this.incrementPosition = function() {
    self.x += self.dx * self.speed;
    self.y += self.dy * self.speed;
  };

  this.updateElement = function() {
    updateElement();
  };

  this.reversePosition = function() {
    self.dx *= -1;
    self.dy *= -1;
  };
  this.checkCollisionWall = function(){
    var ballLeft = this.x;
    var ballRight = this.x + 10;
    var ballTop = this.y;
    var ballBottom = this.y + 10;

    var containerTop = 10;
    var containerLeft = 10;
    var containerRight = 480;
    var containerBottom = 480;

    //ball.right = ball.left + ball.width
    
    if (ballRight > containerRight) {
      this.dx = -this.dx;
      // console.log(ball.y)
    }
    if (ballBottom > containerBottom) {
      this.dy = -this.dy;
    }
    if (ballTop < containerTop) {
      this.dy = -this.dy;
    }
    if (ballLeft < containerLeft){
      this.dx = -this.dx;
      // alert('Left ma gayo');
    }

  }

  this.checkCollision = function(box2) {
    var b1Left = this.x;
    var b1Right = this.x + this.size;
    var b1Top = this.y;
    var b1Bottom = this.y + this.size;

    var b2Left = box2.x;
    var b2Right = box2.x + this.size;
    var b2Top = box2.y;
    var b2Bottom = box2.y + this.size;

    //right edge of 1 > left edge of 2
    //left edge of 1 < right edge of 2
    //bottom edge of 1 > top edge of 2
    //top edge of 1 < bottom edge of 2
    return (
      b1Right > b2Left &&
      b1Left < b2Right &&
      b1Bottom > b2Top &&
      b1Top < b2Bottom
    );
  };
}

var container = new Container({
  height: 500,
  width: 500,
  x: 0,
  y: 0,
  $parent: $body,
});
console.log(container,'container');
 // console.log(container.plot(),'after call');
container.plot()
container.intervalSet();
//setInterval(container.intervalSet, 100)

var container1 = new Container({
  height: 500,
  width: 500,
  x : 0,
  y: 60,
  $parent: $body
});
container1.plot();
container1.intervalSet()


//var box1 = new Box({
  //x: 0,
  // y: 10,
  // size: 50,
  // dx: 1,
  // dy: 0,
  // speed: 10,
  // container: container,
  // backgroundColor: "blue"
// });
// container.addBox(box1);
// box1.plot();

// var box2 = new Box({
//   x: 500,
//   y: 10,
//   size: 50,
//   dx: -1,
//   dy: 0,
//   speed: 10,
//   container: container,
//   backgroundColor: "red"
// });
// container.addBox(box2);
// box2.plot();


  var box = {}
  for (var i = 0; i < num; ++i) {
    box[i] = new Box({
      container: container
    })
    container.addBox(box[i]);
   // container1.addBox(box[i]);
    console.log(box[i], 'lalalalal');
    box[i].plot();

  }

// var box = {}
//   for (var i = 0; i < n; ++i) {
//     box[i] = new Box({
//       container:container1
//     })
//    // container.addBox(box[i]);
//     container1.addBox(box[i]);
//     console.log(box[i], 'lalalalal');
//     box[i].plot();

//   } 


// setInterval(function() {
//   container.boxes.forEach(box => {
//     box.incrementPosition();
//     box.updateElement();
//     box.checkCollisionWall()
//   });
//   for(i = 0; i<n; i++){
//     for(j = 0; j<n-1; j++){
//       if (box[j]!=box[i]){
//       if (box[i].checkCollision(box[j])) {
//       console.log("BOOM");

//       box[i].reversePosition();
//       box[j].reversePosition();
//     }
//     }

//     }
//   }

// }, 100);

//console.log(box1);