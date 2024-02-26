function min(x, y) {
  return x <= y ? x : y;
}

console.log(min(3,4));
console.log(min(5,4));
console.log(min(7,7));

const $min = (x, y) => x <= y ? x : y;

console.log($min(3,4));
console.log($min(5,4));
console.log($min(7,7));