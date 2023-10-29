# webviz的使用技巧

> 注意：Node最好安装10.X版本，高版本不支持，使用过10.19.0，比较稳定

## 一、打包
```javascript
npm run build
npm run build-static-webviz
```
## 二、调试

## 三、自定义修改

1. 修改panel默认配置在 loadWebviz.js文件

![](https://cdn.nlark.com/yuque/0/2023/jpeg/12654185/1696987114407-21c2aa26-8c7f-4a8f-bc15-f46ee76ad79f.jpeg)
## 四、原理

- ROS Bag 文件：

ROS bag 文件是一种用于记录 ROS 主题消息的文件格式。它可以捕获在ROS系统中发布的所有主题消息，这使得可以在稍后的时间重新播放它们。

- Webviz 架构：

Webviz 是一个基于 web 的应用程序，可以在浏览器中运行。它的后端使用 Node.js 作为运行环境，前端使用了大量的 JavaScript 框架和库（如React、Redux等）。

- ROS2 Web Bridge：

Webviz 使用了 ROS2 Web Bridge 或者类似的工具来连接 ROS 系统和 Webviz 应用。ROS2 Web Bridge 是一个用于连接 ROS 与 web 应用程序的工具，它提供了一个 WebSocket 接口，可以通过它来访问 ROS 主题。

- WebSocket 通信：

Webviz 通过 WebSocket 与 ROS2 Web Bridge 进行通信。WebSocket 是一种在客户端和服务器之间进行全双工通信的协议，它允许实时地在浏览器中更新数据。

- ROS 主题消息传输：

ROS2 Web Bridge 允许 Webviz 订阅 ROS 中的主题。当 Webviz 启动并连接到 ROS2 Web Bridge 时，它可以请求订阅特定的主题。

- 消息的解析和可视化：

一旦 Webviz 订阅了一个主题，ROS2 Web Bridge 将会把来自 ROS 的消息传递给 Webviz。Webviz 接收到这些消息后，会解析它们并将它们转换成可视化的图形或其他形式，以便在浏览器中显示。

- 播放控制：

Webviz 允许用户通过界面控制 bag 文件的播放速度，包括正常速度、加速和暂停等。这个控制会通过 WebSocket 传递给 ROS2 Web Bridge，并作用于 bag 文件的播放。
