# Entity Framework with MySQL

## Packages

- Microsoft.EntityFrameworkCore
- Microsoft.EntityFrameworkCore.Tools
- Pomelo.EntityFrameworkCore.MySql

## Install Packages

```bash
dotnet add package Microsoft.EntityFrameworkCore
dotnet add package Microsoft.EntityFrameworkCore.Tools
dotnet add package Pomelo.EntityFrameworkCore.MySql
```

## Models

```csharp
using System;

namespace EntityFramework.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; set; }
    }
}
```

## DbContext

```csharp
// APP DB Context

using Microsoft.EntityFrameworkCore;

namespace EntityFramework.Models
{
    public class AppDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySql("server=localhost;port=3306;database=appdb;user=root;password=123456");
        }
    }
}
```

## appsettings.json

```json
{
  "ConnectionStrings": {
    "AppDbConnectionString": "server=localhost;port=3306;database=appdb;user=root;password=123456"
  }
}
```

## Migration

```bash
dotnet ef migrations add InitialCreate
dotnet ef database update
```

## Usage

```csharp
using System;
using System.Linq;
using EntityFramework.Models;

namespace EntityFramework
{
    class Program
    {
        static void Main(string[] args)
        {
            using (var db = new AppDbContext())
            {
                db.Users.Add(new User
                {
                    Name = "John Doe",
                    Email = "123@gmail.com",
                    Password = "123456",
                    CreatedAt = DateTime.Now,
                    UpdatedAt = DateTime.Now
                });
            }
        }
    }
}
```
