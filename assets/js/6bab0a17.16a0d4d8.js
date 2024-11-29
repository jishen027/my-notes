"use strict";(self.webpackChunkmd_note=self.webpackChunkmd_note||[]).push([[8386],{8989:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var s=t(5893),o=t(1151);const a={},i="Entity Framework with MySQL",r={id:"Dotnet/EF/MysqlConnection",title:"Entity Framework with MySQL",description:"Packages",source:"@site/docs/Dotnet/EF/MysqlConnection.md",sourceDirName:"Dotnet/EF",slug:"/Dotnet/EF/MysqlConnection",permalink:"/my-notes/docs/Dotnet/EF/MysqlConnection",draft:!1,unlisted:!1,editUrl:"https://github.com/jishen027/my-notes/tree/main/docs/docs/Dotnet/EF/MysqlConnection.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Entity Framework Migrations",permalink:"/my-notes/docs/Dotnet/EF/EFCoreMigration"},next:{title:"Task-based asynchronous programming",permalink:"/my-notes/docs/Dotnet/TaskBased_async_programming"}},l={},c=[{value:"Packages",id:"packages",level:2},{value:"Install Packages",id:"install-packages",level:2},{value:"Models",id:"models",level:2},{value:"DbContext",id:"dbcontext",level:2},{value:"appsettings.json",id:"appsettingsjson",level:2},{value:"Migration",id:"migration",level:2},{value:"Usage",id:"usage",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"entity-framework-with-mysql",children:"Entity Framework with MySQL"}),"\n",(0,s.jsx)(n.h2,{id:"packages",children:"Packages"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Microsoft.EntityFrameworkCore"}),"\n",(0,s.jsx)(n.li,{children:"Microsoft.EntityFrameworkCore.Tools"}),"\n",(0,s.jsx)(n.li,{children:"Pomelo.EntityFrameworkCore.MySql"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"install-packages",children:"Install Packages"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"dotnet add package Microsoft.EntityFrameworkCore\ndotnet add package Microsoft.EntityFrameworkCore.Tools\ndotnet add package Pomelo.EntityFrameworkCore.MySql\n"})}),"\n",(0,s.jsx)(n.h2,{id:"models",children:"Models"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"using System;\n\nnamespace EntityFramework.Models\n{\n    public class User\n    {\n        public int Id { get; set; }\n        public string Name { get; set; }\n        public string Email { get; set; }\n        public string Password { get; set; }\n        public DateTime CreatedAt { get; set; }\n        public DateTime UpdatedAt { get; set; set; }\n    }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"dbcontext",children:"DbContext"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'// APP DB Context\n\nusing Microsoft.EntityFrameworkCore;\n\nnamespace EntityFramework.Models\n{\n    public class AppDbContext : DbContext\n    {\n        public DbSet<User> Users { get; set; }\n\n        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)\n        {\n            optionsBuilder.UseMySql("server=localhost;port=3306;database=appdb;user=root;password=123456");\n        }\n    }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"appsettingsjson",children:"appsettings.json"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "ConnectionStrings": {\n    "AppDbConnectionString": "server=localhost;port=3306;database=appdb;user=root;password=123456"\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"migration",children:"Migration"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"dotnet ef migrations add InitialCreate\ndotnet ef database update\n"})}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'using System;\nusing System.Linq;\nusing EntityFramework.Models;\n\nnamespace EntityFramework\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            using (var db = new AppDbContext())\n            {\n                db.Users.Add(new User\n                {\n                    Name = "John Doe",\n                    Email = "123@gmail.com",\n                    Password = "123456",\n                    CreatedAt = DateTime.Now,\n                    UpdatedAt = DateTime.Now\n                });\n            }\n        }\n    }\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>i});var s=t(7294);const o={},a=s.createContext(o);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);