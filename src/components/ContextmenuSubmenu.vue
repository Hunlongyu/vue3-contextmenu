<template>
  <div class="contextmenu-submenu">
    <div class="icon">
      <slot name="icon" />
    </div>
    <div class="label">
      <slot name="label" />
    </div>
    <div class="children">

    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';
const props = defineProps({
  icon: String,
  label: {
    type: String,
    required: true
  },
  disabled: Boolean,
  divider: {
    type: Boolean,
    default: false
  }
})

onMounted(() => {
  console.log('=== props ===', props)
})
</script>