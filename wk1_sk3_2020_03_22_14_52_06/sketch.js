let max_distance;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  //max_distance = dist(0, 0, width, height);
}

function draw() {
  //background(0);
  //setting the dist between circles
  for (let i = 0; i <= width; i += 20) {
    for (let j = 0; j <= height; j += 20) {
      //changing size as the mouse moves
      let size = dist(mouseX, mouseY, 50, 50);
      //resetting the size to a small integer
      //size = (size / max_distance) * 700;
      //changes mouseX limits from 0-710 to 0-255
      let c = map(mouseX, 0, width, 0, 255);
      fill(255, c, 0)
      rect(2, i, size, size);
    }
  }
}