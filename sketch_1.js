let phrase =
  "bello. più assai sarebbe ne mondo il e pene meno e pensieri meno sarebbe ci fratello, suo considerasse si ognun e bene di po' un esistesse mondo ni’ Se";
let words = phrase.split(" ");
let iterator = 0;

let input1;
let input2;
let input3;
let input4;

function preload() {
  // pacciani = loadImage("assets/pacciani.mp4");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // background("red");

  input1 = createInput("...");
  input1.addClass("primo");
  input2 = createInput("...");
  input2.addClass("secondo");
  input3 = createInput("...");
  input3.addClass("terzo");
  input4 = createInput("...");
  input4.addClass("quarto");

  words.forEach((word) => {
    createButton(word);
  });

  allButtons = selectAll("button");
}

function draw() {
  iterator++;
  allButtons.forEach((singleButton, i) => {
    let x = noise((iterator + 30 * i) / 400) * windowWidth;
    let y = noise((iterator - 10 * i) / 400) * windowHeight;

    singleButton.position(x, y);
  });
}
