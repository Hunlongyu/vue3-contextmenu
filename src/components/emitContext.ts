import bus from './bus'

export default function ($event: MouseEvent, value: Record<string, unknown>) {
  $event.preventDefault()
  bus.emit('add-contextmenu', { x: $event.pageX, y: $event.pageY, value })
  document.addEventListener('click', () => { bus.emit('hide-contextmenu') })
}
