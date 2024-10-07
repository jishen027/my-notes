# Settings for Tailwind CSS with Blazor(.NET 8)

## Method 1, Setup by using Tailwind css CLI

### 1. Create a new Blazor WebAssembly project

use the following command to create a new Blazor WebAssembly project and navigate to the project directory.

```bash
dotnet new blazorwasm -o BlazorApp
cd BlazorApp
```

### 2. Install the Tailwind CSS package

```bash
npx tailwindcss init -p
```

### 3. Change the `tailwind.config.js` file to add .blazor as a purge option.

```javascript
module.exports = {
  purge: {
    content: ["./src/**/*.razor"],
    options: {},
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
```

### 4. Create a new CSS file for the Tailwind CSS

Create a new CSS file in the `Styles/tailwind.css` directory and add the following content.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 5. Build and Serve the css file use tailwindcss cli

```bash
npx tailwindcss build Styles/tailwind.css -o wwwroot/css/tailwind.css
```

### 6. Add the CSS file to the `App.razor` file

Add the following line to the `App.razor` file to include the CSS file.

```html
<link href="css/tailwind.css" rel="stylesheet" />
```

### 7. Setup the csproj file to watch the tailwind.css file

```xml
<Project Sdk="Microsoft.NET.Sdk.Web">

  <PropertyGroup>
    <TargetFramework>net8.0</TargetFramework>
    <Nullable>enable</Nullable>
    <ImplicitUsings>enable</ImplicitUsings>
    <RootNamespace>BlazorApp</RootNamespace>
    <AssemblyName>$(AssemblyName.Replace(' ', '_'))</AssemblyName>
  </PropertyGroup>

  <!-- Add Item Group -->
  <ItemGroup>
    <Watch Include="./Styles/tailwind.css" Exclude="./wwwroot/**/*;obj\**\*;bin\**\*" />
  </ItemGroup>

  <!-- Add Target -->
  <Target Name="Tailwind" BeforeTargets="Compile">
    <Exec Command="npx tailwindcss -i ./Styles/tailwind.css -o ./wwwroot/styles.css" />
  </Target>
</Project>
```

### 8. Run the project

```bash
# in this approch, hot reload is not supported
dotnet run --no-hot-reload
```

## Method 2 - Use the Tailwind CSS NuGet package

### 1. Create a new Blazor WebAssembly project

```bash
dotnet new blazorwasm -o BlazorApp
cd BlazorApp
```

### 2. Install the Tailwind CSS NuGet package

```bash
dotnet add package Tailwind.Blazor
```