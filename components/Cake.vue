<template>
    <div >
        <Carousel :value="productA" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
            <template #item="slotProps">
                <div class="border border-surface-200 dark:border-surface-700 rounded m-2  p-4">
                    <div class="mb-4">
                        <div class="relative mx-auto">
                            <nuxt-link :to="{name:'cakes-slug', params: {slug: slotProps.data.slug}}">
                                <img :src="'/images/' + slotProps.data.image1 +'.png'" :alt="slotProps.data.title" class="w-full rounded" />
                            </nuxt-link>
                            <Tag  class="absolute" style="left:5px; top: 5px"/>
                        </div>
                    </div>
                    <div class="mb-4 font-medium text-2xl text-tris-dim dark:text-tris-soft">{{ slotProps.data.title }}</div>
                    <div class="mb-4 font-medium dark:text-tris-light">{{ slotProps.data.ingredients }}</div>
                    <div class="flex justify-between items-center">
                        <div class="mt-0 font-semibold text-2xl dark:text-tris-soft">{{ slotProps.data.price }}</div>
                        <div class="flex justify-center items-center " >
                            <div >
                                <div v-if="slotProps.data.animalType != 'both'">
                                    <UTooltip :text="`Ideal Para ${slotProps.data.animalType}`" :popper="{ arrow: true }">
                                    <ULink
                                    :to="{name:'cakes-slug', params: {slug: slotProps.data.slug}}"
                                    active-class="text-tris bg-tris"
                                    inactive-class="rounded-lg text-white ml-2 px-2 py-2 bg-tris border-tris hover:bg-logolight hover:border-logolight dark:hover:bg-logolight dark:hover:border-logolight"
                                >
                                        <Icon v-if="slotProps.data.animalType === 'perros'" name="tabler:dog"  size="2em"/>
                                        <Icon v-else name="tabler:cat"  size="2em" />
                                    </ULink>
                                </UTooltip>
                                </div>
                                <div v-else class="">
                                    <UTooltip text="Ideal Para Perros & Gatos" :popper="{ arrow: true }">
                                    <ULink
                                    :to="{name:'cakes-slug', params: {slug: slotProps.data.slug}}"
                                    active-class="text-tris bg-tris"
                                    inactive-class="flex items-center rounded-lg text-white ml-2 px-2 py-2 bg-tris border-tris hover:bg-logolight hover:border-logolight dark:hover:bg-logolight dark:hover:border-logolight"
                                >
                                        <Icon name="tabler:cat" class="inline-block align-middle" size="2em"/>
                                        <Icon name="tabler:dog" class="inline-block align-middle" size="2em"/>
                                    </ULink>
                                </UTooltip>
                                </div>
                            </div>
                            <div>
                                <ULink
                                    to="https://wa.me/573332850072"

                                >
                                    <Icon name="mdi:whatsapp" class="rounded-lg text-white ml-2 px-2 py-3 bg-tris border-tris hover:bg-logolight hover:border-logolight dark:hover:bg-logolight dark:hover:border-logolight" size="3em"/>
                                </ULink>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
    
    
</template>

<script setup lang="ts">
    import {productA} from '~/data/product-es.json'
    import { ref, onMounted } from "vue";


const products = ref();
const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 4,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);

</script>