<template>
    <UButton
      :icon="colorMode.value === 'dark' ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
      color="tris"
      variant="ghost"
      aria-label="Cambiar tema"
      @click="toggleColorMode"
    />
  </template>
  
  <script setup>
  const colorMode = useColorMode()
  
  const toggleColorMode = () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
  </script> 