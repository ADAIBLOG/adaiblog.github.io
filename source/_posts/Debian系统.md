---
title: Debian系统的基础操作
tags:
  - Linux
  - Debian
cover: /img/posts/debian/debian.png
top_img: /img/posts/debian/debian.png
categories:
  - 系统
date: 2024-10-30 23:51:43
id: debian
description: Debian系统的基础操作
aside: false
---

# 操作语法
{% folding  , 基本操作 %}
```
#清理屏幕
clear
#安装应用 
apt install xxxx
#卸载应用
sudo apt --purge remove xxxx
#删除文件
rm 文件名
```

{% endfolding %}
{% folding  , 更新apt %}
更新软件信息数据库
```
apt update
apt upgrade
```
{% endfolding %}
{% folding  , 创建用户 %}
```
#创建用户
sudo adduser 用户名
#用户成为sudo用户
sudo adduser xxx sudo
#删除用户
sudo deluser --remove-home 用户名
sudo userdel 用户名
```

{% endfolding %}

{% folding  , 挂在硬盘 %}

``` 
#在目录/mnt下面创建一个文件夹
sudo mkdir yingpan
#查询添加的磁盘,找到所需磁盘
sudo fdisk -l
#格式化硬盘为ext4格式，后面路径未查询到新硬盘的路径请自行修改
mkfs -t ext4 /dev/sda1
#挂载
mount  /dev/sda1 /mnt/yingpan
#取消挂载
umount /dev/sda1
#设置开机自动挂载
sudo vim /etc/fstab
/dev/sda1   /mnt/yingoan   ext4     defaults
#生效
sudo mount -a
```
{% endfolding %}


# 软件安装
{% folding  , 安装SSH %}

安装open ssh
```
apt install openssh  
```
允许远程登陆root用户

```
nano /etc/ssh/sshd_config 
```
将{% span yellow, #PermitRootLogin prohibit-password %} 改成 PermitRootLogin yes，{% span red, #PasswordAuthentication yes %}前面的#取消，win+x输入Y回车保存
```
service ssh restart
```

{% endfolding %}

{% folding , 安装UFW  %}


```
# 安装
sudo apt install ufw
#设置跟随系统启动
sudo ufw enable
sudo ufw default deny
#检查ufw状态
sudo ufw status 
#添加规则       
sudo ufw allow 端口号 
#删除端口号  
sudo ufw delete allow 端口号   
```


{% endfolding %}


{% folding  , SMB局域网  %}
``` 
sudo apt install samba
#查看samba版本
samba --version
#配置samba文件，按i进入编辑
sudo nano /etc/samba/smb.conf

[编辑分享文件夹名称]
   comment = 介绍
   browseable = yes
   path = 分享文件路径
   create mask = 0777
   directory mask = 0777
   valid users = user
   public = yes
   available = yes
   writable = yes
```
{% note info modern %}info 默认是开启home共享的，如不需要，在/etc/samba/smb.conf中将[homes]前面加一个#注释掉{% endnote %}
path填写文件目录，valid users输入用户名随后进行创建，ctrl+x按Y保存


```
#创建用户，user可任意填写名称只要与上方配置文件保持一致即可
sudo smbpasswd -a user
创建samba文件夹
sudo mkdir /samba/share
#如果有ufw需要开启445端口，到这里就完成samba的所有部署了
sudo ufw allow 445
#如果连接提示禁止访问，修改文件夹访问权限
sudo chmod -R 777 /samba
#重启samba服务
sudo service smbd restart
#如果不使用了关闭samba 
sudo service smbd stop
```
Windows链接SMB：打开此电脑，地址栏输入{% label \\\\ip地址 green %}（比如：\\\\192.168.50.85）随后输入账号密码，即可访问

![](/img/posts/windows/smb1.png)

{% endfolding %}
{% folding  , 安装vim编辑器  %}
``` 
sudo apt install vim
```
{% endfolding %}

