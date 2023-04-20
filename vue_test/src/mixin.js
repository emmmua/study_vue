// 这个导出方法是用来导出多个方法的，如果只有一个方法，可以使用默认导出
export const hunhe = {
    methods: {
        showName() {
            console.log(this.name);
          }
    },
    mounted() {
        console.log('混合对象的钩子被调用');
    },
}

export const hunhe2 = {
    data() {
        return {
            x: 10,
            y: 20
        }
    }
}

// 默认导出
// export default mixin;