"use strict";(self.webpackChunkmd_note=self.webpackChunkmd_note||[]).push([[6577],{3136:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>a});var o=s(5893),t=s(1151);const l={},i="Node.js Fundamentals",r={id:"Node/Node",title:"Node.js Fundamentals",description:"Introduction",source:"@site/docs/Node/Node.md",sourceDirName:"Node",slug:"/Node/",permalink:"/my-notes/docs/Node/",draft:!1,unlisted:!1,editUrl:"https://github.com/jishen027/my-notes/tree/main/docs/docs/Node/Node.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Nginx basic",permalink:"/my-notes/docs/Nginx/Nginx_basic"},next:{title:"Open AI Assistant",permalink:"/my-notes/docs/OpenAI/Assistant"}},d={},a=[{value:"Introduction",id:"introduction",level:2},{value:"Node.js Features",id:"nodejs-features",level:2},{value:"Node.js Module Wrapper Function",id:"nodejs-module-wrapper-function",level:2},{value:"Node.js Global Object",id:"nodejs-global-object",level:2},{value:"Node.js Path Module",id:"nodejs-path-module",level:2},{value:"Node.js OS Module",id:"nodejs-os-module",level:2},{value:"Node.js File System Module",id:"nodejs-file-system-module",level:2},{value:"Node.js Events Module",id:"nodejs-events-module",level:2},{value:"Node.js HTTP Module",id:"nodejs-http-module",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"nodejs-fundamentals",children:"Node.js Fundamentals"}),"\n",(0,o.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsx)(n.p,{children:"Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It is an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world."}),"\n",(0,o.jsx)(n.h2,{id:"nodejs-features",children:"Node.js Features"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Asynchronous and Event Driven"}),"\n",(0,o.jsx)(n.li,{children:"Very Fast"}),"\n",(0,o.jsx)(n.li,{children:"Single Threaded but Highly Scalable"}),"\n",(0,o.jsx)(n.li,{children:"No Buffering"}),"\n",(0,o.jsx)(n.li,{children:"License"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"nodejs-module-wrapper-function",children:"Node.js Module Wrapper Function"}),"\n",(0,o.jsx)(n.p,{children:"Before a module's code is executed, Node.js will wrap it with a function wrapper that looks like the following:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"(function(exports, require, module, __filename, __dirname) {\n    // Module code actually lives in here\n});\n"})}),"\n",(0,o.jsx)(n.h2,{id:"nodejs-global-object",children:"Node.js Global Object"}),"\n",(0,o.jsxs)(n.p,{children:["In Node.js, the global object is ",(0,o.jsx)(n.code,{children:"global"})," and all global variables are part of the global object."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"console.log(global);\n"})}),"\n",(0,o.jsx)(n.h2,{id:"nodejs-path-module",children:"Node.js Path Module"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"path"})," module provides utilities for working with file and directory paths."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const path = require('path');\n\npath.parse(__filename);\n\n"})}),"\n",(0,o.jsx)(n.h2,{id:"nodejs-os-module",children:"Node.js OS Module"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"os"})," module provides operating system-related utility methods and properties."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const OS = require('os');\n\nconst totlaMemory = OS.totalmem();\nconst freeMemory = OS.freemem();\n\n// ES6/ES2015 : ECMAScript 6\nconsole.log(`Total Memory: ${totlaMemory}`);\nconsole.log(`Free Memory: ${freeMemory}`);\n"})}),"\n",(0,o.jsx)(n.h2,{id:"nodejs-file-system-module",children:"Node.js File System Module"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"fs"})," module provides file system-related functionality."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const fs = require('fs');\n\nfs.readdir('./', function(err, files) {\n    if (err) console.log('Error', err);\n    else console.log('Result', files);\n});\n"})}),"\n",(0,o.jsx)(n.h2,{id:"nodejs-events-module",children:"Node.js Events Module"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"events"})," module provides a way of working with events. event is a signal that something has happened."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const EventEmitter = require('events');\nconst emitter = new EventEmitter();\n\n// Register a listener\nemitter.on('messageLogged', function() {\n    console.log('Listener called');\n});\n\n// Raise an event\nemitter.emit('messageLogged');\n"})}),"\n",(0,o.jsx)(n.h2,{id:"nodejs-http-module",children:"Node.js HTTP Module"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"http"})," module provides a way of working with HTTP."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const http = require('http');\n\nconst server = http.createServer((req, res) => {\n    if (req.url === '/') {\n        res.write('Hello World');\n        res.end();\n    }\n\n    if (req.url === '/api/courses') {\n        res.write(JSON.stringify([1, 2, 3]));\n        res.end();\n    }\n});\n\nserver.listen(3000);\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>i});var o=s(7294);const t={},l=o.createContext(t);function i(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);