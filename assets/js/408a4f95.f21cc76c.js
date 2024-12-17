"use strict";(self.webpackChunkmd_note=self.webpackChunkmd_note||[]).push([[2182],{5628:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>l,frontMatter:()=>c,metadata:()=>a,toc:()=>i});var s=n(5893),o=n(1151);const c={},r="useReducer",a={id:"React/Hooks/useReducer",title:"useReducer",description:"- useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.",source:"@site/docs/React/Hooks/useReducer.md",sourceDirName:"React/Hooks",slug:"/React/Hooks/useReducer",permalink:"/my-notes/docs/React/Hooks/useReducer",draft:!1,unlisted:!1,editUrl:"https://github.com/jishen027/my-notes/tree/main/docs/React/Hooks/useReducer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useMemo",permalink:"/my-notes/docs/React/Hooks/useMemo"},next:{title:"Ract Hooks - useRef",permalink:"/my-notes/docs/React/Hooks/useRef"}},u={},i=[];function d(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"usereducer",children:"useReducer"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"useReducer"})," is usually preferable to ",(0,s.jsx)(t.code,{children:"useState"})," when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"useReducer"})," also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"useReducer"})," is a function that takes two arguments: a reducer function and an initial state value."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'import React, { useReducer } from "react";\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case "increment":\n      return { count: state.count + 1 };\n    case "decrement":\n      return { count: state.count - 1 };\n    default:\n      throw new Error();\n  }\n}\n\nconst App = () => {\n  // useReducer is a function that takes two arguments: a reducer function and an initial state value.\n  const [state, dispatch] = useReducer(reducer, { count: 0 });\n\n  return (\n    <div>\n      <button onClick={() => dispatch({ type: "increment" })}>+</button>\n      <div>{state.count}</div>\n      <button onClick={() => dispatch({ type: "decrement" })}>-</button>\n    </div>\n  );\n};\n\nexport default App;\n'})}),"\n",(0,s.jsxs)(t.p,{children:["in the above example, ",(0,s.jsx)(t.code,{children:"state"})," is an object with a property ",(0,s.jsx)(t.code,{children:"count"}),", ",(0,s.jsx)(t.code,{children:"dispatch"})," is a function that takes an action object as an argument, and dispatch the action object to the reducer function."]})]})}function l(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var s=n(7294);const o={},c=s.createContext(o);function r(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);