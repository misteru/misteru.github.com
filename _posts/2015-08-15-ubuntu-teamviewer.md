---
layout: post
title: Ubuntu下teamviewer自启动式远程协作
tags :
  - geek
---


研究室的台式机早早地配置了双屏幕，最近又人手一台t400p笔记本，用起来突然不知道什么时候用哪个了。为了最大化提高装备利用率，最近留意了一下远程操作的方法。虽然称之为远程，但是大多数时候两台电脑都在一个桌子上，只是想省去来回切换键盘鼠标的麻烦而已。

teamviewer是一款可以远程协作的软件。两台电脑(Ubuntu 14.04lts)上都装上teamviewer客户端之后，使用同一个账号登录，注册两台电脑均属于自己的帐号。然后根据提供的设备码即可远程连接和操作。

即便这样，偶还是没有满足这种伪远程的操作。我就像万一哪天不想来研究室，或者来不了研究室，可以发个qq让研究室的小伙伴帮忙摁一下台式机的开机键进入ubuntu系统，然后这台机器的一切就可以全权由我来操纵了。基于这样的想法，我就找了一下teamviewer自启动的方法。摘抄如下：

TeamViewer provides a script called teamviewerd.sysv available in /opt/teamviewer/tv_bin/script. Here's an excerpt:

{% highlight java %}
#!/bin/bash
#
# /etc/init.d/teamviewerd
#
# chkconfig: 2345 95 05
# description: daemon for TeamViewer
#
# processname: teamviewerd
# config: /etc/teamviewer/global.conf
# pidfile: /var/run/teamviewerd.pid

### BEGIN INIT INFO
# Provides:          teamviewerd
# Default-Start:     2 3 4 5
# Default-Stop:      0 1 6
# Required-Start:    $all
# Required-Stop:     $local_fs $network $named
# Short-Description: TeamViewer remote control daemon
# Description:       TeamViewer remote control daemon
### END INIT INFO
{% endhighlight %}

All you need to do is make sure this script runs on startup. Making sure of this is relatively simple, just copy it to /etc/init.d like so:

{% highlight java %}
cd /opt/teamviewer/tv_bin/script
sudo cp teamviewerd.sysv /etc/init.d/
{% endhighlight %}

Don't forget to make the script non-writable to anyone but the owner!

{% highlight java %}
sudo chmod 755 /etc/init.d/teamviewerd.sysv
{% endhighlight %}

Then run

{% highlight java %}
sudo update-rc.d teamviewerd.sysv defaults
{% endhighlight %}

The service will now start automatically with each boot. If you don't feel like rebooting, you can start the service manually with:

{% highlight java %}
sudo service teamviewerd.sysv start
{% endhighlight %}


不够满意的地方，就是ubuntu下teamviewer的界面不是特别令人满意，有点像是用wine驱动的windows程序的感觉，表现为渲染不完全或者部分区域破损。或许是因为自启动的设置使得打开的姿势不对？不太清楚，期待以后能有更好用的界面。
