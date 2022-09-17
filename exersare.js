//FUNCTIONS
//Aceasta poate fi chemata inainte de a fi declarata
"use strict";

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} population and its capital city is ${capitalCity}`;
}
const descRomania = describeCountry("Romania", 6000000, "Bucuresti");
const descGermania = describeCountry("Germania", 83000000, "Berlin");
const descSpania = describeCountry("Spania", 44000000, "Barcelona");
console.log(descRomania, descGermania, descSpania);

// FUNCTION DECLARATION vs. FUNCTION EXPRESSIONS
// 01-Function Declarations
function percentageOfWorld1(populations) {
  return (populations / 7900) * 100;
}
const firstEuropa = percentageOfWorld1(1100);
const firstAmerica = percentageOfWorld1(900);
const firstAustralia = percentageOfWorld1(500);
console.log(firstEuropa); //13.924050
console.log(firstAmerica); //11.392405
console.log(firstAustralia); // 6.32911392
// JONAS A SCRIS ASA
const percPortugal1 = percentageOfWorld1(10);
const percChina1 = percentageOfWorld1(1441);
const percUSA1 = percentageOfWorld1(332);
console.log(percPortugal1, percChina1, percUSA1);

// 02-Function Expression
const percentageOfWorld2 = function (populations) {
  return (populations / 7900) * 100;
};
const secondEuropa = percentageOfWorld2(1100);
const secondAmerica = percentageOfWorld2(900);
const secondAustralia = percentageOfWorld2(500);
console.log(secondEuropa); //13.924
console.log(secondAmerica); //11.3924
console.log(secondAustralia); //6.3291

// 03-ARROW FUNCTION
const percentageOfWorld3 = (populations) => (populations / 7900) * 100;
const thirdEuropa = percentageOfWorld3(1100);
const thirdAmerica = percentageOfWorld3(900);
const thirdAustralia = percentageOfWorld3(500);
console.log(thirdEuropa);
console.log(thirdAmerica);
console.log(thirdAustralia);

// FUNCTION CALLING OTHER FUNCTIONS
const describePopulation = function (country, populations) {
  const percentage = percentageOfWorld1(populations);
  const description = `${country} has ${populations} million people, which is about ${percentage} % of the world.`;
  console.log(description);
};

describePopulation("Romania", 24);
describePopulation("China", 1140);
describePopulation("USA", 332);

// CHALLENGE 01
// JONAS
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// TEST 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas); // 46 56

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win the trophy 🏆 (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win the trophy 🏆 (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log(`No team wins...`);
  }
};
checkWinner(scoreDolphins, scoreKoalas); //Is stand alone adica nu depinde
//exemplu pt ca nu depinde
checkWinner(523, 176); // Dolphins win

// TEST 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas); //60 28
checkWinner(scoreDolphins, scoreKoalas); //Dolphins win  pt ca are dublu scorul

//CHALLENGE 02: Jonas facut
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//E aceeasi chestie doar ca e scris cu functia arrow
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
//Bonusul
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);

// ARRAYS

const populatione = [24, 50, 100, 250];
console.log(populatione.length === 4);

const percentages = [
  percentageOfWorld1(populatione[0]),
  percentageOfWorld1(populatione[1]),
  percentageOfWorld1(populatione[2]),
  percentageOfWorld1(populatione[3]),
];
console.log(percentages);

// Basic ARRAY OPERATIONS (METHOD)

const neighbours = ["Moldova", "Ungaria", "Ucraina", "Bulgaria"];
neighbours.push = "Utopia";
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany")) {
  console.log(`Propably not a central European country`);
}

neighbours[neighbours.indexOf("Ungaria")] = "Buda";
console.log(neighbours);

// OBJECTS

const myCountry = {
  country: "Romania",
  capital: "Bucuresti",
  language: "Romana",
  population: 24,
  neighbours: ["Moldova", "Ungaria", "Serbia"],
};

// Dots vs Bracket Notation
// 1
console.log(`${myCountry.country} has ${myCountry.population} million finnish-speaking
people, ${myCountry.neighbours.lenght} neighbouring countries and a capital called ${myCountry.capital}`);

// 2
console.log(`${myCountry.country} has ${
  myCountry.population + 2
} million finnish-speaking
people, ${neighbours.lenght} neighbouring countries and a capital called ${
  myCountry.capital
}`);

// 3
console.log(`${myCountry.country} has ${
  myCountry.population
} million finnish-speaking
people, ${
  myCountry["population"] - 2
} neighbouring countries and a capital called ${myCountry.capital}`);

// Jonas
//console.log 2
myCountry.population += 2;
console.log(myCountry.population); // 26

//console.log 3
myCountry["population"] -= 2;
console.log(myCountry.population); // 24

// UN PIC DE RECAPITULARE
// Value & Variable
const tara = "Romania";
const continent = "Europa";
let populatie = 24;
console.log(tara, continent, populatie);
const nume = "Ruxandra";
const prenume = "Laura";
let varsta = 36;
console.log(nume, prenume, varsta);

// Data Types
const iiInsula = false;
const limbaVorbita = "romana";
console.log(
  typeof iiInsula,
  typeof limbaVorbita,
  typeof tara,
  typeof populatie
);
let engleza = "romana";
let romana = true;
let populatiePlecata = 5000;
console.log(typeof engleza, typeof romana, typeof populatiePlecata);

// Let, Const, Var
//  let = folosit atunci cand variabila se poate schimba
// const = cand variabila e "fixa" nu se schimba
// var = nu prea se mai fioloseste pt ca cred ca se poate modifica variabila ?

// BASIC OPERATOR
let calcul = populatie / 2;
console.log(calcul); // 11.5
populatie++;
console.log(populatie); // 24
let finland = 6;
console.log(populatie > finland); // 24 6 //true
let averagePopulatie = 33;
console.log(averagePopulatie > populatie); // 33 24 //true
let descriere =
  tara +
  " is in " +
  continent +
  " , and its " +
  populatie +
  " million people speak " +
  limbaVorbita;
console.log(descriere);

// STRING and TEMPLATE LITERALS
console.log(
  `${tara} is in ${continent}, and its ${populatie} million people speak ${limbaVorbita}`
);

// IF/ ELSE STATEMENT
if (populatie > 33) {
  console.log(`${tara} ${populatie} is above average`);
} else {
  console.log(
    `${tara} population is ${
      averagePopulatie - populatie
    } million below average`
  );
}

// Daca ora e intre (6:00 si 12:00): Buna dimineata;
// Daca e intre (13:00 si 20:00): Buna ziua;
// Daca e intre (21:00 si 5:00): Buna seara;
let ora = 22;
if (ora >= 6 && ora < 12) console.log("Buna dimineata");
else if (ora >= 13 && ora < 20) console.log("Buna ziua");
else if (ora >= 21 && ora < 5) {
  console.log("Buna seara"); // Aceasta linie nu se mai executa
  // si mi-am dat seama de ce : pt ca 5 din coada nu e mai mic ca 22....
} else console.log("Saluta cum vrei tu");

// TYPE CONVERSION and COERCION
// "9" - "5" =Number 4
// "19" - "13" + "17" = String "617"
// "19" - "13" + 17 =Number 23
// "123" < 57; False=> Comparatia rezulta in Boolean....
// 5 + 6 +"4" + 9 - 4 - 2 = Number 1143; Am omis un 1
