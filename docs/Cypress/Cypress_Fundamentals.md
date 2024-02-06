# Cypress Fundamentals

### What is Cypress?

- Cypress is a JavaScript End to End Testing Framework.

- Describe Block: It is used to group the test cases.  
  The Block taks two arguments:

  - First Argument: description what the block is about, what are you testing.
  - Second Argument: a call back function which contains the test cases.
    - The API for describe(), it(), before(), after(), beforeEach(), afterEach().

- It Block: It is used to write the test case.  
  Single It Block is used to write a single test case.
  - The API for it() is for writing the test case.

```js
describe("My First Test Suite", function () {
  it("My First Test Case", function () {
    // Test Steps
  });
});
```

- Command and interact with the elements on the webpage.

```js
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
cy.get(".search-keyword").type("ca");
cy.click(".product");
```

- Get Command: It is used to get the element on the webpage.

```js
cy.get(".search-keyword").type("ca");
```

- Click Command: It is used to click on the element on the webpage.

```js
cy.click(".product");
```

- Cypress is asycnchronous in nature.Cypress is a promise based framework.

```js
// Does not work
const logo = cy.get(".brand");
logo.should("have.text", "GREENKART");
```

```js
// Works
cy.get(".brand").should("have.text", "GREENKART");
```

- .wrap() is used to wrap the object in a cypress object.  
  .should() is used to assert the object.

```js
cy.get(".brand").should("have.text", "GREENKART");

// .wrap() is used to wrap the object in a cypress object.
cy.wrap(".brand").should("have.text", "GREENKART");
```

- Assertions:  
  Cypress has its own assertion library. Assertions are used to validate the actual and expected results.

```js
cy.get(".brand").should("have.text", "GREENKART");
```



