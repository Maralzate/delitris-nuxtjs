// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    "@nuxtjs/i18n",
    '@pinia/nuxt',
    'nuxt-swiper',
    '@primevue/nuxt-module',
    'nuxt-gtag',
    'nuxt-icon'
  ],
  css: ['~/assets/css/main.css'],

  gtag: {
    id: 'G-YSFP18J702',
    },

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