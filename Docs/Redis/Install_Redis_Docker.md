```
docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest
```
redis stack is a redis server with redis commander, it is a web UI for redis, it is running on port 8001

```
docker run -d --name redis-stack-server -p 6379:6379 redis/redis-stack-server:latest
```

redis stack server is a redis server without redis commander, it is running on port 6379