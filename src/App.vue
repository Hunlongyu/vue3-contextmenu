<template>
  <contextmenu>
    <context-menu-item>复制</context-menu-item>
    <context-menu-item>粘贴</context-menu-item>
    <context-menu-item>剪切</context-menu-item>
    <context-menu-submenu>
      <context-menu-item>新建文件</context-menu-item>
      <context-menu-item>新建文件夹</context-menu-item>
    </context-menu-submenu>
  </contextmenu>
</template>

<script>
import contextmenu from './components/ContextMenu.vue'
import contextMenuItem from './components/ContextMenuItem.vue'
import contextMenuSubmenu from './components/ContextMenuSubmenu.vue'

export default {
  name: 'App',
  components: {
    contextmenu,
    contextMenuItem,
    contextMenuSubmenu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
