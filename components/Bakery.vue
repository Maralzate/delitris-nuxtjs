<template>
    <div class="flex flex-nowrap overflow-x-auto  my-8">
        <Card v-for="card in productB" :key="card.id" :="card"> </Card>
    </div>
    
</template>

<script setup lang="ts">
    import {productB } from '~/data/product-es.json'
</script>