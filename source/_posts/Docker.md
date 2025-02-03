---
title: Docker和Docker Compose的基本操作
tags:
  - Docker
  - Docker Compose
cover: /img/posts/docker/docker.png
top_img: /img/posts/docker/docker.png
categories:
  - 教程
abbrlink: 40991
date: 2024-11-01 22:34:13
id: docker
description: Docker和Docker Compose的基本操作
---
[Docker手册](https://docs.docker.com/engine/install/debian/#install-using-the-repository)
# 安装Docker和Docker-compose插件
```
# 执行以下命令卸载所有冲突的软件包
for pkg in docker.io docker-doc docker-compose podman-docker containerd runc; do sudo apt-get remove $pkg; done
# 添加Docker的官方GPG密钥
sudo apt update
sudo apt install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
# 将存储库添加到Apt源代码中
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
#安装Docker软件包
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin 
 ```
# DOcker命令
```
sudo docker ps                 // 查看所有正在运行容器
sudo docker ps -a              // 查看所有容器
sudo docker ps -a -q           // 查看所有容器ID
sudo docker stop 容器ID        //停止指定容器
sudo docker kill 容器名称或ID  //强制停止指定容器
sudo docker rm 容器名称或ID    //删除指定容器
sudo systemctl start docker   //启动Docker进程
sudo systemctl daemon-reload  //守护Docker进程
sudo systemctl restart docker //重启Docker进程
sudo systemctl stop docker     //关闭Docker进程  
sudo apt purge docker-ce 
sudo apt purge docker-ce-cli
sudo apt purge docker-containerd.io  //卸载docker
```
# Docker更换源
打开编辑/etc/docker/daemon.json
```
{
  "registry-mirrors": [
    "https://docker.1panel.live",
    "http://mirrors.ustc.edu.cn"
  ]
}
```
重启Docker服务
```
sudo systemctl daemon-reload
sudo systemctl restart docker
```
# Docker-Compose使用
[Docker Hub](https://hub.docker.com/)
```
cd /home 
#创建docker文件夹，
mkdir docker
#进入docker文件夹
cd docker 
#每个项目在docker中创建相对应项目名称
mkdir 项目名称
cd 项目名称
#再在项目名称目录里创建docker compose文件进行编辑
sudo vi docker-compose.yml
#文件保存之后，部署项目
sudo docker compose up -d
```
# 报错
1. Warning: Stopping docker.service, but it can still be activated by: docker.socket
Docker默认开启自动唤醒机制，首先关掉docker.socket
```
sudo systemctl stop docker.socket   
```









