"use strict";(self.webpackChunkmd_note=self.webpackChunkmd_note||[]).push([[9674],{8786:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>t,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var c=r(5893),s=r(1151);const a={},t=void 0,o={id:"Docker/docker-cheatsheet",title:"docker-cheatsheet",description:"this is a docker cheatsheet",source:"@site/docs/Docker/docker-cheatsheet.md",sourceDirName:"Docker",slug:"/Docker/docker-cheatsheet",permalink:"/docs/Docker/docker-cheatsheet",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Docker/docker-cheatsheet.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"create_image",permalink:"/docs/Docker/create_image"},next:{title:"docker-compose",permalink:"/docs/Docker/docker-compose/"}},i={},d=[{value:"this is a docker cheatsheet",id:"this-is-a-docker-cheatsheet",level:3}];function l(e){const n={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h3,{id:"this-is-a-docker-cheatsheet",children:"this is a docker cheatsheet"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"pull a image from remote docker repo"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"docker pull ubuntu\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"run the image to generate a container"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"docker run -it ubuntu /bin/bash\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"show all containers"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"docker ps \nor\ndocker ps -a\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"start a container"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"docker start container_id \n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"running in background"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"docker run -d --name container_name ubuntu /bin/bash\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"stop a container"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"docker stop container_id\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"restart a container"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"docker restart container_id\n"})}),"\n",(0,c.jsx)(n.p,{children:"classic command"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"-P (random port)\n-p 5000:5000 (mapping app port 5000 to server port 5000)\n-d (detach running app on background)\n-it (interactive terminal)\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"remove container"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"docker rm container_id\ndocker rm -f container_id (force remove container)\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"look up container process"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"docker top container_id or name\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>t});var c=r(7294);const s={},a=c.createContext(s);function t(e){const n=c.useContext(a);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),c.createElement(a.Provider,{value:n},e.children)}}}]);