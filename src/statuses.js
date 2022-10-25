// ---------------------------------------------------
// -------------------- FUNCTIONS --------------------
// ---------------------------------------------------

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
