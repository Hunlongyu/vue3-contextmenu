import { App } from 'vue'
import directive from './components/directive'

import Contextmenu from './components/ContextMenu.vue'
import ContextmenuItem from './components/ContextMenuItem.vue'
import ContextmenuSubmenu from './components/ContextMenuSubmenu.vue'

const install = (app: App): void => {
  app.directive('contextmenu', directive)
  app.component(Contextmenu.name, Contextmenu)
  app.component(ContextmenuItem.name, ContextmenuItem)
  app.component(ContextmenuSubmenu.name, ContextmenuSubmenu)
}

export {
  directive,
  Contextmenu,
  ContextmenuItem,
  ContextmenuSubmenu
}

export default {
  install
}
// export default {
//   install (app: App) {
//     app.directive('contextmenu', directive)
//     app.component(Contextmenu.name, Contextmenu)
//     app.component(ContextmenuItem.name, ContextmenuItem)
//     app.component(ContextmenuSubmenu.name, ContextmenuSubmenu)
//   },
//   directive: directive
// }
