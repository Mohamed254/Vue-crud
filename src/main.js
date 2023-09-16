import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Toaster from 'v-toaster'



 
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'v-toaster/dist/v-toaster.css'
 
// optional set default imeout, the default is 10000 (10 seconds).



const app = createApp(App)

app.use(router)
// app.use(Toaster, {timeout: 3000})

app.mount('#app')
