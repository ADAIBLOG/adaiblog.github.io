---
title: Markdown语法
date: 2024-12-03 19:15:39
tags: [MarkDown]
categories:
  - 知识
cover: /img/posts/markdown.png
id: markdown
description: Markdown是一种轻量级标记语言，排版语法简洁，让人们更多地关注内容本身而非排版。
main_color: "#c3dddb"
---
详细请查看：[Markdown文档](https://markdown.com.cn/cheat-sheet.html#%E6%89%A9%E5%B1%95%E8%AF%AD%E6%B3%95)
# 标题
{% tabs test4 %}
<!-- tab 样式预览 -->
# H1
## H2
### H3
<!-- endtab -->
<!-- tab Markdown -->
```MARKDOWN
# H1
## H2
### H3
```
<!-- endtab -->
<!-- tab HTML -->
```HTML
<h1>H1</h1>
<h2>H2</h2>
<h3>H3</h3>
```
<!-- endtab -->
{% endtabs %}
# 段落，换行
{% tabs test4 %}
<!-- tab 样式预览 -->
1. 换行

第一段语句
添加一个换行

2. 段落

第一段语句

添加一个段落

<!-- endtab -->
<!-- tab Markdown -->
```MARKDOWN
在语句后面按依次Enter为换行，两次为段落
```
<!-- endtab -->
<!-- tab HTML -->
1. 换行
```HTML
<p>第一段语句</p><p>添加一个换行</p>
```
2. 段落
```HTML
第一段语句<br>添加一个段落
```
<!-- endtab -->
{% endtabs %}
# 文字样式
{% tabs test4 %}
<!-- tab 样式预览 -->
*斜体* 或 _斜体_
**粗体** 或 __粗体__
***粗斜体*** 或 ___粗斜体___
~~删除线~~ 
`代码`
<!-- endtab -->

<!-- tab Markdown -->
```MARKDOWN
*斜体* 或 _斜体_
**粗体** 或 __粗体__
***粗斜体*** 或 ___粗斜体___
~~删除线~~ 
`代码`
```
<!-- endtab -->
<!-- tab HTML -->
```HTML
<em>斜体</em>
<strong>粗体</strong>
<strong><em></em></strong>
<del>删除线</del>  或者  <s>删除线</s>
<code>代码</code>
```
<!-- endtab -->
{% endtabs %}

# 复选框
{% tabs test4 %}
<!-- tab 样式预览 -->
- [x] 勾选
- [ ] 未勾选
<!-- endtab --> 
<!-- tab Markdown -->
```MARKDOWN
- [x] 勾选
- [ ] 未勾选
```
<!-- endtab -->
<!-- tab HTML -->
```html
<ul class="task-list">
  <!-- 已勾选 -->
  <li class="task-list-item">
    <input type="checkbox" class="task-checkbox" checked disabled>
    <span>勾选</span>
  </li>

  <!-- 未勾选 -->
  <li class="task-list-item">
    <input type="checkbox" class="task-checkbox" disabled>
    <span>未勾选</span>
  </li>
</ul>
```
<!-- endtab -->
{% endtabs %}

# 列表（List）
{% tabs test4 %}
<!-- tab 样式预览 -->
 有序列表
1. 第一项
    1. 第一小项
2. 第二项

无序列表
- 项目符号（推荐短横线）
* 星号也可使用
+ 加号变体
  - 子列表（缩进两个空格）
<!-- endtab -->
<!-- tab Markdown -->
有序列表
```MARKDOWN
1. 第一项
    1. 子列表
2. 第二项
```
无序列表
```MARKDOWN
- 项目符号（推荐短横线）
* 星号也可使用
+ 加号变体
  - 子列表（缩进两个空格）
- [x] 已完成
- [ ] 待办事项
```
<!-- endtab -->
<!-- tab HTML -->
有序列表
```HTML
<ol>
<li>第一项</li>
<li>第二项
<ol>
<li>子列表</li>
</ol>
</li>
```
无序列表
```HTML
<ul>
<li>第一项</li>
<li>第二项
<ul>
<li>子列表</li>
</ul>
</li>
```
<!-- endtab -->

{% endtabs %}

# 代码（Code）
{% tabs test4 %}
<!-- tab 样式预览 -->
1. 代码 
`代码内容`
2. 代码块
```MARKDOWN
代码内容
```
<!-- endtab -->
<!-- tab Markdown -->
1. 代码 
```MARKDOWN
`代码内容`
```
2. 代码块
````
```
代码内容
```
````
<!-- endtab -->
<!-- tab HTML -->
```HTML
<code>代码内容</code>
```
<!-- endtab -->
{% endtabs %}

# 分隔线（Horizontal Rule）
{% tabs test4 %}
<!-- tab 样式预览 -->
HTML样式:
<!-- 实线 -->
<hr style="border: 0; border-top: 2px solid #f00;">

<!-- 虚线 -->
<hr style="border: 0; border-top: 2px dashed #00f;">

<!-- 渐变效果 -->
<hr style="height: 4px; background: linear-gradient(90deg, #ff6b6b, #4ecdc4); border: none;">

<!-- 图标分割线 -->
<div style="text-align: center; color: #666;">
  <hr style="display: inline-block; width: 40%; vertical-align: middle;">
  <span style="padding: 0 10px;">★</span>
  <hr style="display: inline-block; width: 40%; vertical-align: middle;">
</div>
Markdown样式:

---
<!-- endtab -->
<!-- tab Markdown -->
```MARKDOWN
---
```
<!-- endtab -->
<!-- tab HTML -->
<!-- 实线 -->
<hr style="border: 0; border-top: 2px solid #f00;">

<!-- 虚线 -->
<hr style="border: 0; border-top: 2px dashed #00f;">

<!-- 渐变效果 -->
<hr style="height: 4px; background: linear-gradient(90deg, #ff6b6b, #4ecdc4); border: none;">

<!-- 图标分割线 -->
<div style="text-align: center; color: #666;">
  <hr style="display: inline-block; width: 40%; vertical-align: middle;">
  <span style="padding: 0 10px;">★</span>
  <hr style="display: inline-block; width: 40%; vertical-align: middle;">
</div>
<!-- endtab -->
{% endtabs %}

# 链接（Link）
{% tabs test4 %}
<!-- tab 样式预览 -->
1. 链接
[标题](https://adai.fun/posts/markdown.html#%E9%93%BE%E6%8E%A5%EF%BC%88Link%EF%BC%89)
2. 引入式链接
[阿呆的博客][1]

[1]: https://adaiblog.github.io
<!-- endtab -->
<!-- tab Markdown -->
1. 链接
```MARKDOWN
[标题](https://adaiblog.github.io/posts/markdown.html#%E9%93%BE%E6%8E%A5%EF%BC%88Link%EF%BC%89)
```
2. 引入式链接
```MARKDOWN
[标题][1]

[1]: https://adaiblog.github.io/markdown.html#%E9%93%BE%E6%8E%A5%EF%BC%88Link%EF%BC%89
```
<!-- endtab -->
<!-- tab HTML -->
```HTML
<a href="超链接地址" title="超链接title">超链接显示名</a>
```
<!-- endtab -->
{% endtabs %}

# 图片
{% tabs test4 %}
<!-- tab 样式预览 -->
![图片](/img/posts/markdown.png)
设置图片大小
<img src="/img/posts/markdown.png" width="200">
<!-- endtab -->
<!-- tab Markdown -->

1. 图片
```MARKDOWN
![标题](图片路径)
```
2. 设置图片大小
```MARKDOWN
<img src="图片路径" width="200">
```
<!-- endtab -->
<!-- tab HTML -->
```HTML
<img src="图片链接" alt="未正常显示文本提示内容" title="图片标题">
```
<!-- endtab -->
{% endtabs %}

# 表格（Table）
{% tabs test4 %}
<!-- tab 样式预览 -->
| 标题 | 内容 | 详情 |
| :---| :---: | ---: |
| 标题1 | 内容1 | 详情1 |
| 标题2 | 内容2 | 详情2 |
<!-- endtab -->
<!-- tab Markdown -->
在{% label '- - -' %}左侧，右侧或两侧添加冒号{% label : %}:将列中的文本对齐到左侧，右侧或中心。
```MARKDOWN
| 标题 | 内容 | 详情 |
| :---| :---: | ---: |
| 标题1 | 内容1 | 详情1 |
| 标题2 | 内容2 | 详情2 |
```
<!-- endtab -->
{% endtabs %}

# 引用
{% tabs test4 %}
<!-- tab 样式预览 -->
> 一级引用
>> 嵌套引用
<!-- endtab -->
<!-- tab Markdown -->
```MARKDOWN
> 一级引用
>> 嵌套引用
```
<!-- endtab -->
{% endtabs %}


