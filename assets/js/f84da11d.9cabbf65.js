"use strict";(self.webpackChunkmd_note=self.webpackChunkmd_note||[]).push([[8345],{7480:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=t(5893),r=t(1151);const a={},o="Laravel Broadcasting using pusher",i={id:"Laravel/Pusher",title:"Laravel Broadcasting using pusher",description:"context",source:"@site/docs/Laravel/Pusher.md",sourceDirName:"Laravel",slug:"/Laravel/Pusher",permalink:"/docs/Laravel/Pusher",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Laravel/Pusher.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Laravel_Docker",permalink:"/docs/Laravel/Laravel_Docker"},next:{title:"How to setup a scheduler in Laravel",permalink:"/docs/Laravel/Scheduler"}},l={},c=[{value:"context",id:"context",level:2}];function u(n){const e={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"laravel-broadcasting-using-pusher",children:"Laravel Broadcasting using pusher"}),"\n",(0,s.jsx)(e.h2,{id:"context",children:"context"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"Laravel 9.0\n\nWhen Consultation Owner invite other user to join the consultation, the other user can see the invitation notification real-time using pusher.\n\n"})}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"Install pusher"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'composer require pusher/pusher-php-server "~4.0"\n'})}),"\n",(0,s.jsxs)(e.ol,{start:"2",children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Create pusher account and get the credentials"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Add the credentials to .env file"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bashs",children:"PUSHER_APP_ID=your_app_id\nPUSHER_APP_KEY=your_app_key\nPUSHER_APP_SECRET=your_app_secret\nPUSHER_APP_CLUSTER=your_app_cluster\n\n// change the broadcast driver to pusher\nBROADCAST_DRIVER=pusher\n"})}),"\n",(0,s.jsxs)(e.ol,{start:"4",children:["\n",(0,s.jsx)(e.li,{children:"Create the event"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"php artisan make:event ConsultationInvitation\n"})}),"\n",(0,s.jsxs)(e.ol,{start:"5",children:["\n",(0,s.jsx)(e.li,{children:"Edit the event"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-php",children:"<?php\n// app/Events/ConsultationInvitation.php\n/**\n * Create a new event instance.\n *\n * @return void\n */\npublic function __construct($consultation)\n\n/**\n * Get the channels the event should broadcast on.\n *\n * @return \\Illuminate\\Broadcasting\\Channel|array\n */\npublic function broadcastOn()\n{\n    return new PrivateChannel('consultation.'.$this->consultation->id);\n}\n\n/**\n * The event's broadcast name.\n *\n * @return string\n */\npublic function broadcastAs()\n{\n    return 'consultation.invitation';\n}\n\n/**\n * Get the data to broadcast.\n *\n * @return array\n */\npublic function broadcastWith()\n{\n    return [\n        'consultation' => $this->consultation,\n    ];\n}\n"})}),"\n",(0,s.jsxs)(e.ol,{start:"6",children:["\n",(0,s.jsx)(e.li,{children:"Edit the controller"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-php",children:"<?php\n// app/Http/Controllers/ConsultationController.php\n/**\n * Invite other user to join the consultation\n *\n * @param  \\Illuminate\\Http\\Request  $request\n * @param  \\App\\Models\\Consultation  $consultation\n * @return \\Illuminate\\Http\\Response\n */\npublic function invite(Request $request, Consultation $consultation)\n{\n    $this->authorize('update', $consultation);\n\n    $user = User::findOrFail($request->user_id);\n\n    $consultation->users()->attach($user);\n\n    event(new ConsultationInvitation($consultation));\n\n    return response()->json([\n        'message' => 'Invitation sent successfully',\n    ]);\n}\n"})}),"\n",(0,s.jsxs)(e.ol,{start:"7",children:["\n",(0,s.jsx)(e.li,{children:"For SPA, install pusher-js to Vue project"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"npm install --save pusher-js\n"})}),"\n",(0,s.jsxs)(e.ol,{start:"8",children:["\n",(0,s.jsx)(e.li,{children:"add the pusher credentials to .env file"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"VITE_PUSHER_APP_KEY=your_app_key\nVITE_PUSHER_APP_CLUSTER=your_app_cluster\n"})}),"\n",(0,s.jsxs)(e.ol,{start:"9",children:["\n",(0,s.jsx)(e.li,{children:"setup the pusher in Vue project and add the event listener"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'// resources/js/main.js\nimport { createApp } from "vue";\nimport App from "./App.vue";\n...\n\nimport Pusher from "pusher-js";\n\nwindow.Pusher = new Pusher(import.meta.env.VITE_APP_PUSHER_KEY, {\n  cluster: import.meta.env.VITE_APP_PUSHER_CLUSTER,\n});\n\nwindow.Pusher.logToConsole = true;\n\n// add the event listener\nwindow.Pusher.subscribe(`consultation.${consultation.id}`).bind(\n  "consultation.invitation",\n  (data) => {\n    console.log(data);\n  }\n);\n\nconst app = createApp(App);\n'})})]})}function h(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>i,a:()=>o});var s=t(7294);const r={},a=s.createContext(r);function o(n){const e=s.useContext(a);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),s.createElement(a.Provider,{value:e},n.children)}}}]);