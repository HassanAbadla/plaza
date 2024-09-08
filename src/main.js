import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import './axios'
import router from './router'
import store from './store'
import('./store/subs')
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

// const app = createApp(App).use(router).use(store)
createApp(App).use(router).use(store).component("v-select", vSelect).mount('#app')
// app.use(router)
// app.use(store)

// app.mount('#app')
