### 1. swiper圆角真机上不显示
> **小程序bug**，居然还没修复，在css设置如下

```
.swiper{ width: 100%; height: 100%; border-radius: 20rpx; overflow: hidden; transform: translateY(0);
```

### 2. input去除阴影
```
input{
    border:none;
    -webkit-appearance:none;/*去除阴影边框*/
    outline: none;
    -webkit-tap-highlight-color:rgba(0,0,0,0);/*点击高亮的颜色*/
 }
```

### tinymce表单编辑
需要加上v-if，否则可能出不来

```
<tinymce v-if="dialogFormVisible1" ref="cleanArticle" v-model="formProduct.topNav2" />
```

### 在页面中使用 behaviors
页面可以引用 behaviors 。 behaviors 可以用来让多个页面有相同的数据字段和方法。
```
// my-behavior.js
module.exports = Behavior({
  data: {
    sharedText: 'This is a piece of data shared between pages.'
  },
  methods: {
    sharedMethod: function() {
      this.data.sharedText === 'This is a piece of data shared between pages.'
    }
  }})
// page-a.js
var myBehavior = require('./my-behavior.js')Page({
  behaviors: [myBehavior],
  onLoad: function() {
    this.data.sharedText === 'This is a piece of data shared between pages.'
  }})
```

- 可以使用 getCurrentPages() 函数获取当前页面栈

### 路由方式

1. 打开新页面  wx.navigateTo 或者 
2. 页面重定向 wx.redirectTo
3. 页面返回 wx.navigateBack
4. Tab 切换 wx.switchTab
5. 重启动 wx.reLaunch

navigateTo, redirectTo 只能打开非 tabBar 页面。switchTab 只能打开 tabBar 页面。reLaunch 可以打开任意页面。页面底部的 tabBar 由页面决定，即只要是定义为 tabBar 的页面，底部都有 tabBar。调用页面路由带的参数可以在目标页面的onLoad中获取。
### 异步方式
```
// callback 形式调用
wx.chooseImage({
  success(res) {
    console.log('res:', res)
  }})

// promise 形式调用
wx.chooseImage().then(res => console.log('res: ', res))
```
### rpx
rpx（responsive pixel）: 可以根据屏幕宽度进行自适应。规定屏幕宽为750rpx。如在 iPhone6 上，屏幕宽度为375px，共有750个物理像素，则750rpx = 375px = 750物理像素，1rpx = 0.5px = 1物理像素。
### wxs
WXS（WeiXin Script）是小程序的一套脚本语言，结合 WXML，可以构建出页面的结构
和wxml放在一起
### 事件
```
<view id="tapTest" data-hi="Weixin" bindtap="tapName"> Click me! </view>
```
data-hi可以在事件对象e中打印出来

- 除 bind 外，也可以用 catch 来绑定事件。与 bind 不同， catch 会阻止事件向上冒泡
- 在捕获阶段监听事件时可以采用capture-bind、capture-catch关键字，后者将中断捕获阶段和取消冒泡阶段。
- mark和dataset相似
```
<view mark:myMark="last" bindtap="bindViewTap">
  <button mark:anotherMark="leaf" bindtap="bindButtonTap">按钮</button>
</view>

点击按钮
Page({
  bindViewTap: function(e) {
    e.mark.myMark === "last" // true
    e.mark.anotherMark === "leaf" // true
  }})
```
#### 互斥事件绑定
除 bind 和 catch 外，还可以使用 mut-bind 来绑定事件。一个 mut-bind 触发后，如果事件冒泡到其他节点上，其他节点上的 mut-bind 绑定函数不会被触发，但 bind 绑定函数和 catch 绑定函数依旧会被触发。换而言之，所有 mut-bind 是“互斥”的，只会有其中一个绑定函数被触发。同时，它完全不影响 bind 和 catch 的绑定效果。
### 滚动动画
```
this.animate(selector, keyframes, duration, ScrollTimeline)
```
### 静态初始渲染缓存

- 若想启用初始渲染缓存，最简单的方法是在页面的 json 文件中添加配置项 "initialRenderingCache": "static"
- 静态缓存不能使用this.setData改变数据，这种做法只包含页面 data 的渲染结果，即页面的纯静态成分

### 组件

- 在组件wxss中不应使用ID选择器、属性选择器和标签名选择器
- 使用已注册的自定义组件前，首先要在页面的 json 文件中进行引用声明。此时需要提供每个自定义组件的标签名和对应的自定义组件文件路径
- 默认情况下，一个组件的 wxml 中只能有一个 slot 。需要使用多 slot 时，可以在组件 js 中声明启用。

```
options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
```

- 自定义组件设置为“虚拟的”,将不受 页面css的影响

```
options: {
    virtualHost: true
  },
```

- 页面也可以使用 Component 构造器构造，应 json 文件中包含 usingComponents 定义段。组件的属性可以用于接收页面的参数，页面的生命周期方法（即 on 开头的方法），应写在 methods 定义段中。
- this.selectComponent 获取自组件实例，好玩vue的$refs类似
- 子组件触发事件

```
this.triggerEvent('myevent', myEventDetaildetail(对象，提供给事件监听函数), myEventOption(触发的选项))
```

- 自定义 selectComponent 返回的数据，可使用内置 behavior: wx://component-export，使自定义组件中支持 export 定义段，这个定义段可以用于指定组件被 selectComponent 调用时的返回值。
- 使用behavior之后，生命周期函数，先调用behavior中的函数
- behavior覆盖原则

1. 如果若组件本身有这个属性或方法，则组件的属性或方法会覆盖 behavior 中的同名属性或方法；
2. 若组件本身无这个属性或方法，则在组件的 behaviors 字段中定义靠后的 behavior 的属性或方法会覆盖靠前的同名属性或方法；
3. 在 2 的基础上，若存在嵌套引用 behavior 的情况，则规则为：父 behavior 覆盖 子 behavior 中的同名属性或方法。

- 定义和组件间的关系，在构造器中加入relations属性

```
<custom-ul>
  <custom-li> item 1 </custom-li>
  <custom-li> item 2 </custom-li>
</custom-ul>
```

- observers可以监听数据变化，类似于watch
- 组件数据中的纯数据字段,既不会展示在界面上，也不会传递给其他组件

```
options: {
    pureDataPattern: /^_/ // 指定所有 _ 开头的数据字段为纯数据字段
  },
```

#### 1、访问失败fail未执行

- fail监听的网络，网络请求正常不会被fail监听，只有网络出错（接口未打开或者没网）
- 接口服务正常，接口请求出错会被success监听

### getCurrentPages

- getcurrpage 会获得一个页面堆栈
当页面堆栈数量==1的时候，按钮改成返回首页

### 互斥事件绑定

使用mut-bind来绑定事件，当深层的mut-bind事件点击后冒泡到上层，如果碰到仍然是mut-bind，则该事件不会执行

### 页面路由

[链接](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/route.html)

### 异步api

异步api支持callback 和 promise两种调用方式

```
// callback 形式调用
wx.chooseImage({
  success(res) {
    console.log('res:', res)
  }
})

// promise 形式调用
wx.chooseImage().then(res => console.log('res: ', res))
```

### 双向绑定

-  [链接](https://developers.weixin.qq.com/miniprogram/dev/framework/view/two-way-bindings.html)

### 节点相交

- 在每次进入或者离开下时调用回调 [链接](https://developers.weixin.qq.com/miniprogram/dev/framework/view/selector.html)

### 动画

- 使用css动画，用bindtransitionend、bindanimationstart、bindanimationiteration、bindanimationend来监听动画
- 使用关键帧动画`this.animate(selector, keyframes, duration, callback)`
- 滚动动画`this.animate(selector, keyframes, duration, ScrollTimeline)`
- [链接](https://developers.weixin.qq.com/miniprogram/dev/framework/view/animation.html)

### 小程序的运行环境
|  | ios | Android | 开发工具 | pc | mac |
| --- | --- | --- | --- | --- | --- |
| js | JavaScriptCore | v8 | NW.js | Chrome | JavaScriptCore |
| 视图 | WKWebView | XWeb | Chromium Webview | Chrome | WKWebView |


### 小程序销毁之前保留数据

每当小程序可能被销毁之前，页面回调函数 onSaveExitState 会被调用。如果想保留页面中的状态，可以在这个回调函数中“保存”一些数据，下次启动时可以通过 exitState 获得这些已保存数据。[链接](https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/operating-mechanism.html)

### 小程序生成二维码

[https://open.weixin.qq.com/sns/getexpappinfo?appid=](https://open.weixin.qq.com/sns/getexpappinfo?appid=)&path=***

### 小程序初始渲染

[链接](https://developers.weixin.qq.com/miniprogram/dev/framework/view/initial-rendering-cache.html)
很重要，一般是静态渲染，不包含setData的数据，需要再app.json中添加

### 生成小程序

[链接](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/qr-code/wxacode.createQRCode.html)

### 自定义组件

在json文件中加入

```
{
  "component": true
 }
```

> **在组件wxss中不应使用ID选择器、属性选择器和标签名选择器。**


wxml可以使用多个slo，要在js中配置

```
options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
```

然后slot用name来区分

```
模板组件
<slot name="before"></slot>
 引用组件的页面模板
<view slot="before">这里是插入到组件slot name="before"中的内容</view>
```

#### 样式隔离

通常页面指定了标签选择器才会影响组件的样式，所以不推荐使用标签选择器

```
options: {
    styleIsolation: 'isolated'
 }
 或者
options: {
    addGlobalClass: true,
 }
或者  .json
{
  "styleIsolation": "isolated"
 }
```

- isolated 表示启用样式隔离，在自定义组件内外，使用 class 指定的样式将不会相互影响（一般情况下的默认值）；
- apply-shared 表示页面 wxss 样式将影响到自定义组件，但自定义组件 wxss 中指定的样式不会影响页面；
- shared 表示页面 wxss 样式将影响到自定义组件，自定义组件 wxss 中指定的样式也会影响页面和其他设置了 apply-shared 或 shared 的自定义组件。（这个选项在插件中不可用。）

#### 接受传入的样式

```
/* 组件 custom-component.js */
externalClasses: ['my-class']

<view class="my-class">这段文本的颜色由组件外的 class 决定</view>

<!-- 页面的 WXML -->
<custom-component my-class="red-text" />

.red-text {
  color: red;
 }
```

#### 引用页面或父组件的样式

- `~` + 类名，即可引用页面的样式
- `^` + 类名，即可引用父组件的样式

#### 虚拟化组件节点

组件添加这个属性，则不能在节点上使用style，class等属性

```
options: {
    virtualHost: true
  },
 以下不生效
<custom-component style="color: blue; flex: 1">蓝色、满宽的</custom-component>
```

#### Component 构造页面

- 把on事件写在methods中
- 好处是可以使用behaviors

#### 获取组件实例

```
this.selectComponent(".my-component")
```

#### 数据监听

```
observers: {
    '**': function() {
      // 每次 setData 都触发
    },
  },
```

监听对象的属性，在对象改变时也会触发

#### 纯数据字段

只在js中使用，没有渲染到wxml中，在data中定义，

```
options: {
    pureDataPattern: /^_/ // 指定所有 _ 开头的数据字段为纯数据字段
 },
```

#### 抽象节点

使用一套抽象节点，可以定义多套组件
[链接](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/generics.html)

### 按需注入

```
{
  "lazyCodeLoading": "requiredComponents"
 }
```

### 授权

- 通过wx.getSetting获取当钱用户的授权状态
- 通过wx.openSetting打开设置界面，引导开启授权
- 使用wx.authorize获取授权

### 获取手机号

需要把获取到的“encryptedData”，“iv”传到后端，在使用session_key来解密，[链接](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html)

### 获取小程序码

[链接](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/qr-code.html)

### 获取 URL Scheme

- 适用于从短信、邮件、微信外网页等场景打开小程序
[链接](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/url-scheme.html)

### window/page

enablePullDownRefresh: 开启下拉刷新
onReachBottomDistance: 页面上拉触底事件触发时距页面底部距离，单位为 px

### 弹窗组件

page-container

### 页面穿梭动画组件

share-element

### 默认图标

[链接](https://developers.weixin.qq.com/miniprogram/dev/component/icon.html#%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81)

### 富文本编辑器

[链接](https://developers.weixin.qq.com/miniprogram/dev/component/editor.html#Bug-Tip)

### 跳转

[链接](https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html#Bug-Tip)

### 开放头像和昵称

[链接](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html#%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81)

### 网页

[网页](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html)

```
bindGetUserInfo({currentTarget = {}}) {
    debugger
    store.dispatch({type: "SET_tappedUserAuth", data: true})
    // let id = store.getData().userid
    let token = store.getData().token;
    console.log(token, 'token用户授权')
    // console.log(id,'id用户授权')
    let {type = ''} = currentTarget.dataset
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: (res) => {
              let encryptedData = res.encryptedData
              let iv = res.iv
              User.getUserInfo({encryptedData, iv}).then(userInfo => {
                let unionId = userInfo.unionId;
                store.dispatch({type: "SET_UNIONID", data: unionId})
                this.setData({ // 将获取到的unionId存起来，然后刷新globalData
                  globalData: store.getData(),
                })
              })

            }
          })
        } else {
          console.log('用户拒绝授权')

          if (store.getData().phone) { // 刷新以后再去判断是否有phone，如果没有，再次弹窗让用户授权手机号
            this.setData({
              globalData: store.getData()
            })
          } else {
            this.setData({
              globalData: store.getData()
            })
          }
        }
      }
    })
  },
```
