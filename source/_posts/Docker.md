---
title: 从0学习使用Docker
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
# 安装Docker
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
# Docker命令
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
sudo usermod -aG docker user   //将用户加入docker组
sudo apt purge docker-ce 
sudo apt purge docker-ce-cli
sudo apt purge docker-containerd.io  //卸载docker
```
# Docker更换源
打开编辑（现在很多镜像地址都不能用了，建议搜索最新镜像地址进行尝试）
sudo nano /etc/docker/daemon.json
```
{
  "registry-mirrors": [
    "https://docker.mirrors.ustc.edu.cn",
    "https://hub-mirror.c.163.com",
    "https://registry.docker-cn.com"
  ]
}
```
{% kbd Ctrl %}+{% kbd X %}后按{% kbd Y %},再按{% kbd Enter %}进行保存
重启Docker服务
```
sudo systemctl daemon-reload
sudo systemctl restart docker
```
# Docker-Compose

## 安装
[Docker Hub](https://hub.docker.com/)，[Docker-compose](https://docs.docker.com/compose/install/standalone/)文档
```
docker-compose --version
```
查看是否docker-compose版本确认是否安装
Docker Compose 通常与 Docker 一起安装。如果你已经安装了 Docker，不再需要额外安装，如果没有安装也可以手动安装
```
//下载 Docker Compose 二进制
curl -SL http://localhost:5244/d/dav/ali/docker-compose-linux-x86_64?sign=Azo83ZNF8Z9SjIRE0czqiYJaPqNTW7LZXYf_JoqGwGw=:0 -o /usr/local/bin/docker-compose  
//赋予执行
chmod +x /usr/local/bin/docker-compose
```
如果无法从github上下载docker-compose文件，用电脑浏览器打开[Docker-compose](https://github.com/docker/compose/releases)并下载对应文件上传到linux服务器的<a>/usr/local/bin</a>目录中并赋予权限(注意修改文件名称)
```
sudo chmod +x /usr/local/bin/docker-compose
```
## 使用
```
cd /home/docker
#每个项目在docker中创建相对应项目名称
mkdir 项目名称
cd 项目名称
#再在项目名称目录里创建docker compose文件进行编辑
sudo nano docker-compose.yml
#文件保存之后，部署项目
sudo docker compose up -d
```
# 报错
1. Warning: Stopping docker.service, but it can still be activated by: docker.socket
Docker默认开启自动唤醒机制，首先关掉docker.socket
```
sudo systemctl stop docker.socket   
```









