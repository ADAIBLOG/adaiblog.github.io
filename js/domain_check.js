document.addEventListener("DOMContentLoaded", function () {
    // 异或加密后的主站域名字符数组（示例："www.adai.fun"）
    const _0x1a2b = [225, 225, 225, 174, 170, 167, 170, 172, 167, 162, 174, 172, 164, 167];
    // 有效域名列表（异或加密）
    const _0x3f4d = [
        [225, 225, 225, 174, 170, 167, 170, 172, 167, 162, 174, 172, 164, 167]; //异或加密后的主站域名字符数组（示例："www.adai.fun"）
    // 异或解密函数
  const XOR_KEY = 0xAA; // 密钥，不要使用默认修改成其他

// 解密函数
    function _0x5e6a(encoded, key = XOR_KEY) {
        return encoded.map(c => String.fromCharCode(c ^ key)).join('');
    }

    // 解密主域名
    const _0x7c8d = _0x5e6a(_0x1a2b);
    // 解密域名列表
    const _0x9e1f = _0x3f4d.map(d => _0x5e6a(d));

    // 域名匹配检测（支持通配符）
    function _0x2b3c(domain, list) {
        return list.some(d => new RegExp(`^${d.replace(/\./g, '\\.').replace(/\*/g, '.*')}$`).test(domain));
    }

    // 控制台打开检测
    function _0x8a7d() {
        const _0xeb = new Error();
        return _0xeb.stack.includes('toString@') || _0xeb.stack.length > 1024;
    }

    // 创建提示横幅
    function _0xd4e6(msgParts, url) {
        if (localStorage.getItem('_dm_banner')) return;

        const _0xac = document.createElement("div");
        _0xac.style.cssText = 'background:#dc3545;color:#fff;padding:8px;position:fixed;bottom:0;left:0;right:0;z-index:9999;text-align:center;font-family:sans-serif;';

        const _0xbf = document.createElement("span");
        _0xbf.textContent = msgParts[0];

        const _0xce = document.createElement("a");
        _0xce.href = `https://${url}/?utm_source=domain_check`;
        _0xce.target = '_blank';
        _0xce.style.cssText = 'color:#fff;text-decoration:underline;margin:0 5px;';
        _0xce.textContent = '主站';

        const _0xdf = document.createElement("span");
        _0xdf.textContent = msgParts[1];

        const _0xed = document.createElement("button");
        _0xed.innerHTML = '×';
        _0xed.style.cssText = 'position:absolute;right:10px;top:50%;transform:translateY(-50%);background:none;border:none;color:#fff;cursor:pointer;';
        _0xed.onclick = () => {
            _0xac.remove();
            localStorage.setItem('_dm_banner', '1');
        };

        _0xac.append(_0xbf, _0xce, _0xdf, _0xed);
        document.body.appendChild(_0xac);
    }

    // 主逻辑
    const _0xcd = window.location.hostname;
    if (_0xcd === 'localhost') {
        _0xd4e6(['本地测试环境，访问正式站点：', '。'], _0x7c8d);
    } else if (!_0x2b3c(_0xcd, _0x9e1f)) {
        _0xd4e6(['当前域名非本站域名，可能是恶意镜像站，请点击', '正常访问本站。请联系站长举报非本站域名，感谢'], _0x7c8d);
        if (_0x8a7d()) window.location.replace(`https://${_0x7c8d}/`);
    } else if (_0xcd !== _0x7c8d) {
        _0xd4e6(['您正在访问镜像站点，推荐访问', '获得最新内容。'], _0x7c8d);
    }
});

// 反调试（简易版）
(function() {
    const _0xab = new Function('try{return this===window}catch(e){return false}');
    if (!_0xab()) {
        document.body.innerHTML = '<h1>请勿在非浏览器环境中打开本页面</h1>';
        window.stop();
    }
})();