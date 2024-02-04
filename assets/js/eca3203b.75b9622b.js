"use strict";(self.webpackChunkmd_note=self.webpackChunkmd_note||[]).push([[4741],{5637:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>r});var o=n(5893),s=n(1151);const a={},c=void 0,u={id:"React/Hooks/useCallback",title:"useCallback",description:"useCallback",source:"@site/docs/React/Hooks/useCallback.md",sourceDirName:"React/Hooks",slug:"/React/Hooks/useCallback",permalink:"/docs/React/Hooks/useCallback",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/React/Hooks/useCallback.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"customHook",permalink:"/docs/React/Hooks/customHook"},next:{title:"useContext",permalink:"/docs/React/Hooks/useContext"}},l={},r=[{value:"useCallback",id:"usecallback",level:3}];function i(e){const t={code:"code",h3:"h3",li:"li",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h3,{id:"usecallback",children:"useCallback"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"useCallback(fn, deps) is equivalent to useMemo(() => fn, deps)."}),"\n",(0,o.jsx)(t.li,{children:"useCallback(fn, deps) \u7b49\u4ef7\u4e8e useMemo(() => fn, deps)\u3002"}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'import React, { useState, useCallback } from "react";\n\nconst App = () => {\n  const [count, setCount] = useState(0);\n  const [name, setName] = useState("");\n\n  // useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).\n  // useCallback(fn, deps) \u7b49\u4ef7\u4e8e useMemo(() => fn, deps)\u3002\n  const doubleCount = useCallback(() => {\n    console.log("doubleCount");\n    return count * 2;\n  }, [count]);\n\n  return (\n    <div>\n      <button onClick={() => setCount(count + 1)}>count: {count}</button>\n      <div>{doubleCount()}</div>\n      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />\n    </div>\n  );\n};\n\nexport default App;\n'})})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>u,a:()=>c});var o=n(7294);const s={},a=o.createContext(s);function c(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);