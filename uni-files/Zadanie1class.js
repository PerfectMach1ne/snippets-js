class Fraction {
  constructor(licznik, mianownik) {
    this.licznik = licznik;
    this.mianownik = mianownik;
  }

  show() {
    console.log( this );
  }

  add(drugiLicznik, drugiMianownik) {
    return (this.licznik * drugiMianownik + drugiLicznik * this.mianownik) / (this.mianownik * drugiMianownik);
  }

  subtract(drugiLicznik, drugiMianownik) {
    return (this.licznik * drugiMianownik - drugiLicznik * this.mianownik) / (this.mianownik * drugiMianownik);
  }

  multiply(drugiLicznik, drugiMianownik) {
    return (this.licznik * drugiLicznik) / (this.mianownik * drugiMianownik);
  }

  divide(drugiLicznik, drugiMianownik) {
    return (this.licznik * drugiMianownik) / (this.mianownik * drugiLicznik);
  }
}

const ulamek = new Fraction(9, 10);
ulamek.show();
console.log(ulamek.add(3, 4));      // 9/10 + 3/4 = 1.65
console.log(ulamek.subtract(1, 5)); // 9/10 - 1/5 = 0.7
console.log(ulamek.multiply(7, 6)); // 9/10 * 7/6 = 1.05
console.log(ulamek.divide(4, 3)); // 9/10/(4/3) = 0.675