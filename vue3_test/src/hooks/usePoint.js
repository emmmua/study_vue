import {onBeforeMount, onMounted, reactive} from 'vue'

function savePoint() {
    let point = reactive({
        x: 0,
        y: 0
    })

    // 点击获取鼠标坐标
    function getPointer(event) {
        point.x = event.pageX
        point.y = event.pageY
        console.log(point.x, point.y)
    }

    onMounted(() => {
        window.addEventListener('click', getPointer)
    })


    onBeforeMount(() => {
        window.removeEventListener('click', getPointer)
    })

    return point
}

export default savePoint