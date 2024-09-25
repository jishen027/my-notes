# Terraform Certification Exam Info

## Duration

- 60 minutes
- 90 minutes for non-native English speakers

## Number of Questions

- 57 questions

## Pactice Exam Cost

- $40 USD

## Exam Cost

- $70 USD

## Exam Format

- Multiple choice questions
- Multiple select questions
- True/False questions
- Drag and drop questions
- Scenario-based questions

## Exam Language

- English

## Exam Provider

- PSI

## Infrastructure as Code (IaC) Concepts

Write a script to automate create, update, and delete infrastructure resources.

- IaC is `blueprint` for infrastructure.
- IaC allow to share, version control, and reuse infrastructure configurations.

## Infrastructure Lifecycle Management

- plan, design, build, test, deliver,maintain and retire infrastructure.

- Plan and Design: Define the infrastructure requirements and design the architecture.

- Develop and Iterate: Write the code to create the infrastructure resources.

- Go Live and maintain: Deploy the infrastructure and monitor the performance.

- `Reliability`: IaC makes changes `idempotent`, meaning that the same configuration can be applied multiple times without causing issues.

- `Maintainability`: IaC allows to easily update and modify the infrastructure.

- `Sensibility`: IaC allows to create infrastructure that is cost-effective and efficient.

## Provisioning, Deployment, and Orchestration

- Provisioning: Create the infrastructure resources. When you run `terraform apply`, Terraform provisions the resources defined in the configuration file.

- Deployment: Deploy the application code to the infrastructure. Terraform can be used to deploy the application code to the infrastructure.

- Orchestration: Manage the infrastructure resources. use for microservices architecture.

## Configuration Drift

- an unexpected change in the infrastructure configuration.

- Terraform can `detect` configuration drift by comparing the current state of the infrastructure with the desired state defined in the configuration file.

- Terraform can `correct` configuration drift by updating the infrastructure to match the desired state.

- Terraform can `prevent` configuration drift by using `Terraform Cloud` to manage the infrastructure.

## Terraform

### Lifecycle

1. `Code` - Write the Terraform configuration files.

2. `Init` - Initialize the working directory with `terraform init`.

3. `Plan` - Create an execution plan with `terraform plan`.

4. `validate` - Validate the configuration files with `terraform validate`.

5. `Apply` - Apply the changes with `terraform apply`.

6. `Destroy` - Destroy the resources with `terraform destroy`.

### Terraform Change Automation

- Change Management: Terraform can automate the process of making changes to the infrastructure.

### Execution Plans

- Terraform creates an execution plan that shows what actions Terraform will take to change the infrastructure to match the configuration.

- Terraform execution plan is a `dry run` of the changes that will be made to the infrastructure.

### Terraform Visualizations and Graphs

- Terraform can generate visualizations and graphs of the infrastructure resources.

- Terraform graph command generates a visual representation of the infrastructure resources.

### Resource Graph

- Terraform creates a `resource graph` that shows the dependencies between the infrastructure resources.

### User Cases

1. Open Source: Terraform is an open-source tool that can be used to manage infrastructure resources.

2. Multi-Cloud: Terraform can be used to manage infrastructure resources across multiple cloud providers.

3. Automation: Terraform can be used to automate the process of creating, updating, and deleting infrastructure resources.

4. Scalability: Terraform can be used to manage infrastructure resources at scale.

5. Collaboration: Terraform can be used to collaborate on infrastructure configurations with team members.

6. Version Control: Terraform configurations can be version controlled using Git.

7. Infrastructure as Code: Terraform allows to define infrastructure resources as code.

8. Infrastructure Lifecycle Management: Terraform can be used to manage the entire lifecycle of infrastructure resources.

### Terraform Core and Plugins

#### Terraform Core

Use RPC to communicate with plugins.

#### Terraform Plugins

Expose an implementation of service provider interface.

#### Extra Resources

- Book : Terraform Up & Running

- Online Open book: Terraform best practices

## Terraform Commands

### Terraform Local values

```hcl
locals {
  service_name = "forum"
  owner        = "Community Team"
}
```

local values can be used to store values that are used multiple times in the configuration files.

variable vs locals

- variables are used to define values that can be passed to the configuration files.

- locals are used to define values that are used multiple times in the configuration files.

### Terraform Variables

```hcl
variable "region" {
  type    = string
  default = "us-west-2"
}
```

variables can be used to define values that can be passed to the configuration files.

### Terraform Outputs

```hcl
output "instance_ip" {
  value = aws_instance.example.public_ip
}
```

outputs can be used to define values that are returned by the configuration files.

```bash
terraform output
```

Command to display the outputs of the configuration files.

### Terraform Refresh

```bash
terraform refresh
```

refresh the state of the infrastructure resources.

### Terraform Modules

```hcl
module "vpc" {
  source = "./modules/vpc"

  region = var.region

  tags = {
    Name        = "vpc"
    Environment = "production"
  }

  //...
}
```

Modules can be used to organize the configuration files into reusable components.


## Terraform Cloud

- Terraform Cloud is a hosted service that provides a central location for managing Terraform configurations.

- Terraform Cloud can be used to store the state of the infrastructure resources. 