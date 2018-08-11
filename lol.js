var a = ['a', 'b', 'c', 'd', 'e']
var b = a.reverse()
var val = 20;
object = {}
function getOutput(a, val){
	console.log(val)
	
	var c = b[0];
	object[c]=val;
	b.splice(0,1)
	console.log(b)
	b.forEach(function(input){
		//console.log(Object.keys(object).length)
		//if(Object.keys(object).length === 0){
			
		

		
		console.log(input)
		var temp = {}


			temp[input] = object;
			console.log(object)
			object = temp
		
		
	})
	console.log(object);

}
getOutput(a, val)