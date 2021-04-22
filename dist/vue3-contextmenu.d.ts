import { DefineComponent, Plugin } from 'vue';

declare const vue3Contextmenu: DefineComponent & { install: Exclude<Plugin['install'], undefined> };
export default vue3Contextmenu;
