import { createApp } from 'vue'
import App from './App'
import router from './routers'
import store from './store'
import { Button, Layout, Menu, Breadcrumb, Table  } from 'ant-design-vue'

import '@/styles/global.less'

const app = createApp(App)

app.use(router)
app.use(store)

app.use(Layout)
app.use(Button)
app.use(Menu)
app.use(Breadcrumb)
app.use(Table)

app.mount('#app')
