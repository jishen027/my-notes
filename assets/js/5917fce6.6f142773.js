"use strict";(self.webpackChunkmd_note=self.webpackChunkmd_note||[]).push([[4378],{5663:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var r=i(5893),t=i(1151);const s={},o="Vue Router",l={id:"Vue/vue-router",title:"Vue Router",description:"1. what is Vue router",source:"@site/docs/Vue/vue-router.md",sourceDirName:"Vue",slug:"/Vue/vue-router",permalink:"/my-notes/docs/Vue/vue-router",draft:!1,unlisted:!1,editUrl:"https://github.com/jishen027/my-notes/tree/main/docs/docs/Vue/vue-router.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EventBus in Vue3",permalink:"/my-notes/docs/Vue/Vue_EventBus"},next:{title:"Webpack",permalink:"/my-notes/docs/Webpack/"}},c={},a=[];function d(e){const n={code:"code",h1:"h1",li:"li",ol:"ol",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"vue-router",children:"Vue Router"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"what is Vue router"}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Vue Router is the official router for Vue.js. It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze. Features include:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Nested route/view mapping"}),"\n",(0,r.jsx)(n.li,{children:"Modular, component-based router configuration"}),"\n",(0,r.jsx)(n.li,{children:"Route params, query, wildcards"}),"\n",(0,r.jsx)(n.li,{children:"View transition effects powered by Vue.js' transition system"}),"\n",(0,r.jsx)(n.li,{children:"Fine-grained navigation control"}),"\n",(0,r.jsx)(n.li,{children:"Links with automatic active CSS classes"}),"\n",(0,r.jsx)(n.li,{children:"HTML5 history mode or hash mode, with auto-fallback in IE9"}),"\n",(0,r.jsx)(n.li,{children:"Customizable Scroll Behavior"}),"\n",(0,r.jsx)(n.li,{children:"Restore scroll position when going back in history mode"}),"\n",(0,r.jsx)(n.li,{children:"URL params encoding/decoding"}),"\n",(0,r.jsx)(n.li,{children:"Navigation Cancellation"}),"\n",(0,r.jsx)(n.li,{children:"Route meta fields"}),"\n",(0,r.jsx)(n.li,{children:"Links Prefetching"}),"\n",(0,r.jsx)(n.li,{children:"Named Routes"}),"\n",(0,r.jsx)(n.li,{children:"Named Views"}),"\n",(0,r.jsx)(n.li,{children:"Redirect and Alias"}),"\n",(0,r.jsx)(n.li,{children:"Keep-alive"}),"\n",(0,r.jsx)(n.li,{children:"Transitions on page load / leaving"}),"\n",(0,r.jsx)(n.li,{children:"Lazy Loading of Routes"}),"\n",(0,r.jsx)(n.li,{children:"Scroll to Anchor"}),"\n",(0,r.jsx)(n.li,{children:"Customizable Loading Component"}),"\n",(0,r.jsx)(n.li,{children:'Global "before" Guards'}),"\n",(0,r.jsx)(n.li,{children:"Per-Route Guard"}),"\n",(0,r.jsx)(n.li,{children:"Per-Route Error Handler"}),"\n",(0,r.jsx)(n.li,{children:"Lazy Loading Error Handling"}),"\n",(0,r.jsx)(n.li,{children:"Router instance methods"}),"\n",(0,r.jsx)(n.li,{children:"Router instance properties"}),"\n",(0,r.jsx)(n.li,{children:"Router constructor options"}),"\n",(0,r.jsx)(n.li,{children:"Router configuration options"}),"\n",(0,r.jsx)(n.li,{children:"Router instance options"}),"\n",(0,r.jsx)(n.li,{children:"Router life-cycle hooks"}),"\n",(0,r.jsx)(n.li,{children:"Router events"}),"\n",(0,r.jsx)(n.li,{children:"Router mode"}),"\n",(0,r.jsx)(n.li,{children:"Router base"}),"\n",(0,r.jsx)(n.li,{children:"Router link active class"}),"\n",(0,r.jsx)(n.li,{children:"Router scroll behavior"}),"\n",(0,r.jsx)(n.li,{children:"Router parseQuery / stringifyQuery"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"core concepts of Vue router"}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Route Matching"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'// Routes are evaluated in the order they are defined. The first route that matches the URL is the one that is used.\nconst router = new VueRouter({\n  routes: [\n    // dynamic segments start with a colon\n    { path: "/user/:id", component: User },\n  ],\n});\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Nested Routes"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// Nested routes are child routes of the parent route. The nested routes are defined in the children property of the parent route.\nconst router = new VueRouter({\n  routes: [\n    { path: \"/user/:id\", component: User,\n      children: [\n        // UserHome will be rendered inside User's <router-view>\n        // when /user/:id is matched\n        { path: '', component: UserHome },\n        // UserProfile will be rendered inside User's <router-view>\n        // when /user/:id/profile is matched\n        { path: 'profile', component: UserProfile },\n        // UserPosts will be rendered inside User's <router-view>\n        // when /user/:id/posts is matched\n        { path: 'posts', component: UserPosts }\n      ]\n    }\n  ]\n})\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Programmatic Navigation"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// programmatically navigate to a different URL\n/**\n location can be a string:\n \n onComplete: Function\n  A callback to call once the navigation is complete. The callback is called with the same arguments as those of router.push.\n\n  onAbort: Function\n  A callback to call when the navigation is aborted. The callback is called with the same arguments as those of router.push.\n\n */\n\nrouter.push(location, onComplete?, onAbort?)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Named Routes"}),"\n",(0,r.jsx)(n.li,{children:"Named Views"}),"\n",(0,r.jsx)(n.li,{children:"Redirect and Alias"}),"\n",(0,r.jsx)(n.li,{children:"Navigation Guards"}),"\n",(0,r.jsx)(n.li,{children:"Data Fetching"}),"\n",(0,r.jsx)(n.li,{children:"Scroll Behavior"}),"\n",(0,r.jsx)(n.li,{children:"Lazy Loading Routes"}),"\n",(0,r.jsx)(n.li,{children:"Meta Fields"}),"\n",(0,r.jsx)(n.li,{children:"Transitions"}),"\n",(0,r.jsx)(n.li,{children:"Composition API"}),"\n",(0,r.jsx)(n.li,{children:"Navigation Failure"}),"\n",(0,r.jsx)(n.li,{children:"HTML5 History Mode"}),"\n",(0,r.jsx)(n.li,{children:"Hash Mode"}),"\n",(0,r.jsx)(n.li,{children:"Abstract Mode"}),"\n",(0,r.jsx)(n.li,{children:"Custom History Implementation"}),"\n",(0,r.jsx)(n.li,{children:"Router Instance"}),"\n",(0,r.jsx)(n.li,{children:"Router Constructor Options"}),"\n",(0,r.jsx)(n.li,{children:"Router Configuration Options"}),"\n",(0,r.jsx)(n.li,{children:"Router Instance Options"}),"\n",(0,r.jsx)(n.li,{children:"Router Lifecycle Hooks"}),"\n",(0,r.jsx)(n.li,{children:"Router Events"}),"\n",(0,r.jsx)(n.li,{children:"Router Mode"}),"\n",(0,r.jsx)(n.li,{children:"Router Base"}),"\n",(0,r.jsx)(n.li,{children:"Router Link Active Class"}),"\n",(0,r.jsx)(n.li,{children:"Router Scroll Behavior"}),"\n",(0,r.jsx)(n.li,{children:"Router ParseQuery / StringifyQuery"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>o});var r=i(7294);const t={},s=r.createContext(t);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);