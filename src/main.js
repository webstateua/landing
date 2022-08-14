import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import App from '@/App.vue'
import router from '@/router'
import components from '@/components/UI'


const app = createApp(App)
const pinia = createPinia()

components.forEach(component => {
    app.component(component.__name || component.name, component)
})


pinia.use(piniaPersist)
app.use(pinia)
app.use(router)

app.mount('#app')
