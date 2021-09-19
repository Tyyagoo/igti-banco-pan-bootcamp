let first = () => {
  function Rectangle(width, height) {
    this.width = width;
    this.height = height;
  }

  const makeRectangle = (width, height) => ({
    width: width,
    heigh: height,
  });

  let rec = new Rectangle(10, 15);
  let maybeRec = makeRectangle(10, 15);

  console.log(rec);
  console.log(rec instanceof Rectangle);

  console.log(maybeRec);
  console.log(maybeRec instanceof Rectangle);

  console.log(rec == maybeRec);
  console.log(rec === maybeRec);

  console.log("==========================");

  let rec2 = new Rectangle(10, 15);
  console.log(rec2 == rec); // false
  console.log(rec2 === rec); // false
  rec2.area = 150;
  console.log(rec2 == rec); // false
  console.log(rec2 === rec); // false
  console.log(rec2 instanceof Rectangle); // true -> QUE PERIGO
};

let second = () => {
  function Rectangle(width, height) {
    this.width = width;
    this.height = height;
  }
  Rectangle.prototype.area = function () {
    return this.width * this.height;
  };

  function Square(size) {
    this.width = size;
    this.height = size;
  }
  Square.prototype = Rectangle.prototype;

  let rec = new Rectangle(15, 20);
  let sqr = new Square(5);

  console.log(rec);
  console.log(sqr);

  console.log(rec.area());
  console.log(sqr.area());

  console.log(rec.area === sqr.area); // true
  console.log(rec instanceof Rectangle); // true
  console.log(rec instanceof Square); // this must be false

  console.log(sqr instanceof Rectangle); // true
  console.log(sqr instanceof Square); // true
};

let third = () => {
  class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }

    getArea() {
      return this.width * this.height;
    }

    double() {
      return new Rectangle(this.width * 2, this.height * 2);
    }
  }

  class Square extends Rectangle {
    constructor(size) {
      super(size, size);
    }
  }

  let rec = new Rectangle(5, 20);
  console.log(rec);
  console.log(rec.getArea());
  let rec2 = rec.double();
  console.log(rec2);
  console.log(rec2.getArea());

  console.log("=============");
  let sqr = new Square(10);
  let sqr2 = sqr.double();

  console.log(sqr);
  console.log(sqr2);

  console.log(rec instanceof Rectangle); // true
  console.log(rec instanceof Square); // false

  console.log(sqr instanceof Rectangle); // true
  console.log(sqr instanceof Square); // true
};

// first();
// second();
// third();
