# Kubernetes

```
1. use eksctl or aws console to create a cluster, eksctl is a cli tool for creating clusters on EKS, it is written in Go, and uses CloudFormation.
2. use kubectl to get nodes, pods, services, deployments, etc.
```

1. Create Cluster

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

2. Get Nodes

```sh
kubectl get nodes
```

3. Get Pods

```sh
kubectl get pods
```

4. Get Services

```sh
kubectl get svc
```

5. Get Deployments

```sh
kubectl get deployments
```

6. write a deployment.yaml file for your application

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
  labels:
    app: my-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
        - name: my-app
          image: my-app:latest
          ports:
            - containerPort: 8080
```

7. Deploy your application

```sh
# single file deployment
kubectl apply -f deployment.yaml

# multiple file deployment
kubectl apply -f deployment.yaml -f service.yaml

# deployment from a directory, if you have multiple files in a directory
kubectl apply -f ./k8s
```

8. Get all resources

```sh
kubectl get all
```

9. Get logs

```sh
kubectl logs -f <pod-name>
```

10. Get shell access

```sh
kubectl exec -it <pod-name> -- /bin/bash
```

11. Delete Cluster

```sh
eksctl delete cluster --name eks-cluster
```

12. Delete all resources

```sh
kubectl delete all --all
```

13. Delete all resources from a directory

```sh
kubectl delete -f ./k8s
```

14. Delete all resources from a file

```sh
kubectl delete -f deployment.yaml
```
