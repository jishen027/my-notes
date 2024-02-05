"use strict";(self.webpackChunkmd_note=self.webpackChunkmd_note||[]).push([[6868],{1791:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>t,contentTitle:()=>r,default:()=>x,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var s=i(5893),c=i(1151);const l={},r=void 0,o={id:"Nginx/Nginx_basic",title:"Nginx_basic",description:"What is nginx?",source:"@site/docs/Nginx/Nginx_basic.md",sourceDirName:"Nginx",slug:"/Nginx/Nginx_basic",permalink:"/my-notes/docs/Nginx/Nginx_basic",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Nginx/Nginx_basic.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Next Auth",permalink:"/my-notes/docs/NextJs/NextAuth"},next:{title:"Open AI Assistant",permalink:"/my-notes/docs/OpenAI/Assistant"}},t={},a=[{value:"What is nginx?",id:"what-is-nginx",level:2},{value:"Nginx features",id:"nginx-features",level:3},{value:"Nginx basic",id:"nginx-basic",level:2},{value:"Nginx basic commands",id:"nginx-basic-commands",level:3},{value:"Nginx basic configuration",id:"nginx-basic-configuration",level:3},{value:"Nginx basic configuration file",id:"nginx-basic-configuration-file",level:3},{value:"Nginx basic server configuration",id:"nginx-basic-server-configuration",level:3},{value:"Nginx basic location configuration",id:"nginx-basic-location-configuration",level:3}];function d(n){const e={code:"code",h2:"h2",h3:"h3",li:"li",pre:"pre",ul:"ul",...(0,c.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"what-is-nginx",children:"What is nginx?"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Nginx is a web server which can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache."}),"\n",(0,s.jsx)(e.li,{children:"Nginx is a high performance web server software."}),"\n",(0,s.jsx)(e.li,{children:"Nginx is a free and open source web server, which can also act as a reverse proxy, load balancer, SSL offloading, and HTTP cache."}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"nginx-features",children:"Nginx features"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Reverse proxy with caching"}),"\n",(0,s.jsx)(e.li,{children:"Load balancing"}),"\n",(0,s.jsx)(e.li,{children:"FastCGI support with caching"}),"\n",(0,s.jsx)(e.li,{children:"TLS/SSL with SNI and OCSP stapling support, via OpenSSL."}),"\n",(0,s.jsx)(e.li,{children:"SPDY, HTTP/2.0 and WebSocket support"}),"\n",(0,s.jsx)(e.li,{children:"FLV and MP4 streaming"}),"\n",(0,s.jsx)(e.li,{children:"Web page access authentication"}),"\n",(0,s.jsx)(e.li,{children:"URL rewriting"}),"\n",(0,s.jsx)(e.li,{children:"Custom logging with rotation"}),"\n",(0,s.jsx)(e.li,{children:"IPv6-compatible"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"nginx-basic",children:"Nginx basic"}),"\n",(0,s.jsx)(e.h3,{id:"nginx-basic-commands",children:"Nginx basic commands"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Start nginx: ",(0,s.jsx)(e.code,{children:"sudo systemctl start nginx"})]}),"\n",(0,s.jsxs)(e.li,{children:["Stop nginx: ",(0,s.jsx)(e.code,{children:"sudo systemctl stop nginx"})]}),"\n",(0,s.jsxs)(e.li,{children:["Restart nginx: ",(0,s.jsx)(e.code,{children:"sudo systemctl restart nginx"})]}),"\n",(0,s.jsxs)(e.li,{children:["Reload nginx: ",(0,s.jsx)(e.code,{children:"sudo systemctl reload nginx"})]}),"\n",(0,s.jsxs)(e.li,{children:["Check nginx status: ",(0,s.jsx)(e.code,{children:"sudo systemctl status nginx"})]}),"\n",(0,s.jsxs)(e.li,{children:["Enable nginx: ",(0,s.jsx)(e.code,{children:"sudo systemctl enable nginx"})]}),"\n",(0,s.jsxs)(e.li,{children:["Disable nginx: ",(0,s.jsx)(e.code,{children:"sudo systemctl disable nginx"})]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"nginx-basic-configuration",children:"Nginx basic configuration"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Nginx configuration file: ",(0,s.jsx)(e.code,{children:"/etc/nginx/nginx.conf"})]}),"\n",(0,s.jsxs)(e.li,{children:["Nginx default root directory: ",(0,s.jsx)(e.code,{children:"/usr/share/nginx/html"})]}),"\n",(0,s.jsxs)(e.li,{children:["Nginx default configuration directory: ",(0,s.jsx)(e.code,{children:"/etc/nginx"})]}),"\n",(0,s.jsxs)(e.li,{children:["Nginx default virtual host configuration directory: ",(0,s.jsx)(e.code,{children:"/etc/nginx/conf.d"})]}),"\n",(0,s.jsxs)(e.li,{children:["Nginx default log directory: ",(0,s.jsx)(e.code,{children:"/var/log/nginx"})]}),"\n",(0,s.jsxs)(e.li,{children:["Nginx default user: ",(0,s.jsx)(e.code,{children:"nginx"})]}),"\n",(0,s.jsxs)(e.li,{children:["Nginx default group: ",(0,s.jsx)(e.code,{children:"nginx"})]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"nginx-basic-configuration-file",children:"Nginx basic configuration file"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Nginx configuration file: ",(0,s.jsx)(e.code,{children:"/etc/nginx/nginx.conf"})]}),"\n",(0,s.jsxs)(e.li,{children:["Nginx configuration file structure:","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"main"})," block"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"events"})," block"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"http"})," block","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"server"})," block","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"location"})," block"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"Nginx configuration file example:"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-nginx",children:'# /etc/nginx/nginx.conf\n\n# main block\nuser nginx;\nworker_processes auto;\nerror_log /var/log/nginx/error.log;\npid /run/nginx.pid;\n\n# events block\nevents {\n    worker_connections 1024;\n}\n\n# http block\nhttp {\n    log_format  main  \'$remote_addr - $remote_user [$time_local] "$request" \'\n                      \'$status $body_bytes_sent "$http_referer" \'\n                      \'"$http_user_agent" "$http_x_forwarded_for"\';\n\n    access_log  /var/log/nginx/access.log  main;\n\n    sendfile            on;\n    tcp_nopush          on;\n    tcp_nodelay         on;\n    keepalive_timeout   65;\n    types_hash_max_size 2048;\n\n    # include: Includes the specified file.\n    include             /etc/nginx/mime.types;\n    # default_type      application/octet-stream means that nginx will send the file as a binary stream.\n    default_type        application/octet-stream;\n\n    # server block\n    server {\n        listen       80 default_server;\n        listen       [::]:80 default_server;\n        server_name  _;\n        root         /usr/share/nginx/html;\n\n        # Load configuration files for the default server block.\n        include /etc/nginx/default.d/*.conf;\n\n        # location block\n        location / {\n        }\n\n        error_page 404 /404.html;\n            location = /40x.html {\n        }\n\n        error_page 500 502 503 504 /50x.html;\n            location = /50x.html {\n        }\n    }\n}\n'})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"worker_processes"}),": The number of worker processes that should be started."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"worker_connections"}),": The maximum number of simultaneous connections that can be opened by a worker process."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"access_log"}),": The location of the access log file."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"error_log"}),": The location of the error log file."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"sendfile"}),": Enables or disables the use of sendfile()."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"tcp_nopush"}),": Enables or disables the use of the TCP_NOPUSH socket option on FreeBSD or the TCP_CORK socket option on Linux."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"tcp_nodelay"}),": Enables or disables the use of the TCP_NODELAY option."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"keepalive_timeout"}),": The timeout for keep-alive connections with the client."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"types_hash_max_size"}),": Sets the maximum size of the types hash tables."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"include"}),": Includes the specified file."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"default_type"}),": Sets the default MIME type of a response."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"server"}),": Defines a virtual server for HTTP."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"listen"}),": Defines a socket for HTTP."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"server_name"}),": Defines names of a virtual server."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"root"}),": Defines the document root for a virtual server."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"location"}),": Defines configuration for a location."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"error_page"}),": Defines configuration for an error page."]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"nginx-basic-server-configuration",children:"Nginx basic server configuration"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Nginx server configuration file: ",(0,s.jsx)(e.code,{children:"/etc/nginx/conf.d/default.conf"})]}),"\n",(0,s.jsx)(e.li,{children:"Nginx server configuration file example:"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-nginx",children:"# /etc/nginx/conf.d/default.conf\n\nserver {\n    listen       80;\n    server_name  localhost;\n\n    # Load configuration files for the default server block.\n    include /etc/nginx/default.d/*.conf;\n\n    location / {\n        root   /usr/share/nginx/html;\n        index  index.html index.htm;\n    }\n\n    error_page 404 /404.html;\n        location = /40x.html {\n    }\n\n    error_page 500 502 503 504 /50x.html;\n        location = /50x.html {\n    }\n}\n"})}),"\n",(0,s.jsx)(e.h3,{id:"nginx-basic-location-configuration",children:"Nginx basic location configuration"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Nginx location configuration file: ",(0,s.jsx)(e.code,{children:"/etc/nginx/conf.d/default.conf"})]}),"\n",(0,s.jsx)(e.li,{children:"Nginx location configuration file example:"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-nginx",children:"# /etc/nginx/conf.d/default.conf\n\nserver {\n    listen       80;\n    server_name  localhost;\n\n    # Load configuration files for the default server block.\n    include /etc/nginx/default.d/*.conf;\n\n    location / {\n        root   /usr/share/nginx/html;\n        index  index.html index.htm;\n    }\n\n    location /images/ {\n        root   /usr/share/nginx/html;\n    }\n\n    location ~ \\.(gif|jpg|png)$ {\n        root   /usr/share/nginx/html;\n    }\n\n    location ~ \\.php$ {\n        root           /usr/share/nginx/html;\n        fastcgi_pass\n        fastcgi_index  index.php;\n        fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;\n        include        fastcgi_params;\n    }\n\n    error_page 404 /404.html;\n        location = /40x.html {\n    }\n\n    error_page 500 502 503 504 /50x.html;\n        location = /50x.html {\n    }\n}\n"})})]})}function x(n={}){const{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},1151:(n,e,i)=>{i.d(e,{Z:()=>o,a:()=>r});var s=i(7294);const c={},l=s.createContext(c);function r(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:r(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);