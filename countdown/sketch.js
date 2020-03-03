var A = [5,10,15,20];
var i=0,x,y;
function setup() {
  createCanvas(400, 400);
  background(220);
  frameRate(15);
  for(x=0;x<width;x+=25){
    for(y=0; y<height;y+=25){ 
        j=i%A.length;
        rect(x,y,A[j],A[j]);
        
    }
    i++
  }
}
