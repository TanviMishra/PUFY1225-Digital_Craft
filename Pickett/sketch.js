function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(250);
    //rotateX(mouseY/20);
   rotateY(mouseY/20);
  
  push(); //eye1
  translate(17, -250,0);
  sphere(5,5);
  pop();
  
  push(); //eye2
  translate(37, -250,0);
  sphere(5,5);
  pop();
  
  push(); //mouth
  translate(27,-235,0);
  cylinder(11,2);
  pop();
  
  push(); //leaf
  translate(20, -294,0);
  rotateZ(12);
  cylinder(2, 10);
  pop();
  
  push(); //leaf
  translate(32, -295,0);
  //rotateZ(-12);
  cylinder(2, 10);
  pop();
  
  push(); //leaflet
  fill("BLACK")
  rotate(90)
  polygon(-290,135,20,4);
  pop();
  
  push(); //leaflet
  fill("BLACK")
  polygon(50,-315,20,3);
  pop();
  
  push(); //body
  translate(27, -190,0);
  cylinder(10, 200);
  pop();
  
  push(); //right hand
  translate(60,-120,0);
  rotateZ(53);
  cylinder(5, 160);
  pop();
  push(); 
  translate(65,-5,-35);
  rotateZ(120);
  rotateX(12);
  cone(5, 150);
  pop();
  
  push(); //left hand
  translate(-20,-130,0);
  rotateZ(-59);
  cylinder(5, 160);
  pop();
  push(); 
  translate(-123,-120,0);
  rotateZ(40);
  //rotateX(12);
  cone(5, 150);
  pop();
  
  push(); //left leg cylinder 
  translate(52, 0, 0);
  rotateZ(50);
  cylinder(10, 200);
  pop();
  
  push(); //left leg cylinder 
  translate(52, 0, 0);
  rotateZ(50);
  cylinder(10, 200);
  pop();

  push();  //left leg 2 cylinder 
  translate(-7, 35, 25);
  rotateZ(-50);
  rotateX(-50);
  cylinder(7, 220);
  pop();
  
  push(); //right leg cylinder 
  translate(0, 0, 0);
  rotateZ(-50);
  cylinder(10, 200);
  pop();
  
  push();  //left leg cone
  translate(0, 190, 0);
  rotateZ(50);
  cone(10, 200);
  pop();
  
  push();   //left leg 2 cone
  translate(-20, 190, 53);
  rotateZ(50);
  cone(5, 123);
  pop();
  
  push();  //right leg cone
  translate(104, 190, 0);
  rotateZ(50);
  cone(10, 200);
  pop();
  
  function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a+20) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
}
