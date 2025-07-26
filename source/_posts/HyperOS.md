---
title: HyperOS优化
date: 2024-12-03 15:18:15
cover: /img/posts/xiaomi/hyperos.jpg
tags:
  - HyperOS
categories:
  - 系统
id: HyperOS
description: 一篇关于澎湃系统关闭广告，删除没用组件的文章
main_color: "#000000"
---
# 关闭广告
## 系统广告
1. **设置**->**头像**->**关于小米账号**->**系统广告**->**系统工具广告**->**关闭**
2. **设置**->**应用设置**->**右上角三个点**->**其他设置**->**应用升级提醒**，**资源推荐**->**关闭**
3. **设置**->**桌面**
{% radio green, 负一屏 %}
**推荐卡片关闭**，**热门活动关闭** ->**隐私设置**->**推荐卡片关闭**，**热门活动关闭** ->**隐私设置** ->**个性化推荐关闭**
{% radio yellow, 桌面上滑 %}
**无**
{% radio red, 桌面下滑 %}
**通知和控制中心**
{% radio blue, 如果使用搜索功能 %} 
**下滑或上滑进入搜索**->**右上角三个点**->**设置**->**首页展示模块**->**搜索提示词关闭**->**热搜榜单**->**全部点击 — 取消选择**
4. **下载一个apk点击进入安装页面**->**右上齿轮**->**资源推荐关闭**，**应用安全验证关闭**，**安全守护跟据需求开启/关闭**
## 应用广告
1. **安全管家**->**设置**->**垃圾清理**->**推荐内容**->**关闭**
2. **设置**->**隐私与安全**->**左划安全**->**更多安全设置**->**广告服务**->**个性化广告推荐**->**关闭**
3. **短信**->**右上角齿轮**->**高级设置**->**允许WAP推送**->**关闭**
4. **应用商店**->**我的**->**设置**
{% radio yellow, 隐私设置 %}
**个性化服务**->**关闭** 
{% radio blue, 功能设置 %} 
**显示福利活动关闭**，**显示游戏抽奖关闭**
5. **浏览器**->**我的**->**右上角设置**->**主页设置**->**简洁版**->**宫格位推送关闭**
6. **主题商店**->**我的**->**设置**->**隐私设置**->**个性化推荐**->**关闭**
7. **下载管理**->**右上角三个点**->**设置**->**信息流设置**->**资源推荐关闭**，**热榜推荐关闭**
8. **天气**->**右上角三个点**->**设置**->**用户体验计划**->**内容推广**->**关闭**
9. **日历**->**右上角三个点**->**设置**->**用户体验计划**->**内容推广**->**关闭**
10. **钱包**->**我的**->**右上角齿轮**
{% radio yellow, 功能设置 %}
**全部关掉**
{% radio blue, 隐私设置 %} 
**个性化服务**->**关掉**
11. **小米社区**->**我的**->**设置**->**隐私管理**->**详情页相似推荐**，**首页内容个性化推荐**，**个性化广告**->**关闭**

# 开启开发者模式
**设置**->**我的设备**->**全部参数与信息**->**连续快速点击 OS版本**->**提示开发者模式开启**

# 系统优化
## 关闭内存扩展
**设置**->**更多设置**->**内存扩展**->**关闭**
## 关闭安装应用风险提示
**设置**->**更多设置**->**开发者选项**->**高风险功能开启提醒**->**关闭**
## 使用软件包安装程序
澎湃OS系统卸载隐藏了安卓自带的安装程序，可以通过App Manger找到**软件包安装程序：com.android.packageinstaller**点击**保存APK**，在文件管理中找到apk并安装，后续在安装新的应用默认使用安卓默认安装组件。
也可以直接下载我提取好的apk打开{% btn 'https://adaifun.lanzout.com/invFl2h3nied',软件包安装程序,anzhiyufont anzhiyu-icon-circle-arrow-right,outline blue %}，密码：adai
{% note success simple %}重启之后会被再次隐藏，需要重新安装{% endnote %}
# 卸载不卡米
## 普通卸载
**设置**->**应用设置**->**点击应用**->**卸载**
小米画报 ， 内容中心 ， 小米视频 ， 小米有品 ， 小米换机等，大家用不到的app都可以通过这种方法进行卸载，并且没有任何卡米问题
## 通过应用ADB卸载
进入**设置**->**更多设置**->**开发者选项**->**开发者选项**->**打开USB调试**，**打开USB调试（安全设置）**
下载安装<a class="btn" href="https://github.com/samolego/Canta/releases" title="">Canta</a>需要配合[Shizuku](https://shizuku.rikka.app/zh-hans/)使用。
测试系统:**HyperOS1.0.20.0.UNKVNXM**(请谨慎参考)
```
浏览器：com.android.browser
常用语: com.miui.phrase
传送门：com.miui.contentextension
弹幕通知：com.xiaomi.barrage
短信：com.android.mms
互联互通服务：com.milink.service
急救信息：com.android.emergency
家人守护：com.miui.greenguard
跨屏协同服务: com.xiaomi.mirror
快应用服务框架: com.miui.hybrid
媒体查看器：com.miui.mediaviewer
米币支付：com.xiaomi.payment(小米pay充值交通卡需要这个组件)
生活黄页：com.miui.yellowpage
售后支持: com.xiaomi.ab
搜狗输入法小米版：com.sohu.inputmethod.sogou.xiaomi
搜索：com.android.quicksearchbox
文件管理：com.android.fileexplorer
息屏与锁屏编辑：com.miui.aod，卸载耗电变快
系统安全组件：com.miui.guardprovider
系统服务组件：com.miui.securityadd
系统跟踪：com.android.traceur
系统质量服务：com.miui.daemon
系统质量监测：com.miui.misightservice
小爱翻译：com.xiaomi.aiasst.vision
小爱建议：com.xiaomi.aireco
小爱离线引擎：com.xiaoai.xaee
小爱通话：com.xiaomi.aiasst.service
小爱同学：com.miui.voiceassist
小米安全键盘：com.miui.securityinputmethod
小米互传：com.miui.mishare.connectivity
小米互联通信服务：com.xiaomi.mi_connect_service
小米汽车互联服务：com.xiaomi.mis
小米数字钥匙框架：com.xiaomi.digitalket
小米无障碍：com.miui.accessibility
小米云备份：com.miui.cloudbackup
小米云服务：com.miui.cloudservice
小米智能卡：com.miui.tsmclient(卡包功能)
小米智能卡页面组件：com.miui.nextpay(卡包银联页面)
悬浮球：com.miui.touchassistant
应用程序扩展服务：com.miui.contentcatcher
用户反馈：com.miui.bugreport
游戏服务：com.xiaomi.gamecenter.sdk.service
游戏高能时刻：com.xiaomi.migameservice
语音唤醒：com.miui.voicetrigger
智能服务：com.miui.systemAdSolution
智能助理(负一屏)：com.miui.personalassistant卸载耗电变快
自动连招：com.xiaomi.macro
系统更新：com.android.updater
Analytics：com.miui.analytics
Bokeh: com.miui.extraphoto
CarWith: com.miui.carlink
Android系统：com.android.adservices.api
CatchLog：com.bsp.catchlog
语音助理:com.miui.voiceassistoverlay
米云：com.xiaomi.micloud.sdk
Joyose：com.xiaomi.joyose
MConnService：com.miui.vsimcore
MiAI引擎：com.xiaomi.aicr
MiCloudSync：com.miui.micloudsync
MipayService： org.mipay.android.manager
System SDK：com.miui.core
Xiaomi Service Framework：com.xiaomi.xmsfkeeper(小米推送服务)
```
{% note success simple %}测试不卡米版本：澎湃OS：1.0.19，请大家谨慎卸载{% endnote %}
