---
title: 澎湃系统关闭广告，删除没用组件
date: 2024-12-03 15:18:15
cover: /img/posts/xiaomi/hyperos.jpg
top_img: /img/posts/xiaomi/hyperos.jpg
tags:
  - 搞机攻略
categories:
  - 系统
id: HyperOS
description: 一篇关于澎湃系统关闭广告，删除没用组件的文章
---
# 关闭广告
## 系统广告
1. {% label '设置' blue %}->{% label '头像' blue %}->{% label '关于小米账号' blue %}->{% label '系统广告' blue %}->{% label '系统工具广告' blue %}->{% label '关闭' blue %}
2. {% label '设置' blue %}->{% label '应用设置' blue %}->{% label '右上角三个点' blue %}->{% label '其他设置' blue %}->{% label '应用升级提醒' blue %}，{% label '资源推荐' blue %}->{% label '关闭' blue %}
3. {% label '设置' blue %}->{% label '桌面' blue %}
{% radio green, 负一屏 %}{% label '推荐卡片关闭' blue %}，{% label '热门活动关闭' blue %} ->{% label '隐私设置' blue %}->{% label '推荐卡片关闭' blue %}，{% label '热门活动关闭' blue %} ->{% label '隐私设置' blue %} ->{% label '个性化推荐关闭' blue %}
{% radio yellow, 桌面上滑 %}
{% label '无' blue %}
{% radio red, 桌面下滑 %}
{% label '通知和控制中心' blue %}
{% radio blue, 如果使用搜索功能 %} 
{% label '下滑或上滑进入搜索' blue %}->{% label '右上角三个点' blue %}->{% label '设置' blue %}->{% label '首页展示模块' blue %}->{% label '搜索提示词关闭' blue %}->{% label '热搜榜单' blue %}->{% label '全部点击 — 取消选择' blue %}
4. {% label '下载一个apk点击进入安装页面' blue %}->{% label '右上齿轮' blue %}->{% label '资源推荐关闭' blue %}，{% label '应用安全验证关闭' blue %}，{% label '安全守护跟据需求开启/关闭' blue %}
## 应用广告
1. {% label '安全管家' blue %}->{% label '设置' blue %}->{% label '垃圾清理' blue %}->{% label '推荐内容' blue %}->{% label '关闭' blue %}
2. {% label '设置' blue %}->{% label '隐私与安全' blue %}->{% label '左划安全' blue %}->{% label '更多安全设置' blue %}->{% label '广告服务' blue %}->{% label '个性化广告推荐' blue %}->{% label '关闭' blue %}
3. {% label '短信' blue %}->{% label '右上角齿轮' blue %}->{% label '高级设置' blue %}->{% label '允许WAP推送' blue %}->{% label '关闭' blue %}
4. {% label '应用商店' blue %}->{% label '我的' blue %}->{% label '设置' blue %}
{% radio yellow, 隐私设置 %}
{% label '个性化服务' blue %}->{% label '关闭' blue %} 
{% radio blue, 功能设置 %} 
{% label '显示福利活动关闭' blue %}，{% label '显示游戏抽奖关闭' blue %}
5. {% label '浏览器' blue %}->{% label '我的' blue %}->{% label '右上角设置' blue %}->{% label '主页设置' blue %}->{% label '简洁版' blue %}->{% label '宫格位推送关闭' blue %}
6. {% label '主题商店' blue %}->{% label '我的' blue %}->{% label '设置' blue %}->{% label '隐私设置' blue %}->{% label '个性化推荐' blue %}->{% label '关闭' blue %}
7. {% label '下载管理' blue %}->{% label '右上角三个点' blue %}->{% label '设置' blue %}->{% label '信息流设置' blue %}->{% label '资源推荐关闭' blue %}，{% label '热榜推荐关闭' blue %}
8. {% label '天气' blue %}->{% label '右上角三个点' blue %}->{% label '设置' blue %}->{% label '用户体验计划' blue %}->{% label '内容推广' blue %}->{% label '关闭' blue %}
9. {% label '日历' blue %}->{% label '右上角三个点' blue %}->{% label '设置' blue %}->{% label '用户体验计划' blue %}->{% label '内容推广' blue %}->{% label '关闭' blue %}
10. {% label '钱包' blue %}->{% label '我的' blue %}->{% label '右上角齿轮' blue %}
{% radio yellow, 功能设置 %}
{% label '全部关掉' blue %}
{% radio blue, 隐私设置 %} 
{% label '个性化服务' blue %}->{% label '关掉' blue %}
11. {% label '小米社区' blue %}->{% label '我的' blue %}->{% label '设置' blue %}->{% label '隐私管理' blue %}->{% label '详情页相似推荐' blue %}，{% label '首页内容个性化推荐' blue %}，{% label '个性化广告' blue %}->{% label '关闭' blue %}

# 开启开发者模式
{% label '设置' blue %}->{% label '我的设备' blue %}->{% label '全部参数与信息' blue %}->{% label '连续快速点击 OS版本' blue %}->{% label '提示开发者模式开启' blue %}

# 系统优化
## 关闭内存扩展
{% label '设置' blue %}->{% label '更多设置' blue %}->{% label '内存扩展' blue %}->{% label '关闭' blue %}
## 关闭安装应用风险提示
{% label '设置' blue %}->{% label '更多设置' blue %}->{% label '开发者选项' blue %}->{% label '高风险功能开启提醒' blue %}->{% label '关闭' blue %}
## 使用软件包安装程序
澎湃OS系统卸载隐藏了安卓自带的安装程序，可以通过App Manger找到{% label '软件包安装程序：com.android.packageinstaller' blue %}点击{% label '保存APK' blue %}，在文件管理中找到apk并安装，后续在安装新的应用默认使用安卓默认安装组件。
也可以直接下载我提取好的apk打开{% btn 'https://adaifun.lanzout.com/invFl2h3nied',软件包安装程序,anzhiyufont anzhiyu-icon-circle-arrow-right,outline blue %}，密码：adai
{% note success simple %}重启之后会被再次隐藏，需要重新安装{% endnote %}
# 卸载不卡米
## 普通卸载
{% label '设置' blue %}->{% label '应用设置' blue %}->{% label '点击应用' blue %}->{% label '卸载' blue %}
小米画报 ， 内容中心 ， 小米视频 ， 小米有品 ， 小米换机等，大家用不到的app都可以通过这种方法进行卸载，并且没有任何卡米问题
## 通过应用ADB卸载
进入{% label '设置' blue %}->{% label '更多设置' blue %}->{% label '开发者选项' blue %}->{% label '开发者选项' blue %}->{% label '打开USB调试' blue %}，{% label '打开USB调试（安全设置）' blue %}
下载安装<a class="btn" href="https://github.com/MuntashirAkon/AppManager/releases" title="">App Manger</a>，打开应用选择{% label '配对' blue %}，将应用窗口模式，进入{% label '开发者选项' blue %}->{% label '无线调试' blue %}->{% label '无线调试' blue %}->{% label '开启无线调试' blue %}->{% label '使用配对码配对设备' blue %}，此时App Manger的{% label '端口' blue %}自动被填写，我们将WLan配对码输入到{% label 'Wi-Fi配对码' blue %}中，点击好连接完成。获取好权限即可开始卸载无法卸载的应用了。
{% gallery true,500,2,center%}
![](/img/posts/xiaomi/appmanger1.jpg)

![](/img/posts/xiaomi/appmanger2.jpg)
{% endgallery %}
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
米币支付：com.xiaomi.payment
生活黄页：com.miui.yellowpage
售后支持: com.xiaomi.ab
搜狗输入法小米版：com.sohu.inputmethod.sogou.xiaomi
搜索：com.android.quicksearchbox
文件管理：com.android.fileexplorer
息屏与锁屏编辑：com.miui.aod
系统安全组件：com.miui.guardprovider
系统跟踪：com.android.traceur
系统质量服务：com.miui.daemon
系统质量监测：com.miui/misightservice
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
小米智能卡：com.miui.tsmclient
小米智能卡页面组件：com.miui.nextpay
悬浮球：com.miui.touchassistant
应用程序扩展服务：com.miui.contentcatcher
用户反馈：com.miui.bugreport
游戏服务：com.xiaomi.gamecenter.sdk.service
游戏高能时刻：com.xiaomi.migameservice
语音唤醒：com.miui.voicetrigger
智能服务：com.miui.systemAdSolution
智能助理(负一屏)：com.miui.personalassistant
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
Xiaomi Service Framework：com.xiaomi.xmsfkeeper
```
{% note success simple %}测试不卡米版本：澎湃OS：1.0.19，请大家谨慎卸载{% endnote %}
