let myRect;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myRect = new Rect(width / 2, height / 2, 80, 40);
}

function draw() {
  background(200);
  rectMode(CENTER);
  myRect.display();
}

function mouseDragged() {
  myRect.dragged();
}

class Rect {
  constructor(_x, _y, _width, _height) {
    this.x = _x;
    this.y = _y;
    this.width = _width;
    this.height = _height;
    this.color = 255;
  }
  display() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  }
  dragged() {
    this.x = mouseX;
    this.y = mouseY;
  }
  released() {}
}
