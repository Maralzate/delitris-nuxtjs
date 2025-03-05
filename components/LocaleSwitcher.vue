<!-- components/LanguageToggleSwitch.vue -->
<template>
    <div class="flex items-center gap-2 py-1 px-2 rounded-full bg-gray-100 dark:bg-gray-800">
      <span 
        class="flex items-center text-sm cursor-pointer" 
        :class="{ 'text-tris font-bold': currentLocale === 'en', 'text-gray-500': currentLocale !== 'en' }"
        @click="changeLanguage('en')"
      >
        <UIcon name="i-twemoji-flag-united-kingdom" class="mr-1" />
        EN
      </span>
      <UToggle
        v-model="isSpanish"
        @update:model-value="handleToggle"
        color="tris"
        size="sm"
      />
      <span 
        class="flex items-center text-sm cursor-pointer" 
        :class="{ 'text-tris font-bold': currentLocale === 'es', 'text-gray-500': currentLocale !== 'es' }"
        @click="changeLanguage('es')"
      >
        <UIcon name="i-twemoji-flag-spain" class="mr-1" />
        ES
      </span>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, watch, onMounted } from 'vue'
  import { useI18n } from 'vue-i18n'
  
  const { locale } = useI18n()
  const currentLocale = computed(() => locale.value)
  const isSpanish = ref(currentLocale.value === 'es')
  
  function handleToggle(value) {
    changeLanguage(value ? 'es' : 'en')
  }
  
  function changeLanguage(lang) {
    locale.value = lang
    isSpanish.value = lang === 'es'
    localStorage.setItem('userLanguage', lang)
  }
  
  // Inicializar desde localStorage si existe
  onMounted(() => {
    const savedLanguage = localStorage.getItem('userLanguage')
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es')) {
      locale.value = savedLanguage
      isSpanish.value = savedLanguage === 'es'
    }
  })
  </script>