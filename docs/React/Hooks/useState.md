# useState Hook

- What is a hook?

  - A hook is a function that allows you to use React features in a functional component.

  - useState is a hook that allows you to use state in a functional component.

  - useState is excuted when the component is rendered, and it will be called in the same order every time the component is rendered.

  - if useState is changed, the component will be rendered again.

  ```javascript
  // react useState hook will be called in the same order every time the component is rendered, and it can not be called conditionally
  const [count, setCount] = useState(0); // called first
  const [name, setName] = useState(""); // called second
  const [items, setItems] = useState([]); // called third
  ```

- useState returns an array with two elements: the state value and a function to update the state value.

  ```javascript
  // count is the state value, setCount is a function to update the state value
  // setCount is similar to setState in class components, but it does not merge the state value with the previous state value, it replaces the state value with the new state value, every time it is called, it will render the component again
  const [count, setCount] = useState(0);
  ```

- functional set state

  - setCount is a function that takes a value or a function as an argument.

  ```javascript
  // setCount can take a value as an argument
  setCount(1);

  // setCount can take a function as an argument, the function takes the previous state value as an argument, and returns the new state value
  setCount((prevCount) => prevCount + 1);
  ```

  ```javascript
  cosnt[(count, setCount)] = useState(0);

  // setCount can take a value as an argument
  const countIncrement = () => {
    // setCount can take a value as an argument
    setCount((prevCount) => prevCount + 1); // count is 1
    // prevCount is the previous state value, it is 0
    setCount((prevCount) => prevCount + 1); // count is 2
  };

  // setCount without a function as an argument
  const countIncrement = () => {
    // setCount can take a value as an argument
    setCount(count + 1);
    // the previous setState will overwrite the next setState
    setCount(count + 1); // count is 1, not 2, because the previous setState will overwrite the next setState
  };
  ```

- useState can take a function as an argument fot initial the value, the function will be called once, when the component is rendered for the first time

  ```javascript
  // useState can take a function as an argument fot initial the value
  // the function will be called once, when the component is rendered for the first time
  const [count, setCount] = () => {
    console.log("run once");
    return 4;
  };
  ```

- use an object in useState

  - useState can take an object as an argument, but it does not merge the object with the previous object, it replaces the object with the new object, every time it is called, it will render the component again

  ```javascript
  const [state, setState] = useState({ count: 0, name: "" });

  // setState will replace the object with the new object, every time it is called, it will render the component again
  setState({ count: 1, name: "name1" }); // state is {count: 1, name: 'name1'}
  setState({ count: 2, name: "name2" }); // state is {count: 2, name: 'name2'}

  const incrementCount = () => {
    setState((prevState) => {
      // prevState is the previous state value, it is {count: 0, name: ''}
      // setState will replace the object with the new object, every time it is called, it will render the component again, use ...prevState to merge the object with the previous object, and then update the object
      return { ...prevState, count: prevState.count + 1 };
    });
  };
  ```