
var drops = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  
  for(var i=0; i < 300; i++)
  {
    drops[i] = new Drop();  
  } 

}

function draw() {
  background(90,90,90);
  
  for(var i=0; i < drops.length; i++)
  {
    drops[i].fall();
    drops[i].show();  
  }
  
}