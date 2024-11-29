"use strict";(self.webpackChunkmd_note=self.webpackChunkmd_note||[]).push([[718],{9494:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(5893),s=n(1151);const o={},c="useState Hook",i={id:"React/Hooks/useState",title:"useState Hook",description:"- What is a hook?",source:"@site/docs/React/Hooks/useState.md",sourceDirName:"React/Hooks",slug:"/React/Hooks/useState",permalink:"/my-notes/docs/React/Hooks/useState",draft:!1,unlisted:!1,editUrl:"https://github.com/jishen027/my-notes/tree/main/docs/docs/React/Hooks/useState.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ract Hooks - useRef",permalink:"/my-notes/docs/React/Hooks/useRef"},next:{title:"React Redux Async Thunk",permalink:"/my-notes/docs/React/Redux/Async_Thunk"}},r={},u=[];function l(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"usestate-hook",children:"useState Hook"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"What is a hook?"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"A hook is a function that allows you to use React features in a functional component."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"useState is a hook that allows you to use state in a functional component."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"useState is excuted when the component is rendered, and it will be called in the same order every time the component is rendered."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"if useState is changed, the component will be rendered again."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:'// react useState hook will be called in the same order every time the component is rendered, and it can not be called conditionally\nconst [count, setCount] = useState(0); // called first\nconst [name, setName] = useState(""); // called second\nconst [items, setItems] = useState([]); // called third\n'})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"useState returns an array with two elements: the state value and a function to update the state value."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"// count is the state value, setCount is a function to update the state value\n// setCount is similar to setState in class components, but it does not merge the state value with the previous state value, it replaces the state value with the new state value, every time it is called, it will render the component again\nconst [count, setCount] = useState(0);\n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"functional set state"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"setCount is a function that takes a value or a function as an argument."}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"// setCount can take a value as an argument\nsetCount(1);\n\n// setCount can take a function as an argument, the function takes the previous state value as an argument, and returns the new state value\nsetCount((prevCount) => prevCount + 1);\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"cosnt[(count, setCount)] = useState(0);\n\n// setCount can take a value as an argument\nconst countIncrement = () => {\n  // setCount can take a value as an argument\n  setCount((prevCount) => prevCount + 1); // count is 1\n  // prevCount is the previous state value, it is 0\n  setCount((prevCount) => prevCount + 1); // count is 2\n};\n\n// setCount without a function as an argument\nconst countIncrement = () => {\n  // setCount can take a value as an argument\n  setCount(count + 1);\n  // the previous setState will overwrite the next setState\n  setCount(count + 1); // count is 1, not 2, because the previous setState will overwrite the next setState\n};\n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"useState can take a function as an argument fot initial the value, the function will be called once, when the component is rendered for the first time"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:'// useState can take a function as an argument fot initial the value\n// the function will be called once, when the component is rendered for the first time\nconst [count, setCount] = () => {\n  console.log("run once");\n  return 4;\n};\n'})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"use an object in useState"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"useState can take an object as an argument, but it does not merge the object with the previous object, it replaces the object with the new object, every time it is called, it will render the component again"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"const [state, setState] = useState({ count: 0, name: \"\" });\n\n// setState will replace the object with the new object, every time it is called, it will render the component again\nsetState({ count: 1, name: \"name1\" }); // state is {count: 1, name: 'name1'}\nsetState({ count: 2, name: \"name2\" }); // state is {count: 2, name: 'name2'}\n\nconst incrementCount = () => {\n  setState((prevState) => {\n    // prevState is the previous state value, it is {count: 0, name: ''}\n    // setState will replace the object with the new object, every time it is called, it will render the component again, use ...prevState to merge the object with the previous object, and then update the object\n    return { ...prevState, count: prevState.count + 1 };\n  });\n};\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>c});var a=n(7294);const s={},o=a.createContext(s);function c(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);