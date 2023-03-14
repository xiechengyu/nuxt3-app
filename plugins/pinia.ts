import piniaPluginPersistedstate from '@pinia-plugin-persistedstate/nuxt'
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.$pinia.use(piniaPluginPersistedstate)
})