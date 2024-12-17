"use strict";(self.webpackChunkmd_note=self.webpackChunkmd_note||[]).push([[4682],{1471:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>o});var t=n(5893),r=n(1151);const i={},c="Cypress Fundamentals",a={id:"Cypress/Cypress_Fundamentals",title:"Cypress Fundamentals",description:"What is Cypress?",source:"@site/docs/Cypress/Cypress_Fundamentals.md",sourceDirName:"Cypress",slug:"/Cypress/Cypress_Fundamentals",permalink:"/my-notes/docs/Cypress/Cypress_Fundamentals",draft:!1,unlisted:!1,editUrl:"https://github.com/jishen027/my-notes/tree/main/docs/Cypress/Cypress_Fundamentals.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Use Azure Pipeline to Deploy Vite Vue App to Siteground(Share Hosting)",permalink:"/my-notes/docs/Azure/Pipeline/Pipeline_Siteground"},next:{title:"Django",permalink:"/my-notes/docs/Django/"}},l={},o=[{value:"What is Cypress?",id:"what-is-cypress",level:3}];function d(e){const s={br:"br",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"cypress-fundamentals",children:"Cypress Fundamentals"}),"\n",(0,t.jsx)(s.h3,{id:"what-is-cypress",children:"What is Cypress?"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Cypress is a JavaScript End to End Testing Framework."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Describe Block: It is used to group the test cases.",(0,t.jsx)(s.br,{}),"\n","The Block taks two arguments:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"First Argument: description what the block is about, what are you testing."}),"\n",(0,t.jsxs)(s.li,{children:["Second Argument: a call back function which contains the test cases.","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"The API for describe(), it(), before(), after(), beforeEach(), afterEach()."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["It Block: It is used to write the test case.",(0,t.jsx)(s.br,{}),"\n","Single It Block is used to write a single test case."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"The API for it() is for writing the test case."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:'describe("My First Test Suite", function () {\n  it("My First Test Case", function () {\n    // Test Steps\n  });\n});\n'})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Command and interact with the elements on the webpage."}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:'cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");\ncy.get(".search-keyword").type("ca");\ncy.click(".product");\n'})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Get Command: It is used to get the element on the webpage."}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:'cy.get(".search-keyword").type("ca");\n'})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Click Command: It is used to click on the element on the webpage."}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:'cy.click(".product");\n'})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Cypress is asycnchronous in nature.Cypress is a promise based framework."}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:'// Does not work\nconst logo = cy.get(".brand");\nlogo.should("have.text", "GREENKART");\n'})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:'// Works\ncy.get(".brand").should("have.text", "GREENKART");\n'})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[".wrap() is used to wrap the object in a cypress object.",(0,t.jsx)(s.br,{}),"\n",".should() is used to assert the object."]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:'cy.get(".brand").should("have.text", "GREENKART");\n\n// .wrap() is used to wrap the object in a cypress object.\ncy.wrap(".brand").should("have.text", "GREENKART");\n'})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Assertions:",(0,t.jsx)(s.br,{}),"\n","Cypress has its own assertion library. Assertions are used to validate the actual and expected results."]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:'cy.get(".brand").should("have.text", "GREENKART");\n'})})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>c});var t=n(7294);const r={},i=t.createContext(r);function c(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);