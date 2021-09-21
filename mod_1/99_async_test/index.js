async function test1() {
  let p1 = Promise.resolve(5);
  let p2 = Promise.resolve(7);
  let v1 = await p1;
  let v2 = await p2;
  console.log(`Test 1: ${v1 + v2}`);
}

async function test2() {
  let p1 = Promise.resolve(5);
  let p2 = Promise.resolve(7);
  let [v1, v2] = Promise.all([p1, p2]);
  console.log(`Test 2: ${v1 + v2}`);
}

async function test3() {
  let p1 = Promise.resolve(5);
  let p2 = Promise.resolve(7);
  var v98, v99;
  p1.then((r) => (v98 = r));
  p2.then((r) => (v99 = r));
  console.log(`Test 3: ${v98 + v99}`);
}

async function test4() {
  let p1 = Promise.resolve(5);
  let p2 = Promise.resolve(7);
  p1.then((r1) => {
    p2.then((r2) => {
      console.log(`Test 4: ${r1 + r2}`);
    });
  });
}

test1();
test2();
test3();
test4();
