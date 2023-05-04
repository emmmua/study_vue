//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'

// 引入vue-resource
import VueResource from 'vue-resource'

//关闭Vue的生产提示
Vue.config.productionTip = false

//使用插件
Vue.use(VueResource)	// 内部会给vm对象和组件对象添加一个属性：$http(发送ajax请求)

//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	beforeCreate() {
		Vue.prototype.$bus = this
	},
})