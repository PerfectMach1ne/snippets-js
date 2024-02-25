var test1 = ""

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) { // Divisible by 3 and 5 (FizzBuzz)
    console.log("FizzBuzz");
  } else if (i % 3 == 0 && i % 5 != 0) { // Divisible by 3 only (Fizz)
    console.log("Fizz");
  } else if (i % 3 != 0 && i % 5 == 0) { // Divisible by 5 only (Buzz)
    console.log("Buzz");
  } else {
    console.log(i);
  }
  test1 += String(i);
}

var test2 = ""

for (let i = 1; i <= 100; i++) {
  console.log(i % 3 != 0 && i % 5 != 0 ? i : (
    i % 3 == 0 && i % 5 == 0 ? "FizzBuzz" : (
      i % 3 == 0 && i % 5 != 0 ? "Fizz" : "Buzz"
    )
  ))
  test2 += String(i)
}

var test3 = ""

for (let i = 1; i <= 100; i++) {
  console.log(i % 3 != 0 && i % 5 != 0 ? i : (
    i % 3 == 0 ? (i % 5 == 0 ? "FizzBuzz" : "Fizz") : "Buzz"))
  test3 += String(i)
}

console.assert(test1 == test2)
console.assert(test1 == test3)