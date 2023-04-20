<template>
  <div class="demo">
    <h2>学校名称: {{name}}</h2>
    <h2>学校地址：{{address}}</h2>
    <hr>
  </div>
</template>

<script>

export default {
    name: 'MySchool',
    data() {
        return {
            name: '贵州师范学院',
            address: '贵州省贵阳市乌当区'
        }
    }
}
</script>

<style>
  .demo {
    background-color: gray;
  }
</style>