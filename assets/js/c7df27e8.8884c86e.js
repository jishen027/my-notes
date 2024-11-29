"use strict";(self.webpackChunkmd_note=self.webpackChunkmd_note||[]).push([[2732],{3190:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var l=s(5893),t=s(1151);const r={},c="Kubernetes",a={id:"K8S/k8s",title:"Kubernetes",description:"1. Create Cluster",source:"@site/docs/K8S/k8s.md",sourceDirName:"K8S",slug:"/K8S/",permalink:"/my-notes/docs/K8S/",draft:!1,unlisted:!1,editUrl:"https://github.com/jishen027/my-notes/tree/main/docs/docs/K8S/k8s.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Jenkins Agent Dockerfile",permalink:"/my-notes/docs/Jenkins/Jenkins_agent_dockerfile"},next:{title:"K8S DevOps",permalink:"/my-notes/docs/K8S/k8s_DevOps"}},i={},o=[];function d(e){const n={code:"code",h1:"h1",li:"li",ol:"ol",pre:"pre",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"kubernetes",children:"Kubernetes"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"1. use eksctl or aws console to create a cluster, eksctl is a cli tool for creating clusters on EKS, it is written in Go, and uses CloudFormation.\n2. use kubectl to get nodes, pods, services, deployments, etc.\n"})}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Create Cluster"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"eksctl create cluster \\\n--nodegroup-name eks-nodegroup \\\n--region eu-west-2 \\\n--name eks-cluster \\\n--version 1.14 \\\n--node-type t2.micro \\\n--nodes 2 \\\n--nodes-min 1 \\\n--nodes-max 3 \\\n--managed\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsx)(n.li,{children:"Get Nodes"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"kubectl get nodes\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"3",children:["\n",(0,l.jsx)(n.li,{children:"Get Pods"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"kubectl get pods\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"4",children:["\n",(0,l.jsx)(n.li,{children:"Get Services"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"kubectl get svc\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"5",children:["\n",(0,l.jsx)(n.li,{children:"Get Deployments"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"kubectl get deployments\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"6",children:["\n",(0,l.jsx)(n.li,{children:"write a deployment.yaml file for your application"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: my-app\n  labels:\n    app: my-app\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: my-app\n  template:\n    metadata:\n      labels:\n        app: my-app\n    spec:\n      containers:\n        - name: my-app\n          image: my-app:latest\n          ports:\n            - containerPort: 8080\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"7",children:["\n",(0,l.jsx)(n.li,{children:"Deploy your application"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"# single file deployment\nkubectl apply -f deployment.yaml\n\n# multiple file deployment\nkubectl apply -f deployment.yaml -f service.yaml\n\n# deployment from a directory, if you have multiple files in a directory\nkubectl apply -f ./k8s\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"8",children:["\n",(0,l.jsx)(n.li,{children:"Get all resources"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"kubectl get all\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"9",children:["\n",(0,l.jsx)(n.li,{children:"Get logs"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"kubectl logs -f <pod-name>\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"10",children:["\n",(0,l.jsx)(n.li,{children:"Get shell access"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"kubectl exec -it <pod-name> -- /bin/bash\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"11",children:["\n",(0,l.jsx)(n.li,{children:"Delete Cluster"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"eksctl delete cluster --name eks-cluster\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"12",children:["\n",(0,l.jsx)(n.li,{children:"Delete all resources"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"kubectl delete all --all\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"13",children:["\n",(0,l.jsx)(n.li,{children:"Delete all resources from a directory"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"kubectl delete -f ./k8s\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"14",children:["\n",(0,l.jsx)(n.li,{children:"Delete all resources from a file"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"kubectl delete -f deployment.yaml\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>c});var l=s(7294);const t={},r=l.createContext(t);function c(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);