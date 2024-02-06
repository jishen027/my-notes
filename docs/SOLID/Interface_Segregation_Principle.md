# Interface Segregation Principle

- Clients should not be forced to depend upon interfaces that they do not use.
- The interface-segregation principle (ISP) states that no client should be forced to depend on methods it does not use.

```javascript
// Interface Segregation Principle
// 
class Printer {
  constructor() {
    if (this.constructor.name === "Printer") {
      throw new Error("Printer is abstract!");
    }
  }

  print() {
    throw new Error("print method is not implemented");
  }
}

class Scanner {
  constructor() {
    if (this.constructor.name === "Scanner") {
      throw new Error("Scanner is abstract!");
    }
  }

  scan() {
    throw new Error("scan method is not implemented");
  }
}

class Fax {
  constructor() {
    if (this.constructor.name === "Fax") {
      throw new Error("Fax is abstract!");
    }
  }

  fax() {
    throw new Error("fax method is not implemented");
  }
}

class MultiFunctionPrinter extends Printer, Scanner, Fax {
  print() {
    console.log("print");
  }

  scan() {
    console.log("scan");
  }

  fax() {
    console.log("fax");
  }
}

class OldFashionedPrinter extends Printer {
  print() {
    console.log("print");
  }
}

```

- in the above example, the Printer class is closed for modification, we can add a new printer, such as OldFashionedPrinter, without modifying the Printer class

- the Printer class is open for extension, we can add a new printer, such as OldFashionedPrinter, by extending the Printer class

- the Printer class is closed for modification, we can add a new printer, such as OldFashionedPrinter, without modifying the Printer class

```javascript
// functional programming - Interface Segregation Principle

const printer = () => {
  const print = () => {
    console.log("print");
  };

  return { print };
};

const scanner = () => {
  const scan = () => {
    console.log("scan");
  };

  return { scan };
};

const fax = () => {
  const fax = () => {
    console.log("fax");
  };

  return { fax };
};

const multiFunctionPrinter = () => {
  const print = () => {
    console.log("print");
  };

  const scan = () => {
    console.log("scan");
  };

  const fax = () => {
    console.log("fax");
  };

  return { print, scan, fax };
};

const oldFashionedPrinter = () => {
  const print = () => {
    console.log("print");
  };

  return { print };
};
```

- in the above example, the printer function is closed for modification, we can add a new printer, such as oldFashionedPrinter, without modifying the printer function

```javascript
// functional programming - Interface Segregation Principle

const printer = () => {
  const print = () => {
    console.log("print");
  };

  return { print };
};

const scanner = () => {
  const scan = () => {
    console.log("scan");
  };

  return { scan };
};

const fax = () => {
  const fax = () => {
    console.log("fax");
  };

  return { fax };
};

const multiFunctionPrinter = () => {
  const print = () => {
    console.log("print");
  };

  const scan = () => {
    console.log("scan");
  };

  const fax = () => {
    console.log("fax");
  };

  return { print, scan, fax };
};

const oldFashionedPrinter = () => {
  const print = () => {
    console.log("print");
  };

  return { print };
};
```