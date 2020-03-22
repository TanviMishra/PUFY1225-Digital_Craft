let song;
function preload(){
soundFormats('mp3');
 song = loadSound('Loyalty_Freak_Music_-_06_-_Take_A_Break.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);  
  
}

function draw() {
 song.play();
background("GREEN");

  }
