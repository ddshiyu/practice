
:::tip
工欲善其事，必先利其器。
:::
<!-- more -->
## 2022年2月11日更新
最近发现一个大神开发了一个github图床的网站，[地址](https://boomb.cn)，相比于picgo图床工具，可以在任何平台随意上传编辑，是一个不错的方案。

![](https://blog.jdqiong.cn/202203041427241.png)

## 原文

之前都是用都是一些商业的图床，例如[sm.ms](https://sm.ms/)，[麦克图床](https://macimg.com), [img.sm](https://img.sm/)，[路由图床](https://imgtu.com/)，但是很多都有空间限制，有时候图片还会丢失。

但是其实GitHub也可以当做图床，而且还是免费的。

### 一，新建一个存储图片的github仓库
![](https://blog.jdqiong.cn/202203041427656.png)

必须是public仓库

### 二，生成token
![](https://blog.jdqiong.cn/202203041427876.png)

![](https://blog.jdqiong.cn/202203041428816.png)

![](https://blog.jdqiong.cn/202203041428628.png)

![](https://blog.jdqiong.cn/202203041428897.png)

按照图示步骤，注意：repo必须打钩

### 三，使用图床工具

![](https://blog.jdqiong.cn/202203041428182.png)

我用的是picgo，这个工具，支持mac和windows系统，就是移动端没有

![](https://blog.jdqiong.cn/202203041428873.png)

然后按照表单填写信息，指定路劲如果是根目录可以不填，然后就可以上传图片了

图片的格式是 `https://cdn.jsdelivr.net/gh/用户名/仓库名@分支名/图片名`