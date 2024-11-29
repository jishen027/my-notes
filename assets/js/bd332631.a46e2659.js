"use strict";(self.webpackChunkmd_note=self.webpackChunkmd_note||[]).push([[6919],{6661:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var r=i(5893),l=i(1151);const t={},o="Create Azure Pipeline for Digital Ocean using Docker and SSH",a={id:"Azure/Pipeline/Pipeline_Digital_Ocean",title:"Create Azure Pipeline for Digital Ocean using Docker and SSH",description:"1. Login to Azure DevOps",source:"@site/docs/Azure/Pipeline/Pipeline_Digital_Ocean.md",sourceDirName:"Azure/Pipeline",slug:"/Azure/Pipeline/Pipeline_Digital_Ocean",permalink:"/my-notes/docs/Azure/Pipeline/Pipeline_Digital_Ocean",draft:!1,unlisted:!1,editUrl:"https://github.com/jishen027/my-notes/tree/main/docs/docs/Azure/Pipeline/Pipeline_Digital_Ocean.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Azure pipeline for Kubernetes(Digital Ocean)",permalink:"/my-notes/docs/Azure/Pipeline/Pipeline-Kubernetes"},next:{title:"Use Azure Pipeline to Deploy Vite Vue App to Siteground(Share Hosting)",permalink:"/my-notes/docs/Azure/Pipeline/Pipeline_Siteground"}},s={},c=[{value:"Create Digital Ocean Droplet",id:"create-digital-ocean-droplet",level:3},{value:"Create Azure Pipeline Variable Group",id:"create-azure-pipeline-variable-group",level:3},{value:"Create docker compose file for app",id:"create-docker-compose-file-for-app",level:3},{value:"Create Dockerfile for web-app",id:"create-dockerfile-for-web-app",level:3},{value:"Create Dockerfile for service-app",id:"create-dockerfile-for-service-app",level:3},{value:"Create nginx config file for web-app",id:"create-nginx-config-file-for-web-app",level:3}];function d(e){const n={code:"code",h1:"h1",h3:"h3",li:"li",ol:"ol",pre:"pre",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"create-azure-pipeline-for-digital-ocean-using-docker-and-ssh",children:"Create Azure Pipeline for Digital Ocean using Docker and SSH"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Login to Azure DevOps"}),"\n",(0,r.jsx)(n.li,{children:"Create Azure_Pipeline.yml file for the project"}),"\n",(0,r.jsx)(n.li,{children:"Add the following code to the file"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"# Docker\n# Build a Docker image\n# https://docs.microsoft.com/azure/devops/pipelines/languages/docker\n\ntrigger:\n- master\n\nresources:\n- repo: self\n\nvariables:\n- group: 'digital-ocean-credentials'\n- name: tag\n  value: $(Build.BuildId)\n\n\nstages:\n- stage: Build\n  displayName: Build image\n  jobs:\n  - job: Build\n    displayName: Build\n    pool:\n      vmImage: ubuntu-latest\n    steps:\n    - script: docker compose build\n      displayName: 'Docker compose build'\n\n    - script: |\n        docker login registry.digitalocean.com -u $(token) -p $(token)\n        docker tag service-app:latest registry.digitalocean.com/esv-analytics/service-app:$(tag)\n        docker tag web-app:latest registry.digitalocean.com/esv-analytics/web-app:$(tag)\n        docker push registry.digitalocean.com/esv-analytics/service-app:$(tag)\n        docker push registry.digitalocean.com/esv-analytics/web-app:$(tag)\n      displayName: 'Docker push'\n\n    - task: DownloadSecureFile@1\n      displayName: 'Download DigitalOcean SSH key'\n      name: sshKey\n      inputs:\n        secureFile: 'digital-ocean-ssh-key'\n\n    # pull the images from the registry and run them on the DigitalOcean droplet\n    - script: |\n        echo \"Secure File Path: $(sshKey.secureFilePath)\"\n        chmod 600 $(sshKey.secureFilePath)  # Fix permissions\n        eval $(ssh-agent -s)  # Start the SSH agent\n        mkdir -p ~/.ssh  # Ensure the .ssh directory exists\n        touch ~/.ssh/known_hosts  # Ensure the known_hosts file exists\n        ssh-keyscan -p 18765 $(dropletIP) >> ~/.ssh/known_hosts  # Add the remote server to the known hosts file\n        echo \"$(passphrase)\" | ssh-add $(sshKey.secureFilePath)  # Add the SSH key to the agent\n        ssh -o StrictHostKeyChecking=no root@$(dropletIP) \"docker login registry.digitalocean.com -u $(token) -p $(token)\"\n        ssh -o StrictHostKeyChecking=no root@$(dropletIP) \"docker pull registry.digitalocean.com/esv-analytics/service-app:$(tag)\"\n        ssh -o StrictHostKeyChecking=no root@$(dropletIP) \"docker pull registry.digitalocean.com/esv-analytics/web-app:$(tag)\"\n        ssh -o StrictHostKeyChecking=no root@$(dropletIP) \"cd /root/workspace/esv_matomo_analytics && docker compose down && export IMAGE_TAG=$(tag) && docker compose up -d --build\"\n      displayName: 'Deploy to DigitalOcean'\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"Create a new variable group called digital-ocean-credentials"}),"\n",(0,r.jsx)(n.li,{children:"Add the following variables to the group"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"token: <Digital Ocean Token>\npassphrase: <SSH Key Passphrase>\ndropletIP: <Droplet IP Address>\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"6",children:["\n",(0,r.jsx)(n.li,{children:"Create a new secure file called digital-ocean-ssh-key"}),"\n",(0,r.jsx)(n.li,{children:"Add the SSH key to the file"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"create-digital-ocean-droplet",children:"Create Digital Ocean Droplet"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Login to Digital Ocean"}),"\n",(0,r.jsx)(n.li,{children:"Create a new droplet"}),"\n",(0,r.jsx)(n.li,{children:"Select Ubuntu 20.04"}),"\n",(0,r.jsx)(n.li,{children:"Select the $5/mo plan"}),"\n",(0,r.jsx)(n.li,{children:"Select the datacenter region"}),"\n",(0,r.jsx)(n.li,{children:"Select the SSH key"}),"\n",(0,r.jsx)(n.li,{children:"Create the droplet"}),"\n",(0,r.jsx)(n.li,{children:"Copy the droplet IP address"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"create-azure-pipeline-variable-group",children:"Create Azure Pipeline Variable Group"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Login to Azure DevOps"}),"\n",(0,r.jsx)(n.li,{children:"Go to Project Settings > Pipelines > Variable Groups"}),"\n",(0,r.jsx)(n.li,{children:"Create a new variable group"}),"\n",(0,r.jsx)(n.li,{children:"Add variables"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"create-docker-compose-file-for-app",children:"Create docker compose file for app"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Create docker-compose.yml file"}),"\n",(0,r.jsx)(n.li,{children:"Add the following code to the file"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'version: \'3.8\'\nservices: \n  web-app: \n    build: \n      context: ./web-app\n      dockerfile: Dockerfile\n    image: web-app:latest\n    restart: always\n    ports:\n      - "80:80"\n    environment:\n      - API_URL=http://service-app:3000\n    depends_on:\n      - service-app\n\n  service-app:\n    build: \n      context: ./service-app\n      dockerfile: Dockerfile\n    image: service-app:latest\n    restart: always\n    ports:\n      - "3000:3000"\n    environment:\n      - MONGO_URI=mongodb://root:153698ads@mongo:27017/esv_analytics_db?authSource=admin\n    depends_on:\n      - mongo\n\n  mongo:\n    image: mongo\n    restart: always\n    ports:\n      - "27017:27017"\n    environment:\n      - MONGO_INITDB_ROOT_USERNAME=root\n      - MONGO_INITDB_ROOT_PASSWORD=153698ads\n      - MONGO_INITDB_DATABASE=esv_analytics_db\n    volumes:\n      - mongo-data:/data/db\n  \nvolumes:\n  mongo-data:\n\n'})}),"\n",(0,r.jsx)(n.h3,{id:"create-dockerfile-for-web-app",children:"Create Dockerfile for web-app"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Create Dockerfile file"}),"\n",(0,r.jsx)(n.li,{children:"Add the following code to the file"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dockerfile",children:"FROM node:alpine as builder\n\nWORKDIR /app\nCOPY package.json .\nRUN npm install\nCOPY . .\nRUN npm run build\n\nFROM nginx\nEXPOSE 80\n\n# copy the default.conf file to the nginx container\nCOPY ./nginx/default.conf /etc/nginx/conf.d/default.conf\n\nCOPY --from=builder /app/dist /usr/share/nginx/html\n  \n"})}),"\n",(0,r.jsx)(n.h3,{id:"create-dockerfile-for-service-app",children:"Create Dockerfile for service-app"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Create Dockerfile file"}),"\n",(0,r.jsx)(n.li,{children:"Add the following code to the file"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dockerfile",children:'# Express.js app\nFROM node:18-alpine as builder\nWORKDIR /app\nCOPY package.json .\nRUN npm install\nCOPY . .\n\nEXPOSE 3000\n\nCMD ["npm", "start"]\n'})}),"\n",(0,r.jsx)(n.h3,{id:"create-nginx-config-file-for-web-app",children:"Create nginx config file for web-app"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Create nginx folder"}),"\n",(0,r.jsx)(n.li,{children:"Create default.conf file"}),"\n",(0,r.jsx)(n.li,{children:"Add the following code to the file"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-conf",children:"server {\n    listen 80;\n\n    location / {\n        root   /usr/share/nginx/html;\n        index  index.html index.htm;\n        try_files $uri $uri/ /index.html;\n    }\n\n    error_page   500 502 503 504  /50x.html;\n    location = /50x.html {\n        root   /usr/share/nginx/html;\n    }\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>o});var r=i(7294);const l={},t=r.createContext(l);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);