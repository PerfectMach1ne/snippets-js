console.log(`${3-1} vs ${3-1+1}`);
console.log(`Ch4 ${81-57+1}p\nCh5 ${96-82+1}p\nCh6 ${110-97+1}p`);

let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);
// → 5
console.log(listOfNumbers[0]);
// → 2
console.log(listOfNumbers[2 - 1]);
// → 3

let doh = "Doh";
console.log(typeof doh.toUpperCase);
// → function
console.log(doh.toUpperCase());

let sequence = [5, 7, 4, 9];
sequence.push(1);
sequence.push(57);
console.log(sequence);
console.log(sequence.pop())
console.log(sequence);

let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"]
}

console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = false;
console.log(day1.wolf);

let description = {
  work: "Went to \"work\"",
  "touched grass": "no i read gay manga"
};

let anObject = {left: 1, right: 2};
console.log(anObject.left - anObject.right);
delete anObject.right;
console.log(anObject.right);
// → undefined
console.log("left" in anObject);
// → true
console.log("right" in anObject);
// → false

console.log(Object.keys({x: 0, y: 0, z: 2}))

let objectA = {a: 1, b: 2};
console.log(objectA);
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);

console.log(typeof [] + '\n' + typeof [3,2,1])

let journal_ = [
  {events: ["work", "touched tree", "pizza",
   "running", "television"],
   squirrel: false},
  {events: ["work", "ice cream", "cauliflower",
   "lasagna", "touched tree", "brushed teeth"],
   squirrel: false},
  {events: ["weekend", "cycling", "break", "peanuts",
   "beer"],
   squirrel: true}
]

console.log(journal_);

//////////////////////////
// MUTABILITY
//////////////////////////

let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2);
console.log(object1 == object3);

object1.value = 15;
console.log(object2.value);
console.log(object3.value);

console.log(object1 === object2);

const score = {visitors: 0, home: 0};
// yies
score.visitors = 1;
// NYO!!!!!!!!!!!!!!!
// score = {visitors: 1, home: 1};

let journal = [];

function addEntry(events, squirrel) {
  journal.push({events, squirrel});
}

addEntry(["work", "touched tree", "pizza", "running",
"television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
"touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
"beer"], true);

function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
         Math.sqrt((table[2] + table[3]) *
                   (table[0] + table[1]) *
                   (table[1] + table[3]) *
                   (table[0] + table[2]));
}

console.log(phi([76, 9, 4, 1]));

// https://eloquentjavascript.net/code/journal.js
var JOURNAL = [
  {"events":["carrot","exercise","weekend"],"squirrel":false},
  {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
  {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},
  {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
  {"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"squirrel":false},
  {"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"squirrel":false},
  {"events":["pizza","brushed teeth","computer","work","touched tree"],"squirrel":false},
  {"events":["bread","beer","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["lasagna","nachos","brushed teeth","work"],"squirrel":false},
  {"events":["brushed teeth","weekend","touched tree"],"squirrel":false},
  {"events":["lettuce","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","work"],"squirrel":false},
  {"events":["brushed teeth","computer","work"],"squirrel":false},
  {"events":["lettuce","nachos","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
  {"events":["brushed teeth","work"],"squirrel":false},
  {"events":["cauliflower","reading","weekend"],"squirrel":false},
  {"events":["bread","brushed teeth","weekend"],"squirrel":false},
  {"events":["lasagna","brushed teeth","exercise","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
  {"events":["carrot","ice cream","brushed teeth","television","work"],"squirrel":false},
  {"events":["spaghetti","nachos","work"],"squirrel":false},
  {"events":["cauliflower","ice cream","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["spaghetti","peanuts","computer","weekend"],"squirrel":true},
  {"events":["potatoes","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
  {"events":["potatoes","ice cream","brushed teeth","work"],"squirrel":false},
  {"events":["peanuts","brushed teeth","running","work"],"squirrel":false},
  {"events":["potatoes","exercise","work"],"squirrel":false},
  {"events":["pizza","ice cream","computer","work"],"squirrel":false},
  {"events":["lasagna","ice cream","work"],"squirrel":false},
  {"events":["cauliflower","candy","reading","weekend"],"squirrel":false},
  {"events":["lasagna","nachos","brushed teeth","running","weekend"],"squirrel":false},
  {"events":["potatoes","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","work"],"squirrel":false},
  {"events":["pizza","beer","work","dentist"],"squirrel":false},
  {"events":["lasagna","pudding","cycling","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
  {"events":["spaghetti","pudding","television","weekend"],"squirrel":false},
  {"events":["bread","brushed teeth","exercise","weekend"],"squirrel":false},
  {"events":["lasagna","peanuts","work"],"squirrel":true},
  {"events":["pizza","work"],"squirrel":false},
  {"events":["potatoes","exercise","work"],"squirrel":false},
  {"events":["brushed teeth","exercise","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","television","work"],"squirrel":false},
  {"events":["pizza","cycling","weekend"],"squirrel":false},
  {"events":["carrot","brushed teeth","weekend"],"squirrel":false},
  {"events":["carrot","beer","brushed teeth","work"],"squirrel":false},
  {"events":["pizza","peanuts","candy","work"],"squirrel":true},
  {"events":["carrot","peanuts","brushed teeth","reading","work"],"squirrel":false},
  {"events":["potatoes","peanuts","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","nachos","brushed teeth","exercise","work"],"squirrel":false},
  {"events":["pizza","peanuts","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["lasagna","brushed teeth","cycling","weekend"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","computer","work","touched tree"],"squirrel":false},
  {"events":["lettuce","brushed teeth","television","work"],"squirrel":false},
  {"events":["potatoes","brushed teeth","computer","work"],"squirrel":false},
  {"events":["bread","candy","work"],"squirrel":false},
  {"events":["potatoes","nachos","work"],"squirrel":false},
  {"events":["carrot","pudding","brushed teeth","weekend"],"squirrel":false},
  {"events":["carrot","brushed teeth","exercise","weekend","touched tree"],"squirrel":false},
  {"events":["brussel sprouts","running","work"],"squirrel":false},
  {"events":["brushed teeth","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","running","work"],"squirrel":false},
  {"events":["candy","brushed teeth","work"],"squirrel":false},
  {"events":["brussel sprouts","brushed teeth","computer","work"],"squirrel":false},
  {"events":["bread","brushed teeth","weekend"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","weekend"],"squirrel":false},
  {"events":["spaghetti","candy","television","work","touched tree"],"squirrel":false},
  {"events":["carrot","pudding","brushed teeth","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","ice cream","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","work"],"squirrel":false},
  {"events":["spaghetti","peanuts","exercise","weekend"],"squirrel":true},
  {"events":["bread","beer","computer","weekend","touched tree"],"squirrel":false},
  {"events":["brushed teeth","running","work"],"squirrel":false},
  {"events":["lettuce","peanuts","brushed teeth","work","touched tree"],"squirrel":false},
  {"events":["lasagna","brushed teeth","television","work"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","running","work"],"squirrel":false},
  {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
  {"events":["carrot","reading","weekend"],"squirrel":false},
  {"events":["carrot","peanuts","reading","weekend"],"squirrel":true},
  {"events":["potatoes","brushed teeth","running","work"],"squirrel":false},
  {"events":["lasagna","ice cream","work","touched tree"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","running","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","work"],"squirrel":false},
  {"events":["bread","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","weekend"],"squirrel":false}
];

// This makes sure the data is exported in node.js —
// `require('./path/to/journal.js')` will get you the array.
if (typeof module != "undefined" && module.exports && (typeof window == "undefined" || window.exports != exports))
  module.exports = JOURNAL;
if (typeof global != "undefined" && !global.JOURNAL)
  global.JOURNAL = JOURNAL;

function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i], index = 0;
    // https://www.w3schools.com/Jsref/jsref_includes.asp
    // String method; The includes() method returns true if a string contains a specified string.
    // Arrays have this method too, actually. that's how it's used here.
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

console.log(tableFor("pizza", JOURNAL));
console.log(tableFor("pizza", journal));

// hello april from Cool Cellar Place at 16:31 of the 2nd April of this beautiful godless year 2023rd year

for (let i = 0; i < JOURNAL.length; i++) {
  let entry = JOURNAL[i];
  // console.log(entry);
}

for (let entry of JOURNAL) {
  console.log(`${entry.events.length} events.`);
}

// this ain't the time to code, i'll finish this next week (tomorrow)

// don't mind this one here
for (let i = 0; i < 100; ) {
  console.log(
    (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i
  )
}

let arr = [7, -7, -2, 2];
console.log(arr.sort()); // LMFAO
// ok carry on

function journalEvents(journal) {
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
}

console.log(journalEvents(JOURNAL));

for (let event of journalEvents(JOURNAL)) {
  console.log(event + ":", phi(tableFor(event, JOURNAL)));
}

console.log("         beh        ")

for (let event of journalEvents(JOURNAL)) {
  let correlation = phi(tableFor(event, JOURNAL));
  if (correlation > 0.1 || correlation < -0.1) {
    console.log(event + ":", correlation);
  }
}

for (let entry of JOURNAL) {
  if (entry.events.includes("peanuts") &&
     !entry.events.includes("brushed teeth")) {
    entry.events.push("peanut teeth");
  }
}

console.log(phi(tableFor("peanut teeth", JOURNAL)))

// more on arrays

let todoList = [];

// add task to the end of the queue
function remember(task) {
  todoList.push(task);
}

// get and remove front item task from the queue
function getTask() {
  return todoList.shift();
}

// Add task to the front of the queue
function rememberUrgently(task) {
  todoList.unshift(task);
}

console.log(todoList);
remember("groceries");
console.log(todoList);
whattodowhattodo = getTask();
console.log(whattodowhattodo);
console.log(todoList);

console.log([1, 2, 3, 2, 1].indexOf(2)); // -> 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2)); // -> 3

console.log([0, 1, 2, 3, 4].slice(2, 4));
console.log([0, 1, 2, 3, 4].slice(2));

function remove(array, index) {
  return array.slice(0, index)
    .concat(array.slice(index + 1));
}

// If you pass concat an argument that is not an array,
// that value will be added to the new array as if it 
// were a one-element array.

console.log(remove(["a", "b", "c", "d", "e"], 2));

let kim = "Kim";
kim.age = 89;
console.log(kim.age); // -> undefined

console.log("coconuts".slice(4, 7));
// → nut
console.log("coconut".indexOf("u"));
// → 5

console.log("coconut".indexOf("co"));
console.log("coconut".lastIndexOf("co"));
// 0 and 2

console.log("one two three".indexOf("ee"));
// → 11

console.log("    okay \n ");
console.log("    okay \n ".trim());
// → okay

console.log(String(6))
console.log(String(6).padStart(3, "0"));
console.log(String(777).padStart(2, "0"));

let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
console.log(words.join(". "));

console.log("LA".repeat(4));
console.log("LA".repeat(5));
console.log("LA".repeat(9));

let string = "abc";

console.log(string.length);
console.log(string[1]);

///////////////////////////////
// REST PARAMETERS (Rest parameters, not REST parameters)
///////////////////////////////

function max(...numbers) {
  let result = -Infinity;
  
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}

console.log(max(4, 1, 9, -2, 5749));

let numbers = [5, 7, 4, 9, 8008];
console.log(max(numbers));
console.log(max(...numbers));
console.log(max(2 ,...numbers, 22222));

let wordz = ["sapphic", "lesbian"];
console.log(["gay", ...wordz, "gayass", "homo"]);

//////// THE MATH OBJECT //////////

function randomPointOnCircle(radius) {
  let angle = Math.random() * 2 * Math.PI;
  return {x: radius * Math.cos(angle),
          y: radius * Math.sin(angle)};
}

console.log(randomPointOnCircle(2));
console.log(Math.random())
// -> x in [0, 1)

console.log(Math.floor(Math.random() * 10));

// DESTRUCTURING (NOT DESTRUCTING OR DESTRUCTION)

// ugly
function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}

// pretty
function phi([n00, n01, n10, n11]) {
  return (n11 * n00 - n10 * n01) /
    Math.sqrt((n10 + n11) * (n00 + n01) *
              (n01 + n11) * (n00 + n10));
}

let {name} = {name: "Faraji", age: 23};
let {age} = {name: "Faraji", age: 23};
console.log(name, age);

// destructure null or undefined === Node error Any%

////// JSON AND DATA SERIALIZATION ////////
// JavaScript Object Notation
//
// All property names have to be surrounded wiht double quotes
// Only simple data expressions allowed (nothing involving calls or computations)
// No comments
the = {
  "squirrel": false,
  "events": ["work", "touched tree", "pizza", "running"]
}

let stringg = JSON.stringify({squirrel: false,
                              events: ["weekend"]});
console.log(stringg);
console.log(JSON.parse(stringg).events);
console.log(JSON.stringify(the));
