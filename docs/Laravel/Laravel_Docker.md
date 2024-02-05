# Laravel Docker

- Dockerfile for Laravel Server

```
FROM php:8.0-fpm

# Arguments defined in docker-compose.yml
ARG user
ARG uid

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Get latest Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Create system user to run Composer and Artisan Commands
RUN useradd -G www-data,root -u $uid -d /home/$user $user
RUN mkdir -p /home/$user/.composer && chown -R $user:$user /home/$user

# Set working directory
WORKDIR /var/www

USER $user
```

- Docker compose file

```yml
version: "3.7"
services:
  app:
    build:
      args:
        user: sammy
        uid: 1000
      context: ./backend
      dockerfile: Dockerfile
    image: vpc-app
    container_name: vpc-app
    restart: unless-stopped
    working_dir: /var/www/
    volumes:
      - ./backend:/var/www
    networks:
      - vpc

  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    image: vpc-frontend
    container_name: vpc-frontend
    restart: unless-stopped
    ports:
      - 80:3000
    working_dir: /var/www/
    volumes:
      - ./frontend:/var/www
      - ./frontend/default.conf:/etc/nginx/conf.d/default.conf
    networks:
      - vpc

  nginx:
    image: nginx:alpine
    container_name: vpc-nginx
    restart: unless-stopped
    ports:
      - 8000:80
    volumes:
      - ./backend:/var/www
      - ./backend/nginx/default.conf:/etc/nginx/conf.d/default.conf
    networks:
      - vpc

networks:
  vpc:
    driver: bridge
```
