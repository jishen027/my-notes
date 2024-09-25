"use strict";(self.webpackChunkmd_note=self.webpackChunkmd_note||[]).push([[9457],{7445:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=t(5893),o=t(1151);const i={},a="Three Way to Authenticate with AWS IoT Core",c={id:"AWS/IOT/Authentication_with_aws_iot_core",title:"Three Way to Authenticate with AWS IoT Core",description:"If you are working with AWS IoT Core, you will need to authenticate your service tp access the AWS IoT Core. There are three ways to authenticate with AWS IoT Core:",source:"@site/docs/AWS/IOT/Authentication_with_aws_iot_core.md",sourceDirName:"AWS/IOT",slug:"/AWS/IOT/Authentication_with_aws_iot_core",permalink:"/my-notes/docs/AWS/IOT/Authentication_with_aws_iot_core",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/AWS/IOT/Authentication_with_aws_iot_core.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EKSCTL",permalink:"/my-notes/docs/AWS/EKS/eks-ctl"},next:{title:"AWS IoT",permalink:"/my-notes/docs/AWS/IOT/Started_With_AWS_IoT"}},s={},l=[{value:"1. X.509 Certificates",id:"1-x509-certificates",level:2},{value:"Use AWS Access Key and Secret Key",id:"use-aws-access-key-and-secret-key",level:2},{value:"Use AWS Cognito",id:"use-aws-cognito",level:2},{value:"Service Role for AWS IoT Core",id:"service-role-for-aws-iot-core",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"three-way-to-authenticate-with-aws-iot-core",children:"Three Way to Authenticate with AWS IoT Core"}),"\n",(0,r.jsx)(n.p,{children:"If you are working with AWS IoT Core, you will need to authenticate your service tp access the AWS IoT Core. There are three ways to authenticate with AWS IoT Core:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'# Create a thing using terraform\n\n# Create a thing group\nresource "aws_iot_thing_group" "truck_group" {\n  name = "truck_group"\n\n  tags = {\n    terraform = "true"\n  }\n}\n\n# Create a thing type\nresource "aws_iot_thing_type" "sensor_TempAndDoor" {\n  name = "sensor_TempAndDoor"\n\n  # add arrtibutes to the thing type\n  properties {\n    searchable_attributes = ["deviceID", "powerRequired", "trailerCapacity"]\n  }\n}\n\n# Create a thing\nresource "aws_iot_thing" "truckSensor01" {\n  thing_type_name = aws_iot_thing_type.sensor_TempAndDoor.name\n  name            = "truckSensor01"\n}\n\n# Create a thing group membership\nresource "aws_iot_thing_group_membership" "thing-group-membership" {\n  thing_name       = aws_iot_thing.truckSensor01.name\n  thing_group_name = aws_iot_thing_group.truck_group.name\n\n  override_dynamic_group = true\n}\n\n'})}),"\n",(0,r.jsx)(n.h2,{id:"1-x509-certificates",children:"1. X.509 Certificates"}),"\n",(0,r.jsx)(n.p,{children:"X.509 certificates are used to authenticate the device to AWS IoT Core. The device must have a certificate and a private key to authenticate with AWS IoT Core. The device sends the certificate to AWS IoT Core, and AWS IoT Core validates the certificate. If the certificate is valid, the device is authenticated."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'# Create a iot policy\nresource "aws_iot_policy" "truckSensor01_Policy" {\n  name = "truckSensor01_Policy"\n\n  policy = jsonencode({\n    Version = "2012-10-17",\n    Statement = [\n      {\n        Effect = "Allow",\n        Action = [\n          "iot:Connect"\n        ],\n        Resource = [\n          "arn:aws:iot:eu-central-1:${data.aws_caller_identity.current.account_id}:client/$${iot:ClientId}"\n        ]\n      },\n      {\n        Effect = "Allow",\n        Action = [\n          "iot:Publish"\n        ],\n        Resource = [\n          "arn:aws:iot:eu-central-1:${data.aws_caller_identity.current.account_id}:topic/truck/freezer",\n          "arn:aws:iot:eu-central-1:${data.aws_caller_identity.current.account_id}:topic/truck/analyze"\n        ]\n      }\n    ]\n  })\n}\n\n# Create a new certificate and download the certificate files\nresource "aws_iot_certificate" "cert" {\n  active = true\n}\n\n# Attach the policy to the certificate\nresource "aws_iot_policy_attachment" "policy_attachment" {\n  policy = aws_iot_policy.truckSensor01_Policy.name\n  target = aws_iot_certificate.cert.arn\n}\n\n# Attach the certificate to the thing\nresource "aws_iot_thing_principal_attachment" "example_principal_attachment" {\n  thing     = aws_iot_thing.truckSensor01.name\n  principal = aws_iot_certificate.cert.arn\n}\n\n'})}),"\n",(0,r.jsx)(n.h2,{id:"use-aws-access-key-and-secret-key",children:"Use AWS Access Key and Secret Key"}),"\n",(0,r.jsx)(n.p,{children:"This way normally used for server-side applications, such as a server that sends data to AWS IoT Core. The server uses the access key and secret key to authenticate with AWS IoT Core."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Create an IAM user in the AWS Management Console.(the user is use for the device, so it is not a human user, it will be a programmatic user)"}),"\n",(0,r.jsxs)(n.li,{children:["Attach the AWS managed policy ",(0,r.jsx)(n.code,{children:"AWSIoTFullAccess"})," to the IAM user."]}),"\n",(0,r.jsx)(n.li,{children:"Create an access key and secret key for the IAM user."}),"\n",(0,r.jsx)(n.li,{children:"Use the access key and secret key to authenticate the device to AWS IoT Core."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"use-aws-cognito",children:"Use AWS Cognito"}),"\n",(0,r.jsx)(n.p,{children:"AWS Cognito is a user authentication service that allows you to authenticate users to access AWS services. You can use AWS Cognito to authenticate devices to access AWS IoT Core."}),"\n",(0,r.jsx)(n.h2,{id:"service-role-for-aws-iot-core",children:"Service Role for AWS IoT Core"}),"\n",(0,r.jsx)(n.p,{children:"If you service is running on EKS, you can use the IAM role for service account to authenticate with AWS IoT Core."}),"\n",(0,r.jsx)(n.p,{children:"To authenticate with AWS IoT Core, you need to create a service role for AWS IoT Core. The service role is used to authenticate the device to AWS IoT Core. The service role has permissions to access AWS IoT Core."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Create a service role for AWS IoT Core. you will need a oidc provider for the EKS cluster first, then you can create a service role for the EKS cluster."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'# Create a service role for AWS IoT Core\nterraform {\n  required_providers {\n    aws = {\n      source  = "hashicorp/aws"\n      version = "5.68.0"\n    }\n  }\n}\n\nprovider "aws" {\n  region = "xxxx"\n}\n\ndata "aws_caller_identity" "current" {}\n\n# create policy\nresource "aws_iam_policy" "tf_provision_service_role_policy" {\n  name        = "tf-provision-service-role-policy"\n  description = "Policy for the service role"\n  policy      = file("policies/service-role-policy.json")\n}\n\n# Create role\nresource "aws_iam_role" "tf_provision_service_role" {\n  name = "tf-provision-service-role"\n\n  assume_role_policy = jsonencode({\n    Version = "2012-10-17"\n    Statement = [\n      {\n        Effect = "Allow"\n        Principal = {\n          Federated = "arn:aws:iam::${data.aws_caller_identity.current.account_id}:oidc-provider/oidc.eks.${var.region}.amazonaws.com/id/${var.eks_cluster_id}"\n        }\n        Action = "sts:AssumeRoleWithWebIdentity"\n        Condition = {\n          StringEquals = {\n            "oidc.eks.${var.region}.amazonaws.com/id/${var.eks_cluster_id}:sub" = "system:serviceaccount:${var.namespace}:${var.service_account_name}"\n          }\n        }\n      }\n    ]\n  })\n}\n\n# Attach policy to role\nresource "aws_iam_role_policy_attachment" "tf_provision_service_role_policy_attachment" {\n  role       = aws_iam_role.tf_provision_service_role.name\n  policy_arn = aws_iam_policy.tf_provision_service_role_policy.arn\n}\n\noutput "role_arn" {\n  value = aws_iam_role.tf_provision_service_role.arn\n}\n\noutput "policy_arn" {\n  value = aws_iam_policy.tf_provision_service_role_policy.arn\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'// Service role policy\n{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": "iot:*",\n      "Resource": "*"\n    }\n  ]\n}\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Create a service account for the service running on EKS."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: test-service-account\n  namespace: default\n  annotations:\n    eks.amazonaws.com/role-arn: arn:aws:iam::{your_aws_id}:role/tf-provision-service-role\n"})}),"\n",(0,r.jsx)(n.p,{children:"run the following command to create the service account."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f service-account.yaml\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Create a pod that uses the service account."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Pod\nmetadata:\n  name: test-pod\nspec:\n  serviceAccountName: test-service-account\n  containers:\n    - name: test-container\n      image: nginx\n"})}),"\n",(0,r.jsx)(n.p,{children:"run the following command to create the pod."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f pod.yaml\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>a});var r=t(7294);const o={},i=r.createContext(o);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);