function Fraction(licznik, mianownik) {
  this.licznik = licznik;
  this.mianownik = mianownik;
  
  this.show = function() {
    console.log("licznik: " + licznik);
    console.log("mianownik: " + mianownik);

  }

  this.add = (drugiLicznik, drugiMianownik) => {
  return (this.licznik * drugiMianownik + drugiLicznik * this.mianownik) / (this.mianownik * drugiMianownik);
  }
}

Fraction.prototype.subtract = function(drugiLicznik, drugiMianownik) {
  return (this.licznik * drugiMianownik - drugiLicznik * this.mianownik) / (this.mianownik * drugiMianownik);
}

Fraction.prototype.multiply = function(drugiLicznik, drugiMianownik) {
  return (this.licznik * drugiLicznik) / (this.mianownik * drugiMianownik);
}

Fraction.prototype.divide = function(drugiLicznik, drugiMianownik) {
  return (this.licznik * drugiMianownik) / (this.mianownik * drugiLicznik);
}

let ulamek = new Fraction(1, 3);
ulamek.show();
console.log(ulamek.add(2, 3));      // 1/3 + 2/3 = 1
console.log(ulamek.subtract(3, 4)); // 1/3 - 3/4 = -0.41(6)...
console.log(ulamek.multiply(-6, 7)); // 1/3 * (-6/7) = -0.285714(285714)...
console.log(ulamek.divide(3, -1)); // 1/3 / (3/(-1)) = -0.11(1)...