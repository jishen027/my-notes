"use strict";(self.webpackChunkmd_note=self.webpackChunkmd_note||[]).push([[241],{656:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var t=r(5893),s=r(1151);const o={},c="Docker Networking",i={id:"Docker/Networking",title:"Docker Networking",description:"Default networks",source:"@site/docs/Docker/Networking.md",sourceDirName:"Docker",slug:"/Docker/Networking",permalink:"/my-notes/docs/Docker/Networking",draft:!1,unlisted:!1,editUrl:"https://github.com/jishen027/my-notes/tree/main/docs/Docker/Networking.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Docker registry",permalink:"/my-notes/docs/Docker/Docker_registry"},next:{title:"Docker Cheatsheet",permalink:"/my-notes/docs/Docker/docker-cheatsheet"}},l={},d=[{value:"Default networks",id:"default-networks",level:2},{value:"Inspect Network",id:"inspect-network",level:2},{value:"Enbedded DNS",id:"enbedded-dns",level:2},{value:"Docker stirage",id:"docker-stirage",level:2},{value:"storage drivers",id:"storage-drivers",level:2}];function a(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"docker-networking",children:"Docker Networking"}),"\n",(0,t.jsx)(n.h2,{id:"default-networks",children:"Default networks"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Uer-defined network"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"create internal network"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"docker network create \\\n  -- driver bridge \\\n  -- subnet 182.18.0.0.0/16\n  -- custom-isolated-network\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"list all networkds"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"docker network list    \n"})}),"\n",(0,t.jsx)(n.p,{children:"."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"inspect-network",children:"Inspect Network"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"docker inspect network_name\n"})}),"\n",(0,t.jsx)(n.h2,{id:"enbedded-dns",children:"Enbedded DNS"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// name of the container\nmysql.connect(mysql) \n"})}),"\n",(0,t.jsx)(n.h2,{id:"docker-stirage",children:"Docker stirage"}),"\n",(0,t.jsx)(n.p,{children:"where and how docker stores data"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"folder /var/lib/docker"}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"aufs"}),"\n",(0,t.jsx)(n.li,{children:"..."}),"\n",(0,t.jsx)(n.li,{children:"..."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// create a docker volume\ndocker volume create data_volume\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// mount the volume to the app\ndocker run -v data_vloume:/var/lib/mysql mysql\n"})}),"\n",(0,t.jsx)(n.h2,{id:"storage-drivers",children:"storage drivers"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"AUFS"}),"\n",(0,t.jsx)(n.li,{children:"ZFS"}),"\n",(0,t.jsx)(n.li,{children:"BRTFS"}),"\n",(0,t.jsx)(n.li,{children:"Device Mapper"}),"\n",(0,t.jsx)(n.li,{children:"Overlay"}),"\n",(0,t.jsx)(n.li,{children:"Overlay2"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>c});var t=r(7294);const s={},o=t.createContext(s);function c(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);