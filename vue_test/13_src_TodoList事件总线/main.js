// 引入Vue
import Vue from 'vue'
// 引入App组件
import App from './App.vue'


// 关闭生产模式下给出的提示
Vue.config.productionTip = false


new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this
    }

})