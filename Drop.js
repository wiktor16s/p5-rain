function Drop(){
  
  var x = random(width);
  var y = random(-500,-50);
  var speed = random(5,10);
  var len = random(10,17);
  
  this.fall = function(){
    y = y+speed;
    //var grav = map(this.z, 0, 20, 0, 0.2);
	speed = speed + 0.2;
 
    
      if(y > height){
        
          y = random(-500,-50);
		  speed = random(5,10);
      }
  }
  
  this.show = function(){
    stroke(239, 204, 162);
    line(x,y,x,y+len);
  }
  
  
}