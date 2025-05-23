---
title: 家庭网络级解决方案:AdguardHome
date: 2025-02-26 12:29:58
tags: [网络,Linux]
categories:
  - 软件
cover: /img/posts/adguard/adguardhome.webp
id: adguardhome
description: 为家庭用户提供全面的广告拦截、恶意软件防护和网络监控功能。
main_color: "#65be6c"
---

# 在 Debian 系统上搭建 AdGuard Home 的完整教程
## 环境准备

### 1. 系统要求
- ​**操作系统**: Linux系统
- ​**硬件要求**: AdGuard Home 对内存和 CPU 要求较低，适合在小型设备（如树莓派）上运行。
- ​**网络要求**: 公网 IP（可选，用于远程管理）  

### 2. 更新系统包  
```
    sudo apt update && sudo apt upgrade -y  
```

## 部署 AdGuard Home

### 1. 下载 AdGuard Home 
{% tabs test4 %}

<!-- tab 自动安装 -->

### 1. 选择自动安装方式

{% tabs test4 %}

<!-- tab curl -->

```
curl -s -S -L https://raw.githubusercontent.com/AdguardTeam/AdGuardHome/master/scripts/install.sh | sh -s -- -v
```

<!-- endtab -->

<!-- tab wget -->

```
wget --no-verbose -O - https://raw.githubusercontent.com/AdguardTeam/AdGuardHome/master/scripts/install.sh | sh -s -- -v
```

<!-- endtab -->

<!-- tab fetch -->

```
fetch -o - https://raw.githubusercontent.com/AdguardTeam/AdGuardHome/master/scripts/install.sh | sh -s -- -v
```

<!-- endtab -->

{% endtabs %}

### 2. 如果系统启用防火墙，需手动开放端口：
DNS 监听端口（默认 53）和 HTTP 管理端口（默认 3000）
```
sudo ufw allow 53
sudo ufw allow 3000/tcp
```


<!-- endtab -->

<!-- tab Docker安装 -->
### 1. 安装[docker和Docker-Composr](https://www.adai.fun/posts/docker.html)
### 2. 新建目录
```
mkdir ~/adguardhome && cd ~/adguardhome
```
### 3. 创建 docker-compose.yml
```
nano docker-compose.yml
```
### 4. 编写 docker-compose.yml
```
version: '3.8'

services:
  adguard-home:
    image: adguard/adguardhome:latest
    container_name: adguard-home
    restart: unless-stopped
    ports:
      - "53:53/tcp"          # DNS over TCP
      - "53:53/udp"          # DNS over UDP
      - "3000:80/tcp"        # 管理界面 HTTP（避免与宿主机 80 端口冲突）
      # - "3001:443/tcp"     # 管理界面 HTTPS（需配置证书后启用）
    volumes:
      - ./data/conf:/adguardhome/conf  # 配置文件
      - ./data/work:/adguardhome/work  # 数据文件
    environment:
      - TZ=Asia/Shanghai     # 设置时区
    networks:
      - adguard-net

networks:
  adguard-net:
    driver: bridge
```
### 3. 启动 AdGuard Home
1. 启动容器
```
docker-compose up -d
```
2. 查看容器状态
```
docker-compose ps
```
<!-- endtab -->

{% endtabs %}

## 首次配置

### 1. 访问管理界面  
- ​**本地访问**: `http://主机IP地址:3000`  
- ​**远程访问**: `http://<你的服务器IP>:3000`  

### 2. 初始设置步骤  
1. 选择语言（如中文），点击 ​**Next**。  
2. 阅读并接受服务条款，点击 ​**Next**。  
3. 设置管理员账户的用户名和密码。  
4. 完成配置后登录管理后台。  

## 关键配置说明

### 1. 广告拦截规则  
- ​**默认规则**：系统已预装基础广告过滤规则。  
- ​**自定义规则**:  
  - 进入 ​**Filtering → Rulesets → Manual**，输入规则链接（例如 `https://adguardteam.github.io/AdGuardSDNSFilter/Filters/filter.txt`）。  

### 2. 家长控制  
- ​**内容过滤**:  
  - 在 ​**Parent Control → Content Blocking**​ 中勾选需要屏蔽的类别（如成人内容、赌博）。  
- ​**屏幕时间管理**:  
  - 在 ​**Screen Time**​ 中设置设备可用时间段（例如每天 18:00-22:00）。  
### 3. 网络监控  
- 查看实时流量：进入 ​**Network → Dashboard**​ 查看各设备的连接状态和 DNS 请求统计。  

## 更新和卸载
### 1. 更新
{% tabs test4 %}

<!-- tab 自动更新 -->

1. 停止 AdGuard Home 服务 
```
sudo systemctl stop AdGuardHome
```
2. 重新运行自动安装脚本(curl,wget,fetch)
3. 重启服务
```
sudo systemctl start AdGuardHome
```
4. 验证版本
```
/opt/AdGuardHome/AdGuardHome --version
```

<!-- endtab -->

<!-- tab Docker-Compose -->
1. 修改docker-compose.yml保存之后重启容器
```
# 进入 AdGuard Home 的 docker-compose.yml 所在目录
cd ~/adguardhome

# 重启容器
docker-compose up -d
```
<!-- endtab -->

{% endtabs %}

### 2. 卸载
{% tabs test4 %}

<!-- tab 自动更新 -->

1. 停止并禁用服务
```
sudo systemctl stop AdGuardHome
sudo systemctl disable AdGuardHome
```
2. 执行卸载命令
```
sudo /opt/AdGuardHome/AdGuardHome -s uninstall
# 清理残留文件
sudo rm -rf /opt/AdGuardHome
```

<!-- endtab -->

<!-- tab Docker-Compose -->
1. 停止并删除容器
```
# 进入 docker-compose.yml 所在目录
cd ~/adguard-home

# 停止并删除容器（保留数据）
docker-compose down
```
2. 彻底删除数据（可选）
```
# 删除持久化数据目录（谨慎操作！会清除所有配置和日志）
rm -rf ./data
```
3. 删除Docker镜像
```
# 删除 AdGuard Home 镜像
docker rmi adguard/adguardhome:latest
```
<!-- endtab -->

{% endtabs %}

## 常见问题

### 1. 无法访问管理界面  
开放防火墙端口  
```
    sudo ufw allow 3000/tcp  
    sudo ufw reload  
```
    
### 2. 集成到路由器  
- 在路由器设置中将 DNS 服务器地址指向 AdGuard Home 的 IP（例如 `192.168.1.100:53`）。

**参考文档**:  
[AdGuard Home 官方文档](https://adguardhome.org/docs/)  