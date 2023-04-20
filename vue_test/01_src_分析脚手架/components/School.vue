<template>
    <div class="demo">
        <!--  组件模板 -->
        <h2>学校名称：{{schoolName}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="showName">点我提示学校名</button>	
    </div>
</template>

<script>
    // 组件交互相关的代码（数据、方法等等）

    // 分别暴露
    // export const school = Vue.extend({
    
    // 默认暴漏
    export default {
        name:'School', //组件名称
        // el:'#root', //组件定义时，一定不要写el配置项，因为最终所有的组件都要被一个vm管理，由vm决定服务于哪个容器。
        data(){
            return {
                schoolName:'尚硅谷',
                address:'北京昌平'
            }
        },
        methods: {
            showName(){
                alert(this.schoolName)
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