"use strict";(self.webpackChunkmd_note=self.webpackChunkmd_note||[]).push([[4077],{1516:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var t=n(5893),o=n(1151);const c={},i="Docker registry",s={id:"Docker/Docker_registry",title:"Docker registry",description:"image: docker.io/nginx/nginx",source:"@site/docs/Docker/Docker_registry.md",sourceDirName:"Docker",slug:"/Docker/Docker_registry",permalink:"/my-notes/docs/Docker/Docker_registry",draft:!1,unlisted:!1,editUrl:"https://github.com/jishen027/my-notes/tree/main/docs/Docker/Docker_registry.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Docker engine",permalink:"/my-notes/docs/Docker/Docker_engine"},next:{title:"Docker Networking",permalink:"/my-notes/docs/Docker/Networking"}},a={},d=[];function l(e){const r={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"docker-registry",children:"Docker registry"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-cmd",children:"docker run nginx\n"})}),"\n",(0,t.jsx)(r.p,{children:"image: docker.io/nginx/nginx"}),"\n",(0,t.jsx)(r.p,{children:"Registry /User /Image"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Deploy private Registry"}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-cmd",children:"docker run -d -p 5000:5000 --name  registry registry:2\n\ndocker image tag my-image localhost:5000/my-image\n\ndocker push localhost:5000/my-image\n\ndocker pull localhost:5000/my-image\n\ndocker pull 192.168.56.100:5000/my-image\n"})})]})}function m(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>s,a:()=>i});var t=n(7294);const o={},c=t.createContext(o);function i(e){const r=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(c.Provider,{value:r},e.children)}}}]);