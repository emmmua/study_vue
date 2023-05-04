<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyWord"
      />
      &nbsp;
      <button @click="getUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    getUsers() {

      
      // 发送请求前通知List更新状态
      this.$bus.$emit("updateListData", {
        isFirst: false,
        isLoading: true,
        errMsg: "",
        users: [],
      });

      // 使用$http发送请求
      this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        (response) => {
          //   console.log('success', response.data.items);
          //   this.$bus.$emit("updateListData", response.data.items);
          // 请求成功后
          this.$bus.$emit("updateListData", {
            // isFirst: false,
            isLoading: false,
            errMsg: "",
            users: response.data.items,
          });
        },
        (error) => {
          console.log("fail", error.message);
          // 请求失败后
          this.$bus.$emit("updateListData", {
            isLoading: false,
            errMsg: error.message,
            users: [], // 这里一定要清空users，否则会显示上一次的数据
          });
        }
      );

      // // 发送网络请求
      // axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
      //   (response) => {
      //     //   console.log('success', response.data.items);
      //     //   this.$bus.$emit("updateListData", response.data.items);
      //     // 请求成功后
      //     this.$bus.$emit("updateListData", {
      //       // isFirst: false,
      //       isLoading: false,
      //       errMsg: "",
      //       users: response.data.items,
      //     });
      //   },
      //   (error) => {
      //     console.log("fail", error.message);
      //     // 请求失败后
      //     this.$bus.$emit("updateListData", {
      //       isLoading: false,
      //       errMsg: error.message,
      //       users: [], // 这里一定要清空users，否则会显示上一次的数据
      //     });
      //   }
      // );
    },
  },
};
</script>

<style>
</style>