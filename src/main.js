import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import { Button } from 'ant-design-vue'

const app = createApp(App)

app.use(router)
app.use(Button)

app.mount('#app')
