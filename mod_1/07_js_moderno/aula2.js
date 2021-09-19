function Normal(label) {
  this.label = label;
  this.print = function () {
    console.log(`This of label: ${this.label}`);
    console.log(this);
  };
}

function Arrow(label) {
  this.label = label;
  this.print = () => {
    console.log(`This of label: ${this.label}`);
    console.log(this);
  };
}

let n = new Normal("Normal");
let a = new Arrow("Arrow");

// n.print();
// a.print();

let unwrap_n = n.print;
let unwrap_a = a.print;

unwrap_n(); // this -> global
unwrap_a(); // this -> Arrow

function SomeObject(n, a) {
  this.label = "SomeObject";
  this.unwrap_n = n.print;
  this.unwrap_a = a.print;
}

let someObj = new SomeObject(n, a);
console.log(someObj);
someObj.unwrap_n(); // this -> SomeObject
someObj.unwrap_a(); // this -> Arrow
