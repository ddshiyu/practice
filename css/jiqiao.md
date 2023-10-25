## 一、mask
```css
.masked {
  -webkit-mask: url('https://blog.jdqiong.cn/grooming-1801287.svg');
  mask: url('https://blog.jdqiong.cn/grooming-1801287.svg');
  -webkit-mask-size: 100%;
  mask-size: 50%;
  width: 1200px;
  height: 1200px;
  background: blue linear-gradient(red, blue);
  margin-bottom: 10px;
}
<div class="masked"></div>
```

![image.png](https://cdn.nlark.com/yuque/0/2022/png/12654185/1669131769438-82eeed47-6398-400f-b35a-773ea81b67f1.png#averageHue=%234700b7&clientId=uc9cc8901-5ecf-4&from=paste&height=209&id=u915e759d&originHeight=261&originWidth=261&originalType=binary&ratio=1&rotation=0&showTitle=false&size=2735&status=done&style=none&taskId=u1cf72399-09f5-4007-bf73-a5e50a5be92&title=&width=208.8)
默认样式
![image.png](https://cdn.nlark.com/yuque/0/2022/png/12654185/1669131798264-66a559b2-be18-4025-bbba-753c7863d260.png#averageHue=%23e5cae3&clientId=uc9cc8901-5ecf-4&from=paste&height=206&id=u6b370d4b&originHeight=257&originWidth=268&originalType=binary&ratio=1&rotation=0&showTitle=false&size=14463&status=done&style=none&taskId=u0853bfa5-576d-415c-a43a-21c3a4ecc86&title=&width=214.4)
使用mask之后
<!-- ![](https://blog.jdqiong.cn/202203041315243.jpg) -->

- mask	加载图片
- mask-size	设置蒙版大小
- mask-repeat	   是否重复

**它是一层背景蒙版，覆盖在背景上**
**mask-image为透明图片，这样可以使被背景穿透**
**必须为网络路径，相对路径无效**
