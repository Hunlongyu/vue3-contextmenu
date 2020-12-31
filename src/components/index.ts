import ContextMenu from './components/ContextMenu.vue'
import ContextMenuItem from './components/ContextMenuItem.vue'
import ContextMenuSubmenu from './components/ContextMenuSubmenu.vue'

const Plugin = (app) => {
  app.component(ContextMenu.name, ContextMenu)
  app.component(ContextMenuItem.name, ContextMenuItem)
  app.component(ContextMenuSubmenu.name, ContextMenuSubmenu)
}

const Directive = (app) => {
  app.directive('contextmenu', (el, binding, vnode) => {
    const instance = vnode.dirs[0].instance
    instance.contextmenu.registerHandlers({ el, vnode })
  })
}

const contextmenu = {
  install(app) {
    Plugin(app, this)
  }
}

const directive = {
  install(app) {
    Directive(app, this)
  }
}

export {
  contextmenu,
  directive
}