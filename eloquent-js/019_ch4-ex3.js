// A list
function arrayToList(arr) {
  let list = {
    value: arr[0],
    rest: null
  };

  for (let i = 1; i < arr.length; i++) {
    list = {
      value: arr[i],
      rest: list
    };
  }
  
  return list;
}

arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arrayToList(arr));
list = arrayToList(arr);
console.log(list.rest.rest.rest.rest);

function prepend(element, list) {
  return {
    value: element,
    rest: list
  }
}

console.log(prepend(6,list));
console.log(prepend(57, list));

// function nth(list, position) {
//   // console.log(`${list.value} ${position}`);
//   if (position == 0) {
//     // console.log(list.value);
//     return list.value;
//   } else if (list.value == null) {
//     return undefined;
//   } else {
//     return nth(list.rest, position - 1);
//   }
// }

// console.log(nth(list, 0));
// console.log(nth(list, 2));
// console.log(nth(list, 7));
// "undefined" WHAT. THE. FUCK????
// CO. DO. PIZDY????????????????
// O H I GET IT
// I AM REALLY SILLY
// I DIDN'T RETUR THE nth(list.rest, position - 1) IN THE
// ELSE BLOCK

function nth(list, position) {
  if (!list) return undefined;
  else if (position == 0) return list.value;
  else return nth(list.rest, position - 1);
}

console.log(nth(list, 0));
console.log(nth(list, 2));
console.log(nth(list, 7));
console.log(nth(list, 6));
