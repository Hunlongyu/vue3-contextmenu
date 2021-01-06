import { createApp } from 'vue'
import App from './App.vue'
import contextmenu from './index'
// import contextmenu from 'vue3-contextmenu'
// import 'vue3-contextmenu/dist/vue3-contextmenu.css'
const app = createApp(App)
app.use(contextmenu)
app.mount('#app')
