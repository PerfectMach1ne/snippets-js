let ten = 10;
console.log(ten * ten);
let one = 1, two = 2;
console.log(one + two);
let nothing;
console.log(nothing); // -> undefined
// let, var, const
var hername = "Ayin"
// "greeting" lol
const greeting = "I LOVE"
console.log(greeting + ' ' + hername); // silly VS screams that "name" is "deprecated". yeah, my variable name sure is "deprecated" lol
var $_324234stillalegalname342324$$$__ = "wee woo";
console.log($_324234stillalegalname342324$$$__);

console.log(Math.max(-69,57));
console.log(Math.min(0, 2, 4) + 100);
console.log("lolol" + (Math.min(-5, 0, 5) + 62));
console.log("lolol" + Math.min(-5, 0, 5) + 62);
let theNumber = 3;
// of course this doesn't work as a raw file ran by node.js
// To see it in action, open 004_prompt.html in the browser which is basically just this code
// wrapped in a <script></script> tag, and open console in the browser devtools and it'll work just fine
// theNumber = Number(prompt("Pick a number"));
console.log("yer numberr be the squarrrr root of " + theNumber * theNumber); // horrendous pirate impression

// Number() converts a value to a number, since prompt() return value is a string:
// function prompt(message?: string, _default?: string): string
// we also got
var stringy = "true"
var bolek = false
bolek = Boolean("true")
stringy = String(false)
console.log(typeof stringy + " " + typeof(bolek))

if (9 + 10 != 21) console.log("My math is horribly incorrect~! uwu");

let number = 0;
while (number < 21) {
  console.log(number);
  number = number + 2;
}

// this calculates the 10th power of 2
let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);

if (false != true) {
  console.log("that makes sense yea");
  if (1 < 2) {
    console.log("ooo aaa eee e oooo uuuu")
  }
}

for (let number = 0; number <= 12; number = number + 0.5) {
  console.log(number);
}

result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
  result = result * 2;
}
console.log(result)

for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}

result = 0;
for (let counter = 0; counter < 10; counter += 1) {
  if (counter == 5 || counter == 2) continue;
  result = result + 1;
}
console.log(result); // 8 because adding 1 is skippsed when counter is 5 or 2

const defined = undefined;
