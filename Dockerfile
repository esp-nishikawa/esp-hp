FROM node:lts-alpine

RUN apk update && \
    npm install -g npm && \
    npm install -g @vue/cli

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

EXPOSE 8080
CMD ["/bin/sh"]
