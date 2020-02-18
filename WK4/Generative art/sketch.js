let posX = 0;
var posY = 0;
var collision = 0;

function setup() {
  //noStroke();
  createCanvas(400, 400);
}

function draw() {
  background("red");
  let count = 0;
  let dist = 35;
  
  for( var j=0; j<height+200; j+=dist)
  {
    for(var i =0; i<width+100; i+=dist)
    {
      
         ellipse(i,j,mouseX+dist,mouseY);
         noFill()
         strokeWeight(1); 
        count++;
        if (count%6==0)
        {
           strokeWeight(2.5); 
        }
         if (mouseIsPressed)
          
        {
           fill(0,0,255,5); 
          strokeWeight(1);
          
        }
//        else if (mouseReleased())
          
//         {
//            fill("yellow"); 
//           strokeWeight(1);
          
//         }   
    }
  }
}