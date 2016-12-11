---
layout: post
title: 安装配置Go编程语言(Ubuntu14.04lts)
categories:
- Other
tags :
- programming
---


Go语言是谷歌2009发布的第二款开源编程语言。Go语言专门针对多处理器系统应用程序的编程进行了优化，使用Go编译的程序可以媲美C或C++代码的速度，而且更加安全、支持并行进程。从知乎上的留言看，很多人表示深入研究后很是推崇go的编程哲学。至于为什么要使用go语言，其优势在哪里的问题，总结一下就是部署简单，并发性好，拥有良好的语言设计规范，执行性能好。

### 安装go语言
通过apt直接可以安装：
{% highlight java %}
sudo apt-get install golang
{% endhighlight %}
根据版本不同可能还是从源安装比较靠谱[Installing Go from source](http://golang.org/doc/install/source)。官方文档上说版本升级还是有点小麻烦的，貌似卸载重装才行。

### 安装包管理器mercurial
Go是由mercurial来管理包的，所以安装一下：
{% highlight java %}
sudo apt-get install mercurial
{% endhighlight %}


### 设置环境变量
{% highlight java %}
# Go environment
export GOROOT=$HOME/go
export GOOS=linux
export GOARCH=amd64
export GOBIN=$GOROOT/bin
export PATH=$PATH:$GOBIN
{% endhighlight %}

### 从repository检查并编译
{% highlight java %}
hg clone -r release https://go.googlecode.com/hg/ $GOROOT
cd $GOROOT/src
./all.bash
{% endhighlight %}

### 检查go版本
{% highlight java %}
go version
# go version go1.2 linux/amd64
{% endhighlight %}


由于昨天刚刚重新装完系统发现配置的时候virtualenvwrapper.sh没有了，还不知道怎么回事
