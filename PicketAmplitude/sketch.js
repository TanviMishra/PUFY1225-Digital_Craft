let sound, amplitude;
let picket = [];  //array of bowtruckles
let fr = 10//setting the frame rate
let val = [-5, 25 , 55, -180, -300,0] //values accesed to form picket
let count = 0;
let scaleValue;

function preload(){
  sound = loadSound('https://tanvimishra.github.io/PUFY1225-Digital_Craft/PicketOnTheMove+Music/Loyalty_Freak_Music_-_06_-_Take_A_Break.mp3');
}

function setup() {
  frameRate(fr);
  let cnv = createCanvas(windowWidth, windowHeight, WEBGL);
  cnv.mouseClicked(toggleSound);
  amplitude = new p5.Amplitude();
  
  for(i=0;i<1;i++){
  //picket[i] = new Picket(0,0,0);  
  }
}

function draw() {
  
  background(255,0,100);
  let level = amplitude.getLevel();
  let size = map(level, 0, 1, 0,5);
  
  
  
  picket[1] = new Picket(0,0,0)
  push();
  picket[1].createPicket(size)
  pop();
}

class Picket{
  
  constructor(x,y){
      this.x=x; this.y=y;
   }
  
  createPicket(scaleValue){
    scale(scaleValue);
    push()
    translate(this.x,this.y)
    noStroke();
    fill(140,198,64);   
    createShape(15,-300,20,150,rect) //body
    triangle(15,-150,25,-150, val[int(random(0))], 10); //left leg
    triangle(25,-150,35,-150, val[int(random(2,2))], 10); //right leg
    triangle(15,-250,15,-240, -50,val[int(random(3,5))]); // left hand
    triangle(35,-250,35,-240, 90,val[int(random(3,5))]); // left hand

    
    push(); //leaflet
    rotate(90)
    polygon(-290,135,20,4);
    pop();
  
    push(); //leaflet
    polygon(50,-315,20,3);
    pop();
    
    fill(0); 
    createShape(20,-280,5,5,ellipse)//eye1
    createShape(30,-280,5,5,ellipse)//eye2
    createShape(20,-270,10,2,rect)//mouth
    pop()
  }  
  
}

function createShape(x,y,w,h,shape,r2=0){
  push(); 
  shape(x,y,w,h);
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

function toggleSound() {
  if (sound.isPlaying() ){
    sound.stop();
  } else {
    sound.play();
  }
}

