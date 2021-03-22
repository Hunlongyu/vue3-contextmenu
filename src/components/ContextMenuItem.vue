<template>
  <div>
    <div class="v-contextmenu-item" :class="itemClass" @click="handleClick" >
      <slot />
    </div>
    <div class="v-contextmenu-divider" v-if="divider"></div>
  </div>
</template>
<script lang="ts">
import { reactive, computed, defineComponent, onMounted } from 'vue'
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
  setup (props, { emit }) {
    const val = reactive({ value: {} })
    function handleClick () {
      emit('itemClickHandle', val.value)
      bus.emit('item-click')
    }

    onMounted(() => {
      bus.on('bindValue', e => {
        val.value = e
      })
    })

    const itemClass = reactive({
      'v-contextmenu-item--disabled': computed(() => props.disabled)
    })

    return { itemClass, handleClick }
  }
})
</script>
<style scoped>
.v-contextmenu-item{
  cursor: pointer;
  background-color: #fff;
  padding: 10px 20px;
  font-size: 14px;
  white-space: nowrap;
}
.v-contextmenu-item:hover{
  color: #409eff;
  background-color: #f2f8fe;
}
.v-contextmenu-item--disabled{
  color: #c0c4cc;
  cursor: not-allowed;
  pointer-events: none;
}
.v-contextmenu-divider{
  border-bottom: 1px solid #ebebeb;
  box-sizing: border-box;
  height: 1px;
}
</style>
