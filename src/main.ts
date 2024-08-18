import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import './assets/css/plus-jakarta-sans.css'
import './assets/css/box-icons.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
