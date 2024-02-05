"use strict";(self.webpackChunkmd_note=self.webpackChunkmd_note||[]).push([[7077],{1430:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>u,metadata:()=>r,toc:()=>i});var o=n(5893),s=n(1151);const u={},c=void 0,r={id:"React/Hooks/useMemo",title:"useMemo",description:"useMemo",source:"@site/docs/React/Hooks/useMemo.md",sourceDirName:"React/Hooks",slug:"/React/Hooks/useMemo",permalink:"/my-notes/docs/React/Hooks/useMemo",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/React/Hooks/useMemo.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useEffect",permalink:"/my-notes/docs/React/Hooks/useEffect"},next:{title:"useReducer",permalink:"/my-notes/docs/React/Hooks/useReducer"}},a={},i=[{value:"useMemo",id:"usememo",level:3}];function m(e){const t={code:"code",h3:"h3",li:"li",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h3,{id:"usememo",children:"useMemo"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"useMemo \u7528\u6765\u7f13\u5b58\u8ba1\u7b97\u7ed3\u679c\uff0c\u907f\u514d\u91cd\u590d\u8ba1\u7b97\uff0c\u63d0\u9ad8\u6027\u80fd"}),"\n",(0,o.jsx)(t.li,{children:"useMemo \u63a5\u6536\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e00\u9879\u90fd\u662f\u4e00\u4e2a\u4f9d\u8d56\u9879\uff0c\u53ea\u6709\u4f9d\u8d56\u9879\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u624d\u4f1a\u91cd\u65b0\u8ba1\u7b97"}),"\n",(0,o.jsx)(t.li,{children:"useMemo \u8fd4\u56de\u7684\u662f\u8ba1\u7b97\u7ed3\u679c"}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'import React, { useState, useMemo } from "react";\n\nconst App = () => {\n  const [count, setCount] = useState(0);\n  const [name, setName] = useState("");\n\n  // useMemo \u7528\u6765\u7f13\u5b58\u8ba1\u7b97\u7ed3\u679c\uff0c\u907f\u514d\u91cd\u590d\u8ba1\u7b97\uff0c\u63d0\u9ad8\u6027\u80fd\n  // useMemo \u63a5\u6536\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e00\u9879\u90fd\u662f\u4e00\u4e2a\u4f9d\u8d56\u9879\uff0c\u53ea\u6709\u4f9d\u8d56\u9879\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u624d\u4f1a\u91cd\u65b0\u8ba1\u7b97\n  // useMemo \u8fd4\u56de\u7684\u662f\u8ba1\u7b97\u7ed3\u679c\n  const doubleCount = useMemo(() => {\n    console.log("doubleCount");\n    return count * 2;\n  }, [count]);\n\n  return (\n    <div>\n      <button onClick={() => setCount(count + 1)}>count: {count}</button>\n      <div>{doubleCount}</div>\n      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />\n    </div>\n  );\n};\n\nexport default App;\n'})})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>c});var o=n(7294);const s={},u=o.createContext(s);function c(e){const t=o.useContext(u);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(u.Provider,{value:t},e.children)}}}]);