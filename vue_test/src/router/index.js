// 该文件，专门用来创建整个应用的路由器

// 引入vueRouter
import vueRouter from 'vue-router'

// 引入组件
import Home from '../pages/Home.vue'
import Hbout from '../pages/About.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'

export default new vueRouter({
  routes: [
    {
        path: '/home',
        component: Home,
        children: [
            {
                path: 'news',
                component: News,
            },
            {
                path: 'message',
                component: Message,
            }
        ],
    },
    {
        path: '/about',
        component: Hbout
    }
  ]  
})