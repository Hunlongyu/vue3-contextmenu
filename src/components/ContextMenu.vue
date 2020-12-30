<template>
  <div class="contextmenu" v-if="show">
    <slot />
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  name: 'ContextMenu',
  setup () {
    const show = ref(true)
    
    return { show }
  }
}
</script>
<style scoped>
.contextmenu{
  color: #444;
  display: inline-block;
  background-color: #fff;
  border: 1px solid#eee;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
</style>