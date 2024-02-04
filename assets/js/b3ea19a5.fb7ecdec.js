"use strict";(self.webpackChunkmd_note=self.webpackChunkmd_note||[]).push([[6500],{5399:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>t,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>m});var c=n(5893),r=n(1151);const s={},t=void 0,a={id:"Docker/docker-compose/docker-compose",title:"docker-compose",description:"valuable commands",source:"@site/docs/Docker/docker-compose/docker-compose.md",sourceDirName:"Docker/docker-compose",slug:"/Docker/docker-compose/",permalink:"/docs/Docker/docker-compose/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Docker/docker-compose/docker-compose.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"docker-cheatsheet",permalink:"/docs/Docker/docker-cheatsheet"},next:{title:"Passport_JS",permalink:"/docs/Express/Passport_JS"}},d={},m=[{value:"valuable commands",id:"valuable-commands",level:2}];function i(e){const o={code:"code",h2:"h2",pre:"pre",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o.h2,{id:"valuable-commands",children:"valuable commands"}),"\n",(0,c.jsx)(o.pre,{children:(0,c.jsx)(o.code,{className:"language-bash",children:"# clean workspace\n\n-docker container rm $(docker container ls -aq) # remove all containers\n\n-docker rmi $(docker images -q) # remove all images\n\n"})}),"\n",(0,c.jsx)(o.pre,{children:(0,c.jsx)(o.code,{className:"language-yml",children:"version: '3.8'\nservices:\n  web:\n    build: ./frontend\n    ports:\n      - 3000:3000\n  api:\n    build: ./backend\n    ports:\n      - 3001:3001\n    environment:\n      - DB_URL: mongodb://db/db_name\n  db:\n    image: mongo:4.0-xenial\n    ports:\n      - 27017:27017\n    volumes:\n      - mongo-data:/data/db\n\nvolumes:\n  mongo-data:\n\n"})})]})}function l(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,c.jsx)(o,{...e,children:(0,c.jsx)(i,{...e})}):i(e)}},1151:(e,o,n)=>{n.d(o,{Z:()=>a,a:()=>t});var c=n(7294);const r={},s=c.createContext(r);function t(e){const o=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),c.createElement(s.Provider,{value:o},e.children)}}}]);