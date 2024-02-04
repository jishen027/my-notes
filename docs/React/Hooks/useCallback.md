### useCallback

- useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).
- useCallback(fn, deps) 等价于 useMemo(() => fn, deps)。

```js
import React, { useState, useCallback } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).
  // useCallback(fn, deps) 等价于 useMemo(() => fn, deps)。
  const doubleCount = useCallback(() => {
    console.log("doubleCount");
    return count * 2;
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>count: {count}</button>
      <div>{doubleCount()}</div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default App;
```

