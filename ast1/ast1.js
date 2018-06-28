i=0;
var a = '';
var increment = true;
function iterator() { 
if (increment === true){  
   a = a +'*';
   console.log(a);
   if (a.length === 7){
   	increment = false;
   }
}
  if(increment === false){
  	
        
        	a = a.slice(0, -1);
        	console.log(a)
        	if(a.length===1){
        		increment= true;
        	}

  }

	
    if(++i>0 ) {
    	
        setTimeout(iterator, 100)
       }
};
iterator()