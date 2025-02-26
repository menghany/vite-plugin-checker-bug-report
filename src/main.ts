import router, { setupRouter } from '@/router'
import { setupStore } from '@/store'
import App from './App.vue'
import '@/styles'

async function bootstrap() {
  const app = createApp(App)
  setupStore(app)
  setupRouter(app)
  await router.isReady()
  app.mount('#app')
}

bootstrap()
