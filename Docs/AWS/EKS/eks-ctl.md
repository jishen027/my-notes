### EKSCTL

eksctl create

```sh
eksctl create cluster \
--nodegroup-name eks-nodegroup \
--region eu-west-2 \
--name eks-cluster \
--version 1.14 \
--node-type t2.micro \
--nodes 2 \
--nodes-min 1 \
--nodes-max 3 \
--managed
```

- [x] [eksctl](https://eksctl.io/) is a simple CLI tool for creating clusters on EKS - Amazon's new managed Kubernetes service for EC2. It is written in Go, and uses CloudFormation.

kubectl get nodes

- [x] The kubectl get nodes command returns a list of all nodes in the current Kubernetes namespace. The output includes the node name, status, roles, version, and internal IP address for each node.

```sh
kubectl get nodes
```

kubectl get pods

- [x] The kubectl get pods command returns a list of all pods in the current Kubernetes namespace. The output includes the pod name, status, and any associated containers.

```sh
kubectl get pods
```

kubectl get svc

- [x] The kubectl get svc command returns a list of all services in the current Kubernetes namespace. The output includes the service name, type, cluster IP, external IP (if applicable), and port(s).

```sh
kubectl get svc
```

kubectl get deployments

- [x] The kubectl get deployments command returns a list of all deployments in the current Kubernetes namespace. The output includes the deployment name, number of desired pods, number of currently running pods, and deployment status.

```sh
kubectl get deployments
```

kubectl get all

- [x] The kubectl get all command returns a list of all resources in the current Kubernetes namespace. The output includes the resource type, name, and status of each resource.

```sh
kubectl get all
```

eksctl delete

- [x] The eksctl delete cluster command deletes the cluster, including the VPC, subnets, and other related resources.

```sh
eksctl delete cluster --name eks-cluster
```
