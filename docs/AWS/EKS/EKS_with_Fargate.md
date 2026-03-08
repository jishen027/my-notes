# EKS with Fargate

This document covers setting up and managing Amazon EKS clusters using AWS Fargate profiles.

## Prerequisites

- `eksctl` installed
- AWS CLI configured
- `kubectl` installed

## Creating an EKS Cluster with Fargate Profile

You can create an EKS cluster and automatically create a Fargate profile for default namespaces using `eksctl`.

```bash
eksctl create cluster --name my-cluster --region us-east-1 --fargate
```

## Creating a Fargate Profile for an Existing Cluster

If you already have a cluster, you can add a Fargate profile to it:

```bash
eksctl create fargateprofile --cluster my-cluster --name my-profile --namespace my-namespace
```