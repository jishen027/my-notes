"use strict";(self.webpackChunkmd_note=self.webpackChunkmd_note||[]).push([[7102],{1922:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var t=r(5893),o=r(1151);const a={},s="Laravel Docker",c={id:"Laravel/Laravel_Docker",title:"Laravel Docker",description:"- Dockerfile for Laravel Server",source:"@site/docs/Laravel/Laravel_Docker.md",sourceDirName:"Laravel",slug:"/Laravel/Laravel_Docker",permalink:"/my-notes/docs/Laravel/Laravel_Docker",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Laravel/Laravel_Docker.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Fortify Setting for Laravel API Server",permalink:"/my-notes/docs/Laravel/Fortify_Laravel"},next:{title:"Laravel Broadcasting using pusher",permalink:"/my-notes/docs/Laravel/Pusher"}},i={},l=[];function d(e){const n={code:"code",h1:"h1",li:"li",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"laravel-docker",children:"Laravel Docker"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Dockerfile for Laravel Server"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"FROM php:8.0-fpm\n\n# Arguments defined in docker-compose.yml\nARG user\nARG uid\n\n# Install system dependencies\nRUN apt-get update && apt-get install -y \\\n    git \\\n    curl \\\n    libpng-dev \\\n    libonig-dev \\\n    libxml2-dev \\\n    zip \\\n    unzip\n\n# Clear cache\nRUN apt-get clean && rm -rf /var/lib/apt/lists/*\n\n# Install PHP extensions\nRUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd\n\n# Get latest Composer\nCOPY --from=composer:latest /usr/bin/composer /usr/bin/composer\n\n# Create system user to run Composer and Artisan Commands\nRUN useradd -G www-data,root -u $uid -d /home/$user $user\nRUN mkdir -p /home/$user/.composer && chown -R $user:$user /home/$user\n\n# Set working directory\nWORKDIR /var/www\n\nUSER $user\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Docker compose file"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:'version: "3.7"\nservices:\n  app:\n    build:\n      args:\n        user: sammy\n        uid: 1000\n      context: ./backend\n      dockerfile: Dockerfile\n    image: vpc-app\n    container_name: vpc-app\n    restart: unless-stopped\n    working_dir: /var/www/\n    volumes:\n      - ./backend:/var/www\n    networks:\n      - vpc\n\n  frontend:\n    build:\n      context: ./frontend\n      dockerfile: Dockerfile\n    image: vpc-frontend\n    container_name: vpc-frontend\n    restart: unless-stopped\n    ports:\n      - 80:3000\n    working_dir: /var/www/\n    volumes:\n      - ./frontend:/var/www\n      - ./frontend/default.conf:/etc/nginx/conf.d/default.conf\n    networks:\n      - vpc\n\n  nginx:\n    image: nginx:alpine\n    container_name: vpc-nginx\n    restart: unless-stopped\n    ports:\n      - 8000:80\n    volumes:\n      - ./backend:/var/www\n      - ./backend/nginx/default.conf:/etc/nginx/conf.d/default.conf\n    networks:\n      - vpc\n\nnetworks:\n  vpc:\n    driver: bridge\n'})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>s});var t=r(7294);const o={},a=t.createContext(o);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);