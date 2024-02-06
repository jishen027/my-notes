# Use Azure Pipeline to Deploy Vite Vue App to Siteground(Share Hosting)

### Create Siteground SSH Key

1. Login to Siteground
2. Go to Devs > SSH Keys Manager
3. Click Generate New Key

### Create Azure Pipeline

1. Login to Azure DevOps
2. Create Azure_Pipeline.yml file for the project
3. Add the following code to the file

```yaml
# Node.js with Vue
# Build a Node.js project that uses Vue.
# Add steps that analyze code, save build artifacts, deploy, and more:
# https://docs.microsoft.com/azure/devops/pipelines/languages/javascript

trigger:
  - master

pool:
  vmImage: ubuntu-latest

# Variables
variables:
  - group: "sshKeyPassphrase" # Link the variable group
  - name: "frontendDir"
    value: "frontend"
  - name: "backendDir"
    value: "backend"
  - name: "remoteServer"
    value: "ssh.the360expo.com"
  - name: "remoteUser"
    value: "u413-vckbx5xu4xp8"
  - name: "remotePath"
    value: "/home/u413-vckbx5xu4xp8/www/virtualconsultation.the360expo.com/public_html"
  - name: "remoteServerPath"
    value: "/home/u413-vckbx5xu4xp8/www/virtualconsultation.the360expo.com/vpc_server"
  - name: "sshKeySecureFileName"
    value: "vpc-corn-job-pri.pub"

# Install Node.js
steps:
  - task: NodeTool@0
    inputs:
      versionSpec: "14.x"
    displayName: "Install Node.js"

  # Download SSH Key
  - task: DownloadSecureFile@1
    name: sshKey
    displayName: "Download SSH Key"
    inputs:
      secureFile: "vpc-corn-job-pri.pub" # Make sure this is the private key

  # Install and Build Frontend
  - script: |
      cd $(frontendDir)
      cp .env.prod .env
      npm install
      npm run build
    displayName: "npm install and build"

  # SCP Frontend dist folder to Remote Server
  - script: |
      echo "Secure File Path: $(sshKey.secureFilePath)"
      chmod 600 $(sshKey.secureFilePath)  # Fix permissions
      eval $(ssh-agent -s)  # Start the SSH agent
      mkdir -p ~/.ssh  # Ensure the .ssh directory exists
      touch ~/.ssh/known_hosts  # Ensure the known_hosts file exists
      ssh-keyscan -p 18765 $(remoteServer) >> ~/.ssh/known_hosts  # Add the remote server to the known hosts file
      echo "$(corn_ssh_key_passphrase)" | ssh-add $(sshKey.secureFilePath)  # Add the SSH key to the agent
      sshpass -p "$(corn_ssh_key_passphrase)" scp -P 18765 -r $(frontendDir)/dist/* $(remoteUser)@$(remoteServer):$(remotePath)  # Use sshpass to pass the passphrase and perform the SCP operation
    displayName: "SCP Frontend dist folder to Remote Server"
    env:
      corn_ssh_key_passphrase: $(corn_ssh_key_passphrase) # Passphrase for the SSH key
```
