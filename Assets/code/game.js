function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255,255,255);
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255,0,0);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
