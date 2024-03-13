// at last.................
// 10/03/2024

// <3
let total = 0, count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total);

function range(n, m) {
  let range = [];
  for (let i = n; i <= m; i++) {
    range.push(i);
  }
  return range;
}

// for..in iterates over property names (so it'd just sum the array indexes!),
// while for..of iterates over the property values!!!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
function sum(arr) {
  let sum = 0;
  for (const i of arr) {
    sum += i;
  }
  return sum;
}
// console.log(range(1,10));
// console.log(sum([1,2,3,4,5,6,7,8,9,10]));
console.log(sum(range(1, 10)));

/////////////////////////////////////////////////
// ABSTRACTING REPETITION
/////////////////////////////////////////////////

for (let i = 0; i < 10; i++) {
  console.log(i);
}

function repeatLog(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

console.log("---------------");
repeatLog(3);
console.log("---------------");

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(5, console.log);

console.log("---------------");
let labels = [];
repeat(7, i => {
  labels.push(`Unit ${i + 1}`);
});
console.log(labels);

/////////////////////////////////////////////////
// HIGHER-ORDER FUNCTIONS
/////////////////////////////////////////////////

function greaterThan(n) {
  return m => m > n;
}

console.log("---------------");

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

console.log("---------------");
function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
  }
}
noisy(Math.min)(3,2,1);

console.log("---------------");

function unless(test, then) {
  if (!test) then();
}

repeat(3, n => {
  unless(n % 2 == 1, () => {
    console.log(n, "is even");
  });
});

console.log("---------------");

["A", "B"].forEach(l => console.log(l));

/////////////////////////////////////////////////
// SCRIPT DATA SET
/////////////////////////////////////////////////

// https://eloquentjavascript.net/code/scripts.js
// import './scripts.js'; // for .mjs extension
require('./scripts.js') // for .cjs extension

console.log(SCRIPTS.length);
console.log(SCRIPTS[3]);

/////////////////////////////////////////////////
// FILTERING ARRAYS
/////////////////////////////////////////////////

// "the function is pure, it does not modify the array it reads"
// ..quoting the book. Eloquent JS writer is a functional bro confirmed?
function filter(array, test) {
  let passed = [];
  for (let element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}

// only commented out bc it prints out a lot of junk!
// console.log(filter(SCRIPTS, script => script.living));

console.log(SCRIPTS.filter(s => s.direction == "ttb"));
