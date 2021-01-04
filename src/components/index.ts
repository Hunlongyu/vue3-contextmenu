import { App, VNode } from 'vue'
import ContextMenu from './components/ContextMenu.vue'
import ContextMenuItem from './components/ContextMenuItem.vue'
import ContextMenuSubmenu from './components/ContextMenuSubmenu.vue'

const Plugin = (app: App) => {
  app.component(ContextMenu.name, ContextMenu)
  app.component(ContextMenuItem.name, ContextMenuItem)
  app.component(ContextMenuSubmenu.name, ContextMenuSubmenu)
}

const Directive = (app: App) => {
  app.directive('contextmenu', (el, binding, vnode: VNode) => {
    const instance = vnode.dirs[0].instance
    instance.contextmenu.registerHandlers({ el, vnode })
  })
}

const contextmenu = {
  install (app: App) {
    Plugin(app, this)
  }
}

const directive = {
  install (app: App) {
    Directive(app, this)
  }
}

export {
  contextmenu,
  directive
}
