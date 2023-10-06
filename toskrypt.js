let pytania = [
  `co jest  duże,biało czarne i dake mleko?`,
  `co nie może latać i jest różowe?`,
  `co znosi jaja i pieje o poranku?`,
  `co jest czarne i ma pióra?`,
  `czemu podarowanemu nie zagląda się w zęby?`,
  `co łapie myszy i jeset kochane?`,
  `co stoi na straży domi i jest jescze kochańsze?`,
  `co jest białe,daje wełne i beczy?`,
];
let odpowiedzi = [
  `krowa`,
  `świnia`,
  `kura`,
  `kruk`,
  `koń`,
  `kot`,
  `pies`,
  `owca`,
];
let próby = 3;
let wynik = 1;
let losujnumer = function () {
  return Math.floor(Math.random() * pytania.length);
};

let zwierzeta = function (x) {
  let g = "Możliwe odpowiedzi to...";
  for (let i = 0; i < x.length; i++) {
    if (i !== x.length - 1) {
      g += x[i];
      g += `,`;
    } else if (i == x.length - 1) {
      g += x[i];
      g += ".";
    }
  }
  return g;
};

let ileprob = function () {
  return próby--;
};
let ostrzezenie = document.querySelector(`.ostrzezenie`);
let highscore = document.querySelector(`.highscore`);
let pytanie = document.querySelector(`.pytanie`);
let odpowiedziwypisz = zwierzeta(odpowiedzi);
let losowepytanie = pytania[losujnumer()];
document.querySelector(".pytanie").textContent = losowepytanie;
document.querySelector(".tablica").textContent = odpowiedziwypisz;
let tło = document.querySelector(`body`).style;
ostrzezenie.textContent = `Masz jedynie trzy możliowści błędnej odpowiedzi.Ilość ich obecnie wynosi:${próby}`;


// Sprawdzanie odpowiedzi wersja 2.0
document.querySelector(`.check`).addEventListener(`click`, function () {
  let tylkoraz = true;

  let nowalinia = document.querySelector(`.userinput`).value;

  const numerpytania = pytania.indexOf(pytanie.textContent);
  const numerodpowiedzi = odpowiedzi.indexOf(nowalinia);

  if (numerpytania === numerodpowiedzi) {
    tło.backgroundColor = `darkgreen`;
    highscore.textContent = "odpowiedz poprawna!";
    document.querySelector(`.check`).disabled = true;
    document.querySelector(`.wynik`).textContent = `Twój wynik to:${wynik++}`;
    pytania.splice(numerpytania, 1);
    odpowiedzi.splice(numerpytania, 1);
    if (wynik == 8) {
      document.querySelector(`.popup-tlo`).style.display = `flex`;
      tło.backgroundColor = `#222`;
    }
  } else if (!nowalinia) {
    highscore.textContent = "prosze wprowadzic odpowiedź!";
  } else if (!(numerpytania === numerodpowiedzi)) {
    highscore.textContent = "odpowiedz niepoprawna!";
    document.querySelector(`.check`).disabled = true;
    if (tylkoraz) {
      ostrzezenie.textContent = `Masz jedynie trzy możliowści błędnej odpowiedzi.Ilość ich obecnie wynosi:${
        ileprob() - 1
      }`;
      tylkoraz = false;
    }
  }
  if (próby == 0) {
    document.querySelector(`.popup-tlo`).style.display = `flex`;
  }
});

document.querySelector(`.nowyroll`).addEventListener(`click`, function () {
  highscore.textContent = "";
  tło.backgroundColor = `#222`;
  document.querySelector(".pytanie").textContent = pytania[losujnumer()];
  document.querySelector(`.check`).disabled = false;
  document.querySelector(`.muuu`).src = `zanakzapytania.png`;
  document.querySelector(`.userinput`).value = ``;
  document.querySelector(".tablica").textContent = zwierzeta(odpowiedzi);
});

document.querySelector(`.wskazowka`).addEventListener(`click`, function () {
  for (let i = 0; i < pytania.length; i++) {
    if (pytania[i] === pytanie.textContent) {
      document.querySelector(`.muuu`).src = `zd${i + 1}.jpg`;
      break;
    }
  }
});

document.querySelector(`.popup-close`).addEventListener(`click`, function () {
  document.querySelector(`.popup-tlo`).style.display = `none`;
});
document.addEventListener(`keydown`, function (e) {
  if (e.key === `Escape`) {
    document.querySelector(`.popup-tlo`).style.display = `none`;
  }
});
const menu1 = [5, 6, 7, 8];
const menu = [1, 2, 3, 4, ...menu1];
console.log(menu);

