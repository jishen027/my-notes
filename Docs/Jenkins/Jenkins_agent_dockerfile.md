
```bash
FROM jenkins/agent:alpine-jdk11

USER root 

RUN apk add nodejs
Run apt add npm

USER jenkins
```
