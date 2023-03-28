function countBs(string) {
  bcount = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == 'B') {
      bcount++;
    }
  }
  return bcount;
}

console.log(countBs("b105BbBzzb")); // should print 2 and ESPECIALLY NOT 5

function countChar(string, char) {
  charcount = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == char) {
      charcount++;
    }
  }
  return charcount;
}

console.log(countChar("####523yrfdiovib##,   3@#", '#')) // -> 7
console.log(countChar("b105BbBzzb", 'b')); // should print 3 and ESPECIALLY NOT 5 OR 2

function countBs_v2(string) {
  return countChar(string, 'B');
}

console.log(countBs_v2("b105BbBzzb")); // should print 2 and ESPECIALLY NOT 5
