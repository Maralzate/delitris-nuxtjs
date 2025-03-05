<template>
    <div class="container mx-auto w-full sm:pt-4 md:pt-8">
        <Menubar :model="items">
            <template #start>
                <img class="h-8 w-auto" src="/images/Delitris-name-mid.png"
              alt="Delitris">
            </template>
            <template #item="{ item, props, hasSubmenu, root }">

                <a v-ripple class="flex items-center" v-bind="props.action" as="router-link" to="item.clic">
                    
                    <Icon :name="``+item.icon" size="1.6em" class="text-white " style="color: black" />
                    
                    <span class="ml-2">{{ item.label }}</span>
                    <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge"/>
                    <span v-if="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
                    <i v-if="hasSubmenu" :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
                </a>
            </template>
            <template #end>
                <div class="flex items-center gap-2">
                    <LocaleSwitcher />
                    <ColorSwitcher />
                    <!--
                    <UToggle size="lg" 
                        class="mr-1 top-2 border-tris-light",
                        on-icon="i-heroicons-sun-20-solid"
                        off-icon="i-heroicons-moon-16-solid"
                        color="tris"
                        v-model="selected1" v-on:click="setColorTheme()"/>
                        -->
                    <Avatar image="/images/Logo-Delitris-Circle.png" shape="circle" class="bg-white"/>
                </div>
            </template>
        </Menubar>
    </div>
</template>

<script setup lang="ts">

import { ref } from "vue"
import { useRouter } from 'vue-router'

const router = useRouter()

const selected1 = ref(false)

var selected2 = false


const setColorTheme = () => {
  if (selected2) {
    useColorMode().preference = 'light'
    console.log("light Color"+ useColorMode().preference)
    selected2 = false
  } else if (selected2 === false) {
    useColorMode().preference = 'dark'
    console.log("light Color"+useColorMode().preference)
    selected2 = true
  } else {
    useColorMode().preference = 'sepia'
    console.log("system")
  }
}

const items = ref([
    {
        label: 'Home',
        icon: 'solar:home-smile-angle-broken',
        command: () => {
            router.push('/');
        }
    },
    {
        label: 'Horneados',
        icon: 'solar:chef-hat-broken',
        command: () => {
            router.push('/bakery');
        }
    },
    {
        label: 'Tortas',
        icon: 'akar-icons:cake',
        command: () => {
            router.push('/cakes');
        }
    },
    {
        label: 'Congelados',
        icon: 'solar:snowflake-line-duotone',
        command: () => {
            router.push('/frozen');
        }
    },
    {
        label: 'Nutrición',
        icon: 'solar:clipboard-list-linear',
        items: [
        {
                label: 'Vegetales',
                icon: 'icon-park-outline:vegetables',
                items: [
                    {
                        label: 'Espinacas',
                        icon: 'fluent:leaf-three-16-regular',
                        badge: 2
                    },
                    {
                        label: 'Zanahoria',
                        icon: 'ph:carrot',
                        badge: 3
                    }
                ]
            },
            {
                label: 'Harinas',
                icon: 'tabler:paper-bag',
                shortcut: '⌘+U'
            },
            {
                separator: true
            },
            {
                label: 'Proteinas',
                icon: 'fluent-emoji-high-contrast:cut-of-meat',
                items: [
                    {
                        label: 'Pollo',
                        icon: 'fluent-emoji-high-contrast:poultry-leg',
                        badge: 2
                    },
                    {
                        label: 'Cerdo',
                        icon: 'fluent-emoji-high-contrast:meat-on-bone',
                        badge: 3
                    }
                ]
            }
        ]
    },
    {
        label: 'Contáctenos',
        icon: 'solar:mailbox-line-duotone',
        badge: 3,
        command: () => {
            router.push('/contact');
        }
    }
]);
</script>