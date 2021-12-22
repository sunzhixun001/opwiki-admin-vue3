import { createApp } from 'vue'
import App from './App'
import router from './routers'
import { Button, Layout, Menu, Breadcrumb } from 'ant-design-vue'

import '@/styles/global.less'

const app = createApp(App)

app.use(router)
app.use(Layout)
app.use(Button)
app.use(Menu)
app.use(Breadcrumb)

app.mount('#app')
