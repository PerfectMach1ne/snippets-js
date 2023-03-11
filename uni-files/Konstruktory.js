const PI = 3.14159;

function Shape() {}
Shape.prototype.area = function() { return null };
Shape.prototype.perimeter = function() { return null };

function Circle(radius) {
    Shape.call(this);
    this.radius = radius;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.area = function(radius) {
    return PI*Math.pow(this.radius,2);
}
Circle.prototype.perimeter = function(radius) {
    return 2*PI*this.radius;
}

function Rectangle(a,b) {
    Shape.call(this);
    this.a = a;
    this.b = b;
}
Rectangle.prototype.area = function(a,b) {
    return this.a*this.b;
}
Rectangle.prototype.perimeter = function(a,b) {
    return 2*this.a + 2*this.b;
}

function Triangle(a,h) {
    Shape.call(this);
    this.a = a;
    this.h = h;
}

Triangle.prototype.area = function(a,h) {
    return 0.5*this.a*this.h;
}

Triangle.prototype.perimeter = function(a) {
    return 3*this.a;
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