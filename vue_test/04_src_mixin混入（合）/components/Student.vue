<template>
  <div class="demo">
    <h2 @click="showName">学生名称: {{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <hr>
  </div>
</template>

<script>

  // 引入一个混合对象mixin.js
  // import {hunhe, hunhe2} from '../mixin.js'

  export default {
      name: 'Student',
      data() {
          return {
            name:'张三',
            sex:'男',
            x: 999
          }
      },
      // mixins:[hunhe, hunhe2]
  }
</script>

<style>
  .demo {
    background-color: #f5f5f5;
  }
</style>