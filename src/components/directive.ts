import bus from './bus'
const onMounted = (el: HTMLElement) => {
  console.log('init')
  bus.emit('init-contextmenu', el)
  // document.addEventListener('contextmenu', e => {
  //   e.preventDefault()
  //   // bus.emit('hide-contextmenu')
  // })
  // el.addEventListener('contextmenu', e => {
  //   e.preventDefault()
  //   bus.emit('add-contextmenu', e)
  // }, true)
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
