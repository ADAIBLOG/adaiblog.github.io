document.addEventListener("DOMContentLoaded", function () {
    // Base64编码后的主站域名
    const encodedMainDomain = "YWRhaS5mdW4="; // 对应 "blog.musnow.top"

    // Base64编码后的有效域名列表，支持通配符
    const encodedDomainList = [
        'Ki5hZGFpLmZ1bg==', // 对应 '*.musnow.top'
        'YWRhaWJsb2cuZ2l0aHViLmlv' // 对应 'musnows.github.io'

    ];

    // 对Base64编码后的域名和URL进行解码
    function decodeBase64(encodedStr) {
        return atob(encodedStr);
    }

    // 解码后的主站域名
    const mainDomain = decodeBase64(encodedMainDomain);

    // 解码后的域名列表
    const domainList = encodedDomainList.map(decodeBase64);

    // 判断域名是否在列表中
    function isDomainInList(domain, domainList) {
        // 将通配符域名转换为正则表达式
        const convertToRegex = (wildcard) => {
            return new RegExp('^' + wildcard.replace(/\./g, '\\.').replace(/\*/g, '.*') + '$');
        };

        return domainList.some(wildcardDomain => {
            const regex = convertToRegex(wildcardDomain);
            return regex.test(domain);
        });
    }

    function addInfoBanner(preFix, url, urlText, postFix) {
        // 创建横幅提醒
        const banner = document.createElement("div");
        banner.id = "domainMismatchBanner";

        // 动态生成链接
        const link = document.createElement("a");
        link.href = "https://" + url + "/?utm_source=domaincheck"; // 设置链接的href属性为allowedDomain
        link.target = "_blank";  // 在新窗口或标签页中打开链接
        link.style.color = "#b8dbff";
        link.style.textDecoration = "underline";
        link.innerText = urlText;

        // 将链接添加到横幅内容中
        banner.appendChild(document.createTextNode(preFix));
        banner.appendChild(link);
        banner.appendChild(document.createTextNode(postFix));

        // 将横幅应用CSS样式
        banner.style.backgroundColor = "#fb7070";
        banner.style.color = "#fff";
        banner.style.textAlign = "center";
        banner.style.padding = "3px";
        banner.style.position = "fixed";
        banner.style.bottom = "0";  // 将top改为bottom
        banner.style.left = "0";
        banner.style.width = "100%";
        banner.style.zIndex = "1000";

        // 将横幅添加到body
        document.body.appendChild(banner);
    }

    // 获取当前页面的域名
    const currentDomain = window.location.hostname;
    // 判断当前域名是否在域名列表中
    if (currentDomain == 'localhost') {
        addInfoBanner('当前访问的是本地测试站点，可点击', mainDomain, '主站', '访问在线站点。');
    }
    else if (!isDomainInList(currentDomain, domainList)) {
        addInfoBanner('当前域名非本站域名，可能是恶意镜像站，请点击', mainDomain, '主站', '正常访问本站。请联系站长举报非本站域名，感谢！');
    } else if (currentDomain !== mainDomain) {
        addInfoBanner('您当前访问的是镜像站，如果', mainDomain, '主站', '无法访问，请联系站长，感谢！');
    } 
});
