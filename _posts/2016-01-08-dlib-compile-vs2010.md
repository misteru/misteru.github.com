---
title: Visual Studio 2010下正确配置Dlib
layout: post
tags:
  - programming
---

#### 官网文档 [链接](http://dlib.net/compile.html)

...
Compiling on Windows Using Visual Studio

All you need to do is create an empty console project. Then add dlib/all/source.cpp to it and add the folder containing the dlib folder to the #include search path. Then you can compile any example program by adding it to your project.

Again, note that dlib will only be able to work with jpeg and png files if you link in libjpeg and libpng. In Visual Studio, the easiest way to do this is to add all the source files in the dlib/external folder into your project and also define the DLIB_PNG_SUPPORT and DLIB_JPEG_SUPPORT preprocessor directives. If you don't know how to configure Visual Studio then you should use CMake as shown above since it will take care of everything automatically. 
...

#### 官方文档没有的

看官网的留言发现大部分都是卡在了这个问题上:

DLIB_PNG_SUPPORT and DLIB_JPEG_SUPPORT如何预定义?

官网说如果你配置不好就去用cmake,它会自动给你配置. 但是对于不想用cmake的或者不熟悉的玩家,这是个缥缈的解决方案.

就要快放弃的时候,终于找到了一个救命稻草[How to setup Dlib in the Visual Studio 2013 Back](https://github.com/aleen42/PersonalWiki/blob/master/qa/dlib.md)
