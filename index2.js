import Person from "./person.js";
import fs from "fs";

const person = new Person("Linus", "Lindroth");

console.log(person.getFullName());

fs.writeFileSync("./persons2.json", JSON.stringify(person, null, 2))

const jsonString = fs.readFileSync("persons2.json");
const data = JSON.parse(jsonString);
const fetchedPerson = new Person(data.firstName, data.lastName)



