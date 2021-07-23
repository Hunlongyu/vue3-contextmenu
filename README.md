# 注意 `同页面多菜单--->需传参指定ContextMenu Name`

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
import 'vue3-contextmenu/dist/vue3-contextmenu.css'
app.use(contextmenu)
```

app.vue
```html
<template>
  <context-menu name="context-menu-1">
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
    <context-menu-item @itemClickHandle="itemClickEvent" :divider="true">停止</context-menu-item>
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

  <div v-contextmenu="{name: 'context-menu-1', id: '123'}">右键点击区域{id: '123'}</div>
  <div @contextmenu="openContextMenu">右键点击区域{ id: [1, 2, 3]}</div>
</template>

<script lang="ts">

import { inject } from 'vue'

export default {
  name: 'App',
  setup () {
    const emitContext = inject('emitContext') as (event: Event, dataId: Record<string, unknown>) => void

    function refresh () {
      alert('刷新')
    }

    function openContextMenu (e: any) {
      emitContext(e, { name: 'context-menu-1', id: [1, 2, 3] })
    }

    function itemClickEvent (e: any) {
      console.log('停止，自定义id:' + e.id)
    }

    return { refresh, itemClickEvent, openContextMenu }
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
| itemClickHandle | 菜单绑定的点击事件, 参数为自定义数据。如： `{ id: 123 }` | any | `undefinded` |


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


# vue3-contextmenu (ENGLISH TRANSLATION)

English translation (with the help of google translator) !ONLY! 

Right-click menu component for Vue3 writte in Typescript

Official website, documentation and example in chinese (https://hunlongyu.github.io/vue3-contextmenu/) 

### Screenshot
![vue3-contextmenu.png](https://i.loli.net/2021/01/06/n8JgY9MW5bqeax2.png)

### Installation
```bash
$ npm i -S vue3-contextmenu

# or

$ yarn add vue3-contextmenu
```

### How-To

main.ts
```js
import contextmenu from 'vue3-contextmenu'
import 'vue3-contextmenu/dist/vue3-contextmenu.css'
app.use(contextmenu)
```

app.vue
```html
<template>
  <context-menu>
    <context-menu-submenu :label="'View'">
      <context-menu-item disabled> Icon </context-menu-item>
      <context-menu-item> List </context-menu-item>
      <context-menu-item> Detailed information </context-menu-item>
    </context-menu-submenu>
    <context-menu-submenu :label="'Sort by'">
      <context-menu-item> Name </context-menu-item>
      <context-menu-item> Date </context-menu-item>
      <context-menu-item> Type </context-menu-item>
      <context-menu-item> Size </context-menu-item>
      <context-menu-item disabled> Duration </context-menu-item>
    </context-menu-submenu>
    <context-menu-item @click="refresh" :divider="true"> Refresh </context-menu-item>
    <context-menu-item @itemClickHandle="itemClickEvent" :divider="true"> Stop </context-menu-item>
    <context-menu-submenu :label="'Custom'" divider>
      <context-menu-item> Secondary menu </context-menu-item>
      <context-menu-submenu :label="'Multi level menu'">
        <context-menu-item>Three level menu</context-menu-item>
        <context-menu-item>Nested menu</context-menu-item>
      </context-menu-submenu>
    </context-menu-submenu>
    <context-menu-submenu :label="'New'" divider>
      <context-menu-item>New file</context-menu-item>
      <context-menu-item>New folder</context-menu-item>
      <context-menu-item>Shortcut</context-menu-item>
    </context-menu-submenu>
    <context-menu-item :disabled="true">Properties</context-menu-item>
  </context-menu>

  <div v-contextmenu="{id: '123'}">Right click on area {id: '123'}</div>
  <div v-contextmenu="{id: [1, 2, 3]}">Right click on area { id: [1, 2, 3]}</div>
</template>

<script lang="ts">

import { inject } from 'vue'

export default {
  name: 'App',
  setup () {
    const emitContext = inject('emitContext') as (event: Event, dataId: Record<string, unknown>) => void

    function refresh () {
      alert('refresh')
    }

    function openContextMenu (e: any) {
      emitContext(e, { id: [1, 2, 3] })
    }

    function itemClickEvent (e: any) {
      console.log('Stop; with id:' + e.id)
    }

    return { refresh, itemClickEvent, openContextMenu }
  }
}
</script>
```

### 说明

| 参数     | 说明                 | 类型    | 默认值  |
| -------- | -------------------- | ------- | ------- |
| label    | Submenu title text       | String  | `null`  |
| disabled | Toggle enable_/disable of menu         | Boolean | `false` |
| divider  | Show dividing line below item | Boolean | `false` |
| itemClickHandle | Event on element click, contains custom id as event attribute `id´ | any | `undefinded` |


Css classes that may be customized

* `v-contextmenu`: Root element
* `v-contextmenu-item`: contextmenu item
* `v-contextmenu-item:hover`: contextmenu item, in hovered state
* `v-contextmenu-item--disabled`: contextmenu item, disabled state
* `v-contextmenu-divider`: menu divider line
* `v-contextmenu-submenu-label`: Submenu title
* `v-contextmenu-submenu-right`: Right arrow in submenu
* `v-contextmenu-submenu-children`: submenu container




## Project setup
```
yarn install
yarn serve
yarn build
yarn lint
```
