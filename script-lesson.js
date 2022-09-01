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
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

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
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1986, "Ruxandra"));
console.log(yearsUntilRetirement(1976, "Nicoleta"));
