---
title: 一站式聚合多平台存储的利器：Alist Helper
date: 2025-02-07 13:01:14
tags:
  - Windows
categories:
  - 软件
cover: /img/posts/alist/alist.webp
description: 使用alist挂载多个云盘使用
id: alist
main_color: "#3c5784"
---
{% note danger simple %}Alist已被出售给其他公司，请谨慎使用!{% endnote %}
使用Alist Helper图像化Alist和Rclone挂载云盘到本地使用。
# AList 是什么？
AList 是一款开源的文件列表程序，支持将 20+种存储服务（如阿里云盘、百度网盘、OneDrive、Google Drive、本地存储等）统一挂载到同一个Web界面中，实现多平台文件集中管理和分享。其特点包括：
- 📁 免费开源（GitHub可查源码）
- 🌐 支持WebDAV协议
- 🔒 密码保护和权限管理
- 📱 响应式设计（适配手机/电脑）
- 🚀 Docker一键部署

# 安装配置AList Helper
下载[Alist Helper](https://github.com/Xmarmalade/alisthelper/releases)并打开
![](/img/posts/alist/alist.png)
接下来还需要下载[Alist](https://github.com/AlistGo/alist)和[Rclone](https://github.com/rclone/rclone)
{% tabs test4 %}
<!-- tab 自动下载 -->
分别点击安装Alist和Rclone自动下载
![](/img/posts/alist/peizhi.png)
<!-- endtab -->
<!-- tab 手动下载 -->
[Alist](https://github.com/AlistGo/alist/releases)
[Rclone](https://github.com/rclone/rclone/releases)
将解压出来的<code>alist.exe</code>，<code>rclone.exe</code>文件放在AlistHelper文件夹中，并设置工作目录
{% gallery true,330, %}
![](/img/posts/alist/alist2.png)
![](/img/posts/alist/rclone.png)
{% endgallery %}
<!-- endtab -->
{% endtabs %}
设置完成后，点击<code>启动</code>开启Alist服务
# Alist添加云盘
[添加云盘文档](https://alist.nn.ci/zh/guide/drivers/common.html)
点击<code>打开Web GUI</code>进行Alist设置
![](/img/posts/alist/peizhi2.png)
打开页面之后需要进行登录
![](/img/posts/alist/login.png)
用户名默认：<code>admin </code>,密码点击Alist Helper中的<code>生成随机密码</code>
![](/img/posts/alist/mima.png)
登录之后点击管理->储存->添加
{% gallery true,330, %}
![](/img/posts/alist/setting.png)
![](/img/posts/alist/guazai.png)
{% endgallery %}
挂载路径最好式dav/xxxx这样如果要本地映射所有云盘，只需要映射dav这个目录（dav也可以其他名字）
![](/img/posts/alist/dav.png)
返回[主页](http://localhost:5244/)即可看到添加的云盘

# Rclone挂载到本地
首先设置一下Alist用户的权限
{% gallery true,330, %}
quanxian.png
quanxian2.png
{% endgallery %}
设置Rclone的WebDav帐号，输入Alist帐号密码
![](/img/posts/alist/webdav.png)
之后启动Reclone服务
![](/img/posts/alist/startrelone.png)
添加本地映射
![](/img/posts/alist/guazai2.png)
名称：自定义，路径：Alist添加云盘设置的路径，挂载点：映射本地硬盘编号，点击保存
参数：--vfs-cache-mode writes --vfs-cache-max-size 100M
![](/img/posts/alist/guazai3.png)
点击运行
![](/img/posts/alist/guazai4.png)
之后打开次电脑，就可以正常使用了
![](/img/posts/alist/guazai5.png)


# 视频
<iframe class="bilibili" src="//player.bilibili.com/player.html?isOutside=true&&bvid=BV1oNNTenEKX&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
