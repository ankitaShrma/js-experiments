var button = document.getElementById('button-holder');
var i = 0;
var position = 0;

//var animate - setInterval()

button.onclick = function(){
	
	var image = document.getElementsByClassName('image-holder')[0];
	image.style.marginLeft = '0px';

	//i=1;
	var animate = setInterval(function(){
		// if(image.style.marginLeft === '-1600px'){
  //      		position = 0;           	}
  //      	else{

		if(position===-800*i){
			clearInterval(animate);
			console.log(image.style.marginLeft, "after clearInterval")
			console.log(position, "after")

		}

		else{
			//position=image.style.marginLeft;
			position--;
			console.log(position)
			image.style.marginLeft = position + 'px'
			if(position === -1601)
			{
				image.style.marginLeft == "0px"
				//clearInterval(animate)
			}
		}
		//}


	},0.1)
	
	// if(image.style.marginLeft === '-1600px'){
 //      		i = 0;

 //      	}

	// if(i>=0 && i<4){


		
		
 //   	image.style.marginLeft =  -800*i +'px';
 //   	i++;
 //}

   	i++
   	
    }
 
	