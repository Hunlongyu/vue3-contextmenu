import { createApp } from 'vue'
import App from './App.vue'
import contextmenu from './index'
const app = createApp(App)
app.use(contextmenu)
app.mount('#app')
