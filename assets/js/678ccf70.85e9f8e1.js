"use strict";(self.webpackChunkmd_note=self.webpackChunkmd_note||[]).push([[2870],{1727:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=t(5893),r=t(1151);const o={},c=void 0,a={id:"React/Hooks/useEffect",title:"useEffect",description:"useEffect Hook",source:"@site/docs/React/Hooks/useEffect.md",sourceDirName:"React/Hooks",slug:"/React/Hooks/useEffect",permalink:"/my-notes/docs/React/Hooks/useEffect",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/React/Hooks/useEffect.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useContext",permalink:"/my-notes/docs/React/Hooks/useContext"},next:{title:"useMemo",permalink:"/my-notes/docs/React/Hooks/useMemo"}},i={},l=[{value:"useEffect Hook",id:"useeffect-hook",level:3}];function u(e){const n={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"useeffect-hook",children:"useEffect Hook"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The Effect Hook lets you perform side effects in function components. It is a close replacement for componentDidMount, componentDidUpdate, and componentWillUnmount."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we\u2019ll refer to it as our \u201ceffect\u201d), and call it later after performing the DOM updates. if the component renders multiple times (as they typically do), the effect hook runs every time. This is why React also cleans up effects from the previous render before running the effects next time."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"useEffect is a function that takes two arguments: a function and an array."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The array is a list of dependencies. If any of the dependencies change, the function is called again."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"If the array is not provided, the function is called after every render."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"If the array is empty, the function is only called once, after the first render."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const [count, setCount] = useState(0)\n\n// useEffect will run after every render if count changes\nuseEffect(() => {\n  console.log('run when count changes')\n}, [count])\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const [count, setCount] = useState(0)\nconst [name, setName] = useState('')\nconst [items, setItems] = useState([])\n\n// useEffect will run after every render if count, name, or items changes\nuseEffect(() => {\n  console.log('run when count, name, or items changes')\n}, [count, name, items])\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If the array is empty, the function is only called once, after the first render."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"// useEffect will run once after the first render\nuseEffect(() => {\n  console.log('run once after the first render')\n}, [])\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If the array is not provided, the function is called after every render."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"\n// useEffect will run after every render\nuseEffect(() => {\n  console.log('run after every render')\n})\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"return a function from useEffect to clean up"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"useEffect(() => {\n  console.log('run after every render')\n\n  // return a function to clean up, this function will be called before the next render\n  return () => {\n    console.log('clean up')\n  }\n})\n"})})]})}function f(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>c});var s=t(7294);const r={},o=s.createContext(r);function c(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);