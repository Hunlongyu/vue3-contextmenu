<template>
  <teleport to="body" :disabled="options.appendToBody">
    <div class="contextmenu">
      {{options}}
      <node />
    </div>
  </teleport>
</template>
<script lang="ts" setup>
import { onMounted, h, VNode } from 'vue'
import type { OptionsType, ContextmenuListType } from '../types'

const props = defineProps<{ options: OptionsType }>()

const node = () => {
  const list = props.options.list
  console.log('=== list ===', list)
  let dom: VNode
  let domString: string
  const render = (list: ContextmenuListType[]) => {
    for (const i of list) {
      domString += `<div class="contextmenu-item">
        <div class="icon"><i class="${i.icon}"></i></div>
      </div>`
    }
  }
  render(list)
  return (
    h('div', 'lala')
  )
}

function init () {
  if (!props.options.list.length) return false
  console.log('=== options ===', props.options)
}

onMounted(() => {
  init()
})
</script>
<style lang="scss" scoped>

</style>
