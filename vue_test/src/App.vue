<template>
  <div>
    <Student></Student>
    <School></School>
  </div>
</template>

<script>

    import Student from './components/Student.vue'
    import School from './components/School.vue'

    export default {
        name: 'App',
        data() {
            return {
            }
        },
        methods: {
        },
        components: {
            Student,
            School
        }
    }
</script>

<style>

</style>