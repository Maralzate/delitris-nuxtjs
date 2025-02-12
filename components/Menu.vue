<template>
  <nav class="container mx-auto">
    <div class="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <UDropdown class="p" :items="menu_mobile" :popper="{ placement: 'bottom-start' }">
            <button type="button"
              class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu" aria-expanded="true">
              <span class="absolute -inset-0.5"></span>
              <span class="sr-only">Open main menu</span>
              <!--
                  Icon when menu is closed.
  
                  Menu open: "hidden", Menu closed: "block"
              -->
              <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <!--
                  Icon when menu is open.
  
                  Menu open: "block", Menu closed: "hidden"
              -->
              <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </UDropdown>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <img class="h-8 w-auto" src="/images/Delitris-name-mid.png"
              alt="Delitris">
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <NuxtLink :to="{name: 'index' }" active-class="bg-tris text-green-50 rounded-md px-3 py-2 text-sm font-medium"
                class=" hover:bg-tris-light hover:text-tris rounded-md px-3 py-2 text-sm font-medium">{{ $t('navHome') }} </NuxtLink>
              <NuxtLink to="/bakery" active-class="bg-tris text-green-50 rounded-md px-3 py-2 text-sm font-medium" 
                class="hover:bg-tris-light hover:text-tris rounded-md px-3 py-2 text-sm font-medium">{{ $t('navBakery') }}</NuxtLink>
              <NuxtLink to="/cake" active-class="bg-tris text-green-50 rounded-md px-3 py-2 text-sm font-medium" 
                class=" hover:bg-tris-light hover:text-tris rounded-md px-3 py-2 text-sm font-medium">{{ $t('navCake') }}</NuxtLink>
              <NuxtLink to="/frozen" active-class="bg-tris text-green-50 rounded-md px-3 py-2 text-sm font-medium" 
                class=" hover:bg-tris-light hover:text-tris rounded-md px-3 py-2 text-sm font-medium">{{ $t('navFrozen') }}</NuxtLink>
              <NuxtLink to="/contact" active-class="bg-tris text-green-50 rounded-md px-3 py-2 text-sm font-medium"
                class=" hover:bg-tris-light hover:text-tris rounded-md px-3 py-2 text-sm font-medium">{{ $t('navContact') }}</NuxtLink>

                <!--
                  Set Color Them

                    3 ways to choose the color theme: UDropdown, UButton, Utoggle 
                --> 

              
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          

          <!-- Profile dropdown -->

          <div class="flex flex-wrap  ">
            <UToggle size="lg" 
                class="mr-1 top-2 border-tris-light",
                on-icon="i-heroicons-sun-20-solid"
                off-icon="i-heroicons-moon-16-solid"
                color="tris"
                v-model="selected1" v-on:click="setColorTheme()" />
            
            <UDropdown class="px-2 mb-4 " :items="language" :popper="{ placement: 'bottom-start' }">
              <UButton color="white" label="" trailing-icon="i-heroicons-chevron-down-20-solid">{{ locale }}</UButton>
            </UDropdown>
          </div>

        </div>
      </div>
    </div>
  </nav>

</template>

<script setup lang="ts">
import type { isFunction } from '@vue/shared';

const { locale, setLocale } = useI18n()

const language = [
  [{
    label: 'English',
    value: 'English',
    click: () => {
      //set English language.
      setLocale('en')
    }
  }], [{
    label: 'Español',
    value: 'Español',
    click: () => {
      // set Spanish language.
      setLocale('es')
    }
  }]]

const colorMode = useColorMode()

const selected1 = ref(false)

var selected2 = false


const setColorTheme = () => {
  if (selected2) {
    colorMode.preference = 'light'
    console.log("light Color")
    selected2 = false
  } else if (selected2 === false) {
    colorMode.preference = 'dark'
    console.log("light Color")
    selected2 = true
  } else {
    colorMode.preference = 'sepia'
    console.log("system")
  }
}

const menu_mobile = [
  [{
    label: 'Home',
    value: 'Home',
    click: () => {
      location.href= '/'
    }
  }], [{
    label: 'Horneados',
    value: 'Horneados',
    click: () => {
      location.href= '/bakery'
    }
  }], [{
    label: 'Tortas',
    value: 'Tortas',
    click: () => {
      location.href= '/cake'
    }
  }], [{
    label: 'Congelados',
    value: 'Congelados',
    click: () => {
      location.href= '/frozen'
    }
  }], [{
    label: 'contact',
    value: 'contact',
    click: () => {
      location.href= '/contact'
    }
  }]]

</script>
