<template>
  <div class="a" :style="{padding: value+'px'}"></div>
  <div>
    <n-slider v-model:value="value" :step="1" />
  </div>
</template>

<script lang='ts' setup>
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