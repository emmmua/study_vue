<template>
  <div class="container">
    <Category title="美食">
      <img src="https://q1.qlogo.cn/g?b=qq&nk=11470226&s=640" width="200px" height="200px" alt="">
    </Category>
    <Category title="游戏">
      <ul>
        <li v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ul>
    </Category>
    <Category title="电影">
      <img src="https://q1.qlogo.cn/g?b=qq&nk=2380321570&s=640" height="200px" width="200px" alt="">
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category";
export default {
  name: "App",
  components: {
    Category
  },
  data() {
    return {
      foods: ['火锅', '烧烤', '小龙虾'],
      games: ['红色警戒', '穿越火线', '劲舞团'],
      films: ['《教父》', '《拆弹专家》', '《你好，李焕英》']
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}
</style>
