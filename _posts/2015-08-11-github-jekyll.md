---
layout: post
title: 用GitHub+Jekyll搭设个人博客网站
categories:
- geek
tags : 
  - geek
---


从2010年开始，一些程序员开始在ｇithub网站上搭建blog。他们既拥有绝对管理权，又享受github带来的便利----不管何时何地，只要向主机提交commit，就能发布新文章。更妙的是，这一切还是免费的，github提供无限流量，世界各地都有理想的访问速度。用github+jekyll搭建blog凭借简捷免费的优势开始流行起来。虽然类型上仅限于静态页面，但是对于个人博客而言github提供的访问速度却是相当有吸引力的。

### 注册GitHub帐号
登陆[github.com](http://github.com)注册一个，赶快行动吧，别让你心仪的帐号被别人抢先一步注册了。

### 安装Jekyll
在命令行下，需要先安装ruby和rubygems，通过在Ubutnu14.04lts上面亲自测试发现这样才是可行的：

{% highlight java %}
sudo apt-get install ruby-full
{% endhighlight %}

顺带着会安装好rubygems，不必再手动安装了。
但是仅仅这样jekyll还是会出现错误，还要安装nodejs

{% highlight java %}
sudo apt-get install nodejs
{% endhighlight %}

可以使用***sudo gem sources -l***命令行查看当前设置的服务器，国内需要适当切换一下服务器。我这里貌似切换了反而不好。接下来我们切入正题：
{% highlight java %}
sudo gem install jekyll
{% endhighlight %}
该命令会安装一系列相关的包，耐心等待完成即可。<br/>

理论上，装好了jekyll就可以在本地环境上看到博客了。但是有了git则可以免费发布在github空间上去，更重要的是可以fork程序员大神们的theme之类的。

### 安装git， 与相关初始化设置

配置用户信息
{% highlight java %}
git config --global user.name "xmkz"
git config --global user.email "781227641@qq.com"
{% endhighlight %}
需要检查你电脑是否已经有 SSH key.

Windows下运行git Bash客户端，Ubuntu下直接打开命令行，输入如下代码：
{% highlight java %}
cd ~/.ssh
ls
{% endhighlight %}
这两个命令就是检查是否已经存在 id_rsa.pub 或 id_dsa.pub 文件，如果文件已经存在，那么你可以跳过创建ssh key的步骤。否则创建一个 SSH key 
{% highlight java %}
ssh-keygen -t rsa -C "your_email@example.com"
{% endhighlight %}
命令结果显示为：
{% highlight java %}
Your identification has been saved in /c/Users/you/.ssh/id_rsa.
# Your public key has been saved in /c/Users/you/.ssh/id_rsa.pub.
# The key fingerprint is:
# 03:0f:f4:3b:ca:85:d6:17:a1:7d:f0:68:9d:f0:a2:db your_email@example.com
{% endhighlight %}
 

当你看到上面这段代码的话，那就说明，你的 SSH key已经创建成功，你只需要添加到github的SSH key（账户设置-SSH）上就可以了。<br/>


测试一下该SSH key，在git Bash 中输入以下代码：

 
{% highlight java %}
ssh -T git@github.com
{% endhighlight %}
 
当你输入以上代码时，会有一段警告代码，如：
{% highlight java %}
The authenticity of host 'github.com (207.97.227.239)' can't be established.
# RSA key fingerprint is 16:27:ac:a5:76:28:2d:36:63:1b:56:4d:eb:df:a6:48.
# Are you sure you want to continue connecting (yes/no)?
{% endhighlight %}
 

这是正常的，你输入 yes 回车既可。如果你创建 SSH key 的时候设置了密码，接下来就会提示你输入密码，如：

 
{% highlight java %}
Enter passphrase for key '/c/Users/Administrator/.ssh/id_rsa':
{% endhighlight %}
 

当然如果你密码输错了，会再要求你输入，知道对了为止。

 

注意：输入密码时如果输错一个字就会不正确，使用删除键是无法更正的。

 

密码正确后你会看到下面这段话，如：

 
{% highlight java %}
Hi username! You've successfully authenticated, but GitHub does not
# provide shell access.
{% endhighlight %}
 

如果用户名是正确的,你已经成功设置SSH密钥。如果你看到 “access denied” ，者表示拒绝访问，那么你就需要使用 https 去访问，而不是 SSH 。


### 编辑和发布网页工程

完成了git配置，可以用clone已经存在的项目，布局到本地用***jekyll searve --watch***然后浏览器查询127.0.0.1：4000/测试。

如何查找自己中意的开源项目，就要多看看github上jekyll blog的例子了，据说github是程序员们的facebook。


对于没有布置.git信息的网页工程，需要初始化一下，再上传到git-hub：
{% highlight java %}
git init
git add -A
git commit -m "first commit"
git remote add origin https://github.com/USERNAME/USERNAME.github.io.git
git push -u origin master
{% endhighlight %}

如果已经布置好.git信息，直接修改之后上传工程即可：
{% highlight java %}
cd 工程目录
git add -A
git commit -m "about changes"
git push -u origin master
{% endhighlight %}
过几分钟刷新以下就可以从任何地方访问你刚才发布的网页工程[https://USERNAME.github.io/](https://USERNAME.github.io/)了。
