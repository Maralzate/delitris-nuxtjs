// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/color-mode', '@nuxtjs/tailwindcss', "@nuxtjs/i18n", '@pinia/nuxt', 'nuxt-icon','nuxt-swiper','@primevue/nuxt-module'],
  css: ['~/assets/css/main.css'],

  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
            darkModeSelector: 'ligth'
        }
      }
    }
  },

  icon: {
    serverBundle: {
      collections: ['uil', 'solar'] 
    }
  },

  colorMode: {
    classSuffix: ''
  },

  compatibilityDate: '2025-02-11'
})