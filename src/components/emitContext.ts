import bus from './bus'

export default function ($event: MouseEvent, value: Record<string, unknown>) {
  $event.preventDefault()
  bus.emit('add-contextmenu', { x: $event.clientX, y: $event.clientY, value })
  document.addEventListener('click', () => { bus.emit('hide-contextmenu') })
}
