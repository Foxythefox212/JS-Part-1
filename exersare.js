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
