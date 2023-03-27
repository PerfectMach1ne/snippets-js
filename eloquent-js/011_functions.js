const square = function(x) {
  return x * x;
}

console.log(square(12));

const makeNoise = function() {
  console.log("Boioioiong!!!");
};

makeNoise();

const power = function(base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
  // return
  // this above makes the function return undefined
}

console.log(power(2, 10));

let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z); // -> 60
}
// y is not visible there
console.log(x + z); // -> 40

const halve = function(n) {
  return n / 2;
};

let n = 10;
console.log(halve(100)); // -> 50
console.log(n); // -> 10

const hummus = function(factor) {
  const ingredient = function(amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };

  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
}

hummus(0.57);
console.log("=============");
hummus(1.57);

// me when i see minecraft skeletons (worst mob ever, they're so annoying dude)
/*
let launchMissiles = function() {
  missileSystem.launch("now");
};
  if (safeMode) {
  launchMissiles = function() {}; 
} 
*/

// Function declaration
function squor(ecx) {
  return ecx * ecx;
}

console.log(squor(2));

// Function declarations are not part of the regular top-to-bottom
// flow of control.
// They are conceptually moved to the top of their scope and can
// be used by all the code in that scope. 
console.log("The future (and the #epic truth) says:", future());

function future() {
  return "You'll never have self-driving cars (and Elon Musk is a hazard to society)";
}

///////////////////////////////////
// ARROW FUNCTIONS
///////////////////////////////////
const powerR = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}

console.log(powerR(7,5));
console.log(powerR(0.57,69));

const square1 = (x) => { return x * x; };
const square2 = x => x * x;
console.log(square1(3));
console.log(square2(4));
const toot = () => {
  console.log("toot");
};

toot();
toot();
toot();
toot();
toot();
toot();
toot();
toot();
toot();
toot();
// toot