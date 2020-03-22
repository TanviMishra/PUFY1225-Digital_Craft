let picket = [];
//let song;

// function preload(){
// song = loadSound("discotime.mp3");
// }

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  //song.play();
  
  for(i=0;i<8;i++){
  x=random(windowWidth/2)
  y=random(windowHeight/2)
  picket[i] = new Picket(x,y,0);  
  }
}

function draw() {
  background(100,0,random(255));
  for(i=0;i<5;i++){
  picket[i].createPicket();
  }
}

class Picket{
  
  constructor(x,y,z){
      this.x=x; this.y=y; this.z=z;
   }
  
  createPicket(){
    rotateY(frameCount * random(0.01,0.011));
    push()
    translate(this.x,this.y,this.z)
    noStroke();
    fill(0); 
  createShape(17,-250,0,0,5,5,sphere)//eye1
  createShape(37,-250,0,0,5,5,sphere)//eye2
  createShape(27,-235,0,0,11,2,cylinder)//mouth
  
  fill(140,198,64);
  createShape(20,-294,0,12,2,10,cylinder)//leafstalk1
  createShape(32,-295,0,0,2,10,cylinder)//leafstalk2
  
  createShape(27,-190,0,0,10,200,cylinder) //body
  
  createShape(65,-5,-35,120,5,150,cone,12) //right hand cone
  createShape(60,-120,0,53,5,160,cylinder) //right hand cylinder
  
  
  createShape(-123,-120,0,40,5,150,cone) //left hand cone
  createShape(-20,-130,0,-59,5,160,cylinder) //left hand cylinder
  
  createShape(52,0,0,50,10,200,cylinder) //left leg 1 cylinder 
  createShape(-7,35,25,-50,7,220,cylinder,-50) //left leg 2 cylinder 
  createShape(0,0,0,-50,10,200,cylinder) //right leg cylinder 
  
  createShape(0,190,0,50,10,200,cone) //left leg 1 cone
  createShape(-20,190,53,50,5,123,cone) //left leg 2 cone
  createShape(104,190,0,50,10,200,cone) //right leg cone
    
  push(); //leaflet
  rotate(90)
  polygon(-290,135,20,4);
  pop();
  
  push(); //leaflet
  polygon(50,-315,20,3);
  pop();
   pop();
  }  
  
}

function createShape(x,y,z,r1,w,h,shape,r2=0){
  push(); 
  translate(x,y,z);
  rotateZ(r1);
  rotateX(r2);
  shape(w,h);
  pop();
}

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
