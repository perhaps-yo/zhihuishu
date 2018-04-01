# 智慧树视频刷课插件

初衷：

- 智慧树视频不能在播放完后自动播放下一集，并且偶尔会弹出个对话框，看看你在不在电脑旁看视频! 我想着利用所学的前端知识，写个插件，帮助自己刷课，所以就有了这个chrome插件
- 喜欢这个插件的话，请点右上角的 `star`，谢谢

后续：

- 2017年12月初，插件写完。
- 2018年3月31号，代码第一次更新完毕。添加了视频教程。

下面是教程。

## 一、功能和工具

功能：

- 只对智慧树视频网站有效(`http://online.zhihuishu.com/onlineSchool/student/index`)
- 播放视频时实现：1.5倍速度，标清，无声播放
- 自动播放视频的下一集
- 对偶尔弹出的`测试`对话款进行关闭处理

未实现的功能：

- 单元测试(这个还是需要自己做的！)

需要的工具：

- chrome浏览器

## 二、图文教程

1、下载最新版chrome浏览器，下载地址：[https://www.google.cn/chrome/](https://www.google.cn/chrome/)

![下载chrome](./images/download-chrome.png)

2、打开chrome浏览器，来到 [github.com/perhaps-yo/zhihuishu](github.com/perhaps-yo/zhihuishu) 界面，也就是当前页面，下载插件源码

![下载插件](./images/download.png)

解压后的源码放到自己喜欢的目录

3、chrome浏览器输入 `chrome://extensions` ，来到扩展程序页面。按步骤：勾选`开发者模式` -> 单击`加载已解压的扩展程序`，选择刚刚源码的位置 -> 勾选`已启用`。效果如下图：

![安装插件](./images/add.png)

脚本安装成功，准备刷课！

4、来到智慧树视频网站 [http://online.zhihuishu.com/onlineSchool/student/index](http://online.zhihuishu.com/onlineSchool/student/index)，登录后，到需要刷课的视频页面，就会自动开始刷课啦～

![自动刷课](./images/play.png)

## 三、视频教程

[https://v.qq.com/x/page/p06190a8lhy.html](https://v.qq.com/x/page/p06190a8lhy.html)

## 四、遇见的问题

- Q: 来到智慧树视频网站后，没能实现 `1.5倍速度，标清，无声播放`？
- A: 按 `f5` 刷新页面。
- Q: 还是不行的话？
- A: email联系我吧：perhapszql@gmail.com。可是我不一定能解决问题。

## 五、License

[MIT](https://github.com/aspnetboilerplate/aspnetboilerplate/blob/dev/LICENSE).
