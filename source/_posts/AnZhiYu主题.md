---
title: 安只鱼主题美化和功能添加
date: 2024-11-30 18:51:41
tags: [博客,AnZhiYu]
categories:
  - 教程
cover: /img/posts/anzhiyu/anzhiyu.png
top_img: /img/posts/anzhiyu/anzhiyu.png
id: anzhiyu
top_group_index: 4
description: 安知鱼主题修改美化
---
# 增加摘要功能
![](/img/posts/anzhiyu/zhaiyao.png)
打开<a>themes\anzhiyu\source\css\page\homepage.styl</a>找到
```
#content-inner #recent-posts > .recent-post-item > .recent-post-info > .content
  transition: all 0.3s ease 0s;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-height: 1.4;
  color: var(--anzhiyu-secondtext);
  margin-top: 0.5rem;
  font-size: 14px;
  opacity 0
  height 0
```
改为以下内容
```
#content-inner #recent-posts > .recent-post-item > .recent-post-info > .content
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-height: 1.4;
  color: var(--anzhiyu-secondtext);
  margin-top: 0.3rem;
  font-size: 14px;
  opacity 1;
  height 35px;
  padding:  0px 32px;
```
# 首页上方右侧改为轮播图
![](/img/posts/anzhiyu/swiper.png)

打开主题{% label '_config.yml' blue %}将{% label 'swiper:enable' blue %}修改为{% label 'true' blue %}
# 移除随便逛逛
## 移除上方左侧随便逛逛按钮
![](/img/posts/anzhiyu/suibiangguangguang.png)
打开<a>themes\anzhiyu\layout\includes\top\top.pug</a>，找到{% label 'if home_top_config.enable' blue %}，删除以下代码
```
          a#random-hover(href='javascript:toRandomPost()')
            i.anzhiyufont.anzhiyu-icon-paper-plane
            .bannerText 随便逛逛
              i.anzhiyufont.anzhiyu-icon-arrow-right
```

## 移除右上角随便逛逛按钮
打开<a>themes\anzhiyu\layout\includes\header\nav.pug</a>找到{% label '#nav-right' blue %}，删除以下代码
```
      if theme.nav.travelling
        .nav-button.only-home#travellings_button(title='随机前往一个开往项目网站')
          a.site-page(onclick='anzhiyu.totraveling()', title='随机前往一个开往项目网站', href='javascript:void(0);', rel='external nofollow', data-pjax-state='external')
            i.anzhiyufont.anzhiyu-icon-train
      .nav-button#randomPost_button
        a.site-page(onclick='toRandomPost()', title='随机前往一个文章', href='javascript:void(0);')
          i.anzhiyufont.anzhiyu-icon-dice
```
# 添加日历卡片
![](/img/posts/anzhiyu/rili.png)
在<a>themes\anzhiyu\source\css</a>中创建{% label 'custom' blue %}文件夹并在文件夹中创建{% label 'schedule.css' blue %}
```css
.card-widget {
    padding: 0px!important;     /* 原文padding: 10px!important;这样会导致微信卡css发生错误 */
    max-height: calc(100vh - 100px);
}

.card-times a, .card-times div {
    color: var(--efu-fontcolor);
}

#card-widget-calendar .item-content {
    display: flex;
}

#calendar-area-left {
    width: 45%;
}

#calendar-area-right {
    width: 55%;
}

#calendar-area-left, #calendar-area-right {
    height: 100%;
    padding: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

#calendar-main {
    width: 100%;
}

#calendar-week {
    height: 1.2rem;
    font-size: 14px;
    letter-spacing: 1px;
    font-weight: 700;
    align-items: center;
    display: flex;
}

#calendar-date {
    height: 3rem;
    line-height: 1.3;
    font-size: 64px;
    letter-spacing: 3px;
    color: var(--anzhiyu-main);
    font-weight: 700;
    align-items: center;
    display: flex;
    position: absolute;
    top: calc(50% - 2.1rem);
}

#calendar-lunar, #calendar-solar {
    height: 1rem;
    font-size: 12px;
    align-items: center;
    display: flex;
    position: absolute;
}

#calendar-solar {
    bottom: 1.5rem;  /* 原文bottom: 2.1rem;这样会导致微信卡css发生错误 */
}

#calendar-lunar {
    bottom: 0.5rem;   /* 原文bottom: 1rem;这样会导致微信卡css发生错误 */
    color: var(--efu-secondtext);
}

#calendar-main a {
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    font-size: 12px;
    line-height: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
}

#calendar-main a.now {
    background: var(--anzhiyu-main);
    color: var(--efu-card-bg);
}

#calendar-main .calendar-rh a {
    color: var(--efu-secondtext);
}

.calendar-r0, .calendar-r1, .calendar-r2, .calendar-r3, .calendar-r4, .calendar-r5, .calendar-rh {
    height: 1.2rem;
    display: flex;
}

.calendar-d0, .calendar-d1, .calendar-d2, .calendar-d3, .calendar-d4, .calendar-d5, .calendar-d6 {
    width: calc(100% / 7);
    display: flex;
    justify-content: center;
    align-items: center;
}

#card-widget-schedule .item-content {
    display: flex;
}

#schedule-area-left, #schedule-area-right {
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#schedule-area-left {
    width: 30%;
}

#schedule-area-right {
    width: 70%;
    padding: 0 5px;
}

.schedule-r0, .schedule-r1, .schedule-r2 {
    height: 2rem;
    width: 100%;
    align-items: center;
    display: flex;
}

.schedule-d0 {
    width: 30px;
    margin-right: 5px;
    text-align: center;
    font-size: 12px;
}

.schedule-d1 {
    width: calc(100% - 35px);
    height: 1.5rem;
    align-items: center;
    display: flex;
}

progress::-webkit-progress-bar {
    background: linear-gradient(to right, var(--anzhiyu-main-op-deep), var(--anzhiyu-main-op), var(--anzhiyu-main-op-light));
    border-radius: 5px;
    overflow: hidden;
}

progress::-webkit-progress-value {
    background: var(--anzhiyu-main);
    border-radius: 5px;
}

.aside-span1, .aside-span2 {
    height: 1rem;
    font-size: 12px;
    z-index: 1;
    display: flex;
    align-items: center;
    position: absolute;
}

.aside-span1 {
    margin-left: 5px;
}

.aside-span2 {
    right: 20px;
    color: var(--efu-secondtext);
}

.aside-span2 a {
    margin: 0 3px;
}

#pBar_month, #pBar_week, #pBar_year {
    width: 100%;
    border-radius: 5px;
    height: 100%;
}

#schedule-date, #schedule-days, #schedule-title {
    display: flex;
    align-items: center;
}

#schedule-title {
    height: 25px;
    line-height: 1;
    font-size: 14px;
    font-weight: 700;
}

#schedule-days {
    height: 40px;
    line-height: 1;
    font-size: 30px;
    font-weight: 900;
    color: var(--anzhiyu-main);
}

#schedule-date {
    height: 20px;
    line-height: 1;
    font-size: 12px;
    color: var(--efu-secondtext);
}
```
在<a>\theme\anzhiyu\source\js</a>中创建文件夹{% label 'custom' blue %}并在文件夹中创建{% label 'schedule.js' blue %}
```js
document.addEventListener("DOMContentLoaded", () => {
    initializeCard();
});

document.addEventListener("pjax:complete", () => {
    initializeCard();
});

function initializeCard() {
    cardTimes();
    cardRefreshTimes();
}

let year, month, week, date, dates, weekStr, monthStr, asideTime, asideDay, asideDayNum, animalYear, ganzhiYear, lunarMon, lunarDay;
const now = new Date();

function cardRefreshTimes() {
    const e = document.getElementById("card-widget-schedule");
    if (e) {
        asideDay = (now - asideTime) / 1e3 / 60 / 60 / 24;
        e.querySelector("#pBar_year").value = asideDay;
        e.querySelector("#p_span_year").innerHTML = (asideDay / 365 * 100).toFixed(1) + "%";
        e.querySelector(".schedule-r0 .schedule-d1 .aside-span2").innerHTML = `还剩<a> ${(365 - asideDay).toFixed(0)} </a>天`;
        e.querySelector("#pBar_month").value = date;
        e.querySelector("#pBar_month").max = dates;
        e.querySelector("#p_span_month").innerHTML = (date / dates * 100).toFixed(1) + "%";
        e.querySelector(".schedule-r1 .schedule-d1 .aside-span2").innerHTML = `还剩<a> ${(dates - date)} </a>天`;
        e.querySelector("#pBar_week").value = week === 0 ? 7 : week;
        e.querySelector("#p_span_week").innerHTML = ((week === 0 ? 7 : week) / 7 * 100).toFixed(1) + "%";
        e.querySelector(".schedule-r2 .schedule-d1 .aside-span2").innerHTML = `还剩<a> ${(7 - (week === 0 ? 7 : week))} </a>天`;
    }
}

function cardTimes() {
    year = now.getFullYear();
    month = now.getMonth();
    week = now.getDay();
    date = now.getDate();

    const e = document.getElementById("card-widget-calendar");
    if (e) {
        const isLeapYear = year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
        weekStr = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][week];
        const monthData = [
            { month: "1月", days: 31 },
            { month: "2月", days: isLeapYear ? 29 : 28 },
            { month: "3月", days: 31 },
            { month: "4月", days: 30 },
            { month: "5月", days: 31 },
            { month: "6月", days: 30 },
            { month: "7月", days: 31 },
            { month: "8月", days: 31 },
            { month: "9月", days: 30 },
            { month: "10月", days: 31 },
            { month: "11月", days: 30 },
            { month: "12月", days: 31 }
        ];
        monthStr = monthData[month].month;
        dates = monthData[month].days;

        const t = (week + 8 - date % 7) % 7;
        let n = "", d = false, s = 7 - t;
        const o = (dates - s) % 7 === 0 ? Math.floor((dates - s) / 7) + 1 : Math.floor((dates - s) / 7) + 2;
        const c = e.querySelector("#calendar-main");
        const l = e.querySelector("#calendar-date");

        l.style.fontSize = ["64px", "48px", "36px"][Math.min(o - 3, 2)];

        for (let i = 0; i < o; i++) {
            if (!c.querySelector(`.calendar-r${i}`)) {
                c.innerHTML += `<div class='calendar-r${i}'></div>`;
            }
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j === t) {
                    n = 1;
                    d = true;
                }
                const r = n === date ? " class='now'" : "";
                if (!c.querySelector(`.calendar-r${i} .calendar-d${j} a`)) {
                    c.querySelector(`.calendar-r${i}`).innerHTML += `<div class='calendar-d${j}'><a${r}>${n}</a></div>`;
                }
                if (n >= dates) {
                    n = "";
                    d = false;
                }
                if (d) {
                    n += 1;
                }
            }
        }

        const lunarDate = chineseLunar.solarToLunar(new Date(year, month, date));
        animalYear = chineseLunar.format(lunarDate, "A");
        ganzhiYear = chineseLunar.format(lunarDate, "T").slice(0, -1);
        lunarMon = chineseLunar.format(lunarDate, "M");
        lunarDay = chineseLunar.format(lunarDate, "d");

        const newYearDate = new Date("2025/01/28 00:00:00");
        const daysUntilNewYear = Math.floor((newYearDate - now) / 1e3 / 60 / 60 / 24);
        asideTime = new Date(`${new Date().getFullYear()}/01/01 00:00:00`);
        asideDay = (now - asideTime) / 1e3 / 60 / 60 / 24;
        asideDayNum = Math.floor(asideDay);
        const weekNum = week - asideDayNum % 7 >= 0 ? Math.ceil(asideDayNum / 7) : Math.ceil(asideDayNum / 7) + 1;

        e.querySelector("#calendar-week").innerHTML = `第${weekNum}周&nbsp;${weekStr}`;
        e.querySelector("#calendar-date").innerHTML = date.toString().padStart(2, "0");
        e.querySelector("#calendar-solar").innerHTML = `${year}年${monthStr}&nbsp;第${asideDay.toFixed(0)}天`;
        e.querySelector("#calendar-lunar").innerHTML = `${ganzhiYear}${animalYear}年&nbsp;${lunarMon}${lunarDay}`;
        document.getElementById("schedule-days").innerHTML = daysUntilNewYear;
    }
}
```
打开主题配置文件{% label '_config.yml' blue %}，搜索找到{% label 'inject' blue %}，加入以下代码
```yml
inject:
  head:
  # 自定义css
    - <link rel="stylesheet" href="/css/custom/schedule.css">

  bottom:
  # 自定义js
    - <script src="/js/custom/schedule.js"></script>
    - <script src="https://open.lightxi.com/unpkg/chinese-lunar@0.1.4/lib/chinese-lunar.js"></script>
```
在{% label '_data ' blue %} 文件夹下创建{% label 'widget.yml' blue %}文件，并添加以下内容
```yml
bottom:
  - class_name: calendar
    id_name: card-widget-calendar
    name:
    icon:
    order: -1
    html: |
      <div id="calendar-area-left">
        <div id="calendar-week"></div>
        <div id="calendar-date" style="font-size: 48px;"></div>
        <div id="calendar-solar"></div>
        <div id="calendar-lunar"></div>
      </div>
      <div id="calendar-area-right">
        <div id="calendar-main">
        </div>
      </div>

  - class_name: schedule
    id_name: card-widget-schedule
    name:
    icon:
    order: -1
    html: |
      <div id="schedule-area-left">
        <div id="schedule-title">距离除夕</div>
        <div id="schedule-days"></div>
        <div id="schedule-date">2025-01-28</div>
      </div>
      <div id="schedule-area-right">
        <div class="schedule-r0">
          <div class="schedule-d0">本年</div>
          <div class="schedule-d1">
            <span id="p_span_year" class="aside-span1"></span>
            <span class="aside-span2">还剩<a></a>天</span>
            <progress max="365" id="pBar_year"></progress>
          </div>
        </div>
        <div class="schedule-r1">
          <div class="schedule-d0">本月</div>
          <div class="schedule-d1">
            <span id="p_span_month" class="aside-span1"></span>
            <span class="aside-span2">还剩<a></a>天</span>
            <progress max="30" id="pBar_month"></progress>
          </div>
        </div>
        <div class="schedule-r2">
          <div class="schedule-d0">本周</div>
          <div class="schedule-d1">
            <span id="p_span_week" class="aside-span1"></span>
            <span class="aside-span2">还剩<a></a>天</span>
            <progress max="7" id="pBar_week"></progress>
          </div>
        </div>
      </div>
```
{% note success simple %}如果想要所有页面都显示日历卡片，将 button 改为 top ，order值越小越靠前{% endnote %}
> 原文 [AnZhiYu主题添加日历卡片](https://blog.yoshino.us.kg/post/91d3a27d/) ，原作者：[辣条の小屋](https://blog.yoshino.us.kg)
# 诗词卡片
![](/img/posts/anzhiyu/shiju.png)
在<a>themes\anzhiyu\layout\includes\widget</a>创建{% label 'card_poem.pug' blue %}文件输入以下内容
```
#card-poem.card-widget
    #poem_sentence
    #poem_info
        #poem_dynasty
        #poem_author
script(src='https://cdn.jsdelivr.net/npm/js-heo@1.0.11/poem/jinrishici.js', charset='utf-8')
script(type='text/javascript').
  jinrishici.load(function(result) {
  var sentence = document.querySelector("#poem_sentence")
  var author = document.querySelector("#poem_author")
  var dynasty = document.querySelector("#poem_dynasty")

  var sentenceText = result.data.content
  sentenceText = sentenceText.substr(0, sentenceText.length - 1);
  sentence.innerHTML = sentenceText
  dynasty.innerHTML = result.data.origin.dynasty
  author.innerHTML = result.data.origin.author + '《' + result.data.origin.title + '》'
  });
```
在<a>themes\anzhiyu\layout\includes\widget\index.pug</a>中添加以下代码
![](/img/posts/anzhiyu/shiju2.png)
```
!=partial('includes/widget/card_poem', {}, {cache: true})
```
在主题配置文件{% label '_config.yml' blue %}中找到{% label 'inject' blue %}引入css
```
inject:
  head:
    # 自定义css
    - <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/js-heo@1.0.11/poem/poem.css"> 
    - <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/js-heo@1.0.11/mainColor/heoMainColor.css"> 
```
如果觉得字体太小，或者更改字体，在<a>\themes\anzhiyu\source\css\custom</a>中创建{% label 'custom.css' blue %}添加以下代码
```
/*
 修改诗词作者字体大小
*/
div#poem_info {
  font-size: 1rem !important
}
/*
修改字体，换成自己已经安装的字体
*/
div#poem_sentence {
  font-family: 'DingTalk-JinBuTi' !important
}
```
在主题{% label '_config.yml' blue %}中引用{% label 'css' blue %}
```
inject:
  head:
    # 自定义css
    # - <link rel="stylesheet" href="/css/custom.css" media="defer" onload="this.media='all'">
    - <link rel="stylesheet" href="/css/custom/custom.css">
```
> 原文 [Butterfly美化：今日诗词侧边栏小组件](https://blog.zhheo.com/p/2ed9d8dd.html) ，原作者：[张洪Heo](https://blog.zhheo.com/)

# 添加B站视频
![](/img/posts/anzhiyu/bili.png)
在<a>\themes\anzhiyu\source\css\custom</a>创建{% label 'bilibili.css' blue %}，并输入

```css
.bilibili {
    position: relative;
    width: 100%;
}
@media only screen and (max-width: 767px) {
    .bilibili {height: 15em;max-width: 25em;}
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
    .bilibili {height: 20em;max-width: 30em;}
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
    .bilibili {height: 30em;max-width: 40em;}
}
@media only screen and (min-width: 1200px) {
    .bilibili {height: 40em;max-width: 50em;}
}

```

在主题配置文件{% label '_config.yml' blue %}中找到{% label 'inject' blue %}引入css
```css
inject:
  head:
    # 自定义css
    - <link rel="stylesheet" href="/css/custom/bilibili.css">
```
在html中输入并修改src
```html
<iframe class="bilibili" src="//player.bilibili.com/player.html?aid=81148317&cid=138878361&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
```
如果想让视频默认不播放，在src链接（视频链接最后链接）添加&autoplay=0
```html
# 默认播放
<iframe class="bilibili" src="//player.bilibili.com/player.html?aid=81148317&cid=138878361&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
# 默认不播放
<iframe class="bilibili" src="//player.bilibili.com/player.html?aid=81148317&cid=138878361&page=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" > </iframe>
```
> 原文 [Hexo博客引用B站视频并自动适配](https://hongcyu.github.io/posts/hexo-bilibili.html) ，原作者：[hongCYu's Blog](https://hongcyu.github.io/),
# 添加直达底部按钮
![](/img/posts/anzhiyu/dibu.png)
打开<a>themes\anzhiyu\layout\includes</a>中的{% label 'rightside.pug' blue %}找到{% label '#rightside-config-show' blue %}添加以下代码
```
    button#go-down(type="button" title="直达底部" onclick="anzhiyu.scrollToDest(document.body.scrollHeight, 500)")
      i.anzhiyufont.anzhiyu-icon-arrow-down
```
# 更换字体
默认
![](/img/posts/anzhiyu/font.png)
DingTalk-JinBuTi字体
![](/img/posts/anzhiyu/font2.png)
首先下载[DingTalk-JinBuTi](https://font.doany.cn/fonts/%E9%98%BF%E9%87%8C/%E9%92%89%E9%92%89%E8%BF%9B%E6%AD%A5%E4%BD%93.zip)字体，在<a>\themes\anzhiyu\source</a>中创建{% label 'fonts' blue %}文件夹，并将字体文件复制进去。
在<a>themes\anzhiyu\source\css\custom</a>中创建{% label 'font.css' blue %}
```
@font-face {
    font-family: 'DingTalk-JinBuTi';
    src: url('../../fonts/DingTalk-JinBuTi.woff2') format('woff2'),   /* 提供 WOFF2 格式 */
         url('../../fonts/DingTalk-JinBuTi.woff') format('woff'),     /* 提供 WOFF 格式 */
         url('../../fonts/DingTalk-JinBuTi.ttf') format('truetype');  /* 提供 TTF 格式 */
    font-weight: normal;
    font-style: normal;
}
``` 
在主题配置文件{% label '_config.yml' blue %}中找到{% label 'inject' blue %}引入css
```css
inject:
  head:
    # 自定义css
    - <link rel="stylesheet" href="/css/custom/font.css">
```
在主题配置文件{% label '_config.yml' blue %}找到{% label 'font' blue %}修改字体
![](/img/posts/anzhiyu/font3.png)
> 参考文章:[hexo butterfly主题下更换字体](https://jingzhi1208.github.io/2021/11/26/hexo-butterfly%E4%B8%BB%E9%A2%98%E4%B8%8B%E6%9B%B4%E6%8D%A2%E5%AD%97%E4%BD%93/)，[Solitude如何引用自定义字体](https://blog.qjqq.cn/posts/e8a9.html)
# 添加打赏卡片
{% reward 阿呆,999,2025-01-01,bilibili,/img/adai.png %}
在<a>\themes\anzhiyu\scripts\tag]</a>中创建{% label 'reward.js' blue %}
```
/**
 * reward
 * {% reward name,money,time,channel,avatar,url,friend %}
 * {% reward 名字,金额,时间,渠道,头像,链接,是否友链好友 %}
 */

'use strict'

function reward(args) {
    args = args.join(' ').split(',')

    // 获取参数
    let name = (args[0] || '匿名').trim(),
        money = args[1]
        time = (args[2] || '').trim(),
        channel = args[3],
        avatar = args[4] ? `<img class="no-lightbox" src="${isNaN(args[4]) ? args[4].trim() : `https://q1.qlogo.cn/g?b=qq&nk=${args[4]}&s=5`}">` : '<svg t="1672803307818" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13647" width="200" height="200"><path d="M512 0C229.236338 0 0 229.236338 0 512s229.236338 512 512 512 512-229.224912 512-512S794.775088 0 512 0z m-6.443844 190.801776c94.681097 0 171.710173 75.886551 171.710173 169.185192s-77.029076 169.208042-171.710173 169.208042-171.698748-75.909401-171.698749-169.185191S410.886484 190.801776 505.556156 190.801776zM793.141276 771.638944c0 61.536429-100.473702 61.536429-216.817084 61.536429H447.664383c-121.107714 0-216.794234 0-216.794234-61.536429v-12.670609c0-117.680137 97.240354-213.48091 216.794234-213.480909h128.659809c119.553879 0 216.817084 95.777922 216.817084 213.480909z" fill="#e5e5e5" p-id="13648"></path><path d="M576.324192 545.487426H447.664383c-119.553879 0-216.794234 95.755071-216.794234 213.480909v12.670609c0 61.536429 95.68652 61.536429 216.794234 61.536429h128.659809c116.343383 0 216.817084 0 216.817084-61.536429v-12.670609c0-117.702988-97.263205-213.48091-216.817084-213.480909zM505.556156 529.19501c94.681097 0 171.710173-75.875126 171.710173-169.185191S600.237253 190.801776 505.556156 190.801776s-171.698748 75.932252-171.698749 169.208043 77.029076 169.185192 171.698749 169.185191z" fill="#ffffff" p-id="13649"></path></svg>',
        url = args[5],
        friend = Number(args[6]);

    if (channel == 'wx') channel = '<svg t="1672813125726" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1210" width="200" height="200"><path d="M683.058 364.695c11 0 22 1.016 32.943 1.976C686.564 230.064 538.896 128 370.681 128c-188.104 0.66-342.237 127.793-342.237 289.226 0 93.068 51.379 169.827 136.725 229.256L130.72 748.43l119.796-59.368c42.918 8.395 77.37 16.79 119.742 16.79 11 0 21.46-0.48 31.914-1.442a259.168 259.168 0 0 1-10.455-71.358c0.485-148.002 128.744-268.297 291.403-268.297l-0.06-0.06z m-184.113-91.992c25.99 0 42.913 16.79 42.913 42.575 0 25.188-16.923 42.579-42.913 42.579-25.45 0-51.38-16.85-51.38-42.58 0-25.784 25.93-42.574 51.38-42.574z m-239.544 85.154c-25.384 0-51.374-16.85-51.374-42.58 0-25.784 25.99-42.574 51.374-42.574 25.45 0 42.918 16.79 42.918 42.575 0 25.188-16.924 42.579-42.918 42.579z m736.155 271.655c0-135.647-136.725-246.527-290.983-246.527-162.655 0-290.918 110.88-290.918 246.527 0 136.128 128.263 246.587 290.918 246.587 33.972 0 68.423-8.395 102.818-16.85l93.809 50.973-25.93-84.677c68.907-51.93 120.286-119.815 120.286-196.033z m-385.275-42.58c-16.923 0-34.452-16.79-34.452-34.179 0-16.79 17.529-34.18 34.452-34.18 25.99 0 42.918 16.85 42.918 34.18 0 17.39-16.928 34.18-42.918 34.18z m188.165 0c-16.984 0-33.972-16.79-33.972-34.179 0-16.79 16.927-34.18 33.972-34.18 25.93 0 42.913 16.85 42.913 34.18 0 17.39-16.983 34.18-42.913 34.18z" fill="#09BB07" p-id="1211"></path></svg>'
     else if (channel == 'zfb') channel = '<svg t="1672813142459" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1349" width="200" height="200"><path d="M902.095 652.871l-250.96-84.392s19.287-28.87 39.874-85.472c20.59-56.606 23.539-87.689 23.539-87.689l-162.454-1.339v-55.487l196.739-1.387v-39.227H552.055v-89.29h-96.358v89.294H272.133v39.227l183.564-1.304v59.513h-147.24v31.079h303.064s-3.337 25.223-14.955 56.606c-11.615 31.38-23.58 58.862-23.58 58.862s-142.3-49.804-217.285-49.804c-74.985 0-166.182 30.123-175.024 117.55-8.8 87.383 42.481 134.716 114.728 152.139 72.256 17.513 138.962-0.173 197.04-28.607 58.087-28.391 115.081-92.933 115.081-92.933l292.486 142.041c-11.932 69.3-72.067 119.914-142.387 119.844H266.37c-79.714 0.078-144.392-64.483-144.466-144.194V266.374c-0.074-79.72 64.493-144.399 144.205-144.47h491.519c79.714-0.073 144.396 64.49 144.466 144.203v386.764z m-365.76-48.895s-91.302 115.262-198.879 115.262c-107.623 0-130.218-54.767-130.218-94.155 0-39.34 22.373-82.144 113.943-88.333 91.519-6.18 215.2 67.226 215.2 67.226h-0.047z" fill="#02A9F1" p-id="1350"></path></svg>'
     else if (channel == 'qq') channel='<svg t="1672813064588" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1062" width="200" height="200"><path d="M511.09761 957.257c-80.159 0-153.737-25.019-201.11-62.386-24.057 6.702-54.831 17.489-74.252 30.864-16.617 11.439-14.546 23.106-11.55 27.816 13.15 20.689 225.583 13.211 286.912 6.767v-3.061z" fill="#FAAD08" p-id="1063"></path><path d="M496.65061 957.257c80.157 0 153.737-25.019 201.11-62.386 24.057 6.702 54.83 17.489 74.253 30.864 16.616 11.439 14.543 23.106 11.55 27.816-13.15 20.689-225.584 13.211-286.914 6.767v-3.061z" fill="#FAAD08" p-id="1064"></path><path d="M497.12861 474.524c131.934-0.876 237.669-25.783 273.497-35.34 8.541-2.28 13.11-6.364 13.11-6.364 0.03-1.172 0.542-20.952 0.542-31.155C784.27761 229.833 701.12561 57.173 496.64061 57.162 292.15661 57.173 209.00061 229.832 209.00061 401.665c0 10.203 0.516 29.983 0.547 31.155 0 0 3.717 3.821 10.529 5.67 33.078 8.98 140.803 35.139 276.08 36.034h0.972z" fill="#000000" p-id="1065"></path><path d="M860.28261 619.782c-8.12-26.086-19.204-56.506-30.427-85.72 0 0-6.456-0.795-9.718 0.148-100.71 29.205-222.773 47.818-315.792 46.695h-0.962C410.88561 582.017 289.65061 563.617 189.27961 534.698 185.44461 533.595 177.87261 534.063 177.87261 534.063 166.64961 563.276 155.56661 593.696 147.44761 619.782 108.72961 744.168 121.27261 795.644 130.82461 796.798c20.496 2.474 79.78-93.637 79.78-93.637 0 97.66 88.324 247.617 290.576 248.996a718.01 718.01 0 0 1 5.367 0C708.80161 950.778 797.12261 800.822 797.12261 703.162c0 0 59.284 96.111 79.783 93.637 9.55-1.154 22.093-52.63-16.623-177.017" fill="#000000" p-id="1066"></path><path d="M434.38261 316.917c-27.9 1.24-51.745-30.106-53.24-69.956-1.518-39.877 19.858-73.207 47.764-74.454 27.875-1.224 51.703 30.109 53.218 69.974 1.527 39.877-19.853 73.2-47.742 74.436m206.67-69.956c-1.494 39.85-25.34 71.194-53.24 69.956-27.888-1.238-49.269-34.559-47.742-74.435 1.513-39.868 25.341-71.201 53.216-69.974 27.909 1.247 49.285 34.576 47.767 74.453" fill="#FFFFFF" p-id="1067"></path><path d="M683.94261 368.627c-7.323-17.609-81.062-37.227-172.353-37.227h-0.98c-91.29 0-165.031 19.618-172.352 37.227a6.244 6.244 0 0 0-0.535 2.505c0 1.269 0.393 2.414 1.006 3.386 6.168 9.765 88.054 58.018 171.882 58.018h0.98c83.827 0 165.71-48.25 171.881-58.016a6.352 6.352 0 0 0 1.002-3.395c0-0.897-0.2-1.736-0.531-2.498" fill="#FAAD08" p-id="1068"></path><path d="M467.63161 256.377c1.26 15.886-7.377 30-19.266 31.542-11.907 1.544-22.569-10.083-23.836-25.978-1.243-15.895 7.381-30.008 19.25-31.538 11.927-1.549 22.607 10.088 23.852 25.974m73.097 7.935c2.533-4.118 19.827-25.77 55.62-17.886 9.401 2.07 13.75 5.116 14.668 6.316 1.355 1.77 1.726 4.29 0.352 7.684-2.722 6.725-8.338 6.542-11.454 5.226-2.01-0.85-26.94-15.889-49.905 6.553-1.579 1.545-4.405 2.074-7.085 0.242-2.678-1.834-3.786-5.553-2.196-8.135" fill="#000000" p-id="1069"></path><path d="M504.33261 584.495h-0.967c-63.568 0.752-140.646-7.504-215.286-21.92-6.391 36.262-10.25 81.838-6.936 136.196 8.37 137.384 91.62 223.736 220.118 224.996H506.48461c128.498-1.26 211.748-87.612 220.12-224.996 3.314-54.362-0.547-99.938-6.94-136.203-74.654 14.423-151.745 22.684-215.332 21.927" fill="#FFFFFF" p-id="1070"></path><path d="M323.27461 577.016v137.468s64.957 12.705 130.031 3.91V591.59c-41.225-2.262-85.688-7.304-130.031-14.574" fill="#EB1C26" p-id="1071"></path><path d="M788.09761 432.536s-121.98 40.387-283.743 41.539h-0.962c-161.497-1.147-283.328-41.401-283.744-41.539l-40.854 106.952c102.186 32.31 228.837 53.135 324.598 51.926l0.96-0.002c95.768 1.216 222.4-19.61 324.6-51.924l-40.855-106.952z" fill="#EB1C26" p-id="1072"></path></svg>'
     else channel='<svg t="1672812669835" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2998" width="200" height="200"><path d="M512 512m-448 0a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FFBD27" p-id="2999"></path><path d="M413.776 279.52l32.256 41.92h112.864l32.256-41.92 3.232-6.448v-3.232c0-6.448-3.232-9.664-9.68-12.896 0 0-45.152-9.664-83.84-9.664-38.72 0-83.856 9.664-83.856 9.664-16.128 6.448-3.232 22.576-3.232 22.576z m154.8 70.96H452.48C362.176 382.72 288 482.704 288 576.24c0 116.08 64.496 170.912 222.528 170.912 158.032 0 222.528-54.832 222.528-170.928 0-93.52-74.176-193.504-164.48-225.76z m22.576 238.64c6.448 0 12.896 6.448 12.896 12.912 0 6.448-6.448 12.896-12.896 12.896h-64.496v45.152c0 6.448-6.448 12.896-12.896 12.896-6.464 0-12.912-6.448-12.912-12.896v-41.92h-64.496c-6.448 0-12.896-6.464-12.896-12.912s6.448-12.896 12.896-12.896h64.496v-35.472h-64.496c-6.448 0-12.896-6.448-12.896-12.912 0-6.448 6.448-12.896 12.896-12.896h67.728v-3.216s-3.232 0-3.232-3.232l-51.6-61.28c-6.448-3.216-6.448-12.896 0-19.344s16.128-3.232 19.36 3.232l45.152 51.6 45.136-51.6c6.464-6.464 12.912-6.464 19.36-3.232 6.448 6.448 6.448 12.896 3.216 19.36l-51.6 61.28c0 3.2-3.216 3.2-6.448 3.2h67.728c6.448 0 12.896 6.464 12.896 12.912s-6.448 12.896-12.896 12.896h-64.496v35.472h64.496z" fill="#FFFFFF" p-id="3000"></path></svg>'
 /**
 * 如果你需要其他小图标，可以自己添加 else if (channel == '自定义icon名称') channel = '这里输入icon的svg地址'
 */
 
    return `<${url?`a href="${url}"`:'div'}  class="reward_card">
      ${friend?'<div class="isFriends">友链</div>':''}
      ${avatar}
      <div class="reward_info">
        <p class="reward_name">${name}</p>
        <div class="reward_bottom">
          <span class="reward_money">${channel}${money}<span style="font-size:13px"></span></span>
          <span class="reward_time">${time}</span>
        </div>
      </div>
    </${url?'a':'div'}>`
}

hexo.extend.tag.register('reward', reward, { ends: false })
```
在<a>\themes\anzhiyu\source\css\_tags</a>中创建{% label 'reward.styl' blue %}
```
.reward_card
  width: 280px
  position relative
  display: flex
  text-decoration: none !important
  color: var(--font-color) !important
  background: var(--card-bg)
  align-items: center
  border: 1px solid #e0e3ed
  border-radius: 12px
  padding: 1rem
  overflow hidden
  margin: .5rem
  transition: .3s
  &:hover
    background: #4976f5
    scale: 1.02
    color: white !important
    .isFriends
      transform: translate(100%)
  .reward_info
    display: flex
    margin-left: 10px
    flex-direction: column
    flex: 1
    line-height: 1.5
    font-size: 1.2rem
    p
      margin: 0 !important
    .reward_name
      font-weight: bold
      font-size: 21px
    .reward_bottom
      display: flex
      align-items: baseline
      justify-content: space-between
      .reward_money
        svg
          margin-right: 3px
      span.reward_time
        font-size: 12px
        opacity: .8

  &>img,&>svg
    width: 65px !important
    height: 65px !important
    object-fit: cover
    border-radius: 50% !important
    margin: 0 !important
  .isFriends
    position: absolute
    transition: .3s
    right: 0
    top: 0
    background: #4976f5
    color: white
    padding: 0 10px
    border-radius: 0 0 0 10px
```
如没有阿里图标css，在<a>\themes\anzhiyu\source\css\custom</a>中创建{% label 'aliicon.css' blue %}
```
/* 阿里图标 */
svg.icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    font-size: 20px;
}
```
在主题{% label '_config.yml' blue %}中引用{% label 'css' blue %}
```
inject:
  head:
    # 自定义css
    # - <link rel="stylesheet" href="/css/custom.css" media="defer" onload="this.media='all'">
    - <link rel="stylesheet" href="/css/custom/aliicon.css">
```
参数
```
{% reward 名字,金额/礼物,时间，渠道,头像,链接,是否友链好友(1/0) %}
```
如果要实现打赏页面
![](/img/posts/anzhiyu/zanshang.png)
只需要在markdown内输入
```
<style>
.reward_box {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}
.reward_card {
    margin: 0;
    width: calc(100% / 4 - 6px);
    box-shadow: 0 2px 10px -4px #2c2d300c;
}
@media screen and (max-width: 1080px) {
    .reward_box {
        gap: 9px;
    }
    .reward_card {
        width: calc(100% / 3  - 6px);
    }
}

@media screen and (max-width: 850px) {
    .reward_box {
        gap: 8px;
    }
    .reward_card {
        width: calc(100% / 2  - 4px);
    }
}
@media screen and (max-width: 568px) {
    .reward_card {
        width: 100%;
    }
}
</style>


<div class="reward_box">

<!-- 输入赞赏名单 -->

</div>
```
> 本文部分内容进行是针对[Leonus](https://blog.leonus.cn/)代码修改，原文请看[打赏卡片标签外挂](https://blog.leonus.cn/2023/reward-card.html)
# 语雀卡片
![](/img/posts/anzhiyu/yuque.png)
在 <a>\themes\anzhiyu\scripts\tag</a> 文件夹下面新建{% label 'link.js' blue %}并粘贴如下代码：
```
/**
 * link
 * {% link url,title,favicon,desc %}
 * {% link 链接,标题,图标,介绍 %}
 */

'use strict'

let defaultIcon = '<svg t="1670307855063" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19066" width="200" height="200"><path d="M504.064 516.608m-384.256 0a384.256 384.256 0 1 0 768.512 0 384.256 384.256 0 1 0-768.512 0Z" fill="#009CF5" p-id="19068"></path><path d="M746.112 270.464L472.448 485.12l63.104 63.104L750.08 274.56c2.304-2.688-1.28-6.144-3.968-4.096z" fill="#FF4C3A" p-id="19069"></path><path d="M262.016 762.752l273.664-214.528-63.104-63.104-214.656 273.536c-2.176 2.688 1.28 6.144 4.096 4.096z" fill="#FFFFFF" p-id="19070"></path><path d="M505.216 155.136c-3.2 0-5.888 2.56-5.888 5.888v53.504c0 3.2 2.56 5.888 5.888 5.888s5.888-2.56 5.888-5.888v-53.504c-0.128-3.2-2.688-5.888-5.888-5.888zM442.368 160.512c-3.2 0.512-5.376 3.584-4.736 6.784l9.344 52.736c0.512 3.2 3.584 5.376 6.784 4.736 3.2-0.512 5.376-3.584 4.736-6.784l-9.344-52.736c-0.512-3.2-3.584-5.376-6.784-4.736zM396.288 234.368c1.152 3.072 4.48 4.608 7.552 3.456 3.072-1.152 4.608-4.48 3.456-7.552l-18.304-50.304c-1.152-3.072-4.48-4.608-7.552-3.456-3.072 1.152-4.608 4.48-3.456 7.552l18.304 50.304zM348.928 257.408c1.664 2.816 5.248 3.712 7.936 2.176s3.712-5.248 2.176-7.936l-26.752-46.336c-1.664-2.816-5.248-3.712-7.936-2.176-2.816 1.664-3.712 5.248-2.176 7.936l26.752 46.336zM306.304 288.256c2.048 2.432 5.76 2.816 8.192 0.768 2.432-2.048 2.816-5.76 0.768-8.192l-34.432-40.96c-2.048-2.432-5.76-2.816-8.192-0.768-2.432 2.048-2.816 5.76-0.768 8.192l34.432 40.96zM269.696 326.144c2.432 2.048 6.144 1.792 8.192-0.768 2.048-2.432 1.792-6.144-0.768-8.192l-40.96-34.432c-2.432-2.048-6.144-1.792-8.192 0.768-2.048 2.432-1.792 6.144 0.768 8.192l40.96 34.432zM193.792 342.912l46.336 26.752c2.816 1.664 6.4 0.64 7.936-2.176 1.664-2.816 0.64-6.4-2.176-8.064L199.552 332.8c-2.816-1.664-6.4-0.64-7.936 2.176-1.664 2.688-0.64 6.272 2.176 7.936zM168.32 399.488l50.304 18.304c3.072 1.152 6.4-0.512 7.552-3.456 1.152-3.072-0.512-6.4-3.456-7.552l-50.304-18.304c-3.072-1.152-6.4 0.512-7.552 3.456-1.152 3.072 0.384 6.4 3.456 7.552zM207.872 457.344l-52.736-9.344c-3.2-0.512-6.272 1.536-6.784 4.736-0.512 3.2 1.536 6.272 4.736 6.784l52.736 9.344c3.2 0.512 6.272-1.536 6.784-4.736 0.512-3.2-1.536-6.272-4.736-6.784zM201.984 509.568H148.48c-3.2 0-5.888 2.56-5.888 5.888 0 3.2 2.56 5.888 5.888 5.888h53.504c3.2 0 5.888-2.56 5.888-5.888 0-3.2-2.56-5.888-5.888-5.888zM205.44 562.176l-52.736 9.344c-3.2 0.512-5.376 3.584-4.736 6.784 0.512 3.2 3.584 5.376 6.784 4.736l52.736-9.344c3.2-0.512 5.376-3.584 4.736-6.784s-3.584-5.248-6.784-4.736zM217.856 613.376l-50.304 18.304c-3.072 1.152-4.608 4.48-3.456 7.552 1.152 3.072 4.48 4.608 7.552 3.456l50.304-18.304c3.072-1.152 4.608-4.48 3.456-7.552-1.152-3.072-4.48-4.608-7.552-3.456zM238.976 661.504l-46.336 26.752c-2.816 1.664-3.712 5.248-2.176 8.064 1.664 2.816 5.248 3.712 8.064 2.176l46.336-26.752c2.816-1.664 3.712-5.248 2.176-8.064-1.664-2.816-5.248-3.712-8.064-2.176zM268.16 705.408l-40.96 34.432c-2.432 2.048-2.816 5.76-0.768 8.192 2.048 2.432 5.76 2.816 8.192 0.768l40.96-34.432c2.432-2.048 2.816-5.76 0.768-8.192-1.92-2.56-5.632-2.816-8.192-0.768zM304.512 743.424l-34.432 40.96c-2.048 2.432-1.792 6.144 0.768 8.192 2.432 2.048 6.144 1.792 8.192-0.768l34.432-40.96c2.048-2.432 1.792-6.144-0.768-8.192-2.304-1.92-6.016-1.664-8.192 0.768zM347.008 774.656l-26.752 46.336c-1.664 2.816-0.64 6.4 2.176 7.936 2.816 1.664 6.4 0.64 8.064-2.176l26.752-46.336c1.664-2.816 0.64-6.4-2.176-7.936-2.816-1.536-6.4-0.64-8.064 2.176zM394.24 798.08l-18.304 50.304c-1.152 3.072 0.512 6.4 3.456 7.552 3.072 1.152 6.4-0.512 7.552-3.456l18.304-50.304c1.152-3.072-0.512-6.4-3.456-7.552-3.072-1.152-6.528 0.384-7.552 3.456zM440.192 872.32c3.2 0.512 6.272-1.536 6.784-4.736l9.344-52.736c0.512-3.2-1.536-6.272-4.736-6.784-3.2-0.512-6.272 1.536-6.784 4.736l-9.344 52.736c-0.64 3.2 1.536 6.272 4.736 6.784zM502.912 878.08c3.2 0 5.888-2.56 5.888-5.888v-53.504c0-3.2-2.56-5.888-5.888-5.888-3.2 0-5.888 2.56-5.888 5.888v53.504c0 3.2 2.688 5.888 5.888 5.888zM549.632 815.232l9.344 52.736c0.512 3.2 3.584 5.376 6.784 4.736 3.2-0.512 5.376-3.584 4.736-6.784l-9.344-52.736c-0.512-3.2-3.584-5.376-6.784-4.736-3.2 0.512-5.248 3.584-4.736 6.784zM600.832 802.816l18.304 50.304c1.152 3.072 4.48 4.608 7.552 3.456 3.072-1.152 4.608-4.48 3.456-7.552L611.84 798.72c-1.152-3.072-4.48-4.608-7.552-3.456-3.072 1.152-4.608 4.48-3.456 7.552zM649.088 781.696l26.752 46.336c1.664 2.816 5.248 3.712 8.064 2.176 2.816-1.664 3.712-5.248 2.176-8.064l-26.88-46.336c-1.664-2.816-5.248-3.712-8.064-2.176-2.816 1.664-3.712 5.248-2.048 8.064zM692.864 752.384l34.432 40.96c2.048 2.432 5.76 2.816 8.192 0.768 2.432-2.048 2.816-5.76 0.768-8.192l-34.432-40.96c-2.048-2.432-5.76-2.816-8.192-0.768-2.56 2.048-2.816 5.76-0.768 8.192zM730.88 716.032l40.96 34.432c2.432 2.048 6.144 1.792 8.192-0.768 2.048-2.432 1.792-6.144-0.768-8.192l-40.96-34.432c-2.432-2.048-6.144-1.792-8.192 0.768-1.92 2.432-1.664 6.144 0.768 8.192zM762.112 673.664l46.336 26.752c2.816 1.664 6.4 0.64 8.064-2.176 1.664-2.816 0.64-6.4-2.176-7.936L768 663.552c-2.816-1.664-6.4-0.64-8.064 2.176-1.536 2.688-0.64 6.272 2.176 7.936zM785.536 626.432l50.304 18.304c3.072 1.152 6.4-0.512 7.552-3.456 1.152-3.072-0.512-6.4-3.456-7.552l-50.304-18.304c-3.072-1.152-6.4 0.512-7.552 3.456-1.152 3.072 0.384 6.4 3.456 7.552zM800.256 575.872l52.736 9.344c3.2 0.512 6.272-1.536 6.784-4.736 0.512-3.2-1.536-6.272-4.736-6.784l-52.736-9.344c-3.2-0.512-6.272 1.536-6.784 4.736-0.512 3.2 1.536 6.272 4.736 6.784zM800.256 517.76c0 3.2 2.56 5.888 5.888 5.888h53.504c3.2 0 5.888-2.56 5.888-5.888 0-3.2-2.56-5.888-5.888-5.888h-53.504c-3.328 0-5.888 2.56-5.888 5.888zM802.688 471.04l52.736-9.344c3.2-0.512 5.376-3.584 4.736-6.784-0.512-3.2-3.584-5.376-6.784-4.736l-52.736 9.344c-3.2 0.512-5.376 3.584-4.736 6.784 0.512 3.2 3.584 5.248 6.784 4.736zM790.272 419.84l50.304-18.304c3.072-1.152 4.608-4.48 3.456-7.552-1.152-3.072-4.48-4.608-7.552-3.456l-50.304 18.304c-3.072 1.152-4.608 4.48-3.456 7.552 1.152 2.944 4.48 4.608 7.552 3.456zM769.152 371.584l46.336-26.752c2.816-1.664 3.712-5.248 2.176-7.936-1.664-2.816-5.248-3.712-8.064-2.176l-46.336 26.752c-2.816 1.664-3.712 5.248-2.176 8.064 1.664 2.688 5.248 3.712 8.064 2.048zM739.84 327.808l40.96-34.432c2.432-2.048 2.816-5.76 0.768-8.192-2.048-2.432-5.76-2.816-8.192-0.768l-40.96 34.432c-2.432 2.048-2.816 5.76-0.768 8.192 2.048 2.56 5.76 2.816 8.192 0.768zM703.488 289.664l34.432-40.96c2.048-2.432 1.792-6.144-0.768-8.192-2.432-2.048-6.144-1.792-8.192 0.768l-34.432 40.96c-2.048 2.432-1.792 6.144 0.768 8.192 2.432 2.048 6.144 1.792 8.192-0.768zM661.12 258.56l26.752-46.336c1.664-2.816 0.64-6.4-2.176-7.936-2.816-1.664-6.4-0.64-8.064 2.176l-26.752 46.336c-1.664 2.816-0.64 6.4 2.176 7.936 2.816 1.536 6.4 0.64 8.064-2.176zM613.888 235.136l18.304-50.304c1.152-3.072-0.512-6.4-3.456-7.552-3.072-1.152-6.4 0.512-7.552 3.456L602.88 231.168c-1.152 3.072 0.512 6.4 3.456 7.552 3.072 1.024 6.4-0.512 7.552-3.584zM556.544 225.152c3.2 0.512 6.272-1.536 6.784-4.736l9.344-52.736c0.512-3.2-1.536-6.272-4.736-6.784-3.2-0.512-6.272 1.536-6.784 4.736l-9.344 52.736c-0.512 3.2 1.536 6.144 4.736 6.784zM273.536 290.432c2.432 2.432 6.528 2.432 8.96 0 2.432-2.432 2.432-6.528 0-8.96l-21.12-21.12c-2.432-2.432-6.528-2.432-8.96 0-2.432 2.432-2.432 6.528 0 8.96l21.12 21.12zM237.824 333.824c2.944 2.048 6.912 1.28 8.832-1.536 2.048-2.944 1.28-6.912-1.536-8.832l-24.448-17.152c-2.944-2.048-6.912-1.28-8.832 1.536s-1.28 6.912 1.536 8.832l24.448 17.152zM183.04 370.176l27.136 12.672c3.2 1.536 7.04 0.128 8.448-3.072 1.536-3.2 0.128-7.04-3.072-8.448l-27.136-12.672c-3.2-1.536-7.04-0.128-8.448 3.072-1.536 3.2-0.128 7.04 3.072 8.448zM194.688 423.68l-28.928-7.68c-3.456-0.896-6.912 1.152-7.808 4.48-0.896 3.456 1.152 6.912 4.48 7.808l28.928 7.68c3.456 0.896 6.912-1.152 7.808-4.48 0.896-3.456-1.152-6.912-4.48-7.808zM183.168 478.72l-29.824-2.56c-3.456-0.256-6.656 2.304-6.912 5.76-0.256 3.456 2.304 6.656 5.76 6.912l29.824 2.56c3.456 0.256 6.656-2.304 6.912-5.76 0.384-3.456-2.176-6.528-5.76-6.912zM181.504 535.04l-29.824 2.56c-3.456 0.256-6.144 3.456-5.76 6.912 0.256 3.456 3.456 6.144 6.912 5.76l29.824-2.56c3.456-0.256 6.144-3.456 5.76-6.912-0.256-3.456-3.328-6.016-6.912-5.76zM191.36 590.72l-28.928 7.68c-3.456 0.896-5.376 4.352-4.48 7.808 0.896 3.456 4.352 5.376 7.808 4.48l28.928-7.68c3.456-0.896 5.376-4.352 4.48-7.808-0.896-3.328-4.352-5.376-7.808-4.48zM207.232 644.224l-27.136 12.672c-3.2 1.536-4.608 5.248-3.072 8.448 1.536 3.2 5.248 4.608 8.448 3.072l27.136-12.672c3.2-1.536 4.608-5.248 3.072-8.448-1.408-3.2-5.248-4.48-8.448-3.072zM233.984 693.888l-24.448 17.152c-2.944 2.048-3.584 6.016-1.536 8.832 2.048 2.944 6.016 3.584 8.832 1.536l24.448-17.152c2.944-2.048 3.584-6.016 1.536-8.832-2.048-2.944-6.016-3.584-8.832-1.536zM310.912 775.552L293.76 800c-2.048 2.944-1.28 6.912 1.536 8.832 2.944 2.048 6.912 1.28 8.832-1.536l17.152-24.448c2.048-2.944 1.28-6.912-1.536-8.832-2.816-2.048-6.912-1.408-8.832 1.536zM349.184 840.704c3.2 1.536 7.04 0.128 8.448-3.072l12.672-27.136c1.536-3.2 0.128-7.04-3.072-8.448-3.2-1.536-7.04-0.128-8.448 3.072l-12.672 27.136c-1.408 3.2-0.128 6.912 3.072 8.448zM407.808 862.72c3.456 0.896 6.912-1.152 7.808-4.48l7.68-28.928c0.896-3.456-1.152-6.912-4.48-7.808-3.456-0.896-6.912 1.152-7.808 4.48l-7.68 28.928c-0.896 3.328 1.152 6.912 4.48 7.808zM469.376 874.112c3.456 0.256 6.656-2.304 6.912-5.76l2.56-29.824c0.256-3.456-2.304-6.656-5.76-6.912-3.456-0.256-6.656 2.304-6.912 5.76l-2.56 29.824c-0.256 3.584 2.304 6.656 5.76 6.912zM522.496 839.168l2.56 29.824c0.256 3.456 3.456 6.144 6.912 5.76 3.456-0.256 6.144-3.456 5.76-6.912l-2.56-29.824c-0.256-3.456-3.456-6.144-6.912-5.76-3.456 0.256-6.016 3.328-5.76 6.912zM578.176 830.976l7.68 28.928c0.896 3.456 4.352 5.376 7.808 4.48 3.456-0.896 5.376-4.352 4.48-7.808l-7.68-28.928c-0.896-3.456-4.352-5.376-7.808-4.48-3.328 0.896-5.376 4.48-4.48 7.808zM631.68 813.312l12.672 27.136c1.536 3.2 5.248 4.608 8.448 3.072 3.2-1.536 4.608-5.248 3.072-8.448l-12.672-27.136c-1.536-3.2-5.248-4.608-8.448-3.072-3.2 1.536-4.48 5.248-3.072 8.448zM681.344 786.688l17.152 24.448c2.048 2.944 6.016 3.584 8.832 1.536 2.944-2.048 3.584-6.016 1.536-8.832l-17.152-24.448c-2.048-2.944-6.016-3.584-8.832-1.536-2.944 1.92-3.584 5.888-1.536 8.832zM725.504 751.744l21.12 21.12c2.432 2.432 6.528 2.432 8.96 0 2.432-2.432 2.432-6.528 0-8.96l-21.12-21.12c-2.432-2.432-6.528-2.432-8.96 0-2.432 2.432-2.432 6.528 0 8.96zM763.008 709.76l24.448 17.152c2.944 2.048 6.912 1.28 8.832-1.536 2.048-2.944 1.28-6.912-1.536-8.832l-24.448-17.152c-2.944-2.048-6.912-1.28-8.832 1.536-2.048 2.816-1.408 6.784 1.536 8.832zM792.576 661.888l27.136 12.672c3.2 1.536 7.04 0.128 8.448-3.072 1.536-3.2 0.128-7.04-3.072-8.448l-27.136-12.672c-3.2-1.536-7.04-0.128-8.448 3.072-1.536 3.2-0.128 6.912 3.072 8.448zM813.44 609.536l28.928 7.68c3.456 0.896 6.912-1.152 7.808-4.48 0.896-3.456-1.152-6.912-4.48-7.808l-28.928-7.68c-3.456-0.896-6.912 1.152-7.808 4.48-0.896 3.456 1.024 6.912 4.48 7.808zM824.832 554.368l29.824 2.56c3.456 0.256 6.656-2.304 6.912-5.76 0.256-3.456-2.304-6.656-5.76-6.912l-29.824-2.56c-3.456-0.256-6.656 2.304-6.912 5.76-0.256 3.584 2.304 6.656 5.76 6.912zM826.624 498.176l29.824-2.56c3.456-0.256 6.144-3.456 5.76-6.912-0.256-3.456-3.456-6.144-6.912-5.76l-29.824 2.56c-3.456 0.256-6.144 3.456-5.76 6.912 0.256 3.456 3.328 6.016 6.912 5.76zM818.432 442.368l28.928-7.68c3.456-0.896 5.376-4.352 4.48-7.808-0.896-3.456-4.352-5.376-7.808-4.48l-28.928 7.68c-3.456 0.896-5.376 4.352-4.48 7.808 0.896 3.456 4.48 5.376 7.808 4.48zM800.768 388.992l27.136-12.672c3.2-1.536 4.608-5.248 3.072-8.448-1.536-3.2-5.248-4.608-8.448-3.072l-27.136 12.672c-3.2 1.536-4.608 5.248-3.072 8.448 1.536 3.072 5.248 4.48 8.448 3.072zM774.144 339.328l24.448-17.152c2.944-2.048 3.584-6.016 1.536-8.832-2.048-2.944-6.016-3.584-8.832-1.536L766.848 328.96c-2.944 2.048-3.584 6.016-1.536 8.832 1.92 2.816 5.888 3.584 8.832 1.536zM697.216 257.664l17.152-24.448c2.048-2.944 1.28-6.912-1.536-8.832-2.944-2.048-6.912-1.28-8.832 1.536l-17.152 24.448c-2.048 2.944-1.28 6.912 1.536 8.832 2.816 2.048 6.784 1.408 8.832-1.536zM658.944 192.512c-3.2-1.536-7.04-0.128-8.448 3.072l-12.672 27.136c-1.536 3.2-0.128 7.04 3.072 8.448 3.2 1.536 7.04 0.128 8.448-3.072l12.672-27.136c1.408-3.2 0-7.04-3.072-8.448zM600.192 170.496c-3.456-0.896-6.912 1.152-7.808 4.48l-7.68 28.928c-0.896 3.456 1.152 6.912 4.48 7.808 3.456 0.896 6.912-1.152 7.808-4.48l7.68-28.928c1.024-3.328-1.024-6.912-4.48-7.808zM534.912 201.6c3.456 0.256 6.656-2.304 6.912-5.76l2.56-29.824c0.256-3.456-2.304-6.656-5.76-6.912-3.456-0.256-6.656 2.304-6.912 5.76l-2.56 29.824c-0.256 3.456 2.304 6.528 5.76 6.912zM476.032 158.464c-3.456 0.256-6.144 3.456-5.76 6.912l2.56 29.824c0.256 3.456 3.456 6.144 6.912 5.76 3.456-0.256 6.144-3.456 5.76-6.912l-2.56-29.824c-0.256-3.456-3.328-6.016-6.912-5.76zM422.144 173.312c-0.896-3.456-4.352-5.376-7.808-4.48-3.456 0.896-5.376 4.352-4.48 7.808l7.68 28.928c0.896 3.456 4.352 5.376 7.808 4.48 3.456-0.896 5.376-4.352 4.48-7.808l-7.68-28.928zM376.448 219.776l-12.672-27.136c-1.536-3.2-5.248-4.608-8.448-3.072-3.2 1.536-4.608 5.248-3.072 8.448L364.8 225.28c1.536 3.2 5.248 4.608 8.448 3.072 3.2-1.536 4.608-5.376 3.2-8.576zM316.416 253.824c2.048 2.944 6.016 3.584 8.832 1.536 2.944-2.048 3.584-6.016 1.536-8.832l-17.152-24.448c-2.048-2.944-6.016-3.584-8.832-1.536-2.944 2.048-3.584 6.016-1.536 8.832l17.152 24.448z" fill="#FFFFFF" p-id="19071"></path></svg>'

function link(args) {
    args = args.join(' ').split(',');
    // 获取参数
    let url = (args[0] || '').trim(),
        title = (args[1] || '点击直达链接').trim(),
        favicon = (args[2] ? `<img src="${args[2]}" class="no-lightbox">` : defaultIcon).trim(),
        desc = (args[3] || '').trim()

    return `<a href="${url}" ${url.includes('http')?'target="_blank"':''} title="${title}" referrerPolicy="no-referrer" class="link_card"><div class="link_icon">${favicon}</div><div class="link_content"><div class="link_title">${title}</div>${desc?`<div class="link_desc">${desc}</div>`:''}</div></a>`
}

hexo.extend.tag.register('link', link, { ends: false })
```
在 <a>\themes\anzhiyu\source\css\_tags</a> 文件夹下面新建{% label 'link.js' blue %}并粘贴如下代码：
```
.link_card
  display: flex
  margin: 10px 0
  color: var(--font-color) 
  text-decoration: none 
  background: var(--reward-pop)
  border-radius: 10px !important
  padding: 10px !important
  &:hover
    background: #4976f5 
    color: white 
  .link_icon,.link_content
    height: 4rem
  .link_icon
    img,svg
      height: 4rem
      width: 4rem 
  .link_content
    margin-left: 1rem 
    width: calc(100% - 6rem) 
    overflow: hidden 
    line-height: 1.5 
    display: flex 
    flex-direction: column 
    justify-content: center 
    .link_title
      font-weight: bold  
      font-size: 1.2rem 
    .link_title,.link_desc
      word-break: break-all  
      overflow:hidden 
      text-overflow: ellipsis 
    &:not(:has(.link_desc)) .link_title
      display:-webkit-box 
      -webkit-box-orient:vertical 
      -webkit-line-clamp:2 
    .link_desc
      opacity: .6 
    .link_desc,&:has(.link_desc) .link_title
      white-space: nowrap 
a.link_card{
  border-bottom: none !important
}
```
使用格式
```
{% link 链接,标题,图标,介绍 %}
```
> 本文部分内容进行是针对[Leonus](https://blog.leonus.cn/)代码修改，感谢[葱苓语畔](https://blog.ciraos.top)，[小旦](https://satera.cn)，[Mo的记事簿](https://blog.xiowo.net/)的帮助，原文请看[语雀同款链接卡片—butterfly主题标签外挂](https://blog.leonus.cn/2022/link-card.html)
# 藏宝阁
![](/img/posts/anzhiyu/collect.png)
在<a>\themes\anzhiyu\layout\page.pug</a>中添加如下代码到{% label 'categories.pug' blue %}下方
```
when 'collect'
  include includes/page/collect.pug
```
在<a>\themes\anzhiyu\layout\includes\page</a>下新建{% label 'collect.pug' blue %}
```
#article-container
  .collect
    - let collectPageContent = page.content
    if site.data.collect
      - let result = ""
      each i in site.data.collect
        - let className = i.class_name ? `<h2 ${i.class_desc?'':'style="margin-bottom:12px"'}>${i.class_name} (${i.link_list.length})</h2>` : ""
        - let classDesc = i.class_desc ? `<div class="collect-desc">${i.class_desc}</div>` : ""
        - let listResult = ""
        each j in i.link_list
          - 
            listResult += `
              <${j.url ? "a href='" + j.url + "'" : "div"} title="${j.name}" referrerPolicy="no-referrer" class="collect_box" style="${j.img?`background-image: url(${j.img})`:'background-color: #333;'}">
                  <div class="collect_top">
                    <i class="${j.icon?j.icon:'fa-solid fa-film'}"></i>
                    <span>${j.tip?j.tip:'电影'}</span>
                  </div>
                  <div class="collect_content">
                    <span>${j.name?j.name:'未知'}</span>
                    <div>${j.score?toStar(j.score):toStar(0)}</div>
                  </div>
                </${j.url?"a":"div"}>
              `
          -
        - result += `${className}${classDesc} <div class="collect-list">${listResult}</div>`
      - collectPageContent = collectPageContent + result
    != collectPageContent
```
在<a>\themes\anzhiyu\source\css\_page</a>下新建{% label 'collect.styl' blue %}文件并粘贴如下代码：
```
.collect
  h2
    margin-bottom: 0
  .collect-desc
    margin-bottom: 10px
  .collect-list
    display: flex
    gap: 18px
    flex-wrap: wrap
    a.collect_box
      color: white
      text-decoration: none 
    .collect_box
      --w: calc(100% / 6 - 15px) 
      width: var(--w) 
      display: flex 
      justify-content: space-between 
      flex-direction: column 
      background-position: center 
      background-size: cover !important
      border-radius: 12px !important
      position: relative 
      overflow: hidden 
      padding: 10px 
      color: #fff 
      transition: .5s 
      &::after
        content: ''
        position: absolute
        height: 100%
        width: 100%
        left: 0
        top: 0
        background: rgba(0,0,0,0.3)
        z-index: 0
        transition: .5s
      &:hover
        transform: translateY(-10px)
        &::after
          background: rgba(0,0,0,0.1)
      .collect_top
        display: flex
        z-index: 1
        align-items: center
        justify-content: space-between
      .collect_content
        z-index: 1
        margin-top: 86%
        span
          display: block
          font-size: 18px
          font-weight: bold
          white-space: nowrap
          overflow: hidden
          text-overflow: ellipsis

[data-theme='dark']
  .collect .collect-list .collect_box
    color: #ddd !important
    &:hover
      transform: translateY(-10px)
      &::after
        background: rgba(0,0,0,0.2)
    &::after
      background: rgba(0,0,0,0.5)
.collect .collect-list
  @media screen and (max-width: 1100px)
    gap: 15px
    .collect_box
      --w: calc(20% - 12px)
  @media screen and (max-width: 900px)
    gap: 16px
    .collect_box
      --w: calc(25% - 12px)
  @media screen and (max-width: 768px)
    gap: 15px
    .collect_box
      --w: calc(100% / 3 - 10px)
  @media screen and (max-width: 500px)
    gap: 16px
    .collect_box
      --w: calc(50% - 8px)
a.collect_box{
  border-bottom:none !important
}
```
在<a>themes\anzhiyu\scripts\helpers\page.js</a>最下方添加
```
// 藏宝阁星星
hexo.extend.helper.register('toStar', function(num) {
    let tmp = ''
    for (let i = 0; i < Math.floor(num); i++) { tmp += '<i class="fa-solid fa-star"></i>' } // 整数部分加 实心星星
    if (num - Math.floor(num) != 0) tmp += '<i class="fa-solid fa-star-half-alt"></i>' // 小数部分转成 半星
    for (let i = 0; i < 5 - Math.ceil(num); i++) { tmp += '<i class="fa-regular fa-star"></i>' } // 不够5个补 空心星星
    return tmp
})
```
在<a>\source\_data</a>下面新建{% label 'collect.yml' blue %}
```
- class_name: 📺 电影
  class_desc: #分类描述
  link_list:
    - name: 让子弹飞 #名字
      img: https://t1.szrtcpa.com/upload/vod/20220313-27/fa8e1f40e62df7aa609cba34f5ee8a25.jpg #图片链接
      score: 5 # 1-5星
      icon: fa-solid fa-film #左上角图标
      tip: 电影 # 右上角文字
      url: # 可选
```
> 本文部分内容进行是针对[Leonus](https://blog.leonus.cn/)代码修改，，原文请看[藏宝阁页面的实现](https://blog.leonus.cn/2023/collectPage.html)
# 搜索只显示与文章标题匹配结果
![](img/posts/anzhiyu/search.png)
打开<a>\themes\anzhiyu\source\js\search\local-search.js</a>文件，找到{% label 'search()' blue %}函数部分修改成一下代码。

```
  const search = () => {
    if (!GLOBAL_CONFIG.localSearch.preload) {
      dataObj = fetchData(GLOBAL_CONFIG.localSearch.path);
    }
    const $input = document.querySelector("#local-search-input input");
    const $resultContent = document.getElementById("local-search-results");
    const $loadingStatus = document.getElementById("loading-status");
  
    // 每次输入时触发
    $input.addEventListener("input", function () {
      const keywords = this.value.trim().toLowerCase().split(/[\s]+/);
      
      // 如果搜索框为空，清空结果并不显示任何内容
      if (keywords[0] === "") {
        $resultContent.innerHTML = "";
        $loadingStatus.innerHTML = "";
        return;
      }
  
      // 显示加载状态
      if (keywords[0] !== "") {
        $loadingStatus.innerHTML = '<i class="anzhiyufont anzhiyu-icon-spinner anzhiyu-pulse-icon"></i>';
      }
  
      $resultContent.innerHTML = "";
      let str = '<div class="search-result-list">';
      let count = 0;
  
      // 执行本地搜索
      dataObj.then(data => {
        data.forEach(data => {
          let isMatch = true;
          let dataTitle = data.title ? data.title.trim().toLowerCase() : "";
          const dataUrl = data.url.startsWith("/") ? data.url : GLOBAL_CONFIG.root + data.url;
          
          // 仅匹配标题
          keywords.forEach((keyword, i) => {
            if (dataTitle.indexOf(keyword) < 0) {
              isMatch = false;
            }
          });
  
          // 显示搜索结果
          if (isMatch) {
            str += '<div class="local-search__hit-item">';
            str +=
              '<div class="search-right" style="width: 100%"><a href="' +
              dataUrl +
              '" class="search-result-title">' +
              dataTitle +
              "</a>";
            count += 1;
            str += "</div></div>";
          }
        });
  
        // 如果没有匹配结果，显示 "未找到"
        if (count === 0) {
          str +=
            '<div id="local-search__hits-empty">' +
            GLOBAL_CONFIG.localSearch.languages.hits_empty.replace(/\$\{query}/, this.value.trim()) +
            "</div>";
        } else {
          // 显示匹配的数量
          str += '<div class="search-result-count">共找到 ' + count + ' 个结果</div>';
        }
  
        str += "</div>";
        $resultContent.innerHTML = str;
  
        // 搜索完成后清除加载状态
        if (keywords[0] !== "") $loadingStatus.innerHTML = "";
  
        window.pjax && window.pjax.refresh($resultContent);
      });
    });
  };
```
# 作者卡片
![](/img/posts/anzhiyu/zuozhecard.png)
打开</a>\themes\anzhiyu\source\css\ _layout\aside.styl>文件更换一下代码
```
.post
  +maxWidth768()
    #aside-content
      background: var(--anzhiyu-background);
      border: none;
      z-index 99
      margin-top: -1px
#aside-content
  width: 300px
  animation: slide-in 0.6s 0.3s backwards;

  +minWidth1200()
    if hexo-config('aside.position') == 'right'
      padding-left: 15px
    else
      padding-right: 15px

  +maxWidth1200()
    width: 100%
    padding: 20px;
  
  +maxWidth768()
    padding: 0 20px 20px

  > .card-widget:first-child
    margin-top: 0

    +maxWidth1200()
      margin-top: 20px
    +maxWidth768()
      margin-top: 0px

  .card-widget
    @extend .cardHover
    position: relative
    overflow: hidden
    margin-top: 20px
    padding: 20px 24px

    if hexo-config('aside.mobile') == false
      +maxWidth768()
        &:not(#card-toc)
          display: none
          
    .author-info__bottom-group
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;
      .author-info__name
        text-align: left;
        font-weight: 700;
        color: var(--anzhiyu-white);
        line-height: 1;
        margin-bottom: 5px;
        margin-top: 0
      .author-info__desc
        display: none

    .author-info__description
      display: none

    .banner-button-group .banner-button 
      padding: 20px 12px;
      color: var(--anzhiyu-white);
      display: flex;
      align-items: center;
      z-index: 1;
      transition: all 0.3s ease 0s;
      cursor: pointer;
      .anzhiyufont .anzhiyu-icon-arrow-circle-right 
        font-size: 1.3rem;
        margin-right: 10px;


    .card-info-social-icons
      margin: 0 10px 10px 10px;
      display: flex;
      justify-content: flex-start;
      flex-direction: row;
      flex-wrap: wrap;
      cursor: pointer;

      .social-icon
        margin: 0 0 0 10px
        color: var(--anzhiyu-fontcolor);
        font-size: 1.4em;
        cursor: pointer;
        display: flex;
        i, svg
          background: var(--anzhiyu-white-op);
          color: var(--anzhiyu-white);
          font-size: 1rem;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all .3s ease 0s;
          padding: 8px;
          border-radius: 32px;
          &:hover
            background: var(--anzhiyu-secondbg);
            transform: scale(1.1);
            color: var(--anzhiyu-main);
            box-shadow: none;

    #card-info-btn
      display: block
      margin-top: 14px
      background-color: var(--btn-bg)
      color: var(--btn-color)
      text-align: center
      line-height: 2.4

      &:hover
        background-color: var(--btn-hover-color)

      span
        padding-left: 10px

  .item-headline
    padding-bottom: 0;
    margin-left: 8px;
    font-size: 1em;
    font-weight: bold;
    display: flex;
    align-items: center;

    span
      margin-left: 6px

  .sticky_layout
    +minWidth1200()
      position: sticky
      position: -webkit-sticky
      top: 20px
      transition: top .3s

  .card-tag-cloud
    a
      display: inline-block
      padding: 0 4px

      &:hover
        color: $text-hover !important

  .aside-list
    & > span
      display: block
      margin-bottom: 10px
      text-align: center

    & > .aside-list-item
      display: flex
      align-items: center
      padding: 6px 0

      &:first-child
        padding-top: 0

      &:not(:last-child)
        border-bottom: 1px dashed #f5f5f5

      &:last-child
        padding-bottom: 0

      .thumbnail
        overflow: hidden
        width: w = 4.2em
        height: w

        & > img
          @extend .imgHover

      .content
        flex: 1
        padding-left: 10px
        word-break: break-all
        width: 4.2em;
        height: 4.2em;

        & > .name
          @extend .limit-more-line
          -webkit-line-clamp: 1

        & > time,
        & > .name
          display: block
          color: $theme-meta-color
          font-size: 85%

        & > .title,
        & > .comment
          @extend .limit-more-line
          color: var(--font-color)
          font-size: 95%
          line-height: 1.5
          -webkit-line-clamp: 2

          &:hover
            color: $text-hover

      &.no-cover
        min-height: 4.4em

  .card-archives ul.card-archive-list,
  .card-categories ul.card-category-list
    margin: 0
    padding: 0
    list-style: none
  .card-archives .item-headline
    display: none

  .card-archives ul.card-archive-list > .card-archive-list-item,
  .card-categories ul.card-category-list > .card-category-list-item
    a
      display: flex
      flex-direction: row
      padding: 3px 10px
      color: var(--font-color)
      transition: all .2s

      &:hover
        background-color: var(--text-bg-hover)

      span
        @extend .limit-one-line

        &:first-child
          flex: 1

  .card-categories
    .card-category-list
      &.child
        padding: 0 0 0 16px

      > .parent
        > a
          &.expand
            i
              transform: rotate(-90deg)

            & + .child
              display: block
          .card-category-list
            &-name
              width: 70% !important

            &-count
              width: calc(100% - 70% - 20px)
              text-align: right

          i
            float: right
            margin-right: -.5em
            padding: .5em
            transition: transform .3s
            transform: rotate(0)

        if hexo-config('aside.card_categories.expand') == false
          > .child
            display: none

  .card-webinfo
    .item-headline
      display: none
    .webinfo
      .webinfo-item
        display: flex
        align-items: center
        padding: 2px 10px 0
        justify-content: space-between;
        .webinfo-item-title 
          display: flex;
          i
            line-height: 2;
            margin-right: 6px;
            width: 16px;
            text-align: center;

        div
          &:first-child
            flex: 1
            padding-right: 20px

  // toc
  #card-toc
    +minWidth901()
      right: 0 !important
      max-height: calc(100vh - 100px);

    +maxWidth1200()
      position: fixed
      right: 55px
      bottom: 30px
      z-index: 100
      max-width: $toc-mobile-maxWidth
      max-height: calc(100% - 60px)
      width: $toc-mobile-width
      transition: transform .3s
      transform: scale(0)
      transform-origin: right bottom
      &.open
        transform: scale(1)

    .toc-percentage
      display: none
      float: right
      margin-top: -9px
      color: #a9a9a9
      font-style: italic
      font-size: 140%

    .toc-content
      overflow-y: scroll
      overflow-y: overlay
      margin: 0 -24px
      max-height: calc(100vh - 120px)
      width: calc(100% + 48px)

      +maxWidth1200()
        max-height: calc(100vh - 140px)

      & > *
        margin: 0 20px !important

        & > .toc-item > .toc-child
          margin-left: 10px
          padding-left: 10px
          // border-left: 1px solid var(--dark-grey)

      &:not(.is-expand)
        .toc-child
          display: none

          +maxWidth1200()
            display: block !important

        .toc-item
          &.active
            .toc-child
              display: block

      ol,
      li
        list-style: none

      > ol
        padding: 0 !important

      ol
        margin: 0
        padding-left: 18px

      .toc-link
        display: block
        margin: 4px 0
        padding: 1px 6px
        color: var(--toc-link-color)
        transition: all .2s ease-in-out

        &:hover
          color: var(--anzhiyu-lighttext)

        &.active
          background: $theme-toc-color
          color: $toc-active-color

  :only-child
    > .card-widget
      margin-top: 0

  .card-more-btn
    float: right
    color: inherit

    &:hover
      animation: more-btn-move 1s infinite

  .card-announcement
    .item-headline
      i
        color: #FF0000

.avatar-img
  width: 60px;
  height 60px;
  right: 10px;
  top: 11px;
  object-fit: cover;
  position: absolute;
  opacity: 1;
  transition: .3s;
  border: var(--style-border-avatar);

  img
    width: 100%
    height: 100%
    transition: filter 375ms ease-in .2s, transform .3s
    object-fit: cover

.site-data
  display: table
  width: 100%
  table-layout: fixed

  & > a
    display: table-cell

    div
      transition: all .3s

    &:hover
      div
        color: $theme-color !important

    .headline
      @extend .limit-one-line
      color: var(--font-color)

    .length-num
      margin-top: -.32em
      color: var(--text-highlight-color)
      font-size: 1.2em

@keyframes more-btn-move
  0%,
  100%
    transform: translateX(0)

  50%
    transform: translateX(3px)

@keyframes toc-open
  0%
    transform: scale(.7)

  100%
    transform: scale(1)

@keyframes toc-close
  0%
    transform: scale(1)

  100%
    transform: scale(.7)

+minWidth1200()
  html.hide-aside
    .layout
      justify-content: center

      > .aside-content
        display: none

      > div:first-child
        width: 80%
+maxWidth1200()
  .aside-content
    max-width: none !important;
    display: none
+maxWidth768()
  .aside-content
    display: block
.page
  .sticky_layout
    display: flex
    flex-direction: column

  if hexo-config('aside.card_recent_post.sort_order')
    .card-recent-post
      order: hexo-config('aside.card_recent_post.sort_order')

  if hexo-config('newest_comments.sort_order')
    #card-newest-comments
      order: hexo-config('newest_comments.sort_order')

  if hexo-config('aside.card_categories.sort_order')
    .card-categories
      order: hexo-config('aside.card_categories.sort_order')

  if hexo-config('aside.card_tags.sort_order')
    .card-tags
      order: hexo-config('aside.card_tags.sort_order')

  if hexo-config('aside.card_archives.sort_order')
    .card-archives
      order: hexo-config('aside.card_archives.sort_order')

  if hexo-config('aside.card_webinfo.sort_order')
    .card-webinfo
      order: hexo-config('aside.card_webinfo.sort_order')

if hexo-config('aside.enable')
  #aside-content
    >.card-widget.card-info
      background: var(--anzhiyu-card-bg);
      box-shadow: var(--anzhiyu-shadow-black);
      position: relative;
      padding: 0;
      +maxWidth768()
        display: none;
      > .card-content
        padding: 1rem 1.2rem;
        min-height: 320px;
        position: relative;
      &::before
        background: linear-gradient(-25deg,var(--anzhiyu-main),var(--anzhiyu-main-op-deep),var(--anzhiyu-main),var(--anzhiyu-main-op-deep));
        background-size: 400%;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        content: '';
        animation: gradient 15s ease infinite;
    .card-info
      &:hover 
        .author-info-avatar
          opacity: 1;
        .author-info__description
          opacity: 0;
        .author-status
          opacity: 0;
          transform: scale(0);

      #author-info__sayhi 
        text-align: left;
        color: var(--anzhiyu-white);
        background: var(--anzhiyu-white-op);
        font-size: 12px;
        margin: auto;
        padding: 2px 8px;
        border-radius: 12px;
        width: fit-content;
        cursor: pointer;
        transition: 0.3s;
        user-select: none
        &:hover
          background: var(--anzhiyu-card-bg);
          color: var(--anzhiyu-fontcolor);
          transform: scale(1.1);

      .banner-button-group .banner-button
        border-radius: 35px;
        background: var(--anzhiyu-white-op);
        &:hover
          background: var(--anzhiyu-white);
          color: var(--anzhiyu-black);

[data-theme="dark"] #aside-content > .card-info
  background: var(--anzhiyu-card-bg)

@media screen and (max-width: 992px)
  #aside-content > .card-info
    background-size: 100% 70%

```
> 这个并不是完美修改，仅是把按钮遮挡谨慎参考。
# 增加隐藏文章功能和每页显示文章数量
在{% label 'Git Bash' blue %}中卸载[hexo-generator-index](https://github.com/hexojs/hexo-generator-index)，安装[hexo-generator-index-custom](https://github.com/im0o/hexo-generator-index-custom)
```
npm uninstall hexo-generator-index
npm install hexo-generator-index-custom --save
```
在根目录{% label '_config' blue %}中修改{% label 'index_generator' blue %}参数，{% label 'per_page' blue %}设置每页显示数量
```
index_generator:
  path: ''
  per_page: 10     
  order_by: -date
  pagination_dir: page
```
在文章开头添加{% label 'aliicon.css' blue %}hide隐藏文章
```
---
hide: true   //隐藏文章
---
```