# Create Azure Pipeline for Digital Ocean using Docker and SSH
1. Login to Azure DevOps
2. Create Azure_Pipeline.yml file for the project
3. Add the following code to the file
```yaml
# Docker
# Build a Docker image
# https://docs.microsoft.com/azure/devops/pipelines/languages/docker

trigger:
- master

resources:
- repo: self

variables:
- group: 'digital-ocean-credentials'
- name: tag
  value: $(Build.BuildId)


stages:
- stage: Build
  displayName: Build image
  jobs:
  - job: Build
    displayName: Build
    pool:
      vmImage: ubuntu-latest
    steps:
    - script: docker compose build
      displayName: 'Docker compose build'

    - script: |
        docker login registry.digitalocean.com -u $(token) -p $(token)
        docker tag service-app:latest registry.digitalocean.com/esv-analytics/service-app:$(tag)
        docker tag web-app:latest registry.digitalocean.com/esv-analytics/web-app:$(tag)
        docker push registry.digitalocean.com/esv-analytics/service-app:$(tag)
        docker push registry.digitalocean.com/esv-analytics/web-app:$(tag)
      displayName: 'Docker push'

    - task: DownloadSecureFile@1
      displayName: 'Download DigitalOcean SSH key'
      name: sshKey
      inputs:
        secureFile: 'digital-ocean-ssh-key'

    # pull the images from the registry and run them on the DigitalOcean droplet
    - script: |
        echo "Secure File Path: $(sshKey.secureFilePath)"
        chmod 600 $(sshKey.secureFilePath)  # Fix permissions
        eval $(ssh-agent -s)  # Start the SSH agent
        mkdir -p ~/.ssh  # Ensure the .ssh directory exists
        touch ~/.ssh/known_hosts  # Ensure the known_hosts file exists
        ssh-keyscan -p 18765 $(dropletIP) >> ~/.ssh/known_hosts  # Add the remote server to the known hosts file
        echo "$(passphrase)" | ssh-add $(sshKey.secureFilePath)  # Add the SSH key to the agent
        ssh -o StrictHostKeyChecking=no root@$(dropletIP) "docker login registry.digitalocean.com -u $(token) -p $(token)"
        ssh -o StrictHostKeyChecking=no root@$(dropletIP) "docker pull registry.digitalocean.com/esv-analytics/service-app:$(tag)"
        ssh -o StrictHostKeyChecking=no root@$(dropletIP) "docker pull registry.digitalocean.com/esv-analytics/web-app:$(tag)"
        ssh -o StrictHostKeyChecking=no root@$(dropletIP) "cd /root/workspace/esv_matomo_analytics && docker compose down && export IMAGE_TAG=$(tag) && docker compose up -d --build"
      displayName: 'Deploy to DigitalOcean'
```

4. Create a new variable group called digital-ocean-credentials
5. Add the following variables to the group
```yaml
token: <Digital Ocean Token>
passphrase: <SSH Key Passphrase>
dropletIP: <Droplet IP Address>
```
6. Create a new secure file called digital-ocean-ssh-key
7. Add the SSH key to the file

### Create Digital Ocean Droplet
1. Login to Digital Ocean
2. Create a new droplet
3. Select Ubuntu 20.04
4. Select the $5/mo plan
5. Select the datacenter region
6. Select the SSH key
7. Create the droplet
8. Copy the droplet IP address


### Create Azure Pipeline Variable Group
1. Login to Azure DevOps
2. Go to Project Settings > Pipelines > Variable Groups
3. Create a new variable group
4. Add variables

### Create docker compose file for app
1. Create docker-compose.yml file
2. Add the following code to the file
```yaml
version: '3.8'
services: 
  web-app: 
    build: 
      context: ./web-app
      dockerfile: Dockerfile
    image: web-app:latest
    restart: always
    ports:
      - "80:80"
    environment:
      - API_URL=http://service-app:3000
    depends_on:
      - service-app

  service-app:
    build: 
      context: ./service-app
      dockerfile: Dockerfile
    image: service-app:latest
    restart: always
    ports:
      - "3000:3000"
    environment:
      - MONGO_URI=mongodb://root:153698ads@mongo:27017/esv_analytics_db?authSource=admin
    depends_on:
      - mongo

  mongo:
    image: mongo
    restart: always
    ports:
      - "27017:27017"
    environment:
      - MONGO_INITDB_ROOT_USERNAME=root
      - MONGO_INITDB_ROOT_PASSWORD=153698ads
      - MONGO_INITDB_DATABASE=esv_analytics_db
    volumes:
      - mongo-data:/data/db
  
volumes:
  mongo-data:

```

### Create Dockerfile for web-app
1. Create Dockerfile file
2. Add the following code to the file
```dockerfile
FROM node:alpine as builder

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
EXPOSE 80

# copy the default.conf file to the nginx container
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html
  
```

### Create Dockerfile for service-app
1. Create Dockerfile file
2. Add the following code to the file
```dockerfile
# Express.js app
FROM node:18-alpine as builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

### Create nginx config file for web-app
1. Create nginx folder
2. Create default.conf file
3. Add the following code to the file
```conf
server {
    listen 80;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
        try_files $uri $uri/ /index.html;
    }

    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}
```