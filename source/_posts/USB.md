---
title: 认识不同USB的接口和协议
date: 2025-03-16 13:33:23
tags: [协议]
categories: [知识]
cover: /img/posts/usb/usb.webp
id: usb
main_color: "#cf4173"
---
{% link https://zhuanlan.zhihu.com/p/447595295,秒懂所有USB接口类型,https://pica.zhimg.com/v2-1ee24987afb4d39fb49a3f8c878f2dbb_l.jpg?source=172ae18b %}

{% note info simple %}
引用参考文章部分图片，侵删。
{% endnote %}
USB分为[Type-A](#Type-A)，[Tyoe-B](#Tyoe-B)，[Type-C](#Type-C)
# Type-A
{% link https://zhuanlan.zhihu.com/p/620205244,不同颜色的USB口,https://pic1.zhimg.com/v2-c001184880a3144164f2de8920b8f591_l.jpg?source=172ae18b %}
## USB2.0
![](/img/posts/usb/typeausb2.jpg)
**舌片颜色**:黑色
**触点**: 4针（2×2排列）单排金属触点
**传输速度**: 480Mbps/8=***60MB/s***(理论最大值)
**供电能力**: 5V/0.5A（最大2.5W）
**兼容性**: 向下兼容USB 1.0/1.1设备

## USB3.2
根据USB-IF在2019年命名规则调整
**usb3.0** -> `USB 3.2 Gen 1x1`
**USB 3.1 Gen 2** -> `USB 3.2 Gen 2x1`
![](/img/posts/usb/typeausb3.jpg)
**舌片颜色**:
|USB 3.2 Gen 1x1|USB 3.2 Gen 2x2|
| :---: | :---: |
|深蓝色|浅蓝色|

**触点**: 9针（4针基础 + 5针高速）双排金属触点（前4后5）
**兼容性**: 向下兼容USB 2.0、USB 1.1设备
**传输速度**: 
|USB 3.2 Gen 1x1|USB 3.2 Gen 2x2|
| :---: | :---: |
|5Gbps/8=***625MB/s***(理论最大值)|10Gbps/8=***1250MB/s***(理论最大值)|

**供电能力**: 
|USB 3.2 Gen 1x1|USB 3.2 Gen 2x2|
| :---: | :---: |
|5V/0.9A(最大4.5W)|5V/1.5A(最大7.5w)|

**编码方式与效率**
||USB 3.2 Gen 1x1|USB 3.2 Gen 2x2| 
| :---: | :---: | :---: |
|编码方式|8b/10b|128b/132b|
|有效带宽利用率|80%|约97%|
## 外设是使用2.0接口还是3.2接口?
### ***2.0***
`鼠标/键盘`
传输数据量极小（按键信号、移动坐标等），通常仅需 1–10 Kbps。USB 2.0 的 480 Mbps 带宽完全冗余，用 USB 3.2 无性能增益。
`耳机/音响`
标准立体声音频（16-bit/44.1kHz）仅需 1.4 Mbps。
即使高解析音频（24-bit/192kHz）也只需9.2Mbps，远低于 USB 2.0 上限。
### ***3.2***
`高端电竞外设`
游戏鼠标,键盘回报率≥1000Hz，USB 3.2 可降低延迟波动。
多设备并联（如键盘+鼠标+耳机）时，USB 3.2 的总线带宽更宽裕。
`专业音频设备`
录音室级 USB 声卡（如 Focusrite Scarlett 18i20）需多通道高码率传输。
USB 3.2 的全双工通信能减少音频延迟（如 ASIO 低延迟模式）。

{% note info simple %}
闲置的USB3.0接口，插入了2.0设备的USB3.0接口，都不会对2.4GHz造成干扰。只有当USB3.0接口在使用USB3.0协议传输数据的时候，发出干扰会对2.4GHz无线信号的鼠标键盘造成暂时失灵。
{% endnote %}

## 如何让3.2接口把设备识别成2.0?
只要插进去速度够慢(或者插一半)先让前面4个触电接触完成识别就被认为是2.0设备。
