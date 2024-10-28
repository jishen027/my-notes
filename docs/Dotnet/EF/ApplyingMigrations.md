# Applying Migrations

## Basic Usage

1. Generate script for migration

```bash
dotnet ef migrations script
```

2. Generate script from given migration to the last migration

```bash
dotnet ef migrations script AddNewMigration
```

3. Generate script from specific `from` migration to `to` migration

```bash
dotnet ef migrations script AddNewMigration AddAnotherMigration
```

## Idemotent SQL Script

```bash
dotnet ef migrations script --idempotent
```

## Command-Line Tools(Not for Production)

1. update database to the latest migration

```bash
dotnet ef database update
```

2. update database to a specific migration

```bash
dotnet ef database update AddNewMigration
```

## Bundles

1. Generate Bundle

```bash
dotnet ef migrations bundle
```

2. Generate Self-contained Bundle for Linux

```bash
dotnet ef migrations bundle --self-contained -r linux-x64
```
