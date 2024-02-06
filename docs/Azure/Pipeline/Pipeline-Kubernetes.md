# Azure pipeline for Kubernetes(Digital Ocean)

## Introduction

This document describes how to create a pipeline in Azure DevOps for deploying a Kubernetes application.

## Prerequisites

- Azure DevOps account
- DigitalOcean account
- DigitalOcean Kubernetes cluster

## Steps

1. Create a new pipeline in Azure DevOps.
2. Select the repository where the application code is stored.
3. Select the pipeline type.
4. Configure the pipeline.
5. Save and run the pipeline.

code:

```yaml
# Optimized Azure Pipeline Configuration for CI/CD with Docker

trigger:
  - master

resources:
  - repo: self

variables:
  - group: "digital-ocean-credentials"
  - name: tag
    value: $(Build.BuildId)
  - name: repositoryUrl
    value: "registry.digitalocean.com/esv-analytics"
  - name: serviceAppImage
    value: "service-app"
  - name: webAppImage
    value: "web-app"
  - name: sshPort
    value: "18765"

stages:
  - stage: Build
    displayName: Build and Push Docker Images
    jobs:
      - job: Build
        displayName: Build Images
        pool:
          vmImage: ubuntu-latest
        steps:
          - script: docker compose build
            displayName: "Docker Compose Build"

          - script: |
              docker login $(repositoryUrl) -u $(token) -p $(token)
              docker tag $(serviceAppImage):latest $(repositoryUrl)/$(serviceAppImage):$(tag)
              docker tag $(webAppImage):latest $(repositoryUrl)/$(webAppImage):$(tag)
              docker push $(repositoryUrl)/$(serviceAppImage):$(tag)
              docker push $(repositoryUrl)/$(webAppImage):$(tag)
            displayName: "Push Docker Images"

  - stage: Deploy_k8s
    displayName: Deploy to Kubernetes
    jobs:
      - job: Deploy
        displayName: Deploy to Kubernetes Cluster
        pool:
          vmImage: ubuntu-latest
        steps:
          - task: DownloadSecureFile@1
            displayName: "Download Kubernetes Configuration"
            name: kubeConfig
            inputs:
              secureFile: "k8s-1-28-2-do-0-lon1-1705409907630-kubeconfig.yaml"

          - script: |
              echo "Configure kubectl"
              mkdir -p ~/.kube
              cp $(kubeConfig.secureFilePath) ~/.kube/config
              chmod 600 ~/.kube/config
            displayName: "Setup kubectl"

          - script: |
              echo "Replace Image Tags in Kubernetes Manifests"
              sed -i 's/\${IMAGE_TAG}/$(tag)/g' k8s/service-app-deployment.yml
              sed -i 's/\${IMAGE_TAG}/$(tag)/g' k8s/web-app-deployment.yml
            displayName: "Replace Image Tags"

          - script: |
              echo "Deploying to Kubernetes Cluster"
              kubectl apply -f k8s/service-app-deployment.yml
              kubectl apply -f k8s/web-app-deployment.yml
              kubectl apply -f k8s/redis-deployment.yml
              # kubectl apply -f k8s/mongo-deployment.yml
              # Add more kubectl apply commands for each of your Kubernetes manifest files
            displayName: "Apply Kubernetes Manifests"
```

## Conclusion

In this document, we have learned how to create a pipeline in Azure DevOps for deploying a Kubernetes application. This pipeline will help you automate the deployment process and ensure that your application is deployed consistently and reliably.
