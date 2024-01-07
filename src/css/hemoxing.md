<!-- <script setup>
import hemoxing from './hemoxing.vue'
</script>

<hemoxing /> -->
# 盒模型
盒子分为块级盒子和内联盒子，盒子由content、padding、border、margin组成。
<div class="codebox">
  <div class="w-200px bg-lightBlue p-20px mb-20px border-20 border-main">
    <div class="bg-yellow">son</div>
  </div>
  <div class="w-200px bg-lightBlue p-20px border-main border-20 border-main">
    <div class="bg-yellow">son</div>
  </div>
</div>

## 块级盒子
有以下特点：
1. 独占一行，默认宽度为父级的宽度
2. 可以设置width、height
3. 内边距（padding）, 外边距（margin）和 边框（border）会将其他元素从当前盒子周围“推开”
<div class="codebox">
  <div class="bg-lightBlue" :style="{width: width + '%'}">元素1</div>
  <div class="bg-#f60" :style="{width: width1 + '%'}">元素2</div>
</div>

- 元素1
<p><n-slider v-model:value="width" :step="1" /></p>

- 元素2
<p><n-slider v-model:value="width1" :step="1" /></p>
<div class="codebox">
  三人行必有我师：每个人身上都有值得我们<div class="border-main p-10px m-10px">学习</div>的地方，我们应该虚心学习他人的长处。一失足成千古恨：小错误可能会导致大后果，我们要时刻保持警觉，避免犯错。
</div>

**常见的块级元素有：**`div`，`p`，`h1-h6`
## 内联盒子
有以下特点：
1. 不换行，默认宽度为content宽度
2. 设置width、height不生效
3. 垂直方向的内边距、外边距以及边框会被应用但是不会把其他处于 inline 状态的盒子推开。
4. 水平方向的内边距、外边距以及边框会被应用且会把其他处于 inline 状态的盒子推开。

<div class="codebox">
  <span class="bg-lightBlue" :style="{width: width2 + '%'}">元素1</span>
  <span class="bg-#f60" :style="{width: width3 + '%'}">元素2</span>
  <span></span>
</div>

- 元素1
<p><n-slider v-model:value="width2" :step="1" /></p>

- 元素2
<p><n-slider v-model:value="width3" :step="1" /></p>

<div class="codebox">
  三人行必有我师：每个人身上都有值得我们<span class="border-main p-10px m-20px">学习</span>的地方，我们应该虚心学习他人的长处。一失足成千古恨：小错误可能会导致大后果，我们要时刻保持警觉，避免犯错。
</div>

**常见的行内元素有：**`span`，`a`

## 特殊的行内块级元素
它是一个特殊的元素，既有以下特点：
1. 盒子不换行
2. 可以设置width、height
3. 内边距（padding）, 外边距（margin）和 边框（border）会将其他元素从当前盒子周围“推开”

<div class="codebox">
  <div class="inline-block bg-lightBlue" :style="{width: width4 + '%'}">元素1</div>
  <div class="inline-block bg-#f60" :style="{width: width5 + '%'}">元素2</div>
</div>

- 元素1
<p><n-slider v-model:value="width4" :step="1" /></p>

- 元素2
<p><n-slider v-model:value="width5" :step="1" /></p>

**常见的块级元素有：** 所有的可替换元素

## 宽度计算
默认的宽度计算为 width + padding\*2 + border\*2。

这里涉及一个重要的属性设置：`box-sizing`，用于控制元素的盒模型的计算方式。

它有如下属性：
- content-box：元素的宽度和高度仅包括内容区域，不包括内边距、边框和外边距（默认）
- border-box：元素的宽度和高度包括内容区域、内边距和边框，但不包括外边距（高频）
- padding-box：元素的宽度和高度包括内容区域和内边距，但不包括边框和外边距（几乎不使用）

<!-- :style="textarea.match(/\.box1\s*{([\s\S]*?)}/)[1].trim()"  -->
<div class="codebox">

  - content-box
  <div id="box1" :style="{width: widthW + 'px', padding: paddingW + 'px', borderWidth: borderW + 'px'}" class="box-content bg-lightBlue border-#ccc border-solid">
    <div class="bg-yellow">box1</div>
  </div>

  - padding-box
  <div id="box2" :style="{width: widthW + 'px', padding: paddingW + 'px', borderWidth: borderW + 'px', boxSizing: 'padding-box'}" class="bg-lightBlue box-padding my-20px border-#ccc border-solid">
    <div class="bg-yellow">box2</div>
  </div>

  - border-box
  <div id="box3" :style="{width: widthW + 'px', padding: paddingW + 'px', borderWidth: borderW + 'px'}" class="bg-lightBlue box-border border-#ccc border-solid">
    <div class="bg-yellow">box2</div>
  </div>
</div>

- width
<p><n-slider v-model:value="widthW" :step="1" /></p>

- padding
<p><n-slider v-model:value="paddingW" :step="1" /></p>

- border
<p><n-slider v-model:value="borderW" :step="1" /></p>

<!-- <n-input
  v-model:value="textarea"
  type="textarea"
  placeholder="Textarea"
  :autosize="{
    minRows: 3,
  }"
/> -->

## BFC（Block Formatting Context）
即块级格式化上下文，它是页面中的一块渲染区域，并且有一套属于自己的渲染规则：

- 内部的盒子会在垂直方向上一个接一个的放置
- 对于同一个BFC的俩个相邻的盒子的margin会发生重叠，与方向无关。
- 每个元素的左外边距与包含块的左边界相接触（从左到右），即使浮动元素也是如此
- BFC的区域不会与float的元素区域重叠
- 计算BFC的高度时，浮动子元素也参与计算
- BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然

触发BFC的条件包含不限于：

- 根元素，即HTML元素
- 浮动元素：float值为left、right
- overflow值不为 visible，为 auto、scroll、hidden
- display的值为inline-block、inltable-cell、table-caption、table、inline-table、flex、inline-flex、grid、inline-grid
- position的值为absolute或fixed

主要作用：
- 高度塌陷
- 清楚浮动
- 消除重叠

<div class="codebox">
<div class="flex justify-around">
  <div>
    <div class="boxes mb-30px"></div>
    <div class="boxes mt-30px"></div>
  </div>
  <div>
    <div class="boxes mb-30px"></div>
      <div class="overflow-hidden">
        <div class="boxes mt-30px"></div>
      </div>
    </div>
</div>
</div>
<div class="codebox">
  <div class="par block">
    <div class="child"></div>
    <div class="child"></div>
  </div>
  <div class="par1 mt-100px">
    <div class="child"></div>
    <div class="child"></div>
  </div>
</div>

<div class="codebox">
  <div class="aside"></div>
  <div class="main"></div>

  ---
  <div class="aside"></div>
  <div class="main overflow-hidden"></div>
</div>

<script lang='ts' setup>
import { reactive, toRefs, onBeforeMount, onMounted, ref, watch } from 'vue'
const value = ref(0)
const width = ref(100)
const width1 = ref(100)
const width2 = ref(100)
const width3 = ref(100)
const width4 = ref(100)
const width5 = ref(100)

const widthW = ref(100)
const paddingW = ref(0)
const borderW = ref(0)

const textarea = ref(
  `.box1 {
    box-sizing: content-box;
    padding: 20px;
    margin: 20px;
    width: 200px;
    border: 20px solid #ccc;
  }
  .box2 {
    box-sizing: padding-box;
    padding: 20px;
    margin: 20px;
    width: 200px;
    border: 20px solid #ccc;
  }
  .box3 {
    box-sizing: border-box;
    padding: 20px;
    margin: 20px;
    width: 200px;
    border: 20px solid #ccc;
  }
  `
)
</script>

<style scoped>
.boxes {
  width: 100px;
  height: 100px;
  background-color: pink;
}

.par {
  border: 5px solid #fcc;
  width: 300px;
}
.par1 {
  border: 5px solid #fcc;
  width: 300px;
  overflow: hidden;
}

.child {
  border: 5px solid #f66;
  width:100px;
  height: 100px;
  float: left;
}

.aside {
  width: 100px;
  height: 150px;
  float: left;
  background: #f66;
}

.main {
  height: 200px;
  background: #fcc;
}
</style>