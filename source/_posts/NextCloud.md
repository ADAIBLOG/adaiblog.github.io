---
title: 使用docker搭建nextcloud项目
date: 2024-12-06 17:37:36
tags:
  - Docker部署项目
  - NextCloud
cover: /img/posts/nextcloud/nextcloud.jpg
top_img: /img/posts/nextcloud/nextcloud.jpg
categories:
  - 应用
id: NextCloud
description: 使用docker搭建nextcloud项目
---
# 安装
首先安装Docker和Docker-Compose，安装教程请看[Docker文章](https://www.adai.fun/posts/docker.html)
创建一个存放docker-compose文件夹并进入
```
mkdir nextcloud
cd nextcloud
```
创建docker-compose文件
```
vi docker-compose.yml
```
输入以下内容
```
version: '2'

#volumes:
#  nextcloud:
#  db:

services:
  db:
    image: mysql
    restart: always
    command: --transaction-isolation=READ-COMMITTED --log-bin=binlog --binlog-format=ROW
    volumes:
      - ./data/db:/var/lib/mysql
    environment:
      - MYSQL_ROOT_PASSWORD=Adai1214
      - MYSQL_PASSWORD=Adai1214
      - MYSQL_DATABASE=nextcloud
      - MYSQL_USER=nextcloud

  app:
    image: nextcloud
    restart: always
    ports:
      - 8080:80
    links:
      - db
    volumes:
      - ./data/nextcloud:/var/www/html
    environment:
      - MYSQL_PASSWORD=
      - MYSQL_DATABASE=nextcloud
      - MYSQL_USER=nextcloud
      - MYSQL_HOST=db
```
启动部署
```
sudo docker compose up -d
```
输入本地ip：8080即可访问
如有防火墙开启8080端口
```
sudo ufw allow 8080
```
# 获取WebDav地址
![](/img/posts/nextcloud/webdav.png)
映射到Windows本地请看[Windows](https://www.adai.fun/posts/windwos.html)文章中基础操作映射磁盘
