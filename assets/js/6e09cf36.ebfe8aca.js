"use strict";(self.webpackChunkmd_note=self.webpackChunkmd_note||[]).push([[9588],{4986:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var r=t(5893),n=t(1151);const i={},d="Install Redis with Docker",o={id:"Redis/Install_Redis_Docker",title:"Install Redis with Docker",description:"redis stack is a redis server with redis commander, it is a web UI for redis, it is running on port 8001",source:"@site/docs/Redis/Install_Redis_Docker.md",sourceDirName:"Redis",slug:"/Redis/Install_Redis_Docker",permalink:"/my-notes/docs/Redis/Install_Redis_Docker",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Redis/Install_Redis_Docker.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"React Redux Basic",permalink:"/my-notes/docs/React/Redux/React_Redux_Basic"},next:{title:"Redis Basics",permalink:"/my-notes/docs/Redis/Redis_note"}},c={},a=[];function l(e){const s={code:"code",h1:"h1",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"install-redis-with-docker",children:"Install Redis with Docker"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest\n"})}),"\n",(0,r.jsx)(s.p,{children:"redis stack is a redis server with redis commander, it is a web UI for redis, it is running on port 8001"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"docker run -d --name redis-stack-server -p 6379:6379 redis/redis-stack-server:latest\n"})}),"\n",(0,r.jsx)(s.p,{children:"redis stack server is a redis server without redis commander, it is running on port 6379"})]})}function u(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,s,t)=>{t.d(s,{Z:()=>o,a:()=>d});var r=t(7294);const n={},i=r.createContext(n);function d(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);