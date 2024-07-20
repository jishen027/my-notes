# EC2 compute service

### EC2, AMI, and Marketplace

- Instance

Instance is a virtual selfcontained server that runs on the EC2 service. It is a virtual machine that can be configured to run any operating system and software.

- AMI

AMI stands for Amazon Machine Image. It is a snapshot of an instance that can be used to create new instances. AMI can be public or private.

- Instance Anatomy

  - Execution Environment: CPU, Memory, Network
  - File System: Storage for the instance
    - Instance Storage: Temporary storage that is lost when the instance is stopped
    - EBS: Elastic Block Store, persistent storage that can be detached and reattached to instances
    - EFS: Elastic File System, network file system that can be attached to multiple instances

- Lanching AMI Instance

  - Instance Volume Backed AMI
    - Can not be stopped
    - Can only be terminated or restarted
    - Slower boot time
    - Data transfer from the s3 on the first boot   

  - EBS Backed AMI
    - Can be stopped
    - Can be terminated or restarted
    - Faster boot time
    - Data transfer from the EBS on the first boot

- AMI Visibility

  - Public AMI
    - Available to all AWS users
    - Can be used to launch instances
    - Can be copied to create private AMIs

  - Private AMI
    - Available to the owner
    - Can be shared with other AWS accounts
    - Can be copied to create other private AMIs

### EC2 Instance Classes
- On-demand Instances
  - Pay for what you use 
  - No commitment
  - Easy to scale up and down
  - Suitable for unpredictable workloads

- Reserved Instances
  - Commitment for a period of time
  - Commitment ranges from 1 to 3 years
  - Discounted pricing compared to on-demand instances
  - Good for predictable workloads

- Spot Instances
  - Bid for unused EC2 capacity
  - Pay the current spot price
  - Good for workloads that are flexible with start and end times

  ### AWS Rest API

  - AWS SDKs
    - Software Development Kits
    - Available for multiple programming languages
    - Simplifies the interaction with AWS services