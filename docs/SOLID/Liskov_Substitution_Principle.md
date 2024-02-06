# Liskov Substitution Principle

- Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program.
- In other words, if S is a subtype of T, then objects of type T may be replaced with objects of type S without altering any of the desirable properties of the program.
- The Liskov Substitution Principle (LSP) is a particular definition of a subtyping relation, called (strong) behavioral subtyping.
- LSP is a semantic rather than merely syntactic relation because it intends to guarantee semantic interoperability of types in a hierarchy, object types in particular.

```javascript
// Liskov Substitution Principle
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

// when we add a new shape, we don't need to modify the Rectangle class
// but the Square class violates the Liskov Substitution Principle
// because the Square class does not behave as the Rectangle class
// the Square class should not inherit from the Rectangle class
// the Square class should inherit from the Shape class
class Square extends Rectangle {
  constructor(length) {
    super(length, length);
  }

  setWidth(width) {
    this.width = width;
    this.height = width;
  }

  setHeight(height) {
    this.width = height;
    this.height = height;
  }
}

const useIt = (rectangle) => {
  const width = rectangle.width;
  rectangle.setHeight(10);
  // area is 100, not 200, because the Square class violates the Liskov Substitution Principle
  console.log(`Expected area of ${10 * width}, got ${rectangle.area()}`);
};

const rectangle = new Rectangle(2, 3);

// Expected area of 20, got 20
useIt(rectangle);

const square = new Square(5);

// Expected area of 50, got 100, because the Square class violates the Liskov Substitution Principle
useIt(square);
```
