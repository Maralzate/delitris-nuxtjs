<template>
    <h2 class="text-3xl text-tris-dim dark:text-tris-soft">{{ $t('bakeryCom') }}</h2>
    <div class="flex flex-nowrap overflow-x-auto  my-8">
        <Card class="flex-shrink-0" v-for="card in productB" :key="card.id" :="card"></Card>
    </div>
    
     
</template>

<script setup lang="ts">
    import { productA , productB } from '~/data/product-es.json'
    import Carousel from 'primevue/carousel';
</script>