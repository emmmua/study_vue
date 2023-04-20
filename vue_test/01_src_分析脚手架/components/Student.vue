<template>
    <div>
        <!--  组件模板 -->
        <h2>学生姓名：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <button @click="showName">点我提示学生名字</button>	
    </div>
</template>

<script>
    // 组件交互相关的代码（数据、方法等等）

    // 分别暴露
    // export const school = Vue.extend({
    
    // 默认暴漏
    export default {
        name:'Student', //组件名称
        // el:'#root', //组件定义时，一定不要写el配置项，因为最终所有的组件都要被一个vm管理，由vm决定服务于哪个容器。
        data(){
            return {
                name:'尚硅谷',
                age:21
            }
        },
        methods: {
            showName(){
                alert(this.name)
            }
        },
    }

    // 默认导出组件
    // export default school;
</script>

<style>
    /* 组件样式 */
    .dome{
        background-color: orange;
    }
</style>