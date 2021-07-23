<template>
  <teleport to="body">
    <div class="v-contextmenu" v-show="show && bindingValue && name === bindingValue.name" ref="contextmenu">
      <slot />
    </div>
  </teleport>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, nextTick } from 'vue'
import bus from './bus'
export default defineComponent({
  name: 'ContextMenu',
  props: {
    cutomClass: String,
    name: String
  },
  setup () {
    const show = ref(false)
    const contextmenu = ref<HTMLDivElement>()
    const bindingValue = ref<object>()

    function getPosition (x: number, y: number) {
      const style = { top: y, left: x }
      const { innerWidth, innerHeight } = window
      if (contextmenu.value) {
        const el: HTMLDivElement = contextmenu.value
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
    }

    async function showMenu (x: number, y: number, val?: object) {
      show.value = true
      bindingValue.value = { ...val }
      bus.emit('bindValue', bindingValue.value)
      await nextTick()
      if (contextmenu.value) {
        const el: HTMLDivElement = contextmenu.value
        const p = getPosition(x, y)
        if (p) {
          el.style.top = `${p.top + 5}px`
          el.style.left = `${p.left + 5}px`
        }
      }
    }

    function hideMenu () {
      show.value = false
    }

    onMounted(() => {
      bus.on('add-contextmenu', e => {
        showMenu(e.x, e.y, e.value)
      })
      bus.on('hide-contextmenu', () => {
        hideMenu()
      })
      bus.on('item-click', () => {
        show.value = false
      })
    })

    return { bindingValue, show, contextmenu }
  }
})
</script>
<style scoped>
.v-contextmenu{
  position: fixed;
  top: 0;
  left: 0;
  color: #444;
  display: inline-block;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
</style>
