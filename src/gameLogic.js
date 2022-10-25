// ---------------------------------------------------
// -------------------- FUNCTIONS --------------------
// ---------------------------------------------------

// -------------------- END GAME ----------------------
function endGame() {
  const time = document.querySelector(".time-counter").textContent;
  const encerts = document.querySelector(
    ".success-answers-counter"
  ).textContent;
  const fallos = document.querySelector(".fail-answers-counter").textContent;
  clearInterval(intervalID);

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

  intervalID = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
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
}

function removeLetterFromPasapalabraList(lletra) {
  const ind = pasapalabraList.indexOf(lletra);
  pasapalabraList.splice(ind, 1);
  if (pasapalabraList.length == 0) {
    endGame();
  }
}
