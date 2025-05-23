---
title: Windows系统设置和优化
tags:
  - Windows
cover: /img/posts/windows/windows.png
categories:
  - 系统
abbrlink: 3471
date: 2024-10-31 03:39:19
id: windwos
description: Windows设置，优化
aside: false
main_color: "#708f66"
---


<script>
let isConverting = false;

function convertUnits(sourceUnit) {
    if(isConverting) return;
    isConverting = true;

    const gbField = document.getElementById('gbValue');
    const mbField = document.getElementById('mbValue');
    
    try {
        // 移除所有非数字字符（包括逗号）
        const cleanValue = (value) => parseFloat(value.toString().replace(/[^0-9.]/g, '')) || 0;

        if(sourceUnit === 'gb') {
            const gb = cleanValue(gbField.value);
            mbField.value = smartFormat(gb * 1024, 'mb');
        } else {
            const mb = cleanValue(mbField.value);
            gbField.value = smartFormat(mb / 1024, 'gb');
        }
    } finally {
        isConverting = false;
    }
}

// 新格式化函数（禁用逗号分隔）
function smartFormat(value, unit) {
    const config = {
        gb: { decimals: 5, min: 0.00001 },
        mb: { decimals: 3, min: 1 }
    }[unit];
    
    return (value < config.min && value !== 0) 
        ? value.toFixed(config.decimals)
        : value.toLocaleString(undefined, { 
            maximumFractionDigits: config.decimals,
            useGrouping: false  // 禁用千分位逗号
          });
}
</script>

{% folding blue ,基础操作 %}
{% folding ,磁盘分区 %}
win+r输入

```
diskmgmt.msc
```


<div style="display: flex; align-items: center; gap: 8px; font-family: monospace;">
    <input type="number"
           id="gbValue"
           style="width: 80px; padding: 6px; border: 1px solid #4CAF50; text-align: center;"
           placeholder="0"
           oninput="convertUnits('gb')">
    <span>GB =</span>
    <input type="number"
           id="mbValue"
           style="width: 120px; padding: 6px; border: 1px solid #2196F3; text-align: center;"
           placeholder="0"
           oninput="convertUnits('mb')">
    <span>MB</span>
</div>
{% endfolding %}
{% folding ,映射磁盘 %}
1. WebDav等需要映射到windwos本地的使用，如果是http地址需要修改注册表
Win+s搜索注册表，进入以下地址，计算机`\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\WebClient\Parameters`，`BasicAuthLevel`的值改为`2`，1：仅支持https 2：支持http和https
可以右键网络->映射网络驱动器->输入的地址->完成->输入账号密码
{% gallery true,500,2,center%}
![](/img/posts/windows/yingshe.png)
![](/img/posts/windows/yingshe2.png)
![](/img/posts/windows/yingshe3.png)
{% endgallery %}
2. 链接smb
打开此电脑，地址栏输入`\\`ip地址（比如：\\192.168.50.85）随后输入账号密码，即可访问
![](/img/posts/windows/smb1.png)
3. 映射OneDrive
登陆[OneDrive](https://onedrive.live.com/)之后复制cid="复制里面的内容"
{% gallery true,500,2,center%}
![](/img/posts/windows/yingshe.png)
![](/img/posts/windows/yingshe2.png)
{% endgallery %}
文件夹填写`https://d.docs.live.net/复制内容`，之后登陆微软账号密码即可，如果有2FA验证需要创建并输入[应用密码](https://account.live.com/proofs/AppPassword)
地址栏输入
{% endfolding %}
{% endfolding %}

{% folding green, 去广告 %}
{% folding ,搜索栏热门搜索 %}
1. Win+S搜索CMD管理员运行输入代码并重启。
```
reg add HKCU\Software\Policies\Microsoft\Windows\explorer /v DisableSearchBoxSuggestions /t reg_dword /d 1 /f 
```
2. 右键下方任务栏，咨询与兴趣关闭
{% endfolding %}
{% endfolding %}


{% folding orange, 游戏优化 %}

{% folding ,关闭鼠标加速度 %}
win+s搜索输入鼠标设置,点击相关设置中的鼠标选项，点击指针设置，激昂提高指针精度关掉
![关闭鼠标加速度](/img/posts/windows/shubiaojiasudu.jpg)
{% endfolding %}

{% folding ,开启高性能模式 %}
win+s输入电源点击选择电源计划，选择高性能模式或者CPU的电源计划
![高性能模式](/img/posts/windows/gaoxingneng)
{% endfolding %}

{% endfolding %}


{% folding purple,window优化设置 %}

{% folding, 隐私设置 %}
win+s输入设置，点击隐私
1. 常规中全部关闭
2. 诊断和反馈中全部关闭，反馈频率设置为从不
{% endfolding %}

{% folding ,关闭windwos自动更新 %}
WIn+r输入services.msc找到Windwos Update点击，启动类型改为禁用，在点击上方的回复，将失败后的操作改为无操作
{% gallery true,,2 %}
![禁止更新](/img/posts/windows/jinzhigengxin1.jpg)
![禁止更新](/img/posts/windows/jinzhigengxin2.jpg)
{% endgallery %}

{% endfolding %}

{% folding ,关闭休眠 %}
WIn+r输入CMD，点击以管理员身份运行，输入
```
powercfg -h off
```
{% endfolding %}
{% endfolding %}







