<template>
  teleport
  <div class="contextmenu">
    div.item
    {{options}}
    <node />
  </div>
</template>
<script lang="ts" setup>
import { onMounted, h } from 'vue'

const props = defineProps({
  options: Object
})

const node = () => {
  return (
    h('div', 'lala')
  )
}

function init () {
  console.log('=== list ===', props.options)
}

onMounted(() => {
  init()
})
</script>
<style lang="scss" scoped>

</style>
