"use strict";(self.webpackChunkmd_note=self.webpackChunkmd_note||[]).push([[7593],{5299:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>t,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var a=s(5893),o=s(1151);const r={},t=void 0,d={id:"SOLID/Dependency_Inversion_Principle",title:"Dependency_Inversion_Principle",description:"Dependency Inversion Principle",source:"@site/docs/SOLID/Dependency_Inversion_Principle.md",sourceDirName:"SOLID",slug:"/SOLID/Dependency_Inversion_Principle",permalink:"/docs/SOLID/Dependency_Inversion_Principle",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/SOLID/Dependency_Inversion_Principle.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Redis_note",permalink:"/docs/Redis/Redis_note"},next:{title:"Interface_Segregation_Principle",permalink:"/docs/SOLID/Interface_Segregation_Principle"}},i={},c=[{value:"Dependency Inversion Principle",id:"dependency-inversion-principle",level:3}];function l(e){const n={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h3,{id:"dependency-inversion-principle",children:"Dependency Inversion Principle"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"High-level modules should not depend on low-level modules. Both should depend on abstractions."}),"\n",(0,a.jsx)(n.li,{children:"Abstractions should not depend on details. Details should depend on abstractions."}),"\n",(0,a.jsx)(n.li,{children:"In other words, we should depend on abstractions, not on concretions."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'class UserManager {\n  // constructor injection\n  constructor(database) {\n    this.database = database;\n  }\n\n  addUser(user) {\n    this.database.add(user);\n  }\n}\n\nclass MySQLDatabase {\n  add(user) {\n    console.log(`${user} added to MySQL database`);\n  }\n}\n\nclass MongoDBDatabase {\n  add(user) {\n    console.log(`${user} added to MongoDB database`);\n  }\n}\n\nconst mysql = new MySQLDatabase();\nconst mongodb = new MongoDBDatabase();\n\nconst userManager1 = new UserManager(mysql);\nconst userManager2 = new UserManager(mongodb);\n\nuserManager1.addUser("John Doe");\nuserManager2.addUser("John Doe");\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"in the above example, the UserManager class is a high-level module, it should not depend on low-level modules, such as MySQLDatabase and MongoDBDatabase"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"the UserManager class should depend on abstractions, such as Database, not on concretions, such as MySQLDatabase and MongoDBDatabase"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"the MySQLDatabase and MongoDBDatabase classes are low-level modules, they should not depend on high-level modules, such as UserManager"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'// Functional Programming - Dependency Inversion Principle\ninterface Database {\n  add(user: string): void;\n}\n\nconst mysql: Database = {\n  add: (user) => {\n    console.log(`${user} added to MySQL database`);\n  },\n};\n\nconst mongodb: Database = {\n  add: (user) => {\n    console.log(`${user} added to MongoDB database`);\n  },\n};\n\nconst userManager1 = (database: Database) => {\n  const addUser = (user: string) => {\n    database.add(user);\n  };\n\n  return { addUser };\n};\n\nconst userManager2 = (database: Database) => {\n  const addUser = (user: string) => {\n    database.add(user);\n  };\n\n  return { addUser };\n};\n\nuserManager1(mysql).addUser("John Doe");\nuserManager2(mongodb).addUser("John Doe");\n'})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>t});var a=s(7294);const o={},r=a.createContext(o);function t(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);