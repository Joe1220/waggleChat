FROM node:alpine

ENV MONGO_URL='mongodb://mongodb:27017/db'
ENV ROOT_URL='http://localhost'
ENV PYTHON='/usr/bin/python2'
ENV PORT=80

ADD waggleChat.tar.gz /
RUN apk update && apk add python2 make g++
WORKDIR /bundle/programs/server
RUN npm install --production
# RUN npm install -g pm2
WORKDIR /bundle
# ENTRYPOINT pm2 start main.js --no-daemon
ENTRYPOINT node main.js
EXPOSE 80