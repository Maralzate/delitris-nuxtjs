<script setup lang="ts">

import type { Product } from '~/types/product'
const route = useRoute()


const {data: productA } = await useFetch<Product>('~/data/product-es.json',)
console.log(route.params.slug)

const product = productA.value



const datos = ref(await product)




</script>

<template>
  <div>
    <h1>{{route.params.slug }}</h1>
    <pre>ss {{ datos }}</pre>
  
    <pre>WW {{ productA }}</pre>
  </div>
</template>

<style scoped></style>