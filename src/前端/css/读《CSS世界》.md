
:::info
💡  CSS 这门语言入门实在是太简单了，常用属性就那么多，且鲜有逻辑，无须算法，熟记各个属性值对应的特性就能上手了，也不知道接下来该怎么走、如何突破现有的瓶颈，于是就产生了迷茫。本书会更加深入的去讲解。
:::

| **书名** | CSS世界 |
| --- | --- |
| **作者** | 张鑫旭 |
| **状态** | 待开始 阅读中 已读完 |
| **简介** | 对有一定基础的人深入的再讲解 |


## 思维导图
> 用思维导图，结构化记录本书的核心观点。

![](/images/frontend/image4.jpeg)

## 一、概述
### 1.1 CSS世界观
在 CSS 世界中，**HTML **是魔法石，选择器就是选择法器，**CSS 属性**就 是魔法师，**CSS 各种属性值**就是魔法师的魔法技能，**浏览器**就是他们所在的“王国”，“王国”会不断 更新法律法规（版本升级），决定是否允许使用新的魔法石（HTML5 新标签新属性），是否允许新的 魔法师入“国籍”（CSS3 新属性），或者允许魔法师使用某些新技能（CSS 新的属性值），以及是否舍 弃某些魔法技能（如 display:run-in）；操作系统就是他们所在的世界，不同的操作系统代表不 同的平行世界，所以，CSS 世界有这么几个比较大的平行世界，即 Windows 世界、OS X 世界以及移 动端的 iOS 世界和 Android 世界。不同世界的浏览器王国的命运不一样，例如，在 OS X 世界中，IE 王国是不存在的，而 Safari 王国却异常强大，但在Windows 世界中，Safari 王国却异常落寞。
### 1.2 世界都是创造出来的
CSS 全称是 Cascading Style Sheets，翻译成中文就是“层叠样式表”，CSS世界的诞生就是为图文信息展示服务的。
### 1.3 CSS 完胜 SVG 的武器**——**流
在 CSS 中写上一段文字，这段文字会自然换行、多行显示，在 SVG 中，文字要自动折行，有点困难。但是现在Web 呈现更加复杂和丰富多彩，SVG迎来春天。
#### 1.3.1 何为“流”
即文档流，类似现实世界的水流，div像水流一样铺满容器，文字图片一次排列，不足则换行。
#### 1.3.2 流是如何影响整个 CSS 世界的

- **擒贼先擒王：** 让HTML默认符合流，其子元素也会符合
- **特殊布局与流的破坏：** 要实现更为复杂的页面需要破坏流
- **流向的改变：** 默认从左向右自上而下，当然也可以更改
#### 1.3.3 什么是流体布局
指的是利用元素“流”的特性实现的各类布局效果
### 1.5 **table**自己的世界
“流”的特性对`<table>`并不适用，它诞生再CSS之前。
## 二、需要提前了解的术语和概念
```css
.vocabulary { 
  height: 99px; 
  color: transparent; 
}
```
| **术语** | **描述** |
| --- | --- |
| 属性 | 属性对应的是平常我们书面或交谈时对 CSS 的中文称谓，上述代码中的color，height |
| 值 | 值的一些类型**整数值**，z-index: 1**数值**，line-height: 1.5**百分比**，width：50%**长度**，单位px**颜色值**，#000000|
| 关键字 | CSS所使用到的英文单词，被它所占用，inherit被称为‘**泛关键字**’，即所有属性都可以使用 |
| 长度单位 | 有px，em等，%不是长度单位，长度单位分为绝对长度单位和相对长度单位**相对长度单位**相对字体长度单位，如em，ex相对视区长度单位，如vw，vh，vmin，vmax**绝对长度单位**常见的`px`，还有pt、cm、pc|
| 功能符 | 值以函数的形式指定，如rgba(0,0,0,.5)、 ** text-here **** text-here **`url('css-world.png')、attr('href')和 scale(-1)` |
| 属性值 | 属性冒号后面的所有内容统一称为属性值。例如，1px solid rgb(0,0,0) |
| 声明 | 属性名加上属性值就是声明，例如： color: transparent; |
| 声明块 | 声明块是花括号（{}）包裹的一系列声明，例如： `{ height: 99px; color: transparent; }`  |
| 规则或规则集 | 出现了选择器，而且后面还跟着声明块，比如本小节一开始的那个例子，就是一个规则集： `.vocabulary {  height: 99px;  color: transparent; }`  |
| 选择器 | 选择器是用来瞄准目标元素的东西**类选择器：**以“.”这个点号**ID 选择器：**以“#”这个点号**属性选择器：**指含有[]的选择器，如[title]{} **伪类选择器：**指前面有个英文冒号（:），如:first-child**伪元素选择器：**有连续两个冒号的选择器，如::first-line，::before|
| 关系选择器  | 关系选择器是指根据与其他元素的关系选择元素的选择器**后代选择器：**空格连接**相邻后代选择器：**仅仅选择合乎规则的儿子元素，>连接**兄弟选择器：**选择当前元素后面的所有合乎规则的兄弟元素，~连接**相邻兄弟选择器：**仅仅选择当前元素相邻的那个合乎规则的兄弟元素，+连接|
| @规则 | @media、@font-face、@page 或者@support |


## 三、流、元素与基本尺寸
HTML 常见的标签分为：块级元素和内联元素
### 3.1 块级元素
常见的块级元素有`<div>`、`<li>`和`<table>`
> 需要注意是，“块级元素”和“display 为 block 的元素”不是一个概念，`<li>`元 素默认的 display是list-item，`<table>`元素默认的 display 值是 table，但是它们均是“块级元素”，因为它们都符合块级元素的基本特征。

正是由于“块级元素”具有换行特性，因此理论上它都可以配合 clear 属性来清除浮动带来的影响。
```css
.clear:after { 
 content: ''; 
 display: table; // 也可以是 block，或者是 list-item 
 clear: both; 
}
```
实际开发时，我们要么使用 block，要么使用 table，并不会使用 list-item，主要有 3 个原因：
- 1 个字符的比较多
- 会出现不需要的项目符号
- IE 浏览器不支持伪元素的 display 值为 list-item。
#### 3.1.1 为什么 **list-item **元素会出现项目符号
原本只有块级盒子（block-level box）和内联盒子，但是出个 list-item，其默认要显示项目符号的，一个盒子解释不了。于是重新命名一个盒子，就叫“**附加盒子**”。所有的“块级元素”都有一个“主块级盒子”，list-item 除此之外还有一个“附加盒子”，学名“标记盒子”（marker box）。
**inline-block**的元素则由外在的“内联盒子”和内在的“块级容器盒子”组成，值为 **inline** 的元素则内外均是“内联盒子”，值为 **block** 的元素的盒子实际由外在的“块级盒子” 和内在的“块级容器盒子”组成。 
为何display属性值是inline-block的元素既能和图文一行显示，又能直接设置 width/height！因为有两个盒子，外面的盒子是 inline 级别，里面的盒子是 block 级别。
#### 3.1.2 **display:inline-table **的盒子是怎样组成的
外面是“内联盒子”，里面是“table 盒子”。得到的就是一个可以和文字在一行中显示的表格。**宽度作用再内在盒子。**
#### 3.1.3 **width/height **作用在哪个盒子上
是**内在盒子**，也就是“容器盒子”。
### 3.2 width/height作用的具体细节

#### 3.2.1 深藏不露的 width:auto

- **充分利用可用空间：** `<div>、<p>`这些元素的宽度默认是 100%于父级容器的
- **收缩与包裹：**典型代表就是浮动、绝对定位、inline-block 元素或 table 元素
- **收缩到最小：**容易出现在 table-layout 为 auto 的表格中，当每一列空间都不够的时候，文字能断就断，但中文是随便断的，英文单词不能断
- **超出容器限制：**上面 3 种情况尺寸不会超过父级容器宽度，除非内容很长的连续的英文和数字，或者内联元素被设置了 white-space:nowrap，

盒子分“内在盒子”和“外在盒子”，显示也分“内部显示”和“外部显示”。尺寸也分“内部尺寸”和“外部尺寸”，表示尺寸由内部元素决定还是外部。
上面第一个，也就是`<div>`默认宽度 100%显示，是“外部尺寸”，其余 全部是“内部尺寸”。

1. **外部尺寸与流体特性**

（1）正常流宽度。在页面中随便扔一个`<div>`元素，其尺寸表现就会和这水流一样铺满容器，块级元素一旦设置了宽度，流动性就丢失了。例子：[链接](http://demo.cssworld.cn/3/2-3.php)
（2）格式化宽度。出现在 position属性值为**absolute** 或 **fixed** 的元素中。在默认情况下，绝对定位元素的宽度表现是“包裹性”，宽度由内部尺寸决定，对于非替换元素（见本书第 4 章），当 left/top 或 top/bottom 对立方位的属性值同时存在的时候，元素的宽度表现为“格式化宽度”，其宽度大小相对于最近的具有定位特性（position 属性值不是 static）的祖先元素计算。
`div { position: absolute; left: 20px; right: 20px; } `
假设该`<div>`元素最近的具有定位特性的祖先元素的宽度是 1000 像素，则这个`<div>`元素的宽度是 960（即 1000−20−20）像素。

2. **内部尺寸与流体特性**

如何快速判断一个元素使用的是否为“内部尺寸”呢？很简单，假如这个元素里面没有内容，宽度就是 0，那就是应用的“内部尺寸”。
（1）包裹性。“包裹性”，除了“包裹”，还有“**自适应性**”(指的是元素尺寸由内部元素决定，但永远小于“包含块”容器的尺寸)。 
按钮就是 CSS 世界中极具代表性的 inline-block 元素，可谓展示“包裹性”最好的例子，具体表现为：按钮文字越多宽度越宽（内部尺寸特性），但如果文字足够多，则会在容器的宽度处自动换行（自适应特性）。
**实际使用：**页面某个模块的文字内容是动态的，可能是几个字，也可能是一句话。希望文字少的时候居中显示，文字超过一行的时候居左显示。
```css
.box { 
 text-align: center; 
} 
.content { 
 display: inline-block; 
 text-align: left; 
}
```

（2）首选最小宽度。指的是元素最适合的最小宽度。假设外部容器的宽度是 0，请问里面的inline-block 元素的宽度是多少？

- 东亚文字（如中文）最小宽度为每个汉字的宽度
- 西方文字最小宽度由特定的连续的英文字符单元决定（终止于空格（普通空格）、短横线、问号以及其他非英文字符）
- 类似图片这样的替换元素的最小宽度就是该元素内容本身的宽度。

**实际使用:**
![image.png](/images/frontend/image5.png)
![image.png](/images/frontend/image6.png)
```css
.ao { 
 display: inline-block; 
 width: 0; 
} 
.ao:before { 
 	content: "love 你 love";
  outline: 2px solid #cd0000; 
 	color: #fff; 
}
```
（3）最大宽度。指元素可以有的最大宽度。 内部没有块级元素或者块级元素没有设定宽度值，则“最大宽度”实际上是最大的连续**内联盒子**的宽度。
![image.png](/images/frontend/image7.png)
![image.png](/images/frontend/image8.png)
此时“**最大宽度**”就是这 3 个连续内联盒子的宽度的最大值。
**实际使用：**[链接](http://demo.cssworld.cn/3/2-7.php)
### 3.2.2 **width **值作用的细节
“内在盒子”又被分成了 4 个盒子，分别是 content box、padding box、border box 
和 margin box。
width:100px 作用在了 content box上，如果再加上padding和border，整体的宽度就会变大。这会导致两种情况。
（1）流动性丢失。
（2）与现实世界表现不一致的困扰。就是设置了width之后再添加padding和border会让盒子变大。如何解决这个问题呢？
#### 3.2.3 CSS 流体布局下的宽度分离原则
```typescript
.father { 
 width: 180px; 
} 
.son { 
 margin: 0 20px; 
 padding: 20px; 
 border: 1px solid; 
}
```
父元素定宽，子元素因为 width 使用的是默认值 auto，所以会如水流般自动填满父级容器。
#### 3.2.4 改变 **width/height **作用细节的 **box-sizing**
默认情况下，width是作用在 content box 上的，box-sizing 的作用就是可以把 width 作用的盒子子变成其他几个padding box、border box 和 margin box（不支持）。
#### 1. **box-sizing **发明的初衷
让`<textarea>`尺寸 100%自适应父容器。`<textarea>`是有 border 的，而且需要有一定的 padding 大小，否则输入的时候光标会顶着边框。
```typescript
input, textarea, img, video, object { 
 box-sizing: border-box; 
}
```
这样用才更合理。
#### 3.2.5 相对简单而单纯的 **height:auto**
CSS 的默认流是水平方向的，宽度是稀缺的，高度是无限的。故height:auto，就是各个盒子高度相加。
#### 3.2.6 关于 **height:100%**
如果父元素height 为 auto，只要子元素在文档流中，其百分比值完全就被忽略了。
```typescript
div { 
 width: 100%; /* 这是多余的 */ 
 height: 100%; /* 这是无效的 */ 
 background: url(bg.jpg); 
} 
```
这个`<div>`高度永远是 0，需要这样设置才行。
```typescript
html, body { 
 height: 100%; 
}
```
并且仅仅设置`<body>`也是不行的，因为此时的`<body>`也没有具体的高度值。
#### 1．为何 height:100%无效
要明白其中的原因要先了解浏览器渲染的基本原理。首先，先下载文档内容，加载头部的样式资源（如果有的话），然后按照从上而下、自外而内的顺序渲染 DOM 内容。套用本例就是，先渲染父元素，后渲染子元素，是有先后顺序的。因此，当渲染到父元素的时候，子元素的width:100%并没有渲染，宽度就是图片加文字内容的宽度；等渲染到文字这个子元素的时候，父元素宽度已经固定，此时的 width:100%就是已经固定好的父元素的宽度。宽度不够怎么办？溢出就好了，overflow 属性就是为此而生的。 
同样的道理，如果 height 支持任意元素 100%，也是不会死循环的。和宽度类似，静态渲染，一次到位。
那问题又来了：为何宽度支持，高度就不支持呢？规范中其实给出了答案。如果包含块的高度没有显式指定（即高度由内容决定），并且该元素不是绝对定位，则计算值为auto。一句话总结就是：因为解释成了 auto。要知道，auto 和百分比计算，肯定是算不了的：'auto' * 100/100 = NaN但是，宽度的解释却是：如果包含块的宽度取决于该元素的宽度，那么产生的布局在 CSS 2.1中是未定义的。
#### 2．如何让元素支持 **height:100%**效果
（1）设定显式的高度值
```typescript
html, body { 
 height: 100%; 
}
```
（2）使用绝对定位
```typescript
div { 
 height: 100%; 
 position: absolute; 
}
```
**注意：**绝对定位的宽高百分比计算是相对于 padding box 的，也就是说会把 padding 大小值计算 
在内，非绝对定位元素则是相对于 content box 计算的。
### 3.3 CSS **min-width/max-width**和**min-height/max-height**
他们专为流体布局而生。
为避免图片过大需要加上如下
```css
img { 
  max-width: 100%; 
  height: auto!important; 
}
```
#### 3.3.2 与众不同的初始值

1. width/height 的默认值是 auto
2. min-width/min-height 的初始值是 auto
3. max-width/max-height的初始值是none
#### 3.3.3 超越**!important**，超越最大
max-width会直接覆盖width，即使它加上了!important。
```css
.container { 
   min-width: 1400px; 
   max-width: 1200px; 
 }
```
当min-width比max-width大时，min-width被保留下来。
#### 3.3.4 任意高度元素的展开收起动画技术
在做一个卡片下拉收缩的动画，由于不知道盒子的高度，默认就是auto，适应内容的高度，这时候不会出现动画。
```css
.element { 
 height: 0; 
 overflow: hidden; 
 transition: height .25s; 
} 
.element.active { 
 height: auto; /* 没有 transition 效果，只是生硬地展开 */ 
}
.element.active { 
 max-height: 666px; /* 一个足够大的最大高度值 */ 
}
```
**注意：**使用max-height一个足够安全的最小值，因为太大会出现动画延迟。
### 3.4 内联元素
#### 3.4.1 幽灵空白节点
在 HTML5 文档声明中，内联元素的所有解析和渲染表现就如同每个行框盒子的前面有一个“空白节点”一样。这个“空白节点”永远透明，不占据任何宽度，看不见也无法通过脚本获取，就好像幽灵一样，但又确确实实地存在，表现如同文本节点一样，因此，我称之为“幽灵空白节点”。
```css
div { 
 background-color: #cd0000; 
} 
span { 
 display: inline-block; 
} 
<div><span></span></div>
```
结果，此`<div>`的高度并不是 0，可以认为在`<span>`元素的前面还有一个宽度为 0 的空白字符。
## 四、盒尺寸四大家族
content、padding、border 和 margin称为“盒尺寸四大家族“。
### 4.1 深入理解 **content**
#### 4.1.1 **content **与替换元素
**替换元素是**通过修改某个属性值呈现的内容就可以被替换的元素，比如`<img src="1.jpg">`中1.jpg改成2.jpg，其他的还包括`<img>、<object>、<video>`、`<iframe>`表单元素`<textarea>`和`<input>`。
它具有以下**特性：**

1. 内容的外观不受页面上的 CSS 的影响
2. 有自己的尺寸
3. 在很多 CSS 属性上有自己的一套表现规则

**以上解释：**

1. 直接 `input[type='checkbox']{}`却无法更改内间距、背景色等样式
2. 没有明确尺寸时默认为300 像素×150 像素，表单则与浏览器有关
3. vertical-align基线为元素的下边缘

替换元素的默认 **display **值

| 元素 | Chrome | Firefox | IE |
| --- | --- | --- | --- |
| `<img>` | inline | inline | inline |
| `<iframe>` | inline | inline | inline |
| `<video>` | inline | inline | inline |
| `<select>` | inline-block | inline-block | inline-block |
| `<input>` | inline-block | inline | inline-block |
| range&#124;file `<input>` | inline-block | inline-block | inline-block |
| hidden `<input>` | none | none | none |
| `<button>` | inline-block | inline-block | inline-block |
| `<textarea>` | inline-block | inline | inline-block |

`<input>`和`<button>`按钮的区别在什么地方?按钮默认的 white-space 值不一样，前者是 pre，后者是 normal，所表示出来的现象差异就是：当按钮文字足够多的时候，`<input>`按钮不会自动换行，`<button>`按钮则会。
**替换元素的尺寸计算规则分为**固有尺寸、HTML 尺寸和 CSS 尺寸。

1. 固有尺寸指的是替换内容原本的尺寸，例如，图片、视频作为一个独立文件存在的时 

候，都是有着自己的宽度和高度，并且不加修饰

2. HTML 尺寸只能通过HTML 原生属性改变，这些 HTML 原生属性包括`<img>`的 width 和 height 属性、`<input>`的 size 属性、`<textarea>`的 cols 和 rows 属性等
3. 可以通过 CSS 的 width 和 height 或者 max-width/min-width 和 max-height/min-height 设置的尺寸

这三个尺寸的**计算规则**如下：

1. 如果没有 CSS 尺寸和 HTML 尺寸，则使用固有尺寸作为最终的宽高
2. 如果没有 CSS 尺寸，则使用 HTML尺寸作为最终的宽高
3. 如果有 CSS 尺寸，则最终尺寸由 CSS 属性决定
4. 如果“固有尺寸”含有固有的宽高比例，同时仅设置了宽度或仅设置了高度，则元素依然按照固有的宽高比例显示
5. 如果上面的条件都不符合，则最终宽度表现为 300 像素，高度为 150 像素，宽高比 2:1
6. 内联替换元素和块级替换元素使用上面同一套尺寸计算规则

如果任何尺寸都没有，则元素应该是 300 像素×150 像素，这条规则`<video>`、`<canvas>`和`<iframe>`这些元素都符合，但是img除外。
`<img> `
这样一个裸露的标签不仅不是这个尺寸，而且各个浏览器下的尺寸还不一样。
**小技巧**
Web 开发的时候，为了提高加载性能以及节约带宽费用，首屏以下的图片就会通过滚屏加载的方式异步加载，然后，这个即将被异步加载的图片为了布局稳健、体验良好，往往会使用一张透明的图片占位。
`<img src="transparent.png"> `
也可以直接
`<img> `
配合CSS
```css
img { visibility: hidden; } 
img[src] { visibility: visible; }
```
其他浏览器没有问题，但是对于 Firefox 浏览器，src 缺省的`<img>`不是替换元素，而是一个普通的内联元素，所以使用的就是替换元素的尺寸规则，而是类似`<span>`的内联元素尺寸规则，宽高会无效。
```css
img { width: 200px; height: 150px; } 
<img>
```
Firefox 浏览器却纹丝不动，依然是默认图片尺寸。
可以直接设置
`img { display: inline-block; }`

CSS 世界中的替换元素的固有尺寸有一个很重要的特性，那就是“**我们是无法改变这个替换元素内容的固有尺寸的”。**
验证：
```css
div:before { 
 content: url(1.jpg); 
 display: block; 
 width: 200px; height: 200px; 
}
```
这里图片的尺寸并没有改变。
那我们设置宽高是如何影响图片的尺寸呢？是因为object-fit这个属性，如果object-fit设置为none，则图片的尺寸不受影响，默认为fill，contain则保持比例图片。
**替换元素和非替换元素的距离有多远**

1. **替换元素和非替换元素之间只隔了一个 src 属性**
```css
img { 
 display: block; 
 outline: 1px solid; 
} 
<img>
```
按照替换元素的尺寸规则，宽度应该是 0，但实际上，在 Firefox 浏览器下，最终的宽度是100%自适应父容器的可用宽度的，它已经是一个内联元素了。
chrome想要触发的话，需要有不为空的 alt 属性值，`<img alt="任意值">`
**证明：**
针对浏览器的兼容性有以下需要注意的：

1. 不能有 src 属性（证明观点的关键所在）
2. 不能使用 content 属性生成图片（针对 Chrome）
3. 需要有 alt 属性并有值（针对 Chrome）
4. Firefox 下::before 伪元素的 content 值会被无视，::after 无此问题，应该与Firefox 自己占用了::before 伪元素的 content 属性有关

代码地址：[链接](http://demo.cssworld.cn/4/1-2.php)
当我们点击按钮给图片添加一个 src 地址时，图片从普通元素变成替换元素，原本都还支持的::before 和::after 此时全部无效，此时再 hover 图片，是不会有任何信息出现的。

2. **替换元素和非替换元素之间只隔了一个 CSS content 属性**

替换元素之所以为替换元素，就是因为其内容可替换，而这个内容就是 margin、border、padding 和content 这 4 个盒子中的 content box，对应的 CSS 属性是 content，所以，从理论层面讲，content 属性决定了是替换元素还是非替换元素。
chrome所有元素都支持content 属性，而其他浏览器仅在::before/::after 伪元素中才有支持。[链接](http://demo.cssworld.cn/4/1-3.php)
```
img { content: url(1.jpg); } 
<img>
```
结果和下面 HTML 的视觉效果一模一样
```
<img src="1.jpg">
```
如果图片原来是有 src 地址的，我们也是可以使用 content 属性把图片内容给置换掉的，于是，我们就能轻松实现 hover 图片变成另外一张图片的效果。[链接](http://demo.cssworld.cn/4/1-4.php)
```
<img src="laugh.png">
img:hover { 
 content: url(laugh-tear.png); 
}
```
使用 content 属性，我们还可以让普通标签元素变成替换元素。
```
<h1>《CSS 世界》</h1> 
h1 { 
 width: 180px; 
 height: 36px; 
 background: url(logo.png); 
 /* 隐藏文字 */ 
 text-indent: -999px; 
}
```
调整，[链接](http://demo.cssworld.cn/4/1-5.php)
```
h1 { 
 content: url(logo.png); 
}
```
可以实现一样的效果。传统 CSS 代码的`<h1>`是一个普通元素，因此需要设定尺寸隐藏文字； 
但是，后面使用 content 属性实现，`<h1>`分分钟就变成了替换元素，文字自动被替换，同时 
尺寸规则就是替换元素的尺寸规则，完美适应原始图片大小。
**缺陷：**替换元素的固有尺寸是无法设置的，如今在移动端 retina 屏幕几乎是标配，为了图片显示细腻，往往真实图片尺寸是显示图片尺寸的两倍，所以使用一倍图，图片会优点模糊。
**解决：**使用svg矢量图
**content 与替换元素关系剖析**
content 属性生成的对象称为“匿名替换元素”，content 属性生成的内容就是替换元素，有一下特性。

1. content 生成的文本是无法选中、无法复制，无法被搜索引擎抓取，无法被屏幕阅读设备读取，SEO 都很不友好，适合无关紧要的内容，如装饰性图形或者序号之类。
2. 不能左右:empty 伪类，:empty 是一个 CSS 选择器，当元素里面无内容的时候进行匹配。[链接](http://demo.cssworld.cn/4/1-6.php)
```
<div>有内容</div>
<div></div>

div { padding: 10px; border: 10px solid #cd0000; } 
div:empty { border-style: dashed; }
前面一个<div>是实线边框，而后面的，因为里面无内容，所以就是虚线边框

div::after { content: "伪元素生成内容"; }
看上去好像<div>里面出现了文字内容，实际上，还是当成了:empty，
```

3. content 动态生成值无法获取，无法通过js获取。
#### 4.1.2 **content **内容生成技术

1. **content 辅助元素生成**

最常用的方法就是清楚浮动。
```css
.clear:after { 
  content: ''; 
  display: table; /* 也可以是'block' */ 
  clear: both; 
}
```
还有一个辅助实现“两端对齐”以及“垂直居中/上边缘/下边缘对齐”效果。
[链接](http://demo.cssworld.cn/4/1-7.php)，**原理**是:before 伪元素用于辅助实现底对齐；:after伪元素用于辅助实现两端对齐。**注意：**HTML 代码需要注意有些地方不能换行或者空格，有些地方则必须要换行或者有空格。

2. **content 字符内容生成**
```css
@font-face { 
 font-family: "myico"; 
 src: url("/fonts/4/myico.eot"); 
 src: url("/fonts/4/myico.eot#iefix") format("embedded-opentype"), 
 url("/fonts/4/myico.ttf") format("truetype"), 
 url("/fonts/4/myico.woff") format("woff"); 
} 
.icon-home:before { 
 font-size: 64px; 
 font-family: myico; 
 content: "家"; 
} 
<span class="icon-home"></span>
```
[链接](http://demo.cssworld.cn/4/1-8.php)
```css
:after { 
 content: '\A'; 
 white-space: pre; 
}
'\A'其实指的是换行符中的 LF 字符，其 Unicode编码是 000A，在 CSS 的 content 属性中则直接写作'\A'
```
可以使用这个功能实现一个加载动画，[链接](http://demo.cssworld.cn/4/1-9.php)，原理就是插入 3 行内容，分别是 3 个点、2 个点和 1个点，然后通过 transform 控制垂直位置。

3. **content 图片生成**

content 图片生成指的是直接用 url 功能符显示图片
```css
div:before { 
 content: url(1.jpg); 
}
```
png、jpg 格式，还可以是 ico 图片、svg文件以及 base64URL，不支持CSS3 渐变背景图。
由于使用content技术没有尺寸限制，都是尺寸为 0，页面会出现晃动，base64 图片由于内联在 CSS 文件中，因此直接出现，没有尺寸为 0 的状态，CSS 代码更省。[链接](http://demo.cssworld.cn/4/1-10.php)

4. **了解 content 开启闭合符号生成**
```css
<p lang="ch"><q>这本书很赞！</q></p> 
<p lang="en"><q>This book is very good!</q></p> 
<p lang="no"><q>denne bog er fantastisk!</q></p> 
/* 为不同语言指定引号的表现 */ 
:lang(ch) > q { quotes: '“' '”'; } 
:lang(en) > q { quotes: '"' '"'; } 
:lang(no) > q { quotes: '«' '»'; } 
/* 在 q 标签的前后插入引号 */ 
q:before { content: open-quote; } 
q:after { content: close-quote; }
```
![image.png](/images/frontend/image9.png)
它的替代方案太多，所以目前使用较少。

1. **content attr 属性值内容生成**
```css
img::after { 
 /* 生成 alt 信息 */ 
 content: attr(alt); 
 /* 其他 CSS 略 */ 
}
也可以用自定义的 HTML 属性
content: attr(data-title)
```
**注意：**不能添加引号，`content: attr('url')`是错误的

1. **深入理解 content 计数器**

CSS 计数就跟我们军训报数一样。其中有这么几个关键点。
（1）班级命名：有个称呼，如生信 4 班，就知道谁是谁了。 
（2）报数规则：1、2、3、4 递增报数，还是 1、2、1、2 报数，让班级的人知道。 
（3）开始报数：不发口令，大眼瞪小眼，会乱了秩序。
正好对应下面几个属性或者方法。

1. **属性 counter-reset**，“计数器-重置”，主要作用就是给计数器起个名字，顺便告诉下从哪个数字开始计数，默认为0。[链接](http://demo.cssworld.cn/4/1-11.php)
```css
/* 计数器名称是'wangxiaoer', 并且默认起始值是 2 */ 
.xxx { counter-reset: wangxiaoer 2; }
```
可以是负数，也可以是小数，IE和firefox不认识。
还可以命名多个计数器。[链接](http://demo.cssworld.cn/4/1-12.php)
```css
.xxx { counter-reset: wangxiaoer 2 wangxiaosan 3; }
```
counter-reset 还可以设置为 none 和 inherit。取消重置以及继承重置。

2. **属性 counter-increment，**“计数器递增”，值为 counter-reset 的 1 个或多个关键字，后面可以跟随数字，表示每次计数的变化值。

计数规则我们称为”**普照规则**“，意味普照源（counter-reset）唯一，每普照（counter-increment）一次，普照源增加一次计数值。
[链接](http://demo.cssworld.cn/4/1-13.php)。counter-increment 普照了`<p>`标签，counter-reset 值增加，默认递增 1，于是计数从设置的初始值 2 变成了 3，wangxiaoer 就是这里的计数器，自然伪元素 content值 counter(wangxiaoer)就是 3。
如果父子元素呢？父元素 1 次普照，子元素 1 次普照，共 2 次普照，counter-reset 设置的计数器值增加 2 次，计数起始值是 2，于是现实的数字就是 4 啦！[链接](http://demo.cssworld.cn/4/1-14.php)。
**总而言之，无论位置在何处，只要有 counter-increment，对应的计数器的值就会变化。**[**链接**](http://demo.cssworld.cn/4/1-15.php)**。**
**其他的一些属性:**

- counter-reset 可以一次命名两个计数器名称，counter-increment 自然有与之呼应的设定
```css
.counter {
counter-reset: wangxiaoer 2 wangxiaosan 3; 
counter-increment: wangxiaoer wangxiaosan; 
 } 
 .counter:before { 
content: counter(wangxiaoer); 
 } 
 .counter:after { 
content: counter(wangxiaosan); 
 }
```

- 变化的值不一定是 1，可以灵活设置。
```css
counter-increment: counter 2
还可以是负数
counter-increment: counter -1
```

3. **方法 counter()/counters()，**即显示计数。
```css
/* name 就是 counter-reset 的名称 */ 
counter(name)
```
counter(name, style) ，style为我们递增递减可以不一定是数字，还可以是英文字母或者罗马文等。
**list-style-type：**disc | circle | square | decimal | lower-roman | upper-roman | 
lower-alpha | upper-alpha | none | armenian | cjk-ideographic | georgian | lower-greek 
| hebrew | hiragana | hiragana-iroha | katakana | katakana-iroha | lower-latin | upper-latin 
[链接](http://demo.cssworld.cn/4/1-16.php)，`content: counter(wangxiaoer, lower-roman); `
**counter 还支持级联，**[**链接**](http://demo.cssworld.cn/4/1-17.php)
```css
.counter { counter-reset: wangxiaoer 2 wangxiaosan 3; } 
.counter:before { 
 content: counter(wangxiaoer) '\A' counter(wangxiaosan); 
 white-space: pre; 
}
```
`counters(name, string);`string 参数为字符串（需要引号包围的，是必需参数），例如1.1 的 string 就是'.'，1-1 就是'-'。
> 注意：记住这一句话：“**普照源是唯一的**。”所以，如果只在`<body>`标签上设置 counter-reset，就算子元素嵌套了里外十八层，还是不会有任何嵌套序号出现！所以，要想实现嵌套，必须让每一个列表容器拥有一个“普照源”，通过子辈对父辈的 counter-reset 重置、配合 counters()方法才能实现计数嵌套效果。[链接](http://demo.cssworld.cn/4/1-18.php)，[链接](http://demo.cssworld.cn/4/1-19.php)

counters()也是支持 style 自定义递增形式的：`counters(name, string, style)`。
还有一个比较重要的点需要说明一下，就是显示 content 计数值的那个 DOM 元素在文档流中的位置一定要在 counter-increment元素的后面，否则是没有计数效果的。

7. **content 内容生成的混合特性**

指的是各种 content 内容生成语法是可以混合在一起使用的。
### 4.2 温和的 **padding **属性
#### 4.2.1 **padding **与元素的尺寸
padding 会增加元素的尺寸
```css
.box { 
 width: 80px; 
 padding: 20px; 
}
```
.box 元素所占据的宽度就应该是 120 像素（80px +20px×2），因此大部分人习惯设置`* { box-sizing: border-box; }`，如果 padding 值足够大，那么 width 也无能为力了。
```css
.box { 
 width: 80px; 
 padding: 20px 60px; 
 box-sizing: border-box; 
}
```
此时的 width 会无效，最终宽度为 120 像素（60px×2），而里面的内容则表现为“首选最小宽度”。
[链接](http://demo.cssworld.cn/4/2-1.php)，在垂直方向可以明显看到，尺寸虽有效，但是对上下元素的原本布局却没有任何影响，仅仅是垂直方向发生了层叠。
其他属性会出现层叠的有relative 元素的定位、盒阴影 box-shadow 以及 outline，box-shadow 以及 outline属于纯视觉层叠，不影响外部尺寸，内联元素的padding 层叠属于会影响外部尺寸。区分：父容器添加overflow:auto，没有滚动条出现，则是纯视觉的；出现滚动条，则会影响尺寸。
![image.png](/images/frontend/image10.png)
![image.png](/images/frontend/image11.png)
利用padding制作分隔符，[链接](http://demo.cssworld.cn/4/2-2.php)。
**使用技巧：**
网页通过地址栏的 hash 值和页面 HTML 中 id 值一样的元素发生锚点定位，如果希望距离顶部一定距离，可以给内联元素设置padding。
原理：
```css
<h3 id="hash">标题</h3> 
h3 { 
 line-height: 30px; 
 font-size: 14px; 
}
```
改成：
```css
<h3><span id="hash">标题</span></h3> 
h3 { 
 line-height: 30px; 
 font-size: 14px; 
} 
h3 > span { 
 padding-top: 58px; 
}
```
#### 4.2.2 **padding **的百分比值
padding 属性是不支持负值，padding 百分比值无论是水平方向还是垂直方向均是相对于**宽度**计算的。
在适配宽高比时有起效，[链接](http://demo.cssworld.cn/4/2-3.php)
```css
.box { 
 padding: 10% 50%; 
 position: relative; 
} 
.box > img { 
 position: absolute; 
 width: 100%; height: 100%; 
 left: 0; top: 0; 
}
```
如果是作用于内联元素则：

- 同样相对于宽度计算； 
- 默认的高度和宽度细节有差异； 
- padding 会断行。
```css
断行问题会出现诡异效果
.box { 
 border: 2px dashed #cd0000; 
} 
span { 
 padding: 50%; 
 background-color: gray; 
} 
<span>内有文字若干</span>
```
当给一个空的内联元素`<span>`，最终效果的宽度和高度是**不相等**，这是由于内联元素的垂直 padding 会让“幽灵空白节点”显现，解决方法：设置font-size: 0;
#### 4.2.3 标签元素内置的 **padding**

1. ol/ul 列表内置 padding-left，是px而非em。列表中的 font-size 大小很小，项目符号左边缘距离很开，font-size 比较大，项目符号可能跑到`<ul>/<ol>`元素的外面。font-size 是 12px 至 14px 时，22px为padding-left的优值
2. 很多表单元素都内置 padding
- 所有浏览器`<input>/<textarea>`输入框内置 padding
- 所有浏览器`<button>`按钮内置 padding； 
- 部分浏览器`<select>`下拉内置 padding，如 Firefox、IE8 及以上版本浏览器可以设置 padding； 
- 所有浏览器`<radio>/<chexkbox>`单复选框无内置 padding； 
- `<button>`按钮元素的 padding 最难控制！

`button { padding: 0; }`，Chrome 浏览器下padding变成了0，但是firefox仍然有，如果使用`button::-moz-focus-inner { padding: 0; }`则没有了。
按钮 padding 与高度计算不同浏览器下千差万别
```css
button { 
 line-height: 20px; 
 padding: 10px; 
 border: none; 
}
```
在 Chrome 浏览器下是预期的 40 像素，然而 Firefox 浏览器下是莫名其妙的 42 像素，在IE7 浏览器下更是匪夷所思的 45 像素，为了统一使用以下方法。
```css
<button id="btn"></button> 
<label for="btn">按钮</label> 
button { 
 position: absolute; 
 clip: rect(0 0 0 0); 
} 
label { 
 display: inline-block; 
 line-height: 20px; 
 padding: 10px; 
}
```
#### 4.2.4 **padding **与图形绘制

1. “三道杠”分类图标效果
```css
.icon-menu { 
 display: inline-block; 
 width: 140px; height: 10px; 
 padding: 35px 0; 
 border-top: 10px solid; 
 border-bottom: 10px solid; 
 background-color: currentColor; 
 background-clip: content-box; 
}
```

2. 双层圆点效果

![image.png](/images/frontend/image12.png)
```css
.icon-dot { 
 display: inline-block; 
 width: 100px; height: 100px; 
 padding: 10px; 
 border: 10px solid; 
 border-radius: 50%; 
 background-color: currentColor; 
 background-clip: content-box; 
}
```
[代码链接](http://demo.cssworld.cn/4/2-4.php)
### 4.3 激进的 **margin **属性
#### 4.3.1 **margin **与元素尺寸以及相关布局

1. **各类“尺寸”命名**
- 元素尺寸：offsetWidth，offsetHeight，不包括 padding 和 border
- 元素内部尺寸：clientWidth 和 clientHeight，包括 padding 但不包括 border
- 元素外部尺寸：不仅包括 padding 和 border，还包括 margin，也就是元素的 margin box 的尺寸，没有原生api

“外部尺寸”尺寸的大小有可能是负数。

2. **margin 与元素的内部尺寸**

margin 对尺寸没有影响，只有元素是“充分利用可用空间”状态的时候，margin 才可以改变元素的可视尺寸。
```json
.father { 
 width: 300px; 
 margin: 0 -20px; 
}
```
此时尺寸不变，但是
```json
<div class="father"> 
 <div class="son"></div> 
</div> 
.father { width: 300px; } 
.son { margin: 0 -20px; }
```
.son 元素的宽度就是 340 像素了。
以下是一些布局，[链接](http://demo.cssworld.cn/4/3-1.php)，在解决一下布局的时候可以用到。
**需求**：列表块两端对齐，一行显示 3 个，中间有 2 个 20 像素的间隙
```json
li { 
 float: left; 
 width: 100px; 
 margin-right: 20px; 
}
```
![image.png](/images/frontend/image13.png)
右侧无法对齐，可以使用margin增加可用宽度。
```css
ul { 
  margin-right: -20px; 
} 
ul > li { 
  float: left; 
  width: 100px; 
  margin-right: 20px; 
}
```

1. **margin 与元素的外部尺寸**

(1)、技巧一 ===> 增加底部留白
```css
<div style="height:100px; padding:50px 0;"> 
 <img src="0.jpg" height="300"> 
</div>
```
这种写法firefox、IE浏览器不会有留白，chrome会有。
```css
<div style="height:200px;"> 
 <img height="300" style="margin:50px 0;"> 
</div>
```

这种写法都会有留白。
(2)、技巧二 ===> 等高布局，[链接](http://demo.cssworld.cn/4/3-2.php)
```css
.column-box { 
 overflow: hidden; 
} 
.column-left, 
.column-right { 
 margin-bottom: -9999px; 
 padding-bottom: 9999px; 
}
```
**原理**：垂直方向 margin 无法改变元素的内部尺寸，但却能改变外部尺寸，这里我们设置了margin-bottom:-9999px 意味着元素的外部尺寸在垂直方向上小了 9999px。默认情况下，垂直方向块级元素上下距离是 0，一旦 margin-bottom:-9999px 就意味着后面所有元素和上面元素的空间距离变了-9999px，也就是后面元素都往上移动了 9999px。padding-bottom:9999px 也可以用 border-bottom: 9999px 
solid transparent 代替。**table-cell 也可以实现等高布局**。
#### 4.3.2 **margin **的百分比值
和 padding 属性一样，margin 的百分比值无论是水平方向还是垂直方向都是相对于**宽度**计算 
的。
#### 4.3.3 正确看待 CSS 世界里的 margin 合并
（1）块级元素，但不包括浮动和绝对定位元素，尽管浮动和绝对定位可以让元素块状化。
（2）只发生在垂直方向，需要注意的是，这种说法在不考虑 writing-mode 的情况下才是正确的，严格来讲，应该是只发生在和当前文档流方向的相垂直的方向上。由于默认文档流是水平流，因此发生 margin 合并的就是**垂直方向。**
##### margin 合并的 3 种场景
（1）相邻兄弟元素 margin 合并。
（2）父级和第一个/最后一个子元素。
**如何清除margin合并**
对于 margin-top 合并，可以进行如下操作（满足一个条件即可）：
• 父元素设置为块状格式化上下文元素；(父元素添加overflow:hidden)
• 父元素设置 border-top 值；
• 父元素设置 padding-top 值；
• 父元素和第一个子元素之间添加内联元素进行分隔。
对于 margin-bottom 合并，可以进行如下操作（满足一个条件即可）：
• 父元素设置为块状格式化上下文元素；
• 父元素设置 border-bottom 值；
• 父元素设置 padding-bottom 值；
• 父元素和最后一个子元素之间添加内联元素进行分隔；
• 父元素设置 height、min-height 或 max-height。
（3）空块级元素的 margin 合并
```
.father { overflow: hidden; } 
.son { margin: 1em 0; } 
<div class="father"> 
 <div class="son"></div> 
</div>
```
此时垂直方向的上下 margin 值合二为一了。
##### margin 合并的计算规则
口诀：**“正正取大值”“正负值相加”“负负最负值“。**
#### 4.3.4 深入理解 CSS 中的 margin:auto
（1）如果一侧定值，一侧 auto，则 auto 为剩余空间大小。
（2）如果两侧均是 auto，则平分剩余空间。
```css
.father { 
  width: 300px; 
} 
.son { 
  width: 200px; 
  margin-right: 80px;
  margin-left: auto; // 此时计算后为20px
}
.son { 
  width: 200px; 
  margin-left: auto; // 此时可以右对齐
}
```
```css
// 垂直居中对齐
.father { 
  width: 300px; height:150px; 
  position: relative; 
}
.son { 
  position: absolute; 
  top: 0; right: 0; bottom: 0; left: 0; 
  width: 200px; height: 100px; 
  margin: auto; 
}
```
#### 4.3.5 margin 无效情形解析

1. display 计算值 inline 的非替换元素的垂直 margin 是无效的
2. 表格中的`<tr>`和`<td>`元素或者设置 display 计算值是 table-cell 或 table-row 的元素的 margin 都是无效的
3. margin 合并的时候，更改 margin 值可能是没有效果的
4. 绝对定位元素非定位方位的 margin 值“无效“
5. 定高容器的子元素的 margin-bottom 或者宽度定死的子元素的 margin-right 的定位“失效”
6. 鞭长莫及导致的 margin 无效
7. 内联特性导致的 margin 无效 
### 4.4 功勋卓越的 border 属性
#### 4.4.1 为什么 border-width 不支持百分比值
原因是因为边框不会随着内容变大而变大。
border-width 还支持若干关键字：

- thin：薄薄的，等同于 1px
- medium（默认值）：薄厚均匀，等同于 3px
- thick：厚厚的，等同于 4px
#### 4.4.2 了解各种 border-style 类型

1. **border-style:none**

重置边框，div { border: solid; } /* 有边框出现 */
div { 
 border: 1px solid; 
 border-bottom: 0 none; 
}
这样写渲染性能最高。

2. border-style:solid	实线边框
3. border-style:dashed	虚线
4. border-style:dotted	圆点
5. border-style:double	双实线
```css
.icon-menu { // 实现3条杠的效果
 width: 120px; 
 height: 20px; 
 border-top: 60px double; 
 border-bottom: 20px solid; 
} 
```

6. border-style: inset（内凹）、outset（外凸）、groove（沟槽）、ridge（山脊）兼容性比较差
#### 4.4.3 border-color 和 color
border-color 默认颜色就是**color 色值，当没有指定 border-color 颜色值的时候，会使用当前元素的color 计算值作为边框色。**
outline、box-shadow 和 text-shadow也具有相同的效果。[变色实例](https://demo.cssworld.cn/4/4-1.php)
#### 4.4.4 border 与透明边框技巧
border-color: transparent可以设置边框透明。有以下技巧：

1. 右下方 background 定位的技巧

例如现在有一个宽度不固定的元素，我们需要在距离右边缘 50 像素的位置设置一个背景图片。
```css
.box {
  border-right: 50px solid transparent;
  background-position: 100% 50%;
}

```

2. 优雅地增加点击区域大小

[示例](http://demo.cssworld.cn/4/4-2.php)

3. 绘制三角形
```css
div { 
 width: 0; 
 border: 10px solid; 
 border-color: #f30 transparent transparent; 
}
```
#### 4.4.5 border 与图形构建
```css
div {  // 实现梯形
 width: 10px; height: 10px; 
 border: 10px solid; 
 border-color: #f30 transparent transparent; 
}
div { // 实现三角形
 width: 0; 
 border: 10px solid; 
 border-color: #f30 transparent transparent; 
}
div { // 更长的三角形
 width: 0; 
 border-width: 10px 20px; 
 border-style: solid; 
 border-color: #f30 #f30 transparent transparent; 
}
```
[实现圆角示例](https://demo.cssworld.cn/4/4-3.php)
#### 4.4.6 border 等高布局技术
[示例链接](https://demo.cssworld.cn/4/4-4.php)
## 五、内联元素与流
### 5.1 字母 x
#### 5.1.1 字母 x 与 CSS 世界的基线
字母 x 的下边缘（线）就是我们的基线。
![image.png](/images/frontend/image14.png)
#### 5.1.2 字母 x 与 CSS 中的 x-height 
x-height 指的就是小写字母 x 的高度，术语描述就是基线和等分线（mean line）（也称作中线，midline）之间的距离。
![image.png](/images/frontend/image15.png)
• ascender height: 上下线高度。
• cap height: 大写字母高度。
• median: 中线。
• descender height: 下行线高度
verticalalign:middle。这里的 middle 是中间的意思。注意，跟上面的 median（中线）不是一个意思，middle 指的是基线往上 1/2 x-height 高度。
vertical-align:middle 并不是绝对的垂直居中对齐，我们平常看到的middle 效果只是一种近似效果。原因很简单，因为不同的字体在行内盒子中的位置是不一样的，比如，“微软雅黑”就是一个字符下沉比较明显的字体，所有字符的位置都比其他字体要偏下一点儿。也就是说，“微软雅黑”字体的字母 x 的交叉点是在容器中分线的下面一点。此时，上图x-height 示意我们就不难理解为什么 vertical-align:middle 不是相对容器中分线对齐的了，因为在毕竟 CSS 世界中文字内容是主体，所以，对于内联元素垂直居中应该是对文字，而非居外部的块级容器所言。
#### 5.1.3 字母 x 与 CSS 中的 ex
ex 是 CSS 中的一个相对单位，指的是小写字母 x 的高度。其中一个作用就是**图标和文字对齐**。
```css
.icon-arrow { 
 display: inline-block; 
 width: 20px; 
 height: 1ex; 
 background: url(arrow.png) no-repeat center;
}
```
[示例链接](https://demo.cssworld.cn/5/1-1.php)
### 5.2 内联元素的基石 line-height
默认空`<div>`高度是 0，加上文字之后有了高度本质上是由 line-height 属性全权决定的，而不是font-size。
[示例链接](https://demo.cssworld.cn/5/2-1.php)
对于非替换元素的**纯内联元素**，其可视高度完全由 line-height 决定。
```css
.test { // 字体一定要是宋体，内容区域和 em-box 是等同的
 font-family: simsun; 
 font-size: 24px; 
 line-height: 36px; 
 background-color: yellow; 
} 
.test > span { 
 background-color: white; 
} 
<div class="test"> 
 <span>sphinx</span> 
</div>
```
![image.png](/images/frontend/image16.png)
内容区域和 em-box 是不一样的，内容区域高度受 font-family 和font-size 双重影响，而 em-box 仅受 font-size 影响，通常内容区域高度要更高一些，**行距 = line-height - font-size**。
> 在还原设计稿时，假设 line-height 是 1.5，font-size 大小是 14px，那么我们的半行距大小就是（套用上面的行距公式再除以 2）：(14px * 1.5 - 14px) / 2 = 14px * 0.25 = 3.5px。border 以及 line-height 等传统 CSS 属性并没有小数像素的概念（从 CSS3 动画的细腻程度可以看出），因此，这里的 3.5px 需要取整处理，如果标注的是文字上边距，则向下取整；如果是文字下边距，则向上取整，因为绝大多数的字体在内容区域中都是偏下的。所以，假设设计师标注了文字字形上边缘到图片下边缘间距 20px，则我们实际的 margin-top 值应该是 17px，因为 3.5px 向下取整是 3px。

当line-height设为 2 的时候，半行距是一半的文字大小，两行文字中间的间隙差不多一个文字尺寸大小；如果 line-height 大小是 1 倍文字大小，则根据计算，半行距是 0，也就是两行文字会紧密依偎在一起；如果 line-height 值是 0.5，则此时的行距就是负值，虽然 line-height 不支持负值，但是行距可以为负值，此时，两行文字就是重叠纠缠在一起。[链接](https://demo.cssworld.cn/5/2-3.php)

- 替换元素
```css
.box { 
 line-height: 256px; 
} 
<div class="box"> 
 <img src="1.jpg" height="128"> 
</div>
```
图片为内联元素，会构成一个“行框盒子”，而在 HTML5 文档模式下，每一个“行框盒子”的前面都有一个宽度为 0 的“幽灵空白节点“，是它把盒子变高了。
内联替换元素和内联非替换元素在一起时，会共同形成一个“行框盒子”，line-height 在这个混合元素的“行框盒子”中扮演的角色是决定这个行盒的最小高度，是由于有vertical-align的影响。

- 块级元素

line-height 对其本身是没有任何作用的，我们平时改变 line-height，块级元素的高度跟着变化实际上是通过改变块级元素里面内联级别元素占据的高度实现的。
#### 5.2.2 为什么 line-height 可以让内联元素“垂直居中”
```css
.title { 
 height: 24px; 
 line-height: 24px; 
}
```
上面的代码可以使文字垂直居中，但是有以下问题：

1. .title {  line-height: 24px; }使用line-height就可以实现，不需要使用height
2. 其实为近似居中，而不是真正的居中
```css
p { 
 font-size: 80px; 
 line-height: 120px; 
 background-color: #666; 
 font-family: 'microsoft yahei'; 
 color: #fff; 
} 
<p>微软雅黑</p>
```
当文字较大时就没有居中，原因是“行距的上下等分机制"。
多行文本垂直居中：[示例链接](https://demo.cssworld.cn/5/2-4.php)
```css
.box { 
 line-height: 120px; 
 background-color: #f0f3f9; 
} 
.content { 
 display: inline-block; 
 line-height: 20px; 
 margin: 0 20px; 
 vertical-align: middle; 
} 
<div class="box"> 
 <div class="content">基于行高实现的...</div> 
</div>
```
#### 5.2.3 深入 line-height 的各类属性值
line-height 的默认值是 normal，还支持数值、百分比值以及长度值。
默认值normal跟字体font-family有关，不同的字体值都不一样。

- 数值，如 line-height:1.5，其最终的计算值是和当前 font-size 相乘后的值。例如，假设我们此时的 font-size 大小为 14px，则 line-height 计算值是1.5*14px=21px。 
- 百分比值，如 line-height:150%，其最终的计算值是和当前 font-size 相乘后的值。例如，假设我们此时的 font-size 大小为 14px，则 line-height 计算值是150%*14px=21px。 
- 长度值，也就是带单位的值，如 line-height:21px 或者 line-height:1.5em等，此处 em 是一个相对于 font-size 的相对单位，因此，line-height:1.5em最终的计算值也是和当前font-size相乘后的值。例如，假设我们此时的font-size大小为 14px，则 line-height 计算值是 1.5*14px=21px。

似乎 line-height:1.5、line-height:150%和 line-height:1.5em 这 3 种用法是一模一样的，但是第一种和后两种有些许不同。
**如果使用数值作为 line-height 的属性值，那么所有的子元素继承的都是这个值；但是，如果使用百分比值或者长度值作为属性值，那么所有的子元素继承的是最终的计算值。**
[**示例链接**](http://demo.cssworld.cn/5/2-5.php)
> line-height:150%和 line-height:1.5em 代码下的文字重叠的原因在于`<h3>`和`<p>`元素继承的并不是 150%或者 1.5em，而是`<body>`元素的 line-height 计算值 21px，`<h3>`和`<p>`元素的行高都是21px，考虑到`<h3>`的 font-size 大小为 32px，此时`<h3>`的半行间距就是-5.5px。
> line-height:1.5 的继承则不同，`<h3>`和`<p>`元素的 line-height 继承的不是计算值，而是属性值 1.5，因此，对于`<h3>`元素，此时的行高计算值是 1.5*32px=48px，`<p>`元素的行高计算值是 1.5*20px=30px。

*{ line-height: 150%; }，添加通配符也可以实现相同效果，它会重置所有的line-height。
> 重图文内容展示的网页，如博客、论坛使用数值，设置在1.6	～1.8，排版最舒服；如果是偏布局，使用长度或数值，长度建议使用20px。

#### 5.2.4 内联元素 line-height 的“大值特性”
```css
<div class="box"> 
 <span>内容...</span> 
</div>
.box { 
 line-height: 96px; 
} 
.box span { 
 line-height: 20px; 
} 
和
.box { 
 line-height: 20px; 
} 
.box span { 
 line-height: 96px; 
}
```
上面.box 元素的高度都是96px高，**无论内联元素 line-height 如何设置，最终父级元素的高度都是由数值大的**
**那个 line-height 决定的，我称之为“内联元素 line-height 的大值特性”**。
> 第一个之所以会是96，是因为内联元素有幽灵空白节点，只要把span{display:inline-block}，变成独立的行狂盒子，就可以避免这种效果。

### 5.3 line-height 的好朋友 vertical-align
```css
.box { line-height: 32px; } 
.box > span { font-size: 24px; } 
<div class="box"> 
 x<span>文字x</span> 
</div>
```
这里box的高度并不是32px，是因为受vertical-align的影响。
> 由于存在幽灵节点，两处的X的font-size并不一致，font-size 越大字符的基线位置越往下，因为文字默认全部都是基线对齐，所以当字号大小不一样的两个文字在一起的时候，彼此就会发生上下位移，如果位移距离足够大，就会超过行高的限制，而导致出现意料之外的高度

#### 5.3.1 vertical-align 家族基本认识
它的值分为4类：

-  线类，如 baseline（默认值）、top、middle、bottom； 
-  文本类，如 text-top、text-bottom； 
- 上标下标类，如 sub、super； 
- 数值百分比类，如 20px、2em、20%等。

默认值为vertical-align:baseline，等同于vertical-align:0，沿着字母 x 的下边缘对齐的，设置数值则是相对于基线上移或者下移。
百分比则是相对于**line-height**来计算的，实际使用并不多。
#### 5.3.2 vertical-align 作用的前提
vertical-align 属性只能作用在 display 计算值为 **inline、inlineblock，inline-table 或 table-cell** 的元素上。但是其实属性可能会改变display的值，导致失效。
```css
.example { 
 float: left; 
 vertical-align: middle; /* 没有作用 */ 
} 
.example { 
 position: absolute; 
 vertical-align: middle; /* 没有作用 */ 
}
```
 这种情况
```css
.box { 
 height: 128px; 
 line-height: 128px; /* 关键 CSS 属性，没有这行则不生效 */
} 
.box > img { 
 height: 96px; 
 vertical-align: middle; 
} 
<div class="box"> 
 <img src="1.jpg"> 
</div>
```
这是因为行框盒子前面的“幽灵空白节点”高度太小。

#### 5.3.3 vertical-align 和 line-height 之间的关系
![image.png](/images/frontend/image17.png)
```css
.box { 
 width: 280px; 
 outline: 1px solid #aaa; 
 text-align: center; 
} 
.box > img { 
 height: 96px; 
}
<div class="box"> 
 <img src="1.jpg"> 
</div>
```
会发现图片并没有贴合底部，是因为有幽灵节点的问题，图中x有向下的半行距，图片又是对齐基线，要去除的话可以使用：

1. 图片块状化
2. 容器设置 line-height:0
3. font-size:0
4. vertical-align: bottom

```css
<div class="box"> 
 <img src="mm1.jpg"> 
</div> 
.box > img { 
 height: 96px;
 margin-top: -200px;
}
```
这个例子中，margin会失效，按常理图片应该跑到外面去了，但是并没有，和上面一样，也是因为有幽灵节点，它不可能会跑到外面去。
#### 5.3.4 深入理解 vertical-align 线性类属性值
一个 inline-block 元素，如果里面没有内联元素，或者 overflow 不是 visible，则该元素的基线就是其 margin 底边缘；否则其基线就是元素里面最后一行内联元素的基线
 [示例链接](https://demo.cssworld.cn/5/3-6.php)
## 六、流的破坏与保护
### 6.1 魔鬼属性 float
### 6.1.1 float 的本质与特性
float的本质就是实现文字环绕效果。
## 七、CSS 世界的层叠规则
z-index 属性只有和定位元素（position 不为 static 的元素）在一起的时候才有作用，可以是正数也可以是负数。
#### 7.2.1 什么是层叠上下文
用户正面向（浏览器）视窗或网页，而 HTML 元素沿着其相对于用户的一条虚构的 z 轴排开，层叠上下文就是对这些 HTML 元素的一个三维构想。
#### 7.2.2 什么是层叠水平
层叠水平，决定了同一个层叠上下文中元素在 z 轴上的显示顺序，层叠水平和 CSS 的 z-index 属性不可混为一谈。
### 7.3 理解元素的层叠顺序
表示元素发生层叠时有着特定的垂直显示顺序。
![image.png](/images/frontend/image18.png)