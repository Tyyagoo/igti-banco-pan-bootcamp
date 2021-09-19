var faker = require("faker");
faker.locale = "pt_PT";

const fakePeople = new Array(100)
  .fill(null)
  .map((val, ind, _) => faker.helpers.createCard());

const printAllNames = (arr) =>
  arr.forEach((val, ind, _) => {
    console.log(`${ind} -> ${val.name}`);
  });

const getAllNames = (arr) => arr.map((val, ind, _) => val.name);

const getAllPersonsThatNameStartsWith = (arr, letter) =>
  arr.filter((val, ind, _) => val.name[0] === letter);

/*
printAllNames(fakePeople);
let names = getAllNames(fakePeople);
console.log(names);
*/

let personsWithT = getAllPersonsThatNameStartsWith(fakePeople, "T");
let namesWithT = getAllNames(personsWithT);

// console.log(personsWithT);
// console.log(namesWithT);

let personsWithM = getAllPersonsThatNameStartsWith(fakePeople, "M");
let namesWithM = getAllNames(personsWithM);

// console.log(personsWithM);
// console.log(namesWithM);

let names = getAllNames(fakePeople);
names.sort((a, b) => (a === b ? 0 : a > b ? 1 : -1));

console.log(names);
// tem q arrumar a comparação lexicográfica. ex: É -> E, Â -> A
