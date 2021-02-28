import bus from "./bus";

export default function($event, value) { 
   $event.preventDefault()
   bus.emit('add-contextmenu', { x: $event.pageX, y: $event.pageY, value });
   document.addEventListener('click', () => {bus.emit('hide-contextmenu')})
}
