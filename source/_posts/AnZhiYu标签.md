---
title: AnZhiYu
date: 2025-01-31 18:16:57
tags: [AnZhiYu,tag,Front-matter]
categories:
  - 博客
cover: /img/posts/anzhiyu/anzhiyutag.webp
top_img: /img/posts/anzhiyu/anzhiyutag.webp
id: anzhiyutag
--- 
# Front-matter
| 参数 | 作用 | 
| :---| :---: |
| title | 【必需】页面标题 | 
| date | 【必需】页面创建日期 | 
| updated | 【可选】文章更新日期 | 
| tags | 【可选】文章标签 | 
| categories | 【可选】文章分类 | 
| description | 【可选】文章描述 | 
| top_img | 【可选】文章顶部图片 | 
| aside | 隐藏侧边栏 | 
| hide | 隐藏文章 | 
| indexing | 是否能被搜索栏搜索到  | 
| cover | 【可选】文章缩略图(如果没有设置 top_img,文章页顶部将显示缩略图，可设为 false/图片地址/留空) | 
| id | 自定义文章URL | 
| comments | 【可选】显示文章评论模块(默认 true) | 
| toc | 【可选】显示文章导航(默认为设置enable) | 
| aside | 【可选】显示侧边栏 (默认 true) | 
| swiper_index | 【可选】首页轮播图配置 index 索引，数字越小越靠前 | 
| top_group_index | 【可选】首页右侧卡片组配置, 数字越小越靠前 | 
| main_color | 【可选】文章主色，必须是16进制颜色且有6位，不可缩减，例如#ffffff 不可写成#fff | 
| copyright | 【可选】显示文章版权模块(默认为设置中 post_copyright 的 enable 配置) | 
| copyright_author | 【可选】文章版权模块的文章作者 | 
| copyright_author_href | 【可选】文章版权模块的文章作者链接 | 
| copyright_url | 【可选】文章版权模块的文章链接链接 | 
| copyright_info | 【可选】文章版权模块的版权声明文字 | 
| sitemap | 是否生成站点地图 | 


{% note blue 'anzhiyufont anzhiyu-icon-bullhorn' simple %}{% label AnZhiYu主题 %}中大部分标签移植于[店长](https://akilar.top/)的[hexo-butterfly-tag-plugins-plus](https://www.npmjs.com/package/hexo-butterfly-tag-plugins-plus)，转载请注明来自[安知鱼](https://blog.anheyu.com/posts/d50a.html){% endnote %}

# 段落文本 p
{% tabs test4 %}
<!-- tab 样式预览 -->
- 彩色文字
  在一段话中方便插入各种颜色的标签，包括：
  {% p red, 红色 %}
  {% p yellow, 黄色 %}
  {% p green, 绿色 %}
  {% p cyan, 青色 %}
  {% p blue, 蓝色 %}
  {% p gray, 灰色 %}
- 超大号文字
  文档「开始」页面中的标题部分就是超大号文字。
  {% p center logo large, Volantis %}
  {% p center small, A Wonderful Theme for Hexo %}
<!-- endtab -->
<!-- tab 示例源码 -->
```MARKDOWN
- 彩色文字
  在一段话中方便插入各种颜色的标签，包括：
  {% p red, 红色 %}
  {% p yellow, 黄色 %}
  {% p green, 绿色 %}
  {% p cyan, 青色 %}
  {% p blue, 蓝色 %}
  {% p gray, 灰色 %}
- 超大号文字
  {% p center logo large, Volantis %}
  {% p center small, A Wonderful Theme for Hexo %}
```
<!-- endtab -->
<!-- tab 标签语法 -->
```MARKDOWN
{% p 样式参数(参数以空格划分), 文本内容 %}
```
<!-- endtab -->
<!-- tab 参数配置 -->
1. 字体: logo, code
2. 颜色: red,yellow,green,cyan,blue,gray
3. 大小: small, h4, h3, h2, h1, large, huge, ultra
4. 对齐方向: left, center, right
<!-- endtab -->
{% endtabs %}

# 行内文本样式 text
{% tabs test4 %}
<!-- tab 样式预览 -->
1. 带 {% u 下划线 %} 的文本
2. 带 {% emp 着重号 %} 的文本
3. 带 {% wavy 波浪线 %} 的文本
4. 带 {% del 删除线 %} 的文本
5. 键盘样式的文本 {% kbd command %} + {% kbd D %}
6. 密码样式的文本：{% psw 这里没有验证码 %}
<!-- endtab -->
<!-- tab 示例源码 -->
```MARKDOWN
1. 带 {% u 下划线 %} 的文本
2. 带 {% emp 着重号 %} 的文本
3. 带 {% wavy 波浪线 %} 的文本
4. 带 {% del 删除线 %} 的文本
5. 键盘样式的文本 {% kbd command %} + {% kbd D %}
6. 密码样式的文本：{% psw 这里没有验证码 %}
```
<!-- endtab -->
<!-- tab 标签语法 -->
```MARKDOWN
{% u 文本内容 %}
{% emp 文本内容 %}
{% wavy 文本内容 %}
{% del 文本内容 %}
{% kbd 文本内容 %}
{% psw 文本内容 %}
```
<!-- endtab -->

{% endtabs %}

# 分栏 tab
{% tabs test4 %}
<!-- tab 样式预览 -->
{% note primary simple %}Demo 1 - 预设选择第一个【默认】{% endnote %}
{% tabs test1 %}

<!-- tab -->

This is Tab 1

<!-- endtab -->

<!-- tab -->

This is Tab 2

<!-- endtab -->

<!-- tab -->

This is Tab 3

<!-- endtab -->

{% endtabs %}
{% note primary simple %}Demo 2 - 预设选择 tabs{% endnote %}
{% tabs test2, 3 %}

<!-- tab -->

This is Tab 1

<!-- endtab -->

<!-- tab -->

This is Tab 2

<!-- endtab -->

<!-- tab -->

This is Tab 3

<!-- endtab -->

{% endtabs %}
{% note primary simple %}Demo 3 - 没有预设值】{% endnote %}
{% tabs test3, -1 %}

<!-- tab -->

This is Tab 1

<!-- endtab -->

<!-- tab -->

This is Tab 2

<!-- endtab -->

<!-- tab -->

This is Tab 3

<!-- endtab -->

{% endtabs %}
{% note primary simple %}Demo 4 - 自定义 Tab 名 + 只有 icon + icon 和 Tab 名{% endnote %}
{% tabs test4 %}

<!-- tab 第一个Tab -->

tab 名字为第一个 Tab

<!-- endtab -->

<!-- tab @fab fa-apple-pay -->

只有图标 没有 Tab 名字

<!-- endtab -->

<!-- tab 炸弹@fas fa-bomb -->

名字+icon

<!-- endtab -->

{% endtabs %}
<!-- endtab -->
<!-- tab 示例源码 -->
{% note primary simple %}Demo 1 - 预设选择第一个【默认】{% endnote %}
```MARKDOWN
{% tabs test1 %}

<!-- tab -->

This is Tab 1

<!-- endtab -->

<!-- tab -->

This is Tab 2
<!-- endtab -->

<!-- tab -->

This is Tab 3

<!-- endtab -->

{% endtabs %}
```
{% note primary simple %}Demo 2 - 预设选择 tabs{% endnote %}
```MARKDOWN
{% tabs test2, 3 %}

<!-- tab -->

This is Tab 1

<!-- endtab -->

<!-- tab -->

This is Tab 2

<!-- endtab -->

<!-- tab -->

This is Tab 3

<!-- endtab -->

{% endtabs %}
```
{% note primary simple %}Demo 3 - 没有预设值{% endnote %}
```MARKDOWN
{% tabs test3, -1 %}

<!-- tab -->

This is Tab 1

<!-- endtab -->

<!-- tab -->

This is Tab 2.

<!-- endtab -->

<!-- tab -->

This is Tab 3.

<!-- endtab -->

{% endtabs %}
```
{% note primary simple %}Demo 4 - 自定义 Tab 名 + 只有 icon + icon 和 Tab 名{% endnote %}
```MARKDOWN
{% tabs test4 %}

<!-- tab 第一个Tab -->

tab 名字为第一个 Tab

<!-- endtab -->

<!-- tab @fab fa-apple-pay -->

只有图标 没有 Tab 名字

<!-- endtab -->

<!-- tab 炸弹@fas fa-bomb -->

名字+icon

<!-- endtab -->

{% endtabs %}
```
<!-- endtab -->
<!-- tab 标签语法 -->
```MARKDOWN
{% tabs Unique name, [index] %}

<!-- tab [Tab caption] [@icon] -->

Any content (support inline tags too).

<!-- endtab -->

{% endtabs %}
```
<!-- endtab -->

<!-- tab 参数配置 -->
1. Unique name :
选项卡块标签的唯一名称，不带逗号。
将在#id 中用作每个标签及其索引号的前缀。
如果名称中包含空格，则对于生成#id，所有空格将由破折号代替。
仅当前帖子/页面的 URL 必须是唯一的！
2. [index]:
活动选项卡的索引号。
如果未指定，将选择第一个标签（1）。
如果 index 为-1，则不会选择任何选项卡。
可选参数。
3. [Tab caption]:
当前选项卡的标题。
如果未指定标题，则带有制表符索引后缀的唯一名称将用作制表符的标题。
如果未指定标题，但指定了图标，则标题将为空。
可选参数。
4. [@icon]: - FontAwesome 图标名称（全名，看起来像“ fas fa-font”） - 可以指定带空格或不带空格； - 例如’Tab caption @icon’ 和 ‘Tab caption@icon’. - 可选参数。
<!-- endtab -->
{% endtabs %}

# 按钮 btns
{% tabs test4 %}
<!-- tab 样式预览 -->
1. 如果需要显示类似「团队成员」之类的一组含有头像的链接

{% btns circle grid5 %}
{% cell xaoxuu, https://xaoxuu.com, https://bu.dusays.com/2023/06/01/64787e6a5816d.png %}
{% endbtns %}
2. 含有图标的按钮

{% btns rounded grid5 %}
{% cell 下载源码, /, anzhiyufont anzhiyu-icon-bolt %}
{% cell 查看文档, /, anzhiyufont anzhiyu-icon-book %}
{% endbtns %}
3. 圆形图标 + 标题 + 描述 + 图片 + 网格 5 列 + 居中

{% btns circle center grid5 %}
<a href='https://apps.apple.com/cn/app/heart-mate-pro-hrm-utility/id1463348922?ls=1' class="no-text-decoration">
<i class='anzhiyufont anzhiyu-icon-heartbeat'></i>
<b>心率管家</b>
{% p red, 专业版 %}
<img src='https://bu.dusays.com/2023/06/01/64787e2a1347c.png'>
</a>
<a href='https://apps.apple.com/cn/app/heart-mate-lite-hrm-utility/id1475747930?ls=1' class="no-text-decoration">
<i class='anzhiyufont anzhiyu-icon-heartbeat'></i>
<b>心率管家</b>
{% p green, 免费版 %}
<img src='https://bu.dusays.com/2023/06/01/64787e515e261.png'>
</a>
{% endbtns %}

<!-- endtab -->

<!-- tab 示例源码 -->
1. 如果需要显示类似「团队成员」之类的一组含有头像的链接：
```MARKDOWN
{% btns circle grid5 %}
{% cell xaoxuu, https://xaoxuu.com, https://bu.dusays.com/2023/06/01/64787e6a5816d.png %}
{% endbtns %}
```
2. 含有图标的按钮：
```MARKDOWN
{% btns rounded grid5 %}
{% cell 下载源码, /, anzhiyufont anzhiyu-icon-bolt %}
{% cell 查看文档, /, anzhiyufont anzhiyu-icon-book %}
{% endbtns %}
```
3. 圆形图标 + 标题 + 描述 + 图片 + 网格 5 列 + 居中
```MARKDOWN
{% btns circle center grid5 %}
<a href='https://apps.apple.com/cn/app/heart-mate-pro-hrm-utility/id1463348922?ls=1' class="no-text-decoration">
<i class='anzhiyufont anzhiyu-icon-heartbeat'></i>
<b>心率管家</b>
{% p red, 专业版 %}
<img src='https://bu.dusays.com/2023/06/01/64787e2a1347c.png'>
</a>
<a href='https://apps.apple.com/cn/app/heart-mate-lite-hrm-utility/id1475747930?ls=1' class="no-text-decoration">
<i class='anzhiyufont anzhiyu-icon-heartbeat'></i>
<b>心率管家</b>
{% p green, 免费版 %}
<img src='https://bu.dusays.com/2023/06/01/64787e515e261.png'>
</a>
{% endbtns %}
```
<!-- endtab -->

<!-- tab 标签语法 -->
```MARKDOWN
{% btns 样式参数 %} 
{% cell 标题, 链接, 图片或者图标 %}
{% cell 标题, 链接, 图片或者图标 %}
{% endbtns %}
```
<!-- endtab -->

<!-- tab 参数配置 -->
1. 圆角样式：rounded, circle
2. 增加文字样式：可以在容器内增加 <b>标题</b> 和 <p>描述文字</p>
3. 布局方式：
默认为自动宽度，适合视野内只有一两个的情况。

|  参数   | 含义  |
|  ----  | ----  |
| wide  | 宽一点的按钮 |
| fill  | 填充布局，自动铺满至少一行，多了会换行 |
| center  | 居中，按钮之间是固定间距 |
| around  | 居中分散 |
| grid2  | 等宽最多 2 列，屏幕变窄会适当减少列数 |
| grid3  | 等宽最多 3 列，屏幕变窄会适当减少列数 |
| grid4  | 等宽最多 4 列，屏幕变窄会适当减少列数 |
| grid5  | 	等宽最多 5 列，屏幕变窄会适当减少列数 |
<!-- endtab -->
{% endtabs %}

# 按钮 btn
{% tabs test4 %}
<!-- tab 样式预览 -->
1.  不同样式
{% btn 'https://blog.anheyu.com/',AnZhiYu %}
{% btn 'https://blog.anheyu.com/',AnZhiYu,anzhiyufont anzhiyu-icon-circle-arrow-right %}
{% btn 'https://blog.anheyu.com/',AnZhiYu,,outline %}
{% btn 'https://blog.anheyu.com/',AnZhiYu,anzhiyufont anzhiyu-icon-circle-arrow-right,outline %}
{% btn 'https://blog.anheyu.com/',AnZhiYu,anzhiyufont anzhiyu-icon-circle-arrow-right,larger %}
2. 调整位置/大小
{% btn 'https://blog.anheyu.com/',AnZhiYu,anzhiyufont anzhiyu-icon-circle-arrow-right,block %}
{% btn 'https://blog.anheyu.com/',AnZhiYu,anzhiyufont anzhiyu-icon-circle-arrow-right,block center larger %}
{% btn 'https://blog.anheyu.com/',AnZhiYu,anzhiyufont anzhiyu-icon-circle-arrow-right,block right outline larger %}
3. 按钮颜色

<span>
{% btn 'https://blog.anheyu.com/',AnZhiYu,anzhiyufont anzhiyu-icon-circle-arrow-right,larger %}
{% btn 'https://blog.anheyu.com/',AnZhiYu,anzhiyufont anzhiyu-icon-circle-arrow-right,blue larger %}
{% btn 'https://blog.anheyu.com/',AnZhiYu,anzhiyufont anzhiyu-icon-circle-arrow-right,pink larger %}
{% btn 'https://blog.anheyu.com/',AnZhiYu,anzhiyufont anzhiyu-icon-circle-arrow-right,red larger %}
{% btn 'https://blog.anheyu.com/',AnZhiYu,anzhiyufont anzhiyu-icon-circle-arrow-right,purple larger %}
{% btn 'https://blog.anheyu.com/',AnZhiYu,anzhiyufont anzhiyu-icon-circle-arrow-right,orange larger %}
{% btn 'https://blog.anheyu.com/',AnZhiYu,anzhiyufont anzhiyu-icon-circle-arrow-right,green larger %}
</span>

4. 按钮位置
<div class="btn-center">
{% btn 'https://blog.anheyu.com/',AnZhiYu,anzhiyufont anzhiyu-icon-circle-arrow-right,outline larger %}
</div>

<!-- endtab -->
<!-- tab 示例源码 -->

1. 不同样式
```MARKDOWN
{% btn 'https://blog.anheyu.com/',AnZhiYu %}
{% btn 'https://blog.anheyu.com/',AnZhiYu,anzhiyufont anzhiyu-icon-circle-arrow-right %}
{% btn 'https://blog.anheyu.com/',AnZhiYu,,outline %}
{% btn 'https://blog.anheyu.com/',AnZhiYu,anzhiyufont anzhiyu-icon-circle-arrow-right,outline %}
{% btn 'https://blog.anheyu.com/',AnZhiYu,anzhiyufont anzhiyu-icon-circle-arrow-right,larger %}
```

2. 调整位置/大小
```MARKDOWN
{% btn 'https://blog.anheyu.com/',AnZhiYu,anzhiyufont anzhiyu-icon-circle-arrow-right,block %}
{% btn 'https://blog.anheyu.com/',AnZhiYu,anzhiyufont anzhiyu-icon-circle-arrow-right,block center larger %}
{% btn 'https://blog.anheyu.com/',AnZhiYu,anzhiyufont anzhiyu-icon-circle-arrow-right,block right outline larger %}
```

3.  按钮颜色
```MARKDOWN
<span>
{% btn 'https://blog.anheyu.com/',AnZhiYu,anzhiyufont anzhiyu-icon-circle-arrow-right,larger %}
{% btn 'https://blog.anheyu.com/',AnZhiYu,anzhiyufont anzhiyu-icon-circle-arrow-right,blue larger %}
{% btn 'https://blog.anheyu.com/',AnZhiYu,anzhiyufont anzhiyu-icon-circle-arrow-right,pink larger %}
{% btn 'https://blog.anheyu.com/',AnZhiYu,anzhiyufont anzhiyu-icon-circle-arrow-right,red larger %}
{% btn 'https://blog.anheyu.com/',AnZhiYu,anzhiyufont anzhiyu-icon-circle-arrow-right,purple larger %}
{% btn 'https://blog.anheyu.com/',AnZhiYu,anzhiyufont anzhiyu-icon-circle-arrow-right,orange larger %}
{% btn 'https://blog.anheyu.com/',AnZhiYu,anzhiyufont anzhiyu-icon-circle-arrow-right,green larger %}
</span>
```

4. 按钮位置
```MARKDOWN
<div class="btn-center">
{% btn 'https://blog.anheyu.com/',AnZhiYu,anzhiyufont anzhiyu-icon-circle-arrow-right,outline larger %}
</div>
```
<!-- endtab -->
<!-- tab 标签语法 -->
```MARKDOWN
{% btn [url],[text],[icon],[color] [style] [layout] [position] [size] %}

[url] : 链接
[text] : 按钮文字
[icon] : [可选] 图标
[color] : [可选] 按钮背景顔色(默认 style 时）
按钮字体和边框顔色(outline 时)
default/blue/pink/red/purple/orange/green
[style] : [可选] 按钮样式 默认实心
outline/留空
[layout] : [可选] 按钮佈局 默认为 line
block/留空
[position] : [可选] 按钮位置 前提是设置了 layout 为 block 默认为左边
center/right/留空
[size] : [可选] 按钮大小
larger/留空
```
<!-- endtab -->

<!-- tab 参数配置 -->
|  参数   | 含义  |
|  ----  | ----  |
| url  | 跳转链接 |
| text  | 按钮文字 |
| icon  | [可选] 图标，如果开启了fontawesome可以使用 fontawesome 的图标，否则只能使用默内置图标 |
| color  | [可选] 按钮背景顔色(默认 style 时）按钮字体和边框顔色(outline 时)default/blue/pink/red/purple/orange/green |
| style  | [可选] 按钮样式 默认实心数，outline/留空 |
| layout  | [可选] 按钮佈局 默认为 line block/留空 |
| position  | [可选] 按钮位置 前提是设置了 layout 为 block 默认为左边 center/right/留空数 |
| size  | [可选] 按钮大小 larger/留空 |
<!-- endtab -->
{% endtabs %}

# 单张图片 image
{% tabs test4 %}
<!-- tab 样式预览 -->
1. 添加描述：
{% image https://bu.dusays.com/2023/06/01/6478937d7de6f.webp, alt=每天下课回宿舍的路，没有什么故事。 %}
2. 指定宽度：
{% image https://bu.dusays.com/2023/06/01/6478937d7de6f.webp, width=400px %}
3. 指定宽度并添加描述：
{% image https://bu.dusays.com/2023/06/01/6478937d7de6f.webp, width=400px, alt=每天下课回宿舍的路，没有什么故事。 %}
4. 设置占位背景色：
{% image https://bu.dusays.com/2023/06/01/6478937d7de6f.webp, width=400px, bg=#1D0C04, alt=优化不同宽度浏览的观感 %}
<!-- endtab -->
<!-- tab 示例源码 -->
1. 添加描述：
```MARKDOWN
{% image https://bu.dusays.com/2023/06/01/6478937d7de6f.webp, alt=每天下课回宿舍的路，没有什么故事。 %}
```
2. 指定宽度：
```MARKDOWN
{% image https://bu.dusays.com/2023/06/01/6478937d7de6f.webp, width=400px %}
```
3. 指定宽度并添加描述：
```MARKDOWN
{% image https://bu.dusays.com/2023/06/01/6478937d7de6f.webp, width=400px, alt=每天下课回宿舍的路，没有什么故事。 %}
```
4. 设置占位背景色：
```MARKDOWN
{% image https://bu.dusays.com/2023/06/01/6478937d7de6f.webp, width=400px, bg=#1D0C04, alt=优化不同宽度浏览的观感 %}
```
<!-- endtab -->
<!-- tab 标签语法 -->
```MARKDOWN
{% image 链接, width=宽度（可选）, height=高度（可选）, alt=描述（可选）, bg=占位颜色（可选） %}
```
<!-- endtab -->

<!-- tab 参数配置 -->
1. 图片宽度高度：width=300px, height=32px
2. 图片描述：alt=图片描述（butterfly 需要在主题配置文件中开启图片描述）
3. 占位背景色：bg=#f2f2f2
<!-- endtab -->
{% endtabs %}

# 行内图片
{% tabs test4 %}
<!-- tab 样式预览 -->
1. inlineImg
我觉得很漂亮 {% inlineImg https://i.loli.net/2021/03/19/5M4jUB3ynq7ePgw.png 150px %}
2. inlineimage
这是 {% inlineimage https://bu.dusays.com/2023/06/01/647895232e5d5.webp %} 一段话。
这又是 {% inlineimage https://bu.dusays.com/2022/05/19/6285328a83ca7.gif, height=40px %} 一段话。
<!-- endtab -->
<!-- tab 示例源码 -->
1. inlineImg
```MARKDOWN
我觉得很漂亮 {% inlineImg https://i.loli.net/2021/03/19/5M4jUB3ynq7ePgw.png 150px %}
```
2. inlineimage
```MARKDOWN
这是 {% inlineimage https://bu.dusays.com/2023/06/01/647895232e5d5.webp %} 一段话。
这又是 {% inlineimage https://bu.dusays.com/2022/05/19/6285328a83ca7.gif, height=40px %} 一段话。
```
<!-- endtab -->
<!-- tab 标签语法 -->
1. inlineImg
```MARKDOWN
{% inlineImg [src] [height] %}

[src] : 图片链接
[height] ： 图片高度限制【可选】
```
2. inlineimage
```MARKDOWN
{% inlineimage 图片链接, height=高度（可选） %}
```
<!-- endtab -->

<!-- tab 参数配置 -->
1. inlineImg
|  参数   | 含义  |
|  ----  | ----  |
| src  | 图片链接 |
| height  | 图片高度限制【可选】 |
1. inlineImg
|  参数   | 含义  |
|  ----  | ----  |
| height  | 高度（可选） |
<!-- endtab -->
{% endtabs %}

# label 标签
{% tabs test4 %}
<!-- tab 样式预览 -->
臣亮言：{% label 先帝 %}创业未半，而{% label 中道崩殂 blue %}。今天下三分，{% label 益州疲敝 pink %}，此诚{% label 危急存亡之秋 red %}也！然侍衞之臣，不懈于内；{% label 忠志之士 purple %}，忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气；不宜妄自菲薄，引喻失义，以塞忠谏之路也。
宫中、府中，俱为一体；陟罚臧否，不宜异同。若有{% label 作奸 orange %}、{% label 犯科 green %}，及为忠善者，宜付有司，论其刑赏，以昭陛下平明之治；不宜偏私，使内外异法也。
<!-- endtab -->
<!-- tab 示例源码 -->
```MARKDOWN
臣亮言：{% label 先帝 %}创业未半，而{% label 中道崩殂 blue %}。今天下三分，{% label 益州疲敝 pink %}，此诚{% label 危急存亡之秋 red %}也！然侍衞之臣，不懈于内；{% label 忠志之士 purple %}，忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气；不宜妄自菲薄，引喻失义，以塞忠谏之路也。
宫中、府中，俱为一体；陟罚臧否，不宜异同。若有{% label 作奸 orange %}、{% label 犯科 green %}，及为忠善者，宜付有司，论其刑赏，以昭陛下平明之治；不宜偏私，使内外异法也。
```
<!-- endtab -->
<!-- tab 标签语法 -->
```MARKDOWN
{% label text color %}
```
<!-- endtab -->

<!-- tab 参数配置 -->
|  参数   | 含义  |
|  ----  | ----  |
| text  | 文字 |
| color  | 【可选】背景颜色，默认为 default，default/blue/pink/red/purple/orange/green |
<!-- endtab -->
{% endtabs %}

# timeline
{% tabs test4 %}
<!-- tab 样式预览 -->
1. 默认颜色
{% timeline 2022 %}
<!-- timeline 01-02 -->

这是测试页面
<!-- endtimeline -->

{% endtimeline %}
2. 可其他颜色
{% timeline 2022,blue %}
<!-- timeline 01-02 -->

这是测试页面
<!-- endtimeline -->

{% endtimeline %}
<!-- endtab -->
<!-- tab 示例源码 -->
1. 默认颜色
```MARKDOWN
{% timeline 2022 %}
<!-- timeline 01-02 -->

这是测试页面
<!-- endtimeline -->

{% endtimeline %}
```
2. 可其他颜色
```MARKDOWN
{% timeline 2022,blue %}
<!-- timeline 01-02 -->

这是测试页面
<!-- endtimeline -->

{% endtimeline %}
```
<!-- endtab -->
<!-- tab 标签语法 -->
```MARKDOWN
{% timeline title,color %}

<!-- timeline title -->

内容

<!-- endtimeline -->
<!-- timeline title -->

内容

<!-- endtimeline -->

{% endtimeline %}
```
<!-- endtab -->

<!-- tab 参数配置 -->
|  参数   | 含义  |
|  ----  | ----  |
| title  | 标题/时间线 |
| color  | timeline 颜色，default(留空) / blue / pink / red / purple / orange / greenn |
<!-- endtab -->
{% endtabs %}

# flink 友链标签
{% tabs test4 %}
<!-- tab 样式预览 -->

{% flink %}
- class_name: 推荐博客
  flink_style: flexcard
  link_list:
    - name: 安知鱼
      link: https://blog.anheyu.com/
      avatar: https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg
      descr: 生活明朗，万物可爱
      siteshot: https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg

- class_name: 网站
  class_desc: 值得推荐的网站
  flink_style: anzhiyu
  link_list:
    - name: 阿呆的博客
      link: https://www.adaiblog.github.io
      avatar: https://q2.qlogo.cn/headimg_dl?dst_uin=1432231192&spec=640
      descr: 博客
{% endflink %}
<!-- endtab -->
<!-- tab 示例源码 -->
```MARKDOWN
{% flink %}
- class_name: 技术大佬
  flink_style: flexcard
  link_list:
    - name: 安知鱼
      link: https://blog.anheyu.com/
      avatar: https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg
      descr: 生活明朗，万物可爱
      siteshot: https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg

- class_name: 网站
  class_desc: 值得推荐的网站
  flink_style: anzhiyu
  link_list:
    - name: 阿呆的博客
      link: https://www.adaiblog.github.io
      avatar: https://q2.qlogo.cn/headimg_dl?dst_uin=1432231192&spec=640
      descr: 博客
{% endflink %}
```
<!-- endtab -->
<!-- tab 标签语法 -->
```MARKDOWN
{% flink %}
xxxxxx
{% endflink %}
```
<!-- endtab -->

<!-- tab 参数配置 -->
|  参数   | 含义  |
|  ----  | ----  |
| class_name  | h2标题 |
| flink_style  | 【可选】友链样式，默认为 flexcard，flexcard/anzhiyu |
| link_list  | 【可选】友链样式，默认为 flexcard，flexcard/anzhiyu |
<!-- endtab -->
{% endtabs %}

# mermaid 图
{% note blue 'anzhiyufont anzhiyu-icon-bullhorn' simple %}使用mermaid标签可以绘制Flowchart（流程图）、Sequence diagram（时序图 ）、Class Diagram（类别图）、State Diagram（状态图）、Gantt（甘特图）和Pie Chart（圆形图），具体可以查看[mermaid文档](https://mermaid.js.org/){% endnote %}
修改{% label '主题配置文件' blue %}
```YML
# mermaid
# see https://github.com/mermaid-js/mermaid
mermaid:
  enable: true
  # built-in themes: default/forest/dark/neutral
  theme:
    light: default
    dark: dark
```
{% tabs test4 %}
<!-- tab 样式预览 -->
{% mermaid %}
pie
    title Key elements in Product X
    "Calcium" : 42.96
    "Potassium" : 50.05
    "Magnesium" : 10.01
    "Iron" :  5
{% endmermaid %}
<!-- endtab -->
<!-- tab 示例源码 -->
```MARKDOWN
{% mermaid %}
pie
    title Key elements in Product X
    "Calcium" : 42.96
    "Potassium" : 50.05
    "Magnesium" : 10.01
    "Iron" :  5
{% endmermaid %}
```
<!-- endtab -->
<!-- tab 标签语法 -->
```MARKDOWN
{% mermaid %}
内容
{% endmermaid %}
```
<!-- endtab -->

{% endtabs %}

# 复选列表 checkbox
{% tabs test4 %}
<!-- tab 样式预览 -->
{% checkbox 纯文本测试 %}
{% checkbox checked, 支持简单的 [markdown](https://guides.github.com/features/mastering-markdown/) 语法 %}
{% checkbox red, 支持自定义颜色 %}
{% checkbox green checked, 绿色 + 默认选中 %}
{% checkbox yellow checked, 黄色 + 默认选中 %}
{% checkbox cyan checked, 青色 + 默认选中 %}
{% checkbox blue checked, 蓝色 + 默认选中 %}
{% checkbox plus green checked, 增加 %}
{% checkbox minus yellow checked, 减少 %}
{% checkbox times red checked, 叉 %}
<!-- endtab -->
<!-- tab 示例源码 -->
```MARKDOWN
{% checkbox 纯文本测试 %}
{% checkbox checked, 支持简单的 [markdown](https://guides.github.com/features/mastering-markdown/) 语法 %}
{% checkbox red, 支持自定义颜色 %}
{% checkbox green checked, 绿色 + 默认选中 %}
{% checkbox yellow checked, 黄色 + 默认选中 %}
{% checkbox cyan checked, 青色 + 默认选中 %}
{% checkbox blue checked, 蓝色 + 默认选中 %}
{% checkbox plus green checked, 增加 %}
{% checkbox minus yellow checked, 减少 %}
{% checkbox times red checked, 叉 %}
```
<!-- endtab -->
<!-- tab 标签语法 -->
```MARKDOWN
{% checkbox 样式参数（可选）, 文本（支持简单md） %}
```
<!-- endtab -->

<!-- tab 参数配置 -->
1. 样式: plus, minus, times
2. 颜色: red,yellow,green,cyan,blue,gray
3. 选中状态: checked
<!-- endtab -->
{% endtabs %}

# 折叠框 folding
{% tabs test4 %}
<!-- tab 样式预览 -->
{% folding 查看图片测试 %}

![](https://bu.dusays.com/2023/06/01/64788d71c832d.webp)

{% endfolding %}

{% folding cyan open, 查看默认打开的折叠框 %}

这是一个默认打开的折叠框。

{% endfolding %}

{% folding green, 查看代码测试 %}
假装这里有代码块（代码块没法嵌套代码块）
{% endfolding %}

{% folding yellow, 查看列表测试 %}

- haha
- hehe

{% endfolding %}

{% folding red, 查看嵌套测试 %}

{% folding, 查看嵌套测试2 %}

{% folding 查看嵌套测试3 %}

hahaha <span><img src='https://bu.dusays.com/2023/06/01/64788cd5a356b.png' style='height:24px'></span>

{% endfolding %}

{% endfolding %}

{% endfolding %}
<!-- endtab -->
<!-- tab 示例源码 -->
```MARKDOWN
{% folding 查看图片测试 %}

![](https://bu.dusays.com/2023/06/01/64788d71c832d.webp)

{% endfolding %}

{% folding cyan open, 查看默认打开的折叠框 %}

这是一个默认打开的折叠框。

{% endfolding %}

{% folding green, 查看代码测试 %}
假装这里有代码块（代码块没法嵌套代码块）
{% endfolding %}

{% folding yellow, 查看列表测试 %}

- haha
- hehe

{% endfolding %}

{% folding red, 查看嵌套测试 %}

{% folding, 查看嵌套测试2 %}

{% folding 查看嵌套测试3 %}

hahaha <span><img src='https://bu.dusays.com/2023/06/01/64788cd5a356b.png' style='height:24px'></span>

{% endfolding %}

{% endfolding %}

{% endfolding %}
```
<!-- endtab -->
<!-- tab 标签语法 -->
```MARKDOWN
{% folding 参数（可选）, 标题 %}
![](https://bu.dusays.com/2023/06/01/64788d71c832d.webp)
{% endfolding %}
```
<!-- endtab -->

<!-- tab 参数配置 -->
1. 颜色：blue, cyan, green, yellow, red
2. 状态：状态填写 open 代表默认打开。
<!-- endtab -->
{% endtabs %}

# 折叠框 folding
{% tabs test4 %}
<!-- tab 样式预览 -->
{% folding 折叠框 %}
内容
{% endfolding %}

{% folding cyan open, 查看默认打开的折叠框 %}

这是一个默认打开的折叠框。

{% endfolding %}

{% folding red, 查看嵌套测试 %}

{% folding, 查看嵌套测试2 %}

{% folding 查看嵌套测试3 %}
内容

{% endfolding %}

{% endfolding %}

{% endfolding %}
<!-- endtab -->
<!-- tab 示例源码 -->
```MARKDOWN
{% folding 折叠框 %}
内容
{% endfolding %}

{% folding cyan open, 查看默认打开的折叠框 %}

这是一个默认打开的折叠框。

{% endfolding %}

{% folding red, 查看嵌套测试 %}

{% folding, 查看嵌套测试2 %}

{% folding 查看嵌套测试3 %}
内容

{% endfolding %}

{% endfolding %}

{% endfolding %}
```
<!-- endtab -->
<!-- tab 标签语法 -->
```MARKDOWN
{% folding 参数（可选）, 标题 %}
![](https://bu.dusays.com/2023/06/01/64788d71c832d.webp)
{% endfolding %}
```
<!-- endtab -->

<!-- tab 参数配置 -->
1. 颜色：blue, cyan, green, yellow, red
2. 状态：状态填写 open 代表默认打开。
<!-- endtab -->
{% endtabs %}



# Gallery 相册图库
{% tabs test4 %}
<!-- tab 样式预览 -->
1. gallerygroup 相册图库

<div class="gallery-group-main">
 {% galleryGroup MC 在Rikkaの六花服务器里留下的足迹 '/wordSc
 enery/' https://bu.dusays.com/2023/06/01/64788f24d05bd.webp %}
 {% galleryGroup Gundam 哦咧哇gundam哒！ '/thousand/' https://bu.dusays.com/2023/06/01/64788f456fc3d.webp %}
 {% galleryGroup I-am-Akilar 某种意义上也算自拍吧 '/wallpaper/' https://bu.dusays.com/2023/06/01/64788f83e5fa1.webp %}
</div>

2. gallery 相册

{% gallery true,,2 %}
![](https://bu.dusays.com/2023/06/01/647896b15759c.jpg)
![](https://bu.dusays.com/2023/06/01/647896cabde59.jpg)
![](https://bu.dusays.com/2023/06/01/647896eb0f3ea.jpg)
{% endgallery %} 
<!-- endtab -->
<!-- tab 示例源码 -->
{% note blue 'anzhiyufont anzhiyu-icon-bullhorn' simple %}
对于很多同学提问的gallerygroup和gallery相册页的链接问题。这里说下我个人的使用习惯。
一般使用相册图库的话，可以在导航栏加一个 gallery 的 page(使用指令hexo new page gallery添加)，里面放相册图库作为封面。然后在[Blogroot]/source/gallery/下面建立相应的文件夹，例如若按照这里的示例，若欲使用/gallery/MC/路径访问 MC 相册，则需要新建[Blogroot]/source/gallery/MC/index.md，并在里面填入gallery相册内容。{% endnote %}


注意 ⚠️：本站相册集为单独优化，可参考配置相册页面。
1. gallerygroup 相册图库
```MARKDOWN
<div class="gallery-group-main">
 {% galleryGroup MC 在Rikkaの六花服务器里留下的足迹 '/wordScenery/' https://bu.dusays.com/2023/06/01/64788f24d05bd.webp %}
 {% galleryGroup Gundam 哦咧哇gundam哒！ '/thousand/' https://bu.dusays.com/2023/06/01/64788f456fc3d.webp %}
 {% galleryGroup I-am-Akilar 某种意义上也算自拍吧 '/wallpaper/' https://bu.dusays.com/2023/06/01/64788f83e5fa1.webp %}
</div>
```
2. gallery 相册
```MARKDOWN
{% gallery true,,2 %}
![](https://bu.dusays.com/2023/06/01/647896b15759c.jpg)
![](https://bu.dusays.com/2023/06/01/647896cabde59.jpg)
![](https://bu.dusays.com/2023/06/01/647896eb0f3ea.jpg)
{% endgallery %}
```
<!-- endtab -->
<!-- tab 标签语法 -->
1. gallerygroup 相册图库
```MARKDOWN
<div class="gallery-group-main">
{% galleryGroup name description link img-url %}
{% galleryGroup name description link img-url %}
{% galleryGroup name description link img-url %}
</div>
```

2. gallery 相册
{% tabs test4 %}
<!-- tab 本地 -->
```MARKDOWN
{% gallery %}
markdown 图片格式
{% endgallery %}

{% gallery true,220,10 %}
markdown 图片格式
{% endgallery %}

{% gallery true,,10 %}
markdown 图片格式
{% endgallery %}
```
<!-- endtab -->
<!-- tab 远程 -->
```MARKDOWN
{% gallery url,[link],[lazyload],[rowHeight],[limit] %}
{% endgallery %}
```
<!-- endtab -->
{% endtabs %}

<!-- endtab -->

<!-- tab 参数配置 -->
1. gallerygroup 相册图库
|  参数   | 含义  |
|  ----  | ----  |
| name  | 图库名字 |
| description  | 图库描述 |
| link  | 链接到对应相册的地址 |
| img-url  | 图库封面 |

{% note blue 'anzhiyufont anzhiyu-icon-bullhorn' simple %}思维拓展一下，相册图库的实质其实就是个快捷方式，可以自定义添加描述、封面、链接。那么我们未必要把它当做一个相册，完全可以作为一个链接卡片，链接到视频、QQ、友链都是不错的选择。{% endnote %}


1. gallery 相册
{% tabs test4 %}
<!-- tab 本地 -->
|  参数   | 含义  |
|  ----  | ----  |
| lazyload | 【可选】点击按钮加载更多图片，填写 true/false。默认为 false。 |
| rowHeight  | 【可选】图片显示的高度，如果需要一行显示更多的图片，可设置更小的数字。默认为 220。 |
| limit  | 【可选】每次加载多少张照片。默认为 10。 |
<!-- endtab -->
<!-- tab 远程 -->
|  参数   | 含义  |
|  ----  | ----  |
| url | 【必须】 识别词 |
| link  | 【必须】远程的 json 链接 |
| lazyload  | 【可选】点击按钮加载更多图片，填写 true/false。默认为 false。 |
| rowHeight  | 【可选】图片显示的高度，如果需要一行显示更多的图片，可设置更小的数字。默认为 220。 |
| limit  | 【可选】每次加载多少张照片。默认为 10。 |
<!-- endtab -->

{% endtabs %}
<!-- endtab -->
{% endtabs %}

# 链接卡片 link
[语雀卡片](https://www.adai.fun/posts/anzhiyu.html#%E8%AF%AD%E9%9B%80%E5%8D%A1%E7%89%87)
{% link https://store.steampowered.com/,Steam,/img/posts/steam/steam.webp,https://store.steampowered.com %}

{% tabs test4 %}
<!-- tab 示例源码 -->
[语雀卡片](https://www.adai.fun/posts/anzhiyu.html#%E8%AF%AD%E9%9B%80%E5%8D%A1%E7%89%87)
```MARKDOWN
{% link 阿呆的博客,阿呆,https://adaiblog.github.io %}
```
<!-- endtab -->
<!-- tab 标签语法 -->
[语雀卡片](https://www.adai.fun/posts/anzhiyu.html#%E8%AF%AD%E9%9B%80%E5%8D%A1%E7%89%87)
```MARKDOWN
{% link 链接,标题,图标,介绍 %}
```
<!-- endtab -->

{% endtabs %}

# 单选列表 radio
{% tabs test4 %}
<!-- tab 样式预览 -->
{% radio 纯文本测试 %}
{% radio checked, 支持简单的 [markdown](https://guides.github.com/features/mastering-markdown/) 语法 %}
{% radio red, 支持自定义颜色 %}
{% radio green, 绿色 %}
{% radio yellow, 黄色 %}
{% radio cyan, 青色 %}
{% radio blue, 蓝色 %}
<!-- endtab -->
<!-- tab 示例源码 -->
```MARKDOWN
{% radio 纯文本测试 %}
{% radio checked, 支持简单的 [markdown](https://guides.github.com/features/mastering-markdown/) 语法 %}
{% radio red, 支持自定义颜色 %}
{% radio green, 绿色 %}
{% radio yellow, 黄色 %}
{% radio cyan, 青色 %}
{% radio blue, 蓝色 %}
```
<!-- endtab -->
<!-- tab 标签语法 -->
```MARKDOWN
{% radio 样式参数（可选）, 文本（支持简单md） %}
```
<!-- endtab -->

<!-- tab 参数配置 -->
1. 颜色: red,yellow,green,cyan,blue,gray
2. 选中状态: checked
<!-- endtab -->
{% endtabs %}

# 上标标签 tip
{% tabs test4 %}
<!-- tab 样式预览 -->
{% tip %}default{% endtip %}
{% tip info %}info{% endtip %}
{% tip success %}success{% endtip %}
{% tip error %}error{% endtip %}
{% tip warning %}warning{% endtip %}
{% tip bolt %}bolt{% endtip %}
{% tip ban %}ban{% endtip %}
{% tip home %}home{% endtip %}
{% tip sync %}sync{% endtip %}
{% tip cogs %}cogs{% endtip %}
{% tip key %}key{% endtip %}
{% tip bell %}bell{% endtip %}
{% tip fa-atom %}自定义 font awesome 图标{% endtip %}
<!-- endtab -->
<!-- tab 示例源码 -->
```MARKDOWN
{% tip %}default{% endtip %}
{% tip info %}info{% endtip %}
{% tip success %}success{% endtip %}
{% tip error %}error{% endtip %}
{% tip warning %}warning{% endtip %}
{% tip bolt %}bolt{% endtip %}
{% tip ban %}ban{% endtip %}
{% tip home %}home{% endtip %}
{% tip sync %}sync{% endtip %}
{% tip cogs %}cogs{% endtip %}
{% tip key %}key{% endtip %}
{% tip bell %}bell{% endtip %}
{% tip fa-atom %}自定义 font awesome 图标{% endtip %}
```
<!-- endtab -->
<!-- tab 标签语法 -->
```MARKDOWN
{% tip [参数，可选] %}文本内容{% endtip %}
```
<!-- endtab -->

<!-- tab 参数配置 -->
1. 样式: success,error,warning,bolt,ban,home,sync,cogs,key,bell
2. 自定义图标: 支持 fontawesome。
<!-- endtab -->
{% endtabs %}

# Note
{% tabs test4 %}
<!-- tab 样式预览 -->
方法一
1. simple样式
{% note simple %}默认 提示块标签{% endnote %}
{% note default simple %}default 提示块标签{% endnote %}
{% note primary simple %}primary 提示块标签{% endnote %}
{% note success simple %}success 提示块标签{% endnote %}
{% note info simple %}info 提示块标签{% endnote %}
{% note warning simple %}warning 提示块标签{% endnote %}
{% note danger simple %}danger 提示块标签{% endnote %}
2. modern样式
{% note modern %}默认 提示块标签{% endnote %}
{% note default modern %}default 提示块标签{% endnote %}
{% note primary modern %}primary 提示块标签{% endnote %}
{% note success modern %}success 提示块标签{% endnote %}
{% note info modern %}info 提示块标签{% endnote %}
{% note warning modern %}warning 提示块标签{% endnote %}
{% note danger modern %}danger 提示块标签{% endnote %}
3. flat样式
{% note flat %}默认 提示块标签{% endnote %}
{% note default flat %}default 提示块标签{% endnote %}
{% note primary flat %}primary 提示块标签{% endnote %}
{% note success flat %}success 提示块标签{% endnote %}
{% note info flat %}info 提示块标签{% endnote %}
{% note warning flat %}warning 提示块标签{% endnote %}
{% note danger flat %}danger 提示块标签{% endnote %}
4. disabled样式
{% note disabled %}默认 提示块标签{% endnote %}
{% note default disabled %}default 提示块标签{% endnote %}
{% note primary disabled %}primary 提示块标签{% endnote %}
{% note success disabled %}success 提示块标签{% endnote %}
{% note info disabled %}info 提示块标签{% endnote %}
{% note warning disabled %}warning 提示块标签{% endnote %}
{% note danger disabled %}danger 提示块标签{% endnote %}
5. no-icon样式
{% note no-icon %}默认 提示块标签{% endnote %}
{% note default no-icon %}default 提示块标签{% endnote %}
{% note primary no-icon %}primary 提示块标签{% endnote %}
{% note success no-icon %}success 提示块标签{% endnote %}
{% note info no-icon %}info 提示块标签{% endnote %}
{% note warning no-icon %}warning 提示块标签{% endnote %}
{% note danger no-icon %}danger 提示块标签{% endnote %}

方法二

图标支持 fontawesome 和 主题内置的阿里图标，使用方法为加上对应的类名，fontawesome图标需开启主题配置文件中icons.fontawesome，默认未开启 fontawesome
1. simple 样式
主题内置阿里图标
{% note 'anzhiyufont anzhiyu-icon-rocket' simple %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note blue 'anzhiyufont anzhiyu-icon-bullhorn' simple %}2022 年快到了....{% endnote %}
{% note pink 'anzhiyufont anzhiyu-icon-instagram' simple %}小心开车 安全至上{% endnote %}
{% note red 'anzhiyufont anzhiyu-icon-fan' simple%}这是三片呢？还是四片？{% endnote %}
{% note orange 'anzhiyufont anzhiyu-icon-dengpao' simple %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note purple 'anzhiyufont anzhiyu-icon-sanmingzhi' simple %}剪刀石头布{% endnote %}
{% note green 'anzhiyufont anzhiyu-icon-ic_train' simple %}前端最讨厌的浏览器{% endnote %}
fontawesome 图标，开启主题配置文件中的icons.fontawesome为true后可见
{% note 'fab fa-cc-visa' simple %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note blue 'fas fa-bullhorn' simple %}2022 年快到了....{% endnote %}
{% note pink 'fas fa-car-crash' simple %}小心开车 安全至上{% endnote %}
{% note red 'icon-fan' simple%}这是三片呢？还是四片？{% endnote %}
{% note orange 'fas fa-battery-half' simple %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note purple 'far fa-hand-scissors' simple %}剪刀石头布{% endnote %}
{% note green 'fab fa-internet-explorer' simple %}前端最讨厌的浏览器{% endnote %}
2. modern 样式
主题内置阿里图标
{% note 'anzhiyufont anzhiyu-icon-rocket' modern %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note blue 'anzhiyufont anzhiyu-icon-bullhorn' modern %}2022 年快到了....{% endnote %}
{% note pink 'anzhiyufont anzhiyu-icon-instagram' modern %}小心开车 安全至上{% endnote %}
{% note red 'anzhiyufont anzhiyu-icon-fan' modern%}这是三片呢？还是四片？{% endnote %}
{% note orange 'anzhiyufont anzhiyu-icon-dengpao' modern %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note purple 'anzhiyufont anzhiyu-icon-sanmingzhi' modern %}剪刀石头布{% endnote %}
{% note green 'anzhiyufont anzhiyu-icon-ic_train' modern %}前端最讨厌的浏览器{% endnote %}
fontawesome 图标，开启主题配置文件中的icons.fontawesome为true后可见
{% note 'fab fa-cc-visa' modern %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note blue 'fas fa-bullhorn' modern %}2021 年快到了....{% endnote %}
{% note pink 'fas fa-car-crash' modern %}小心开车 安全至上{% endnote %}
{% note red 'icon-fan' modern%}这是三片呢？还是四片？{% endnote %}
{% note orange 'fas fa-battery-half' modern %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note purple 'far fa-hand-scissors' modern %}剪刀石头布{% endnote %}
{% note green 'fab fa-internet-explorer' modern %}前端最讨厌的浏览器{% endnote %}
3. flat 样式
主题内置阿里图标
{% note 'anzhiyufont anzhiyu-icon-rocket' flat %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note blue 'anzhiyufont anzhiyu-icon-bullhorn' flat %}2022 年快到了....{% endnote %}
{% note pink 'anzhiyufont anzhiyu-icon-instagram' flat %}小心开车 安全至上{% endnote %}
{% note red 'anzhiyufont anzhiyu-icon-fan' flat%}这是三片呢？还是四片？{% endnote %}
{% note orange 'anzhiyufont anzhiyu-icon-dengpao' flat %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note purple 'anzhiyufont anzhiyu-icon-sanmingzhi' flat %}剪刀石头布{% endnote %}
{% note green 'anzhiyufont anzhiyu-icon-ic_train' flat %}前端最讨厌的浏览器{% endnote %}
fontawesome 图标，开启主题配置文件中的icons.fontawesome为true后可见
{% note 'fab fa-cc-visa' flat %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note blue 'fas fa-bullhorn' flat %}2021 年快到了....{% endnote %}
{% note pink 'fas fa-car-crash' flat %}小心开车 安全至上{% endnote %}
{% note red 'icon-fan' flat%}这是三片呢？还是四片？{% endnote %}
{% note orange 'fas fa-battery-half' flat %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note purple 'far fa-hand-scissors' flat %}剪刀石头布{% endnote %}
{% note green 'fab fa-internet-explorer' flat %}前端最讨厌的浏览器{% endnote %}
4. disabled 样式
主题内置阿里图标
{% note 'anzhiyufont anzhiyu-icon-rocket' disabled %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note blue 'anzhiyufont anzhiyu-icon-bullhorn' disabled %}2022 年快到了....{% endnote %}
{% note pink 'anzhiyufont anzhiyu-icon-instagram' disabled %}小心开车 安全至上{% endnote %}
{% note red 'anzhiyufont anzhiyu-icon-fan' disabled%}这是三片呢？还是四片？{% endnote %}
{% note orange 'anzhiyufont anzhiyu-icon-dengpao' disabled %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note purple 'anzhiyufont anzhiyu-icon-sanmingzhi' disabled %}剪刀石头布{% endnote %}
{% note green 'anzhiyufont anzhiyu-icon-ic_train' disabled %}前端最讨厌的浏览器{% endnote %}
fontawesome 图标，开启主题配置文件中的icons.fontawesome为true后可见
{% note 'fab fa-cc-visa' disabled %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note blue 'fas fa-bullhorn' disabled %}2021 年快到了....{% endnote %}
{% note pink 'fas fa-car-crash' disabled %}小心开车 安全至上{% endnote %}
{% note red 'icon-fan' disabled %}这是三片呢？还是四片？{% endnote %}
{% note orange 'fas fa-battery-half' disabled %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note purple 'far fa-hand-scissors' disabled %}剪刀石头布{% endnote %}
{% note green 'fab fa-internet-explorer' disabled %}前端最讨厌的浏览器{% endnote %}
5. no-icon 样式
{% note no-icon %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note blue no-icon %}2021 年快到了....{% endnote %}
{% note pink no-icon %}小心开车 安全至上{% endnote %}
{% note red no-icon %}这是三片呢？还是四片？{% endnote %}
{% note orange no-icon %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note purple no-icon %}剪刀石头布{% endnote %}
{% note green no-icon %}前端最讨厌的浏览器{% endnote %}
<!-- endtab -->
<!-- tab 示例源码 -->
方法一
1. simple样式
```MARKDOWN
{% note simple %}默认 提示块标签{% endnote %}
{% note default simple %}default 提示块标签{% endnote %}
{% note primary simple %}primary 提示块标签{% endnote %}
{% note success simple %}success 提示块标签{% endnote %}
{% note info simple %}info 提示块标签{% endnote %}
{% note warning simple %}warning 提示块标签{% endnote %}
{% note danger simple %}danger 提示块标签{% endnote %}
```
2. modern样式
```MARKDOWN
{% note modern %}默认 提示块标签{% endnote %}
{% note default modern %}default 提示块标签{% endnote %}
{% note primary modern %}primary 提示块标签{% endnote %}
{% note success modern %}success 提示块标签{% endnote %}
{% note info modern %}info 提示块标签{% endnote %}
{% note warning modern %}warning 提示块标签{% endnote %}
{% note danger modern %}danger 提示块标签{% endnote %}
```
3. flat样式
```MARKDOWN
{% note flat %}默认 提示块标签{% endnote %}
{% note default flat %}default 提示块标签{% endnote %}
{% note primary flat %}primary 提示块标签{% endnote %}
{% note success flat %}success 提示块标签{% endnote %}
{% note info flat %}info 提示块标签{% endnote %}
{% note warning flat %}warning 提示块标签{% endnote %}
{% note danger flat %}danger 提示块标签{% endnote %}
```
4. disabled样式
```MARKDOWN
{% note disabled %}默认 提示块标签{% endnote %}
{% note default disabled %}default 提示块标签{% endnote %}
{% note primary disabled %}primary 提示块标签{% endnote %}
{% note success disabled %}success 提示块标签{% endnote %}
{% note info disabled %}info 提示块标签{% endnote %}
{% note warning disabled %}warning 提示块标签{% endnote %}
{% note danger disabled %}danger 提示块标签{% endnote %}
```
5. no-icon样式
```MARKDOWN
{% note no-icon %}默认 提示块标签{% endnote %}
{% note default no-icon %}default 提示块标签{% endnote %}
{% note primary no-icon %}primary 提示块标签{% endnote %}
{% note success no-icon %}success 提示块标签{% endnote %}
{% note info no-icon %}info 提示块标签{% endnote %}
{% note warning no-icon %}warning 提示块标签{% endnote %}
{% note danger no-icon %}danger 提示块标签{% endnote %}
```
方法二

图标支持 fontawesome 和 主题内置的阿里图标，使用方法为加上对应的类名，fontawesome图标需开启主题配置文件中icons.fontawesome，默认未开启 fontawesome
1. simple 样式
主题内置阿里图标
```MARKDOWN
{% note 'anzhiyufont anzhiyu-icon-rocket' simple %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note blue 'anzhiyufont anzhiyu-icon-bullhorn' simple %}2022 年快到了....{% endnote %}
{% note pink 'anzhiyufont anzhiyu-icon-instagram' simple %}小心开车 安全至上{% endnote %}
{% note red 'anzhiyufont anzhiyu-icon-fan' simple%}这是三片呢？还是四片？{% endnote %}
{% note orange 'anzhiyufont anzhiyu-icon-dengpao' simple %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note purple 'anzhiyufont anzhiyu-icon-sanmingzhi' simple %}剪刀石头布{% endnote %}
{% note green 'anzhiyufont anzhiyu-icon-ic_train' simple %}前端最讨厌的浏览器{% endnote %}
```
fontawesome 图标，开启主题配置文件中的icons.fontawesome为true后可见
```MARKDOWN
{% note 'fab fa-cc-visa' simple %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note blue 'fas fa-bullhorn' simple %}2022 年快到了....{% endnote %}
{% note pink 'fas fa-car-crash' simple %}小心开车 安全至上{% endnote %}
{% note red 'icon-fan' simple%}这是三片呢？还是四片？{% endnote %}
{% note orange 'fas fa-battery-half' simple %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note purple 'far fa-hand-scissors' simple %}剪刀石头布{% endnote %}
{% note green 'fab fa-internet-explorer' simple %}前端最讨厌的浏览器{% endnote %}
```
2. modern 样式
主题内置阿里图标
```MARKDOWN
{% note 'anzhiyufont anzhiyu-icon-rocket' modern %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note blue 'anzhiyufont anzhiyu-icon-bullhorn' modern %}2022 年快到了....{% endnote %}
{% note pink 'anzhiyufont anzhiyu-icon-instagram' modern %}小心开车 安全至上{% endnote %}
{% note red 'anzhiyufont anzhiyu-icon-fan' modern%}这是三片呢？还是四片？{% endnote %}
{% note orange 'anzhiyufont anzhiyu-icon-dengpao' modern %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note purple 'anzhiyufont anzhiyu-icon-sanmingzhi' modern %}剪刀石头布{% endnote %}
{% note green 'anzhiyufont anzhiyu-icon-ic_train' modern %}前端最讨厌的浏览器{% endnote %}
```
fontawesome 图标，开启主题配置文件中的icons.fontawesome为true后可见
```MARKDOWN
{% note 'fab fa-cc-visa' modern %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note blue 'fas fa-bullhorn' modern %}2021 年快到了....{% endnote %}
{% note pink 'fas fa-car-crash' modern %}小心开车 安全至上{% endnote %}
{% note red 'icon-fan' modern%}这是三片呢？还是四片？{% endnote %}
{% note orange 'fas fa-battery-half' modern %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note purple 'far fa-hand-scissors' modern %}剪刀石头布{% endnote %}
{% note green 'fab fa-internet-explorer' modern %}前端最讨厌的浏览器{% endnote %}
```
3. flat 样式
主题内置阿里图标
```MARKDOWN
{% note 'anzhiyufont anzhiyu-icon-rocket' flat %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note blue 'anzhiyufont anzhiyu-icon-bullhorn' flat %}2022 年快到了....{% endnote %}
{% note pink 'anzhiyufont anzhiyu-icon-instagram' flat %}小心开车 安全至上{% endnote %}
{% note red 'anzhiyufont anzhiyu-icon-fan' flat%}这是三片呢？还是四片？{% endnote %}
{% note orange 'anzhiyufont anzhiyu-icon-dengpao' flat %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note purple 'anzhiyufont anzhiyu-icon-sanmingzhi' flat %}剪刀石头布{% endnote %}
{% note green 'anzhiyufont anzhiyu-icon-ic_train' flat %}前端最讨厌的浏览器{% endnote %}
```
fontawesome 图标，开启主题配置文件中的icons.fontawesome为true后可见
```MARKDOWN
{% note 'fab fa-cc-visa' flat %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note blue 'fas fa-bullhorn' flat %}2021 年快到了....{% endnote %}
{% note pink 'fas fa-car-crash' flat %}小心开车 安全至上{% endnote %}
{% note red 'icon-fan' flat%}这是三片呢？还是四片？{% endnote %}
{% note orange 'fas fa-battery-half' flat %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note purple 'far fa-hand-scissors' flat %}剪刀石头布{% endnote %}
{% note green 'fab fa-internet-explorer' flat %}前端最讨厌的浏览器{% endnote %}
```
4. disabled 样式
主题内置阿里图标
```MARKDOWN
{% note 'anzhiyufont anzhiyu-icon-rocket' disabled %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note blue 'anzhiyufont anzhiyu-icon-bullhorn' disabled %}2022 年快到了....{% endnote %}
{% note pink 'anzhiyufont anzhiyu-icon-instagram' disabled %}小心开车 安全至上{% endnote %}
{% note red 'anzhiyufont anzhiyu-icon-fan' disabled%}这是三片呢？还是四片？{% endnote %}
{% note orange 'anzhiyufont anzhiyu-icon-dengpao' disabled %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note purple 'anzhiyufont anzhiyu-icon-sanmingzhi' disabled %}剪刀石头布{% endnote %}
{% note green 'anzhiyufont anzhiyu-icon-ic_train' disabled %}前端最讨厌的浏览器{% endnote %}
```
fontawesome 图标，开启主题配置文件中的icons.fontawesome为true后可见
```MARKDOWN
{% note 'fab fa-cc-visa' disabled %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note blue 'fas fa-bullhorn' disabled %}2021 年快到了....{% endnote %}
{% note pink 'fas fa-car-crash' disabled %}小心开车 安全至上{% endnote %}
{% note red 'icon-fan' disabled %}这是三片呢？还是四片？{% endnote %}
{% note orange 'fas fa-battery-half' disabled %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note purple 'far fa-hand-scissors' disabled %}剪刀石头布{% endnote %}
{% note green 'fab fa-internet-explorer' disabled %}前端最讨厌的浏览器{% endnote %}
```
5. no-icon 样式
```MARKDOWN
{% note no-icon %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note blue no-icon %}2021 年快到了....{% endnote %}
{% note pink no-icon %}小心开车 安全至上{% endnote %}
{% note red no-icon %}这是三片呢？还是四片？{% endnote %}
{% note orange no-icon %}你是刷 Visa 还是 UnionPay{% endnote %}
{% note purple no-icon %}剪刀石头布{% endnote %}
{% note green no-icon %}前端最讨厌的浏览器{% endnote %}
```
<!-- endtab -->
<!-- tab 标签语法 -->
方法一
```MARKDOWN
{% note [class] [no-icon] [style] %}
Any content (support inline tags too.io).
{% endnote %}
```
方法二
```MARKDOWN
{% note [color] [icon] [style] %}
Any content (support inline tags too.io).
{% endnote %}
```
<!-- endtab -->

<!-- tab 参数配置 -->
方法一
|  参数   | 含义  |
|  ----  | ----  |
| class  | 【可选】标识，不同的标识有不同的配色
（ default / primary / success / info / warning / danger ） |
| no-icon  | 【可选】不显示 icon |
| style | 	【可选】可以覆盖配置中的 style（simple/modern/flat/disabled） |

方法二

|  参数   | 含义  |
|  ----  | ----  |
| class  | 【可选】标识，不同的标识有不同的配色（ default / blue / pink / red / purple / orange / green ） |
| no-icon  | 【可选】可配置自定义 icon (支持 fontawesome 图标和主题内置的阿里图标,fontawesome图标需开启主题配置文件中icons.fontawesome, 也可以配置 no-icon ) | |
| style  | 【可选】可以覆盖配置中的 style（simple/modern/flat/disabled） |
<!-- endtab -->
{% endtabs %}

# 音频 audio
{% tabs test4 %}
<!-- tab 样式预览 -->
{% audio https://npm.elemecdn.com/anzhiyu-music@1.0.4/%E9%9D%92%E8%8A%B1%E7%93%B7/%E9%9D%92%E8%8A%B1%E7%93%B7.mp3 %}
<!-- endtab -->
<!-- tab 示例源码 -->
```MARKDOWN
{% audio https://npm.elemecdn.com/anzhiyu-music@1.0.4/%E9%9D%92%E8%8A%B1%E7%93%B7/%E9%9D%92%E8%8A%B1%E7%93%B7.mp3 %}
```
<!-- endtab -->
<!-- tab 标签语法 -->
```MARKDOWN
{% audio 音频链接 %}
```
<!-- endtab -->
{% endtabs %}

# 视频 video
{% tabs test4 %}
<!-- tab 样式预览 -->
1. 100%宽度
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
2. 50%宽度
{% videos, 2 %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% endvideos %}
3. 25%宽度
{% videos, 4 %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% endvideos %}

<!-- endtab -->
<!-- tab 示例源码 -->
1. 100%宽度
```MARKDOWN
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
```
2. 50%宽度
```MARKDOWN
{% videos, 2 %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% endvideos %}
```
3. 25%宽度
```MARKDOWN
{% videos, 4 %}
{% video https://github.com/volantis-x/volantis-docs/releases/download/assets/IMG_0341.mov %}
{% endvideos %}
```
<!-- endtab -->
<!-- tab 标签语法 -->
```MARKDOWN
{% video 视频链接 %}
```
<!-- endtab -->

<!-- tab 参数配置 -->
1. 对其方向：left, center, right
2. 列数：逗号后面直接写列数，支持 1 ～ 4 列。
<!-- endtab -->
{% endtabs %}