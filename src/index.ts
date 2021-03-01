import { App } from 'vue'
import directive from './components/directive'
import emitContext from './components/emitContext'

import Contextmenu from './components/ContextMenu.vue'
import ContextmenuItem from './components/ContextMenuItem.vue'
import ContextmenuSubmenu from './components/ContextMenuSubmenu.vue'

const install = (app: App): void => {
  app.provide('emitContext', emitContext)
  app.directive('contextmenu', directive)
  app.component(Contextmenu.name, Contextmenu)
  app.component(ContextmenuItem.name, ContextmenuItem)
  app.component(ContextmenuSubmenu.name, ContextmenuSubmenu)
}

export {
  emitContext,
  directive,
  Contextmenu,
  ContextmenuItem,
  ContextmenuSubmenu
}

export default {
  install
}
