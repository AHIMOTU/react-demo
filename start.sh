#!/usr/bin/env bash
git pull

yarn build

docker stop react-demo

docker rm react-demo

docker run -d -p 4001:80 -v $PWD/build:/usr/share/nginx/html --name react-demo nginx

