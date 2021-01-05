<template>
<div class="">
  <div class="demo" v-contextmenu v-if="show">右键点击区域</div>
  <button @click="show = !show">show</button>
  <context-menu>
    <context-menu-item :style="itemStyle" @click="copyEvent">复制</context-menu-item>
    <context-menu-item>粘贴</context-menu-item>
    <context-menu-item>剪切</context-menu-item>
    <context-menu-submenu>
      <context-menu-item :disabled="true">新建文件</context-menu-item>
      <context-menu-item>新建文件夹</context-menu-item>
    </context-menu-submenu>
  </context-menu>
</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'App',
  data () {
    return {
      show: true
    }
  },
  setup () {
    const itemStyle = ref({})

    function copyEvent (e: MouseEvent) {
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
