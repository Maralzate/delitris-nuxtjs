<template>
    <h2  class="text-3xl text-tris-dim dark:text-tris-soft">{{ $t('frozenCom') }}</h2>
    <div class="flex flex-nowrap overflow-x-auto  my-8">
        <Card v-for="card in productC" :key="card.id" :="card"> </Card>
    </div>
    
</template>

<script setup lang="ts">
    import { productA , productB, productC } from '~/data/product-es.json'
</script>