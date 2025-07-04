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

### Subnet mast

For determine the number of IP address by given local network requires based on the default subnetwork.

#### Accessubg data

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

