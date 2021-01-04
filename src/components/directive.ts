import ContextMenu from './index'

const VContextmenu = {
  mounted (el: any, binding: any) {
    console.log(el, binding)
    const vm = binding.instance
    console.log(vm, 'vm')
    const instance = ContextMenu({
      visible: !!binding.value
    })
    el.instance = instance
  },
  unmounted () {
    console.log('unmounted')
  }
}

export default VContextmenu
