"use strict";(self.webpackChunkmd_note=self.webpackChunkmd_note||[]).push([[165],{4938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>i});var a=n(5893),s=n(1151);const r={},o=void 0,l={id:"Laravel/Eloquent_Mutators_and_Casting",title:"Eloquent_Mutators_and_Casting",description:"Eloquent Mutators and Casting",source:"@site/docs/Laravel/Eloquent_Mutators_and_Casting.md",sourceDirName:"Laravel",slug:"/Laravel/Eloquent_Mutators_and_Casting",permalink:"/my-notes/docs/Laravel/Eloquent_Mutators_and_Casting",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Laravel/Eloquent_Mutators_and_Casting.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"k8s_DevOps",permalink:"/my-notes/docs/K8S/k8s_DevOps"},next:{title:"Fortify_Laravel",permalink:"/my-notes/docs/Laravel/Fortify_Laravel"}},u={},i=[{value:"Eloquent Mutators and Casting",id:"eloquent-mutators-and-casting",level:3}];function c(e){const t={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h3,{id:"eloquent-mutators-and-casting",children:"Eloquent Mutators and Casting"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Accessor"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"An accessor transform an Eloquent attribute value when it is accessed."}),"\n",(0,a.jsx)(t.p,{children:"exanple :  when you want to get the first name and last name of a user, you can use the following code:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-php",children:'public function getFullNameAttribute()\n{\n    return "{$this->first_name} {$this->last_name}";\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"Asscessor cashing :  if you want to cash the result of an accessor, you can use the following code:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-php",children:"public function getFullNameAttribute($value)\n{\n    return Attrubute::make(\n      get: fn(string $value) => bcrypt($value),\n    )->shouldCache();\n    // or withoutObjectCashing();\n}\n"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Mutator"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"A mutator transform an Eloquent attribute value when it is set."}),"\n",(0,a.jsx)(t.p,{children:"example :  when you want to set the first name and last name of a user, you can use the following code:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-php",children:"protected functuin firstName(): Attribute\n{\n    return Attribute::make(\n        get: fn(string $value) => ucfirst($value),\n        set: fn(string $value) => strtolower($value),\n    );\n}\n"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Casting"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Casting is a way to convert an Eloquent attribute value to a native PHP type."}),"\n",(0,a.jsx)(t.p,{children:"example :  when you want to cast the first name and last name of a user, you can use the following code:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-php",children:"protected $casts = [\n    'first_name' => 'string',\n    'last_name' => 'string',\n];\n"})})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>o});var a=n(7294);const s={},r=a.createContext(s);function o(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);