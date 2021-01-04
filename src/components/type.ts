import type { Ref } from 'vue'

export type IContextmenuOptions = {
  visible?: boolean
}

export type IContextmenuInstance = {
  visible?: Ref<boolean>
  show: () => void
}