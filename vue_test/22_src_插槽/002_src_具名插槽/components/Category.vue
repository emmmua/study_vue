<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- 定义一个插槽，等待填充 -->
    <slot name="center">我是一个默认值，当使用者没有传递具体结构时，我会出现</slot>

    <slot name="footer">我是footer卡槽</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
};
</script>

<style>
.category {
  background-color: skyblue;
  width: 200px;
  height: 400px;
}

h3 {
  text-align: center;
  background-color: yellow;
}
</style>