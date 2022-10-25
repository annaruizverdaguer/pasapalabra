// ----------------------------------------------
// -------------------- MAIN --------------------
// ----------------------------------------------

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
    e.preventDefault();
    startGame();
  }
});
