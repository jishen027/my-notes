# Docker Cheatsheet

- pull a image from remote docker repo
```bash
docker pull ubuntu
```

- run the image to generate a container 
```bash
docker run -it ubuntu /bin/bash
```

- show all containers
```bash
docker ps 
or
docker ps -a
```

- start a container 
```bash
docker start container_id 
```

- running in background 
```bash 
docker run -d --name container_name ubuntu /bin/bash
```

- stop a container
```bash
docker stop container_id
```

- restart a container
```bash
docker restart container_id
```

classic command 
```
-P (random port)
-p 5000:5000 (mapping app port 5000 to server port 5000)
-d (detach running app on background)
-it (interactive terminal)
```
- remove container
```bash
docker rm container_id
docker rm -f container_id (force remove container)
```

- look up container process
```bash
docker top container_id or name
```

