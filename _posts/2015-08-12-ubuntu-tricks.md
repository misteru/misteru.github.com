---
layout: post
title: Ubuntu14.04lts下ibus多语言输入配置(附ubuntu截图方案)
categories:
- geek
tags :
  - geek
---

废话不多说，先上解决方案备查：

#### Ubuntu14.04lts下ibus多语言输入配置

> 问题：装完ubuntu多语言环境之后配置ibus可选列表里面死活找不到对应语言的输入法。

> 目标：英语English（US），拼音Pinyin（微软双拼），日语Anthy。

{% highlight java %}
1. 首先确保多语言环境安装正确

2. 需要的话, 单独安装输入法

sudo apt-get install ibus-anthy

3. 先通过ibus的设置面板添加要用的输入法

ibus-setup

4. 系统设置-文本输入里面添加要用的输入法, 如果没有的话, 注销重新登入刷新一下
{% endhighlight %}
    
最近连续两三次配置ubuntu出错找不到相关的文件只能重新安装系统，好在系统安装还算方便。只是每次安装配置输入法都很头大，明明安装过了对应的输入法，想要添加的时候文本输入列表里面却死活找不到相应的选项。最后反复几次，发现可能真的是需要刷新一下吧。

#### 附ubuntu截图方案


从网上查到的：

I recommend using scrot as it is easy to use and, unlike import, it supports transparency.

To install:
{% highlight java %}
sudo apt-get install scrot
{% endhighlight %}
To capture a screen area:
{% highlight java %}
scrot -s /tmp/foo.png
{% endhighlight %}

