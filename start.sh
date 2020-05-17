#!/usr/bin/env bash
npm i yarn -g
echo "正在拉取最新代码=======================!"
git pull
echo "执行打包=======================!"
yarn build
echo "打包完成=======================!"
echo "重启项目=======================!"
sudo gpasswd -a jenkins docker
sudo service jenkins restart
docker stop react-demo

docker rm react-demo

docker run -d -p 4001:80 -v $PWD/build:/usr/share/nginx/html --name react-demo nginx
echo "部署成功=======================!"

