---
title: 邮箱的POP、IMAP、SMTP
date: 2025-05-21 23:56:23
tags: 邮箱
categories:
  - 知识
cover: /img/posts/email.webp
id: email
description: 邮箱的POP、IMAP、SMTP登录等三方客户端
main_color: "#ff4341"
---
## Outlook
### 启用POP、IMAP访问权限
选择“ 设置  > 邮件 > [转发和 IMAP](https://go.microsoft.com/fwlink/?linkid=875424)”
### 应用密码
[创建应用密码](https://account.live.com/proofs/AppPassword)
### IMAP 
服务器: outlook.office365.com
端口: 993
IMAP 加密: SSL/TLS
身份验证方法: OAuth2/新式身份验证
### POP
服务器: outlook.office365.com
端口: 995
POP 加密: SSL/TLS
身份验证方法: OAuth2/新式身份验证
### SMTP
服务器: smtp-mail.outlook.com
端口: 587
SMAP 加密: STARTTLS
身份验证方法: OAuth2/新式身份验证

## 189邮箱
### 启用POP、IMAP访问权限
选择“ 设置  > [IMAP/POP3/SMTP服务](https://webmail30.189.cn/w2/template/mailbox.html#setting/imap)”
### 独立密码
使用第三方客户端登录189邮箱，可能存在邮件泄漏或者账号被盗风险，可前往生成[客户端专用密码](https://webmail30.189.cn/w2/template/mailbox.html#setting/safe)
### IMAP 
服务器: imap.189.cn
端口: 993
IMAP 加密: SSL/TLS
### POP
服务器: pop.189.cn
端口: 995
POP 加密: SSL
### SMTP
服务器: smtp.189.cn
端口: 465
SMAP 加密: SSL

## 163邮箱
### 启用POP、IMAP访问权限
选择“ [打开邮箱](https://email.163.com/) > 设置  > IMAP/POP3/SMTP”
### 独立密码
选择“ [打开邮箱](https://email.163.com/) > 设置  > IMAP/POP3/SMTP > 授权密码管理”
### IMAP 
服务器: imap.163.com
端口: 993
IMAP 加密: SSL
### POP
服务器: pop.163.com
端口: 995
POP 加密: SSL
### SMTP
服务器: smtp.163.com
端口: 465
SMAP 加密: SSL

## QQ邮箱
### 启用POP、IMAP访问权限
选择“ [打开邮箱](https://mail.qq.com/) > 设置  > 账号  >  POP3/IMAP/SMTP/Exchange/CardDAV/CalDAV 服务”
### 授权码
选择“ [打开邮箱](https://mail.qq.com/) > 账号与安全  > 安全设置 > 独立密码”
### IMAP 
服务器: imap.qq.com
端口: 993
IMAP 加密: SSL/TLS
### POP
服务器: pop.qq.com
端口: 995
POP 加密: SSL
### SMTP
服务器: smtp.qq.com
端口: 465
SMAP 加密: SSL

## 谷歌邮箱
### 启用POP、IMAP访问权限
选择“ [打开邮箱](https://mail.google.com/mail?hl=zh-CN) > ⚙️  > 查看所有设置  >  转发和 POP/IMAP
### IMAP 
服务器: imap.gmail.com
端口: 993
IMAP 加密: SSL
### POP
服务器: pop.gmail.com
端口: 995
POP 加密: SSL
### SMTP
服务器: smtp.gmail.com
SSL 端口：465
TLS/START TLS 端口：587
SMAP 加密: SSL/TLS