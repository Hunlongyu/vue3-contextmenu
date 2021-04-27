import bus from './bus'

export default function ($event: MouseEvent) {
  $event.preventDefault()
  bus.emit('hide-contextmenu')
}
