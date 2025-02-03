---
title: 关于Steam令牌，展柜，安全等
cover: /img/posts/steam/steam.png
top_img: /img/posts/steam/steam.png
tags:
  - Steam令牌
  - Steam展柜
categories:
  - 应用
abbrlink: 1703
date: 2024-11-22 04:53:01
id: steam
description: 获取Steam令牌密钥，在其他设备，应用上绑定查看Steam令牌
---
{% link https://store.steampowered.com/,Steam,/img/posts/steam/steam.webp,https://store.steampowered.com %}
# Steam令牌
1. 首先下载{% btn 'https://steampp.net/',Watt Toolkit,anzhiyufont anzhiyu-icon-circle-arrow-right,green larger %}
点击本地令牌->新增->Steam App 令牌共存导入
![](/img/posts/steam/steam++.jpg)
2. 输入Steam账号密码
{% note success simple %}
如果已经绑定steam令牌请先移除令牌
需要加速steam：点击上方网络加速->勾选Steam服务->一键加速
{% endnote %}
![](/img/posts/steam/steam++2.jpg)
3. 输入邮箱验证码
![](/img/posts/steam/steam++3.jpg)
4. 此时我们打开手机点击添加Steam令牌。绑定完成之后将手机的令牌输入其中
![](/img/posts/steam/steam++4.jpg)
5. 显示恢复代码，点击确认
![](/img/posts/steam/steam++5.jpg)
6. 就看到Watt Toolkit已经有当前账号的令牌了并且与手机端验证码是一样的。
![](/img/posts/steam/steam++6.jpg)

## 获取Steam Secret并绑定其他设备
点击令牌右下方三个点->查看详细数据->显示/隐藏
![](/img/posts/steam/steam++7.jpg)
这里就可以获取到令牌的全部信息了。主要使用{% label 'Shared_secert' blue %}，{% label 'uri' blue %}里面的值
### 安卓
下载{% btn 'https://github.com/PhilippC/keepass2android/releases',Keepass2Android,anzhiyufont anzhiyu-icon-circle-arrow-right,green outline %}软件，{% label '创建条目' blue %}->{% label '配置TOTP' blue %}->{% label 'Steam令牌设置' blue %}->输入{% label 'uri' blue %}中{% label 'secret' blue %}
### Windwos
#### KeePassXC
下载{% btn 'https://github.com/keepassxreboot/keepassxc/releases/tag/2.7.9',KeepassXC,anzhiyufont anzhiyu-icon-circle-arrow-right,green outline %}，{% label '创建条目' blue %}保存->右键{% label '条目' blue %}->{% label 'TOTP' blue %}->{% label '设置TOTP' blue %}->{% label 'Steam设置' blue %}->{% label 'Secret密钥' blue %}输入{% label 'uri' blue %}中{% label 'secret' blue %}
#### Watt Toolkit
点击令牌右下方三个点->导出此令牌为Mafile文件
当需要导入手机或者其他电脑上面的Watt Toolkit时，点击新增，选择Mafile文件导入即可

### 绑定到小米手环
{% btn 'https://www.bandbbs.cn/threads/4955/',参考这边文章,anzhiyufont anzhiyu-icon-circle-arrow-right,green larger %}

# Steam展柜
##  使用方法

浏览器打开<a class="btn" href="https://steamcommunity.com/sharedfiles/edititem/767/3/" title="">Steam艺术品上传</a>,设置名称文件等内容后，按F12打开控制台（Console），并输入代码并点击保存即可，输入不同的代码图片存储在不同的位置。
{% note success simple %}如果出现黄色警告不允许复制，请手动输入允许复制回车即可{% endnote %}

{% folding, 截图展柜 %}


```
document.getElementsByName("file_type")[0].value = 5;
```
{% endfolding %}

{% folding, 长图片截图展柜 %}

```
document.getElementsByName("file_type")[0].value= 5;
var num= document.getElementsByName("image_width")[0].value;
document.getElementsByName("image_height")[0].value = num-(num-1);
document.getElementsByName("image_width")[0].value= num*100;
```



{% endfolding %}
{% folding, 长图片艺术展柜 %}

```
var num= document.getElementsByName("image_width")[0].value;
document.getElementsByName("image_height")[0].value = num-(num-1);
document.getElementsByName("image_width")[0].value= num*100;
```

{% endfolding %}

{% folding, 艺术作品可以不用输入作品名称 %}


```
v_trim=_=>{return _},$J('#title').val(' \n'+Array.from(Array(126),_=>'\t').join(''));
```

{% endfolding %}

{% folding, 创意工坊展柜 %}

```
$J('[name=consumer_app_id]').val(480);$J('[name=file_type]').val(0);$J('[name=visibility]').val(0); 
```

{% endfolding %}

{% folding, 指南代码 %}

```
$J('[name=consumer_app_id]').val(480);$J('[name=file_type]').val(9);$J('[name=visibility]').val(0);
```

{% endfolding %}
{% note success simple %}代码也可以叠加使用，比如需要不输入名称的长图片，把这这两块代码都拷贝输入即可{% endnote %}
# 兑换CDK
点击游戏->在Steam上激活产品->输入CDK
![](/img/posts/steam/cdk.png)
![](/img/posts/steam/cdk2.png)
# Steam相关诈骗
## CDK诈骗
有些游戏直接购买CDK，获取更加便宜，当我们搜索游戏CDK的时候，会看到很多便宜，且打着激活到自己库中，永久使用等字样，很吸引人。但这其实是一种病毒脚本。
![](/img/posts/steam/steamcdk.jpg)
当我们购买之后找客服要CDK的时候，如果不是给你CDK，steam中输入入库，而是通过powershell入库，可以直接申请退款了
，这个方法是通过脚本篡改steam实现游戏假入库，同时脚本会下载病毒，盗取你的帐号密码。
## 投票诈骗
某一天突然有人加你好友，并且说之前跟你是队友想要和你一起玩，一起组队打比赛，或者给他们战队投票，之后给你发一个网站，在你投票的时候需要你登录Steam帐号，当你登录之后，帐号所有权就被他们获取到了。
他们通过注册与Steam官方或者游戏官方相似的域名地址用来迷惑玩家，并且内容上进行复刻，当你登录那么他们后台会获取到所有信息。



