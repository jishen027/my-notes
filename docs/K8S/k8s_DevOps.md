## K8S DevOps
- [K8S DevOps](#k8s-devops)
  - [k8s forward port](#k8s-forward-port)
  - [k8s get all](#k8s-get-all)
  - [k8s get logs](#k8s-get-logs)
  - [k8s get shell access](#k8s-get-shell-access)
  - [k8s delete cluster](#k8s-delete-cluster)
  - [k8s delete all resources](#k8s-delete-all-resources)
  - [k8s delete all resources from a directory](#k8s-delete-all-resources-from-a-directory)

### k8s forward port
```sh
kubectl port-forward <pod-name> <local-port>:<pod-port>
```

### k8s get all
```sh
kubectl get all
```

### k8s get logs
```sh
kubectl logs -f <pod-name>
```

### k8s get shell access
```sh
kubectl exec -it <pod-name> -- /bin/bash
```

### k8s delete cluster
```sh
eksctl delete cluster --name eks-cluster
```

### k8s delete all resources
```sh
kubectl delete all --all
```

### k8s delete all resources from a directory
```sh
kubectl delete -f ./k8s
```

### k8s delete all resources from a file
```sh
kubectl delete -f deployment.yaml
```

<!-- markdownlint-enable MD013 -->