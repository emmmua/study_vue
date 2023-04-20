// 引入Vue
import Vue from 'vue'
// 引入App组件
import App from './App.vue'
// 引入路由
import {hunhe, hunhe2} from './mixin.js'

// 注册全局混合
Vue.mixin(hunhe)
Vue.mixin(hunhe2)


// 关闭生产模式下给出的提示
Vue.config.productionTip = false


new Vue({
    el: '#app',
    render: h => h(App)
})