# useContext

- what is context ?   
  context is a way to pass data through the component tree without having to pass props down manually at every level.

- useContext is a hook that allows you to use context in a functional component.

- createContext is a function that creates a context object, the context object has two properties: Provider and Consumer.

- Provider is a component that allows consuming components to subscribe to context changes.

- Consumer is a component that allows consuming components to subscribe to context changes.

- useContext is a hook that allows you to use context in a functional component.

```javascript
import React, { useContext } from "react";

const App = () => {
  return (
    <div>
      <UserContext.Provider value={"John"}>
        <ComponentA />
      </UserContext.Provider>
    </div>
  );
};

const ComponentA = () => {
  return (
    <div>
      <ComponentB />
    </div>
  );
};

const ComponentB = () => {
  return (
    <div>
      <ComponentC />
    </div>
  );
};

const ComponentC = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <div>{user}</div>
    </div>
  );
};

export default App;
```