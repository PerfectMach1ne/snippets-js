// Reversing an array
function reverseArray(arr) {
  let newArr = []
  
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }

  return newArr;
}

function reverseArrayInPlace(arr) {
  arrLen = arr.length % 2 == 0 ? arr.length / 2 : Math.floor(arr.length / 2);
  // Math.floor(arr.length / 2) could also be just arr.length / 2 - 0.5 because 
  // math moment but I guess it could be also faster

  for (let i = 0; i < arrLen; i++) {
    var wasLast = arr[arr.length - i - 1];
    var toBeLast = arr[i];
    arr[i] = wasLast;
    arr[arr.length - i - 1] = toBeLast;
    // console.log(arr);
    // let toSwap = arr[i];
    // arr[i] = arr[arrLen - i - 1];
    // arr[arrLen - i - 1] = toSwap;
    // console.log(`${arr[i]} ${arr[arrLen - i - 1]}`);
  }

  return arr;
}

let testArr = [1, 2, 3, 4, 5, 6, 7];
console.log(testArr);
console.log(reverseArray(testArr));
console.log(testArr);
console.log(reverseArrayInPlace(testArr));
console.log(testArr);
