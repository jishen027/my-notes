### useEffect Hook

- The Effect Hook lets you perform side effects in function components. It is a close replacement for componentDidMount, componentDidUpdate, and componentWillUnmount.

- By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. if the component renders multiple times (as they typically do), the effect hook runs every time. This is why React also cleans up effects from the previous render before running the effects next time.

- useEffect is a function that takes two arguments: a function and an array.

- The array is a list of dependencies. If any of the dependencies change, the function is called again.

- If the array is not provided, the function is called after every render.

- If the array is empty, the function is only called once, after the first render.
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


