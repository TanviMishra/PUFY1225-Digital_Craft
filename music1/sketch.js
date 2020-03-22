let song;
function preload(){
soundFormats('mp3');
song = loadSound('https://www.dropbox.com/s/dl/5k7v89yka42ms42/Loyalty_Freak_Music_-_06_-_Take_A_Break.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);  
  song.play();
}

function draw() {
background("GREEN");

  }
