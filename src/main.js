// ------------------------------------------------------
// --------------------- CONSTANTS ----------------------
// ------------------------------------------------------

const abcdari = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "l",
  "m",
  "n",
  "ñ",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "x",
  "y",
  "z",
];

const radi = 275;
const elementRadi = 25;
const angle = 360 / 25;

const contingutRosco = [
  [
    "A",
    "Empieza por A:",
    " Relato breve de un acontecimiento extraño, curioso o divertido, generalmente ocurrido a la persona que lo cuenta.",
    "Anecdota",
  ],
  [
    "B",
    "Empieza por B:",
    " Pasta dulce y esponjosa, hecha con harina, huevos, levadura y otros ingredientes, que puede tener distintas formas",
    "Bollo",
  ],
  [
    "C",
    "Empieza por C:",
    " Corriente de agua que cae desde cierta altura a causa de un brusco desnivel en su cauce, especialmente en un rio",
    "Cascada",
  ],
  [
    "D",
    "Empieza por D:",
    " Arma blanca de hoja corta, ancha y puntiaguda, parecida a la espada pero de menor tamaño",
    "Daga",
  ],
  [
    "E",
    "Empieza por E:",
    " Línea curva que describe varias vueltas alrededor de un punto, alejándose cada vez más de él",
    "Espiral",
  ],
  [
    "F",
    "Contiene la F:",
    " Que está descompuesto o podrido por la acción de diversos factores y determinados microorganismos",
    "Putrefacto",
  ],
  [
    "G",
    "Empieza por G:",
    " Que se comporta de manera ruda, tosca o grosera",
    "Garrulo",
  ],
  [
    "H",
    "Contiene la H:",
    " Persona o animal que es grueso y de poca altura",
    "Rechoncho",
  ],
  [
    "I",
    "Empieza por I:",
    " Que está en el espacio existente entre dos astros, o que tiene relación con él",
    "Interestelar",
  ],
  [
    "J",
    "Empieza por J:",
    " Chile picante de unos 5 cm de largo, carnoso y de punta redonda, que se usa para condimentar ciertos guisos",
    "Jalapeño",
  ],
  ["L", "Contiene la L:", " Hombre pequeño y débil", "Homunculo"],
  [
    "M",
    "Empieza por M:",
    " Persona que sufre o muere por defender su religión o sus ideales. ",
    "Martir",
  ],
  [
    "N",
    "Empieza por N:",
    " Tubo fluorescente que produce una luz brillante.",
    "Neon",
  ],
  [
    "Ñ",
    "Contiene la Ñ:",
    " Dar a una cosa un color distinto del que tiene.",
    "Teñir",
  ],
  [
    "O",
    "Empieza por O:",
    " Que conoce todas las cosas reales y posibles.",
    "Omnisciente",
  ],
  [
    "P",
    "Contiene la P:",
    " Calzado de lona, con suela de esparto, cáñamo o goma, que se sujeta al pie por presión o con unas cintas que se atan al tobillo.",
    "Alpargata",
  ],
  ["Q", "Empieza por Q:", " Que se puede romper fácilmente.", "Quebradizo"],
  [
    "R",
    "Empieza por R:",
    " Operación quirúrgica para restaurar la nariz.",
    "Rinoplastia",
  ],
  [
    "S",
    "Contiene la S:",
    " Falta de cuidado en la forma de vestir y en el aseo personal.",
    "Desaliño",
  ],
  [
    "T",
    "Empieza por T:",
    " Persona alocada, bulliciosa y molesta.",
    "Tabardillo",
  ],
  [
    "U",
    "Contiene la U:",
    " Persona que rehúye el trato de otras personas y rechaza las atenciones y muestras de cariño.",
    "Huraño",
  ],
  [
    "V",
    "Empieza por V:",
    " Tributo que el vasallo pagaba a su señor o servicio que le prestaba según este vínculo.",
    "Vasallaje",
  ],
  [
    "X",
    "Contiene la X:",
    " Punto culminante o de mayor satisfacción de la excitación sexual en las zonas erógenas o sexuales.",
    "Climax",
  ],
  [
    "Y",
    "Contiene la Y:",
    " Toro castrado, que se utiliza como animal de tiro y del cual se aprovecha su carne.",
    "Buey",
  ],
  [
    "Z",
    "Contiene la Z:",
    " Que es tonto o tiene poca rapidez mental.",
    "Pazguato",
  ],
];

// --------------------------------------------------------
// --------------------- GLOBAL VARS ----------------------
// --------------------------------------------------------

let pasapalabraList = [];
let secondRound = false;
let pasapalabraIndex = 0;

// ---------------------------------------------------
// -------------------- FUNCTIONS --------------------
// ---------------------------------------------------

// -------------------- RENDERING --------------------
function calculateLetterPosition(letter, index) {
  const element = document.createElement("div");
  element.classList.add(letter);
  element.classList.add("lletra");
  element.innerHTML = letter.toUpperCase();

  const angleElement = Math.round(angle * index * 100) / 100;

  element.style.transform = `rotate(${angleElement}deg)
    translateY(-${radi}px)
    rotate(-${angleElement}deg)`;

  rosco.appendChild(element);
}

function printNextQuestion(letter) {
  const contenidorLletra = document.querySelector(".contingut-pregunta");
  contenidorLletra.innerHTML = "";
  const index = abcdari.indexOf(letter);
  const contingutLletra = contingutRosco[index];
  const h2 = document.createElement("h2");
  h2.innerHTML = contingutLletra[1];
  const p = document.createElement("p");
  p.innerHTML = contingutLletra[2];
  contenidorLletra.appendChild(h2);
  contenidorLletra.appendChild(p);
}

function addAnswerInputAndButtons() {
  const form = document.querySelector(".botons-submit");

  const input = document.createElement("input");
  input.classList.add("answer-input");
  input.classList.add("form-control");
  input.setAttribute("autofocus", "on");
  input.placeholder = "Escriu la teva resposta";

  const botoResposta = document.createElement("button");
  botoResposta.setAttribute("type", "submit");
  botoResposta.classList.add("btn");
  botoResposta.classList.add("boto-input");
  botoResposta.innerHTML = "ENVIA";

  const botoPasapalabra = document.createElement("button");
  botoPasapalabra.classList.add("btn");
  botoPasapalabra.classList.add("boto-pasapalabra");
  botoPasapalabra.innerHTML = "PASAPALABRA";

  form.appendChild(input);
  form.appendChild(botoResposta);
  form.appendChild(botoPasapalabra);
  contenidor.appendChild(form);
}

function replaceButtonForContent() {
  if (document.querySelector(".reinici-joc") != null) {
    document.querySelector(".reinici-joc").remove();
  } else {
    document.querySelector(".inici-joc").remove();
  }
  printNextQuestion("a");
  addAnswerInputAndButtons();
}

// -------------------- STATUSES --------------------

function addReadyStatus() {
  abcdari.forEach(function (letter) {
    let element = document.querySelector(`.${letter}`);
    element.classList.add("ready");
  });
}

function returnToReady(letter) {
  let element = document.querySelector(`.${letter}`);
  element.classList.remove("active");
  element.classList.add("ready");
}

function activeLetterStatus(letter) {
  let element = document.querySelector(`.${letter}`);
  console.log(element);
  element.classList.remove("ready");
  element.classList.add("active");
}

function successLetterStatus(letter) {
  let element = document.querySelector(`.${letter}`);
  element.classList.remove("active");
  element.classList.add("success");
}

function failLetterStatus(letter) {
  let element = document.querySelector(`.${letter}`);
  element.classList.remove("active");
  element.classList.add("fail");
}

// -------------------- END GAME ----------------------
function endGame() {
  const time = document.querySelector(".time-counter").textContent;
  const encerts = document.querySelector(
    ".success-answers-counter"
  ).textContent;
  const fallos = document.querySelector(".fail-answers-counter").textContent;

  rosco.innerHTML = "";
  abcdari.forEach(calculateLetterPosition);

  document.querySelector(".botons-submit").innerHTML = "";
  document.querySelector(".contingut-pregunta").innerHTML = "";

  const results = document.createElement("div");
  results.classList.add("results");

  const encertsElement = document.createElement("div");
  const fallosElement = document.createElement("div");
  const timeElement = document.createElement("div");

  encertsElement.textContent = `Preguntes encertades: ${encerts}`;
  fallosElement.textContent = `Preguntes fallades: ${fallos}`;
  timeElement.textContent = `Temps restant: ${time}`;

  results.appendChild(encertsElement);
  results.appendChild(fallosElement);
  results.appendChild(timeElement);
  rosco.appendChild(results);

  const playAgainButton = document.createElement("button");
  playAgainButton.classList.add("reinici-joc");
  playAgainButton.textContent = "Torna a jugar!";
  contenidor.appendChild(playAgainButton);
}

// -------------------- GAME LOGIC --------------------
function startCountdown(duration) {
  const display = document.createElement("div");
  display.classList.add("time-counter");
  rosco.appendChild(display);
  let timer = duration;
  let minutes;
  let seconds;

  let intervalID = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      clearInterval(intervalID);
      endGame();
    }
  }, 1000);
}

function addCounter(type) {
  const counter = document.createElement("div");
  counter.classList.add(`${type}-answers-counter`);
  rosco.appendChild(counter);
  counter.textContent = 0;
}

function updateCounter(type) {
  const counter = document.querySelector(`.${type}-answers-counter`);
  let value = parseInt(counter.textContent, 10);
  counter.textContent = value + 1;
}

function startGame() {
  if (document.querySelector(".results") != null) {
    document.querySelector(".results").remove();
    pasapalabraList = [];
    secondRound = false;
    pasapalabraIndex = 0;
  }
  addReadyStatus();
  replaceButtonForContent();
  addCounter("fail");
  addCounter("success");
  startCountdown(300);
  activeLetterStatus("a");
}

function validateAnswer(lletra) {
  let answer = document.querySelector(".answer-input").value;
  answer = answer.trim();
  answer = answer.toLowerCase();
  let expectedAnswer = contingutRosco[abcdari.indexOf(lletra)][3].toLowerCase();
  if (answer == expectedAnswer) {
    successLetterStatus(lletra);
    updateCounter("success");
  } else {
    failLetterStatus(lletra);
    updateCounter("fail");
  }
  if (pasapalabraList.indexOf(lletra) > -1) {
    removeLetterFromPasapalabraList(lletra);
  }
  document.querySelector(".answer-input").value = "";
  const nextLetter = getNextLetter(lletra);
  if (nextLetter != "end") {
    activeLetterStatus(nextLetter);
    printNextQuestion(nextLetter);
  }
}

function whoIsInActive() {
  let lletraActiva = "";
  abcdari.forEach(function (lletra, index) {
    if (document.querySelector(`.${lletra}`).classList.contains("active")) {
      lletraActiva = abcdari[index];
    }
  });
  return lletraActiva;
}

function getNextLetter(lletra) {
  if (lletra == "z") {
    if (pasapalabraList.length == 0) {
      endGame();
      return "end";
    }
    secondRound = true;
    pasapalabraIndex = 0;
  }
  if (secondRound) {
    if (lletra == pasapalabraList[pasapalabraList.length - 1]) {
      pasapalabraIndex = 0;
    }
    return pasapalabraList[pasapalabraIndex];
  } else {
    return abcdari[abcdari.indexOf(lletra) + 1];
  }
}

function addLetterToPasapalabraList(lletra) {
  if (secondRound) {
    pasapalabraIndex++;
  } else {
    pasapalabraList.push(lletra);
  }
  console.log(pasapalabraList);
}

function removeLetterFromPasapalabraList(lletra) {
  const ind = pasapalabraList.indexOf(lletra);
  pasapalabraList.splice(ind, 1);
  if (pasapalabraList.length == 0) {
    endGame();
  }
}

// ----------------------------------------------
// -------------------- MAIN --------------------
// ----------------------------------------------

// -------------------- SELECTING ELEMENTS FROM HTML --------------------

const contenidor = document.querySelector(".container");
const rosco = document.querySelector(".rosco");
const botoInici = document.querySelector(".inici-joc");

// -------------------- PRINTING LETTERS --------------------

abcdari.forEach(calculateLetterPosition);

// -------------------- ADDING EVENTS LISTENERS --------------------

botoInici.addEventListener("click", startGame);
contenidor.addEventListener("click", function (e) {
  if (e.target.classList.contains("boto-input")) {
    e.preventDefault();
    const currentLetter = whoIsInActive();
    validateAnswer(currentLetter);
  }
  if (e.target.classList.contains("boto-pasapalabra")) {
    e.preventDefault();
    const currentLetter = whoIsInActive();
    returnToReady(currentLetter);
    addLetterToPasapalabraList(currentLetter);
    const nextLetter = getNextLetter(currentLetter);
    if (nextLetter != "end") {
      activeLetterStatus(nextLetter);
      printNextQuestion(nextLetter);
    }
  }
  if (e.target.classList.contains("reinici-joc")) {
    startGame();
  }
});
