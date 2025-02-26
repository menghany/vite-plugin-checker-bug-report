import type { App } from 'vue'

// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createPinia } from 'pinia'

const store = createPinia()

export function setupStore(app: App<Element>) {
  // store.use(piniaPluginPersistedstate)
  app.use(store)
}

export { store }
