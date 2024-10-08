# Three Way to Authenticate with AWS IoT Core

If you are working with AWS IoT Core, you will need to authenticate your service tp access the AWS IoT Core. There are three ways to authenticate with AWS IoT Core:

```python
# Create a thing using terraform

# Create a thing group
resource "aws_iot_thing_group" "truck_group" {
  name = "truck_group"

  tags = {
    terraform = "true"
  }
}

# Create a thing type
resource "aws_iot_thing_type" "sensor_TempAndDoor" {
  name = "sensor_TempAndDoor"

  # add arrtibutes to the thing type
  properties {
    searchable_attributes = ["deviceID", "powerRequired", "trailerCapacity"]
  }
}

# Create a thing
resource "aws_iot_thing" "truckSensor01" {
  thing_type_name = aws_iot_thing_type.sensor_TempAndDoor.name
  name            = "truckSensor01"
}

# Create a thing group membership
resource "aws_iot_thing_group_membership" "thing-group-membership" {
  thing_name       = aws_iot_thing.truckSensor01.name
  thing_group_name = aws_iot_thing_group.truck_group.name

  override_dynamic_group = true
}

```

## 1. X.509 Certificates

X.509 certificates are used to authenticate the device to AWS IoT Core. The device must have a certificate and a private key to authenticate with AWS IoT Core. The device sends the certificate to AWS IoT Core, and AWS IoT Core validates the certificate. If the certificate is valid, the device is authenticated.

```python
# Create a iot policy
resource "aws_iot_policy" "truckSensor01_Policy" {
  name = "truckSensor01_Policy"

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect = "Allow",
        Action = [
          "iot:Connect"
        ],
        Resource = [
          "arn:aws:iot:eu-central-1:${data.aws_caller_identity.current.account_id}:client/$${iot:ClientId}"
        ]
      },
      {
        Effect = "Allow",
        Action = [
          "iot:Publish"
        ],
        Resource = [
          "arn:aws:iot:eu-central-1:${data.aws_caller_identity.current.account_id}:topic/truck/freezer",
          "arn:aws:iot:eu-central-1:${data.aws_caller_identity.current.account_id}:topic/truck/analyze"
        ]
      }
    ]
  })
}

# Create a new certificate and download the certificate files
resource "aws_iot_certificate" "cert" {
  active = true
}

# Attach the policy to the certificate
resource "aws_iot_policy_attachment" "policy_attachment" {
  policy = aws_iot_policy.truckSensor01_Policy.name
  target = aws_iot_certificate.cert.arn
}

# Attach the certificate to the thing
resource "aws_iot_thing_principal_attachment" "example_principal_attachment" {
  thing     = aws_iot_thing.truckSensor01.name
  principal = aws_iot_certificate.cert.arn
}

```

## Use AWS Access Key and Secret Key

This way normally used for server-side applications, such as a server that sends data to AWS IoT Core. The server uses the access key and secret key to authenticate with AWS IoT Core.

1. Create an IAM user in the AWS Management Console.(the user is use for the device, so it is not a human user, it will be a programmatic user)
2. Attach the AWS managed policy `AWSIoTFullAccess` to the IAM user.
3. Create an access key and secret key for the IAM user.
4. Use the access key and secret key to authenticate the device to AWS IoT Core.

## Use AWS Cognito

AWS Cognito is a user authentication service that allows you to authenticate users to access AWS services. You can use AWS Cognito to authenticate devices to access AWS IoT Core.

## Service Role for AWS IoT Core

If you service is running on EKS, you can use the IAM role for service account to authenticate with AWS IoT Core.

To authenticate with AWS IoT Core, you need to create a service role for AWS IoT Core. The service role is used to authenticate the device to AWS IoT Core. The service role has permissions to access AWS IoT Core.

1. Create a service role for AWS IoT Core. you will need a oidc provider for the EKS cluster first, then you can create a service role for the EKS cluster.

```python
# Create a service role for AWS IoT Core
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.68.0"
    }
  }
}

provider "aws" {
  region = "xxxx"
}

data "aws_caller_identity" "current" {}

# create policy
resource "aws_iam_policy" "tf_provision_service_role_policy" {
  name        = "tf-provision-service-role-policy"
  description = "Policy for the service role"
  policy      = file("policies/service-role-policy.json")
}

# Create role
resource "aws_iam_role" "tf_provision_service_role" {
  name = "tf-provision-service-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Principal = {
          Federated = "arn:aws:iam::${data.aws_caller_identity.current.account_id}:oidc-provider/oidc.eks.${var.region}.amazonaws.com/id/${var.eks_cluster_id}"
        }
        Action = "sts:AssumeRoleWithWebIdentity"
        Condition = {
          StringEquals = {
            "oidc.eks.${var.region}.amazonaws.com/id/${var.eks_cluster_id}:sub" = "system:serviceaccount:${var.namespace}:${var.service_account_name}"
          }
        }
      }
    ]
  })
}

# Attach policy to role
resource "aws_iam_role_policy_attachment" "tf_provision_service_role_policy_attachment" {
  role       = aws_iam_role.tf_provision_service_role.name
  policy_arn = aws_iam_policy.tf_provision_service_role_policy.arn
}

output "role_arn" {
  value = aws_iam_role.tf_provision_service_role.arn
}

output "policy_arn" {
  value = aws_iam_policy.tf_provision_service_role_policy.arn
}
```

```json
// Service role policy
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "iot:*",
      "Resource": "*"
    }
  ]
}
```

2. Create a service account for the service running on EKS.

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: test-service-account
  namespace: default
  annotations:
    eks.amazonaws.com/role-arn: arn:aws:iam::{your_aws_id}:role/tf-provision-service-role
```

run the following command to create the service account.

```bash
kubectl apply -f service-account.yaml
```

3. Create a pod that uses the service account.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: test-pod
spec:
  serviceAccountName: test-service-account
  containers:
    - name: test-container
      image: nginx
```

run the following command to create the pod.

```bash
kubectl apply -f pod.yaml
```
