import{_ as e,o as a,c as l,Q as s}from"./chunks/framework.1bfda989.js";const v=JSON.parse('{"title":"webviz的使用技巧","description":"","frontmatter":{},"headers":[],"relativePath":"tools/webviz.md","filePath":"tools/webviz.md","lastUpdated":1698578871000}'),i={name:"tools/webviz.md"},t=s(`<h1 id="webviz的使用技巧" tabindex="-1">webviz的使用技巧 <a class="header-anchor" href="#webviz的使用技巧" aria-label="Permalink to &quot;webviz的使用技巧&quot;">​</a></h1><blockquote><p>注意：Node最好安装10.X版本，高版本不支持，使用过10.19.0，比较稳定</p></blockquote><h2 id="一、打包" tabindex="-1">一、打包 <a class="header-anchor" href="#一、打包" aria-label="Permalink to &quot;一、打包&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">npm run build</span></span>
<span class="line"><span style="color:#E1E4E8;">npm run build</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">static</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">webviz</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">npm run build</span></span>
<span class="line"><span style="color:#24292E;">npm run build</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">static</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">webviz</span></span></code></pre></div><h2 id="二、调试" tabindex="-1">二、调试 <a class="header-anchor" href="#二、调试" aria-label="Permalink to &quot;二、调试&quot;">​</a></h2><h2 id="三、自定义修改" tabindex="-1">三、自定义修改 <a class="header-anchor" href="#三、自定义修改" aria-label="Permalink to &quot;三、自定义修改&quot;">​</a></h2><ol><li>修改panel默认配置在 loadWebviz.js文件</li></ol><p><img src="https://cdn.nlark.com/yuque/0/2023/jpeg/12654185/1696987114407-21c2aa26-8c7f-4a8f-bc15-f46ee76ad79f.jpeg" alt=""></p><h2 id="四、原理" tabindex="-1">四、原理 <a class="header-anchor" href="#四、原理" aria-label="Permalink to &quot;四、原理&quot;">​</a></h2><ul><li>ROS Bag 文件：</li></ul><p>ROS bag 文件是一种用于记录 ROS 主题消息的文件格式。它可以捕获在ROS系统中发布的所有主题消息，这使得可以在稍后的时间重新播放它们。</p><ul><li>Webviz 架构：</li></ul><p>Webviz 是一个基于 web 的应用程序，可以在浏览器中运行。它的后端使用 Node.js 作为运行环境，前端使用了大量的 JavaScript 框架和库（如React、Redux等）。</p><ul><li>ROS2 Web Bridge：</li></ul><p>Webviz 使用了 ROS2 Web Bridge 或者类似的工具来连接 ROS 系统和 Webviz 应用。ROS2 Web Bridge 是一个用于连接 ROS 与 web 应用程序的工具，它提供了一个 WebSocket 接口，可以通过它来访问 ROS 主题。</p><ul><li>WebSocket 通信：</li></ul><p>Webviz 通过 WebSocket 与 ROS2 Web Bridge 进行通信。WebSocket 是一种在客户端和服务器之间进行全双工通信的协议，它允许实时地在浏览器中更新数据。</p><ul><li>ROS 主题消息传输：</li></ul><p>ROS2 Web Bridge 允许 Webviz 订阅 ROS 中的主题。当 Webviz 启动并连接到 ROS2 Web Bridge 时，它可以请求订阅特定的主题。</p><ul><li>消息的解析和可视化：</li></ul><p>一旦 Webviz 订阅了一个主题，ROS2 Web Bridge 将会把来自 ROS 的消息传递给 Webviz。Webviz 接收到这些消息后，会解析它们并将它们转换成可视化的图形或其他形式，以便在浏览器中显示。</p><ul><li>播放控制：</li></ul><p>Webviz 允许用户通过界面控制 bag 文件的播放速度，包括正常速度、加速和暂停等。这个控制会通过 WebSocket 传递给 ROS2 Web Bridge，并作用于 bag 文件的播放。</p>`,23),o=[t];function n(p,r,c,b,d,u){return a(),l("div",null,o)}const S=e(i,[["render",n]]);export{v as __pageData,S as default};
