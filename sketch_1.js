// la frase è scritta al contrario in modo che appaia in ordine giusto quando eseguita
let phrase =
  "bello. più assai sarebbe ne mondo il e pene meno e pensieri meno sarebbe ci fratello, suo considerasse si ognun e bene di po' un esistesse mondo ni’ Se";
let words = phrase.split(" ");
let iterator = 0;

let input1;

let pacciani;

function setup() {
  createCanvas(windowWidth, windowHeight);

  //creazione della casella di testo e assegnazione dell'ID
  input1 = createElement("textarea");
  input1.id("primo");

  //creazione dei bottoni per ogni parola della poesia
  words.forEach((word) => {
    createButton(word);
  });

  allButtons = selectAll("button");

  //creazione del video
  pacciani = createVideo(["assets/pacciani_2.mp4"]);
  pacciani.hide();
}

function draw() {
  //movimento dei bottoni fluttuanti
  iterator = iterator + 0.7;
  allButtons.forEach((singleButton, i) => {
    let x = noise((iterator + 30 * i) / 400) * windowWidth;
    let y = noise((iterator - 30 * i) / 400) * windowHeight;
    singleButton.position(x, y);
  });

  //Se il testo scritto nella casella corrisponde, parte il video. Ho inserito varie alterantive (soprattuto per la punteggiatura) in modo da non renderlo troppo frustrante.
  if (
    document.getElementById("primo").value ==
      "Se ni’ mondo esistesse un po’ di bene e ognun si considerasse suo fratello, ci sarebbe meno pensieri e meno pene e il mondo ne sarebbe assai più bello" ||
    document.getElementById("primo").value ==
      "Se ni' mondo esistesse un po' di bene e ognun si considerasse suo fratello, ci sarebbe meno pensieri e meno pene e il mondo ne sarebbe assai più bello" ||
    document.getElementById("primo").value ==
      "Se ni' mondo esistesse un po' di bene e ognun si considerasse suo fratello ci sarebbe meno pensieri e meno pene e il mondo ne sarebbe assai più bello" ||
    document.getElementById("primo").value ==
      "Se ni' mondo esistesse un po' di bene e ognun si considerasse suo fratello ci sarebbe meno pensieri e meno pene e il mondo ne sarebbe assai più bello." ||
    document.getElementById("primo").value ==
      "Se ni' mondo esistesse un po' di bene e ognun si considerasse suo fratello, ci sarebbe meno pensieri e meno pene e il mondo ne sarebbe assai più bello." ||
    document.getElementById("primo").value ==
      "Se ni' mondo esistesse un po' di bene e ognun si considerasse suo fratello, ci sarebbe meno pensieri e meno pene e il mondo ne sarebbe assai più bello." ||
    document.getElementById("primo").value ==
      "se ni' mondo esistesse un po' di bene e ognun si considerasse suo fratello, ci sarebbe meno pensieri e meno pene e il mondo ne sarebbe assai più bello." ||
    document.getElementById("primo").value ==
      "se ni' mondo esistesse un po' di bene e ognun si considerasse suo fratello ci sarebbe meno pensieri e meno pene e il mondo ne sarebbe assai più bello"
  ) {
    backgroundImage(pacciani);
    pacciani.play();
  } else {
    background(255);
    pacciani.stop();
  }
}

function backgroundImage(img) {
  push();
  translate(width / 2, height / 2);
  imageMode(CENTER);
  let scale = Math.max(width / img.width, height / img.height);
  image(img, 0, 0, img.width * scale, img.height * scale);
  pop();
}
