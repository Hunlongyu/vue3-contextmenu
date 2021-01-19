import bus from './bus'
import { DirectiveBinding } from 'vue'
const onMounted = (el: HTMLElement, binding: DirectiveBinding) => {
  el.addEventListener('contextmenu', e => {
    e.preventDefault()
    bus.emit('add-contextmenu', { x: e.pageX, y: e.pageY, value: binding.value })
  })
  document.addEventListener('click', () => {
    bus.emit('hide-contextmenu')
  })
}

const unmounted = () => {
  bus.emit('hide-contextmenu')
}

export default {
  mounted: onMounted,
  unmounted: unmounted
}
