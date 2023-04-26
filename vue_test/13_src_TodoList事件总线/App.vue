<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @addTodo="addTodo"></MyHeader>
        <MyList :todos="todos"></MyList>
        <MyFooter
          :todos="todos"
          @checkAllTodo="checkAllTodo"
          @clearAllTodo="clearAllTodo"
        ></MyFooter>
      </div>
    </div>
  </div>
</template>

<script>
// 引入pubsub
import pubsub from 'pubsub-js'

import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList .vue";
// 不需要引入MyItem，因为它包含在MyList中
import MyFooter from "./components/MyFooter.vue";



export default {
  name: "App",
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    // 添加todo
    addTodo(todo) {
      this.todos.unshift(todo);
    },
    // 勾选或者取消勾选一个todo
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
      });
    },
    // 删除一个todo
    deleteTodo(_, id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    },

    // 全选或者全不选
    checkAllTodo(done) {
      this.todos.forEach((todo) => (todo.done = done));
    },

    // 清除所有已经完成的todo
    clearAllTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
    },
  },
  components: {
    MyHeader,
    MyList,
    MyFooter,
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
  mounted() {
    this.$bus.$on("checkTodo", this.checkTodo);
    // 使用事件总线订阅消息
    // this.$bus.$on("deleteTodo", this.deleteTodo);

    // 使用pubsub订阅消息
    this.deleteTodoPubsubId = pubsub.subscribe('deleteTodo', this.deleteTodo)
  },
  beforeDestroy() {
    this.$bus.$off("checkTodo");
    // this.$bus.$off("deleteTodo");

    pubsub.unsubscribe(deleteTodoPubsubId)
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}


.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>