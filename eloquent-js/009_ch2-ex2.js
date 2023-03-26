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
}