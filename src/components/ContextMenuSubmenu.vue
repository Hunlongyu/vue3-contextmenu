<template>
  <div class="submenu">
    <div class="sub-label">
      <span><slot name="label">{{label}}</slot></span>
    </div>
    <div class="children-menu" v-show="hover">
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'ContextMenuSubmenu',
  props: {
    label: String
  },
  setup () {
    const hover = ref(false)

    return { hover }
  }
})
</script>
<style scoped>

</style>
