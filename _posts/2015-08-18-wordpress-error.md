---
layout: post
title: WordPress错误：前后台一片空白
tags : 
  - geek
---




在使用wordpress的过程中，总是会遇到各种WordPress错误，今天就来说一下如何解决WordPress前台或者后台一片空白的问题。


### 可能原因

### 这个问题，一般是在进行以下操作后出现的：

1.更换新主题

2.安装或升级插件

3.升级Wordpress版本

### 问题的根源在于 主题、插件和wordpress自身 三者之间的不兼容：

1.某些主题集成了很多强大的功能，可能与现在使用的插件冲突

2.某些插件版本或主题不兼容你现在使用的Wordpress版本

## 解决办法

### 方法一：通过 FTP 重新命名当前启用的主题

把当前安装的主题文件夹重命名的话，会强制 WordPress 自动选择默认的主题，然后就可以正常载入了。

1. 通过 FTP 找到 wp-contents/themes 文件夹，重命当前安装的主题文件夹。例如：把 twentytwenty 命名为 twentytwenty-temp

2. 登录 WordPress 后台， 禁用所有插件，然后 FTP 将原来的主题名字改回来，重新激活，

1）如果一切正常，说明是这个主题和某插件冲突，逐个激活插件，找出冲突的插件并禁用；

2）如果重新激活主题又出现问题，说明这个主题和你现在使用的wordpress版本不兼容，或者主题存在错误。

### 方法二：通过 FTP 重设插件文件夹

1. 通过 FTP 登录，将 wp-contents 下的  plugins 文件夹重命名为 plugins-temp

2. 在同一目录下创建一个新的文件夹为 plugins ，重新登录 WordPress 后台，

1）如果问题依旧，说明是现用主题和你的 WordPress 不兼容，或主题存在错误；

2）如果一切正常，说明是某个插件与当前 wordpress 版本或主题冲突，把插件从 plugins-temp 移到 plugins ，然后逐个重新激活，找出不兼容的插件并禁用。

文章转载自[http://www.wpdaxue.com/wordpress-error-1.html](http://www.wpdaxue.com/wordpress-error-1.html)
