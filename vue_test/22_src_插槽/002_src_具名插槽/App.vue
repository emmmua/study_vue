<template>
  <div class="container">
    <Category title="美食">
      <img
        slot="center"
        src="https://q1.qlogo.cn/g?b=qq&nk=11470226&s=640"
        width="200px"
        height="200px"
        alt=""
      />
      <div class="foot" slot="footer">
        <a href="#">更多美食</a>
      </div>
    </Category>

    <Category title="游戏">
      <ul slot="center">
        <li v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ul>

      <div class="foot" slot="footer">
        <a href="#">单机游戏</a>
        <a href="#">网络游戏</a>
      </div>
    </Category>

    <Category title="电影">
      <img
        slot="center"
        src="https://q1.qlogo.cn/g?b=qq&nk=2380321570&s=640"
        height="200px"
        width="200px"
        alt=""
      />

      <!-- v-slot时template专用的，所以下面两种方法都行 -->
      <!-- <template slot="footer"> -->
      <template v-slot:footer>
        <div class="foot">
          <a href="#">经典</a>
          <a href="#">热门</a>
          <a href="#">推荐</a>
        </div>
        <h4>欢迎前来观影</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category";
export default {
  name: "App",
  components: {
    Category,
  },
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾"],
      games: ["红色警戒", "穿越火线", "劲舞团"],
      films: ["《教父》", "《拆弹专家》", "《你好，李焕英》"],
    };
  },
};
</script>

<style scoped>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}

h4 {
  text-align: center;
}
</style>
