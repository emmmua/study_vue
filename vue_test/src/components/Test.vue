<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="hello" appear>
        <h1 v-show="isShow">{{ msg }}</h1>
    </transition>
  </div>
</template>

<script>
export default {
    name: 'Test',
    data() {
        return {
            msg: 'Hello World',
            isShow: true
        }
    }
}
</script>

<style scoped>
h1 {
    background-color: orange;
}

.hello-enter-active {
    animation: identifier 1s;
}

.hello-leave-active {
    animation: identifier 1s reverse;
}

@keyframes identifier {
    from {
        transform: translateX(-100%);
    }

    to {
        transform: translateX(0px);
    }
}
</style>