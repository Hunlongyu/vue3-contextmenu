<template>
  <div class="contextmenu" v-show="show" ref="contextmenu">
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, nextTick } from 'vue'
import bus from './bus'
export default defineComponent({
  name: 'ContextMenu',
  setup () {
    const show = ref(false)
    const contextmenu = ref(null)

    function getPosition (x: number, y: number) {
      const style = { top: y, left: x }
      const { innerWidth, innerHeight } = window
      const el: any = contextmenu.value
      const { clientWidth: elWidth, clientHeight: elHeight } = el
      if (y + elHeight > innerHeight) {
        style.top -= elHeight
      }
      if (x + elWidth > innerWidth) {
        style.left -= elWidth
      }
      if (style.top < 0) {
        style.top = elHeight < innerHeight ? (innerHeight - elHeight) / 2 : 0
      }
      if (style.left < 0) {
        style.left = elWidth < innerWidth ? (innerWidth - elWidth) / 2 : 0
      }
      return style
    }

    async function showMenu (e: MouseEvent) {
      show.value = true
      const { pageX: x, pageY: y } = e
      await nextTick()
      const el: any = contextmenu.value
      const { left, top } = getPosition(x, y)
      el.style.top = `${top + 5}px`
      el.style.left = `${left + 5}px`
    }

    onMounted(() => {
      bus.on('add-contextmenu', e => {
        showMenu(e)
      })
      bus.on('item-click', () => {
        show.value = false
      })
    })

    return { show, contextmenu }
  }
})
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
