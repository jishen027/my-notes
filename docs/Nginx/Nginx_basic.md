# Nginx basic

## What is nginx?

- Nginx is a web server which can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.
- Nginx is a high performance web server software.
- Nginx is a free and open source web server, which can also act as a reverse proxy, load balancer, SSL offloading, and HTTP cache.

### Nginx features

- Reverse proxy with caching
- Load balancing
- FastCGI support with caching
- TLS/SSL with SNI and OCSP stapling support, via OpenSSL.
- SPDY, HTTP/2.0 and WebSocket support
- FLV and MP4 streaming
- Web page access authentication
- URL rewriting
- Custom logging with rotation
- IPv6-compatible

## Nginx basic

### Nginx basic commands

- Start nginx: `sudo systemctl start nginx`
- Stop nginx: `sudo systemctl stop nginx`
- Restart nginx: `sudo systemctl restart nginx`
- Reload nginx: `sudo systemctl reload nginx`
- Check nginx status: `sudo systemctl status nginx`
- Enable nginx: `sudo systemctl enable nginx`
- Disable nginx: `sudo systemctl disable nginx`

### Nginx basic configuration

- Nginx configuration file: `/etc/nginx/nginx.conf`
- Nginx default root directory: `/usr/share/nginx/html`
- Nginx default configuration directory: `/etc/nginx`
- Nginx default virtual host configuration directory: `/etc/nginx/conf.d`
- Nginx default log directory: `/var/log/nginx`
- Nginx default user: `nginx`
- Nginx default group: `nginx`

### Nginx basic configuration file

- Nginx configuration file: `/etc/nginx/nginx.conf`
- Nginx configuration file structure:
  - `main` block
  - `events` block
  - `http` block
    - `server` block
      - `location` block
- Nginx configuration file example:

```nginx
# /etc/nginx/nginx.conf

# main block
user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log;
pid /run/nginx.pid;

# events block
events {
    worker_connections 1024;
}

# http block
http {
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile            on;
    tcp_nopush          on;
    tcp_nodelay         on;
    keepalive_timeout   65;
    types_hash_max_size 2048;

    # include: Includes the specified file.
    include             /etc/nginx/mime.types;
    # default_type      application/octet-stream means that nginx will send the file as a binary stream.
    default_type        application/octet-stream;

    # server block
    server {
        listen       80 default_server;
        listen       [::]:80 default_server;
        server_name  _;
        root         /usr/share/nginx/html;

        # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;

        # location block
        location / {
        }

        error_page 404 /404.html;
            location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
        }
    }
}
```

- `worker_processes`: The number of worker processes that should be started.
- `worker_connections`: The maximum number of simultaneous connections that can be opened by a worker process.
- `access_log`: The location of the access log file.
- `error_log`: The location of the error log file.
- `sendfile`: Enables or disables the use of sendfile().
- `tcp_nopush`: Enables or disables the use of the TCP_NOPUSH socket option on FreeBSD or the TCP_CORK socket option on Linux.
- `tcp_nodelay`: Enables or disables the use of the TCP_NODELAY option.
- `keepalive_timeout`: The timeout for keep-alive connections with the client.
- `types_hash_max_size`: Sets the maximum size of the types hash tables.
- `include`: Includes the specified file.
- `default_type`: Sets the default MIME type of a response.
- `server`: Defines a virtual server for HTTP.
- `listen`: Defines a socket for HTTP.
- `server_name`: Defines names of a virtual server.
- `root`: Defines the document root for a virtual server.
- `location`: Defines configuration for a location.
- `error_page`: Defines configuration for an error page.

### Nginx basic server configuration

- Nginx server configuration file: `/etc/nginx/conf.d/default.conf`
- Nginx server configuration file example:

```nginx
# /etc/nginx/conf.d/default.conf

server {
    listen       80;
    server_name  localhost;

    # Load configuration files for the default server block.
    include /etc/nginx/default.d/*.conf;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }

    error_page 404 /404.html;
        location = /40x.html {
    }

    error_page 500 502 503 504 /50x.html;
        location = /50x.html {
    }
}
```

### Nginx basic location configuration

- Nginx location configuration file: `/etc/nginx/conf.d/default.conf`
- Nginx location configuration file example:

```nginx
# /etc/nginx/conf.d/default.conf

server {
    listen       80;
    server_name  localhost;

    # Load configuration files for the default server block.
    include /etc/nginx/default.d/*.conf;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }

    location /images/ {
        root   /usr/share/nginx/html;
    }

    location ~ \.(gif|jpg|png)$ {
        root   /usr/share/nginx/html;
    }

    location ~ \.php$ {
        root           /usr/share/nginx/html;
        fastcgi_pass
        fastcgi_index  index.php;
        fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
        include        fastcgi_params;
    }

    error_page 404 /404.html;
        location = /40x.html {
    }

    error_page 500 502 503 504 /50x.html;
        location = /50x.html {
    }
}
```
