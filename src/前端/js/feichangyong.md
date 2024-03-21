# JS非常用方法

## 一、Object.fromEntries
> **Object.fromEntries()** 方法把键值对列表转换为一个对象。

```javascript
const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42]
]);

const obj = Object.fromEntries(entries);

console.log(obj);
// Expected output: Object { foo: "bar", baz: 42 }
```
应用：get传参时，如果值为空则不传这个参数
```javascript
const res = await _fetchCollectDemand({
    page: pageNum.value,
    size: pageSize.value,
    ...Object.fromEntries(Object.entries(formRule.value).filter(([key, value]) => Boolean(value)))
  })
```
## 二、copyToClipboard
> 复制到剪切板

```javascript
if (navigator.clipboard) {
  // clipboard api 复制
  navigator.clipboard.writeText(text)
} else {
  var textarea = document.createElement('textarea')
  document.body.appendChild(textarea)
  // 隐藏此输入框
  textarea.style.position = 'fixed'
  textarea.style.clip = 'rect(0 0 0 0)'
  textarea.style.top = '10px'
  // 赋值
  textarea.value = text
  // 选中
  textarea.select()
  // 复制
  document.execCommand('copy', true)
  // 移除输入框
  document.body.removeChild(textarea)
}
```

##  三、Ajax传递JSON数据
1. contentType设置为 application/json
2. data使用JSON.stringify()包裹