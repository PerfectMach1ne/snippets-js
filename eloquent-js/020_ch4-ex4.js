// Deep comparison
// TODO

let whatever1 = -32;
let whatever2 = 31;
let whatever2_ = 31;
let bleh1 = {
  amogus: "sus",
  dungus: [
    'bungus',
    '21'
  ]
}

let bleh2 = {
  amogus: "sooss",
  dungus: [
    'bungus',
    '21'
  ]
}

let bleh3 = {
  amogus: "sus",
  dungus: [
    'bungus',
  ],
  tree: 3
}

let bleh1_ = {
  amogus: "sus",
  dungus: [
    'bungus',
    '21'
  ]
}

// first clunky attempt
function deepComparison(obj1, obj2) {
  // console.log(obj1, obj2);
  if (obj1 === obj2) return true;
  // else console.log("FALSE");

  if (typeof obj1 !== typeof obj2) return false;
  else if (obj1 === obj2 && obj1 === null) return true;
  else if (obj1 === obj2 && obj1 === undefined) return true;
  else if (obj1 === null || obj2 === null) return false;
  else if (typeof obj1 === "object"|| typeof obj2 === "object") {
    if (obj1 !== obj2) return false;
    if (Object.keys(obj1).length != Object.keys(obj2).length) return false;
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    
    let hardFalse = true;
    for (let key of keys1) {
      if (!keys2.includes(key) || !deepComparison(obj1[key], obj2[key])) hardFalse = false;
      if (obj1[key] != obj2[key]) hardFalse = false;
    }
    if (hardFalse) return false;
    // Object.keys(obj2).forEach(prop2 => {
      // if (!props1.includes(prop2) || !deepComparison(obj1[prop2], obj2[prop2])) return false;
    // })
    // let obj1_ = obj1;
    // let obj2_ = obj2;
    // Object.keys(obj1_).forEach(prop1 => {
    //   Object.keys(obj2_).forEach(prop2 => {
    //     if (prop1 == prop2) {
    //       if (obj1_[prop1] != obj2_[prop2]) return false;
    //       delete obj1_[prop1];
    //       delete obj2_[prop2];
    //     } else return false;
    //     // if (!(prop1 == prop2) || !(obj1_[prop1] === obj2[prop2])) isFalse = true;
    //   }); 
    // })
    return true;
  }

  return false;
}

console.log("true" + deepComparison(null, null)); // true
console.log(deepComparison(bleh1, null)); // false
console.log(deepComparison(null, bleh2)); // false
console.log(deepComparison(undefined, null)); // false
console.log(deepComparison(null,undefined)); // false
console.log("true" + deepComparison(undefined,undefined)); // true
console.log(deepComparison(1, "1")); // false
console.log(deepComparison(bleh1, whatever2_)); // false
console.log(deepComparison(whatever1, whatever2)); // false 
console.log("true" + deepComparison(whatever2_, whatever2)); // true
console.log("====================");
console.log("true" + deepComparison(bleh1,bleh1)); // true
console.log("true" + deepComparison(bleh3,bleh3)); //true
console.log("true" + deepComparison(bleh1, bleh1_)); //true
console.log(deepComparison(bleh1, bleh2));// false
console.log(deepComparison(bleh1, bleh3));// false
console.log(deepComparison(bleh2,bleh3));// false
console.log(deepComparison(bleh1_, bleh3)); // false

////////////////////////////////////////////////////////////
// it almost works. the above clunky attempt, that is! I tried really hard to make my
// clunky version work without copying the solution after looking it up (got confused!)
////////////////////////////////////////////////////////////
function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;

  let keysA = Object.keys(a), keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}

console.log("836549273438934`2");
console.log("true" + deepEqual(null, null)); // true
console.log(deepEqual(bleh1, null)); // false
console.log(deepEqual(null, bleh2)); // false
console.log(deepEqual(undefined, null)); // false
console.log(deepEqual(null,undefined)); // false
console.log("true" + deepEqual(undefined,undefined)); // true
console.log(deepEqual(1, "1")); // false
console.log(deepEqual(bleh1, whatever2_)); // false
console.log(deepEqual(whatever1, whatever2)); // false 
console.log("true" + deepEqual(whatever2_, whatever2)); // true
console.log("====================");
console.log("true" + deepEqual(bleh1,bleh1)); // true
console.log("true" + deepEqual(bleh3,bleh3)); //true
console.log("true" + deepEqual(bleh1, bleh1_)); //true
console.log(deepEqual(bleh1, bleh2));// false
console.log(deepEqual(bleh1, bleh3));// false
console.log(deepEqual(bleh2,bleh3));// false
console.log(deepEqual(bleh1_, bleh3)); // false