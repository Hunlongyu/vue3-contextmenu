<template>
<div class="">
  <h1>Vue3-contextmenu 右键菜单</h1>
  <div class="demo" v-contextmenu>右键点击区域</div>
  <context-menu>
    <context-menu-submenu :label="'查看'">
      <context-menu-item :disabled="true">图标</context-menu-item>
      <context-menu-item>列表</context-menu-item>
      <context-menu-item>详细信息</context-menu-item>
    </context-menu-submenu>
    <context-menu-submenu :label="'排序方式'">
      <context-menu-item>名称</context-menu-item>
      <context-menu-item>日期</context-menu-item>
      <context-menu-item>类型</context-menu-item>
      <context-menu-item>大小</context-menu-item>
      <context-menu-item :disabled="true">时长</context-menu-item>
    </context-menu-submenu>
    <context-menu-item @click="refresh" :divider="true">刷新</context-menu-item>
    <context-menu-submenu :label="'自定义'" divider>
      <context-menu-item>二级菜单</context-menu-item>
      <context-menu-submenu :label="'多级菜单'">
        <context-menu-item>三级菜单</context-menu-item>
        <context-menu-item>嵌套菜单</context-menu-item>
      </context-menu-submenu>
    </context-menu-submenu>
    <context-menu-submenu :label="'新建'" divider>
      <context-menu-item>新建文件</context-menu-item>
      <context-menu-item>新建文件夹</context-menu-item>
      <context-menu-item>快捷方式</context-menu-item>
    </context-menu-submenu>
    <context-menu-item :disabled="true">属性</context-menu-item>
  </context-menu>
</div>
</template>

<script lang="ts">
export default {
  name: 'App',
  setup () {
    function refresh () {
      alert('刷新')
    }

    return { refresh }
  }
}
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
  width: 400px;
  height: 200px;
  background-color: #ddd;
  display: flex;
  margin: 100px auto;
  justify-content: center;
  align-items: center;
}
</style>
