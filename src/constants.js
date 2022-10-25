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
let intervalID = "";

// -------------------- SELECTING ELEMENTS FROM HTML --------------------

const contenidor = document.querySelector(".container");
const rosco = document.querySelector(".rosco");
const botoInici = document.querySelector(".inici-joc");
