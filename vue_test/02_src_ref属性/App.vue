<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDOM">点我输出上方的dom元素</button>
    <MySchool ref="school"></MySchool>
  </div>
</template>

<script>

    import MySchool from './components/School.vue'

    export default {
        name: 'App',
        data() {
            return {
                msg:"欢迎学习Vue"
            }
        },
        methods: {
            showDOM() {
                // 通过ref属性获取DOM元素
                console.log(this.$refs.title);
                // 通过ref属性获取School组件的实例对象
                console.log(this.$refs.school);

            }
        },
        components: {
            MySchool
        }
    }
</script>

<style>

</style>