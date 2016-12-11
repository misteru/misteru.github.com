---
title: 道路检测与道路尽头消失点搜索算法实现资料整理
layout: post
tags:
  - programming
---

![vashing point detection](/media/files/2015/11/vanishing.png)

#### 普适性的检测算法, 能够涵盖没有明显颜色边缘分界的道路:

[Road/Lane Detection Evaluation 2013](http://www.cvlibs.net/datasets/kitti/eval_road.php): 总结得很好的benchmark, 还有各个算法对比, 数据库.

[Grouping Dominant Orientations for Ill-Structured Road Following](http://nameless.cis.udel.edu/pubs/2004/Ras04/cvpr2004.pdf)


[vashing point detection for road detection](http://imagine.enpc.fr/~audibert/Mes%20articles/CVPR09.pdf)


#### 实现细节整理的链接以及ubuntu调整的链接

[matlab的gabor实现方案](http://matlabserver.cs.rug.nl/edgedetectionweb/web/edgedetection_examples.html)：这个页面看起来相当官方，要是总结知识能做到这样地页面的话，应该是相当不错的啦

[多种图像应用程序matlab源](http://matlabserver.cs.rug.nl/)同一个大学的附属网站，包含很多像gabor这样的图像处理的应用小程序，竟然是matlab嵌入的，现在想来，有一个独立服务器真是任性啊


截止到上周四（2015-11-26），已经完成了cvpr09论文中的检测方法。 从gabor kernel数学公式设计滤波器(主要是参数选择, lamada, theta, scaleFactor, sigma. 经典的5 scale, 36 orientation设计; 到滤波器与图像卷积, 这一步之前竟然听他们的用c++来从底层写起,太繁琐了, 效率很低, 还是matlab效率高; 之后, 综合分析实部虚部, 计算保存每个像素位置的dominant orientation angle; 过滤不符合条件的confidence map; 然后softvoting, half-disk范围内投票...), 接下来到这片文章以及以后的文章都没有关注到的问题:  就是它们都假设这样一个场景， 图像上半部分是天空， 下半部分是路， 由近处延伸并消失在远方。 并假设道路边缘是两条直线所夹区域。 这个很致命： 因为很多道路都是有弧度， 甚至是弯弯曲曲的。

![vashing](/media/files/2015/11/vashing.png)

接下来的多样化图像实验以及参数调整任务主要交给伊藤来做， 我准备把主要精力放回到自己的研究课题， 以及长远考虑自己的事业计划上来


#### ubuntu使用调整的链接

之前的拼音输入法是ibus的“拼”字图标，应该是语言包自带的，或者无意间安装上去的。问题是在切换到这个输入法的时候，不能够选择可编辑的文本，选择操作被定义成了删除操作。所以总是把已经写好的东西给误删了。很早就想k掉了，一直拖到现在。

[ubuntu14.04+fcitx+搜狗拼音](http://blog.csdn.net/tao_627/article/details/24119037)：博主很激动地一步一步教你安装搜狗拼音，O(∩_∩)O哈哈~

[ubuntu14.04+fcitx+anthy](https://blogs.fsfe.org/stefan.a/2014/09/23/set-up-fcitx-chinese-and-japanese-language-input-ubuntu-14-04/)

[ubuntu历史命令用法](http://os.51cto.com/art/201205/335040.htm)：总结的很好

...
