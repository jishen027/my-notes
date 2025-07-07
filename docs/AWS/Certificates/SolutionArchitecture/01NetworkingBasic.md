# 01 AWS Networking Basics

## AWS Networking Services

### Network foundations

1. VPC
2. Transit gateway
3. Private link

### Hybird connectivity

1. Direct connection
2. Cloud WAN
3. Client VPN
4. Site-to-Site VPN

### Edge networking

1. CloudFront
2. Route53
3. Global Accelerator

### Application networking

1. API Gateway
2. App Mesh
3. Cloud Map

### Networking security

1. Firewall Manager
2. Shield
3. Network Firewall
4. WAF

## Network Concepts

### Network design pattern

1. point to point
2. Bus
3. Tree
4. Hub and Spoke
5. Mesh
6. Ring
7. Hybrid

### Protocol

1. Network management protocols

- HTTP
- TCP
- UDP
- IRC(Internet Relay Chat): is a text-based communication protocol

2. Network communication protocols

- SNMP
- ICMP

3. Network security protocols

- SSL
- SFTP
- HTTPS

### IPv4

32 bit digis, 0.0.0.0 to 255.255.255.255

### IPv6

## Classless Inter-Domain Routing (CIDR)

- CIDR management ip address space
- CIDR reduce the number of table entries

### Subnetting

- Host and network
- class A 205.0.125.100, network : 205, host :0.125.100.
- class B 205.0.125.100, network : 205.0, host : 125.100.
- class C 205.0.125.100, network : 205.0.125, host : 100.

### Subnet mask

For determine the number of IP address by given local network requires based on the default subnetwork.

#### Accessing data

- Network attached storage(NAS): Elastic file system, Amazon FSx.
- Storage area network(SAM): Amazon Elastic Block Storage(EBS).

## AWS Implementation

### Open Systems Interconnect(OSI) model

The OSI model contains 7 layers: physical layer, data link layer, network layer, transport layer, session layer, presentations layer, and application layer. These 7 layers are the networking stack, which is the software that completes each function.

### TCP/IP

1. Link
   MAC address

2. Internet
   IPv4

3. Transport
   TCP
4. Application
   HTTP

## AWS Network Connectivity Options

### Understant Connectivity Concepts

#### Multi-tier architecture

- Presentation tier
- Application or logic tier
- Data tier

#### Multi-VPC architecture

For Create connections between application for distributed applications

#### Hight avaliability

A network that is designed to avoid loss of communications between established network endpoints.

by implementation of :

- redeundant components
- parallel components
- distribute traffic load
- elimination of single point of faliure

#### Hybrid networks

At least two indepentdent networks communicate with each other.

#### high performance

Privide fastest experience by guiding a packet of data along the shortest path with minimal delay.

### Understant AWS Network Service Offerings

#### Virtual private cloud(VPC) endpoint and AWS PrivateLink

- Gateway VPC endpoints

  A gateway VPC endpoint targets specific IP routes in a VPC route table in the from of a prefix list.
  ![Gateway VPC endpoint](image.png)

- Interface endpoints

  Powered by privateLink, an interface endpoint is an elastic network interface with a private IP address from the IP address range of the subnet. as an entry point for traffic.

- Gateway Load Balancer endpoint

  A gateway load balancer endpoint is an elastic network interface with a private IP address from the IP address range of the subnet.traffic and route it to a service that configured using Gateway Load balancer.

- What is AWS PrivateLink

![PrivateLink](image-1.png)

1. Provite connection between VPCs and supported AWS Services.
2. Avoids exposing traffic to the public internet.

Benefits :

1.  Security
2.  Simplification
3.  Capabilities

Considerations :

1. Does not support IPv6.
2. Service Provider will never see the IP address of the customer or service consumer.
3. Endpoint services cannot be tagged.
4. The private Domain Name System (DNS) of the endpoint does not resolve outside of the VPC.
5. Availability Zone names in a customer account might not map to the same locations as Availability Zone names in another account.

- DNS
  DNS Will be created for interface endpoint.

1. Endpoint-specific regional DNS hostname.

   vpce-0fe5b17a0707d6abc-29p5708s.ec2.us-east-1.vpce.amazonaws.com

2. Zonal-specific DNS hostname.(include avaliable zone)

   vpce-0fe5b17a0707d6abc-29p5708s-us-east-1a.ec2.us-east-1.vpce.amazonaws.com

3. Private DNS hostname.

   Create for zonal-specific or regional-specific DNS into a friendly hostname.

   myservice.example.com

#### VPC peering

A network connection between two VPCs and route traffic privately.

- Benefits :

1. Highly avaliable.
2. does not relay on a separate pice of physical hardware.
3. no bandwidth bottleneck or single point of failure of communication.

- Peering scenarios

#### AWS Direct Connect

#### AWS Site-to-Site VPN and AWS Client VPN

#### AWS Transit Gateway

#### Hub and Spoke

#### Hybird network

#### Cross-regional VPC peering

### Exploring Design Patterns
