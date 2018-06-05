---
title: 双系统最后还是干掉了linux
layout: post
tags:
  - writing
---


#### 修改启动顺序


安装了ubuntu16.04后，GNU GRUB引导的默认启动项是ubuntu，如果希望默认启动项是windows，修改方法如下：

step1. 进入Ubuntu系统，打开终端，输入  

{% highlight java %} sudo gedit  /etc/default/grub {% endhighlight %}

step2. 打开grub文件以后，第一行代码为 GRUB_DEFAULT=0（以#开头的是注释行，不算代码），意思就是启动菜单顶部的为默认启动项，将0改为4，保存，退出。（启动菜单中一般共五项，windows位于最后，我的ubuntu16.04 +win10是这样的。）      默认启动时间是10s，可以这样修改：在GRUB_DEFAULT=0这一行下面2、3行的样子，有一行代码是GRUB_TIMEOUT=10，修改数字，保存，退出。（千万别忘了执行第三步，更新grub文件）

step3. 然后在终端中输入
 
{% highlight java %} sudo update-grub {% endhighlight %}

，也就是更新grub.cfg文件，使刚才的改动生效。
重启电脑，应该就修改成功了。

#### 双系统行不通的原因

用的这个是微型计算机，启天M610-d529。系统默认给分了4个分区，一个启动，一个c，一个d，一个恢复。用光了所有名额，在windows下面想再创建新的分区都是做不到的。

之前为了装双系统，想了个办法，反正ext4格式分区，windows下面不识别，也管不着。就创建几个ubuntu的专用分区。但是两个系统总归是要共用一些数据的呀，所以就把容量最大的空间独立起来分成了fat32分区，两个系统都认。

然而问题就是：fat的分区最大文件有限制，不超过几g，显然这条件太苛刻。今天发现，一个iso的安装包不行，一个1080p的电影也超过了几g的限制。

没办法，这样下去，还有更多时候没办法解决问题，所以就从windows下面干掉linux。这样的副作用也很明了，很可能无法正常启动进入系统了呀，
重启试试再说吧……