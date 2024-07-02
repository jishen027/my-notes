"use strict";(self.webpackChunkmd_note=self.webpackChunkmd_note||[]).push([[3545],{2640:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var n=t(5893),s=t(1151);const r={},o="Task-based asynchronous programming",i={id:"Dotnet/TaskBased_async_programming",title:"Task-based asynchronous programming",description:"Create and running tasks explicitly",source:"@site/docs/Dotnet/TaskBased_async_programming.md",sourceDirName:"Dotnet",slug:"/Dotnet/TaskBased_async_programming",permalink:"/my-notes/docs/Dotnet/TaskBased_async_programming",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Dotnet/TaskBased_async_programming.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Entity Framework with MySQL",permalink:"/my-notes/docs/Dotnet/MysqlConnection"},next:{title:"Express Passport JS",permalink:"/my-notes/docs/Express/Passport_JS"}},c={},l=[{value:"Create and running tasks explicitly",id:"create-and-running-tasks-explicitly",level:2},{value:"Creating a task",id:"creating-a-task",level:3},{value:"Use Task.Run to execute a task",id:"use-taskrun-to-execute-a-task",level:3},{value:"Use Task.Factory.StartNew to execute a task",id:"use-taskfactorystartnew-to-execute-a-task",level:3}];function d(e){const a={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"task-based-asynchronous-programming",children:"Task-based asynchronous programming"}),"\n",(0,n.jsx)(a.h2,{id:"create-and-running-tasks-explicitly",children:"Create and running tasks explicitly"}),"\n",(0,n.jsx)(a.h3,{id:"creating-a-task",children:"Creating a task"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-csharp",children:"using System;\nusing System.Threading;\nusing System.Threading.Tasks;\n\npublic class Lambda\n{\n   public static void Main()\n   {\n      Thread.CurrentThread.Name = \"Main\";\n\n      // Create a task and supply a user delegate by using a lambda expression.\n      Task taskA = new Task( () => Console.WriteLine(\"Hello from taskA.\"));\n      // Start the task.\n      taskA.Start();\n\n      // Output a message from the calling thread.\n      Console.WriteLine(\"Hello from thread '{0}'.\",\n                        Thread.CurrentThread.Name);\n\n      // Wait for the task to finish.\n      taskA.Wait();\n   }\n}\n// The example displays output as follows:\n//       Hello from thread 'Main'.\n//       Hello from taskA.\n// or\n//       Hello from taskA.\n//       Hello from thread 'Main'.\n"})}),"\n",(0,n.jsx)(a.h3,{id:"use-taskrun-to-execute-a-task",children:"Use Task.Run to execute a task"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-csharp",children:'Task taskA = Task.Run( () => Console.WriteLine("Hello from taskA."));\ntaskA.Wait();\n'})}),"\n",(0,n.jsx)(a.h3,{id:"use-taskfactorystartnew-to-execute-a-task",children:"Use Task.Factory.StartNew to execute a task"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Task.Factory.StartNew is a more flexible way to create and start a task. It allows you to specify creation options and a task scheduler."}),"\n",(0,n.jsx)(a.li,{children:"Task.Factory.StartNew is useful when you want to create a task and start it in one operation."}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-csharp",children:"\n// create a task array\nTask[] taskArry = new Task[10];\n\n// create and start a task\nfor (int i = 0; i < 10; i++)\n{\n   // Use the Task.Factory.StartNew method to run a task. the lambda expression is used to specify the code to run in the task.\n   // the lambda expression creates a new CustomData object and assigns the value of the loop counter to the Name property.\n   taskArry[i] = Task.Factory.StartNew( (Object obj) =>\n    {\n        CustomData data = obj as CustomData;\n        if (data == null)\n            return;\n\n        data.ThreadNum = Thread.CurrentThread.ManagedThreadId;\n    },\n    new CustomData() { Name = i, CreationTime = DateTime.Now.Ticks });\n}\n\n// wait for all tasks to complete\nTask.WaitAll(taskArry);\n"})})]})}function u(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,a,t)=>{t.d(a,{Z:()=>i,a:()=>o});var n=t(7294);const s={},r=n.createContext(s);function o(e){const a=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:a},e.children)}}}]);