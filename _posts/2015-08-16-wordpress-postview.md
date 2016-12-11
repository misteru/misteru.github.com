---
layout: post
title: WordPress插件wp-postviews显示文章访问量的使用方法 
tags :
  - geek
---


本文提供WordPress的插件wp-postviews显示文章点击量或访问量的使用方法。

一、 下载安装（如果能在wordpress中直接找到插件wp-postviews进行安装是最方法的，但由于服务器限制，如果不能直接安装插件的，可以选择下载wp-postviews后进行安装）
官方站点：http://lesterchan.net/portfolio/programming/php/#wp-postviews
插件的安装步骤如下：
1、下载 wp-postviews.zip 文件到本地，当前最新版本是wp-postviews 1.6.5；
2、进入wordpress后台的插件-安装插件页面，然后选择上传的方式安装插件；
3、安装完成后，进入插件-已安装插件，找到wp-postviews，然后点击启用；

二、 wp-postviews 的后台设置

<div>
<div class="center"><img src="/res/img/posts/postview-1.png" /></div>
</div>

第一部分：
1、Count Views From: 设置被统计的用户群，下拉式选框。可选项：所有人、仅访客、仅管理员，默认：仅访客；
2、Exclude Bot Views: 是否排除搜索机器人的浏览数量，可选项：是、否，默认：否；
3、Views Template: 浏览量的显示格式，默认是：%VIEW_COUNT% views 。比如设置成：‘阅读：%VIEW_COUNT% 次’。

第二部分：
Most viewed Template:
这个是侧边栏 Widget 显示浏览量最多的文章（亦称“最受欢迎文章”）列表时的显示格式，
默认：
%POST_TITLE% – %VIEW_COUNT% views

，如果需要可以对这段html代码进行自行修改以符合你的需要，该段代码所用到的变量在图片中左侧的列表中。比如改成如下：
%POST_TITLE%
浏览量： %VIEW_COUNT% 次

这里需要注意的是，在“阅读： %VIEW_COUNT% 次”这个要和上面的“Views Template”设置成一样的。

第三部分：
1、Display Options: 主要是设置浏览量在什么页面显示，显示给谁可以看见。但是前提是在当前主题的相应页面文件中已经添加了”显示浏览量的函数” the_views() ；
2、页面：可以分别对“Home page”、“single Posts”、“Pages”、“Archive Pages”、“Search Pages”、“Other Pages”进行独立的配置；
3、选项：每个设置有三个选项：“Display to everyone”、“Display to registered users only”、“Don’t display on archive pages”，根据字面意思就可以理解其中的设置含义，默认：“Display to everyone”；
4、Save Changes: 保存按钮，对上述所有设置项保存。

第四部分：
1、卸载 wp-PostViews 插件时需要注意：停用改插件并不能删除已经产生的浏览量统计的数据，如果要彻底删除该插件，则必须使用这里的设置进行卸载。
2、如果你确定（请注意，这个删除操作是不可以恢复的，所以请务必首先备份好数据）删除此插件，则选中“Yes”选项，然后点击“UNINSTALL WP-PostViews”按钮进行彻底的卸载。
至此：后台设置部分已经全部设置好了，接下来进行代码的添加。

三、 添加浏览量输出代码 the_views()
在外观-编辑中，找到要添加访问量代码的位置，然后添加如下代码即可：
这段代码的添加对于有编辑经验的来说比较简单，如果没有编程经验的，建议多试试，看放哪儿合适。
我选的是Asteroid主题，将代码放在文章列表页面上的阅读全文处，比如首页和分类目录页面，在loop.php文件的
后添加即可显示出文章的访问量。
如上方法对其他页面如 single.php、post.php、page.php 等页面进行添加代码，如果需要的话。

四、 添加 wp-postviews-widget 侧边栏
1、启用 wp-postviews-widget 插件以后，在 WordPress后台 –> 外观 –> 小工具 就会增加一个小工具：Most Viewed;Most viewed
2、将此小工具添加到 当前小工具 里面;
3、设置小工具：
Title: 小工具的标题，可以设置为：热门文章 或者 Most Viewed；
Show Views For: 显示的内容，可选项：Posts & Pages、Posts、Pages，一般选择 Posts ；
Limit: 显示热门文章的数量；
Post Tile Length: 文章标题长度，数字“0”为不做限制；

五、 其他设置
可以利用此插件设置其他的页面，由于本博客没有使用，所以在此不做详细介绍，有兴趣的朋友可以通过官方站点的教程进行修改和添加
可以实现如下内容：
1) To Display Least Viewed Posts —— 显示最近被浏览的文章
2) To Display Most Viewed Posts —— 显示浏览量最多的文章
3) To Display Least Viewed Posts For A Category —— 显示某一分类下最近被浏览的文章
4) To Display Most Viewed Posts For A Category —— 显示某一分类下的浏览量最多的文章
5) To Sort Most/Least Viewed Posts —— 按浏览量（最多/最少）对文章进行排序

怎么把views去掉?这个很简单的 在后台找到
Most Viewed Template:
%POST_TITLE% – %VIEW_COUNT% views

去掉你不想要的就行了，很简单的！
这个插件的功能定位非常的准确，所以现在用的人非常的多，简单的设置一下就可以了，非常的方便。而且可用性非常的高。

文章转载自[http://www.51lingguang.com/?p=236](http://www.51lingguang.com/?p=236)
