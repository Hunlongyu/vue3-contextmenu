import { App } from 'vue'
import VContextmenu from './components/directive'

export default {
  install: (app: App) => {
    app.directive('contextmenu', VContextmenu)
  },
  directive: VContextmenu
}
