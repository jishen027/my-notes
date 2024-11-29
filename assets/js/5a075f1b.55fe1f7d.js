"use strict";(self.webpackChunkmd_note=self.webpackChunkmd_note||[]).push([[7110],{8871:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var i=n(5893),s=n(1151);const o={},r="Liskov Substitution Principle",a={id:"SOLID/Liskov_Substitution_Principle",title:"Liskov Substitution Principle",description:"- Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program.",source:"@site/docs/SOLID/Liskov_Substitution_Principle.md",sourceDirName:"SOLID",slug:"/SOLID/Liskov_Substitution_Principle",permalink:"/my-notes/docs/SOLID/Liskov_Substitution_Principle",draft:!1,unlisted:!1,editUrl:"https://github.com/jishen027/my-notes/tree/main/docs/docs/SOLID/Liskov_Substitution_Principle.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Interface Segregation Principle",permalink:"/my-notes/docs/SOLID/Interface_Segregation_Principle"},next:{title:"Open/Close Principle",permalink:"/my-notes/docs/SOLID/Open_Closed_Principle"}},c={},h=[];function l(e){const t={code:"code",h1:"h1",li:"li",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"liskov-substitution-principle",children:"Liskov Substitution Principle"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program."}),"\n",(0,i.jsx)(t.li,{children:"In other words, if S is a subtype of T, then objects of type T may be replaced with objects of type S without altering any of the desirable properties of the program."}),"\n",(0,i.jsx)(t.li,{children:"The Liskov Substitution Principle (LSP) is a particular definition of a subtyping relation, called (strong) behavioral subtyping."}),"\n",(0,i.jsx)(t.li,{children:"LSP is a semantic rather than merely syntactic relation because it intends to guarantee semantic interoperability of types in a hierarchy, object types in particular."}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"// Liskov Substitution Principle\nclass Rectangle {\n  constructor(width, height) {\n    this.width = width;\n    this.height = height;\n  }\n\n  setWidth(width) {\n    this.width = width;\n  }\n\n  setHeight(height) {\n    this.height = height;\n  }\n\n  area() {\n    return this.width * this.height;\n  }\n}\n\n// when we add a new shape, we don't need to modify the Rectangle class\n// but the Square class violates the Liskov Substitution Principle\n// because the Square class does not behave as the Rectangle class\n// the Square class should not inherit from the Rectangle class\n// the Square class should inherit from the Shape class\nclass Square extends Rectangle {\n  constructor(length) {\n    super(length, length);\n  }\n\n  setWidth(width) {\n    this.width = width;\n    this.height = width;\n  }\n\n  setHeight(height) {\n    this.width = height;\n    this.height = height;\n  }\n}\n\nconst useIt = (rectangle) => {\n  const width = rectangle.width;\n  rectangle.setHeight(10);\n  // area is 100, not 200, because the Square class violates the Liskov Substitution Principle\n  console.log(`Expected area of ${10 * width}, got ${rectangle.area()}`);\n};\n\nconst rectangle = new Rectangle(2, 3);\n\n// Expected area of 20, got 20\nuseIt(rectangle);\n\nconst square = new Square(5);\n\n// Expected area of 50, got 100, because the Square class violates the Liskov Substitution Principle\nuseIt(square);\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var i=n(7294);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);