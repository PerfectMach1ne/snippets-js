// The sum of a range

function range(start, end) {
  let arr = [];

  for (i = start; i < end; i++) {
    arr.push(i);
  }
  arr.push(end);
  
  return arr;
}

console.log(range(4,12));

function sum(array) {
  let sum = 0;

  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
}

console.log(sum([1, 2, 3, 4, 5, 6, 7]))

console.log(sum(range(1, 10)));

function range_v2(start, end, step) {
  let arr = [];
  // console.log(5 + (Math.floor(step) || 1));
  step = Math.floor(step) || 1

  if (step > 0) {
    for (i = start; i < end; i += step) {
      arr.push(i);
    }
    if (step == 1)
      arr.push(end);
  } else if (step < 0) {
    for (i = start; end < i; i += step) {
      arr.push(i);
    }
    if (step == -1)
      arr.push(end);
  }

  return arr;
}

console.log(range_v2(1, 50));
console.log(range_v2(1, 50, 5));
console.log(range_v2(50, 1, -3));
console.log(range_v2(1, 50, 2.71));
console.log(range_v2(50, 1, -1.001));

console.log(range_v2(1, 10, 2));
console.log(range_v2(5, 2, -1));
