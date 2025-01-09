"use strict";(self.webpackChunkmd_note=self.webpackChunkmd_note||[]).push([[4626],{1439:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>a,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var i=n(5893),o=n(1151);const s={},c="How Pipeline executions work",r={id:"AWS/CodePipeline/ExecutionsWork",title:"How Pipeline executions work",description:"Pipeline Stop",source:"@site/docs/AWS/CodePipeline/ExecutionsWork.md",sourceDirName:"AWS/CodePipeline",slug:"/AWS/CodePipeline/ExecutionsWork",permalink:"/my-notes/docs/AWS/CodePipeline/ExecutionsWork",draft:!1,unlisted:!1,editUrl:"https://github.com/jishen027/my-notes/tree/main/docs/AWS/CodePipeline/ExecutionsWork.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AWS Cli",permalink:"/my-notes/docs/AWS/Cli/"},next:{title:"EKS_with_Fargate",permalink:"/my-notes/docs/AWS/EKS/EKS_with_Fargate"}},u={},d=[{value:"Pipeline Stop",id:"pipeline-stop",level:2},{value:"How execution proceed in SUPERSEDED mode",id:"how-execution-proceed-in-superseded-mode",level:2},{value:"Rule 1: Stages are locked when an execution is being processed",id:"rule-1-stages-are-locked-when-an-execution-is-being-processed",level:3},{value:"Rule 2: Subsequent executions wait fot the stage to be unlocked",id:"rule-2-subsequent-executions-wait-fot-the-stage-to-be-unlocked",level:3},{value:"Rule 3: Waiting executions are superseeded by more recent executions",id:"rule-3-waiting-executions-are-superseeded-by-more-recent-executions",level:3}];function l(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"how-pipeline-executions-work",children:"How Pipeline executions work"}),"\n",(0,i.jsx)(t.h2,{id:"pipeline-stop",children:"Pipeline Stop"}),"\n",(0,i.jsx)(t.p,{children:"recommand use the stopand wait option to stop the pipeline execution."}),"\n",(0,i.jsx)(t.h2,{id:"how-execution-proceed-in-superseded-mode",children:"How execution proceed in SUPERSEDED mode"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["When a new execution is started, the previous execution is marked as ",(0,i.jsx)(t.code,{children:"SUPERSEDED"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"rule-1-stages-are-locked-when-an-execution-is-being-processed",children:"Rule 1: Stages are locked when an execution is being processed"}),"\n",(0,i.jsx)(t.p,{children:"Each stage can process only one execution at a time, the stage is locked while the execution is being processed. when the execution is completed, the stage is unlocked, it transitions to the next stage."}),"\n",(0,i.jsx)(t.h3,{id:"rule-2-subsequent-executions-wait-fot-the-stage-to-be-unlocked",children:"Rule 2: Subsequent executions wait fot the stage to be unlocked"}),"\n",(0,i.jsx)(t.p,{children:"When a stage is locked, subsequent executions wait for the stage to be unlocked. When the stage is unlocked, the next execution can proceed."}),"\n",(0,i.jsx)(t.h3,{id:"rule-3-waiting-executions-are-superseeded-by-more-recent-executions",children:"Rule 3: Waiting executions are superseeded by more recent executions"}),"\n",(0,i.jsx)(t.p,{children:"When a stage is unlocked, the next execution can proceed. If there are multiple waiting executions, the most recent execution proceeds first."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"rule 3",src:n(3353).Z+"",width:"999",height:"316"})})]})}function a(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},3353:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/image-f5ced7492bbf582edce97f6b6a422d28.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>c});var i=n(7294);const o={},s=i.createContext(o);function c(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);