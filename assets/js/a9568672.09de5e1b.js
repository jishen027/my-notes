"use strict";(self.webpackChunkmd_note=self.webpackChunkmd_note||[]).push([[2213],{400:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=e(5893),c=e(1151);const i={},a=void 0,s={id:"SOLID/Single_Responsibility_Principle",title:"Single_Responsibility_Principle",description:"Single Responsibility Principle",source:"@site/docs/SOLID/Single_Responsibility_Principle.md",sourceDirName:"SOLID",slug:"/SOLID/Single_Responsibility_Principle",permalink:"/my-notes/docs/SOLID/Single_Responsibility_Principle",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/SOLID/Single_Responsibility_Principle.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Open_Closed_Principle",permalink:"/my-notes/docs/SOLID/Open_Closed_Principle"},next:{title:"TypeScript_basic",permalink:"/my-notes/docs/TypeScript/TypeScript_basic"}},r={},l=[{value:"Single Responsibility Principle",id:"single-responsibility-principle",level:3}];function p(n){const t={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h3,{id:"single-responsibility-principle",children:"Single Responsibility Principle"}),"\n",(0,o.jsx)(t.p,{children:"A class should have a singular focus, encompassing only one responsibility, job, purpose, or area of concern."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:'// This Class only for manage the contacts\nclass ContactManager {\n  constructor() {\n    this.contacts = [];\n  }\n\n  addContact(contact) {\n    this.contacts.push(contact);\n  }\n}\n\n// This Class only for update the UI\nclass ContactUI {\n  static addContactToDOM(contact) {\n    document.querySelector("#contacts").innerHTML += `\n      <div>\n        <h3>${contact.name}</h3>\n        <p>${contact.phone}</p>\n      </div>\n    `;\n  }\n}\n\n// create a new instance of ContactManager\nconst manager = new ContactManager();\n// create a new instance of ContactUI\nconst contact = { name: "John Doe", phone: "555-555-5555" };\n// add the contact to the manager\nmanager.addContact(contact);\n// add the contact to the UI\nContactUI.addContactToDOM(contact);\n'})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"in the above example, the ContactManager class has a singular focus, encompassing only one responsibility, job, purpose, or area of concern, it only for manage the contacts"}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"the ContactUI class has a singular focus, encompassing only one responsibility, job, purpose, or area of concern, it only for update the UI"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:'// Functional Programming - Single Responsibility Principle\ninterface Contact {\n  name: string;\n  phone: string;\n}\n\nconst contacts: Contact[] = [];\n\n// this function only for manage the contacts\nconst addContact = (contact) => {\n  contacts.push(contact);\n};\n\n// this function only for update the UI\nconst addContactToDOM = (contact) => {\n  document.querySelector("#contacts").innerHTML += `\n    <div>\n      <h3>${contact.name}</h3>\n      <p>${contact.phone}</p>\n    </div>\n  `;\n};\n\nconst contact = { name: "John Doe", phone: "555-555-5555" };\naddContact(contact);\naddContactToDOM(contact);\n'})})]})}function d(n={}){const{wrapper:t}={...(0,c.a)(),...n.components};return t?(0,o.jsx)(t,{...n,children:(0,o.jsx)(p,{...n})}):p(n)}},1151:(n,t,e)=>{e.d(t,{Z:()=>s,a:()=>a});var o=e(7294);const c={},i=o.createContext(c);function a(n){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function s(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:a(n.components),o.createElement(i.Provider,{value:t},n.children)}}}]);