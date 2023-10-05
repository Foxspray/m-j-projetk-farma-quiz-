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

// sprawdznie odpowiedzi wersja 1.0
/*
document.querySelector(`.check`).addEventListener(`click`, function () {
  let tylkoraz = true;

  let nowalinia = document.querySelector(`.userinput`).value;
  for (let i = 0; i < odpowiedzi.length; i++) {
    if (pytania[i] === pytanie.textContent && odpowiedzi[i] === nowalinia) {
      tło.backgroundColor = `darkgreen`;
      highscore.textContent = "odpowiedz poprawna!";
      document.querySelector(`.check`).disabled = true;
      document.querySelector(`.wynik`).textContent = `Twój wynik to:${wynik++}`;
      pytania.splice([i], 1);
      odpowiedzi.splice([i], 1);
      console.log(wynik);
      if (wynik == 3) {
        document.querySelector(`.popup-tlo`).style.display = `flex`;
        tło.backgroundColor = `#222`;
      }
      break;
    } else if (!nowalinia) {
      highscore.textContent = "prosze wprowadzic odpowiedź!";
    } else if (
      !(pytania[i] === pytanie.textContent && odpowiedzi[i] === nowalinia)
    ) {
      highscore.textContent = "odpowiedz niepoprawna!";
      document.querySelector(`.check`).disabled = true;
      if (tylkoraz) {
        ostrzezenie.textContent = `Masz jedynie trzy możliowści błędnej odpowiedzi.Ilość ich obecnie wynosi:${
          ileprob() - 1
        }`;
        tylkoraz = false;
        console.log(próby);
      }
      console.log(`wdoa`);
    }
  }

  if (próby == 0) {
    document.querySelector(`.popup-tlo`).style.display = `flex`;
  }
});
document.querySelector(`.check`).addEventListener(`click`, function () {
  let tylkoraz = true;

  let nowalinia = document.querySelector(`.userinput`).value;
  for (let i = 0; i < odpowiedzi.length; i++) {
    if (pytania[i] === pytanie.textContent && odpowiedzi[i] === nowalinia) {
      tło.backgroundColor = `darkgreen`;
      highscore.textContent = "odpowiedz poprawna!";
      document.querySelector(`.check`).disabled = true;
      document.querySelector(`.wynik`).textContent = `Twój wynik to:${wynik++}`;
      pytania.splice([i], 1);
      odpowiedzi.splice([i], 1);
      console.log(wynik);
      if (wynik == 3) {
        document.querySelector(`.popup-tlo`).style.display = `flex`;
        tło.backgroundColor = `#222`;
      }
      break;
    } else if (!nowalinia) {
      highscore.textContent = "prosze wprowadzic odpowiedź!";
    } else if (
      !(pytania[i] === pytanie.textContent && odpowiedzi[i] === nowalinia)
    ) {
      highscore.textContent = "odpowiedz niepoprawna!";
      document.querySelector(`.check`).disabled = true;
      if (tylkoraz) {
        ostrzezenie.textContent = `Masz jedynie trzy możliowści błędnej odpowiedzi.Ilość ich obecnie wynosi:${
          ileprob() - 1
        }`;
        tylkoraz = false;
        console.log(próby);
      }
      console.log(`wdoa`);
    }
  }

  if (próby == 0) {
    document.querySelector(`.popup-tlo`).style.display = `flex`;
  }
});
*/

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
    console.log(wynik);
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
      console.log(próby);
    }
    console.log(`wdoa`);
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
/*
const checkdogs = function (dogsJulia, DogsKate) {
  const psyjulia = dogsJulia.slice();
  psyjulia.splice(-2);
  psyjulia.splice(0, 1);
  console.log(psyjulia);
  const poloczone = [...psyjulia, ...DogsKate];
  poloczone.forEach(function (pies, numerpsa) {
    if (pies >= 3)
      console.log(`Pies numer ${numerpsa + 1} jest dorosly,i ma ${pies} lat`);
    else console.log(`Pies numer ${numerpsa + 1} jest szczeniakeiem`);
  });
};
const julia = [3, 5, 2, 12, 7];
const kate = [4, 1, 15, 8, 3];
checkdogs(julia, kate);
const movments = [5, 1, -3, 4, -3, 6, -7, -9, -4];

const withdrawls = movments.filter((ele) => ele < 0);

console.log(withdrawls); 
.filter(function (ludzielata) {
      return ludzielata >= 18;
    })
    .reduce(function (acc, ele, u, arr) {
      const dlugos = arr.length;
      return acc + ele;
    }, 0);

 */
const calcaveragehumangage = function (ages) {
  const wieknaludzkie = ages.map(function (wiek, id) {
    if (wiek <= 2) {
      const humanage = 2 * wiek;
      console.log(
        `Pies nr ${id + 1} ma ${humanage} lat w przeliczeniu na ludzkie lata`
      );
      return humanage;
    } else if (wiek > 2) {
      const humanage = 16 + wiek * 4;
      console.log(
        `Pies nr ${id + 1} ma ${humanage} lat w przeliczeniu na ludzkie lata`
      );
      return humanage;
    }
  });
  console.log(wieknaludzkie);

  const filt = wieknaludzkie.filter(function (ludzielata) {
    return ludzielata >= 18;
  });
  console.log(filt);
  const reduk =
    filt.reduce(function (acc, ele) {
      return acc + ele;
    }, 0) / filt.length;
  console.log(reduk);
  console.log(`wynik to ${reduk}`);
};

const dogages = [5, 2, 4, 1, 15, 8, 3];
calcaveragehumangage(dogages);

const kalkulujlata = (ages) =>
  ages
    .map((wiek) => (wiek <= 2 ? 2 * wiek : 16 + wiek * 4))
    .filter((ludzielata) => ludzielata >= 18)
    .reduce((acc, ele, i, arr) => acc + ele / arr.length, 0);
console.log(kalkulujlata(dogages));

const liczby = [1, 2, 3, 7, 11, 140, -2];

const sortuj = liczby.sort((a, b) => {
  if (a > b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }
});

console.log(sortuj);

var number = function (array) {
  num = 1;
  const output = array.map(function (ele) {
    return `${num++}:${ele}`;
  });
  return output;
};

const tab32 = ["a", "b", "c"];

console.log(number(tab32));
