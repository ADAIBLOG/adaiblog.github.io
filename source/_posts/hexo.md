---
title: 使用Hexo搭建属于静态博客
date: 2024-11-13 23:02:39
tags: [Hexo,Github]
categories: [博客]
cover: /img/posts/hexo/hexo.png
swiper_index: 3
id: blog
description: 使用hexo和github搭建属于自己的静态博客 page搭建个人静态博客
main_color: "#2481c9"
---

# 配置环境
{% tabs test4 %}

<!-- tab Windows -->
下载 {% span red, Git %}，{% span yellow, Node %}
{% btn 'https://git-scm.com/downloads/win',Git,anzhiyufont anzhiyu-icon-circle-arrow-right,larger %}
{% btn 'https://nodejs.org/zh-cn',Node,anzhiyufont anzhiyu-icon-circle-arrow-right,larger %}
<!-- endtab -->

<!-- tab Linux -->
安装node和git
```
sudo apt install git-core
sudo apt install nodejs
```
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
首先创建一个文件夹，进入并右键选择`Open Git Bash here`输入
安装hexo并初始化
``` 
npm install hexo-cli -g
hexo init blog
npm install
``` 
<!-- endtab -->

<!-- tab Linux -->
创建文件夹并进入
```
mkdir blog
cd blog
```
安装并初始化hexo
```
npm install hexo-cli -g
hexo init blog
npm install
```
<!-- endtab -->

<!-- tab Android -->
创建文件夹并进入
```
mkdir blog
cd blog
```
安装并初始化hexo
```
npm install hexo-cli -g
hexo init blog
npm install
```
<!-- endtab -->

{% endtabs %}


# 创建Github page 
打开{% btn 'https://github.com/',GitHub,anzhiyufont anzhiyu-icon-circle-arrow-right,outline blue %}，并创建账号。
登陆之后点击`Create a new repository`
![](/img/posts/hexo/githubpage.jpg)
`Repository name`输入GitHub名称.github.io点击`Create repository`
{% note info simple %}例如GIthub名称 adaiblog ， Repository name：adaiblog.github.io{% endnote %}

# Hexo关联Github

在`Git Bash`中输入
安装deploy-git
```
npm install hexo-deployer-git --save
```
输入github用户名，邮箱
```
git config --global user.name "GithubName"
git config --global user.email "GithubEmail"
```
创建`SSH keys`
```
ssh-keygen -t rsa -C "GithubEmail"
```
输入之后一路回车,
`Windows`在C:\Users\adai/\.ssh找到`id_rsa.pub`并复制其中的内容
{% note info simple %}\adai为windoss用户名，根据自身名称查找{% endnote %}
`Android`:在termux文件夹中打开`.ssh`文件夹
点击Github个人头像找到`setting`->`SSH and GPG keys`->`New SSH keyb`,将`id_rsa.pub`内容复制到Key中
![](/img/posts/hexo/ssh.jpg)
验证ssh
```
ssh -T git@github.com
```
打开博客文件中的`_config.yml`拉到最下面输入
```
deploy:
  - type: 'git'
    repo: git@github.com:GithubName/GithubName.github.io.git
    branch: master
```
保存之后在`Git Bash`输入
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
打开{% btn 'https://hexo.io/themes/',Hexo主题,anzhiyufont anzhiyu-icon-circle-arrow-right,outline blue %}，下载主题文件，将文件复制到blog文件夹下面的themes中，并打开` _config.yml`找到`theme：landscape`,将`landscape`改成下载主题文件夹名称
# 绑定域名 开启HTTPS
进入到域名管理页面，点击域名解析创建两条记录
记录类型 CNAME
主机记录 www
记录值：博客地址

记录类型 CNAME
主机记录 @
记录值：博客地址

在blog目录中进入`source`，并创建一个名为` CNAME`，内容输入域名保存
打开{% btn 'https://github.com/',Github,anzhiyufont anzhiyu-icon-circle-arrow-right,outline blue %}，点击创建的` GIthub用户名.github.io`仓，进入点击上方` Settings`，选择` Pages`在` Custom domain `中输入域名并勾选`Enforce HTTPS`
![](/img/posts/hexo/www.jpg)

# 多端同步
如果你已经在一个平台部署了hexo,那么只需要将blog中的所有文件拷贝到另一个设备。(安卓端最好将文件放在termux目录下避免权限问题。)
[配置环境](https://www.adai.fun/posts/blog.html#配置环境)之后打开git bash(pc端)/termux
(安卓端)
```
# 进入博客文件夹
cd blog 

# 清理旧依赖（如果存在）
rm -rf node_modules

# 重新安装所有依赖
npm install

# 全局安装 Hexo CLI（若未安装）
npm install hexo-cli -g

# 生成静态文件
hexo clean && hexo generate

# 启动本地服务器（默认端口 4000）
hexo server
```

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
2. hexo d错误无法上传
```
INFO  Deploying: git
INFO  Clearing .deploy_git folder...
INFO  Copying files from public folder...
INFO  Copying files from extend dirs...
error: 'source/_posts/' does not have a commit checked out
fatal: adding files failed
FATAL Something's wrong. Maybe you can find the solution here: https://hexo.io/docs/troubleshooting.html
Error: Spawn failed
    at ChildProcess.<anonymous> (/data/data/com.termux/files/home/adaiblog/node_modules/hexo-util/dist/spawn.js:47:31)
    at ChildProcess.emit (node:events:507:28)
    at ChildProcess._handle.onexit (node:internal/child_process:294:12)
```
这个时候打开博客文件夹找到/source/_posts/.git删除.git文件夹以解除仓库状态，随后清理Hexo缓存和生成文件，并重新上传
```
hexo clean 
hexo g
hexo d
```
3. 在上传推送时报错如下
```
remote: error: GH013: Repository rule violations found for refs/heads/master.                                   remote:                                                 remote: - GITHUB PUSH PROTECTION                        remote:   —————————————————————————————————————————     remote:     Resolve the following violations before pushing again                                               remote:                                                 remote:     - Push cannot contain secrets               remote:                                                 remote:                                                 remote:      (?) Learn how to resolve a blocked push    remote:      https://docs.github.com/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/working-with-push-protection-from-the-command-line#resolving-a-blocked-push                                 remote:                                                 remote:                                                 remote:       —— Tencent Cloud Secret ID ———————————————————————————                                            remote:        locations:                               remote:          - blob id: 11b09fbc1e4dac6df5822fa90bb454c8e16707a9                                            remote:                                                 remote:        (?) To push, remove secret from commit(s) or follow this URL to allow the secret.                remote:        https://github.com/ADAIBLOG/adaiblog.github.io/security/secret-scanning/unblock-secret/2xUu0IVzQxUGN05ytuE7IXPXMkN                                       remote:                                                 remote:                                                 remote:     ——[ WARNING ]—————————————————————————————————————————                                              remote:      Scan incomplete: This push was large and we didn't finish on time.                                 remote:      It can still contain undetected secrets.   remote:                                                 remote:      (?) Use the following command to find the path of the detected secret(s):                          remote:          git rev-list --objects --all | grep blobid                                                     remote:     ——————————————————————————————————————————————————————                                              remote:                                                 remote:                                                 To github.com:adaiblog/adaiblog.github.io.git            ! [remote rejected] HEAD -> master (push declined due to repository rule violations)                           error: failed to push some refs to 'github.com:adaiblog/adaiblog.github.io.git'
```
只需要找到secret from commit(s) or follow this URL to allow the secret.，中的地址进入同意即可。

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








