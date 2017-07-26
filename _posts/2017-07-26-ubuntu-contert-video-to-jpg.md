---
title: ubuntu convert video to jpg
layout: post
tags:
  - geek
---

This seems to work for me:

{% highlight java %}
ffmpeg -i videofilename.ext out%4d.png
{% endhighlight %}

If you need just a few frames,you can use -ss to specify the starting second, and -t to specify duration in seconds. like "ffmpeg -i videofilename.ext -ss 10 -t 1 out%4d.png" 


[参考网站](https://ubuntuforums.org/showthread.php?t=1491440)

