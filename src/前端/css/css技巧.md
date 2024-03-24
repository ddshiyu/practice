# css技巧
## 一、mask
```css
.masked {
  -webkit-mask: url('/images/frontend/grooming-1801287.svg/grooming-1801287.svg');
  mask: url('/images/frontend/grooming-1801287.svg');
  -webkit-mask-size: 100%;
  mask-size: 50%;
  width: 1200px;
  height: 1200px;
  background: blue linear-gradient(red, blue);
  margin-bottom: 10px;
}
<div class="masked"></div>
```

![image.png](/images/frontend/image.png)
默认样式
![image.png](/images/frontend/image2.png)

- mask	加载图片
- mask-size	设置蒙版大小
- mask-repeat	   是否重复

**它是一层背景蒙版，覆盖在背景上**
**mask-image为透明图片，这样可以使被背景穿透**
**必须为网络路径，相对路径无效**
