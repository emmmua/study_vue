// 引入的不再是Vue构造函数，而是createApp的工厂函数（无需通过new构造）
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 1. createApp(App) 返回一个应用实例对象
// 2. .mount('#app') 将实例对象挂载到#app的元素上
createApp(App).mount('#app')