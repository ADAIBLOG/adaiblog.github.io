---
title: 语音开黑软件Mumble的部署与使用
tags:
  - Mumble
  - Mumble服务器
  - 语音软件
categories:
  - 教程
cover: /img/posts/mumble/mumble.png
top_img: /img/posts/mumble/mumble.png
swiper_index: 6
abbrlink: 37213
date: 2024-11-08 23:47:16
id: mumble
description: 一款开源的语音开黑软件
aside: false
---
{% btn 'https://www.mumble.info/',客户端官网,anzhiyufont anzhiyu-icon-circle-arrow-right,larger %}
{% btn 'https://adaifun.lanzout.com/ieN5c2fo6c2h',云盘下载,anzhiyufont anzhiyu-icon-circle-arrow-right,larger %}
{% note warning simple %}版本v1.5.634 密码：adaifun{% endnote %}

{% folding orange  , Mumble设置 %}
1. 麦克风设置
![](/img/posts/mumble/yinpin.png)

设备：设备修改成自己麦克风设置
传输模式： {% span yellow, 连续发言 %}，{% span green, 语音激活 %} ，{% span cyan, 按键发言 %}
{% span yellow, 连续发言 %}：自由麦
{% span green, 语音激活 %}：安静阈值：低于此值视为不启用麦克风，语音阈值：高于此值使用启用麦克风
{% span cyan, 按键发言 %}：设置按键触发麦克风
{% span blue, 压缩质量 %}：你的语音数据包的音频质量，理论是越高越好，但也要看服务器最高支持多少质量


2. 快速连接服务器
点击设置->网络->勾选启动时自动链接上次的服务器
![](/img/posts/mumble/kuaisulianjie.png)

3. 关闭上传隐私数据
勾选 请勿向Mumble服务器和页面服务器发送操作系统信息
![](/img/posts/mumble/mumble15.png)

{% endfolding %}
{% folding green , Linux服务器搭建 %}

{% folding , 安装 %}
```
#不推荐使用root搭建服务，创建新用户
adduser mumble
#添加sudo权限
sudo adduser mumble sudo
#切换到mumble用户
su mumble
#切换到mumble目录
cd /home/mumble
#安装
apt install mumble-server
#启动服务，点击两次yes，之后设置superuser用户密码
sudo dpkg-reconfigure mumble-server
#开机自启动
sudo systemctl start mumble-server
#开启端口
sudo ufw allow 64738
```
{% endfolding %}
{% folding , 服务器配置文件 %}
```
#打开配置文件
sudo nano /etc/mumble-server.ini
#设置完重启配置文件
sudo service mumble-server restart
```
{% span red, welcomtext %}：服务器欢迎语句
{% span red, port %}：端口
{% span red, serverpassword %}：服务器密码
{% span red, bandwidth %}：服务器音频质量
{% span red, users %}：服务器可加入人数
{% span red, registerName %}:更改默认Root频道名称
{% note warning simple %}部分配置被注释，请删除前面的 ；{% endnote %}

{% endfolding %}
{% folding , 开放外部端口 %}
1. 本地服务器：在路由器中找到端口转发添加端口
2. 云服务器：进入服务器实例详情页面->配置安全组规则->配置规则->手动添加->选择协议类型，目标填写端口号
{% endfolding %}
{% endfolding %}

{% folding blue  , 权限管理 %}
# 官方文档
{% btn 'https://www.mumble.info/documentation/administration/acl/',ACL,anzhiyufont anzhiyu-icon-circle-arrow-right,larger %}
# 创建分组
右键默认频道（ROOT）->编辑->分组，输入名称点击添加。
![](/img/posts/mumble/mumble0.png)
# 添加成员
分组中选中新增的分组，在成员栏中，输入需要添加权限的成员，点击添加
![](/img/posts/mumble/mumble3.png)
{% note info simple %}添加成员必须是注册的用户才能添加。{% endnote %}

# 赋予分组权限
右键默认频道（ROOT）->编辑->ACL（访问控制列表）
{% span red, @all %}   所有人
{% span red, @auth %}  已注册用户
{% span red, @in %}    在这个频道里
{% span red, @out %}   在此频道之外
{% span red, @~sub %}  子频道 


点击添加,在分组中找到我们刚添加的分组，在右侧给予相关权限
![](/img/posts/mumble/mumble2.png)

{% note info simple %}这里需要注意权限的上下顺序依次覆盖的。如果@all放在最下面，那么我们设置的所有权限都没有任何作用{% endnote %}

# 区分权限范围
1. 全局权限：在Root频道激活的ACL是可以被任何频道继承的。如果每个频道都勾选继承ACL即可实现全局
创建第二个频道，并打开ACL（访问控制列表），这时候默认继承ACL是不勾选的。此时就没有任何管理权限。
{% gallery false,,2 %}
![](/img/posts/mumble/mumble5.png)
![](/img/posts/mumble/mumble6.png)
{% endgallery %}
2. 频道内权限：非ROOt频道创建的权限仅适用于当前频道，如使用相同分组，那么分组中的成员也仅适用于当前频道。


# 个人权限方案
我们服务器需要两套管理系统，一套服务器全局，一套频道内管理，这时就需要用到ACL继承。
1. 服务器全局权限：服务器所有者，服务器管理员，auth，all
{% span green, 服务器所有者 %}：一切权限
{% span green, 服务器管理员 %}：除编辑ACL一切权限 
{% span green, auth %}：注册，进入其他频道。语音文字
{% span green, all %}： 仅能语音进入默认频道，因为all为默认权限无法修改所以我们创建一个新的all，覆盖默认的
{% note info simple %}权限是从上到下依次覆盖的，如果all放在最下面，那么上面设置的所有权限都将无效{% endnote %}
{% gallery false,,2 %}
![](/img/posts/mumble/mumble8.png)
![](/img/posts/mumble/mumble13.png)
![](/img/posts/mumble/mumble6.png)
![](/img/posts/mumble/mumble7.png)
{% endgallery %}


2. 频道范围：所有者，组管理员，组成员
{% span green, 所有者 %}：频道所有权限 
{% span green, 组管理员 %}：除编辑ACL权限 
{% span green, 组成员 %}：进入频道，文字语音权限 
首先分别创建对应的分组
![](/img/posts/mumble/mumble1.png)
打开此频道的编辑，ACL（访问控制列表）并添加对应权限
{% gallery false,,2 %}
![](/img/posts/mumble/mumble9.png)
![](/img/posts/mumble/mumble10.png)
![](/img/posts/mumble/mumble11.png)
{% endgallery %}
{% note info simple %}这个组的成员中的成员只适用于当前频道及子频道，如果我们切换其他频道，再点开这个组成员里面列表就是空的{% endnote %}

如果我们希望这个频道只能本频道成员进入，之前已经禁止all用户进入频道，还需要添加一个新的服务器正式用户权限，阻止进入
![](/img/posts/mumble/mumble14.png)
# 其他权限
1. 专属权限
如果说这个权限就是为一个用户单独设置的。那么我们可以直接填写用户ID，配置权限
![](/img/posts/mumble/mumble12.png)
# 视频
<iframe class="bilibili" src="//player.bilibili.com/player.html?isOutside=true&aid=113545127855121&bvid=BV1RAzMYHEYh&cid=27014269396&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
{% endfolding %}

{% folding pink  , Mumblec备份文件 %}
# Windwos
数据库：%APPDATA%\Mumble\mumble.sqlite
设置：在Windows注册表的HKEY_CURRENT_USER\Software\Mumble\Mumble
# Mac OS X
数据库：$HOME/Library/Application Support/Mumble/Mumble/.mumble.sqlite
设置：$HOME/Library/Preferences/net.sourceforge.mumble.Mumble.plist
# Linux
数据库: $HOME/.local/share/Mumble/Mumble/mumble.sqlite
设置: $HOME/.config/Mumble/Mumble.conf
{% endfolding %}
