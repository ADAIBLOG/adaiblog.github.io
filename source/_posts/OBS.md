---
title: 直播录像开源工具：OBS
date: 2024-12-12 02:48:27
tags:
  - 生产力工具
  - Windows
categories:
  - 软件
cover: /img/posts/obs/obs.png
id: obs
description: 关于OBS设置，插件使用
main_color: "#5c5cbd"
---

# 下载
{% btn 'https://obsproject.com/',OBS官网,anzhiyufont anzhiyu-icon-circle-arrow-right,larger %}
{% btn 'https://store.steampowered.com/app/1905180/OBS_Studio/',Steam,anzhiyufont anzhiyu-icon-circle-arrow-right,blue larger %}
{% btn 'https://cloud.189.cn/web/share?code=VBRRze6fqEV3%EF%BC%88%E8%AE%BF%E9%97%AE%E7%A0%81%EF%BC%9Ari1t%EF%BC%89',云盘v30.2.3,anzhiyufont anzhiyu-icon-circle-arrow-right,pink larger %}
# 设置
## 直播设置
输出模式选择高级，视频编码器，X264就是CPU进行编码，换成显卡选项缓解CPU压力.
![](/img/posts/obs/obsshuchu2.png)
关键帧间隔设置2S，码率根据上行宽带进行修改，使用约75%上行宽带，因为游戏等也会抢占宽带
{% gallery true,500,2,center%}
![](/img/posts/obs/obsshuchu3.png)
![](/img/posts/obs/malv.png)
{% endgallery %}
## 录像设置
录像设置与直播设置基本一直，但录像没有码率设置，看硬盘大小来选择录像质量
![](/img/posts/obs/obsshuchu4.png)
# 插件
{% btn 'https://obsproject.com/forum/plugins/',OBS插件,anzhiyufont anzhiyu-icon-circle-arrow-right,larger %}
## obs-multi-rtmp
这是一款开源多平台推流插件，可以实现多个平台同时直播
下载安装完[obs-multi-rtmp](https://github.com/sorayuki/obs-multi-rtmp/releases)插件之后，打开OBS，点击`停靠窗口`，就可以看到`多路推流`。
![](/img/posts/obs/duolutuiliu.png)
打开之后点击`新建推流目标`，`名称`：自定义，`URL`：服务器地址，`流名称`：推流码
{% gallery true,500,2,center%}
![](/img/posts/obs/duolutuiliu2.png)
![](/img/posts/obs/duolutuiliu3.png)
{% endgallery %}

# 其他
## 获取抖音推流码
下载安装网络协议分析仪[wireshark](https://www.wireshark.org/)
接下来我们打开抖音直播伴侣，点击开始直播。
![](/img/posts/obs/zhibobanlv.png)
{% note warning simple %}直播画面需要全部关闭，不然在我们获取的时候推流码就全部泄漏了{% endnote %}
开启直播之后打开`Wireshark`软件，如果是网线联网，就选择`以太网`，WIFI联网选择`WLAN`，搜索`rtmpt`拉到最上方
{% gallery true,500,2,center%}
![](/img/posts/obs/wireshark.png)
![](/img/posts/obs/wireshark2.png)
{% endgallery %}
接下来需要分别找得到抖音的`服务器`和`推流码`
服务器：
![](/img/posts/obs/wireshark5.png)
推流码:
![](/img/posts/obs/wireshark4.png)
OBS推流之后，需要把直播伴侣关闭掉，不要勾选推出并关闭直播间

## 获取B站弹幕
下载安装开源应用[blivechat](https://github.com/xfgryujk/blivechat),运行之后会得到一个控制台窗口和网页
![](/img/posts/obs/bilichat.png)
首先获取[身份码](https://play-live.bilibili.com/ )输入到页面中，之后点击样式生成器，根据自己需求进行更改。下方会生成`CSS`
{% gallery true,300,2,center%}
![](/img/posts/obs/bilichat2.png)
![](/img/posts/obs/bilichat6.png)
{% endgallery %}
返回到首页复制`房间URL`，打开OBS添加`浏览器`，输入自定义名称，之后URL输入刚复制的`房间URL`，如果更改了弹幕样式，`自定义CSS`输入上方页面中的CSS点击确认就完成了
{% gallery true,300,2,center%}
![](/img/posts/obs/bilichat5.png)
![](/img/posts/obs/bilichat7.png)
{% endgallery %}
{% note warning simple %}更改常规选项，或者样式房间URL和CSS都会发生变化，需要在OBS进行更新{% endnote %}