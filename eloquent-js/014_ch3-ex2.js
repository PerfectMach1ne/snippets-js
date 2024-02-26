function isEven(n) {
  n = Math.abs(n);
  if (n == 0) {
    return "Even";
  } else if (n == 1) {
    return "Odd";
  } else {
    return isEven(n - 2);
  }
}

console.log(isEven(0));
console.log(isEven(1));
console.log(isEven(-1));
console.log(isEven(57));
console.log(isEven(69 - 1));
console.log(50);
console.log(75);