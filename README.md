# vue3-contextmenu

由 Vue3 和 Typescript 编写的 Contextmenu 右键菜单组件。

[官网 & 文档 & 示例](https://hunlongyu.github.io/vue3-contextmenu/)

### 截图
![vue3-contextmenu.png](https://i.loli.net/2021/01/06/n8JgY9MW5bqeax2.png)

### 安装
```bash
$ npm i -S vue3-contextmenu

# or

$ yarn add vue3-contextmenu
```

### 使用

mian.ts
```js
import contextmenu from 'vue3-contextmenu'
app.use(contextmenu)
```

app.vue
```html
<template>
  <context-menu>
    <context-menu-submenu :label="'查看'">
      <context-menu-item disabled>图标</context-menu-item>
      <context-menu-item>列表</context-menu-item>
      <context-menu-item>详细信息</context-menu-item>
    </context-menu-submenu>
    <context-menu-submenu :label="'排序方式'">
      <context-menu-item>名称</context-menu-item>
      <context-menu-item>日期</context-menu-item>
      <context-menu-item>类型</context-menu-item>
      <context-menu-item>大小</context-menu-item>
      <context-menu-item disabled>时长</context-menu-item>
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

  <div v-contextmenu>右键点击区域</div>
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
```

### 说明

| 参数     | 说明                 | 类型    | 默认值  |
| -------- | -------------------- | ------- | ------- |
| label    | 子菜单标题文字       | String  | `null`  |
| disabled | 是否禁用菜单         | Boolean | `false` |
| divider  | 是否在下方显示分割线 | Boolean | `false` |


可根据 `class` 自定义样式覆盖

* `v-contextmenu`: 根元素
* `v-contextmenu-item`: 单个菜单
* `v-contextmenu-item:hover`: 单个菜单鼠标悬浮激活状态
* `v-contextmenu-item--disabled`: 单个菜单禁用状态
* `v-contextmenu-divider`: 分割线
* `v-contextmenu-submenu-label`: 子菜单标题
* `v-contextmenu-submenu-right`: 子菜单向右箭头
* `v-contextmenu-submenu-children`: 子菜单容器




## Project setup
```
yarn install
yarn serve
yarn build
yarn lint
```
