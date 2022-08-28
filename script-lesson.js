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
