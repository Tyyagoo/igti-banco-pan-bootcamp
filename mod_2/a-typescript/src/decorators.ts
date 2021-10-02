function delay(ms: number) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const fn = descriptor.value;

    descriptor.value = function (...args: any[]) {
      setTimeout(() => {
        fn.apply(this, args);
      }, ms);

      return descriptor;
    };
  };
}

class Printer {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  @delay(3000)
  hello() {
    console.log(`Hello, ${this.name}!`);
  }
}

const printer = new Printer("Foo");
printer.hello();
