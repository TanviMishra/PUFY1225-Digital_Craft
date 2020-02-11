function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background("white");
  
  from = color(0, 255, 0, 0.2 * 255);
  to = color(0, 0, 255, 0.2 * 255);
  
  c1 = lerpColor(from, to, 0.33);
  c2 = lerpColor(from, to, 0.99);
  
  for (let i = 0; i < 10; i++) {
    fill(c1);
    rect(
      random(0,250), random(height),
      random(0,250), random(height),  
    );
    fill(c2);
    rect(
      random(150,400), random(height),
      random(150,400), random(height),
   
    );
   
  }
  frameRate(2);
}
