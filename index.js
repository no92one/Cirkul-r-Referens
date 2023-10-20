import fs from "fs";
import Person from "./person.js";
import Pet from "./pet.js";

let uniqueId = 0;

const aPerson = new Person(uniqueId++, "Linus", "Lindroth");

const aPet1 = new Pet(uniqueId++, "Milo", aPerson.id);
const aPet2 = new Pet(uniqueId++, "Blixten", aPerson.id);
const aPet3 = new Pet(uniqueId++, "Fido", aPerson.id);
const petList = [aPet1, aPet2, aPet3]

aPerson.listOfPets.push(aPet1.id)
aPerson.listOfPets.push(aPet2.id)
aPerson.listOfPets.push(aPet3.id)

fs.writeFileSync("persons.json", JSON.stringify(aPerson, null, 2))
fs.writeFileSync("pets.json", JSON.stringify(petList, null, 2))

console.log(petList[aPerson.listOfPets[0]]);

// const a = {};
// const b = { a };
// a.b = b;

// console.log(a);
// console.log(b);

// // Detta kommer att kasta ett fel!
// const serializedData = JSON.stringify(a);

// let uniqueId = 0;

// const a = { id: uniqueId++ };
// const b = { id: uniqueId++, aId: a.id };

// a.bId = b.id;

// const map = [a, b]

// console.log(map);

// fs.writeFileSync("test.json", JSON.stringify(map, null, 2));