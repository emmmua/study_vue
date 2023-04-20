<template>
  <div class="demo">
    <h1>{{msg}}</h1>
    <h2>学生名称: {{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <h2>学生年龄：{{age}}</h2>
    <hr>
  </div>
</template>

<script>

export default {
    name: 'Student',
    data() {
        return {
            msg: '欢迎学习Vue',
        }
    },
    // 通过props属性接收父组件传递过来的数据
    // props: ['name', 'sex', 'age']  简单接收

    // 接收父组件传递过来的数据，并且指定数据类型
    // props:{
    //   name:String,
    //   age:Number,
    //   sex:String
    // }


    // 接收父组件传递过来的数据，并且指定数据类型，是否必须传递
    props: {
      name: {
        // 指定数据类型
        type: String,
        // 是否必须传递
        require: true
      },
      age:{
        // 指定数据类型
        type:Number,
        // 默认值
        default:18
        // 一般required和default不同时使用，因为required为true时，default无效
      },
      sex:{
        type:String,
        require:true
      }
    }

}
</script>

<style>
  .demo {
    background-color: #f5f5f5;
  }
</style>