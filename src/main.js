import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';

const pinia = createPinia()




 const app = createApp(App)
 app.use(router)
 app.use(bootstrap)
 app.use(pinia)
 app.mount('#app')