// Aula 7.1. Let, const, desestruturação, spread e template strings

let arr = [0, 2, 3, 4, 5, 6, 7, 8, 9];
let course = {
  name: "Bootcamp IGTI",
  sponsor: "Banco Pan",
  modules: 4,
};

let [first, second, third, ...others] = arr;
console.log(first, second);
console.log(others);

const printCourse = ({ name, sponsor, modules }) =>
  console.log(`${name} - ${sponsor} have ${modules} modules!`);

printCourse(course);

let arr2 = [...arr, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

console.log(arr);
console.log(arr2);

let course2 = {
  ...course,
  modules: 3,
  description: "wow",
};

console.log(course);
console.log(course2);

let clone = {
  ...course2,
};

console.log(clone == course2); // false
console.log(clone === course2); // false

console.log(clone);
