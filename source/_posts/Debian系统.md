---
title: Linux系统：Debian
tags:
  - Linux
cover: /img/posts/debian/debian.png
categories:
  - 系统
date: 2024-10-30 23:51:43
id: debian
description: Debian系统的基础操作
main_color: "#a7002f"
---
记录一下从0开始安装debian服务器系统
# 下载
因为设备性能和用途原因这里我选择安装无桌面版本
打开[debian](https://www.debian.org/index.zh-cn.html)官网，直接点击下载的ios是网络安装，速度比较慢并且无法离线安装，我们点击{% label 其他下载链接 blue %}，选择{% label '镜像站点' pink %}找到中国大陆选择其中一个，点击{% label 'current-live' red %}这个是当前最新版本。之后选择{% label 'AMD64' green %}->{% label 'iso-hybrid' orange %}里面有很多版本，这里我们选择{% label 'standard.ios' purple %}标准版下载即可
{% gallery true,,2 %}
![](/img/posts/debian/debiandownload.png)
![](/img/posts/debian/debiandownload2.png)
![](/img/posts/debian/debiandownload3.png)
{% endgallery %}
下载完成之后，开始制作U盘启动器。首先下载U盘启动器工具：[Rufus](https://github.com/pbatard/rufus/releases)，选择U盘设备并导入ios文件开始制作。
<img src="/img/posts/debian/rufus.png" width="300">

# 安装

将优盘插入需要安装的设备上，开机按{% kbd Del %}进入bios将u盘设置第一启动项并重启。
来到安装页面，选择{% label 'Start Installer' green %}开始安装
<img src="/img/posts/debian/debianinstall.jpg" width="500">
语言选择{% label 'English' green %}，地区选择{% label 'HongKong' orange %}，键盘映射选择{% label 'American English' pink %}
{% gallery true,,2 %}
![](/img/posts/debian/debianinstall2.jpg)
![](/img/posts/debian/debianinstall3.jpg)
![](/img/posts/debian/debianinstall4.jpg)
{% endgallery %}
主机名称{% label 'debian' green %}，Domain name{% label '不填跳过' red %}，设置{% label 'Root密码' pink %}，创建{% label '新用户' blue %}，创建{% label '新用户密码' orange %}
{% gallery true,,2 %}
![](/img/posts/debian/debianinstall5.jpg)
![](/img/posts/debian/debianinstall6.jpg)
![](/img/posts/debian/debianinstall7.jpg)
![](/img/posts/debian/debianinstall8.jpg)
![](/img/posts/debian/debianinstall9.jpg)
{% endgallery %}
磁盘安装方式{% label 'use entire disk' green %}，选择{% label '安装系统的硬盘' red %}，分区方式选择{% label '/home,/var,/tmp' pink %}，完成磁盘设置{% label 'Finish Partitioning' blue %}，进行格式化{% label 'yes' orange %}
{% gallery true,,2 %}
![](/img/posts/debian/debianinstall10.jpg)
![](/img/posts/debian/debianinstall11.jpg)
![](/img/posts/debian/debianinstall12.jpg)
![](/img/posts/debian/debianinstall13.jpg)
![](/img/posts/debian/debianinstall14.jpg)
{% endgallery %}
是否选择网络镜像，根据自己需求选择{% label 'No' blue %}或者{% label 'YES' red %}
如果是YES选择{% label 'China' pink %}，点击163，tuna等国内镜像。
网络代理{% label '不填' orange %}等待安装完成。之后拔掉U盘重启电脑。
{% gallery true,,2 %}
![](/img/posts/debian/debianinstall15.jpg)
![](/img/posts/debian/debianinstall16.jpg)
![](/img/posts/debian/debianinstall17.jpg)
![](/img/posts/debian/debianinstall18.jpg)
{% endgallery %}

# 系统操作
### 更新系统和软件包
```
apt update 
apt upgrade
```
无法apt更新解决办法

检查是否能ping通8.8.8.8排除是否是检查网线/路由器/防火墙
```
ping 8.8.8.8
```
打开DNS配置文件并加添DNS地址
```
nano /etc/resolv.conf
nameserver 8.8.8.8
```
{% kbd Ctrl %}+{% kbd X %}后按{% kbd Y %},再按{% kbd Enter %}进行保存
如果还是不可以检查网络接口状态
```
ip a
# DHCP 自动获取
dhclient 接口名称
```
### 开启远程ssh访问

可以下载ssh远程进行登录操作（如果有防火墙开启22端口）
```
apt instal openssh-server  //下载ssh
service ssh restart //重启ssh服务
```
要想远程登录Root用户，需要对ssh配置文件进行修改
```
nano /etc/ssh/sshd_config 
```
将<a>#PermitRootLogin prohibit-password</a>改成{% label 'PermitRootLogin yes' red %}，<a>#PasswordAuthentication yes</a>前面的{% label '#' red %}取消
{% kbd Ctrl %}+{% kbd X %}后按{% kbd Y %},再按{% kbd Enter %}进行保存,并重启SSH
```
service ssh restart 
```

## 操作语法
{% folding  , 基本操作 %}
### 清理屏幕
```
clear
```
### 安装应用 
```
apt install xx
```
### 卸载应用
```
sudo apt --purge remove xxxx
```
### 删除文件
```
rm 文件名
```
{% endfolding %}

{% folding  , 创建用户 %}

### 创建用户
```
sudo adduser 用户名
```
### 用户成为sudo用户
```
sudo adduser xxx sudo
```
### 删除用户
```
sudo deluser --remove-home 用户名
sudo userdel 用户名
```

{% endfolding %}

{% folding  , 挂在硬盘 %}

## 在目录/mnt下面创建一个文件夹
```
sudo mkdir yingpan
```
## 查询添加的磁盘,找到所需磁盘
```
sudo fdisk -l
```
## 格式化硬盘为ext4格式，后面路径未查询到新硬盘的路径请自行修改
```
mkfs -t ext4 /dev/sda1
```
## 挂载
```
mount  /dev/sda1 /mnt/yingpan
```
## 取消挂载
```
umount /dev/sda1
```
## 设置开机自动挂载
```
sudo vim /etc/fstab
/dev/sda1   /mnt/yingoan   ext4     defaults
```
## 生效
```
sudo mount -a
```
{% endfolding %}


## 软件安装
{% folding  , 防火墙ufw  %}
### 安装ufw
```
sudo apt install ufw
```
## 设置跟随系统启动
```
sudo ufw enable
sudo ufw default deny
```
## 检查ufw状态
```
sudo ufw status 
```
## 添加删除规则    
```
sudo ufw allow 端口号 
sudo ufw delete allow 端口号   
```
{% endfolding %}

{% folding  , SMB局域网  %}
## 安装smb
``` 
sudo apt install samba
```
## 查看samba版本
```
samba --version
```
## 配置samba文件，按i进入编辑
```
sudo nano /etc/samba/smb.conf
```

```
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


## 创建用户，user可任意填写名称只要与上方配置文件保持一致即可
```
sudo smbpasswd -a user
```
## 创建samba文件夹
```
sudo mkdir /samba/share
```
## 开启端口
```
sudo ufw allow 445
```
##如果连接提示禁止访问，修改文件夹访问权限
```
sudo chmod -R 777 /samba
```
## 重启samba服务
```
sudo service smbd restart
```
## 如果不使用了关闭samba
```
sudo service smbd stop
```
Windows链接SMB：打开此电脑，地址栏输入{% label \\\\ip地址 green %}（比如：\\\\192.168.50.85）随后输入账号密码，即可访问

![](/img/posts/windows/smb1.png)

{% endfolding %}
{% folding  , 安装vim编辑器  %}
``` Shell
sudo apt install vim
```
{% endfolding %}

