---
title: 赛事级语音聊天软件Teamspeak部署使用
tags:
  - 语音软件
  - 语音服务器
  - Docker
  - Linux
categories:
  - 服务器
  - 软件
cover: /img/posts/teamspeak/teamspeak.png
swiper_index: 5
abbrlink: 918
date: 2024-11-25 21:36:45
id: teamspeak
description: 赛事级语音聊天软件
aside: false
main_color: "#82baa0"
---

<span>
{% btn 'https://teamspeak.com/zh-CN/downloads/#ts3client',客户端官网,anzhiyufont anzhiyu-icon-circle-arrow-right,larger %}
{% btn 'https://www.myteamspeak.com/addons/L2FkZG9ucy85YzFlZDZmNS0xNWFjLTQ1OGQtODRmYi1jMGMyYjAyNWVmOTc%3D',语音包汉化,anzhiyufont anzhiyu-icon-circle-arrow-right,blue larger %}
{% btn 'https://github.com/jitingcn/TS3-Translation_zh-CN/releases/download/snapshot/Chinese_Translation_zh-CN.ts3_translation',客户端汉化,anzhiyufont anzhiyu-icon-circle-arrow-right,pink larger %}

{% folding yellow, 安装和汉化 %}

打开下载的安装包进行安装。
1. 点击Next
![安装1](/img/posts/teamspeak/ts1.png)
2. 将侧边导航栏拉到最下面然后将下方勾选
![安装2](/img/posts/teamspeak/ts2.png)
3. 选项1：安装为电脑所有人使用 选项2。仅为自己安装使用。
![安装3](/img/posts/teamspeak/ts3.png)
4. 选择安装路径
![安装4](/img/posts/teamspeak/ts4.png)
5. 选择要存储配置的位置 1： 建议保存在用户自己的文件中 2：保存在安装文件夹
![安装5](/img/posts/teamspeak/ts5.png)
6. 是否安装Overwolf软件（这是一个插件，可不安装）
![安装6](/img/posts/teamspeak/ts6.png)
7. 打开软件会有一个声明，侧边导航栏拉到最下面点击i accept即可
![配置1](/img/posts/teamspeak/ts7.png)
8. 随后会出现一个账号登录，ts可以直接关闭免登录使用。也可以点击create accout创建一个账号
![配置2](/img/posts/teamspeak/ts8.png)
9. 随后点击connections-> connet连接服务器
![配置3](/img/posts/teamspeak/ts9.png)
10. 输入ip地址和服务器密码
![配置4](/img/posts/teamspeak/ts10.png)
进入服务器即可使用

{% endfolding %}

{% folding red, Teamspeak设置 %}
{% folding, 汉化 %}
1. teamspeak3
下载上方{% span red, 语音包汉化 %}和{% span red, 客户端汉化 %}，打开文件点击Install（安装），重启客户端完成汉化
![](/img/posts/teamspeak/ts3hanhua.jpg)

2. Teamspeak5
设置(齿轮)->Appearance->Language->简体中文
![](/img/posts/teamspeak/ts5.jpg)
{% endfolding %}
{% folding, 自动连接服务器 %}

如果自己只有一个服务器使用，那么手动点击连接会繁琐，接下来设置达到打开软件自动连接服务器的效果。
1. 首先进入自己使用的服务器，点击上方的书签管理器
![书签1](/img/posts/teamspeak/ts15.png)
2. 进入之后点击下方的进阶选项（这里是点击之后才显示的基本选项），将启动连接服务器勾选即可
![书签2](/img/posts/teamspeak/ts16.png)

{% endfolding %}

{% folding, 麦克风设置%}

首先打开工具->设置->音频输入
![](/img/posts/teamspeak/ts17.png)

启动麦克风方式：
1. 按键通话：设置键位，按下启用麦克风，松开禁用麦克风
2. 持续传输：自由麦，一直启动麦克风（不推荐）
3. 语音检测：自由麦基础上添加了一个阈值，音量到达一定数值启用麦克风。（推荐）
ts默认是感应麦。但是如果背景噪音比较大麦克风也会一直触发，比较吵，所以需要将麦克风触发阈值调高，达到屏蔽底噪效果。

语音检测模式：
1. automatic：自适应设置感应值
2. volume Gate：手动调节阈值
3. Hybrid：无（暂时不确定和volume Gate区别。都是可以手动设置阈值）
我们模式选择volume Gate，点击开始测试，说话看下自己的底噪，将值拉到底噪之上即可。
![](/img/posts/teamspeak/ts18.png)

{% endfolding %}

{% folding, 创建频道及设置%}

点击空白处或者当前频道右键创建频道
主要设置两项：
1. 频道类型：频道存在时间
2. 音质中品质：决定此频道玩家音质如何，建议拉高
{% gallery true,,2 %}
![](/img/posts/teamspeak/pindao1.png)
![](/img/posts/teamspeak/pindao2.png)
![](/img/posts/teamspeak/pindao3.png)
{% endgallery %}
{% tip ban %}如果品质拉最低，再好的麦克风，大家听到的都是炸麦音质{% endtip %}
{% endfolding %}
{% folding, 注册服务器别名 %}
{% btn 'https://www.myteamspeak.com/',注册服务器别名,anzhiyufont anzhiyu-icon-circle-arrow-right,outline green larger %}
![服务器别名注册](/img/posts/teamspeak/teamspeakbieming.jpg)
需要注册teampeak账号登陆之后点击SERVER NICKNAMES上面输入别名，下方根据自己需求输入绑定的DDNS或者公网IP两种方式即可。
{% endfolding %}

{% folding, 添加图标 %}
{% btn 'https://tsicons.com/',Teamspeak图标下载,anzhiyufont anzhiyu-icon-circle-arrow-right,outline orange larger %}
![](/img/posts/teamspeak/tubiao.jpg)
点击权限（M），在设置右上角点击图标，将下载好的文件解压上传即可使用。

{% endfolding %}
{% endfolding %}

{% folding yellow, 服务器 %}
搭建服务器如果想让全国都能访问那必须要有公网ip
- **云服务器**默认都有公网ip，
- **个人电脑**拨打运营商电话进行索要，联通拨打96480（宽带专线客服）。光猫修改桥接模式，路由器进行拨号上网拨打运营商电话要求将光猫修改为桥接模式，部分地区可远程直接帮你修改，又或者让宽带师傅上门给你修改。记得询问一下你的宽带账号密码，然后用路由器进行拨号上网。申请的是动态公网ip会隔一段变化，如果需要固定就需要ddns进行绑定域名。

{% folding green, Linux服务器搭建 %}
1. 创建用户
```
#不推荐root搭建服务,创建temapseak用户
adduser teamspeak
#teamspeak成为sudo用户
sudo adduser teamspeak sudo
#切换到teamspeak
su teamspeak
#切换到teamspeak目录
cd /home/teamspeak
```
2. 下载并安装teamspeak服务器文件
```
#打开teamspeak官网点击下载选择服务器，根据自己的系统点击右边的复制按钮获取，也可以直接点击下载文件。
wget https://files.teamspeak-services.com/releases/server/3.13.7/teamspeak3-server_linux_amd64-3.13.7.tar.bz2
#解压下载的文件（文件名称为下载链接最后/的文字）
tar vxfj teamspeak3-server_linux_amd64-3.13.7.tar.bz2
#将文件拷贝到/home/teamspeak下面的目录中
cp teamspeak3-server_linux_amd64/* -R /home/teamspeak/
#删除压缩包和解压出来的文件
rm -rf teamspeak3-server_linux_amd64 teamspeak3-server_linux_amd64-3.13.7.tar.bz2（更改为自己下载的版本名称）
#接受协议
touch .ts3server_license_accepted
#启动服务器：
./ts3server_startscript.sh start
#接下载出现一串密钥拷贝下来后面会用

------------------------------------------------------------------
                      I M P O R T A N T
------------------------------------------------------------------
      ServerAdmin privilege key created, please use it to gain
      serveradmin rights for your virtualserver. please
      also check the doc/privilegekey_guide.txt for details.

       token=xxxxxxxxxxxxxxxxxxxxxxxxxx
------------------------------------------------------------------

```

3. 服务器搭建完成之后需要开放端口才能连接使用
```
#音频端口
sudo ufw allow 9987
#文件夹端口
sudo ufw allow 30033/tcp
#部署完之后首次链接会提示你输入密钥获取服务器最高权限，此时输入上方token里面的字符即可
```

4. 设置开机自启动
创建文件teamspeak.service
```
#创建并打开
sudo nano /lib/systemd/system/teamspeak.service
#配置自动开启文件（如果使用的是其他用户名称WorkingDirectory,User,Group,ExecStart,ExecStop,ExecReload设置为自己存放的路径）
[Unit]
Description=TeamSpeak3 Server
Wants=network-online.target
After=syslog.target network.target local-fs.target

[Service]
WorkingDirectory=/home/teamspeak/
User=teamspeak
Group=teamspeak
Type=forking
ExecStart=/home/teamspeak/ts3server_startscript.sh start license_accepted=1
ExecStop=/home/teamspeak/ts3server_startscript.sh stop
ExecReload=/home/teamspeak/ts3server_startscript.sh restart
Restart=always
RestartSec=15

[Install]
WantedBy=multi-user.target

#重新加载 systemd
systemctl daemon-reload
#开启自启动(可选)
systemctl enable teamspeak.service
#启动 TeamSpeak
systemctl start teamspeak.service
#停止 TeamSpeak
systemctl stop teamspeak.service
#重启 TeamSpeak
systemctl restart teamspeak.service
```
5. 开放外部端口
本地服务器：在路由器中找到端口转发添加端口
云服务器：进入服务器实例详情页面->配置安全组规则->配置规则->手动添加->选择协议类型，目标填写端口号

{% endfolding %}

{% folding, Windows服务器 %}
[服务器下载](https://teamspeak.com/zh-CN/downloads/#server)
1. **下载并运行服务器**
下载好服务器进行解压，并打开ts3server.exe。
![](/img/posts/teamspeak/ts3server.jpg)
保存字符串，使用客户端进入服务器输入此字符串获取服务器Admin权限。
2. **设置防火墙**
***本地电脑***
方法1:打开windwos安全中心，点击防火墙和网络保护->允许应用通过防火墙->更改设置->允许其他应用->找到ts3server.exe选择即可。
方法2：打开windwos安全中心，点击防火墙和网络保护->高级设置->入站规则右键选择新建规则->选择端口->UDP 特定本地端口 9987 ->点击两次下一步保存即可
***云服务器***
云服务器电脑不需要设置
3. **端口映射**
9987 UDP 默认语音服务器端口
10011 TCP ServerQuery raw 端口
30033 TCP 文件传输端口
***云服务器***
进入服务器实例详情页面->配置安全组规则->配置规则->手动添加->选择协议类型，目标填写端口号
***本地电脑***
进入光猫找到端口映射（端口转发），输入上面端口
![](/img/posts/teamspeak/duankouyingshe.jpg)
{% endfolding %}

{% folding pink, 服务器升级 %}
将旧服务器的 {% span red, .ts3server.sqlitedb %}，{% span yellow, query_ip_denylist.txt %}，{% span green, query_ip_allowlist.txt %}，{% span cyan, ssh_host_rsa_key %}，{% span blue, .ts3server.license_accepted %} 
覆盖到新的解压服务器文件即可

{% endfolding %}
{% endfolding %}

{% folding purple, 权限管理 %}
{% folding, 权限设置 %}
{% btn 'https://www.teamspeak3.com/teamspeak-3-server-permission-list.php',Teamspeak权限列表说明,anzhiyufont anzhiyu-icon-circle-arrow-right,outline orange larger %}
首先需要在设置里开启高级权限选项，方便后续设置
![](/img/posts/teamspeak/guanli6.png)

常规设置：
```
设置删除权限等级：
进入高级权限->Channel->Delete，将i_channel_delete_power 更改为对应等级
修改加入和订阅权限：
进入高级权限->Channel->Access
b_channel_join_permanent	加入永久频道等级
b_channel_join_semi_permanent	加入半永久频道等级
b_channel_join_temporary  加入半临时频道等级
b_virtualserver_join_ignore_password  加入虚拟服务器忽略其密码（填写对应等级 如果勾选虽然提示密码但是直接点确定可以直接进入不勾选就需要输入密码才可以进入）
b_channel_join_ignore_maxclients  忽略通道最大客户端限制 （勾选无视频道最大人数 不勾选无法进入满人房间）
i_channel_join_power    频道加入等级
i_channel_needed_join_power	所需频道加入等级
i_channel_subscribe_power	频道订阅等级
i_channel_needed_subscribe_power	所需的频道订阅等级
i_channel_description_view_power	查看频道描述等级
i_channel_needed_description_view_power 查看所需频道描述等级
```
{% note info simple %}如何Access里面没有这些参数，鼠标放到access上右键点击Add Permission Group就有了，设置完不要点击应用直接退出即可{% endnote %}
{% endfolding %}

{% folding , 权限恢复 %}
1. 开启自动同步身份信息
开启身份同步信息就需要登录上号
点击上方导航栏工具->设置->myteamspeak 进行登录，下方可选择自动同步。
![](/img/posts/teamspeak/quanxian1.jpg)
{% note warning simple %}网络环境不好的时候可能同步不上{% endnote %}


2. 手动同步
点击上方导航栏工具->身份，此时能看到本地身份有一个选项，右键点击导出一个.ini文件，更换电脑时在将此文件导入并设置为默认选项即可。
{% gallery true,,2 %}
  ![](/img/posts/teamspeak/quanxian2.jpg)
  ![](/img/posts/teamspeak/quanxian3.jpg)
{% endgallery %}

3. 创建权限密钥
 点击软件上方的权限（M），点击权限密钥
![](/img/posts/teamspeak/ts19.png)
创建服务器密钥类型
![](/img/posts/teamspeak/ts20.png)
{% note warning simple %}拥有创建密钥的权限，需要将“分配和删除成员”选项勾选，并选择可创建权限密钥等级，密钥使用过后就会失效，建议多创建几个。防止丢失{% endnote %}

### 密钥使用
点击上方权限（M）->使用权限密钥输入即可恢复权限。

# 账号密钥
当我们创建账号登录使用的时候，如果更换电脑登录那么软件需要我们输入账号的密钥，这个密码在创建的时候会提示。
如果我们丢失可以在工具->选项->myTeamSpeak->新的恢复密钥来创建新的密钥
![账号1](/img/posts/teamspeak/ts21.png)
{% note warning simple %} 创建新的密钥之后权限会丢失，请提前备份好权限密钥{% endnote %}


{% endfolding %}
{% endfolding %}


# 视频版
<iframe class="bilibili" src="//player.bilibili.com/player.html?isOutside=true&aid=113453960269226&bvid=BV1GHDCYLEBo&cid=26689734463&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"> </iframe>
<iframe class="bilibili" src="//player.bilibili.com/player.html?isOutside=true&aid=113454379696239&bvid=BV1vqDkYLEJz&cid=26690584699&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
