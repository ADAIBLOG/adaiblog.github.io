// GitHub Pages 反镜像增强代码 - 部署到您的仓库中
// 支持本地开发白名单、动态混淆域名、反调试、定时检测
(() => {
    // 重要：将以下代码通过 JS 混淆工具处理后再部署（如 JScrambler、javascriptobfuscator.com）
    "use strict";

    // ============== 配置区域 ============== //
    const _0x1a2b = ['\x67\x6d\x61\x69\x6c\x2e\x63\x6f\x6d', '\x67\x69\x74\x68\x75\x62\x2e\x69\x6f']; // 合法域名白名单（明文混淆）
    const _0x34df = ['\x59\x32\x31\x79\x4a\x6d\x35\x68\x62\x57\x56\x66\x62\x33\x42\x33']; // 主站域名哈希校验值（SHA-256）
    const _0x5c8d = 3000; // 定时检测间隔（毫秒）
    // ==================================== //

    // 动态生成主域名（抗静态分析）
    function _0x11ae() {
        const _0x2f3d = ['\x64\x33\x64\x33', '\x4c\x6d\x41\x61\x69', '\x2e\x66\x75\x6e'];
        return _0x2f3d[0] + _0x2f3d[1].replace('\x41', '\x2e\x6d\x75\x73\x6e\x6f\x77') + _0x2f3d[2];
    }

    // 校验域名哈希（防止篡改）
    async function _0x29f7(_0x12d4) {
        const _0x1e8b = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(_0x12d4));
        return Array.from(new Uint8Array(_0x1e8b)).map(b => b.toString(16).padStart(2, '0')).join('');
    }

    // 强制跳转并阻止返回
    function _0x485d(_0x14a6) {
        sessionStorage.setItem('ANTI_MIRROR', 'true');
        window.location.replace(_0x14a6);
        setInterval(() => { window.location.replace(_0x14a6) }, 100);
    }

    // 主检测逻辑
    async function _0x38d2() {
        const _0x19b3 = window.location.hostname;
        const _0x1792 = _0x11ae(); // 真实主域名

        // 白名单检查（localhost、github.io、用户自定义域名）
        if (_0x19b3 === 'localhost' || _0x19b3.endsWith('.github.io') || _0x1a2b.includes(_0x19b3)) return;

        // 校验主域名哈希是否被篡改
        if (await _0x29f7(_0x1792) !== _0x34df[0]) {
            _0x485d('https://' + _0x1792);
            return;
        }

        // 如果当前域名不是主站
        if (_0x19b3 !== _0x1792) {
            _0x485d('https://' + _0x1792);
        }
    }

    // 反调试保护（检测开发者工具）
    function _0x2e6c() {
        const _0x13d9 = new Date();
        debugger;
        if (new Date() - _0x13d9 > 100) {
            document.body.innerHTML = '<h1>安全告警：禁止调试模式访问！</h1>';
            window.location.reload();
        }
    }
    setInterval(_0x2e6c, 1000);

    // 初始化：立即检测 + 定时检测
    _0x38d2();
    setInterval(_0x38d2, _0x5c8d);

    // 阻止镜像站通过iframe嵌入
    if (window.top !== window.self) {
        window.top.location = window.self.location;
    }
})();