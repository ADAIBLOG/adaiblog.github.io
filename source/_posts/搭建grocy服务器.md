---
title: 搭建grocy服务器
date: 2025-06-22 19:38:09
tags:
---

apt update
apt upgrade
sudo adduser docker
adduser docker sudo
cd /home/docker


# 执行以下命令卸载所有冲突的软件包
for pkg in docker.io docker-doc docker-compose podman-docker containerd runc; do sudo apt-get remove $pkg; done
# 安装依赖  
sudo apt install apt-transport-https ca-certificates curl software-properties-common -y  

# 添加 Docker GPG 密钥  
sudo apt update
sudo apt install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# 将存储库添加到Apt源代码中
echo \
"deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian \
$(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update

#安装Docker软件包
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin    



 
    
    
    sudo tee /etc/docker/daemon.json <<EOF
{
    "registry-mirrors": [
    "https://registry.docker-cn.com",
    "https://docker.mirrors.ustc.edu.cn",
    "http://hub-mirror.c.163.com",
    "https://cr.console.aliyun.com/",
    "https://docker.1ms.run",
    "https://docker.xuanyuan.me"
    ]
}
EOF

docker run -d \
  --name=grocy \
  -e PUID=1000 \
  -e PGID=1000 \
  -e TZ=Asia/Shanghai \
  -p 9283:80 \
  -v /path/to/grocy/config:/config \
  --restart unless-stopped \
  swr.cn-north-4.myhuaweicloud.com/ddn-k8s/docker.io/linuxserver/grocy:latest