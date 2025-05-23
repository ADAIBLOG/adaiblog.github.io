---
title: 搭建Minecraft服务器
date: 2025-03-20 14:12:01
tags:
  - 游戏服务器
  - Linux
categories:
  - 服务器
cover: /img/posts/mincraft.jpg
id: mincraft
description: 搭建我的世界服务器
main_color: "#72dcfe"
---
## Java版
[教程:架设Java版服务器](https://zh.minecraft.wiki/w/Tutorial:架设Java版服务器)
### 下载Minecraft服务器压缩包
```
wget -O minecraft_server.jar 
https://piston-data.mojang.com/v1/objects/84194a2f286ef7c14ed7ce0090dba59902951553/server.jar

sudo apt install openjdk-17-jdk

java -Xmx1024M -Xms1024M -jar server.jar
```
### 遵守eula协议
```
vi eula.txt
将false改为true
```
### 启动服务
```
java -Xmx500M -Xms500M -jar server.jar
```
### 开启端口
```
sudo ufw allow 25565
```

## 基岩版
[教程:架设基岩版服务器](https://zh.minecraft.wiki/w/基岩版)
### 下载Minecraft服务器压缩包
```
curl -o server.zip https://minecraft.azureedge.net/bin-linux/bedrock-server-1.20.13.01.zip
```
### 解压 文件（需要安装解压软件zip）
```
unzip server.zip
```
### 修改配置，是非正版玩家可以游玩
```
vi server.properties
online_mode = false
```
### 开启端口
```
sudo ufw allow 19132 
```

# 持久运行
### 安装screen
```
#安装
sudo apt install screen
# 创建一个窗口
screen -S mc
# 启动MC服务
LD_LIBRARY_PATH=. ./bedrock_server
```
### screen指令
```
screen -ls （列出当前终端数目）
screen -r xx （进入xx终端中）
screen -wipe xx （删除xx终端）
```