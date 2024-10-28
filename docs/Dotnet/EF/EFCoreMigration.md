# Entity Framework Migrations

## Overview

1. Create a Modal class

```csharp
public class Blog
{
    public int Id { get; set; }
    public string Name { get; set; }
}
```

2. create migration name InitialCreate

```bash
dotnet ef migrations add InitialCreate
```

3. Create the database

```bash
dotnet ef database update
```

4. Update the model class

```csharp
public class Blog
{
    public int Id { get; set; }
    public string Name { get; set; }
    // add new property
    public DateTime CreatedTimestamp { get; set; }
}
```

5. Create a new migration

```bash
dotnet ef migrations add AddCreatedTimestamp
```

6. Update the database

```bash
dotnet ef database update
```

## Remove Migration 

```bash
dotnet ef migrations remove
```

## List Migrations

```bash 
dotnet ef migrations list
```

## Checking for Pending model changes

```bash
dotnet ef migrations has-pending-modal-changes
```

## Resetting all migrations

1. Backup your database
2. In your database, delete all rols from migration history
3. Delete `Migration` folder
4. Create a new migration script. `dotnet ef migrations script`
5. Insert a single row into the migrations history.

```SQL 
INSERT INTO [__EFMigrationsHistory] ([MIGRATIONID], [PRODUCTVERSION])
VALUES (N'<full_migration_timestamp_and_name>', N'<EF_version>');
```