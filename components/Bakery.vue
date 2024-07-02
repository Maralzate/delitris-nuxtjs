<template>

    <div class="flex flex-nowrap overflow-x-auto  my-8">
        <Card class="flex-shrink-0" v-for="card in productB" :key="card.id" :="card"></Card>
    </div>
    
     
</template>

<script setup lang="ts">
    import { productA , productB } from '~/data/product-es.json'
    import Carousel from 'primevue/carousel';
</script>