function setup() {
  // put setup code here
}

function draw() {
  // put drawing code here
  background("");
  //(x pos,y pos, width, height);
  strokeWeight(5);
  fill("");
  rect(0,0,120,50);
  rect(120,0,120,50); 
  rect(0,50,50,120);
  rect(0,170,50,120);
  rect(240,140,60,90);
  rect(300,140,60,90);
  rect(140,230,100,60);
  rect(140,290,100,60);
  rect(240,230,120,60);
  rect(50,350,90,50);
  rect(140,380,220,20);
  rect(360,0,40,300);
  
  fill("yellow");
  rect(240,0,120,50);
  rect(0,290,50,110);
  rect(240,50,120,90);
  
  fill("red");
  rect(50,50,190,180);
  rect(360,290,40,110);
  
  fill("black")
  rect(50,230,90,120);
  rect(140,350,100,30);
  
  fill("blue");
  rect(240,290,120,90);
}