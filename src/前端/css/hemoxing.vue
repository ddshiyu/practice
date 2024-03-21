<template>
  <p>盒子分为块级盒子和内联盒子</p>
  <li>内联盒子</li>
  <p>123</p>
  <div class="bg-#000" :style="{padding: value+'px'}"></div>
  <div>
    <n-slider v-model:value="value" :step="1" />
  </div>
  <span class="text-primary">123</span>
</template>

<script lang='ts' setup>
// main.ts

import { reactive, toRefs, onBeforeMount, onMounted, ref } from 'vue'
const value = ref(0)

</script>
<style scoped>
.a {
  width: 100px;
  height: 100px;
  background: red;
  margin: 0 auto;
  transition: all 0.3s;
}
</style>