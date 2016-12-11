---
layout: post
title: wordpress小技巧：替换更改登陆页面logo与链接
categories:
- geek
tags :
  - geek
---




最近很多新人在问如何更改wordpress站点后台登陆界面的logo以及Logo图片的链接地址。其实吧，我觉得没必要。你那小网站内容都没有还指望多少人去注册、去登录呢？先补充内容在想这些吧。不发牢骚了，下面小V就来教大家如何来修改更换wordpress后台的logo与链接。

### 方法一：直接修改系统文件wp-login.php或直接替换系统logo。

在你的网站网站根目录下面的wp-admin/images文件夹中找到logo-login.png文件，用这张图片覆盖替换为自己准备好的logo-login.png图片，这样登录页面的logo就替换好了，接下来是修改logo图片所链接的网址。

打开wp-login.php找到

$login_header_url   = __( 'http://wordpress.org' );

将里面的网址替换为你需要的链接。

（PS：这种方法最快捷，但是小V不推荐，因为wp-ogin.php是系统文件，当每次wordpress升级时都会被覆盖还原。）

### 方法二：使用wordpress函数来替换后台登陆页面Logo与链接。

打开当前使用的主题中的functions.php文件并添加以下代码：

function custom_loginlogo() {
    echo '<style type="text/css"> h1 a {background-image: url('.get_bloginfo('template_directory').'/images/logo_login.png) !important; } </style>';
    }
add_action('login_head', 'custom_loginlogo');

然后在主题目录中新建一个images并将你需要替换logo的图片命名为logo_login.png放在images文件夹中即可。接下来还是是修改logo图片所链接的网址。

### 打开当前使用的主题中的functions.php文件并添加以下代码：

function custom_loginlogo_url($url) {
    return 'http://www.v7v3.com'; //在此输入你需要链接到的URL地址
}
add_filter( 'login_headerurl', 'custom_loginlogo_url' );

当然你要载入自定义的登陆页面样式也可以，在functions.php文件加入以下代码即可：

function custom_login() { echo '       
<link href="' . get_bloginfo('template_directory') . '/login.css" rel="stylesheet" type="text/css" />'; }
add_action('login_head', 'custom_login');

自定义登陆页面样式文件就是放在主题目录下的login.css了。


文章转载自[http://www.v7v3.com/wpjiaocheng/201307131.html](http://www.v7v3.com/wpjiaocheng/201307131.html)
