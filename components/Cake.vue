<template>
    <h2>Pet Cake</h2>
    <div class="flex flex-nowrap overflow-x-auto  my-8">
        <Card v-for="card in productA" :key="card.id" :="card"> </Card>
    </div>
    
</template>

<script setup lang="ts">
    import { productA } from '~/data/product-es.json'
</script>