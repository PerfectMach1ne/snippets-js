//////////////////////
// THE CALL STACK
//////////////////////
// ok i get it it's not that hard
function square(x) { return x * x; }
console.log(square(4, true, "hedgehog"));
// *medic TF2 voice* fascinating
function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}
console.log(minus(57));
console.log(minus(5,7));

function power(base, exponent = 2) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}

console.log(power(4));
console.log(power(4,3));
console.log(power(2,6));
console.log("C", "O", 2);

function beh() {
  let beh = "bread"
  {
    var bread = "123"
  }
  console.log(beh + bread);
}

beh()

////////////////////////////
// CLOSURE
////////////////////////////
function wrapValue(n) {
  let local = n;
  return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());
/* This situation is a good demonstration of the fact that local
   bindings are created anew for every call, and different calls can’t trample on
   one another’s local bindings. */
/* This feature—being able to reference a specific instance of a local binding in
   an enclosing scope—is called closure. */
/* A function that references bindings from
   local scopes around it is called a closure. */
function multiplier(factor) {
  return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));
let gayandfunny = multiplier(57);
console.log(gayandfunny(1.5));
/* Thinking about programs like this takes some practice. A good mental model
   is to think of function values as containing both the code in their body and the
   environment in which they are created. When called, the function body sees
   the environment in which it was created, not the environment in which it is
   called. */

////////////////////////////
// RECURSION
////////////////////////////
function rpower(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(rpower(2,3));

function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      // console.log(typeof(
      //   find(current + 5, `(${history} + 5)`) ||
      //   find(current * 3, `(${history} * 3)`)
      // ))
      return find(current + 5, `(${history} + 5)`) ||
             find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, "1");
}

console.log(findSolution(24));
// First checks 1 == 24 -> false
// then checks 1 > 24 -> false
// Then i guess it calls find twice?
// Like, it processes "two branches"
// So, in the first call current becomes 1+5=6 and history becomes (1 + 5)
// Then find continues to comparison until it finds 24
// OR until the second check plops out "true" which is a sign it's pointless to keep searching!
// And so I thing I figured out how this thing works 
console.log(1 == "1");
console.log(findSolution(57));
console.log(findSolution(15)); // confirmed impossible case
console.log(findSolution(100)); // null, AKA impossible
console.log(findSolution(999));
console.log(findSolution(777));

//////////////////////////////

function printFarmInventory(cows, chickens) {
  let cowString = String(cows);
  while (cowString.length < 3) {
    cowString = '0' + cowString;
  }
  console.log(`${cowString} Cows`);

  let chickenString = String(chickens);
  while (chickenString.length < 3) {
    chickenString = "0" + chickenString;
  }
  console.log(`${chickenString} Chickens`);
}
printFarmInventory(7, 11);

function printZeroPaddedWithLabel(number, label) {
  let numberString = String(number);
  while (numberString.length < 3) {
    numberString = "0" + numberString;
  }
  console.log(`${numberString} ${label}`);
}
function printFarmInventory(cows, chickens, pigs) {
  printZeroPaddedWithLabel(cows, "Cows");
  printZeroPaddedWithLabel(chickens, "Chickens");
  printZeroPaddedWithLabel(pigs, "Pigs");
}
printFarmInventory(7, 11, 333);

function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = "0" + string;
  }
  return string;
}
function printFarmInventory(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}
printFarmInventory(5, 16, 3);

// Define f to hold a function value
const f = function(a) {
  console.log(a + 2);
}

// Declare g to be a function
function g(a, b) {
  return a * b * 3.5;
}

// A less verbose function value
let h = a => a % 3;

f(5);
console.log(g(3,2.5));
console.log(h(7));