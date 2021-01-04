<template>
  <div class="contextmenu" v-if="show" :ref="dom">
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
    let refs = ''
    const dom = (ele: any) => {
      refs = ele
    }

    // function showMenu () {
    //   if (!refs || refs === '') {
    //     console.log('bu cun zai')
    //   }
    // }

    function handleContextMenu (e: any) {
      e.preventDefault()
      show.value = true
      // console.log('右键点击了')
    }

    // 注册右键点击事件
    function registerHandle () {
      document.addEventListener('contextmenu', handleContextMenu)
    }

    onMounted(() => {
      registerHandle()
      bus.on('item-click', () => {
        show.value = false
      })
    })

    return { show, dom, refs }
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
