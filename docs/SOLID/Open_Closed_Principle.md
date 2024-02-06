# Open/Close Principle

- Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.
- In other words, you should be able to add new functionality to an object or method without altering it.

```javascript
// Open/Close Principle
class Shape {
  draw() {
    throw new Error("draw method is not implemented");
  }
}

class Circle extends Shape {
  constructor(radius) {
    // call the super class constructor and pass in the name parameter
    super();
    this.radius = radius;
  }

  draw() {
    console.log("draw circle");
  }
}

// when we add a new shape, we don't need to modify the Shape class
class Square extends Shape {
  constructor(length) {
    // call the super class constructor and pass in the name parameter
    super();
    this.length = length;
  }

  draw() {
    console.log("draw square");
  }
}
```

- in the above example, the Shape class is closed for modification, we can add a new shape, such as Square, without modifying the Shape class

- the Shape class is open for extension, we can add a new shape, such as Square, by extending the Shape class
