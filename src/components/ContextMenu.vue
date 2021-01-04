<template>
  <div class="contextmenu" v-show="show" ref="dom">
    <slot />
  </div>
</template>
<script lang="ts">
import { onMounted, ref } from 'vue'
import bus from './bus'
export default {
  name: 'ContextMenu',
  setup () {
    const show = ref(false)
    const dom = ref(null)

    // function showMenu () {
    //   if (dom.value) {
    //     console.log('bu cun zai')
    //   }
    // }

    // function getPosition (x: number, y: number) {
    //   const { value: el } = dom
    //   const style = { top: y, left: x }
    //   const { innerWidth, innerHeight } = window
    //   const { clientWidth: elWidth, clientHeight: elHeight } = el
    //   if (y + elHeight > innerHeight) {
    //     style.top -= elHeight
    //   }
    //   if (x + elWidth > innerWidth) {
    //     style.left -= elWidth
    //   }
    //   if (style.top < 0) {
    //     style.top = elHeight < innerHeight ? (innerHeight - elHeight) / 2 : 0
    //   }
    //   if (style.left < 0) {
    //     style.left = elWidth < innerWidth ? (innerWidth - elWidth) / 2 : 0
    //   }
    //   return style
    // }

    function handleContextMenu (e: Event) {
      e.preventDefault()
      // const { value: el } = dom
      // const { pageX: x, pageY: y } = e
      show.value = true
      // await nextTick()
      // const { left, top } = getPosition(x, y)
      // el.style.top = `${top + 5}px`
      // el.style.left = `${left + 5}px`
    }

    // // 注册右键点击事件
    function registerHandle () {
      document.addEventListener('contextmenu', handleContextMenu)
    }

    onMounted(() => {
      registerHandle()
      bus.on('item-click', () => {
        show.value = false
      })
    })

    return { show }
  }
}
</script>
<style scoped>
.contextmenu{
  position: fixed;
  top: 0;
  left: 0;
  color: #444;
  display: inline-block;
  background-color: #fff;
  border: 1px solid#eee;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
</style>
