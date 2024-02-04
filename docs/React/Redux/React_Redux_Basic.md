## init Redux for React project
1. install react-redux and @reduxjs/toolkit
```bash
npm install @reduxjs/toolkit react-redux
```

2. create store
```javascript
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {},
})
```

3. Wrap the root component with Provider
```javascript
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```

4. create slice
```javascript
import { createSlice } from '@reduxjs/toolkit'

// initial state
const initialState = {
  value: 0,
}

// slice
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      // action.payload is the value passed in, payload is a convention
      state.value += action.payload
    },
  },
})

// export actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
```
5. add slice to store
```javascript
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})
```

6. use slice in component
```javascript
// use Selector to get state, use dispatch to dispatch action
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export function Counter() {

  // get state
  const count = useSelector(state => state.counter.value)
  // dispatch action
  const dispatch = useDispatch()

  return (
    <div>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
    </div>
  )
}
```

## Redux Slice for Posts
1. reducer and prepare
- reducer is a callback function, it takes two parameters, state and action
- prepare is a callback function, it takes the payload as parameter, it is optional, it returns an object, the object will be passed to reducer as action.payload

```javascript
import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const initialState = {
  posts: [],
  status: 'idle',
  error: null,
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: {
      // addPost is an action creator, it returns an action object
      reducer(state, action) {
        state.posts.push(action.payload)
      },
      // prepare is a callback function, it returns an object
      // prepare is used to prepare the payload, it is optional
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,
          },
        }
      },
    },
    postsLoading: state => {
      state.status = 'loading'
    },
    postsReceived: (state, action) => {
      state.status = 'succeeded'
      state.posts = action.payload
    },
    postsFailed: (state, action) => {
      state.status = 'failed'
      state.error = action.payload
    },
  },
})
```