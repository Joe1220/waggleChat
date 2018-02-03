#!/bin/sh

meteor build ./waggleChat_docker
cd ./waggleChat_docker
docker-compose up -d