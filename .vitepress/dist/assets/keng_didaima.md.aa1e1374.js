import{_ as a,o as l,c as i,Q as r}from"./chunks/framework.1bfda989.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"keng/didaima.md","filePath":"keng/didaima.md","lastUpdated":1701187727000}'),t={name:"keng/didaima.md"},e=r('<h2 id="背景" tabindex="-1">背景 <a class="header-anchor" href="#背景" aria-label="Permalink to &quot;背景&quot;">​</a></h2><p>需求功能：</p><ol><li>可以通过拖拽自定义关系图</li><li>可以自定义组件</li><li>可以导入配置文件生成关系图</li><li>对节点进行更加详细的配置</li></ol><p>现对比各个框架选出其中适合业务的。</p><h2 id="对比" tabindex="-1">对比 <a class="header-anchor" href="#对比" aria-label="Permalink to &quot;对比&quot;">​</a></h2><h3 id="一、mxgraph" tabindex="-1">一、mxGraph <a class="header-anchor" href="#一、mxgraph" aria-label="Permalink to &quot;一、mxGraph&quot;">​</a></h3><p>github：<a href="https://github.com/jgraph/mxgraph" target="_blank" rel="noreferrer">链接</a> mxGraph库是一个诞生比较久的项目，提供了基础的图元和绘制方法，封装了绘制过程中的基础操作api，他们团队开发了有名的<a href="https://link.juejin.cn/?target=https%3A%2F%2Fwww.draw.io%2F" target="_blank" rel="noreferrer">draw.io</a>这个网站。但是它在2020年11月停止更新了。 <strong>优点：</strong></p><ol><li>历时时间久，功能更健全</li><li>api非常多，配置项齐全</li><li>功能强大稳定,兼容性好</li></ol><p><strong>缺点：</strong></p><ol><li>已停止更新很久</li><li>英文文档，代码逻辑比较复杂，上手成本高</li><li>组件默认的样式比较丑，需要自己优化样式</li><li>不支持TypeScript</li></ol><h3 id="二、antv-x6" tabindex="-1">二、AntV X6 <a class="header-anchor" href="#二、antv-x6" aria-label="Permalink to &quot;二、AntV X6&quot;">​</a></h3><p>github：<a href="https://github.com/antvis/x6" target="_blank" rel="noreferrer">链接</a> 蚂蚁可视化团队的一个开源作品，X6 在最新版本稳定和无感升级的前提下，在易用性和性能方面进行了深度打磨，对画布、节点、连线、工具、动画进行了全面优化升级，并对画布元素渲染逻辑进行重新设计。 <strong>优点：</strong></p><ol><li>国内平台，中文文档，持续更新，在线解疑</li><li>api丰富，示例丰富，涉及场景多</li><li>支持TypeScript</li><li>默认UI比较好看</li></ol><p><strong>缺点：</strong></p><ol><li>示例是以react开发</li><li>最新2.0版本可能会不稳定</li></ol><h3 id="三、logicflow" tabindex="-1">三、LogicFlow <a class="header-anchor" href="#三、logicflow" aria-label="Permalink to &quot;三、LogicFlow&quot;">​</a></h3><p>github：<a href="https://github.com/didi/LogicFlow" target="_blank" rel="noreferrer">链接</a> 面对多样性、逻辑变更快的业务场景，传统的面向场景编程成本高且周期长。因此我们建设了线上配置化的运营系统，让运营、产品同学能够通过画流程图的方式变更线上的业务逻辑。我们调研了市面上相关的框架 （BPMN.js、X6、Jsplumb、G6-editor），均存在不满足的场景，2020 上半年开启了 LogicFlow 的项目。 <strong>优点：</strong></p><ol><li>api丰富，插件相对多，中文文档</li><li>具备流程图应用的常用功能，扩展性强</li><li>支持TypeScript</li></ol><p><strong>缺点：</strong></p><ol><li>节点、连线、连接桩扩展性不如X6、mxGraph</li><li>LogicFlow 是一款流程图编辑框架，涉及的场景较少</li></ol><h3 id="四、jsplumb" tabindex="-1">四、jsplumb <a class="header-anchor" href="#四、jsplumb" aria-label="Permalink to &quot;四、jsplumb&quot;">​</a></h3><p>github：<a href="https://github.com/jsplumb/jsplumb" target="_blank" rel="noreferrer">链接</a> jsPlumb 是一个比较强大的绘图组件，提供html元素的拖放、连线等功能，可绘制不同类型、样式的连线，适用于开发web页面的图表、建模工具。 <strong>优点：</strong></p><ol><li>功能丰富，支持各种自定义操作</li></ol><p><strong>缺点：</strong></p><ol><li>分收费版和社区版，社区版功能较弱</li></ol><h3 id="五、bpmn" tabindex="-1">五、bpmn <a class="header-anchor" href="#五、bpmn" aria-label="Permalink to &quot;五、bpmn&quot;">​</a></h3><p>github：<a href="https://github.com/bpmn-io/bpmn-js" target="_blank" rel="noreferrer">链接</a> 业务流程模型注解（Business Process Modeling Notation - BPMN）是 业务流程模型的一种标准图形注解。这个标准 是由对象管理组（Object Management Group - OMG）维护的。 <strong>优点：</strong></p><ol><li>相对其他的框架它是比较轻量的</li><li>api较为丰富</li></ol><p><strong>缺点：</strong></p><ol><li>它是一款流程图编辑框架，涉及的场景较少</li><li>扩展能力不足</li><li>全英文文档</li></ol><p>大部分框架都是使用SVG进行定制化操作，bpmn是使用的canvas，扩展性会相对较差。其他的像flow-eda、vue-super-flow、flowchart都是个人开发者，暂时就先不考虑了。</p><h2 id="结论" tabindex="-1">结论 <a class="header-anchor" href="#结论" aria-label="Permalink to &quot;结论&quot;">​</a></h2><p>所调研的所有框架基本都是类似的封装方法，对节点、连接线进行定制化。从目前的需求来看，蚂蚁的AntV X6是最符合要求的，mxGraph和LogicFlow也很不错，但X6相对更加友好。后续原型稿出来再进行对比斟酌。</p>',33),o=[e];function n(p,s,h,c,g,d){return l(),i("div",null,o)}const u=a(t,[["render",n]]);export{b as __pageData,u as default};
