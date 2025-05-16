# VPC

1. What is VPC?

   - [x] VPC stands for Virtual Private Cloud. It is a virtual network dedicated to your AWS account. It is logically isolated from other virtual networks in the AWS cloud. You can launch your AWS resources, such as Amazon EC2 instances, into your VPC.

2. What are the benefits of VPC?

   - [x] Security: You can define a network ACL and security groups to control inbound and outbound traffic to your instances.
   - [x] Flexibility: You can select your own IP address range, create subnets, and configure route tables and network gateways.
   - [x] Scalability: You can easily scale your VPC as your needs grow.
   - [x] Cost-Effective: You can create a VPC at no additional charge.

3. How to create a VPC?

   - [x] To create a VPC, you can use the AWS Management Console, the AWS Command Line Interface (CLI), or the AWS SDKs.

4. What are the components of VPC?
   - [x] Subnets: A range of IP addresses in your VPC.
   - [x] Route Tables: A set of rules, called routes, that are used to determine where network traffic is directed.
   - [x] Internet Gateway: A gateway that allows your VPC to communicate with the internet.
   - [x] Elastic IP Addresses: Static IP addresses designed for dynamic cloud computing.
   - [x] Network ACLs: An optional layer of security for your VPC that acts as a firewall for controlling traffic in and out of one or more subnets.
   - [x] Security Groups: A set of firewall rules that control the traffic for your instances.
   - [x] VPC Peering: A networking connection between two VPCs that enables you to route traffic between them using private IP addresses.
   - [x] VPN Connection: A secure connection between your VPC and your on-premises network.
   - [x] VPC Endpoints: A way to privately connect your VPC to supported AWS services and VPC endpoint services powered by AWS PrivateLink.
   - [x] NAT Gateway: A highly available, managed Network Address Translation (NAT) service for your resources in a private subnet to access the internet.
   - [x] VPC Flow Logs: A feature that enables you to capture information about the IP traffic going to and from network interfaces in your VPC.

### IP addresses

- CIDR(Classless Inter-Domain Routing)
/32 = 1, /24 = 256


