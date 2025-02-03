---
title: 部署vercel增加博客访问速度
date: 2024-11-25 14:10:45
tags: [Vercel,博客,Github Page]
categories: [网站]
cover: /img/posts/vercel/vecel.png
top_img: /img/posts/vercel/vecel.png
id: vercel
description: 将Github page博客部署到vercel增加访问速度
---

打开{% btn 'https://vercel.com/',Vercel,anzhiyufont anzhiyu-icon-circle-arrow-right,outline purple  %}，选择{% label 'Continue with GitHub' blue %}
![](/img/posts/vercel/vercelzhuce.png)
登陆之后点击{% label 'Add New' blue %}->{% label 'Project' blue %}->点击{% label 'Import' blue %}导入hexo博客
![](/img/posts/vercel/verceldaoru.png)
导入之后即可获得一个Vercel域名
![](/img/posts/vercel/cercelyuming.png)
但Velcel域名被墙了，需要绑定一个新的域名，选择{% label '仓' blue %}->{% label 'Settings' blue %}->{% label 'Domains' blue %}->{% label '添加域名' blue %}
![](/img/posts/vercel/domains.png)
![](/img/posts/vercel/domains2.png)
打开{% btn 'https://dc.console.aliyun.com/next/index?spm=5176.21213303.J_qCOwPWspKEuWcmp8qiZNQ.4.7bf72f3dr1deCG#/overview',域名管理,anzhiyufont anzhiyu-icon-circle-arrow-right,outline purple  %}:{% label '域名列表' blue %}->{% label '选择购买域名' blue %}->{% label '域名解析' blue %}。创建如下规则

![](/img/posts/vercel/yuming1.png)
![](/img/posts/vercel/yuming2.png)

# 提示无法需要验证
![](/img/posts/vercel/wufadenglu.png)
用GitHub绑定的邮箱给registration@vercel.com，主题：My account is blocked，内容如下
```
I’m sorry to bother you.
My Github account has been blocked,
The page prompts “My account requires further verification”
I would like you to unblock it.
My GitHub account name is XXXXXX
```
> 解决办法源自：https://www.tjsky.net/tutorial/971
