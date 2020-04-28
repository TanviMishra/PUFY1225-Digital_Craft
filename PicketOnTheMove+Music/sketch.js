let cam;  // see the camera move along its own axes while maintaining its orientation
let delta = 30;  //amount of movement
let picket = [];  //array of bowtruckles
let fr = 1//setting the frame rate
let val = [[-5, 55] ,[25,25], -180, -300,0] //values accesed to form picket
let val1 = [-600, -200, 200, 600,1000]
let count = 0;
let val2 = 0;


function preload() {
  data = loadJSON('bubbles.json');
  bpm = loadTable('bpm.csv');
  soundFormats('mp3');
  song = loadSound('Loyalty_Freak_Music_-_06_-_Take_A_Break.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  fr = ((bpm.get(15,2))/60);
  frameRate(fr);
  cam = createCamera();
  song.play();
  
  for(i=0;i<1;i++){
  picket[i] = new Picket(0,val1[count],0);  
    for (x=1; x<bpm.getRowCount();x++){
     var artist = bpm.get(x,0); 
     var title = bpm.get(x,1);
     var beats = bpm.get(x,2)/60;
    print(title, ",", beats);
  }
    
    
      print(fr)
}
}

function draw() {
  
  background(255,0,random(100, 200));
  
   cam.move(delta, 0, 0);
  
   // every 10 frames, switch direction
  if (frameCount % 2 === 0) {
     delta *= -1;
    count++;
    picket[count] = new Picket(random(-windowWidth,windowWidth),val1[count%5],0);        
    
   }
  
  translate(-10, -10, 0);
  
  for(i=0;i<=count;i++){
  push();
  picket[i].createPicket();
  pop();
  }
}

class Picket{
  
  constructor(x,y){
      this.x=x; this.y=y;
   }
  
  createPicket(){
    scale(0.40);
    push()
    translate(this.x,this.y)
    noStroke();
    fill(140,198,64);   
    createShape(15,-300,20,150,rect) //body
    val2+=1;
    triangle(15,-150,25,-150, val[val2%2][0], 10); //left leg
    triangle(25,-150,35,-150, val[val2%2][1], 10); //right leg
    triangle(15,-250,15,-240, -50,val[int(random(2,4))]); // left hand
    triangle(35,-250,35,-240, 90,val[int(random(2,4))]); // left hand

    
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




