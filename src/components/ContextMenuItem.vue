<template>
  <div class="menuItem" :class="itemClass" @click="handleClick">
    <slot />
  </div>
</template>
<script>
import { reactive, computed, defineComponent } from "vue"
import bus from './mitt'
export default defineComponent({
  name: 'ContextMenuItem',
  props: {
    disabled: Boolean,
    style: Object
  },
  setup (props) {
    function handleClick () {
      bus.emit('item-click')
      console.log('props.style: ', props.style)
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
</style>