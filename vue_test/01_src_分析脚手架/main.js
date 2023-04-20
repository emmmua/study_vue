/*
  该项目是整个项目的入口文件
*/

// 导入Vue
import Vue from 'vue'

// 导入App组件
import App from './App.vue'

// 关闭Vue的生产提示
Vue.config.productionTip = false


// 创建Vue实例对象 -- vm
new Vue({
  el: '#app',
  // 下面的这行代码一会解释，完成了这个功能：将App组件放入容器中
  // render: h => h(App),
  // template: '<App/>',
  // components: {
  //   App
  // }

  render:q => q(App)
})