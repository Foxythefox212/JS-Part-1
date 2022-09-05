// Lesson 01: STRICT MODE
"use strict";

let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :)");

// const interface = "Audio"; Audio nu se poate folosi
// const private = 534; private nu se poate folosi

// Lesson 02: FUNCTIONS = piece of code that can be reuse and

function logger() {
  console.log("My name is Ruxandra Laura");
}
//calling / runing / invoking function
logger();
logger();
logger();
//Function can also receive data and return data
function fruitProcessors(apples, oranges) {
  const juices = `Juice with ${apples} apples and ${oranges} oranges`;
  return juices;
}
const appleJuice = fruitProcessors(5, 0);
console.log(appleJuice);
console.log(fruitProcessors(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//Exista mai multe tipuri de FUNCTII
// Functions: care se numesc DECLARATIONS
function calcAge1(birthYear) {
  return 2022 - birthYear;
}
const age1 = calcAge1(1986);
console.log(age1);

//Function: care se numeste EXPRESSION
//Aceasta nu poate fi chemata inainte sa fie declarata
//Functie fara nume si se numeste Anonymus Functions
//Tot ce e aici e o Expresie si Expresia produce valoare
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};
const age2 = calcAge2(1986);
console.log(age1, age2);

// FUNCTION ARROW
//-(scrii o sageata si dupa sageata ce vrei sa iti dea inapoi )
//ii un fel de function expression si nu avem nevoie de paranteze{}
// daca e doar un statement, daca is mai multe avem nevoie
// si return se intampla implicit(este inclus)
const calcAge3 = (birthYear) => 2022 - birthYear; //Sageata
const age3 = calcAge3(1986);
console.log(age3);

// Avem un parametru(birthyear) si mai multe statement si cand avem
//mai multe statement trebuie trecut return...daca avem doar 1 statement
//ca si deasupra atunci nu mai punem return
// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2022 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };
// console.log(yearsUntilRetirement(1986, "Ruxandra"));
// console.log(yearsUntilRetirement(1976, "Nicoleta"));

// FUNCTION CALLING OTHER FUNCTIONS
//Inainte sa facem sucul trebuie sa taiem fructele in bucati mai mici
function cutFruitPieces(fruit) {
  return fruit * 4;
}
//Sus am taiat fructele  si jos am adaugat taiatul la fruitProccesor
function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of oranges`;
  return juice;
}
console.log(fruitProcessor(2, 3));

//REVIEW(RECAPITULARE)

const calcAge = function (birthYear) {
  return 2022 - birthYear;
};
const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }

  return retirement;
  // return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1986, "Ruxandra"));
console.log(yearsUntilRetirement(1950, "Nicoleta"));

//ARRAY(DATA STRUCTURE)

// const friend1 = "Andrada";
// const friend2 = "Cristina";
// const friend3 = "Alexandra";

const friends = ["Andrada", "Cristian", "Alexandra"];
console.log(friends);

const years = new Array(1986, 1987, 1988, 1989); //Asta e tot un Array
//dar e Array functie() si trebuie folosit new

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Ioana";
console.log(friends);
//friends = ["May",  "Iunie"]-nu se poate schimba intreg Array
//Dar se poate schimba parti din el chaiar daca e declarat cu const
//variabilele primitive nu se pot schimba

const ruxandra = ["Ruxandra", "Laura", 2022 - 1986, "programming", friends];
console.log(ruxandra);

//Exercise array

const calcAge4 = function (birthYear) {
  return 2022 - birthYear;
};
const yearss = [1999, 2002, 2005, 2009, 2013];

const age4 = calcAge4(yearss[0]);
const age5 = calcAge4(yearss[1]);
const age6 = calcAge4(yearss[years.length - 1]);
console.log(age4, age5, age6); //23, 20 , 13

const ages = [
  calcAge4(yearss[0]),
  calcAge4(yearss[1]),
  calcAge4(yearss[years.length - 1]),
];
console.log(ages); //23, 20, 13
