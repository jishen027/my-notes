### Ract Hooks - useRef

#### What is useRef?

- useRef is a hook that returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component, and the .current property can be updated by calling the ref.current property, every time the component is rendered, the ref object will be the same object, it will not be recreated.

- store render count in ref  
  render count will not be reset to 0 when the component is re-rendered, and it will not cause the component to re-render when the render count is updated

```javascript
import React, { useRef } from "react";

const App = () => {
  const renderCount = useRef(0);

  return (
    <div>
      <button onClick={() => renderCount.current++}>
        render count: {renderCount.current}
      </button>
    </div>
  );
};

export default App;
```

- store element in ref   
  store element in ref, and access the element in the ref object, same as using document.getElementById

```javascript
import React, { useRef } from "react";

const App = () => {
  const inputRef = useRef();

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={() => inputRef.current.focus()}>focus</button>
    </div>
  );
};

export default App;
```

- store previous state value in ref  
  store previous state value in ref, and access the previous state value in the ref object, same as using prevState in setState

```javascript
import React, { useState, useRef } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  const incrementCount = () => {
    setCount((prevCount) => {
      prevCountRef.current = prevCount;
      return prevCount + 1;
    });
  };

  return (
    <div>
      <button onClick={incrementCount}>count: {count}</button>
      <button onClick={() => alert(prevCountRef.current)}>
        previous count: {prevCountRef.current}
      </button>
    </div>
  );
};

export default App;
```              