# useMemo 

- useMemo 用来缓存计算结果，避免重复计算，提高性能
- useMemo 接收两个参数，第一个参数是一个函数，第二个参数是一个数组，数组中的每一项都是一个依赖项，只有依赖项发生变化时，才会重新计算
- useMemo 返回的是计算结果

```js
import React, { useState, useMemo } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // useMemo 用来缓存计算结果，避免重复计算，提高性能
  // useMemo 接收两个参数，第一个参数是一个函数，第二个参数是一个数组，数组中的每一项都是一个依赖项，只有依赖项发生变化时，才会重新计算
  // useMemo 返回的是计算结果
  const doubleCount = useMemo(() => {
    console.log("doubleCount");
    return count * 2;
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>count: {count}</button>
      <div>{doubleCount}</div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default App;
```