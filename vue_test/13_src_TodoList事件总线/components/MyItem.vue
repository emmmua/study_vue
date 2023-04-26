<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      />
      <!-- 如下代码也能实现功能，但是不建议，违反vue原则，因为修改了props -->
      <!-- <input type="checkbox" v-model="todo.done"/> -->

      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="handleTodo(todo.id)">删除</button>
  </li>
</template>

<script>

import pubsub from 'pubsub-js'

export default {
  name: "MyItem",
  // 声明接收todo对象
  props: ["todo"],
  methods: {
    // 处理勾选事件
    handleCheck(id) {
      console.log(id);
      // 通知App组件，修改todo的done状态
      // this.checkTodo(id)

      // 借助全局总线通知App组件，修改todo的done状态
      this.$bus.$emit("checkTodo", id);
    },

    // 处理删除事件
    handleTodo(id) {
      if (window.confirm("确定删除吗？")) {
        // this.deleteTodo(id)
        // 借助全局总线通知App组件，修改todo的done状态
        // this.$bus.$emit('deleteTodo',id)

        // 借助pubsub通知App组件，修改todo的done状态
        pubsub.publish('deleteTodo', id)
      }
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>