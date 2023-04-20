<template>
  <div>
    <h1>我是App组件</h1>
    <img src="./assets/logo.png" alt="">
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
    // 在App里面，我们需要引入School和Student组件（汇总所有子组件）
    import School from './components/School'
    import Student from './components/Student'

    export default {
        nema: 'App',
        // 在App里面，我们需要注册School和Student组件
        components: {
            School,
            Student
        }
    }
</script>

<style>

</style>