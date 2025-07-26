---
title: link
type: "link"
comments: true
date: 2024-12-29 08:14:09
aside: false
---

{% folding 友链链接免责声明 %}


# 免责声明

本博客遵守中华人民共和国相关法律。本页内容仅作为方便学习而产生的快速链接的链接方式，对与友情链接中存在的链接、好文推荐链接等均为其他网站。我本人能力有限无法逐个甄别每篇文章的每个字，并无法获知是否在收录后原作者是否对链接增加了违反法律甚至其他破坏用户计算机等行为。因为部分友链网站甚至没有做备案、域名并未做实名认证等，所以友链网站均可能存在风险，请你须知。

所以在我力所能及的情况下，我会包括但不限于：

- 针对收录的博客中的绝大多数内容通过标题来鉴别是否存在有风险的内容
- 在收录的友链好文推荐中检查是否存在风险内容
但是你在访问的时候，仍然无法避免，包括但不限于：

- 作者更换了超链接的指向，替换成了其他内容
- 作者的服务器被恶意攻击、劫持、被注入恶意内容
- 作者的域名到期，被不法分子用作他用
- 作者修改了文章内容，增加钓鱼网站、广告等无效信息
- 不完善的隐私保护对用户的隐私造成了侵害、泄漏

最新文章部分为机器抓取，本站作者未经过任何审核和筛选，本着友链信任原则添加的。如果你发现其中包含违反中华人民共和国法律的内容，请及时联系和举报。该友链会被拉黑。

如果因为从本页跳转给你造成了损失，深表歉意，并且建议用户如果发现存在问题在本页面进行回复。通常会很快处理。

{% endfolding %}

# 友情链接申请
我的名称: 阿呆
网站地址: https://adai.fun
描述: 分享，学习有趣的知识
头像: https://www.adai.fun/img/adai.png
```
   - name: 阿呆
     link: https://adai.fun
     avatar: https://www.adai.fun/img/adai.png
     descr: 分享，学习有趣的知识
```
<p style="padding: 0 0 0 .8rem">
    请<strong>勾选</strong>你符合的条件：
</p>
<div id="friendlink_checkboxs" style="padding: 0 0 0 1.6rem">
    <p>
        <label class="checkbox">
            <input type="checkbox" class="checkbox-input" id="checkbox1">
            我已添加 <b>阿呆</b> 博客的友情链接
        </label>
    </p>
    <p>
        <label class="checkbox">
            <input type="checkbox" class="checkbox-input" id="checkbox2">
            我的链接主体为 <b>个人</b>，网站类型为<b>博客</b>
        </label>
    </p>
    <p>
        <label class="checkbox">
            <input type="checkbox" class="checkbox-input" id="checkbox3">
            我的网站现在可以在中国大陆区域正常访问
        </label>
    </p>
    <p>
        <label class="checkbox">
            <input type="checkbox" class="checkbox-input" id="checkbox4">
            网站内容符合中国大陆法律法规
        </label>
    </p>
</div>


<script>
    document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll(".checkbox-input");

    // 更新提交按钮的显示状态
    function updateSubmitButton() {
    const twikooSubmit = document.querySelector(".tk-submit");
    const input = document.querySelector('.el-textarea__inner');

    // 检查 .tk-submit 是否存在
    if (!twikooSubmit) {
    console.warn("评论提交按钮 .tk-submit 未找到");
    return;
}

    // 检查 .el-textarea__inner 是否存在
    if (!input) {
    console.warn("评论输入框 .el-textarea__inner 未找到");
    return;
}

    // 检查是否所有复选框都已勾选
    const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);

    if (allChecked) {
    // 显示提交按钮
    twikooSubmit.style.opacity = "1";
    twikooSubmit.style.height = "auto";
    twikooSubmit.style.overflow = "visible";

    // 填写模板信息到输入框
    // input.value = '-name：\nlink：\navatar：\ndescr：\n';

    // 模拟输入事件以更新界面
    input.dispatchEvent(new Event('input', { bubbles: true }));

    // 将光标设置到最后一行
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);
} else {
    // 隐藏提交按钮
    twikooSubmit.style.opacity = "0";
    twikooSubmit.style.height = "0";
    twikooSubmit.style.overflow = "hidden";
}
}

    // 给每个复选框添加监听器
    checkboxes.forEach(checkbox => checkbox.addEventListener("change", updateSubmitButton));
});
</script>

<style>
.tk-comments > .tk-submit {
    opacity: 0;
    height: 0;
    transition: opacity 0.5s ease, height 0.5s ease;
    overflow: hidden;
}
</style>
