"use strict";(self.webpackChunkmd_note=self.webpackChunkmd_note||[]).push([[9173],{8965:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var i=s(5893),t=s(1151);const r={},l="EC2 compute service",c={id:"AWS/Certificates/Developer/EC2",title:"EC2 compute service",description:"EC2, AMI, and Marketplace",source:"@site/docs/AWS/Certificates/Developer/EC2.md",sourceDirName:"AWS/Certificates/Developer",slug:"/AWS/Certificates/Developer/EC2",permalink:"/my-notes/docs/AWS/Certificates/Developer/EC2",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/AWS/Certificates/Developer/EC2.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Amplify",permalink:"/my-notes/docs/AWS/Amplify/"},next:{title:"Service Domain",permalink:"/my-notes/docs/AWS/Certificates/Developer/ServiceDomains"}},a={},o=[{value:"EC2, AMI, and Marketplace",id:"ec2-ami-and-marketplace",level:3},{value:"EC2 Instance Classes",id:"ec2-instance-classes",level:3},{value:"AWS Rest API",id:"aws-rest-api",level:3}];function d(e){const n={h1:"h1",h3:"h3",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"ec2-compute-service",children:"EC2 compute service"}),"\n",(0,i.jsx)(n.h3,{id:"ec2-ami-and-marketplace",children:"EC2, AMI, and Marketplace"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Instance"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Instance is a virtual selfcontained server that runs on the EC2 service. It is a virtual machine that can be configured to run any operating system and software."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"AMI"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"AMI stands for Amazon Machine Image. It is a snapshot of an instance that can be used to create new instances. AMI can be public or private."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Instance Anatomy"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Execution Environment: CPU, Memory, Network"}),"\n",(0,i.jsxs)(n.li,{children:["File System: Storage for the instance","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Instance Storage: Temporary storage that is lost when the instance is stopped"}),"\n",(0,i.jsx)(n.li,{children:"EBS: Elastic Block Store, persistent storage that can be detached and reattached to instances"}),"\n",(0,i.jsx)(n.li,{children:"EFS: Elastic File System, network file system that can be attached to multiple instances"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Lanching AMI Instance"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Instance Volume Backed AMI"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Can not be stopped"}),"\n",(0,i.jsx)(n.li,{children:"Can only be terminated or restarted"}),"\n",(0,i.jsx)(n.li,{children:"Slower boot time"}),"\n",(0,i.jsx)(n.li,{children:"Data transfer from the s3 on the first boot"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"EBS Backed AMI"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Can be stopped"}),"\n",(0,i.jsx)(n.li,{children:"Can be terminated or restarted"}),"\n",(0,i.jsx)(n.li,{children:"Faster boot time"}),"\n",(0,i.jsx)(n.li,{children:"Data transfer from the EBS on the first boot"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"AMI Visibility"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Public AMI"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Available to all AWS users"}),"\n",(0,i.jsx)(n.li,{children:"Can be used to launch instances"}),"\n",(0,i.jsx)(n.li,{children:"Can be copied to create private AMIs"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Private AMI"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Available to the owner"}),"\n",(0,i.jsx)(n.li,{children:"Can be shared with other AWS accounts"}),"\n",(0,i.jsx)(n.li,{children:"Can be copied to create other private AMIs"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"ec2-instance-classes",children:"EC2 Instance Classes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"On-demand Instances"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Pay for what you use"}),"\n",(0,i.jsx)(n.li,{children:"No commitment"}),"\n",(0,i.jsx)(n.li,{children:"Easy to scale up and down"}),"\n",(0,i.jsx)(n.li,{children:"Suitable for unpredictable workloads"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Reserved Instances"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Commitment for a period of time"}),"\n",(0,i.jsx)(n.li,{children:"Commitment ranges from 1 to 3 years"}),"\n",(0,i.jsx)(n.li,{children:"Discounted pricing compared to on-demand instances"}),"\n",(0,i.jsx)(n.li,{children:"Good for predictable workloads"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Spot Instances"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Bid for unused EC2 capacity"}),"\n",(0,i.jsx)(n.li,{children:"Pay the current spot price"}),"\n",(0,i.jsx)(n.li,{children:"Good for workloads that are flexible with start and end times"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"aws-rest-api",children:"AWS Rest API"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["AWS SDKs","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Software Development Kits"}),"\n",(0,i.jsx)(n.li,{children:"Available for multiple programming languages"}),"\n",(0,i.jsx)(n.li,{children:"Simplifies the interaction with AWS services"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>l});var i=s(7294);const t={},r=i.createContext(t);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);