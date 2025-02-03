---
title: 使用Hexo搭建属于静态博客
date: 2024-11-13 23:02:39
tags: [Hexo,博客,Github Page]
categories: [教程]
cover: /img/posts/hexo/hexo.png
top_img: /img/posts/hexo/hexo.png
swiper_index: 3
id: blog
description: 使用hexo和github page搭建个人静态博客
---

# 配置环境
{% tabs test4 %}

<!-- tab Windows -->
下载 {% span red, Git %}，{% span yellow, Node %}
{% btn 'https://git-scm.com/downloads/win',Git,anzhiyufont anzhiyu-icon-circle-arrow-right,larger %}
{% btn 'https://nodejs.org/zh-cn',Node,anzhiyufont anzhiyu-icon-circle-arrow-right,larger %}
<!-- endtab -->

<!-- tab Linux -->
sudo apt install nodejs
sudo apt install npm
sudo apt install git
sudo npm install hexo-cli -g
<!-- endtab -->

<!-- tab Android -->
下载终端模拟器：{% btn 'https://github.com/termux/termux-app/releases',Termux,anzhiyufont anzhiyu-icon-circle-arrow-right,larger %}
获取访问权限
```
termux-setup-storage
```
更新apt
```
apt update
```
安装Git和Node
```
apt install nodejs
apt install git
```
<!-- endtab -->

{% endtabs %}


# 安装hexo并初始化
{% tabs test4 %}
<!-- tab Windows -->
首先创建一个文件夹，进入并右键选择{% label 'Open Git Bash here' blue %}输入
安装hexo
```
npm install hexo-cli -g
```
#初始化hexo
```
hexo init blog
npm install
``` 
<!-- endtab -->

<!-- tab Linux -->

<!-- endtab -->

<!-- tab Android -->
下载终端模拟器：{% btn 'https://github.com/termux/termux-app/releases',Termux,anzhiyufont anzhiyu-icon-circle-arrow-right,larger %}
获取访问权限

```
termux-setup-storage
apt update
```
创建文件夹并进入
```
mkdir blog
cd blog
```

安装Git和Node
```
apt install nodejs
apt install git
```
<!-- endtab -->

{% endtabs %}


# 创建Github page 
打开{% btn 'https://github.com/',GitHub,anzhiyufont anzhiyu-icon-circle-arrow-right,outline blue %}，并创建账号。
登陆之后点击{% label 'Create a new repository' blue %}
![](/img/posts/hexo/githubpage.jpg)
{% label 'Repository name' blue %}输入GitHub名称.github.io点击{% label 'Create repository' blue %}
{% note info simple %}例如GIthub名称 adaiblog ， Repository name：adaiblog.github.io{% endnote %}

# Hexo关联Github

在{% label 'Git Bash' blue %}中输入
```
#安装deploy-git
npm install hexo-deployer-git --save
#GithubName: Github用户名
git config --global user.name "GithubName"
#GithubEmail：Github绑定的邮箱
git config --global user.email "GithubEmail"
```
创建{% label 'SSH keys' blue %}
```
ssh-keygen -t rsa -C "GithubEmail"
```
输入之后一路回车，在C:\Users\adai\.ssh找到{% label 'id_rsa.pub' blue %}并复制其中的内容
{% note info simple %}\adai为windoss用户名，根据自身名称查找{% endnote %}
点击Github个人头像找到{% label 'setting' blue %}->{% label 'SSH and GPG keys' blue %}->{% label 'New SSH keyb' blue %},将{% label 'id_rsa.pub' blue %}内容复制到Key中
![](/img/posts/hexo/ssh.jpg)
打开博客文件中的{% label '_config.yml' blue %}拉到最下面输入
```
deploy:
  - type: 'git'
    repo: git@github.com:GithubName/GithubName.github.io.git
    branch: master
```
保存之后在{% label 'Git Bash' blue %}输入
```
#生成静态文件
hexo g
#部署上传到github
hexo d

# 其他hexo操作
# 创建文章
hexo new "Name"
#本地服务预览
hexo s 
# 清除缓存文件
hexo clean
```
{% note info simple %}GithubName换成自己的名称{% endnote %}
# 更换主题
打开{% btn 'https://hexo.io/themes/',Hexo主题,anzhiyufont anzhiyu-icon-circle-arrow-right,outline blue %}，下载主题文件，将文件复制到blog文件夹下面的themes中，并打开{% span green, _config.yml %}找到{% span green,theme：landscape %},将{% span green,landscape %}改成下载主题文件夹名称
# 绑定域名 开启HTTPS
进入到域名管理页面，点击域名解析创建两条记录
记录类型 CNAME
主机记录 www
记录值：博客地址

记录类型 CNAME
主机记录 @
记录值：博客地址

在blog目录中进入{% span green, source %}，并创建一个名为{% span green, CNAME %}，内容输入域名保存
打开{% btn 'https://github.com/',Github,anzhiyufont anzhiyu-icon-circle-arrow-right,outline blue %}，点击创建的{% span green, GIthub用户名.github.io %}仓，进入点击上方{% span green, Settings %}，选择{% span green, Pages%}在{% span green, Custom domain %}中输入域名并勾选{% span green, Enforce HTTPS %}
![](/img/posts/hexo/www.jpg)

# 搭建部分错误
1. 提示Please make sure you have the correct access rights and the repository exists.
{% tabs 解决办法 %}

<!-- tab -->
可能是git绑定名称邮箱不对，或者密钥错误，这里我们查看并重新生成密钥
```
git config --list    //查看user.name,user.eamil是否正确，不正确重新设置
git config --global user.name "GithubName"     //GithubName: Github用户名
git config --global user.email "GithubEmail"   //#GithubEmail：Github绑定的邮箱
ssh-keygen -t rsa -C "GithubEmail"             //生成密钥
```

<!-- endtab -->

<!-- tab -->
网络原因，查看是否开启github加速器等软件，关闭尝试看是否成功。
如还是不行,检查是否能连接github.com
```
ssh -T git@github.com 
```
如提示：ssh: connect to host github.com port 22: Connection refused,22端口不行就改成443端口
在C:\Users\用户名\.ssh（也就是密钥文件地方）创建一个config并输入以下内容保存
```
Host github.com
User git
Hostname ssh.github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa
Port 443
 
Host gitlab.com
Hostname altssh.gitlab.com
User git
Port 443
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa

``` 



<!-- endtab -->


{% endtabs %}

# 博客短链接地址
打开_config.yml,找到permalink并修改
```
permalink: posts/:id.html
```
在文章上面加入ID：xxxx作为文章地址

# 生成站点xml
安装站点地图生成插件
```
npm install hexo-generator-sitemap --save         //谷歌
npm install hexo-generator-baidu-sitemap --save   //百度，申请门坎：30天内，日均点击量大于1w，快速收录需要加入VIP俱乐部
```
打开根目录_config.yml添加

```
sitemap:
  path: sitemap.xml
  template: ./sitemap_template.xml
  template_txt: ./sitemap_template.txt
  rel: false
  tags: true
  categories: true
baidusitemap:
  path: baidusitemap.xml
```
在跟目录source文件夹中创建robots.txt并输入
```
User-agent: *
Allow: /

Sitemap: https://博客域名/sitemap.xml
```
屏蔽某个文章在其Front-matter中添加
```
sitemap: false
```
# 添加RSS订阅
安装插件
```
npm install hexo-generator-feed --save
```
打开根目录_config.yml添加
```
feed:
  enable: true
  type: atom
  path: atom.xml
  limit: false
```
# 加密文章
安装插件
```
npm install --save hexo-blog-encrypt
```
在文章信息头添加
```
---
title: Hello World
password: hello
abstract: 有东西被加密了, 请输入密码查看.
message: 您好, 这里需要密码.
wrong_pass_message: 抱歉, 这个密码看着不太对, 请再试试.
wrong_hash_message: 抱歉, 这个文章不能被校验, 不过您还是能看看解密后的内容.
---
```
需要全局设置可以在博客_config.yml中添加
```
# Security
encrypt: # hexo-blog-encrypt
  abstract: 有东西被加密了, 请输入密码查看.
  message: 您好, 这里需要密码.
  tags:
  - {name: tagName, password: 密码A}
  - {name: tagName, password: 密码B}
  wrong_pass_message: 抱歉, 这个密码看着不太对, 请再试试.
  wrong_hash_message: 抱歉, 这个文章不能被校验, 不过您还是能看看解密后的内容.
```
如果设置tag，就是根据标签来同意加密文章和密码








