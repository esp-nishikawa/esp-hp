FROM node:lts-alpine

RUN apk update && \
    yarn global add @vue/cli

WORKDIR /app

ENV CHOKIDAR_USEPOLLING=true

COPY package.json yarn.lock* ./

RUN yarn install

EXPOSE 8080
CMD ["/bin/sh"]
