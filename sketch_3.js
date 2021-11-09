let phrase = "Se ni’ mondo";
let words = phrase.split(" ");

let title = "Pacciani's Poem Builder";

let myRect;

let rects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  createElement("h1", title);

  // myRect = new Rect(width / 2, height / 2, 80, 40);

  // words.forEach((word) => {
  //   createButton(word);
  // });

  for (let i = 0; i < 20; i++) {
    let newRect = new Rect(
      random(100, width - 200),
      random(100, height - 200),
      80,
      30
    );
    rects.push(newRect);
  }
}

function draw() {
  background(255);
  rectMode(CENTER);
  // myRect.display();
  for (let i = 0; i < 20; i++) {
    rects[i].display();
  }
}

function mouseDragged() {
  // myRect.dragged();
  rects.dragged();
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
