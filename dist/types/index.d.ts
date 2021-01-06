import { App } from 'vue';
import directive from './components/directive';
import Contextmenu from './components/ContextMenu.vue';
import ContextmenuItem from './components/ContextMenuItem.vue';
import ContextmenuSubmenu from './components/ContextMenuSubmenu.vue';
export { directive, Contextmenu, ContextmenuItem, ContextmenuSubmenu };
declare const _default: {
    install: (app: App<any>) => void;
};
export default _default;
