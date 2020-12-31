<template>
  <!-- <div class="demo" v-contextmenu>右键点击区域</div> -->
  <contextmenu>
    <context-menu-item :style="itemStyle" @click="copyEvent('copy')">复制</context-menu-item>
    <context-menu-item>粘贴</context-menu-item>
    <context-menu-item>剪切</context-menu-item>
    <context-menu-submenu>
      <context-menu-item :disabled="true">新建文件</context-menu-item>
      <context-menu-item>新建文件夹</context-menu-item>
    </context-menu-submenu>
  </contextmenu>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import contextmenu from './components/ContextMenu.vue'
import contextMenuItem from './components/ContextMenuItem.vue'
import contextMenuSubmenu from './components/ContextMenuSubmenu.vue'

export default defineComponent({
  name: 'App',
  components: {
    contextmenu,
    contextMenuItem,
    contextMenuSubmenu
  },
  setup () {
    const itemStyle = ref({})

    function copyEvent (e: any) {
      console.log('copyEvent: ', e)
    }

    return { itemStyle, copyEvent }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.demo{
  width: 200px;
  height: 100px;
  background-color: #dadada;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
