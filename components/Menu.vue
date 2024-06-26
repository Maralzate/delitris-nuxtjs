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

          <div class="relative ml-3">
            <UToggle size="lg" 
                class="mr-2 top-2",
                on-icon="i-heroicons-sun-20-solid"
                off-icon="i-heroicons-moon-16-solid"
                color="tris"
                v-model="selected1" v-on:click="setColorTheme()" />
            
            <UDropdown class="px-2 mb-4 " :items="language" :popper="{ placement: 'bottom-start' }">
              <UButton color="white" label="" trailing-icon="i-heroicons-chevron-down-20-solid">{{ locale }}</UButton>
            </UDropdown>
            <UDropdown class="top-3" :items="settings" :popper="{ placement: 'bottom-start' }">
              <UAvatar src="https://tse3.mm.bing.net/th/id/OIG3.pzJ6RhRTp1Br3nJXouwS?pid=ImgGn" />
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

const color_mode = [
  [{
    label: 'System',
    value: 'system',
    click: () => {
      // set Spanish language.
      colorMode.preference = 'system'
    }
  }],
  [{
    label: 'light',
    value: 'light',
    click: () => {
      //set English language.
      colorMode.preference = 'light'
    }
  }], [{
    label: 'Dark',
    value: 'dark',
    click: () => {
      // set Spanish language.
      colorMode.preference = 'dark'
    }
  }], [{
    label: 'Sepia',
    value: 'sepia',
    click: () => {
      // set Spanish language.
      colorMode.preference = 'sepia'
    }
  }]
]

const setColorTheme = () => {
  if (selected2) {
    useColorMode().preference = 'light'
    console.log("light Color")
    selected2 = false
  } else if (selected2 === false) {
    useColorMode().preference = 'dark'
    console.log("light Color")
    selected2 = true
  } else {
    useColorMode().preference = 'sepia'
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
    label: 'Decks',
    value: 'Info',
    click: () => {
      location.href= '/decks'
    }
  }], [{
    label: 'Info',
    value: 'Info',
    click: () => {
      location.href= '/contact'
    }
  }]]

const settings = [
  [{
    label: 'Your Profile',
    value: 'Profile',
    click: () => {
      //set English language.
    }
  }], [{
    label: 'Settings',
    value: 'settings',
    click: () => {
      //set English language.
    }
  }], [{
    label: 'Sign Out',
    value: 'sing-out',
    click: () => {
      // set Spanish language.
    }
  }]]

</script>
