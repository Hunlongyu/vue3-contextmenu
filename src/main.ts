import { createApp } from 'vue'
import App from './App.vue'
import contextmenu from './index'
// import contextmenu from 'vue3-contextmenu'
const app = createApp(App)
app.use(contextmenu)
app.mount('#app')
