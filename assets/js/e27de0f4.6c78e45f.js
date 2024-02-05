"use strict";(self.webpackChunkmd_note=self.webpackChunkmd_note||[]).push([[6707],{4752:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var t=n(5893),r=n(1151);const o={},i=void 0,a={id:"Express/Passport_JS",title:"Passport_JS",description:"Express Passport JS",source:"@site/docs/Express/Passport_JS.md",sourceDirName:"Express",slug:"/Express/Passport_JS",permalink:"/my-notes/docs/Express/Passport_JS",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Express/Passport_JS.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"docker-cheatsheet",permalink:"/my-notes/docs/Docker/docker-cheatsheet"},next:{title:"Useful_algorithem",permalink:"/my-notes/docs/JS/Useful_algorithem"}},d={},l=[{value:"Express Passport JS",id:"express-passport-js",level:3},{value:"Passport JS",id:"passport-js",level:3},{value:"HTTP headers and Cookies",id:"http-headers-and-cookies",level:4},{value:"middleware",id:"middleware",level:3},{value:"express session",id:"express-session",level:3}];function c(e){const s={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h3,{id:"express-passport-js",children:"Express Passport JS"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://www.npmjs.com/package/passport",children:"Passport JS"})}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"passport-js",children:"Passport JS"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"What is Passport JS?"}),"\n",(0,t.jsx)(s.li,{children:"Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application. A comprehensive set of strategies support authentication using a username and password, Facebook, Twitter, and more."}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"http-headers-and-cookies",children:"HTTP headers and Cookies"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"HTTP is a stateless protocol. This means that each request is independent of the other. The server does not know if two requests are coming from the same client. This is where cookies and sessions come in. Cookies and sessions are used to store information about the user. This information can be used to identify the user or store user preferences."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"HTTP head\nHTTP headers let the client and the server pass additional information with an HTTP request or response. An HTTP header consists of its case-insensitive name followed by a colon (:), then by its value. Whitespace before the value is ignored."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Cookies\nCookies are small pieces of data that are stored on the client-side and are sent to the server with every request. Cookies are used to store information about the user. This information can be used to identify the user or store user preferences. Cookies are stored in the browser and remain there until they expire or are deleted."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Sessions\nSessions are used to store user data on the ",(0,t.jsx)(s.strong,{children:"server-side"}),". Unlike cookies, sessions are not stored on the client-side. A session is created on the server-side every time a user visits a website. The session data is stored on the server and the session ID is sent to the client as a cookie. The session ID cookie is then sent back to the server with every request. The server uses the session ID to retrieve the session data. The session data is stored on the server and not on the client-side. This makes sessions more secure than cookies."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"middleware",children:"middleware"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application\u2019s request-response cycle. The next middleware function is commonly denoted by a variable named next."}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"// middleware function\nfunction myMiddleware(req, res, next) {\n  // do something\n  next();\n}\n"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Global middleware"}),"\n",(0,t.jsx)(s.li,{children:"Global middleware is defined on the app object and is used to modify the request and the response objects. Global middleware is called in the order they are defined on the app object."}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"// global middleware\napp.use(function(req, res, next) {\n  // do something\n  next();\n});\n"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Route middleware"}),"\n",(0,t.jsx)(s.li,{children:"Route middleware is defined on the router object and is used to modify the request and the response objects. Route middleware is called in the order they are defined on the router object."}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"// route middleware\nrouter.use(function(req, res, next) {\n  // do something\n  next();\n});\n"})}),"\n",(0,t.jsx)(s.h3,{id:"express-session",children:"express session"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://www.npmjs.com/package/express-session",children:"express-session"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"express-session is a middleware for ExpressJS. It is used to manage sessions. A session is a place to store data that you want access to across requests. Each user that visits your website has a unique session. You can use sessions to store and access user data as they browse your application."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>i});var t=n(7294);const r={},o=t.createContext(r);function i(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);