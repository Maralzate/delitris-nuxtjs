// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/color-mode', '@nuxtjs/tailwindcss', "@nuxtjs/i18n", '@pinia/nuxt', 'nuxt-icon', 'nuxt-primevue'],
  colorMode: {
    classSuffix: ''
  }
})