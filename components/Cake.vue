<template>
    <h2  class="text-3xl text-tris-dim dark:text-tris-soft">{{ $t('cakeCom') }}</h2>
    <div class="flex flex-nowrap overflow-x-auto  my-8">
        <Card v-for="card in productA" :key="card.id" :="card"> </Card>
    </div>
    
</template>

<script setup lang="ts">
    import { productA } from '~/data/product-es.json'
</script>