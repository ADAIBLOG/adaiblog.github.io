---
title: 动画精灵编辑器和像素艺术工具Aseprite
date: 2024-12-04 18:21:40
tags:
  - Aseprite
categories:
  - 应用
cover: /img/posts/aseprite/aseprite.png
top_img: /img/posts/aseprite/aseprite.png
id: aseprite
swiper_index: 4
description: Aseprite是一款适用于Windows、Mac和Linux的动画精灵编辑器和像素艺术工具
---

[Aseprite](https://www.aseprite.org/)是一款非常好用强大的像素艺术创作工具
[官网售价](https://www.aseprite.org/#buy)：$19.99（送Steam Key）       
[Steam售价（国区）](https://store.steampowered.com/app/431730/Aseprite/): ¥70  
同时这款软件开发者在[Github](https://github.com/aseprite/aseprite)上进行了开源，供大家自行编译使用，编译软件受官方许可，制作出的美术资产可用于商用，但不能进行二次销售。如果资金充足可以从官网或者Steam购买支持开发者
[已编译Aseprite](https://adaifun.lanzout.com/iP1R72h7z6ud)
# 购买与编译有什么区别？
购买：会直接获得Win，Mac，Linux安装包直接可以使用，并且有官方邮件支持，更新更方便。
编译：不能直接使用，不同系统，不同版本需要自行下载源代码本地进行编译。
# Github Actions在线编译Win版本
1. 注册[Github](https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home)账号,进入[Aseprite的Github仓](https://github.com/aseprite/aseprite)，并{% label 'Fork' green %}项目
{% gallery true,500,2,center%}
![](/img/posts/aseprite/aseprite1.png)
![](/img/posts/aseprite/aseprite3.png)
{% endgallery %}
2. 点击右上角头像选择{% label 'Your profile' green %}，选择刚才Fork的项目
![](/img/posts/aseprite/aseprite2.png)
3. 点击{% label 'Actions' green %} -> {% label 'I understand my workflows,go ahead and enable them' green %}
![](/img/posts/aseprite/aseprite4.png)
4. 点击{% label 'Code' green %} -> {% label '.github' green %} -> {% label 'workflows' green %} -> {% label 'build.yml' green %} -> {% label '铅笔' green %},进行编辑
![](/img/posts/aseprite/aseprite5.png)
打包Windwos版本
```
将内容替换以下代码
      matrix:
        os: [windows-latest]
        build_type: [Release]
        enable_ui: [on]
        include:
          - os: windows-latest
            build_type: Release
            enable_ui: on
```
![](/img/posts/aseprite/aseprite7.png)
配置skia
```
将内容替换以下代码
        curl -L https://github.com/ADAIBLOG/skia/releases/download/skia/skia.zip --output skia.zip
        7z x skia.zip
        cmake -S . -B build -G Ninja \
          -DCMAKE_BUILD_TYPE=${{ matrix.build_type }} \
          -DENABLE_UI=${{ matrix.enable_ui }} \
          -DENABLE_CCACHE=$enable_ccache \
          -DLAF_BACKEND=skia \
          -DSKIA_DIR=./skia \
          -DSKIA_LIBRARY_DIR=./skia/out/Release-x64 \
          -DSKIA_LIBRARY=./skia/out/Release-x64/skia.lib
```
![](/img/posts/aseprite/aseprite12.png)
打包文件
```
将内容替换以下代码
    - uses: actions/upload-artifact@v4
      with:
        name: aseprite
        path: |
          D:/a/aseprite/aseprite/build/bin/data
          D:/a/aseprite/aseprite/build/bin/aseprite.exe
```
![](/img/posts/aseprite/aseprite11.png)
进行保存
![](/img/posts/aseprite/aseprite6.png)
5. 点击{% label 'Actions' green %}可以看到正在编译，等待10-20分钟编译好之后点击进入，下载解压之后就可以使用了
{% gallery true,500,2,center%}
![](/img/posts/aseprite/aseprite8.png)
![](/img/posts/aseprite/aseprite9.png)
![](/img/posts/aseprite/aseprite10.png)
{% endgallery %}
> 参考文章[自己编译Aseprite！开源像素制作工具](https://zhuanlan.zhihu.com/p/564437259)
# 提示缺少dll文件
![](/img/posts/aseprite/cuowu.png)
下载[Libcrypto-1_1-x64.dll](https://adaifun.lanzout.com/iDzmw2h7uypg),将解压的文件放入[C:\Windows\System32](C:\Windows\System32)

# Win本地编译
# 下载
[Visual Studio 2022](https://visualstudio.microsoft.com/zh-hans/downloads/)，[Aseprite源码](https://github.com/aseprite/aseprite/releases)，[CMake](https://github.com/Kitware/CMake/releases/tag/v3.19.7)，[Ninja](https://github.com/ninja-build/ninja/releases)，[Skia](https://github.com/aseprite/skia/releases)
[Aseprite源码云盘下载](https://adaifun.lanzout.com/b00wm5svza)，[CMake云盘下载](https://adaifun.lanzout.com/i67hJ2h8zwid )，[Ninja云盘下载](https://adaifun.lanzout.com/i75n02h8zw5a)，[Skia云盘下载](https://adaifun.lanzout.com/b00wm5swwd)，云盘密码：adai
# 编译前准备
1. 安装{% label 'Visual Studio 2022' green %}，勾选{% label '使用C++的桌面开发' green %}，右侧勾选{% label 'MSVC' green %}，{% label 'Windows 11 SDK' green %}（Win10系统勾选{% label 'Windows 10 SDK 10.0.18362.0' green %}）
![](/img/posts/aseprite/vscode.png)
2. {% label 'CMake' green %}下载{% label '.msi' green %}文件，并安装
![](/img/posts/aseprite/cmake.png)
3. 将{% label 'Ninja' green %}文件解压到[C:\Program Files\CMake\bin]()
4. 在C盘创建{% label 'aseprite文件夹' green %}，并将{% label 'Aseprite源码' green %}解压到此文件夹(如果下载beta版本，那么Skia也要下载beta版本,不然报错)，并再创建{% label 'Build文件夹' green %}
![](/img/posts/aseprite/asepriteyuan.png)
5. 在C盘创建一个{% label 'desp文件夹' green %}，再在desp中创建{% label 'skia文件夹' green %}，将{% label 'Skia文件' green %}解压到skia文件夹中
![](/img/posts/aseprite/skia.png)
6. win+s搜索{% label 'Developer Command Prompt for VS 2022' green %}分别输入以下代码
```
call "C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\Tools\VsDevCmd.bat" -arch=x64
cd C:\aseprite\build
cmake -DCMAKE_BUILD_TYPE=RelWithDebInfo -DLAF_BACKEND=skia -DSKIA_DIR=C:\deps\skia -DSKIA_LIBRARY_DIR=C:\deps\skia\out\Release-x64 -DSKIA_LIBRARY=C:\deps\skia\out\Release-x64\skia.lib -G Ninja ..
ninja aseprite
```
7. 打开[C:\aseprite\build\bin\aseprite.exe]()文件即可开始使用
![](/img/posts/aseprite/aseprite13.png)

# 汉化和更换主题
[Aseprite汉化插件仓](https://github.com/J-11/Aseprite-Simplified-Chinese/blob/master/README.md)，[Aseprite字体汉化](https://github.com/J-11/Aseprite-Simplified-Chinese/releases/download/1.3-rc1/Aseprite.1.3rc1.aseprite-extension)，[Aseprite主题](https://github.com/J-11/Aseprite-Simplified-Chinese/releases/download/v1.2.23/zhuti-Win.aseprite-extension)，[云盘下载](https://adaifun.lanzout.com/iZsho2h8zdhi)
## 汉化
打开aseprite，{% label 'Edit ' green %}-> {% label 'Preferences' green %} -> {% label 'Extensions' green %} -> {% label 'Add Extensions' green %} -> {% label '选择汉化插件' green %} -> {% label 'General' green %} -> {% label 'Language' green %} -> {% label 'sChinese' green %} -> {% label 'OK' green %}
![](/img/posts/aseprite/hanhua.png)
![](/img/posts/aseprite/hanhua2.png)
![](/img/posts/aseprite/hanhua3.png)
## 更换主题，字体看起来更清晰
打开aseprite，{% label 'Edit ' green %}-> {% label 'Preferences' green %} -> {% label 'Extensions' green %} -> {% label 'Extensions' green %}选择主题 -> {% label 'Extensions' green %}Theme -> {% label '双击添加的主题' green %} -> {% label '调整缩放' green %} -> {% label '完成' green %}
![](/img/posts/aseprite/hanhua4.png)
![](/img/posts/aseprite/hanhua5.png)
# 错误
1. Cmake error :generator: Ninja
Aseprite源码版本与Skia版本不对
2. 
```
CMake Deprecation Warning at src/observable/CMakeLists.txt:4 (cmake_minimum_required):
  Compatibility with CMake < 3.10 will be removed from a future version of
  CMake.

  Update the VERSION argument <min> value.  Or, use the <min>...<max> syntax
  to tell CMake that the project requires at least <min> but has been updated
  to work with policies introduced by <max> or earlier.


CMake Deprecation Warning at src/undo/CMakeLists.txt:4 (cmake_minimum_required):
  Compatibility with CMake < 3.10 will be removed from a future version of
  CMake.

  Update the VERSION argument <min> value.  Or, use the <min>...<max> syntax
  to tell CMake that the project requires at least <min> but has been updated
  to work with policies introduced by <max> or earlier.
```
CMake版本过高
3. 
```
ninja: error: 'C:/deps/skia/out/Release-x64/skia.lib', needed by 'bin/aseprite.exe', missing and no known rule to make it
```
查看创建的文件夹名称路径是否正确
# 其他系统本地编译
[参考文档](https://github.com/aseprite/aseprite/blob/main/INSTALL.md)

# 视频版
<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=113598043064298&bvid=BV1w4i9YQEFf&cid=27186628152&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>