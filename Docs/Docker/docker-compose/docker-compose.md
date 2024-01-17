## valuable commands

```bash
# clean workspace

-docker container rm $(docker container ls -aq) # remove all containers

-docker rmi $(docker images -q) # remove all images

```

```yml
version: '3.8'
services:
  web:
    build: ./frontend
    ports:
      - 3000:3000
  api:
    build: ./backend
    ports:
      - 3001:3001
    environment:
      - DB_URL: mongodb://db/db_name
  db:
    image: mongo:4.0-xenial
    ports:
      - 27017:27017
    volumes:
      - mongo-data:/data/db

volumes:
  mongo-data:

```



