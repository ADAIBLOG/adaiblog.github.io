---
title: RSSHub
date: 2025-07-22 00:25:43
tags:
  - Rss
  - Docker
categories:
  - 服务器
cover: /img/posts/rsshub.webp
id: rsshub
main_color: "#96C61B"
---
万物皆可 RSS:[RSSHub](https://docs.rsshub.app/zh/),[文档](https://docs.rsshub.app/zh/guide/)
## 安装
## Docker
1. 拉取镜像
```
docker pull diygod/rsshub:latest
```
2. 启动 
```
docker run -d --name rsshub -p 1200:1200 diygod/rsshub:latest
```
3. 访问 
http://{Server IP}：1200

## Docker-compose
[docker compose内容](https://github.com/DIYgod/RSSHub/blob/master/docker-compose.yml)
1. [docker-compose文件](https://raw.githubusercontent.com/DIYgod/RSSHub/master/docker-compose.yml)
- 创建docker-compose.yml
```
mkdir docker-compose.yml
```
- 或下载docker-compose.yml
```
wget https://raw.githubusercontent.com/DIYgod/RSSHub/master/docker-compose.yml
```
2. 编辑docker-compose.yml
```
vi docker-compose.yml
```
3. 启动
```
docker-compose up -d
```

## 部署到Vercel 
[点击部署](https://vercel.com/import/project?template=https://github.com/DIYgod/RSSHub)

# 问题 
1. 无法访问
是否开启1200端口