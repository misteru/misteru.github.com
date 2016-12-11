---
layout: post
title: 时隔许久重新启用github时候简化需要做的事情
tags:
  - geek
---

时隔许久准备重新启用Mr.U

### 从github服务器复制工程文件

{% highlight java %}
cd 准备放置工程的目录
git clone 从github页面去拷贝.git的链接
{% endhighlight %}

然后自己本地就有了一个备份了,可以写新的blog,可以编辑原有的.

### 提交本地工程到服务器

{% highlight java %}
cd 工程目录
git add -A
git commit -m "about changes"
git push -u origin master
{% endhighlight %}

这样就可以从网页观摩了. 有时候好像需要等几分钟才能更新.


### 本来到这里已经可以结束了，但是意外的错误总是需要有人来解决

直接git push， 命令会说不能识别origin master。那么就需要重新定义下：

{% highlight java %}
git remote add origin https://github.com/misteru/misteru.github.com.git
{% endhighlight %}

如果一旦添加出错，可以删除再重新添加：

{% highlight java %}
git remote remove origin
git remote add origin https://github.com/misteru/misteru.github.com.git
{% endhighlight %}


然后就被要求输入用户名密码，可惜我忘了，还好靠着浏览器记录的密码登录进去改密码。现在用户名就是misteru，密码就是MrU最常用的密码了，(*^__^*) 嘻嘻……

### 然后git push却依然不成功


错误信息：

********************************************************************************************************
To git@github.com:misteru/misteru.github.com.git
 ! [rejected]        master -> master (fetch first)
error: 无法推送一些引用到 'git@github.com:misteru/misteru.github.com.git'
提示：更新被拒绝，因为远程版本库包含您本地尚不存在的提交。这通常是因为另外
提示：一个版本库已向该引用进行了推送。再次推送前，您可能需要先整合远程变更
提示：（如 'git pull ...'）。
提示：详见 'git push --help' 中的 'Note about fast-forwards' 小节。
********************************************************************************************************

那就听从命令行劝告，git fetch 一下，然后再次提交。

这次提交的时候居然连密码都不需要了，感觉已经起飞！飘飘然吧，少年！


