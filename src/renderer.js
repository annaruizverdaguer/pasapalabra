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
  const contingutLletra = contingutRosco[abcdari.indexOf(letter)];
  const title = document.createElement("h2");
  title.innerHTML = contingutLletra[1];
  const definition = document.createElement("p");
  definition.innerHTML = contingutLletra[2];
  contenidorLletra.appendChild(title);
  contenidorLletra.appendChild(definition);
}

function addAnswerInputAndButtons() {
  const form = document.querySelector(".botons-submit");

  const input = document.createElement("input");
  input.classList.add("answer-input");
  input.classList.add("form-control");
  input.setAttribute("autofocus", "on");
  input.placeholder = "Escriu la teva resposta";
  form.appendChild(input);

  const botoResposta = document.createElement("button");
  botoResposta.setAttribute("type", "submit");
  botoResposta.classList.add("btn");
  botoResposta.classList.add("boto-input");
  botoResposta.innerHTML = "ENVIA";
  form.appendChild(botoResposta);

  const botoPasapalabra = document.createElement("button");
  botoPasapalabra.classList.add("btn");
  botoPasapalabra.classList.add("boto-pasapalabra");
  botoPasapalabra.innerHTML = "PASAPALABRA";
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
