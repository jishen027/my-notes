"use strict";(self.webpackChunkmd_note=self.webpackChunkmd_note||[]).push([[69],{8249:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>l,frontMatter:()=>c,metadata:()=>r,toc:()=>u});var s=n(5893),a=n(1151);const c={},o="React Redux Async Thunk",r={id:"React/Redux/Async_Thunk",title:"React Redux Async Thunk",description:"Post Slice",source:"@site/docs/React/Redux/Async_Thunk.md",sourceDirName:"React/Redux",slug:"/React/Redux/Async_Thunk",permalink:"/my-notes/docs/React/Redux/Async_Thunk",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/React/Redux/Async_Thunk.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useState Hook",permalink:"/my-notes/docs/React/Hooks/useState"},next:{title:"React Redux Basic",permalink:"/my-notes/docs/React/Redux/React_Redux_Basic"}},i={},u=[{value:"Post Slice",id:"post-slice",level:3},{value:"Use Async Thunk in Component",id:"use-async-thunk-in-component",level:3},{value:"user Slice",id:"user-slice",level:3}];function d(e){const t={code:"code",h1:"h1",h3:"h3",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"react-redux-async-thunk",children:"React Redux Async Thunk"}),"\n",(0,s.jsx)(t.h3,{id:"post-slice",children:"Post Slice"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'\nimport axios from 'axios'\n\n// initial state\nconst initialState = {\n  posts: [],\n  status: 'idle', // idle, loading, succeeded, failed\n  error: null,\n}\n\n// async thunk  \nexport const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {\n\n  try {\n    const response = await axios.get('http://localhost:5000/posts')\n    return response.data\n  } catch (error) {\n    return error.message\n  }\n})\n\n// slice\nexport const postsSlice = createSlice({\n  name: 'posts',\n  initialState,\n  reducers: {\n    addPost: {\n      reducer(state, action) {\n        state.posts.push(action.payload)\n      },\n      prepare(title, content) {\n        return {\n          payload: {\n            id: nanoid(),\n            date: new Date().toISOString(),\n            title,\n            content,\n          },\n        }\n      },\n    },\n  },\n  // extraReducers is an object, it takes a key-value pair as parameter\n  // the key is the action type, the value is a callback function\n  extraReducers: {\n    [fetchPosts.pending]: state => {\n      state.status = 'loading'\n    },\n    [fetchPosts.fulfilled]: (state, action) => {\n      state.status = 'succeeded'\n      state.posts = action.payload\n    },\n    [fetchPosts.rejected]: (state, action) => {\n      state.status = 'failed'\n      state.error = action.payload\n    },\n  },\n})\n\nexport const { addPost } = postsSlice.actions\n\nexport default postsSlice.reducer\n"})}),"\n",(0,s.jsx)(t.h3,{id:"use-async-thunk-in-component",children:"Use Async Thunk in Component"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"import { useEffect } from 'react'\nimport { useSelector, useDispatch } from 'react-redux'\nimport { fetchPosts } from './postsSlice'\n\nexport const PostsList = () => {\n  const dispatch = useDispatch()\n  const posts = useSelector(state => state.posts.posts)\n  const postsStatus = useSelector(state => state.posts.status)\n  const postsError = useSelector(state => state.posts.error)\n\n  useEffect(() => {\n    if (postsStatus === 'idle') {\n      dispatch(fetchPosts())\n    }\n  }, [postsStatus, dispatch])\n\n  let content\n\n  if (postsStatus === 'loading') {\n    content = <div>Loading...</div>\n  } else if (postsStatus === 'succeeded') {\n    content = posts.map(post => (\n      <article className=\"post-excerpt\" key={post.id}>\n        <h3>{post.title}</h3>\n        <p className=\"post-content\">{post.content.substring(0, 100)}</p>\n      </article>\n    ))\n  } else if (postsStatus === 'failed') {\n    content = <div>{postsError}</div>\n  }\n\n  return (\n    <section className=\"posts-list\">\n      <h2>Posts</h2>\n      {content}\n    </section>\n  )\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"user-slice",children:"user Slice"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'\nimport axios from 'axios'\n\n// initial state\nconst initialState = {\n  users: [],\n  status: 'idle', // idle, loading, succeeded, failed\n  error: null,\n}\n\n// async thunk\nexport const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {\n  try {\n    const response = await axios.get('http://localhost:5000/users')\n    return response.data\n  } catch (error) {\n    return error.message\n  }\n})\n\n// slice\nexport const usersSlice = createSlice({\n  name: 'users',\n  initialState,\n  reducers: {\n    addUser: {\n      reducer(state, action) {\n        state.users.push(action.payload)\n      },\n      prepare(name) {\n        return {\n          payload: {\n            id: nanoid(),\n            name,\n          },\n        }\n      },\n    },\n  },\n  // extraReducers is an object, it takes a key-value pair as parameter\n  // the key is the action type, the value is a callback function\n  extraReducers: {\n    [fetchUsers.pending]: state => {\n      state.status = 'loading'\n    },\n    [fetchUsers.fulfilled]: (state, action) => {\n      state.status = 'succeeded'\n      state.users = action.payload\n    },\n    [fetchUsers.rejected]: (state, action) => {\n      state.status = 'failed'\n      state.error = action.payload\n    },\n  },\n})\n\nexport const { addUser } = usersSlice.actions\n\nexport default usersSlice.reducer\n"})})]})}function l(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var s=n(7294);const a={},c=s.createContext(a);function o(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);