## 一、引言
[SVG](https://developer.mozilla.org/zh-CN/docs/Web/SVG) 是一种 [XML](https://developer.mozilla.org/zh-CN/docs/Web/XML) 语言，可以用来绘制矢量图形。SVG 可以通过定义必要的线和形状来创建一个图形，也可以修改已有的位图，或者将这两种方式结合起来创建图形。图形和其组成部分可以形变（be transformed）、合成、或者通过滤镜完全改变外观。
#### 基本要素
SVG提供了定义圆形、矩形、简单或复杂的曲线。一个简单的 SVG 文档由[svg](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/svg) 根元素和基本的形状元素构成。一个简单的 SVG 文档由 [svg](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Element/svg) 根元素和基本的形状元素构成。
> - SVG 的元素和属性必须按标准格式书写，因为 XML 是区分大小写的（这一点和 HTML 不同）
> - SVG 里的属性值必须用引号引起来，就算是数值也必须这样做。

## 二、入门
实例：[链接](https://media.prod.mdn.mozit.cloud/attachments/2012/07/09/3075/89b1e0a26e8421e19f907e0522b188bd/svgdemo1.xml)

```xml
<svg version="1.1"
  baseProfile="full"
  width="300" height="200"
  xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="red" />
  <circle cx="150" cy="100" r="80" fill="green" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
</svg>

```
#### SVG 文件的基本属性

- 最值得注意的一点是元素的渲染顺序。SVG 文件全局有效的规则是“后来居上”，越后面的元素越可见。
- web 上的 svg 文件可以直接在浏览器上展示，或者通过以下几种方法嵌入到 HTML 文件中：阅读[this dedicated article](https://developer.mozilla.org/zh-CN/SVG_In_HTML_Introduction) 以深入了解该话题。
   - 如果 HTML 是 XHTML 并且声明类型为application/xhtml+xml，可以直接把 SVG 嵌入到 XML 源码中。
   - 如果 HTML 是 HTML5 并且浏览器支持 HTML5，同样可以直接嵌入 SVG。然而为了符合 HTML5 标准，可能需要做一些语法调整。
   - 可以通过 object 元素引用 SVG 文件：
```xml
<object data="image.svg" type="image/svg+xml" />
```
```xml
<iframe src="image.svg"></iframe>
```

   - 类似的也可以使用 iframe 元素引用 SVG 文件：
   - 理论上同样可以使用 img 元素，但是在低于 4.0 版本的 Firefox 中不起作用。
   - 最后 SVG 可以通过 JavaScript 动态创建并注入到 HTML DOM 中。这样具有一个优点，可以对浏览器使用替代技术，在不能解析 SVG 的情况下，可以替换创建的内容。
#### SVG 文件类型

1. 一般情况使用`.svg`
2. svg文件很大时，使用`.svgz`
#### 上传svg
```xml
Content-Type: image/svg+xml
Vary: Accept-Encoding
```
```xml
Content-Type: image/svg+xml
Content-Encoding: gzip
Vary: Accept-Encoding
```
## 三、坐标定位
![image.png](/images/frontend/image3.png)
```xml
<rect x="0" y="0" width="100" height="100" />
```
定义一个矩形，即从左上角开始，向右延展 100px，向下延展 100px，形成一个 100*100 大的矩形。
```xml
<svg width="200" height="200" viewBox="0 0 100 100">
```
这里定义的画布尺寸是 200*200px。但是，viewBox 属性定义了画布上可以显示的区域：从 (0,0) 点开始，100 宽*100 高的区域。这个 100*100 的区域，会放到 200*200 的画布上显示。于是就形成了放大两倍的效果。
正常情况坐标系统 1 用户像素等于设备上的 1 像素，显示效果跟设备像素有关。
## 四、基本形状
| 矩形 | <rect x="60" y="10" rx="10" ry="10" width="30" height="30"/> | x：矩形左上角的 x 位置
y：矩形左上角的 y 位置
width：矩形的宽度
height：矩形的高度
rx：圆角的 x 方位的半径
ry：圆角的 y 方位的半径 |
| --- | --- | --- |
| 圆形 | <circle cx="25" cy="75" r="20"/> | r：圆的半径
cx：圆心的 x 位置
cy：圆心的 y 位置 |
| 椭圆 | <ellipse cx="75" cy="75" rx="20" ry="5"/> | rx：椭圆的 x 半径
ry：椭圆的 y 半径
cx：椭圆中心的 x 位置
cy：椭圆中心的 y 位置 |
| 线条 | <line x1="10" x2="50" y1="110" y2="150"/>
 | x1：起点的 x 位置
y1：起点的 y 位置
x2：终点的 x 位置
y2：终点的 y 位置 |
| 折线 | <polyline points="60 110, 65 120, 70 115, 75 130, 80 125, 85 140, 90 135, 95 150, 100 145"/>
 | points：点集数列。每个数字用空白、逗号、终止命令符或者换行符分隔开。每个点必须包含 2 个数字，一个是 x 坐标，一个是 y 坐标。所以点列表 (0,0), (1,1) 和 (2,2) 可以写成这样：“0 0, 1 1, 2 2”。 |
| 多边形 | <polygon points="50 160, 55 180, 70 180, 60 190, 65 205, 50 195, 35 205, 40 190, 30 180, 45 180"/>
 | points：点集数列。每个数字用空白符、逗号、终止命令或者换行符分隔开。每个点必须包含 2 个数字，一个是 x 坐标，一个是 y 坐标。所以点列表 (0,0), (1,1) 和 (2,2) 可以写成这样：“0 0, 1 1, 2 2”。路径绘制完后闭合图形，所以最终的直线将从位置 (2,2) 连接到位置 (0,0)。 |
| 路径 | <path d="M 20 230 Q 40 205, 50 230 T 90230"/>
 | d：个点集数列以及其它关于如何绘制路径的信息 |

## 五、路径
path 元素的形状是通过属性[d](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/d)定义的，属性d的值是一个“命令 + 参数”的序列。例如“M 10 10”表示动到的那个点的 x 和 y 轴坐标，坐标为(10，10)，M=>'move to'。它有两种表示方式，一种是用**大写字母**，表示采用绝对定位。另一种是用**小写字母**，表示采用相对定位。
#### 直线命令
| M（M x y或m dx dy） | 画笔移动到一个点，但不会划线 | `<path d="M10 10"/>` |
| --- | --- | --- |
|  L（L x y (or l dx dy)） | 当前位置和新位置（L 前面画笔所在的点）之间画一条线段 | `<path d="M10 10 H 90 V 90 H 10 L 10 10"/>` |
|  H x (or h dx) | 绘制水平线 |  |
|  V y (or v dy) | 绘制垂直线 |  |
|  Z (or z) | 闭合路径 |  `<path d="M10 10 H 90 V 90 H 10 Z" fill="transparent" stroke="black"/>` |


<!-- #### 曲线命令
| C x1 y1, x2 y2, x y (or) c dx1 dy1, dx2 dy2, dx dy | 三次贝塞尔曲线 ，(x1,y1) 是起点的控制点，(x2,y2) 是终点的控制点，(x,y) 表示的是曲线的终点 | <path d="M 10 10 C 20 20, 40 20, 50 10" stroke="black" fill="transparent"/> |
| --- | --- | --- |
| S x2 y2, x y(or)
s dx2 dy2, dx dy
![image.png](https://cdn.nlark.com/yuque/0/2023/png/12654185/1675424610363-7fc1e9e4-fbc1-4f84-84be-68bcd8268738.png#averageHue=%23e3e1e1&clientId=u324ecaa9-91d6-4&from=paste&height=107&id=ued2fedde&originHeight=160&originWidth=190&originalType=binary&ratio=1&rotation=0&showTitle=false&size=11781&status=done&style=none&taskId=ud3c46bf1-38cb-4c2f-a816-cac410df5a1&title=&width=126.66666666666667) | 如果 S 命令跟在一个 C 或 S 命令后面，则它的第一个控制点会被假设成前一个命令曲线的第二个控制点的中心对称点。如果 S 命令单独使用，前面没有 C 或 S 命令，那当前点将作为第一个控制点。 | `<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" stroke="black" fill="transparent"/>
</svg>` |
| Q x1 y1, x y(or)
q dx1 dy1, dx dy
 | 二次贝塞尔曲线 Q，只需要一个控制点，用来确定起点和终点的曲线斜率。 | `<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10 80 Q 95 10 180 80" stroke="black" fill="transparent"/>
</svg>`| -->


