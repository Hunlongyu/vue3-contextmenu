<template>
  <teleport to="body">
    <div v-show="show" ref="contextmenu" class="v-contextmenu">
      <slot />
    </div>
  </teleport>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
export default defineComponent({
  name: 'ContextMenu',
  props: {},
  emits: ['show', 'hide'],
  setup (props, { emit }) {
    const show = ref(true)
    const contextmenu = ref()

    function getPostion (x: number, y: number) {
      const el = contextmenu.value as HTMLDivElement
      const style = { top: 0, left: 0 }
      const { innerWidth, innerHeight }  = window
      const { clientWidth, clientHeight } = el
      if (y + clientHeight > innerHeight) {
        style.top -= clientHeight
      }
      if (x + clientWidth > innerWidth) {
        style.left -= clientWidth
      }
      if (style.top < 0) {
        style.top = clientHeight < innerHeight ? (innerHeight - clientHeight) / 2 : 0
      }
      if (style.left < 0) {
        style.left = clientWidth < innerWidth ? (innerWidth - clientWidth) / 2 : 0
      }
      return style
    }

    function showMenu (x: number, y: number) {
      show.value = true
    }

    function hideMenu () {
      show.value = false
      emit('hide')
    }

    onMounted(() => {

    })

    return {
      show
    }
  }
})
</script>