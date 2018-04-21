# 智慧树刷课插件

初衷：

- 智慧树视频播放完后，不能自动播放下一集，并且会偶尔弹出"测试"对话框! 我想着利用所学的前端知识，帮助自己刷课，所以就有了这个chrome插件
- 喜欢这个插件的话，请点右上角的 `star`，谢谢

下面是教程。

## 一、功能和工具

实现的功能：

- 只对[智慧树网站](http://online.zhihuishu.com/onlineSchool/student/index)有效
- 自动播放下一集
- 关闭偶尔弹出的`测试`对话框
- 播放视频时：1.5倍，无声

未实现的功能：

- 单元测试
- "标清"播放

需要的工具：

- 最新版chrome浏览器

## 二、图文教程

1、下载最新版chrome浏览器，下载地址：[https://www.google.cn/chrome/](https://www.google.cn/chrome/)

![下载chrome](./images/download-chrome.png)

2、打开chrome浏览器，来到 [https://github.com/perhaps-yo/zhihuishu](https://github.com/perhaps-yo/zhihuishu) 界面，也就是当前页面，下载插件源码

![下载插件](./images/download.png)

解压后的源码放到自己喜欢的目录

3、chrome浏览器输入 `chrome://extensions` ，来到扩展程序页面。按步骤：勾选`开发者模式` -> 单击`加载已解压的扩展程序`，选择源码的位置 -> 勾选`已启用`。效果如下图：

![安装插件](./images/add.png)

脚本安装成功，准备刷课！

4、来到智慧树视频网站 [http://online.zhihuishu.com/onlineSchool/student/index](http://online.zhihuishu.com/onlineSchool/student/index)，登录后，到需要刷课的视频页面，就会自动开始刷课啦～

![自动刷课](./images/play.png)

## 三、视频教程

[https://v.qq.com/x/page/p06190a8lhy.html](https://v.qq.com/x/page/p06190a8lhy.html)

## 四、遇见的问题

- Q: 来到智慧树网站后，没能实现 `1.5倍，无声播放`？
- A: 按 `f5` 刷新页面。
- Q: 其他问题？
- A: email联系我吧：perhapszql@gmail.com。可我不一定能解决问题。

## 五、License

[MIT](https://github.com/aspnetboilerplate/aspnetboilerplate/blob/dev/LICENSE).
