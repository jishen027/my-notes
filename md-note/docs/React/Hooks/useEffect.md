### useEffect Hook
- useEffect is a function that takes two arguments: a function and an array.

- The array is a list of dependencies. If any of the dependencies change, the function is called again.
```javascript
const [count, setCount] = useState(0)

// useEffect will run after every render if count changes
useEffect(() => {
  console.log('run when count changes')
}, [count])
```

```javascript
const [count, setCount] = useState(0)
const [name, setName] = useState('')
const [items, setItems] = useState([])

// useEffect will run after every render if count, name, or items changes
useEffect(() => {
  console.log('run when count, name, or items changes')
}, [count, name, items])
```

- If the array is empty, the function is only called once, after the first render.
```javascript
// useEffect will run once after the first render
useEffect(() => {
  console.log('run once after the first render')
}, [])
```

- If the array is not provided, the function is called after every render.
```javascript

// useEffect will run after every render
useEffect(() => {
  console.log('run after every render')
})
```

- return a function from useEffect to clean up
```javascript
useEffect(() => {
  console.log('run after every render')

  // return a function to clean up, this function will be called before the next render
  return () => {
    console.log('clean up')
  }
})
```


