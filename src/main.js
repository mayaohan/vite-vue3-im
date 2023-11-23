import { createApp } from 'vue'
import '@/assets/main.scss'
import App from './App.vue'
// import MyPlugin from '../lib/index.es'
// import MyPlugin from 'vite-vue3-im'
import MyPlugin from './'
console.log(MyPlugin)
const app = createApp(App)
app.use(MyPlugin)
// MyPlugin.install(app)
app.mount('#app')
