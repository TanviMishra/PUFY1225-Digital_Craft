let song;
function preload(){
//soundFormats('mp3', 'ogg');
 song = loadSound('assets/Loyalty_Freak_Music_-_06_-_Take_A_Break');
}

function setup() {
  createCanvas(windowWidth, windowHeight);  
  song.play();
}

function draw() {
background("GREEN");

  }
