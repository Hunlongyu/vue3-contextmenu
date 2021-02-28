# vue3-contextmenu

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
    <context-menu-item @itemClickHandele="itemClickEvent" :divider="true"> Stop </context-menu-item>
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
export default {
  name: 'App',
  setup () {
    function refresh () {
      alert('Refresh')
    }

    function itemClickEvent (e: any) {
      console.log('Stop, cutom-id:' + e.id)
    }

    return { refresh, itemClickEvent }
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
| itemClickHandele | Event on element click, contains custom id as event attribute `id´ | any | `undefinded` |


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
