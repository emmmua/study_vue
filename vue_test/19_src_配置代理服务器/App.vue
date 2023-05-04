<template>
	<div id="root">
		<button @click="getStudents">获取学生信息</button>
		<button @click="getCars">获取汽车信息</button>
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		name:'App',
		methods: {
			getStudents() {
				axios.get('http://localhost:8080/api/students').then(
					response => {
						console.log('成功了', response.data)
					},
					error => {
						console.log('失败了', error.message)
					}
				)
			},

			getCars() {
				axios.get('http://localhost:8080/demo/cars').then(
					response => {
						console.log('成功了', response.data)
					},
					error => {
						console.log('失败了', error.message)
					}
				)
			}
		}
	}
</script>

<style>
</style>
