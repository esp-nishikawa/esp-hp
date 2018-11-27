FROM espnishikawa/esp-hp-build:latest
MAINTAINER espnishikawa t.nishikawa@esoftpowers.com

COPY . /opt/esp-hp

WORKDIR /opt/esp-hp
RUN npm install && \
    npm run build
CMD npm run serve

EXPOSE 8080
