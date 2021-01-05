<template>
  <div>
    <div class="v-contextmenu-submenu" :class="hover ? ' v-contextmenu-submenu--hover' : ''" @mouseenter="mouseEnterEvent" @mouseleave="mouseLeaveEvent">
      <div class="v-contextmenu-submenu-label">
        <span><slot name="label">{{label}}</slot></span>
        <span class="v-contextmenu-submenu-right"></span>
      </div>
      <div class="v-contextmenu-submenu-children" v-show="hover">
        <slot />
      </div>
    </div>
    <div class="v-contextmenu-divider" v-if="divider"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'ContextMenuSubmenu',
  props: {
    label: String,
    divider: {
      type: Boolean,
      default: false
    }
  },
  setup () {
    const hover = ref(false)

    function mouseEnterEvent () {
      hover.value = true
    }

    function mouseLeaveEvent () {
      hover.value = false
    }

    return { hover, mouseEnterEvent, mouseLeaveEvent }
  }
})
</script>
<style scoped>
.v-contextmenu-submenu{
  position: relative;
}
.v-contextmenu-submenu--hover > .v-contextmenu-submenu-label{
  color: #409eff;
  background-color: #f2f8fe;
}
.v-contextmenu-submenu-label{
  cursor: pointer;
  padding: 10px 20px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
}
.v-contextmenu-submenu-children{
  position: absolute;
  left: 100%;
  top: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
 .v-contextmenu-submenu-right {
 box-sizing: border-box;
 position: relative;
 display: block;
 width: 14px;
 height: 14px;
 border: 2px solid transparent;
 border-radius: 100px;
 margin-left: 30px;
 margin-right: -8px;
}

.v-contextmenu-submenu-right::after {
 content: "";
 display: block;
 box-sizing: border-box;
 position: absolute;
 width: 7px;
 height: 7px;
 border-bottom: 2px solid;
 border-right: 2px solid;
 transform: rotate(-45deg);
 right: 6px;
 top: 4px;
 opacity: 0.6;
}
.v-contextmenu-divider{
  border-bottom: 1px solid #ebebeb;
  box-sizing: border-box;
  height: 1px;
}
</style>
