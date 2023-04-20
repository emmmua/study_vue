<template>
  <div class="demo">
    <h2 @click="showName">学校名称: {{name}}</h2>
    <h2>学校地址：{{address}}</h2>
    <hr>
  </div>
</template>

<script>
  // 引入一个混合对象mixin.js
  // import {hunhe, hunhe2} from '../mixin.js'

  export default {
      name: 'School',
      data() {
          return {
            name:'贵州师范学院',
            address:'贵州省贵阳市乌当区',
          }
      },
      mounted() {
        console.log("School组件的mounted钩子函数被调用了");
      },
      // mixins:[hunhe, hunhe2]
  }
</script>

<style>
  .demo {
    background-color: #f5f5f5;
  }
</style>