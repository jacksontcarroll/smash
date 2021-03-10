function setup() {
  createCanvas(800, 600);
  background(255);
  noStroke();
}

function draw() {

  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255,0,0);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
