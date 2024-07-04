# Dotnet Basic Concepts

## `using` Directive

The `using` statement in here is to ensure that the object is disposed of when it goes out of scope. This is a good practice to ensure that the object is disposed of properly.

```csharp
// using statement here is ensure the object AppDbContext is disposed of properly when it goes out of scope
using (var context = new AppDbContext())
{
    // Your code here
}
```
