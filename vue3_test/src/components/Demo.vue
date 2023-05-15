<template>
  <h1>我是Demo组件</h1>
  <h2>当前求和为{{sum}}</h2>
  <button @click="sum++">点我sum+1</button>
  <h2>鼠标点击的坐标为x: {{point.x}}, y: {{point.y}}</h2>
  <hr>
</template>

<script>

import {ref} from 'vue'
import usePoint from '../hooks/usePoint.js'

export default {
  name: 'App',

  setup() {
    // 数据
    let sum = ref(0)

    // 调用hooks
    let point = usePoint()

    return {
      sum,
      point
    }
  }
}
</script>

<style>

</style>