<template>
	<div class="school">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
	</div>
</template>

<script>
	import pubsub from 'pubsub-js'
	
	export default {
		name:'School',
		data() {
			return {
				name:'尚硅谷',
				address:'北京',
			}
		},
		mounted() {
			// this.$bus.$on('sendStudentName', (data) => {
			// 	console.log('我是School组件，我收到了数据', data)
			// })

			// 使用pubsub订阅消息
			this.sendStudentNamePubsubId =  pubsub.subscribe('sendStudentName', (messageName, data) => {
				console.log('有人发布了sendStudentName消息，这是它的回调消息', messageName, data)
			})
			// 返回值放入this.sendStudentNamePubsubId，用于取消订阅，在beforeDestroy中取消订阅。
			// data中原本没有this.sendStudentNamePubsubId，不过可以自己添加，因为data中的数据都会挂载到this上。
		},
		beforeDestroy() {
			// 使用$off取消订阅
			// this.$bus.$off('sendStudentName')

			// 使用pubsub取消订阅
			pubsub.unsubscribe(sendStudentNamePubsubId)
		}
	}
</script>

<style scoped>
	.school{
		background-color: skyblue;
		padding: 5px;
	}
</style>