import bus from './bus'
const onMounted = (el: HTMLElement) => {
  document.addEventListener('contextmenu', () => {
    bus.emit('hide-contextmenu')
    el.addEventListener('contextmenu', e => {
      e.preventDefault()
      bus.emit('add-contextmenu', e)
    }, true)
  }, true)
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
