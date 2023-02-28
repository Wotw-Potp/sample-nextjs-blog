#!/bin/bash
docker-compose stop
docker-compose rm -vf
docker-compose up -d --build

docker-compose exec node yarn
docker-compose exec node yarn dev