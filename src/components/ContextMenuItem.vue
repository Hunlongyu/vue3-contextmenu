<template>
  <div>
    <div class="menuItem" :class="itemClass" @click="handleClick" >
      <slot />
    </div>
    <div class="menuItem-divider" v-if="divider"></div>
  </div>
</template>
<script lang="ts">
import { reactive, computed, defineComponent } from 'vue'
import bus from './bus'
export default defineComponent({
  name: 'ContextMenuItem',
  props: {
    disabled: Boolean,
    divider: {
      type: Boolean,
      default: false
    }
  },
  setup (props) {
    function handleClick () {
      bus.emit('item-click')
    }

    const itemClass = reactive({
      'menuItem-disabled': computed(() => props.disabled)
    })

    return { itemClass, handleClick }
  }
})
</script>
<style scoped>
.menuItem{
  cursor: pointer;
  background-color: #fff;
  padding: 10px 20px;
  font-size: 14px;
  white-space: nowrap;
}
.menuItem:hover{
  color: #409eff;
  background-color: #f2f8fe;
}
.menuItem-disabled{
  color: #c0c4cc;
  cursor: not-allowed;
  pointer-events: none;
}
.menuItem-disabled:hover{
  color: #c0c4cc;
}
.menuItem-divider{
  border-bottom: 1px solid #ebebeb;
  box-sizing: border-box;
  height: 1px;
}
</style>
