## TypeScript

### What is TypeScript?

- TypeScript is a superset of JavaScript which primarily provides optional static typing, classes and interfaces.
- TypeScript is pure object oriented with classes, interfaces and statically typed like C# or Java.
- TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.

### Union Types

- Union types are useful for modeling situations when values can overlap in the types they can take on.
- A union type describes a value that can be one of several types. We use the vertical bar (|) to separate each type, so number | string | boolean is the type of a value that can be a number, a string, or a boolean.

```typescript
// Union Types
let someId: number | string;
someId = 123;
someId = "abc";

// Union Types and Type Aliases
type StringOrNumber = string | number;
let anotherId: StringOrNumber;
anotherId = 123;
anotherId = "abc";
```

### Type Guards

- A type guard is some expression that performs a runtime check that guarantees the type in some scope.
- To define a type guard, we simply need to define a function whose return type is a type predicate.

```typescript
// Type Guards
type StringOrNumber = string | number;

function logId(id: StringOrNumber) {
  // Type Guard
  if (typeof id === "string") {
    console.log(`A string was passed in: ${id.toUpperCase()}`);
  } else {
    console.log(`A number was passed in: ${id.toFixed()}`);
  }
}
```

### Type Aliases

- Type aliases create a new name for a type. Type aliases are sometimes similar to interfaces, but can name primitives, unions, tuples, and any other types that you’d otherwise have to write by hand.

```typescript
// Type Aliases
type Point = {
  x: number;
  y: number;
};

// Type Aliases and Interfaces
function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

// logs "12, 26"
const point = { x: 12, y: 26 };

logPoint(point);
```

### Tagged Interfaces

- Tagged unions are a useful pattern for modeling data that could come from a number of different places, but isn’t always guaranteed to have a consistent shape.
- A tagged interface is an interface that has a property which is a literal type that unions all possible types that the interface can take on.

```typescript
// Tagged Interfaces
interface User {
  id: number;
  username: string;
}

interface User {
  role: "ADMIN" | "USER";
}

function logUser(user: User) {
  console.log(`Received a user with id: ${user.id}`);
}

// Tagged Interfaces and Type Aliases
type User = {
  id: number;
  username: string;
};

type User = {
  role: "ADMIN" | "USER";
};

function logUser(user: User) {
  console.log(`Received a user with id: ${user.id}`);
}
```