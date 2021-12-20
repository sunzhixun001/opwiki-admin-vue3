import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import { Button, Layout, Menu  } from 'ant-design-vue'

const app = createApp(App)

app.use(router)
app.use(Layout)
app.use(Button)
app.use(Menu)

app.mount('#app')
