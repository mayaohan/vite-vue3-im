import { createApp } from 'vue'
import '@/assets/main.scss'
import ElementPlus from 'element-plus'
import App from './App.vue'
import { mockStart } from '../mock/index';
// import MyPlugin from '../lib/index.es'
// import '../lib/style.css'
// import MyPlugin from 'vite-vue3-im'
import MyPlugin from './'
console.log(MyPlugin)
const app = createApp(App)
const { VITE_MOCK } = import.meta.env || {};
if (VITE_MOCK === 'true') {
  console.log('已开启数据mock！', import.meta.env);
  mockStart();
}
app.use(ElementPlus)
app.use(MyPlugin)
// MyPlugin.install(app)
app.mount('#app')