// Functions
"use strict";

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} population and its capital city is ${capitalCity}`;
}
const descRomania = describeCountry("Romania", 6000000, "Bucuresti");
const descGermania = describeCountry("Germania", 83000000, "Berlin");
const descSpania = describeCountry("Spania", 44000000, "Barcelona");

console.log(descRomania, descGermania, descSpania);
