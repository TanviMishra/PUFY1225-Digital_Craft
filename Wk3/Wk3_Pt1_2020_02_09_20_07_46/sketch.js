let posX = 0;
var posY = 0;
var collision = 0;

function setup() {
  //noStroke();
  createCanvas(400, 400);
}

function draw() {
  background("orange");
  let count = 0;
  let dist = 25
  for( var j=0; j<height+dist; j+=dist)
  {
    for(var i =0; i<width+dist; i+=dist)
    {
         ellipse(i,j,dist+mouseX,dist+mouseY);
      
         noFill()
        if (mouseIsPressed)
          
        {
           fill(255,count,0); 
          //strokeWeight(1);
        }
          strokeWeight(1); 
      
        count++;
        if (count%7==0)
        {
           strokeWeight(2.5); 
        }
      
      
       
    }

  }
    
  

}