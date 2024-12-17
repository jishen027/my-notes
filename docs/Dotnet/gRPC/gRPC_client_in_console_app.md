# Create the gRPC cliet in a .NET console app

## Create a console app
```bash
dotnet new console -o GrpcGreeterClient
```

## Add gRPC packages to the project
```bash
dotnet add GrpcGreeterClient.csproj package Grpc.Net.Client
dotnet add GrpcGreeterClient.csproj package Google.Protobuf
dotnet add GrpcGreeterClient.csproj package Grpc.Tools
```

## Add `gree.proto` 
- Create a `Proto` folder in the project.
- Copy the `Greet.proto` file from gRPC server to here.(gRPC server and clinet use a same proto file)
- add namespace to the file 
```json
options csharp_namespace = "GrpcGreeterClient"
```

## Add `<Protobuf>` element to `<ItemGroup>` in the `.csproj` file.
```xml
<ItemGroup>
  <Protobuf Include="Protos/greet.proto" GrpcService="Client">
<ItemGroup>
```

## Create the Greeter client
- Build the client project to create the types in the `GrpcGreeterClient` namespace.

- Update the gRPC client `Program.cs` file.
```csharp
var GrpcServerAddress = "https://localhost:7042"
// the port number must match the port of hte gRPC server 
using var channel = GrpcChannel.ForAddress(GrpcServerAddress)
var client = new Greeter.GreeterClient(channel);

var reply = await client.SayHelloAsync(
  new HelloRequest { Name = "GreeterClient" });

Console.WriteLine("Greeting" + reply.message);
```

