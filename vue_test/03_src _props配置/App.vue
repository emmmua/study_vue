<template>
  <div>
    <Student ref="school" name="张三" sex="男" :age="21"></Student>
  </div>
</template>

<script>

    import Student from './components/Student.vue'

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
            Student
        }
    }
</script>

<style>

</style>