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
    console.log(`${firstName} has already retired ????`);
    return -1;
  }

  return retirement;
  // return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1986, "Ruxandra"));
console.log(yearsUntilRetirement(1950, "Nicoleta"));

//ARRAY(DATA STRUCTURE) = !!! Ordinea in care sunt scrise conteaza !!!!!!

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

//Array Method: .push, unshift(ADD-ULTIMUL SI PRIMUL)
//              .pop, shift(REVOME-ULTIMUL SI PRIMUL)
//              .indexOf(IN CE POZITIE SE AFLA IN Array)
//              .includes(True sau Flase daca se afla in Array)
// ADD ELEMENTS

const friend = ["Andrada", "Cristina", "Alexandra"];
const newLength = friend.push("Loredana"); //Push returneaza length de aceea
//i-am asignat la variabila newLength ca sa vedem ca retureaza length
console.log(friend);
console.log(newLength);

friend.unshift("Laura"); //Pune la inceputul Array-ului elementul
// ce il vrem adaugat in sir []
//De asemenea returneaza length Array-ului
console.log(friend);

// REMOVE ELEMENTS

friend.pop(); // Last element si nu trebuie completata paranteza
//Se subintelege ca ultimul e eliminat
//Returneaza si el ceva dar returneaza elementul eliminat
console.log(friend);
const popped = friend.pop();
console.log(popped);

friend.shift(); //Elimina primul element
console.log(friend);

console.log(friend.indexOf("Cristina")); //In ce pozitie se afla =1
console.log(friend.indexOf("Andrada")); //In ce pozitie se afla =0

friend.push(23);
console.log(friend.includes("Cristina")); //True
console.log(friend.includes("Elisa")); //False
console.log(friend.includes("23")); //False = ii testat cu strict
//equality adica 23 === "23" False

//OBJECTS = ! Oridinea in care sunt scrise nu conteaza !

const ruxandraLaura = {
  firstName: "Ruxandra",
  lastName: "Laura",
  age: 2022 - 1986,
  job: "programmer",
  friends: ["Me", "Myself", "I"],
};

// Dots an Bracket Notation (. [])
console.log(ruxandraLaura.lastName);
console.log(ruxandraLaura["firstName"]); // Aici in Bracket putem pune
// ce expresie vrem
// Exemplu :
const nameKey = "Name";
console.log(ruxandraLaura["first" + nameKey]);
console.log(ruxandraLaura["last" + nameKey]);

// Exemplu :
// const interestedIn = prompt(
//   "What do you want to know about Ruxandra? Choose between firstName, lastName, age, job, and friends"
// );
// console.log(interestedIn); //undefined
// console.log(ruxandraLaura[interestedIn]); //programmer

// if (ruxandraLaura[interestedIn]) {
//   console.log(ruxandraLaura[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, age, job, and friends"
//   );
// }
// Le-am pus asa sa nu tot sara mesajul de la prompt
ruxandraLaura.location = "Romania";
ruxandraLaura["twitter"] = "I don't have twitter";
console.log(ruxandraLaura);

//Little Challenge:
console.log(
  `${ruxandraLaura.firstName} has ${ruxandraLaura.friends.length} friends, and his best friend is called ${ruxandraLaura.friends[0]}`
);

// OBJECT METHODS

const ruxandraLaur = {
  firstName: "Ruxandra",
  lastName: "Laura",
  birthYear: 1986,
  job: "programmer",
  friends: ["Me", "Myself", "I"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) { //Functia daca e in interiorul object
  //   // se numeste METHOD
  //   return 2022 - birthYear;
  // },

  // calcAge: function () {
  //   // console.log(this);
  //   return 2022 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${
      this.job
    }, and she has ${this.hasDriversLicense ? "a" : "no"} driver's license} `;
  },
};

console.log(ruxandraLaur.calcAge()); // 36

console.log(ruxandraLaur.age);
// console.log(ruxandraLaur.age);
// console.log(ruxandraLaur.age);

// console.log(ruxandraLaur["calcAge"](1986)); // 36

// Little Challenge
console.log(ruxandraLaur.getSummary());

// Iteration: THE FOR LOOP// Repetitive actions

console.log("Lifting weight repetion 1 ????????????????");
console.log("Lifting weight repetion 2 ????????????????");
console.log("Lifting weight repetion 3 ????????????????");
console.log("Lifting weight repetion 4 ????????????????");

// For loop keep running while condition is True(rep <= 10)
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weight repetion ${rep} ????????????????`);
}

// Looping Array, Breaking and Continue

const ruxandraRo = [
  "Ruxandra",
  "Laura",
  2022 - 1986,
  "programming",
  friends,
  true,
];

const types = []; // Empty Array

// console.log(ruxandraR[1]
// console.log(ruxandraR[2]
// ...
// console.log(ruxandraR[4]
//ruxandraR[5] nu exista
for (let i = 0; i < ruxandraRo.length; i++) {
  // Reading from jonas array
  console.log(ruxandraRo[i], typeof ruxandraRo[i]);

  // Filing types array
  types[i] = typeof ruxandraRo[i];

  types.push(typeof ruxandraRo[i]);
}

console.log(types);

const Year = [1986, 1976, 1978, 2008];
const agee = [];

for (let i = 0; i < Year.length; i++) {
  agee.push(2022 - Year[i]);
}
console.log(agee);

// Continue and Break
console.log("---ONLY STRINGS---");
for (let i = 0; i < ruxandraRo.length; i++) {
  if (typeof ruxandraRo[i] !== "string") continue; //Only log strings

  console.log(ruxandraRo[i], typeof ruxandraRo[i]);
}

console.log("---BREAK WITH NUMBER---");
for (let i = 0; i < ruxandraRo.length; i++) {
  if (typeof ruxandraRo[i] === "number") break; //Only log strings

  console.log(ruxandraRo[i], typeof ruxandraRo[i]);
}

// Looping Backwards(Inapoi) and Loops in Loops

const ruxandraLau = [
  "Ruxandra",
  "Laura",
  2022 - 1986,
  "programmer",
  ["Me", "Myself", "I"],
  true,
];
// Lectia trecuta am inceput 0, 1, 2, 3, 4.
// Acum incepem de la 4, 3, 2, 1, 0=>(Ultimul index)

for (let i = ruxandraLau.length - 1; i >= 0; i--) {
  console.log(i, ruxandraLau[i]);
}

// LOOP in LOOP
for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`----- STARTING EXERCISE -----${exercise}`);

  for (let repeteLop = 1; repeteLop < 6; repeteLop++) {
    console.log(
      `Exercise ${exercise} Lifting weight repetition ${repeteLop} ????????????????`
    );
  }
}

// THE WHILE LOOP

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} ????????????????`);
// } Ii scris ca sa se poata compara cu while loop

let rep1 = 1;
while (rep1 <= 10) {
  console.log(`WHILE: Lifting weights repetition ${rep1} ????????????????`);
  rep1++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);// Apar diferite numere cand dam refresh la pagina

while (dice !== 6) {
  console.log(`You role a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`Loop is about to end`);
} // Cand dice-ul da 6 atunci nu apare nimic pe consola
