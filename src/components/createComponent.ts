// import { reactive, toRefs } from 'vue'
import type { IContextmenuOptions, IContextmenuInstance } from './type'
export function createComponent (options: IContextmenuOptions): IContextmenuInstance {
  // const data = reactive({
  //   ...options
  // })

  function show () {
    console.log('右键点击了')
  }

  // const componetSetupConfig = {
  //   ...toRefs(data),
  //   show
  // }

  return show
}
