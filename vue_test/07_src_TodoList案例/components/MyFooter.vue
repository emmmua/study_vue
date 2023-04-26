<template>
  <div class="todo-footer" v-show="total">
    <label>
      <input type="checkbox" :checked="isAll" @change="checkAll" />
    </label>
    <span> <span>已完成{{doneTotal}}</span> / 全部{{todos.length}} </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props:['todos', 'checkAllTodo', 'clearAllTodo'],
  computed: {
    total() {
      return this.todos.length;
    },
    doneTotal() {
      
      /*
        该代码使用了 JavaScript 中的 reduce() 方法来统计一个 todo 列表中已完成的任务数量。

        具体来说，reduce() 方法接收两个参数：一个回调函数和一个初始值。在这里，回调函数采用箭头函数的语法，接收两个参数：pre 和 todo。其中 pre 是上一次迭代的结果，而 todo 是当前的任务对象。该函数的主要作用是将已完成的任务的数量加 1 并返回。

        在每次迭代中，如果当前任务对象 todo 的状态属性 done 为真（即任务已完成），则将已完成任务数量加1并累积到 pre 变量中。否则不做任何处理，直接返回 pre。最后，reduce() 方法会遍历整个 todo 列表，并返回最终累积结果。

        第二个参数是 reduce() 方法的初始值，这里设置为 0，表示在开始迭代之前已完成的任务数量为0。

        因此，该行代码的完整含义可以解释为：对于一个 todo 列表，遍历其中的所有任务，将已完成的任务的数量加 1 并返回最终结果。 
       */
      return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
    },

    isAll() {
      return this.doneTotal === this.total && this.total > 0;
    }
  },
  methods: {
    checkAll(e) {
      this.checkAllTodo(e.target.checked);
    },
    clearAll() {
      console.log("clearAll");
      this.clearAllTodo();
    }
  }
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>