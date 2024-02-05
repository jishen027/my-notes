"use strict";(self.webpackChunkmd_note=self.webpackChunkmd_note||[]).push([[9814],{5681:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>u,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var r=t(5893),s=t(1151);const o={},u=void 0,c={id:"React/Hooks/useRef",title:"useRef",description:"Ract Hooks - useRef",source:"@site/docs/React/Hooks/useRef.md",sourceDirName:"React/Hooks",slug:"/React/Hooks/useRef",permalink:"/docs/React/Hooks/useRef",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/React/Hooks/useRef.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useReducer",permalink:"/docs/React/Hooks/useReducer"},next:{title:"useState",permalink:"/docs/React/Hooks/useState"}},i={},a=[{value:"Ract Hooks - useRef",id:"ract-hooks---useref",level:3},{value:"What is useRef?",id:"what-is-useref",level:4}];function l(e){const n={br:"br",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"ract-hooks---useref",children:"Ract Hooks - useRef"}),"\n",(0,r.jsx)(n.h4,{id:"what-is-useref",children:"What is useRef?"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"useRef is a hook that returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component, and the .current property can be updated by calling the ref.current property, every time the component is rendered, the ref object will be the same object, it will not be recreated."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["store render count in ref",(0,r.jsx)(n.br,{}),"\n","render count will not be reset to 0 when the component is re-rendered, and it will not cause the component to re-render when the render count is updated"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'import React, { useRef } from "react";\n\nconst App = () => {\n  const renderCount = useRef(0);\n\n  return (\n    <div>\n      <button onClick={() => renderCount.current++}>\n        render count: {renderCount.current}\n      </button>\n    </div>\n  );\n};\n\nexport default App;\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["store element in ref",(0,r.jsx)(n.br,{}),"\n","store element in ref, and access the element in the ref object, same as using document.getElementById"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'import React, { useRef } from "react";\n\nconst App = () => {\n  const inputRef = useRef();\n\n  return (\n    <div>\n      <input ref={inputRef} type="text" />\n      <button onClick={() => inputRef.current.focus()}>focus</button>\n    </div>\n  );\n};\n\nexport default App;\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["store previous state value in ref",(0,r.jsx)(n.br,{}),"\n","store previous state value in ref, and access the previous state value in the ref object, same as using prevState in setState"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'import React, { useState, useRef } from "react";\n\nconst App = () => {\n  const [count, setCount] = useState(0);\n  const prevCountRef = useRef();\n\n  const incrementCount = () => {\n    setCount((prevCount) => {\n      prevCountRef.current = prevCount;\n      return prevCount + 1;\n    });\n  };\n\n  return (\n    <div>\n      <button onClick={incrementCount}>count: {count}</button>\n      <button onClick={() => alert(prevCountRef.current)}>\n        previous count: {prevCountRef.current}\n      </button>\n    </div>\n  );\n};\n\nexport default App;\n'})})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>u});var r=t(7294);const s={},o=r.createContext(s);function u(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:u(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);