<template>
  <Contextmenu :options="options" />
</template>

<script lang="ts" setup>
import Contextmenu from './components/Contextmenu.vue'
import type { OptionsType } from './types'
const options: OptionsType = {
  x: 0,
  y: 0,
  id: 0,
  zIndex: 1,
  disabled: false,
  appendToBody: true,
  customClass: 'myContextmenu',
  list: [
    {
      icon: '1',
      label: '1'
    },
    {
      icon: '2',
      label: '2',
      divider: true,
      children: [
        {
          icon: '2-1',
          label: '2-1'
        },
        {
          icon: '2-2',
          label: '2-2',
          disabled: true
        }
      ]
    },
    {
      icon: '3',
      label: '3'
    }
  ]
}
</script>

<style>
#app {
  height: 100%;
}
</style>
