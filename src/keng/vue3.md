## 一、找不到名称proces

[https://juejin.cn/post/7047447121510793223](https://juejin.cn/post/7047447121510793223)

## 二、vue3 报错提示 找不到模块“./XXX.vue”或其相应的类型声明

[https://blog.csdn.net/Stars_in_rain/article/details/123741249](https://blog.csdn.net/Stars_in_rain/article/details/123741249)

## 三、reactive定义的数组或者对象无法更新

不能直接赋值，否则就会失去响应式，数组可以push

## 四、无跳转刷新页面

使用provide和inject操作，在app.vue中定义个布尔值

```vue
<router-view v-if="isRouterAlive"/>
 reload(){
   this.isRouterAlive = false;
   this.$nextTick(function () {
     this.isRouterAlive = true;
   });
 }
```

## 五、最外层为absolute无法触发动画

transition外层需要再套一层元素

## 六、离谱，名为time的组件

今天定义了一个时间组件，命名`time`，一直显示不出来，找了半天的问题，原来不能使用`time`命名

## 七、axios请求本地文件

axios默认请求的文件夹在public下，放在别的文件夹请求会报404

```javascript
axios.get('./a.json').then((res) => {
  console.log('res.data = ', res.data)
}) 
// 上述中的 ./a.json 为 ./public/a.json 文件；
```

## 八、is动态组件

在vue2时期，:is可以通过变量来加载，但是vue3时期，因为组件不需要注册，没有components选项，组件导入可以直接在template直接使用，这时候使用变量加载不出来，需要通过对象来映射。

````
import Daily from './index/daily.vue'
import Week from './index/week.vue'
import Month from './index/month.vue'
const typeComponentMap = {
	1: Daily,
	2: Week,
	3: Month,
}
````

## 九、vue3 动态事件方法名

```vue
<el-select v-model="value" @change="nodeItem.method">
  <el-option v-for="item in nodeItem.options" :label="item.label" :value="item.value"></el-option>
</el-select>
```

```json
{
  "type": "select",
  "field": "model",
  "title": "模型实体",
  "formValue": "",
  "fetchUrl": "/datamodel/queryByParam",
  "options": [],
  "method": "modelChange"
}
```

```javascript
// 不生效
const modelChange = () => {
}
```

change定义的方法nodeItem.method为变量，但是并不生效。

- 解决方法

```vue
<el-select v-model="value" @change="handleChange">
  <el-option v-for="item in nodeItem.options" :label="item.label" :value="item.value"></el-option>
</el-select>
  ...

  const handleChange = () => {
    console.log(' ', nodeItem.value.method)
    if (nodeItem.value.method) {
      methodName[nodeItem.value.method]()
    }
  }
  const modelChange = () => {
    console.log('model')
  }
  const methodName: {[x: string]: () => void} = { modelChange }
```

定义一个变量保存函数，再通过动态字符串去取对应的函数并执行。

> vue2的方法在vue3已经不适用

## 十、动态路由出现警告（没有匹配到路由）

> vue-router.esm-bundler.js:72 [Vue Router warn]: No match found for location with path ""

之前是使用这种方式来消除

```javascript
{ path: '*', component: NotFound }
```

但是新版本会报错

> Catch all routes ("*") must now be defined using a param with a custom regexp

所以使用以下版本

```javascript
{ path: '/:pathMatch(.*)*', component: import('../views/login.vue') },
```

## 十一、组件上使用v-model

不管组件上使用v-model传什么值过来，接收一律使用**modelValue**

```javascript
const props = defineProps({
  modelValue: Boolean
})
const emit = defineEmits(['update:modelValue'])
const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    console.log('gg')
    emit('update:modelValue', value)
  }
})


## 使用的时候
<myTaskRejectModal v-model="showRejectModal"></myTaskRejectModal>

```

## 十二、路由上出现一个？

[http://10.10.113.10:3001/?#/dashboard/guide](http://10.10.113.10:3001/?#/dashboard/guide)

这里是 form 表单，点击了button 按钮，触发了他的默认事件，就是触发了提交这个行为。

解决方案：

使用@click.prevent 阻止默认事件

## 十三、使用tsx

```css
<script lang='tsx'>
import { reactive, ref, onMounted, defineComponent, h } from 'vue'
export default defineComponent({
  setup() {
    // return () => {
    //   return h('div', 11)
    // }
    return () => (
      <div>123</div>
    )
  }
})
</script>
```

新建一个vue文件，lang设置为`tsx`。

