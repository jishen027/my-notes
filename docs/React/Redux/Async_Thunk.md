## React Redux Async Thunk

### Post Slice

```javascript
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// initial state
const initialState = {
  posts: [],
  status: 'idle', // idle, loading, succeeded, failed
  error: null,
}

// async thunk  
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {

  try {
    const response = await axios.get('http://localhost:5000/posts')
    return response.data
  } catch (error) {
    return error.message
  }
})

// slice
export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.posts.push(action.payload)
      },
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
  },
  // extraReducers is an object, it takes a key-value pair as parameter
  // the key is the action type, the value is a callback function
  extraReducers: {
    [fetchPosts.pending]: state => {
      state.status = 'loading'
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.posts = action.payload
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.payload
    },
  },
})

export const { addPost } = postsSlice.actions

export default postsSlice.reducer
```

### Use Async Thunk in Component

```javascript
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts } from './postsSlice'

export const PostsList = () => {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts.posts)
  const postsStatus = useSelector(state => state.posts.status)
  const postsError = useSelector(state => state.posts.error)

  useEffect(() => {
    if (postsStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [postsStatus, dispatch])

  let content

  if (postsStatus === 'loading') {
    content = <div>Loading...</div>
  } else if (postsStatus === 'succeeded') {
    content = posts.map(post => (
      <article className="post-excerpt" key={post.id}>
        <h3>{post.title}</h3>
        <p className="post-content">{post.content.substring(0, 100)}</p>
      </article>
    ))
  } else if (postsStatus === 'failed') {
    content = <div>{postsError}</div>
  }

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {content}
    </section>
  )
}
```


### user Slice

```javascript
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// initial state
const initialState = {
  users: [],
  status: 'idle', // idle, loading, succeeded, failed
  error: null,
}

// async thunk
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const response = await axios.get('http://localhost:5000/users')
    return response.data
  } catch (error) {
    return error.message
  }
})

// slice
export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: {
      reducer(state, action) {
        state.users.push(action.payload)
      },
      prepare(name) {
        return {
          payload: {
            id: nanoid(),
            name,
          },
        }
      },
    },
  },
  // extraReducers is an object, it takes a key-value pair as parameter
  // the key is the action type, the value is a callback function
  extraReducers: {
    [fetchUsers.pending]: state => {
      state.status = 'loading'
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.users = action.payload
    },
    [fetchUsers.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.payload
    },
  },
})

export const { addUser } = usersSlice.actions

export default usersSlice.reducer
```