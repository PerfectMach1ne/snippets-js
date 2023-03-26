var size = 57;
string = "";
for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if (i % 2 == 0) {
      if (j % 2 == 0) {
        string += ' ';
      } else {
        string += '#';
      }
    } else {
      if (j % 2 == 0) {
        string += '#';
      } else {
        string += ' ';
      }
    }
  }
  console.log(string);
  string = "";
}