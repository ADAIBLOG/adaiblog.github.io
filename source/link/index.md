---
title: link
type: "link"
comments: true
date: 2024-12-29 08:14:09
aside: false
---
# 友情链接申请
我的名称: 阿呆
网站地址: https://adai.fun
描述: 分享自己所接触的事物
头像: https://q2.qlogo.cn/headimg_dl?dst_uin=1432231192&spec=640
站点截图: https://q2.qlogo.cn/headimg_dl?dst_uin=1432231192&spec=640
```
   - name: 阿呆
     link: https://adai.fun
     avatar: https://q2.qlogo.cn/headimg_dl?dst_uin=1432231192&spec=640
     descr: 分享生活中的事物
     siteshot: https://q2.qlogo.cn/headimg_dl?dst_uin=1432231192&spec=640
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
