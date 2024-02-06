# Custom Hook

- A custom hook is a function that starts with the word use, and it can call other hooks if needed.

```js
// custom hook
const useCustomHook = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const countIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const nameChange = (e) => {
    setName(e.target.value);
  };

  return {
    count,
    name,
    countIncrement,
    nameChange,
  };
};

const App = () => {
  const { count, name, countIncrement, nameChange } = useCustomHook();

  return (
    <div>
      <button onClick={countIncrement}>count: {count}</button>
      <input type="text" value={name} onChange={nameChange} />
    </div>
  );
};

export default App;
```