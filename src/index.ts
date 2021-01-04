import { App } from 'vue'
// import directive from './components/directive'

import Contextmenu from './components/ContextMenu.vue'
import ContextmenuItem from './components/ContextMenuItem.vue'
import ContextmenuSubmenu from './components/ContextMenuSubmenu.vue'

const install = (app: App): void => {
  // app.directive('contextmenu', directive)
  app.component(Contextmenu.name, Contextmenu)
  app.component(Contextmenu.name, Contextmenu)
  app.component(Contextmenu.name, Contextmenu)
}

export {
  // directive,
  Contextmenu,
  ContextmenuItem,
  ContextmenuSubmenu
}

export default {
  install
}
