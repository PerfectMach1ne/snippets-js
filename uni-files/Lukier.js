const PI = 3.14159;

class Shape {
    // constructor() {}
    area() {
        return null;
    }
    perimeter() {
        return null;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return PI*Math.pow(this.radius, 2);
    }
    perimeter() {
        return 2*PI*this.radius;
    }
}

class Rectangle extends Shape {
    constructor(a,b) {
        super();
        this.a = a;
        this.b = b;
    }
    area() {
        return this.a*this.b;
    }
    perimeter() {
        return 2*this.a + 2*this.b;
    }
}

// Trojkat rownoboczny by nie komplikowac
class Triangle extends Shape {
    constructor(a,h) {
        super();
        this.a = a;
        this.h = h;
    }
    area() {
        return 0.5*this.a*this.h;
    }
    perimeter() {
        return 3*this.a;
    }
}

var shape = new Shape();
console.log(shape.area());
console.log(shape.perimeter());
let circle = new Circle(2.5);
console.log(circle.area());
console.log(circle.perimeter());
let rectangle = new Rectangle(4,5);
console.log(rectangle.area());
console.log(rectangle.perimeter());
let triangle = new Triangle(3,4);
console.log(triangle.area());
console.log(triangle.perimeter());