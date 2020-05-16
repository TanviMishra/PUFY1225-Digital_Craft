let cam;  // see the camera move along its own axes while maintaining its orientation
let delta = 0;  //amount of movement
let sound, amplitude;
let picket = [];  //array of bowtruckles
let fr = 10//setting the frame rate
let val = [[-5,55],[25,25], -180, -300,0] //values accesed to form picket
let val1 = [-350, -150, 50, 250,450]
let count = 0;
let scaleValue;
let i=0;
let music = "null";

function preload(){
  bpm = loadTable('bpm.csv');
  music ='https://tanvimishra.github.io/PUFY1225-Digital_Craft/02-We Are The Champions.mp3';
  sound = loadSound(music);
  music = "'"+music+"'"; 
}

function setup() { 
  for (x=1; x<bpm.getRowCount();x++){
    if(bpm.get(x,4) == music){
     var artist = bpm.get(x,1); 
     var title = bpm.get(x,2);
     var beats = bpm.get(x,3);
     var link = bpm.get(x,4);
    }
 }
  delta = beats;
  print(delta);
  frameRate(fr);
  let cnv = createCanvas(windowWidth, windowHeight, WEBGL);
  cnv.mouseClicked(toggleSound);
  amplitude = new p5.Amplitude();
  cam = createCamera();
}

function draw() {
  
  background(101, 87, 181);
  let level = amplitude.getLevel();
  let size = map(level, 0,1,0.25,2);
  
  cam.move((delta/60), 0, 0);
  
  // every 10 frames, switch direction
  if (frameCount % 30 == 0) {
     //delta *= -1;
     }
    count++; 
    picket[count] = new Picket(random((-windowWidth+50),(windowWidth-50)),val1[count%5],0)
    // push();
    // picket[count].createPicket(size)
    // pop();
    for(i=1;i<=count;i++){
  if (count ==20){
   count = 0 
  }
  }
  
  //translate(40, 40, 0);
  if (sound.isPlaying() ){
  
  for(i=1;i<=count;i++){
  push();
  picket[i].createPicket(size);
  pop();
  //if (count ==20){
  // count = 0 
  //}
  }
  }
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
    fill(random(140,36), 173, random(82,100));   
    let feetPos = int(random(2))
    createShape(15,-300,20,150,rect) //body
    triangle(15,-150,25,-150, val[feetPos][0], 10); //left leg
    triangle(25,-150,35,-150, val[feetPos][1], 10); //right leg
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

function toggleSound() {
  if (sound.isPlaying() ){
    sound.stop();
  } else {
    sound.play();
  }
}

