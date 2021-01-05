import bus from './bus'
const onMounted = (el: HTMLElement) => {
  el.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    bus.emit('add-contextmenu', e)
  }, true)
}

const unmounted = (el: HTMLElement) => {
  el.removeEventListener('contextmenu', () => {
    bus.emit('remove-contextmenu')
  }, true)
}

export default {
  mounted: onMounted,
  unmounted: unmounted
}
