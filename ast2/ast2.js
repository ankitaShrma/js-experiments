
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

var data = [
	
	// {top: 10, left: 6},
	//  {top: 8, left: 4},
	//  {top: 4, left: 6},
	//  {top: 6, left: 6},

];
for(var u = 0; u<50; u++){


data.push({ top: getRandom(1,10), left: getRandom(1,10) });
}

console.log(data);

var newDiv = document.createElement('div');
newDiv.style.width = '500px';
newDiv.style.height = '500px';
newDiv.style.background = 'red';
newDiv.style.position = 'relative'

var body = document.getElementsByTagName('body')[0];
body.appendChild(newDiv);

data.forEach(function(a){
	var canvas = document.createElement('div');
	canvas.style.top = a.top*50 + 'px';
	canvas.style.left = a.left*50 + 'px';
	canvas.style.height = '10px';
	canvas.style.width = '10px';
	canvas.style.background = 'black';

	canvas.style.position = 'absolute';
	body.appendChild(canvas);
	canvas.onclick= function(){
		console.log(canvas.style.top, canvas.style.left);
		body.removeChild(canvas);
	}

})