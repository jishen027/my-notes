"use strict";(self.webpackChunkmd_note=self.webpackChunkmd_note||[]).push([[2103],{3185:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=i(5893),o=i(1151);const r={},s=void 0,a={id:"Webpack/Webpack",title:"Webpack",description:"1. what is webpack?",source:"@site/docs/Webpack/Webpack.md",sourceDirName:"Webpack",slug:"/Webpack/",permalink:"/my-notes/docs/Webpack/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Webpack/Webpack.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"vue-router",permalink:"/my-notes/docs/Vue/vue-router"}},l={},c=[];function d(e){const n={br:"br",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"what is webpack?"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"webpack is a module bundler for modern JavaScript applications."}),"\n",(0,t.jsx)(n.li,{children:"When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles."}),"\n",(0,t.jsxs)(n.li,{children:["webpack can be configured to use a specific configuration file named ",(0,t.jsx)(n.code,{children:"webpack.config.js"})," or ",(0,t.jsx)(n.code,{children:"webpackfile.js"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"webpack core concepts"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Entry",(0,t.jsx)(n.br,{}),"\n","Entry point indicates which module webpack should use to begin building out its internal dependency graph. webpack will figure out which other modules and libraries that entry point depends on (directly and indirectly). By default its value is ",(0,t.jsx)(n.code,{children:"./src/index.js"}),", but you can specify a different (or multiple entry points) by configuring the entry property in the webpack configuration."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Output",(0,t.jsx)(n.br,{}),"\n","The output property tells webpack where to emit the bundles it creates and how to name these files. It defaults to ",(0,t.jsx)(n.code,{children:"./dist/main.js"})," for the main output file and to the ",(0,t.jsx)(n.code,{children:"./dist"})," folder for any other generated file."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Loaders",(0,t.jsx)(n.br,{}),"\n","Out of the box, webpack only understands JavaScript and JSON files. Loaders allow webpack to process other types of files and convert them into valid modules that can be consumed by your application and added to the dependency graph."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Plugins",(0,t.jsx)(n.br,{}),"\n","While loaders are used to transform certain types of modules, plugins can be leveraged to perform a wider range of tasks like bundle optimization, asset management and injection of environment variables."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:" Plugins in Webpack can play a significant role in optimizing the bundle generated by the bundler. They provide various ways to improve the performance, reduce the size of the bundle, and enhance the overall efficiency of your web application. Here are some common ways plugins can optimize a bundle:\n\n1. Minification: Minification plugins, such as UglifyJSPlugin, TerserPlugin, or OptimizeCSSAssetsPlugin, can be used to minimize the size of JavaScript and CSS files in the bundle by removing whitespace, comments, and renaming variables to shorter names.\n\n2. Code Splitting: Plugins like SplitChunksPlugin help with code splitting, allowing you to split your bundle into smaller chunks. This can lead to faster initial loading times and improved caching.\n\n3. Tree Shaking: Tree shaking is a technique used to eliminate unused code from the bundle. The DefinePlugin and UglifyJSPlugin can help remove dead code paths from your JavaScript files.\n\n4. Compression: Compression plugins, such as CompressionWebpackPlugin, can compress assets in the bundle (e.g., Gzip or Brotli) to reduce the amount of data transferred over the network, resulting in faster page loading times.\n\n5. HTML Generation: HTMLWebpackPlugin allows you to generate HTML files dynamically, inject script tags for your bundles, and optimize the final HTML output by minifying it.\n\n6. Caching: HashedModuleIdsPlugin generates unique hashes for modules to ensure cache consistency between builds. This is crucial for long-term caching strategies to take advantage of browser caching.\n\n7. Vendor Bundle Optimization: Some plugins assist in creating separate vendor bundles for third-party libraries. This helps prevent frequently changing application code from invalidating cached vendor bundles.\n\n8. Resource Inlining: Inline assets like small images or fonts directly into your HTML or CSS to reduce the number of network requests. Plugins like url-loader or file-loader help with this.\n\n9. Image Optimization: ImageMinimizerWebpackPlugin can optimize and compress images during the build process, reducing image file sizes.\n\n10. Removing Unused CSS: PurgeCSSPlugin can identify and remove unused CSS classes from your stylesheets, reducing the size of CSS files.\n\n11. Critical CSS: CriticalCSSPlugin can generate critical CSS for above-the-fold content, improving perceived loading performance.\n\n12. Preloading/Prefetching: Use plugins like PreloadWebpackPlugin to add preload or prefetch tags to assets, allowing the browser to start downloading important resources earlier.\n\n13. Bundle Analysis: Plugins like Webpack Bundle Analyzer provide insights into the size and composition of your bundles, helping you identify optimization opportunities.\n\n14. Service Worker Generation: WorkboxWebpackPlugin helps you generate service workers for progressive web apps (PWAs), improving offline capabilities and performance.\n\n15. Dynamic Imports: Plugins like babel-plugin-dynamic-import-node allow server-side rendering (SSR) frameworks to support dynamic imports efficiently.\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Mode",(0,t.jsx)(n.br,{}),"\n","By setting the mode parameter to either development, production or none, you can enable webpack's built-in optimizations that correspond to each environment. The default value is production."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Browser Compatibility\nwebpack supports all browsers that are ES5-compliant (IE8 and below are not supported). webpack needs Promise for import() and require.ensure(). If you want to support older browsers, you will need to load a polyfill before using these expressions."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"webpack configuration"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"webpack configuration is a JavaScript object that contains properties that define how webpack should behave."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"webpack configuration can be written in ES5 or ES6 syntax. However, webpack 2+ only supports configuration in the form of an ES5-compliant CommonJS module."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"webpack configuration can be written in TypeScript, but you will need to install additional dependencies."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"webpack configuration can be written in JSON format, but you will need to install additional dependencies."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"webpack configuration can be written in YAML format, but you will need to install additional dependencies."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"webpack CLI"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"webpack CLI provides a set of tools to improve the setup of custom webpack configuration."}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsx)(n.li,{children:"babel-loader"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"babel-loader is the webpack loader responsible for taking in the ES6 code and making it understandable by the browser of choice of the user."}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>s});var t=i(7294);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);