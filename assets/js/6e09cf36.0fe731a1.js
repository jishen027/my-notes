"use strict";(self.webpackChunkmd_note=self.webpackChunkmd_note||[]).push([[9588],{4986:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var r=t(5893),n=t(1151);const i={},o=void 0,d={id:"Redis/Install_Redis_Docker",title:"Install_Redis_Docker",description:"redis stack is a redis server with redis commander, it is a web UI for redis, it is running on port 8001",source:"@site/docs/Redis/Install_Redis_Docker.md",sourceDirName:"Redis",slug:"/Redis/Install_Redis_Docker",permalink:"/my-notes/docs/Redis/Install_Redis_Docker",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Redis/Install_Redis_Docker.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"React_Redux_Basic",permalink:"/my-notes/docs/React/Redux/React_Redux_Basic"},next:{title:"Redis_note",permalink:"/my-notes/docs/Redis/Redis_note"}},c={},a=[];function u(e){const s={code:"code",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest\n"})}),"\n",(0,r.jsx)(s.p,{children:"redis stack is a redis server with redis commander, it is a web UI for redis, it is running on port 8001"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"docker run -d --name redis-stack-server -p 6379:6379 redis/redis-stack-server:latest\n"})}),"\n",(0,r.jsx)(s.p,{children:"redis stack server is a redis server without redis commander, it is running on port 6379"})]})}function l(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},1151:(e,s,t)=>{t.d(s,{Z:()=>d,a:()=>o});var r=t(7294);const n={},i=r.createContext(n);function o(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);