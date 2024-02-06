# useReducer
- `useReducer` is usually preferable to `useState` when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.

- `useReducer` also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.
                                                                                 

- `useReducer` is a function that takes two arguments: a reducer function and an initial state value.

```js
import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const App = () => {
  // useReducer is a function that takes two arguments: a reducer function and an initial state value.
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <div>{state.count}</div>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
};

export default App;
```

in the above example, `state` is an object with a property `count`, `dispatch` is a function that takes an action object as an argument, and dispatch the action object to the reducer function.

