# Overview of the Terraform core concepts and workflow

## Terraform Core Workflow

### 1. Initializition:  

Run `terraform init` to initialize the working directory containing Terraform configuration files. This create a `.terraform` directory in the working directory where store Terraform state and plugins.

### 2. Configuration:  

Create a Terraform configuration file (e.g. `main.tf`) that defines the infrastructure resources. The configuration file is written in HashiCorp Configuration Language (HCL).

### 3. Plan:

Run `terraform plan` to create an execution plan. This command will show what actions Terraform will take to change the infrastructure to match the configuration.

### 4. Apply:

Run `terraform apply` to apply the changes required to reach the desired state of the configuration. This command will create, update, or delete resources as necessary.

### 5. Destroy:

Run `terraform destroy` to destroy all the resources defined in the configuration file.

## Key Concepts

1. `Provider`: A plugin that Terraform uses to interact with the APIs of cloud providers (e.g. AWS, Azure, GCP).

2. `Resource`: Individual Cloud objects that Terraform manages (e.g. EC2 instance, S3 bucket).

3. `Module`: A container for multiple resources that are used together.

4. `Variable`: Parameters that can be passed into modules.

5. `Expression`: A reference to a value in Terraform configuration. e.g `var.my_var`.

6. `State`: A record of the current state of the infrastructure managed by Terraform.

7. `Output`: Values that are returned by a module.

8. `Workspace`: A way to manage multiple states in the same configuration.

9. `Backend`: A method for storing Terraform state.

10. `Provisioner`: A way to perform tasks on the local machine or on the resource after it is created.

## Core Workflow Steps

1. Define resources in configuration files. e.g. `main.tf`.

2. Initialize the working directory with `terraform init`.

3. Create an execution plan with `terraform plan`.

4. Review the output and manage the infrastructure.

5. Apply the changes with `terraform apply`.

6. Destroy the resources with `terraform destroy`.(Optional)